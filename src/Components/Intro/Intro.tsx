import { FC } from "react";
import styles from "./Intro.module.scss";

const Intro: FC = () => {
  return (
    <div className={styles.introContainer}>
      <h1>Henry Middle School</h1>
      <h2>Honors Band</h2>
      <p>Western International Band Clinic</p>
      <p>Friday, November 21, 2025</p>
      <p>7:30 PM | Double Tree Hotel | Seattle, WA</p>
    </div>
  );
};

export default Intro;
