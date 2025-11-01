import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";

const App: FC<{ routes: RouteObject[] }> = ({ routes }) => {
  const element = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      {element}
    </>
  );
};

export default App;
