import { FC } from "react";
import styles from "./AboutProgramPage.module.scss";
import { BAND_DIRECTORS } from "./const";
import School from "../../Components/School";

const LISDDistrictPersonnel: FC = () => {
  return (
    <div className={styles.personnelContainer}>
      <h2>OUR FAMILY OF LEANDER ISD BAND DIRECTORS</h2>
      <div className={styles.gridCenter}>
        <div className={styles.bandDirectorsContainer}>
          {BAND_DIRECTORS.map(({ name, directors }) => (
            <School
              key={name}
              name={name}
              directors={directors}
              className={styles.school}
            />
          ))}
        </div>
      </div>
      <br />
      <h2>LEANDER ISD ADMINISTRATION</h2>
      <p>Bruce Gearing, Ed.D. | Superintendent</p>
      <p>
        Sarah Grissom, Ed.D. | Deputy Superintendent of Administrative Services
        & Strategic Planning
      </p>
      <p>Chris Clark, Ed.D. | Deputy Superintendent of Learning & Innovation</p>
      <p>Jody Hormann | Senior Executive Director of Campus Activities</p>
      <p>Megan Liles | Director of Fine Arts</p>
      <br />
      <h2>HENRY MIDDLE SCHOOL ADMINISTRATION</h2>
      <p>Dr. David Ellis | Principal</p>
      <p>Brian Barnes | Assistant Principal</p>
      <p>Alexandra McStay | Assistant Principal</p>
      <p>Serena Slocum | Assistant Principal</p>
      <p>Jerilynn Huebschman | Administrative Assistant</p>
      <p>Diana Tripp, Administrative Assistant | Assistant Principals</p>
      <br />
      <h2>LEANDER ISD BOARD OF TRUSTEES</h2>
      <p>Anna Smith | President</p>
      <p>Sade Fashokun | Vice-President</p>
      <p>Nekosi Nelson | Secretary</p>
      <p>Trish Bode</p>
      <p>Paul Gauthier</p>
      <p>Gloria Gonzales-Dholakia</p>
      <p>Laura Marques</p>
    </div>
  );
};

export default LISDDistrictPersonnel;
