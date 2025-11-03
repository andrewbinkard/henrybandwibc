import { FC } from "react";

import MusiciansCard from "../../Components/MusiciansCard";
// import Fxooter from "../../../Components/Shared/Footer";
// import ImageCarousel from "../../Components/ImageCarousel";
import styles from "./MusiciansPage.module.scss";
import { henrySections } from "../../Components/Musicians/const";

const MusiciansPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1>MUSICIANS</h1>
      {henrySections.map(({ imgSrc, section, members }, idx) => {
        return (
          <MusiciansCard
            key={idx}
            imgSrc={imgSrc}
            sectionName={section}
            sectionMembers={members}
          />
        );
      })}
      {/* <ImageCarousel imgData={wileyCandids} /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default MusiciansPage;
