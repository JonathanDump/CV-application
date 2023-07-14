import { format, parseISO } from "date-fns";
import cl from "./infoContainer.module.scss";

export function InfoContainer({ category, work, university }) {
  if (category === "work") {
    // console.log('info container', format(parseISO(work.from), 'MMM YYYY'));

    return (
      <div className={cl.infoContainer}>
        <div className={cl.year}>
          {work.from && format(parseISO(work.from), "MMM yyyy")} -{" "}
          {work.to && format(parseISO(work.to), "MMM yyyy")}
        </div>

        <div className={cl.row}>
          {work.company} | {work.city}
        </div>
        <div className={cl.rowBold}>{work.position}</div>
        {/* <div className={cl.row}>{work.city}</div> */}
      </div>
    );
  }

  return (
    <div className={cl.infoContainer}>
      <div className={cl.year}>
        {university.from && format(parseISO(university.from), "MMM yyyy")} -{" "}
        {university.to && format(parseISO(university.to), "MMM yyyy")}
      </div>
      <div className={cl.rowBold}>{university.university}</div>
      <div className={cl.row}>{university.city}</div>
      <div className={cl.row}>Degree: {university.degree}</div>
      <div className={cl.row}>Subject: {university.subject}</div>
    </div>
  );
}
