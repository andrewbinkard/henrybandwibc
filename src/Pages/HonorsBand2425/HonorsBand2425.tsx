import { FC } from "react";
import { henryPreviousBandInfo } from "./const";
import AboutProgramCard from "../../Components/AboutProgramCard";
import styles from "./HonorsBand2425.module.scss";
import TiltDivider from "../../Components/TiltDivider";
import Footer from "../../Components/Footer";

const HonorsBand2425: FC = () => {
  const { programName, programInfo, imgSrc, roster } = henryPreviousBandInfo;
  return (
    <>
      <TiltDivider
        topColor={"var(--program-green)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-orange)"}
      />
      <div className={styles.container}>
        <h1>Thank You!</h1>
        <AboutProgramCard
          programName={programName}
          programInfo={programInfo}
          imgSrc={imgSrc}
          roster={roster}
        />
      </div>
      <Footer
        backgroundColor="var(--program-green)"
        topDividerColor="var(--program-orange)"
        bottomDividerColor="var(--program-green)"
      />
    </>
  );
};

export default HonorsBand2425;
