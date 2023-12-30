import { Button, Message } from '@arco-design/web-react';

const DeleteAlert = ({ alertData, closeAlert, deleteClass }) => {
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

  function statusColor() {
    if (alertData.status === '已通过') {
      return <span style={{ color: 'green' }}>{alertData.status}</span>;
    } else if (alertData.status === '未通过') {
      return <span style={{ color: 'red' }}>{alertData.status}</span>;
    } else if (alertData.status === '已取消借记') {
      return <span style={{ color: 'grey' }}>{alertData.status}</span>;
    }
    return null;
  }

  return (
    <div>
      <p>日期：{alertData.date}</p>
      <p>时间：{tempTime}</p>
      <p>教室：{tempClass}</p>
      <p>缘由：{alertData.reason}</p>
      <p>借记人：{alertData.person}</p>
      <p>状态：{statusColor()}</p>
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
          status={'danger'}
          style={{ marginLeft: 30 }}
          onClick={() => {
            deleteClass(alertData.key);
            Message.info('删除该记录成功！');
            closeAlert();
          }}
        >
          确认删除
        </Button>
      </div>
    </div>
  );
};

export default DeleteAlert;
