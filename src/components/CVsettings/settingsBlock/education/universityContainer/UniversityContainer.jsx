import { InfoContainer } from '../../../../CV/overallData/infoContainer/infoContainer';
import { InputContainer } from '../../../inputContainer/InputContainer';
import cl from './universityContainer.module.scss';
import style from '/src/scss/modules/button.module.scss';

export function UniversityContainer({ side, education }) {
  if (side === 'left') {
    return (
      <div className={cl.universityContainer}>
        <InputContainer
          inputClass={'name'}
          label={'University Name'}
          type={'text'}
        ></InputContainer>

        <InputContainer
          inputClass={'city'}
          label={'City'}
          type={'text'}
        ></InputContainer>

        <InputContainer
          inputClass={'degree'}
          label={'Degree'}
          type={'text'}
        ></InputContainer>

        <InputContainer
          inputClass={'subject'}
          label={'Subject'}
          type={'text'}
        ></InputContainer>

        <InputContainer
          inputClass={'from'}
          label={'From'}
          type={'date'}
        ></InputContainer>

        <InputContainer
          inputClass={'to'}
          label={'To'}
          type={'date'}
        ></InputContainer>

        <button type="button" className={style.button}>
          Delete
        </button>
      </div>
    );
  }

  return <InfoContainer education={education}></InfoContainer>;
}
