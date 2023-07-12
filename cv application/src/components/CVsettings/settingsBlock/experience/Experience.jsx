import { PreviousWorkContainer } from './previousWorkContainer/PreviousWorkContainer';
import cl from './experience.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function Experience() {
  return (
    <div className={cl.experience}>
      <div className={cl.title}>Experience</div>
      <PreviousWorkContainer side={'left'}></PreviousWorkContainer>
      <button type="button" className={style.button}>
        Add
      </button>
    </div>
  );
}
