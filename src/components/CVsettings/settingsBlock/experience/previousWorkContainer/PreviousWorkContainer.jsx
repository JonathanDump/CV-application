import {
  deleteFromState,
  updateState,
} from '../../../../../functions/functions';
import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './previousWorkContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function PreviousWorkContainer({ side, work, setData, data }) {
  // debugger;
  // console.log('before if', data);
  // console.log('work', work);

  if (side === 'left') {
    // console.log('inside if', data);

    return (
      <div className={cl.previousWorkContainer}>
        <InputContainer
          value={work.position}
          label="Position"
          type="text"
          handleChange={(e) => updateState(e, 'position', data, work, setData)}
        />

        <InputContainer
          value={work.company}
          label="Company"
          type="text"
          handleChange={(e) => updateState(e, 'company', data, work, setData)}
        />

        <InputContainer
          value={work.city}
          label="City"
          type="text"
          handleChange={(e) => updateState(e, 'city', data, work, setData)}
        />

        <InputContainer
          value={work.from}
          label="From"
          type="month"
          handleChange={(e) => updateState(e, 'from', data, work, setData)}
        />

        <InputContainer
          value={work.to}
          label="To"
          type="month"
          handleChange={(e) => updateState(e, 'to', data, work, setData)}
        />

        <button
          type="button"
          className={style.button}
          onClick={() => deleteFromState(work, data, setData)}
        >
          Delete
        </button>
      </div>
    );
  }
  // console.log('after if', data);
  // if (!data) {
  //   return;
  // }

  return (
    <div className={cl.previousWorkContainer}>
      <InfoContainer category={'work'} work={work}></InfoContainer>
    </div>
  );
}
