import cl from './personalData.module.scss';

export function PersonalData() {
  return (
    <div className={cl.personalData}>
      <div className={cl.imageContainer}></div>

      <div className={cl.details}>
        <div className={cl.title}></div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Phone number</div>
          <div className={cl.itemData} id={cl.phoneData}></div>
        </div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Email</div>
          <div className={cl.itemData} id={cl.emailData}></div>
        </div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Address</div>
          <div className={cl.itemData} id={cl.addressData}></div>
        </div>
      </div>
    </div>
  );
}
