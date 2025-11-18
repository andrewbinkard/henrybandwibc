import { FC } from "react";
import styles from "./ThankYouPage.module.scss";
import Footer from "../../Components/Footer";
import { friendsOfMusicEducation, henryThankYouData } from "./const";
import AcknowledgementsCard from "../../Components/AcknowledgementsCard";
import TiltDivider from "../../Components/TiltDivider";
import clsx from "clsx";

const ThankYouPage: FC = () => {
  return (
    <div className={styles.container}>
      <TiltDivider
        topColor="var(--program-green)"
        bandColor="var(--program-yellow)"
        bottomColor="var(--program-orange)"
      />
      <h1>Thank you!</h1>
      <div className={styles.cardContainer}>
        {henryThankYouData.map(({ toWhom, content, url }, idx) => {
          return (
            <div>
              <AcknowledgementsCard
                key={idx}
                toWhom={toWhom}
                content={content}
                url={url}
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
      <div className={styles.friendsContainer}>
        <h1>Friends of Music Education</h1>
        <div className={clsx(styles.cardContainer, styles.friendsCards)}>
          {friendsOfMusicEducation.map(({ toWhom, content, url }, idx) => {
            return (
              <div>
                <AcknowledgementsCard
                  key={idx}
                  toWhom={toWhom}
                  content={content}
                  url={url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer
        backgroundColor="var(--program-orange)"
        topDividerColor="var(--program-green)"
        bottomDividerColor="var(--program-orange)"
      />
    </div>
  );
};

export default ThankYouPage;
