import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './previousWorkContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function PreviousWorkContainer({ side, data, setData, id }) {
  if (side === 'left') {
    const work = data.experience.find((work) => work.id === id);
    console.log(data);
    console.log(data.experience);
    console.log(work);
    return (
      <div className={cl.previousWorkContainer}>
        <InputContainer
          value={work.position}
          label="Position"
          type="text"
          handleChange={(e) => {
            work.position = e.target.value;
            setData({ ...data });
          }}
        />

        <InputContainer label="Company" type="text" />

        <InputContainer label="City" type="text" />

        <InputContainer label="Company" type="text" />

        <InputContainer label="From" type="date" />

        <InputContainer label="To" type="date" />

        <button type="button" className={style.button}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className={cl.previousWorkContainer}>
      <InfoContainer
        side={'work'}
        experience={data.experience}
        id={id}
      ></InfoContainer>
    </div>
  );
}
