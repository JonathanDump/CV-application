import { PreviousWorkContainer } from './previousWorkContainer/PreviousWorkContainer';
import cl from './experience.module.scss';
import style from '/src/scss/modules/button.module.scss';
import { addToState } from '../../../../functions/functions';

export function Experience({ data, setData }) {
  return (
    <div className={cl.experience}>
      <div className={cl.title}>Experience</div>
      {data.experience.map((work) => (
        <PreviousWorkContainer
          log={console.log('container creation', work)}
          side={'left'}
          data={data}
          setData={setData}
          key={work.id}
          work={work}
        />
      ))}

      <button
        type="button"
        className={style.button}
        onClick={() => addToState('work', data, setData)}
      >
        Add
      </button>
    </div>
  );
}
