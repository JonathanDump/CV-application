import cl from './cvHeader.module.scss';

export function CVHeader({ personalInfo }) {
  <div className={cl.header}>
    <div className={cl.name}>{personalInfo.name}</div>
    <div className={cl.title}>{personalInfo.title}</div>
  </div>;
}
