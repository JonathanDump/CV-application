import cl from "./education.module.scss";
import style from "/src/scss/modules/button.module.scss";
import { UniversityContainer } from "./universityContainer/UniversityContainer";
import { addToState } from "../../../../functions/functions";
import inputs from "../../../../scss/modules/inputsWrapper.module.scss";
import category from "../../../../scss/modules/inputCategory.module.scss";
import button from "../../../../scss/modules/button.module.scss";
export function Education({ data, setData }) {
  console.log("education", data);
  return (
    <div className={category.inputCategory}>
      <div className={category.title}>Education</div>
      <div className={inputs.inputsWrapper}>
        {data.education.map((university) => (
          <UniversityContainer
            side={"left"}
            data={data}
            setData={setData}
            key={university.id}
            university={university}
          ></UniversityContainer>
        ))}
      </div>

      <button
        type="button"
        className={button.button}
        onClick={() => addToState(data, setData)}
      >
        Add
      </button>
    </div>
  );
}
