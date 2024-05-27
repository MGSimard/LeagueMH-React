import { SearchComponent } from "../components/SearchComponent/SearchComponent";

export const Home = () => {
  return (
    <main className="home-main">
      <section className="search-section">
        <h2>SEARCH SUMMONER</h2>
        <small>&#40;Example: "North America", "Doublelift", "NA1"&#41;</small>
        <SearchComponent location={"home"} />
      </section>
      <section>
        <hr />
        <h2>ABOUT THIS PROJECT</h2>
        <ul className="feature-list">
          <li>
            Remake of my old Vanilla{" "}
            <a href="https://mgsimard.github.io/lolcbl/index.html" target="_blank">
              LoLCBL
            </a>{" "}
            project.
          </li>
          <li>
            Built on React v18.2.0 with Vite SWC, using the following libraries:
            <ul>
              <li>TanStack React Query v5</li>
              <li>React Router Dom v6.4</li>
            </ul>
          </li>
          <li>
            Uses AccountV1, SummonerV4, LeagueV4, MatchV5 &amp; SummonerV4 Riot APIs:{" "}
            <a href="https://developer.riotgames.com/apis" target="_blank">
              https://developer.riotgames.com/apis
            </a>
          </li>
          <li>
            Uses both{" "}
            <a href="https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html" target="_blank">
              DataDragon
            </a>{" "}
            &amp;{" "}
            <a href="https://www.communitydragon.org/" target="_blank">
              CommunityDragon
            </a>{" "}
            for datasets & CDN image asset distribution.
          </li>
          <li>
            Loosely follows the League of Legends{" "}
            <a href="https://brand.riotgames.com/en-us/league-of-legends/fundamentals/" target="_blank">
              branding guidelines & fundamentals
            </a>
            .
          </li>
        </ul>
      </section>
    </main>
  );
};
