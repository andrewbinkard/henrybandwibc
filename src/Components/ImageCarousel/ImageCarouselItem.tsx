import { FC } from "react";
import Paper from "@mui/material/Paper";
import styles from "./ImageCarousel.module.scss";
import { SectionProps } from "../Musicians/types";

const ImageCarouselItem: FC<SectionProps> = ({ imgSrc, section }) => {
  return (
    <Paper elevation={3} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={imgSrc}
          alt={`Image of ${section}`}
          className={styles.image}
        />
      </div>
    </Paper>
  );
};

export default ImageCarouselItem;
