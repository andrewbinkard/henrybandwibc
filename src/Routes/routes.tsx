import { RouteObject } from "react-router-dom";
import LandingPage from "../Pages/MainPage/MainPage/MainPage";
import About from "../Pages/AboutPage";
import MusiciansPage from "../Pages/MusiciansPage/MusiciansPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/musicians",
    element: <MusiciansPage />,
  },
];
