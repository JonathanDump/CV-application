import cl from './education.module.scss';
import style from '/src/scss/modules/button.module.scss';
import { UniversityContainer } from './universityContainer/UniversityContainer';

export function Education() {
  return (
    <div className={cl.education}>
      <UniversityContainer side={'left'}></UniversityContainer>
      <button type="button" className={style.button}>
        Add
      </button>
    </div>
  );
}
