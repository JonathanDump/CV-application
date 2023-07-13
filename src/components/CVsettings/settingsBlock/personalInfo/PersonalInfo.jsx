import { useState } from 'react';
import { InputContainer } from '../../inputContainer/InputContainer';

import cl from './personalInfo.module.scss';

export function PersonalInfo({ data, setData }) {
  const personalInfo = data.personalInfo;
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
        handleChange={(e) =>
          setData({
            ...data,
            personalInfo: { ...personalInfo, photo: e.target.value },
          })
        }
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
        type="text"
        handleChange={(e) =>
          setData({
            ...data,
            personalInfo: { ...personalInfo, description: e.target.value },
          })
        }
      ></InputContainer>
    </div>
  );
}
