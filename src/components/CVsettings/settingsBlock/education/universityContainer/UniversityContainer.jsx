import {
  deleteFromState,
  updateState,
} from "../../../../../functions/functions";
import { InfoContainer } from "../../../../CV/overallData/infoContainer/infoContainer";
import { InputContainer } from "../../../inputContainer/InputContainer";

import inputs from "../../../../../scss/modules/inputsWrapper.module.scss";
import button from "../../../../../scss/modules/button.module.scss";
export function UniversityContainer({ side, university, setData, data }) {
  if (side === "left") {
    const fields = {
      university: {
        label: "University Name",
      },

      city: {
        label: "City",
      },

      degree: {
        label: "Degree",
      },

      subject: {
        label: "Subject",
      },

      from: {
        label: "From",
        type: "month",
      },

      to: {
        label: "To",
        type: "month",
      },
    };

    return (
      <div className={`${inputs.inputsWrapper} ${inputs.previous}`}>
        {Object.entries(fields).map(([key, { label, type }], index) => (
          <InputContainer
            key={index}
            value={university[key]}
            label={label}
            type={type || "text"}
            handleChange={(e) => updateState(e, key, data, university, setData)}
          ></InputContainer>
        ))}
        <button
          type="button"
          className={button.button}
          onClick={() => deleteFromState(university, data, setData)}
        >
          Delete
        </button>
      </div>
    );
  }

  return <InfoContainer university={university}></InfoContainer>;
}
