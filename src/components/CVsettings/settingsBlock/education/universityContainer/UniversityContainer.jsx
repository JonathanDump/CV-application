import {
  deleteFromState,
  updateState,
} from "../../../../../functions/functions";
import { InfoContainer } from "../../../../CV/overallData/infoContainer/infoContainer";
import { InputContainer } from "../../../inputContainer/InputContainer";
import cl from "./universityContainer.module.scss";
import style from "/src/scss/modules/button.module.scss";

export function UniversityContainer({ side, university, setData, data }) {
  if (side === "left") {
    return (
      <div className={cl.universityContainer}>
        <InputContainer
          value={university.university}
          label={"University Name"}
          type={"text"}
          handleChange={(e) =>
            updateState(e, "university", data, university, setData)
          }
        ></InputContainer>

        <InputContainer
          value={university.city}
          label={"City"}
          type={"text"}
          handleChange={(e) =>
            updateState(e, "city", data, university, setData)
          }
        ></InputContainer>

        <InputContainer
          value={university.degree}
          label={"Degree"}
          type={"text"}
          handleChange={(e) =>
            updateState(e, "degree", data, university, setData)
          }
        ></InputContainer>

        <InputContainer
          value={university.subject}
          label={"Subject"}
          type={"text"}
          handleChange={(e) =>
            updateState(e, "subject", data, university, setData)
          }
        ></InputContainer>

        <InputContainer
          value={university.from}
          label={"From"}
          type={"month"}
          handleChange={(e) =>
            updateState(e, "from", data, university, setData)
          }
        ></InputContainer>

        <InputContainer
          value={university.to}
          label={"To"}
          type={"month"}
          handleChange={(e) => updateState(e, "to", data, university, setData)}
        ></InputContainer>

        <button
          type="button"
          className={style.button}
          onClick={() => deleteFromState(university, data, setData)}
        >
          Delete
        </button>
      </div>
    );
  }

  return <InfoContainer university={university}></InfoContainer>;
}
