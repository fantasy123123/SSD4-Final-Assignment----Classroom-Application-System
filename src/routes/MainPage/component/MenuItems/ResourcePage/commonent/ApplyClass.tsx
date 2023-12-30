import { useRef, useEffect, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  Message,
  DatePicker,
  Alert,
} from '@arco-design/web-react';
import SubmitAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/SubmitAlert';
import CheckAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/CheckAlert';

const { TextArea } = Input;
const FormItem = Form.Item;

const timeOptions = [
  '8：00~9：40',
  '10：00~11：40',
  '14：00~15：40',
  '16：00~17：40',
  '19：00~20：40',
];

const initClass = [
  'A101',
  'A102',
  'A103',
  'B101',
  'B102',
  'C101',
  'C102',
  'D101',
];

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 10,
  },
};

const initData = [
  {
    key: 1,
    balcony: 'A',
    class: 'A101',
    theFirst: '非空闲',
    theSecond: '非空闲',
    theThird: '非空闲',
    theFourth: '空闲',
    theFifth: '空闲',
    status: '审核中',
  },
  {
    key: 2,
    balcony: 'A',
    class: 'A102',
    theFirst: '空闲',
    theSecond: '非空闲',
    theThird: '非空闲',
    theFourth: '非空闲',
    theFifth: '空闲',
    status: '审核中',
  },
  {
    key: 3,
    balcony: 'A',
    class: 'A103',
    theFirst: '空闲',
    theSecond: '空闲',
    theThird: '空闲',
    theFourth: '非空闲',
    theFifth: '非空闲',
    status: '审核中',
  },
  {
    key: 4,
    balcony: 'B',
    class: 'B101',
    theFirst: '非空闲',
    theSecond: '空闲',
    theThird: '空闲',
    theFourth: '空闲',
    theFifth: '非空闲',
    status: '审核中',
  },
  {
    key: 5,
    balcony: 'B',
    class: 'B102',
    theFirst: '空闲',
    theSecond: '空闲',
    theThird: '非空闲',
    theFourth: '空闲',
    theFifth: '空闲',
    status: '审核中',
  },
  {
    key: 6,
    balcony: 'C',
    class: 'C101',
    theFirst: '空闲',
    theSecond: '非空闲',
    theThird: '非空闲',
    theFourth: '空闲',
    theFifth: '空闲',
    status: '审核中',
  },
  {
    key: 7,
    balcony: 'C',
    class: 'C102',
    theFirst: '空闲',
    theSecond: '空闲',
    theThird: '非空闲',
    theFourth: '空闲',
    theFifth: '非空闲',
    status: '审核中',
  },
  {
    key: 8,
    balcony: 'D',
    class: 'D101',
    theFirst: '空闲',
    theSecond: '非空闲',
    theThird: '空闲',
    theFourth: '非空闲',
    theFifth: '空闲',
    status: '审核中',
  },
];

