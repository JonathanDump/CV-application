import { InputContainer } from "../../inputContainer/InputContainer";

import inputs from "../../../../scss/modules/inputsWrapper.module.scss";
import category from "../../../../scss/modules/inputCategory.module.scss";
export function PersonalInfo({ data, setData }) {
  const { personalInfo } = data;
  return (
    <div className={category.inputCategory}>
      <div className={category.title}>Personal Info</div>
      <div className={inputs.inputsWrapper}>
        <InputContainer
          value={data.personalInfo.name}
          label="Name"
          type="text"
          handleChange={({ target: { value: name } }) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, name },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="lastName"
          label="Last Name"
          type="text"
          handleChange={(e) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, lastName: e.target.value },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="photo"
          label="Photo"
          type="file"
          handleChange={(e) => {
            const file = e.target.files[0];
            if (!file) {
              return;
            }
            const reader = new FileReader();
            reader.onload = () => {
              console.log(reader.result);
              setData({
                ...data,
                personalInfo: { ...personalInfo, photo: reader.result },
              });
            };
            reader.readAsDataURL(file);
          }}
        ></InputContainer>
        <InputContainer
          inputClass="title"
          label="Title"
          type="text"
          handleChange={(e) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, title: e.target.value },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="location"
          label="Location"
          type="text"
          handleChange={(e) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, location: e.target.value },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="phone"
          label="Phone Number"
          type="tel"
          handleChange={(e) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, phone: e.target.value },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="email"
          label="Email"
          type="email"
          handleChange={(e) =>
            setData({
              ...data,
              personalInfo: { ...personalInfo, email: e.target.value },
            })
          }
        ></InputContainer>
        <InputContainer
          inputClass="description"
          label="Description"
          type="long-text"
          handleChange={(e) => {
            console.log(e.target.value);
            setData({
              ...data,
              personalInfo: { ...personalInfo, description: e.target.value },
            });
          }}
        ></InputContainer>
      </div>
    </div>
  );
}
