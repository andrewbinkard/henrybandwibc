import { FC } from "react";
import AboutProgramCard from "../../Components/AboutProgramCard";
import { henryAboutProgramInfo } from "./const";
import Footer from "../../Components/Footer";
import styles from "./AboutProgramPage.module.scss";
import TiltDivider from "../../Components/TiltDivider";
import LISDDistrictPersonnel from "./LISDDistrictPersonnel";
import PageHeader from "../../Components/PageHeader";
import { ABOUT_HEADER_TEXT } from "../const";

const AboutProgramPage: FC = () => {
  return (
    <>
      <TiltDivider
        topColor="var(--program-green)"
        bandColor="var(--program-yellow)"
        bottomColor="var(--program-orange)"
      />
      <div className={styles.container}>
        <PageHeader headerText={ABOUT_HEADER_TEXT} />
        <div className={styles.cardContainer}>
          {henryAboutProgramInfo.map(({ programName, programInfo }, idx) => {
            return (
              <div className={styles.cardContainer} key={idx}>
                <AboutProgramCard
                  programName={programName}
                  programInfo={programInfo}
                  // imgSrc={imgSrc}
                  // imgSrc2={imgSrc2}
                />
              </div>
            );
          })}
        </div>
        <TiltDivider
          topColor="var(--program-orange)"
          bandColor="var(--program-yellow)"
          bottomColor="var(--program-green)"
        />
        <LISDDistrictPersonnel />
      </div>
      <Footer
        backgroundColor="var(--program-orange)"
        topDividerColor="var(--program-green)"
        bottomDividerColor="var(--program-orange)"
      />
    </>
  );
};

export default AboutProgramPage;
