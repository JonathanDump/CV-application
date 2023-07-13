import { format, parseISO } from 'date-fns';
import cl from './infoContainer.module.scss';

export function InfoContainer({ category, work, university }) {
  if (category === 'work') {
    // console.log('info container', format(parseISO(work.from), 'MMM YYYY'));

    return (
      <div className={cl.infoContainer}>
        <div className={cl.year}>
          {work.from} - {work.to}
        </div>
        <div className={cl.boldRow}>{work.position}</div>
        <div className={cl.row}>{work.company}</div>
        <div className={cl.row}>{work.city}</div>
      </div>
    );
  }

  // return (
  //   <div className={cl.infoContainer}>
  //     <div className={cl.year}>
  //       {university.from} - {university.to}
  //     </div>
  //     <div className={cl.boldRow}>{university.university}</div>
  //     <div className={cl.row}>Degree: {university.degree}</div>
  //     <div className={cl.row}>Subject: {university.subject}</div>
  //   </div>
  // );
}
