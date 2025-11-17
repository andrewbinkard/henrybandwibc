import { FC } from "react";
import ConductorCard from "./ConductorCard";
import styles from "./Conductors.module.scss";
import { conductorData } from "./const";
import { Link } from "react-router-dom";

const Conductors: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>CONDUCTORS</h2>
      <div className={styles.conductorGrid}>
        {conductorData.map(({ name, title, imgSrc }, idx) => {
          return (
            <div className={styles.conductorCard} key={idx}>
              <ConductorCard name={name} title={title} imgSrc={imgSrc} />
            </div>
          );
        })}
      </div>
      <Link to={"/conductors"}>
        <button>Read Conductor Bios</button>
      </Link>
    </div>
  );
};

export default Conductors;
