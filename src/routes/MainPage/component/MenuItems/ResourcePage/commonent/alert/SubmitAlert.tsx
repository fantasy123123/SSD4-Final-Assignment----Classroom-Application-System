import { Button, Message } from '@arco-design/web-react';

const SubmitAlert = ({ alertData, closeAlert, reset }) => {
  let tempClass = '';
  let tempTime = '';

  alertData.class.forEach(index => {
    tempClass += `${index}、`;
  });
  tempClass = tempClass.slice(0, -1);

  alertData.time.forEach(index => {
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
      <div style={{ display: 'flex', marginLeft: 95 }}>
        <Button
          type={'primary'}
          onClick={() => {
            Message.info('申请借记教室成功！');
            reset();
            closeAlert();
          }}
        >
          确认借记
        </Button>
        <Button
          type={'primary'}
          status={'danger'}
          style={{ marginLeft: 30 }}
          onClick={() => {
            closeAlert();
          }}
        >
          取消并返回
        </Button>
      </div>
    </div>
  );
};

export default SubmitAlert;
