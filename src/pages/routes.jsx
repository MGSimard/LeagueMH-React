import { Home } from "./HomePage";
import { Layout } from "../Layout";
import { Summoner } from "./SummonerPage";
import { NotFound } from "./NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/summoner/:regionPrefix/:summoner",
        element: <Summoner />,
      },
    ],
    errorElement: <NotFound />,
  },
];
