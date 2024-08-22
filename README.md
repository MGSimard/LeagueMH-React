<br/>
<div align="center">
  <h3 align="center">LoLMH.React</h3>
  <p align="center">
    React/Vite Query Project
    <br/>
    <br/>
    <a href="https://leaguemh-react.web.app/" target="_blank">View Live Project</a>  
  </p>
</div>

## About The Project

A recreation of my vanilla LoLCBL project, minus the CBL part, in React. Its only purpose is to fetch match histories of players across all League of Legends regions with public APIs. This project acts as practice with React, queries, and dynamic cdn asset fetching. As for the exposed API key, I'd rather deal with a public API's 50/min rate-limited key being exposed (which I can change in 10s) over the potential financial risks when utilizing Netlify, Vercel or Lambda's cloud functions. _(See https://news.ycombinator.com/item?id=39520776)_

If you have a free solution which does not require self-hosting a proxy server 24/7 or dealing with scam business models from companies like Netlify, feel free to reach out. Otherwise, I'll stick to exposing the key on this lightweight study project.

### Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [AccountV1, SummonerV4, LeagueV4, MatchV5 & SummonerV4 Riot APIs](https://developer.riotgames.com/apis)
- [DataDragon](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html)
- [CommunityDragon](https://www.communitydragon.org/)
- [Firebase Hosting](https://firebase.google.com/)

## Usage

As per the example on the app's landing page; select a region, enter a summoner name & tag then click fetch.
-> [https://leaguemh-react.web.app/](https://leaguemh-react.web.app/)

## Contact

MGSimard - g.marcgs@gmail.com
Project Link: [https://github.com/MGSimard/LeagueMH-React](https://github.com/MGSimard/LeagueMH-React)  
[@MGSimard on X](https://x.com/MGSimard)

For more info, view my portfolio at [mgsimard.github.io](https://mgsimard.github.io). Resume attached.
