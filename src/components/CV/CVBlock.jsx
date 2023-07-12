import cl from './cvBlock.module.scss';
import { CVHeader } from './cvHeader/CVHeader';
import { OverallData } from './overallData/OverallData';
import { PersonalData } from './personalData/PersonalData';

export function CVBlock({ data }) {
  return (
    <div className={cl.cvBlock}>
      <div className={cl.cv}>
        <CVHeader personalInfo={data.personalInfo}></CVHeader>
        <div className={cl.main}>
          <PersonalData personalData={data.personalInfo}></PersonalData>
          <OverallData data={data}></OverallData>
        </div>
      </div>
    </div>
  );
}
