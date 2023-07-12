import { UniversityContainer } from '../../CVsettings/settingsBlock/education/universityContainer/UniversityContainer';
import { PreviousWorkContainer } from '../../CVsettings/settingsBlock/experience/previousWorkContainer/previousWorkContainer';
import cl from './overallData.module.scss';

export function OverallData({ data }) {
  const description = data.personalInfo.description;
  const experienceArr = data.experience;
  const educationArr = data.education;
  return (
    <div className={cl.overallData} id={cl.experience}>
      <div className={cl.dataBlock}>
        <div className={cl.title}>Description</div>
        <div className={cl.text}>{description}</div>
      </div>

      <div className={cl.dataBlock}>
        <div className={cl.title}>Experience</div>
        {experienceArr.map((work, i) => (
          <PreviousWorkContainer
            experience={work}
            key={Date.now()}
          ></PreviousWorkContainer>
        ))}
      </div>

      <div className={cl.dataBlock} id={cl.education}>
        <div className={cl.title}>Education</div>
        {educationArr.map((university) => (
          <UniversityContainer
            education={university}
            key={Date.now()}
          ></UniversityContainer>
        ))}
      </div>
    </div>
  );
}
