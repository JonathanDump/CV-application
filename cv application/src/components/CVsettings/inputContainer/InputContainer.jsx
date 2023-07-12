import cl from './inputContainer.module.scss';

export function InputContainer({ inputClass, label, type }) {
  return (
    <div className={cl.inputs}>
      <div className={cl.inputContainer}>
        <label htmlFor={cl[inputClass]}>{label}</label>
        <input type={type} className={cl[inputClass]} />
      </div>
    </div>
  );
}
