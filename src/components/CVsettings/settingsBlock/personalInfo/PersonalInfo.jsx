import { useState } from 'react';
import { InputContainer } from '../../inputContainer/InputContainer';

import cl from './personalInfo.module.scss';

export function PersonalInfo({ data, setData }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    lastName: '',
    photo: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  });
  return (
    <div className={cl.personalInfo}>
      <InputContainer
        value={data.personalInfo.name}
        label="Name"
        type="text"
        handleChange={(e) =>
          setData({
            ...data,
            personalInfo: { ...personalInfo, name: e.target.value },
          })
        }
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
