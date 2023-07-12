import cl from './header.module.scss';
import style from '../../scss/modules/button.module.scss';

export function Header() {
  return (
    <div className={cl.header}>
      <div className={cl.title}>CV creator</div>
      <button type="button" className={style.button}>
        Generate PDF
      </button>
    </div>
  );
}
