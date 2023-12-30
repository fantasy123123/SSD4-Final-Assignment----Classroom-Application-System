// 资源界面

import { Tabs } from '@arco-design/web-react';
import DoneClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/DoneClass';
import CheckClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/CheckClass';
import ApplyClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/ApplyClass';
import ViewFreeClass from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/ViewFreeClass';
import '../../../style/MainPage.css';

const { TabPane } = Tabs;

const ResourcePage = () => {
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
        <Tabs type={'rounded'} tabPosition={'left'} size={'large'}>
          <TabPane key="1" title="查看空闲的教室">
            <ViewFreeClass />
          </TabPane>
          <TabPane key="2" title="申请教室">
            <ApplyClass />
          </TabPane>
          <TabPane key="3" title="查看待审核的教室申请">
            <CheckClass />
          </TabPane>
          <TabPane key="4" title="查看已审核的教室申请">
            <DoneClass />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourcePage;
