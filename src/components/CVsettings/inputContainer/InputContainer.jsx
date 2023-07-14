import cl from "./inputContainer.module.scss";
import style from "../../../scss/modules/inputContainer.module.scss";

export function InputContainer({ handleChange, label, type, value }) {
  if (type !== "long-text") {
    return (
      <div className={cl.input}>
        <div className={style.inputContainer}>
          <label htmlFor={style.input}>{label}</label>
          <input
            type={type}
            className={style.input}
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cl.input}>
      <div className={style.inputContainer}>
        <label htmlFor={style.input}>{label}</label>
        <div
          className={style.inputDescription}
          onKeyUp={handleChange}
          // onKeyUpCapture={handleChange}
          value={value}
          contentEditable="true"
        ></div>
      </div>
    </div>
  );
}
