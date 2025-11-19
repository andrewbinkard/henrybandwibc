import { FC } from "react";
import { henryPreviousBandInfo } from "./const";
import AboutProgramCard from "../../Components/AboutProgramCard";
import styles from "./HonorsBand2425.module.scss";
import TiltDivider from "../../Components/TiltDivider";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import { THANK_YOU_HEADER_TEXT } from "../const";

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
        <PageHeader headerText={THANK_YOU_HEADER_TEXT} />
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
