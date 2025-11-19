import { FC } from "react";
import ConductorCard from "../../Components/Conductors/ConductorCard";
import Footer from "../../Components/Footer";
import { privateLessonTeacherData } from "./const";
import styles from "./PrivateLessonFacultyPage.module.scss";
import PageHeader from "../../Components/PageHeader";
import { PRIVATE_LESSON_FACULTY_HEADER_TEXT } from "../const";

const PrivateLessonFacultyPage: FC = () => {
  return (
    <div className={styles.container}>
      <PageHeader headerText={PRIVATE_LESSON_FACULTY_HEADER_TEXT} />
      <div className={styles.facultyContainer}>
        {privateLessonTeacherData.map(
          ({ name, instrument, imgSrc, bio }, idx) => {
            return (
              <ConductorCard
                key={idx}
                name={name}
                instrument={instrument}
                imgSrc={imgSrc}
                bio={bio}
              />
            );
          }
        )}
      </div>
      <Footer
        backgroundColor="var(--program-orange)"
        topDividerColor="var(--program-green)"
        bottomDividerColor="var(--program-orange)"
      />
    </div>
  );
};

export default PrivateLessonFacultyPage;
