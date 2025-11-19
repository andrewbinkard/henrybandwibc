import { FC } from "react";
import MusiciansCard from "../../Components/MusiciansCard";
import styles from "./MusiciansPage.module.scss";
import { henrySections } from "../../Components/Musicians/const";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import { MUSICIANS_HEADER_TEXT } from "../const";

const MusiciansPage: FC = () => {
  return (
    <div className={styles.container}>
      <PageHeader headerText={MUSICIANS_HEADER_TEXT} />
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

      <Footer
        backgroundColor="var(--program-orange)"
        topDividerColor="var(--program-green)"
        bottomDividerColor="var(--program-orange)"
      />
    </div>
  );
};

export default MusiciansPage;
