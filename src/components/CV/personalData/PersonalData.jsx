import cl from "./personalData.module.scss";

export function PersonalData({ personalData }) {
  return (
    <div className={cl.personalData}>
      <div className={cl.imageContainer}>
        <img src={personalData.photo} alt="" />
      </div>

      <div className={cl.details}>
        <div className={cl.title}>Personal details</div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Phone number</div>
          <div className={cl.itemData} id={cl.phoneData}>
            {personalData.phone}
          </div>
        </div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Email</div>
          <div className={cl.itemData} id={cl.emailData}>
            {personalData.email}
          </div>
        </div>
        <div className={cl.detailsItem}>
          <div className={cl.itemTitle}>Address</div>
          <div className={cl.itemData} id={cl.addressData}>
            {personalData.location}
          </div>
        </div>
      </div>
    </div>
  );
}
