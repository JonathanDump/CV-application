import {
  deleteFromState,
  updateState,
} from "../../../../../functions/functions";
import { InfoContainer } from "../../../../CV/overallData/infoContainer/infoContainer";
import { InputContainer } from "../../../inputContainer/InputContainer";
import cl from "./previousWorkContainer.module.scss";
import style from "/src/scss/modules/button.module.scss";
import inputs from "../../../../../scss/modules/inputsWrapper.module.scss";

export function PreviousWorkContainer({ side, work, setData, data }) {
  if (side === "left") {
    return (
      <div className={`${inputs.inputsWrapper} ${inputs.previous}`}>
        <InputContainer
          value={work.position}
          label="Position"
          type="text"
          handleChange={(e) =>
            updateState(e, "position", data, work, setData, "work")
          }
        />

        <InputContainer
          value={work.company}
          label="Company"
          type="text"
          handleChange={(e) =>
            updateState(e, "company", data, work, setData, "work")
          }
        />

        <InputContainer
          value={work.city}
          label="City"
          type="text"
          handleChange={(e) =>
            updateState(e, "city", data, work, setData, "work")
          }
        />

        <InputContainer
          value={work.from}
          label="From"
          type="month"
          handleChange={(e) =>
            updateState(e, "from", data, work, setData, "work")
          }
        />

        <InputContainer
          value={work.to}
          label="To"
          type="month"
          handleChange={(e) =>
            updateState(e, "to", data, work, setData, "work")
          }
        />

        <button
          type="button"
          className={style.button}
          onClick={() => deleteFromState(work, data, setData, "work")}
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className={`${inputs.inputsWrapper} `}>
      <InfoContainer category={"work"} work={work}></InfoContainer>
    </div>
  );
}
