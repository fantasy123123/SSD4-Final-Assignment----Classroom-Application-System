import { Button } from '@arco-design/web-react';

const WhyAlert = ({ alertData, closeAlert }) => {
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
        状态：<span style={{ color: 'red' }}>{alertData.status}</span>
      </p>
      <p>未通过原因：{alertData.why}</p>
      <div style={{ display: 'flex', marginLeft: 177 }}>
        <Button
          type={'primary'}
          onClick={() => {
            closeAlert();
          }}
        >
          返回
        </Button>
      </div>
    </div>
  );
};

export default WhyAlert;
