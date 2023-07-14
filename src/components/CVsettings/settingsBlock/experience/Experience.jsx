import { PreviousWorkContainer } from "./previousWorkContainer/PreviousWorkContainer";

import button from "../../../../scss/modules/button.module.scss";
import inputs from "../../../../scss/modules/inputsWrapper.module.scss";
import category from "../../../../scss/modules/inputCategory.module.scss";
import { addToState } from "../../../../functions/functions";

export function Experience({ data, setData }) {
  return (
    <div className={category.inputCategory}>
      <div className={category.title}>Experience</div>
      <div className={inputs.inputsWrapper}>
        {data.experience.map((work) => (
          <PreviousWorkContainer
            side={"left"}
            data={data}
            setData={setData}
            key={work.id}
            work={work}
          />
        ))}
      </div>

      <button
        type="button"
        className={button.button}
        onClick={() => addToState(data, setData, "work")}
      >
        Add
      </button>
    </div>
  );
}
