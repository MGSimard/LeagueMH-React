import { useQuery } from "@tanstack/react-query";
import { useRegionDictionary } from "../hooks/useRegionDictionary";

/**
 * Yes I'm aware that this development API key is exposed.
 *
 * No I will not risk a multi-thousand dollar bill with netlify,
 * lambda, cloudflare, vercel or firebase if this random learning
 * project gets DDOS'd; causing overages while using their "free"
 * cloud/serverless functions to proxy my API calls and hide a
 * useless key that I can refresh in 10 seconds.
 *
 * https://news.ycombinator.com/item?id=39520776
 * Therefore, not setting up proxy server or functions to hide key.
 */
const apiKey = `api_key=RGAPI-53bbaba1-8281-43d8-80ed-6877aa62e064`;

export const usePlayerData = (regionPrefix, summoner) => {
  // Split the hyphen-separated summoner name and tag
  const [summonerName, summonerTag] = summoner.split("-");

  // Get server shard(NA1), server cluster(americas), full region name(North America)
  const [shard, cluster, fullRegion] = useRegionDictionary(regionPrefix);

  const {
    data: targetIdentity,
    isPending: isIdentityPending,
    error: identityError,
    isError: isIdentityError,
  } = useQuery({
    queryKey: ["targetIdentity", summonerName, summonerTag],
    queryFn: async () => {
      const res = await fetch(
        `https://${cluster}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${summonerTag}?${apiKey}`
      );
      if (!res.ok) throw new Error("There was a problem fetching summoner.");
      return res.json();
    },
  });

  const {
    data: targetProfile,
    isPending: isProfilePending,
    isError: isProfileError,
    error: profileError,
  } = useQuery({
    queryKey: ["targetProfile", summonerName, summonerTag],
    queryFn: async () => {
      const res = await fetch(
        `https://${shard}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${targetIdentity.puuid}?${apiKey}`
      );
      if (!res.ok) throw new Error("There was a problem fetching profile data.");
      return res.json();
    },
    enabled: !!targetIdentity,
  });

  const {
    data: targetRank,
    isPending: isRankPending,
    isError: isRankError,
    error: rankError,
  } = useQuery({
    queryKey: ["targetRank", summonerName, summonerTag],
    queryFn: async () => {
      const res = await fetch(
        `https://${shard}.api.riotgames.com/lol/league/v4/entries/by-summoner/${targetProfile.id}?${apiKey}`
      );
      if (!res.ok) throw new Error("There was a problem fetching rank data.");
      return res.json();
    },
    enabled: !!targetProfile,
  });

  const {
    data: matchIdList,
    isPending: isMatchIdListPending,
    isError: isMatchIdListError,
    error: matchIdListError,
  } = useQuery({
    queryKey: ["matchIdList", summonerName, summonerTag],
    queryFn: async () => {
      const res = await fetch(
        `https://${cluster}.api.riotgames.com/lol/match/v5/matches/by-puuid/${targetIdentity.puuid}/ids?start=0&count=10&${apiKey}`
      );
      if (!res.ok) throw new Error("There was a problem fetching match history.");
      return res.json();
    },
    enabled: !!targetIdentity,
  });
  const {
    data: matchDataArray,
    isPending: isMatchDataArrayPending,
    isError: isMatchDataArrayError,
    error: matchDataArrayError,
  } = useQuery({
    queryKey: ["matchDataArray", summonerName, summonerTag],
    queryFn: async () => {
      return await Promise.all(
        matchIdList.map(async (matchId) =>
          fetch(`https://${cluster}.api.riotgames.com/lol/match/v5/matches/${matchId}?${apiKey}`)
            .then((res) => res.json())
            .catch((error) => {
              console.error(`Fetch failed for matchId: ${matchId}`, error);
              return null;
            })
        )
      );
    },
    enabled: !!matchIdList,
  });

  // Combine all pending operation reports. If any are pending, anyPlayerDataPending will be true
  const anyPlayerDataPending =
    isIdentityPending || isProfilePending || isRankPending || isMatchIdListPending || isMatchDataArrayPending;
  // Combine all isError operations. If any errors, anyPlayerDataErrors will be true.
  const anyPlayerDataErrors =
    isIdentityError || isProfileError || isRankError || isMatchIdListError || isMatchDataArrayError;

  // Combine all errors
  const playerDataErrors = [
    identityError?.message,
    profileError?.message,
    rankError?.message,
    matchIdListError?.message,
    matchDataArrayError?.message,
  ].filter((message) => message !== undefined);

  return {
    targetIdentity,
    targetProfile,
    targetRank,
    matchIdList,
    matchDataArray,
    anyPlayerDataPending,
    anyPlayerDataErrors,
    playerDataErrors,
    fullRegion,
  };
};
