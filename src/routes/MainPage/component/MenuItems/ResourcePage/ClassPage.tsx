// 资源界面

import { Tabs } from '@arco-design/web-react';
import AdminViewCheckedClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/AdminViewCheckedClass';
import AdminCheckClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/AdminCheckClass';
import DoneClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/DoneClass';
import CheckClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/CheckClass';
import ApplyClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/ApplyClass';
import ViewFreeClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/ViewFreeClass';
import '../../../style/MainPage.css';

const { TabPane } = Tabs;

const ClassPage = ({ ifLogIn, ifAdmin, name }) => {
  function LogIn(value) {
    if (ifLogIn) {
      return value;
    } else {
      return (
        <div
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'grey',
            marginTop: 100,
            position: 'relative',
            right: 75,
          }}
        >
          请您先进行
          <span style={{ fontWeight: 'bold', color: 'black' }}>登录</span>
          操作！登录后方可申请或查看。
        </div>
      );
    }
  }

  function TabBar() {
    if (ifAdmin) {
      return (
        <Tabs type={'rounded'} tabPosition={'left'} size={'large'}>
          <TabPane key="1" title="查看空闲的教室">
            <ViewFreeClass />
          </TabPane>
          <TabPane key="2" title="申请教室">
            {LogIn(<ApplyClass name={name} />)}
          </TabPane>
          <TabPane key="3" title="查看待审核的教室申请">
            {LogIn(<CheckClass />)}
          </TabPane>
          <TabPane key="4" title="查看已审核的教室申请">
            {LogIn(<DoneClass />)}
          </TabPane>
          <TabPane key="5" title="审核教室预约">
            {LogIn(<AdminCheckClass />)}
          </TabPane>
          <TabPane key="6" title="查看已审核的教室预约">
            {LogIn(<AdminViewCheckedClass />)}
          </TabPane>
        </Tabs>
      );
    } else {
      return (
        <Tabs type={'rounded'} tabPosition={'left'} size={'large'}>
          <TabPane key="1" title="查看空闲的教室">
            <ViewFreeClass />
          </TabPane>
          <TabPane key="2" title="申请教室">
            {LogIn(<ApplyClass name={name} />)}
          </TabPane>
          <TabPane key="3" title="查看待审核的教室申请">
            {LogIn(<CheckClass />)}
          </TabPane>
          <TabPane key="4" title="查看已审核的教室申请">
            {LogIn(<DoneClass />)}
          </TabPane>
        </Tabs>
      );
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        right: '0',
        top: '18%',
        bottom: '0',
        textAlign: 'center',
      }}
    >
      <br />
      <span style={{ fontSize: 25, fontWeight: 'bolder' }}>
        {' '}
        教室借记申请系统
      </span>
      <div
        style={{
          marginLeft: '50px',
          marginTop: '20px',
          marginRight: '50px',
          textAlign: 'left',
        }}
      >
        <br />
        <TabBar />
      </div>
    </div>
  );
};

export default ClassPage;
