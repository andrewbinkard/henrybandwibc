import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./ConductorsPage.module.scss";
import Footer from "../../Components/Footer";
import { conductorData } from "../../Components/Conductors/const";
import ComposerCard from "../../Components/ComposerCard";

const ConductorsPage: FC = () => {
  const { directorName } = useParams<{ directorName: string }>();

  useEffect(() => {
    if (directorName) {
      const targetElement = document.getElementById(directorName);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [directorName]);

  return (
    <div className={styles.conductorsContainer}>
      <h1>Conductors</h1>
      {conductorData.map(({ name, imgSrc, details, title }) => {
        return (
          <div id={name} key={name}>
            <ComposerCard
              name={name}
              imgSrc={imgSrc}
              details={details}
              title={title}
            />
          </div>
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

export default ConductorsPage;
