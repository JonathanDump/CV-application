import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './previousWorkContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function PreviousWorkContainer({ side }) {
  if (side === 'left') {
    return (
      <div className={cl.previousWorkContainer}>
        <InputContainer
          inputClass="position"
          label="Position"
          type="text"
        ></InputContainer>

        <InputContainer
          inputClass="company"
          label="Company"
          type="text"
        ></InputContainer>

        <InputContainer
          inputClass="city"
          label="City"
          type="text"
        ></InputContainer>

        <InputContainer
          inputClass="company"
          label="Company"
          type="text"
        ></InputContainer>

        <InputContainer
          inputClass="from"
          label="From"
          type="date"
        ></InputContainer>

        <InputContainer inputClass="to" label="To" type="date"></InputContainer>

        <button type="button" className={style.button}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className={cl.previousWorkContainer}>
      <InfoContainer side={'work'} experience={experience}></InfoContainer>
    </div>
  );
}
