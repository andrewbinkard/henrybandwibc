import { FC } from "react";
import styles from "./Intro.module.scss";
import PageHeader from "../PageHeader";
import { INTRO_HEADER_TEXT } from "../../Pages/const";

const Intro: FC = () => {
  return (
    <div className={styles.introContainer}>
      <PageHeader headerText={INTRO_HEADER_TEXT} />
      <h2>Honors Band</h2>
      <p>Western International Band Clinic</p>
      <p>Friday, November 21, 2025</p>
      <p>7:30 PM | Double Tree Hotel | Seattle, WA</p>
    </div>
  );
};

export default Intro;
