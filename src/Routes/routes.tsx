import { RouteObject } from "react-router-dom";
import LandingPage from "../Pages/MainPage/MainPage/MainPage";
import AboutProgramPage from "../Pages/AboutProgram";
import MusiciansPage from "../Pages/MusiciansPage/MusiciansPage";
import ConductorsPage from "../Pages/ConductorsPage/ConductorsPage";
import PrivateLessonFacultyPage from "../Pages/PrivateLessonFacultyPage/PrivateLessonFacultyPage";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutProgramPage />,
  },
  {
    path: "/musicians",
    element: <MusiciansPage />,
  },
  {
    path: "/conductors/:directorName?",
    element: <ConductorsPage />,
  },
  {
    path: "/private-lesson-faculty",
    element: <PrivateLessonFacultyPage />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  },
];
