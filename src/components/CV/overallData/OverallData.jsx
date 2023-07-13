import { UniversityContainer } from "../../CVsettings/settingsBlock/education/universityContainer/UniversityContainer";
import { PreviousWorkContainer } from "../../CVsettings/settingsBlock/experience/previousWorkContainer/PreviousWorkContainer";
import cl from "./overallData.module.scss";

export function OverallData({ data }) {
  const description = data.personalInfo.description;
  const experienceArr = [...data.experience];
  const educationArr = data.education;
  return (
    <div className={cl.overallData} id={cl.experience}>
      <div className={cl.dataBlock}>
        <div className={cl.title}>Description</div>
        <div className={cl.text}>{description}</div>
      </div>

      <div className={cl.dataBlock}>
        <div className={cl.title}>Experience</div>
        {experienceArr.map((work) => (
          <PreviousWorkContainer
            work={work}
            key={work.id}
          ></PreviousWorkContainer>
        ))}
      </div>

      <div className={cl.dataBlock} id={cl.education}>
        <div className={cl.title}>Education</div>
        {educationArr.map((university) => (
          <UniversityContainer
            university={university}
            key={university.id}
            id={university.id}
          ></UniversityContainer>
        ))}
      </div>
    </div>
  );
}
