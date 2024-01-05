import { Button, Form, Input, Message, Radio } from '@arco-design/web-react';
import React, { useEffect, useRef, useState } from 'react';

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 14,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 10,
    offset: 7,
  },
};
const AdminCheckAlert = ({ alertData, closeAlert, deleteClass }) => {
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

  const [reasonCheck, setReasonCheck] = useState(false);
  const [radioCheck, setRadioCheck] = useState(false);

  return (
    <div>
      <p>借记人：{alertData.person}</p>
      <p>日期：{alertData.date}</p>
      <p>时间：{tempTime}</p>
      <p>教室：{tempClass}</p>
      <p>缘由：{alertData.reason}</p>
      <p>
        状态：<span style={{ color: '#FF7D00' }}>{alertData.status}</span>
      </p>

      <Form {...formItemLayout} autoComplete="off" labelAlign={'left'}>
        <FormItem label="审核结果" field="审核结果">
          <Radio.Group
            onChange={() => {
              setRadioCheck(true);
            }}
          >
            <Radio value="pass">
              <span style={{ color: 'green' }}>通过</span>
            </Radio>
            <Radio value="notPass">
              <span style={{ color: 'red' }}>不通过</span>
            </Radio>
          </Radio.Group>
        </FormItem>

        <FormItem label="审核结果原因" field="审核结果原因">
          <TextArea
            style={{ width: 275, border: 'grey 1px solid' }}
            placeholder="请输入审核结果原因"
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={value => {
              if (value.trim() === '') {
                setReasonCheck(false);
              } else {
                setReasonCheck(true);
              }
            }}
          />
        </FormItem>
      </Form>

      <FormItem {...noLabelLayout} style={{ position: 'relative', left: 10 }}>
        <Button
          type={'primary'}
          onClick={() => {
            if (radioCheck && reasonCheck) {
              deleteClass(alertData.key);
              Message.info('审核结果提交成功！');
              closeAlert();
            } else {
              Message.error('校验失败，请检查字段！');
            }
          }}
        >
          提交
        </Button>
        <Button
          style={{ marginLeft: 30, color: 'black' }}
          onClick={() => {
            closeAlert();
          }}
        >
          返回
        </Button>
      </FormItem>
    </div>
  );
};

export default AdminCheckAlert;
