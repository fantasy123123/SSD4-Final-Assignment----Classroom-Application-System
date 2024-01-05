// 个人模块界面（总界面）

import './style/MainPage.css';
import { useState } from 'react';
import PersonalInformation from '@/routes/MainPage/component/PersonalInformation/PersonalInformation';
import ClassPage from '@/routes/MainPage/component/MenuItems/ResourcePage/ClassPage';

const MainPage = () => {
  const [ifLogIn, setIfLogIn] = useState(false);
  function getIfLogIn(value) {
    setIfLogIn(value);
  }

  const [ifAdmin, setIfAdmin] = useState(false);
  const [name, setName] = useState('');
  function getIfAdmin(value1, value2) {
    setIfAdmin(value1);
    setName(value2);
  }

  return (
    <div className={'background'}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          right: '0',
          left: '0',
          top: '0',
          bottom: '86%',
        }}
      >
        <div className={'logo'} />
        <PersonalInformation getIfLogIn={getIfLogIn} getIfAdmin={getIfAdmin} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '15%',
          bottom: '81%',
          background: '#186ff1',
        }}
      />
      <ClassPage ifLogIn={ifLogIn} ifAdmin={ifAdmin} name={name} />
    </div>
  );
};

export default MainPage;
