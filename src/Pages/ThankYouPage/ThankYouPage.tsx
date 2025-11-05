import { FC } from "react";
import styles from "./ThankYouPage.module.scss";
// import Footer from "../../../Components/Shared/Footer";
import { henryThankYouData } from "./const";
import AcknowledgementsCard from "../../Components/AcknowledgementsCard";
import TiltDivider from "../../Components/TiltDivider";

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
        {henryThankYouData.map(({ toWhom, content }, idx) => {
          return (
            <div>
              <AcknowledgementsCard
                key={idx}
                toWhom={toWhom}
                content={content}
              />
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ThankYouPage;
