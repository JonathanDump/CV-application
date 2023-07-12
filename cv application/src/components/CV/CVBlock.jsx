import cl from './cvBlock.module.scss';
import { CVHeader } from './cvHeader/CVHeader';
import { OverallData } from './overallData/OverallData';
import { PersonalData } from './personalData/PersonalData';

export function CVBlock() {
  return (
    <div className={cl.cvBlock}>
      <div className={cl.cv}>
        <CVHeader></CVHeader>
        <div className={cl.main}>
          <PersonalData></PersonalData>
          <OverallData></OverallData>
        </div>
      </div>
    </div>
  );
}
