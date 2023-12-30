import { Button, Message } from '@arco-design/web-react';

const AgainAlert = ({ alertData, closeAlert, deleteClass }) => {
  let tempClass = '';
  let tempTime = '';

  alertData.class.forEach(index => {
    tempClass += `${index}、`;
  });
  tempClass = tempClass.slice(0, -1);

  alertData.timePeriod.forEach(index => {
    tempTime += `${index}、`;
  });
  tempTime = tempTime.slice(0, -1);

  return (
    <div>
      <p>日期：{alertData.date}</p>
      <p>时间：{tempTime}</p>
      <p>教室：{tempClass}</p>
      <p>缘由：{alertData.reason}</p>
      <p>借记人：{alertData.person}</p>
      <p>
        状态：<span style={{ color: 'grey' }}>{alertData.status}</span>
      </p>
      <div style={{ display: 'flex', marginLeft: 115 }}>
        <Button
          type={'primary'}
          onClick={() => {
            closeAlert();
          }}
        >
          返回
        </Button>
        <Button
          type={'primary'}
          status={'success'}
          style={{ marginLeft: 30 }}
          onClick={() => {
            deleteClass(alertData.key);
            Message.info('重新申请教室成功！请于待审核队列中查看。');
            closeAlert();
          }}
        >
          重新申请
        </Button>
      </div>
    </div>
  );
};

export default AgainAlert;
