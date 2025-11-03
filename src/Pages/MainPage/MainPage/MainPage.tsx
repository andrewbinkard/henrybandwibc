import { FC } from "react";
import Header from "../../../Features/Header";
import TiltDivider from "../../../Components/TiltDivider";
import ConcertAccordion from "../../../Components/ConcertAccordion";
import Musicians from "../../../Components/Musicians/Musicians";

const MainPage: FC = () => {
  return (
    <div>
      <TiltDivider
        topColor={"var(--program-green)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-orange)"}
      />
      <Header />
      <TiltDivider
        topColor={"var(--program-orange)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-green)"}
      />
      <ConcertAccordion />
      <TiltDivider
        topColor={"var(--program-green)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-orange)"}
      />
      <Musicians />
    </div>
  );
};

export default MainPage;
