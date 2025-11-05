import { FC } from "react";
import Intro from "../../../Components/Intro";
import TiltDivider from "../../../Components/TiltDivider";
import ConcertAccordion from "../../../Components/ConcertAccordion";
import Musicians from "../../../Components/Musicians";
import Conductors from "../../../Components/Conductors";
import MainPageButtons from "../../../Components/MainPageButtons";

const MainPage: FC = () => {
  return (
    <div>
      <TiltDivider
        topColor={"var(--program-green)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-orange)"}
      />
      <Intro />
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
      <TiltDivider
        topColor={"var(--program-orange)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-green)"}
      />
      <Conductors />
      <TiltDivider
        topColor={"var(--program-green)"}
        bandColor={"var(--program-yellow)"}
        bottomColor={"var(--program-orange)"}
      />
      <MainPageButtons />
    </div>
  );
};

export default MainPage;
