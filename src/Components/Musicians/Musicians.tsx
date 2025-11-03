import { FC } from "react";
import ImageCarousel from "../ImageCarousel";
import styles from "./Musicians.module.scss";
import { Link } from "react-router-dom";
import { henrySections } from "./const";

const Musicians: FC = () => {
  return (
    <div className={styles.container}>
      <h2>MUSICIANS</h2>
      <ImageCarousel imgData={henrySections} />
      <Link to={"musicians"}>
        <button>Meet the Musicians</button>
      </Link>
    </div>
  );
};

export default Musicians;
