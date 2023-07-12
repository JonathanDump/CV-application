import cl from './inputContainer.module.scss';

export function InputContainer({ handleChange, label, type, value }) {
  return (
    <div className={cl.inputs}>
      <div className={cl.inputContainer}>
        <label htmlFor={cl.input}>{label}</label>
        <input
          type={type}
          className={cl.input}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
}
