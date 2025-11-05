import { FC } from "react";
import styles from "./MainPageButtons.module.scss";
import { Link } from "react-router-dom";

const MainPageButtons: FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <h2>More Information</h2>
      <Link to={"private-lesson-faculty"}>
        <button className={styles.mainPageButton}>
          Private Lesson Faculty
        </button>
      </Link>
      <Link to={"about"}>
        <button className={styles.mainPageButton}>About</button>
      </Link>
      <Link to={"thank-you"}>
        <button className={styles.mainPageButton}>Thank You!</button>
      </Link>
    </div>
  );
};

export default MainPageButtons;
