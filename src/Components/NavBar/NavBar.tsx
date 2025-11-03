import { FC, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import HMSCircleLogo from "../../assets/Hawk_Fav_Icon.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  };

  // Manage scrolling when the menu state changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isMobileMenuOpen]);

  // Ensure the menu remains visible on orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      // Prevent any scrolling
      if (isMobileMenuOpen) {
        disableScroll();
      }

      // Ensure the menu is positioned at the top of the viewport
      window.scrollTo(0, 0);
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.navBarContainer}>
        <NavLink to="/">
          <img src={HMSCircleLogo} alt="Henry Logo" className={styles.logo} />
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/musicians"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Musicians
          </NavLink>
          <NavLink
            to="/conductors"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Conductors
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="/private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="/thank-you"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Thank You
          </NavLink>
        </div>

        <button
          className={styles.hamburgerMenu}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <Link
          to="/"
          onClick={toggleMobileMenu}
          className={styles.mobileLogoWrapper}
        >
          <img
            src={HMSCircleLogo}
            alt="Henry Logo"
            className={styles.mobileLogo}
          />
        </Link>

        <button
          className={styles.closeMenu}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <nav className={styles.mobileNavLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/musicians"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Musicians
          </NavLink>
          <NavLink
            to="/conductors"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Conductors
          </NavLink>
          <NavLink
            to="/private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/thank-you"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Thank You
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
