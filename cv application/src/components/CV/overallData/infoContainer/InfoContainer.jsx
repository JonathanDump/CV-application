import cl from './infoContainer.module.scss';

export function InfoContainer({ category, experience, education }) {
  if (category === 'work') {
    return (
      <div className={cl.infoContainer}>
        <div className={cl.year}>
          {experience.from} - {experience.to}
        </div>
        <div className={cl.boldRow}>{experience.position}</div>
        <div className={cl.row}>{experience.company}</div>
      </div>
    );
  }

  return (
    <div className={cl.infoContainer}>
      <div className={cl.year}>
        {education.from} - {education.to}
      </div>
      <div className={cl.boldRow}>{education.university}</div>
      <div className={cl.row}>Degree: {education.degree}</div>
      <div className={cl.row}>Subject: {education.subject}</div>
    </div>
  );
}
