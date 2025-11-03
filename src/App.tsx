import { FC, useEffect, useState } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import HenryGroupImage from "./assets/HMSFullGroupHeader.jpg";
import styles from "./App.module.scss";
import SeattleSkyline from "./Components/SeattleSkyline";

const App: FC<{ routes: RouteObject[] }> = ({ routes }) => {
  const element = useRoutes(routes);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setIsNavVisible(true);
      } else if (scrollTop < lastScrollTop) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.centeredLayout}>
      <ScrollToTop />

      {/* Global NavBar */}
      <div
        className={`${styles.navBarWrapper} ${
          isNavVisible ? styles.visible : styles.hidden
        }`}
      >
        <NavBar />
      </div>

      {/* Global Group Image - appears on all pages */}
      <div className={styles.imageContainer}>
        <img
          src={HenryGroupImage}
          alt="Henry Middle School Band Group"
          className={styles.groupImage}
        />
      </div>
      <div className={styles.skylineWrapper}>
        <SeattleSkyline
          fill={"var(--program-green)"}
          className={styles.skylineSVG}
        />
      </div>

      {/* Page Content */}
      {element}
    </div>
  );
};

export default App;
