import cl from "./education.module.scss";
import style from "/src/scss/modules/button.module.scss";
import { UniversityContainer } from "./universityContainer/UniversityContainer";
import { addToState } from "../../../../functions/functions";

export function Education({ data, setData }) {
  console.log("education", data);
  return (
    <div className={cl.education}>
      <div className={cl.title}>Education</div>
      {data.education.map((university) => (
        <UniversityContainer
          side={"left"}
          data={data}
          setData={setData}
          key={university.id}
          university={university}
        ></UniversityContainer>
      ))}

      <button
        type="button"
        className={style.button}
        onClick={() => addToState(data, setData)}
      >
        Add
      </button>
    </div>
  );
}
