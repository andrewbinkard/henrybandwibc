import { FC } from "react";
import ConductorCard from "../../Components/Conductors/ConductorCard";
// import Footer from "../../../Components/Shared/Footer";
import { privateLessonTeacherData } from "./const";
import styles from "./PrivateLessonFacultyPage.module.scss";

const PrivateLessonFacultyPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Private Lesson Faculty</h1>
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
      {/* <Footer /> */}
    </div>
  );
};

export default PrivateLessonFacultyPage;
