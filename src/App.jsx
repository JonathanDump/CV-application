import { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Settings } from './components/CVsettings/settingsBlock/Settings';
import cl from './app.module.scss';
import { CVBlock } from './components/CV/CVBlock';

function App() {
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      lastName: '',
      photo: '',
      address: '',
      phone: '',
      email: '',
      description: '',
    },
    experience: [
      {
        id: crypto.randomUUID(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      },
    ],
  });
  useEffect(() => {
    console.log('app data', data);
  }, [data]);

  return (
    <div className={cl.app}>
      <Header></Header>
      <div className={cl.main}>
        <Settings data={data} setData={setData}></Settings>
        <CVBlock data={data}></CVBlock>
      </div>
    </div>
  );
}

export default App;
