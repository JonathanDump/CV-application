import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './previousWorkContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function PreviousWorkContainer({ side, work, setData, id, data }) {
  // debugger;
  console.log('before if', data);
  console.log('work', work);

  function updateState(e, attr) {
    const experience = [...data.experience].map((w) => {
      if (w.id === id) {
        return { ...work, [attr]: e.target.value };
      }
    });
    setData({ ...data, experience: experience });
  }
  if (side === 'left') {
    console.log('inside if', data);

    return (
      <div className={cl.previousWorkContainer}>
        <InputContainer
          value={work.position}
          label="Position"
          type="text"
          // handleChange={(e) => {
          //   const experience = [...data.experience].map((w) => {
          //     if (w.id === id) {
          //       return { ...work, position: e.target.value };
          //     }
          //   });
          //   setData({ ...data, experience: experience });
          // }}
          handleChange={(e) => updateState(e, 'position')}
        />

        <InputContainer
          value={work.company}
          label="Company"
          type="text"
          handleChange={(e) => updateState(e, 'company')}
        />

        <InputContainer
          value={work.city}
          label="City"
          type="text"
          handleChange={(e) => updateState(e, 'city')}
        />

        <InputContainer
          value={work.from}
          label="From"
          type="month"
          handleChange={(e) => updateState(e, 'from')}
        />

        <InputContainer
          value={work.to}
          label="To"
          type="month"
          handleChange={(e) => updateState(e, 'to')}
        />

        <button type="button" className={style.button}>
          Delete
        </button>
      </div>
    );
  }
  console.log('after if', data);
  // if (!data) {
  //   return;
  // }

  return (
    <div className={cl.previousWorkContainer}>
      <InfoContainer category={'work'} work={work}></InfoContainer>
    </div>
  );
}
