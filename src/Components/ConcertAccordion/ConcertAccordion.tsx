import { FC, useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./ConcertAccordion.module.scss";
import { accordionData } from "./const";

const ConcertAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.container}>
      <h2>CONCERT SELECTIONS</h2>
      <div className={styles.accordionContainer}>
        {accordionData.map(
          ({
            panelId,
            title,
            composer,
            details,
            conductor,
            year,
            // grade,
            // time,
            // publisher,
            // publisherWebsiteURL,
          }) => (
            <AccordionItem
              key={panelId}
              panelId={panelId}
              expanded={expanded === panelId}
              handleChange={handleChange(panelId)}
              title={title}
              composer={composer}
              details={details}
              conductor={conductor}
              year={year}
              // grade={grade}
              // time={time}
              // publisher={publisher}
              // publisherWebsiteURL={publisherWebsiteURL}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ConcertAccordion;
