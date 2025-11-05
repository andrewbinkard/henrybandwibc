import { FC } from "react";
import AboutProgramCard from "../../Components/AboutProgramCard";
import { henryAboutProgramInfo } from "./const";
// import Footer from "../../../Components/Shared/Footer";
import styles from "./AboutProgramPage.module.scss";
import TiltDivider from "../../Components/TiltDivider";
import LISDDistrictPersonnel from "./LISDDistrictPersonnel";

const AboutProgramPage: FC = () => {
  return (
    <>
      <TiltDivider
        topColor="var(--program-green)"
        bandColor="var(--program-yellow)"
        bottomColor="var(--program-orange)"
      />
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.cardContainer}>
          {henryAboutProgramInfo.map(
            ({ programName, programInfo, imgSrc, imgSrc2 }, idx) => {
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
            }
          )}
        </div>
        <TiltDivider
          topColor="var(--program-orange)"
          bandColor="var(--program-yellow)"
          bottomColor="var(--program-green)"
        />
        <LISDDistrictPersonnel />
        <TiltDivider
          topColor="var(--program-green)"
          bandColor="var(--program-yellow)"
          bottomColor="var(--program-orange)"
        />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AboutProgramPage;
