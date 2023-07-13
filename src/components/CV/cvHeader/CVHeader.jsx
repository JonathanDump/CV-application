import cl from './cvHeader.module.scss';

export function CVHeader({ personalInfo }) {
  return (
    <div className={cl.header}>
      <div className={cl.name}>
        {personalInfo.name} {personalInfo.lastName}
      </div>
      <div className={cl.title}>{personalInfo.title}</div>
    </div>
  );
}
