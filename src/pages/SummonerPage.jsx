import { useParams } from "react-router-dom";
import { usePlayerData } from "../hooks/usePlayerData";
import { useLeagueData } from "../hooks/useLeagueData";
import { MatchCard } from "../components/MatchCard/MatchCard";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";
import { Spinner } from "../components/Spinner/Spinner";

export const Summoner = () => {
  // Get region prefix & summoner name from URL Params
  const { regionPrefix, summoner } = useParams();

  const {
    targetIdentity,
    targetProfile,
    targetRank,
    matchIdList,
    matchDataArray,
    anyPlayerDataPending,
    anyPlayerDataErrors,
    playerDataErrors,
    fullRegion,
  } = usePlayerData(regionPrefix, summoner);

  const {
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
  } = useLeagueData();

  const rankHandler = (resolvedRankData) => {
    if (resolvedRankData.length) {
      const checkSoloQueue = resolvedRankData.find((queue) => queue.queueType === "RANKED_SOLO_5x5");
      if (checkSoloQueue) {
        const { tier, rank, leaguePoints } = checkSoloQueue;
        return `${tier} ${rank} ${leaguePoints}LP (SOLO)`;
      }
      const checkFlexQueue = resolvedRankData.find((queue) => queue.queueType === "RANKED_FLEX_SR");
      if (checkFlexQueue) {
        const { tier, rank, leaguePoints } = checkFlexQueue;
        return `${tier} ${rank} ${leaguePoints}LP (FLEX)`;
      }
    }
    return "UNRANKED";
  };

  return (
    <main>
      <section>
        <h2>SUMMONER PROFILE</h2>
        <div className="profile-card">
          <div className="icon-container">
            <img
              src={
                ddVersion && targetProfile
                  ? `https://ddragon.leagueoflegends.com/cdn/${ddVersion}/img/profileicon/${targetProfile.profileIconId}.png`
                  : "/default.png"
              }
              alt="Profile Icon"
            />
            <small>{targetProfile && targetProfile.summonerLevel}</small>
          </div>
          <div className="profileTable-container">
            {anyPlayerDataPending && !anyPlayerDataErrors && " Loading..."}
            {anyPlayerDataErrors && ` There was a problem fetching summoner.${summoner && ` (${summoner})`}`}
            {targetIdentity && !anyPlayerDataPending && (
              <>
                <h3 className="pBold">
                  {targetIdentity.gameName} <span>#{targetIdentity.tagLine}</span>
                  {targetRank && <small className="pLabel">{rankHandler(targetRank)}</small>}
                </h3>
              </>
            )}
            <table className="profileTable">
              <tbody>
                <tr>
                  <th>Region</th>
                  <td>{fullRegion && fullRegion}</td>
                </tr>
                <tr>
                  <th>SummonerID</th>
                  <td>{targetProfile && !anyPlayerDataPending && targetProfile.id}</td>
                </tr>
                <tr>
                  <th>AccountID</th>
                  <td>{targetProfile && !anyPlayerDataPending && targetProfile.accountId}</td>
                </tr>
                <tr>
                  <th>PUUID</th>
                  <td>{targetProfile && !anyPlayerDataPending && targetProfile.puuid}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <SearchComponent location={"summoner"} />
        </div>
      </section>
      <section>
        <h2>MATCH HISTORY</h2>
        <div className="match-history">
          {/* Is loading, no errors */}
          {(anyDatasetPending || anyPlayerDataPending) && !anyDatasetErrors && !anyPlayerDataErrors && <Spinner />}
          {/*If there are any dataset errors, display the error but continue*/}
          {anyDatasetErrors || anyPlayerDataErrors
            ? datasetErrors.map((message) => <div key={message}>{message}</div>)
            : null}
          {/* If we have a valid match data array and finished fetching datasets render a matchcard for every match */}
          {matchDataArray &&
            !anyDatasetPending &&
            !anyDatasetErrors &&
            !anyPlayerDataPending &&
            !anyPlayerDataErrors &&
            matchDataArray.map((match) => (
              <MatchCard
                key={match.metadata.matchId}
                matchData={match}
                targetPlayer={targetIdentity.puuid}
                dataset={[
                  ddVersion,
                  datasetChampions,
                  datasetModes,
                  datasetRunes,
                  datasetSumSpells,
                  datasetItems,
                  datasetArena,
                ]}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

//
