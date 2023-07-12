import { InputContainer } from '../../inputContainer/InputContainer';

import cl from './personalInfo.module.scss';

export function PersonalInfo() {
  return (
    <div className={cl.personalInfo}>
      <InputContainer
        inputClass="name"
        label="Name"
        type="text"
      ></InputContainer>

      <InputContainer
        inputClass="lastName"
        label="Last Name"
        type="text"
      ></InputContainer>

      <InputContainer
        inputClass="photo"
        label="Photo"
        type="file"
      ></InputContainer>

      <InputContainer
        inputClass="title"
        label="Title"
        type="text"
      ></InputContainer>

      <InputContainer
        inputClass="location"
        label="Location"
        type="text"
      ></InputContainer>

      <InputContainer
        inputClass="phone"
        label="Phone Number"
        type="tel"
      ></InputContainer>

      <InputContainer
        inputClass="email"
        label="Email"
        type="email"
      ></InputContainer>

      <InputContainer
        inputClass="description"
        label="Description"
        type="text"
      ></InputContainer>
    </div>
  );
}
