import { useQuery } from "@tanstack/react-query";

export const useLeagueData = () => {
  const {
    data: ddVersion,
    isPending: isVersionPending,
    isError: isVersionError,
    error: versionError,
  } = useQuery({
    queryKey: ["ddVersion"],
    queryFn: async () => {
      const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
      if (!res.ok) throw new Error("There was a problem fetching the latest datadragon version.");
      const data = await res.json();
      return data[0];
    },
  });

  const {
    data: datasetChampions,
    isPending: isChampionsPending,
    isError: isChampionsError,
    error: championsError,
  } = useQuery({
    queryKey: ["datasetChampions"],
    queryFn: async () => {
      const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddVersion}/data/en_US/champion.json`);
      if (!res.ok) throw new Error("There was a problem fetching the champion database.");
      const data = await res.json();
      return data.data;
    },
    enabled: !!ddVersion,
  });

  const {
    data: datasetRunes,
    isPending: isRunesPending,
    isError: isRunesError,
    error: runesError,
  } = useQuery({
    queryKey: ["datasetRunes"],
    queryFn: async () => {
      const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddVersion}/data/en_US/runesReforged.json`);
      if (!res.ok) throw new Error("There was a problem fetching the runes database.");
      return res.json();
    },
    enabled: !!ddVersion,
  });

  const {
    data: datasetSumSpells,
    isPending: isSumSpellsPending,
    isError: isSumSpellsError,
    error: sumSpellsError,
  } = useQuery({
    queryKey: ["datasetSumSpells"],
    queryFn: async () => {
      const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddVersion}/data/en_US/summoner.json`);
      if (!res.ok) throw new Error("There was a problem fetching the summoner spells database.");
      const data = await res.json();
      return data.data;
    },
    enabled: !!ddVersion,
  });
  const {
    data: datasetItems,
    isPending: isItemsPending,
    isError: isItemsError,
    error: itemsError,
  } = useQuery({
    queryKey: ["datasetItems"],
    queryFn: async () => {
      const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddVersion}/data/en_US/item.json`);
      if (!res.ok) throw new Error("There was a problem fetching the items database.");
      const data = await res.json();
      return data.data;
    },
    enabled: !!ddVersion,
  });

  const {
    data: datasetModes,
    isPending: isModesPending,
    isError: isModesError,
    error: modesError,
  } = useQuery({
    queryKey: ["datasetModes"],
    queryFn: async () => {
      const res = await fetch("https://static.developer.riotgames.com/docs/lol/queues.json");
      if (!res.ok) throw new Error("There was a problem fetching the gamemodes database.");
      return res.json();
    },
  });

  const {
    data: datasetArena,
    isPending: isArenaPending,
    isError: isArenaError,
    error: arenaError,
  } = useQuery({
    queryKey: ["datasetArena"],
    queryFn: async () => {
      const res = await fetch("https://raw.communitydragon.org/latest/cdragon/arena/en_us.json");
      if (!res.ok) throw new Error("There was a problem fetching the arena database.");
      const data = await res.json();
      return data.augments;
    },
  });

  // Combine all pending operation reports. If any are pending, anyPlayerDataPending will be true
  const anyDatasetPending =
    isVersionPending ||
    isChampionsPending ||
    isRunesPending ||
    isSumSpellsPending ||
    isItemsPending ||
    isModesPending ||
    isArenaPending;

  // Combine all isError operations. If any errors, anyPlayerDataErrors will be true.
  const anyDatasetErrors =
    isVersionError ||
    isChampionsError ||
    isRunesError ||
    isSumSpellsError ||
    isItemsError ||
    isModesError ||
    isArenaError;

  // Combine all errors
  const datasetErrors = [
    versionError?.message,
    championsError?.message,
    runesError?.message,
    isSumSpellsError?.message,
    itemsError?.message,
    modesError?.message,
    arenaError?.message,
  ].filter((message) => message !== undefined);

  return {
    ddVersion,
    datasetChampions,
    datasetModes,
    datasetRunes,
    datasetSumSpells,
    datasetItems,
    datasetArena,
    anyDatasetPending,
    anyDatasetErrors,
    datasetErrors,
  };
};
