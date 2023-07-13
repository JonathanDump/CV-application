import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './previousWorkContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function PreviousWorkContainer({ side, data, setData, id }) {
  debugger;
  console.log('before if', data);
  if (side === 'left') {
    const work = data.experience.filter((work) => work.id === id)[0];
    console.log('inside if', data);

    return (
      <div className={cl.previousWorkContainer}>
        <InputContainer
          value={work.position}
          label="Position"
          type="text"
          handleChange={(e) => {
            work.position = e.target.value;
            const experience = [...data.experience].map((w) => {
              if (w.id === id) {
                return { ...work, position: e.target.value };
              }
            });
            setData({ ...data, experience: experience });
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
  console.log('after if', data);
  return (
    <div className={cl.previousWorkContainer}>
      <InfoContainer
        side={'work'}
        experience={data?.experience}
        id={id}
      ></InfoContainer>
    </div>
  );
}
