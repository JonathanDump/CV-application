import { PreviousWorkContainer } from './previousWorkContainer/PreviousWorkContainer';
import cl from './experience.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function Experience({ data, setData }) {
  return (
    <div className={cl.experience}>
      <div className={cl.title}>Experience</div>
      <PreviousWorkContainer
        side={'left'}
        data={data}
        setData={setData}
        id={crypto.randomUUID()}
      ></PreviousWorkContainer>
      <button type="button" className={style.button}>
        Add
      </button>
    </div>
  );
}
