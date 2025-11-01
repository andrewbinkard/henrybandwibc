import { RouteObject } from "react-router-dom";
import LandingPage from "../Pages/MainPage/MainPage/MainPage";
import About from "../Pages/MainPage/About";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
