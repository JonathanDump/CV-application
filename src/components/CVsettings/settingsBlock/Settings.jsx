import { PersonalInfo } from "./personalInfo/PersonalInfo";
import { Experience } from "./experience/Experience";
import { Education } from "./education/Education";
import cl from "./settings.module.scss";

export function Settings({ data, setData }) {
  return (
    <div className={cl.settingsBlock}>
      <div className={cl.settings}>
        <PersonalInfo data={data} setData={setData}></PersonalInfo>
        <Experience data={data} setData={setData}></Experience>
        <Education data={data} setData={setData}></Education>
      </div>
    </div>
  );
}
