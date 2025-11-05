import { FC } from "react";
import { SchoolProps } from "./types";

const School: FC<SchoolProps> = ({ name, directors, className }) => {
  return (
    <section className={className}>
      <h3>{name}</h3>
      {directors.map((director, idx) => (
        <p key={`${name}-${idx}`}>{director}</p>
      ))}
    </section>
  );
};

export default School;