const ApplyClass = () => {
  const formRef = useRef();
  const [classOptions, setClassOptions] = useState(initClass);

  const [ifDate, setIfDate] = useState(false);
  const [ifTime, setIfTime] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('顾夏');

  const [noDataString, setNoDataString] = useState('请先选择日期与时间段！');

  const [submitAlert, setSubmitAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  function closeAlert() {
    setAlertData({});
    setSubmitAlert(false);
  }

  useEffect(() => {
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  useEffect(() => {
    const tempTime = [];
    if (selectedTime.indexOf('8：00~9：40') !== -1) {
      tempTime.push('theFirst');
    }
    if (selectedTime.indexOf('10：00~11：40') !== -1) {
      tempTime.push('theSecond');
    }
    if (selectedTime.indexOf('14：00~15：40') !== -1) {
      tempTime.push('theThird');
    }
    if (selectedTime.indexOf('16：00~17：40') !== -1) {
      tempTime.push('theFourth');
    }
    if (selectedTime.indexOf('19：00~20：40') !== -1) {
      tempTime.push('theFifth');
    }

    if (!ifDate || !ifTime) {
      setNoDataString('请先选择日期与时间段！');
      setClassOptions([]);
    } else if (ifTime && ifDate) {
      setNoDataString('暂无空闲教室！');
      const tempData = [];
      initData.forEach(value => {
        let free = true;
        tempTime.forEach(key => {
          if (value[key] === '非空闲') {
            free = false;
          }
        });
        if (free) {
          tempData.push(value.class);
        }
      });
      setClassOptions([...tempData]);
    }
  }, [ifDate, ifTime, selectedTime]);

  return (
    <div style={{ maxWidth: 650, marginLeft: 175 }}>
      <Form
        ref={formRef}
        autoComplete="off"
        {...formItemLayout}
        size={'large'}
        labelAlign={'left'}
      >
        <FormItem label="日期" field="日期" rules={[{ required: true }]}>
          <DatePicker
            onChange={value => {
              if (value) {
                setIfDate(true);
                setSelectedDate(value);
              } else {
                setIfDate(false);
                setSelectedDate('');
              }
            }}
          />
        </FormItem>

        <FormItem
          label="时间段"
          required
          field="时间段"
          rules={[{ type: 'array', minLength: 1, required: true }]}
        >
          <Select
            mode="multiple"
            allowClear
            showSearch
            placeholder="请选择日期"
            options={timeOptions}
            onChange={value => {
              if (value.length !== 0) {
                setIfTime(true);
                setSelectedTime([...value]);
              } else if (value.length === 0) {
                setIfTime(false);
                setSelectedTime([]);
              }
            }}
          />
        </FormItem>

        <FormItem
          label="空闲教室"
          required
          field="空闲教室"
          rules={[{ type: 'array', minLength: 1, required: true }]}
        >
          <Select
            mode="multiple"
            allowClear
            showSearch
            placeholder="请选择空闲教室"
            options={classOptions}
            onChange={value => {
              if (value.length !== 0) {
                setSelectedClass([...value]);
              } else if (value.length === 0) {
                setSelectedClass([]);
              }
            }}
            notFoundContent={
              <div
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  margin: 20,
                  color: 'grey',
                }}
              >
                {noDataString}
              </div>
            }
          />
        </FormItem>

        <FormItem label="缘由" field="缘由" rules={[{ required: true }]}>
          <TextArea
            placeholder="请输入借记缘由"
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={value => {
              if (value.length !== 0) {
                setSelectedReason(value);
              } else if (value.length === 0) {
                setSelectedReason('');
              }
            }}
          />
        </FormItem>

        <FormItem
          label="借记人"
          field="借记人"
          rules={[{ required: true }]}
          initialValue={'顾夏'}
        >
          <Input
            placeholder="请输入借记人"
            style={{ width: '40%' }}
            onChange={value => {
              if (value.length !== 0) {
                setSelectedPerson(value);
              } else if (value.length === 0) {
                setSelectedPerson('');
              }
            }}
          />
        </FormItem>

        <FormItem
          {...noLabelLayout}
          field="readme"
          triggerPropName="checked"
          rules={[{ type: 'boolean', true: true }]}
        >
          <Checkbox>我已阅读并同意相关规定。</Checkbox>
        </FormItem>

        <FormItem {...noLabelLayout}>
          <Button
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  setSubmitAlert(true);
                  setAlertData({
                    date: selectedDate,
                    time: selectedTime,
                    class: selectedClass,
                    reason: selectedReason,
                    person: selectedPerson,
                  });
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
            type="primary"
            style={{ marginRight: 24 }}
          >
            提交
          </Button>

          <Button
            onClick={() => {
              formRef.current.resetFields();
              setIfDate(false);
              setIfTime(false);
            }}
          >
            重置
          </Button>
        </FormItem>
      </Form>
      {submitAlert ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rbga(0,0,0,0)',
          }}
        >
          <Alert
            style={{ position: 'fixed', top: 0, left: 565, width: 500 }}
            type="info"
            title="请确认是否申请借记"
            content={
              <SubmitAlert
                alertData={alertData}
                closeAlert={closeAlert}
                reset={() => {
                  formRef.current.resetFields();
                  setIfDate(false);
                  setIfTime(false);
                }}
              />
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default ApplyClass;
