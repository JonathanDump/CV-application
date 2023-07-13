import cl from './infoContainer.module.scss';

export function InfoContainer({ category, experience, education, id }) {
  if (category === 'work') {
    const work = experience.find((work) => work.id === id);
    return (
      <div className={cl.infoContainer}>
        <div className={cl.year}>
          {work.from} - {work.to}
        </div>
        <div className={cl.boldRow}>{work.position}</div>
        <div className={cl.row}>{work.company}</div>
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
