import { FC } from "react";
import { AcknowledgementsCardProps } from "./types";
import styles from "./AcknowledgementsCard.module.scss";

const AcknowledgementsCard: FC<AcknowledgementsCardProps> = ({
  toWhom,
  content,
  url,
}) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.toWhom}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {toWhom}
          </a>
        ) : (
          toWhom
        )}
      </h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default AcknowledgementsCard;
