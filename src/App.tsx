import { FC, useEffect, useState } from "react";
import { RouteObject, useLocation, useRoutes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import styles from "./App.module.scss";
import HenryGroupImage from "./assets/HMSFullGroupHeader.jpg";

const App: FC<{ routes: RouteObject[] }> = ({ routes }) => {
  const element = useRoutes(routes);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0; // Initialize to 0 to avoid hiding on first load

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        // Ensure the navbar is always visible when at the top of the page
        setIsNavVisible(true);
      } else if (scrollTop < lastScrollTop) {
        // User is scrolling up
        setIsNavVisible(true);
      } else {
        // User is scrolling down
        setIsNavVisible(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className={styles.centeredLayout}>
      <ScrollToTop />

      <div
        className={`${styles.navBarWrapper} ${
          isNavVisible ? styles.visible : styles.hidden
        }`}
      >
        <NavBar />
      </div>

      {/* Group Image */}
      <div className={styles.imageContainer}>
        <img
          src={HenryGroupImage}
          alt="Henry Group Image"
          className={styles.groupImage}
        />
      </div>
      {element}
    </div>
  );
};

export default App;
