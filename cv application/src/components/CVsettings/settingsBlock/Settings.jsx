import { PersonalInfo } from './personalInfo/PersonalInfo';
import { Experience } from './experience/Experience';
import { Education } from './education/Education';
import cl from './settings.module.scss';

export function Settings() {
  return (
    <div className={cl.settingsBlock}>
      <div className={cl.settings}>
        <PersonalInfo></PersonalInfo>
        <Experience></Experience>
        <Education></Education>
      </div>
    </div>
  );
}
