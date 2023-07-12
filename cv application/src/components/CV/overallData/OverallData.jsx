import { UniversityContainer } from '../../CVsettings/settingsBlock/education/universityContainer/UniversityContainer';
import { PreviousWorkContainer } from '../../CVsettings/settingsBlock/experience/previousWorkContainer/previousWorkContainer';
import cl from './overallData.module.scss';

export function OverallData() {
  return (
    <div className={cl.overallData} id={cl.experience}>
      <div className={cl.dataBlock}>
        <div className={cl.title}>Description</div>
        <div className={cl.text}></div>
      </div>

      <div className={cl.dataBlock}>
        <div className={cl.title}>Experience</div>
        <PreviousWorkContainer></PreviousWorkContainer>
      </div>

      <div className={cl.dataBlock} id={cl.education}>
        <div className={cl.title}>Education</div>
        <UniversityContainer></UniversityContainer>
      </div>
    </div>
  );
}
