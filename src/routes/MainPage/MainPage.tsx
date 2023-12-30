// 个人模块界面（总界面）

import './style/MainPage.css';
import PersonalInformation from '@/routes/MainPage/component/PersonalInformation/PersonalInformation';
import ClassPage from '@/routes/MainPage/component/MenuItems/ResourcePage/ClassPage';

const MainPage = () => {
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
        <PersonalInformation />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '14%',
          bottom: '82%',
          background: '#186ff1',
        }}
      />
      <ClassPage />
    </div>
  );
};

export default MainPage;
