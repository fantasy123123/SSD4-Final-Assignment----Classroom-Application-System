import { Alert, Button, Table, TableColumnProps } from '@arco-design/web-react';
import { useState } from 'react';
import CheckAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/CheckAlert';

const initData = [
  {
    key: 1,
    class: ['A101'],
    date: '2023-12-30',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 2,
    class: ['A102', 'C101'],
    date: '2023-12-29',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 3,
    class: ['A103'],
    date: '2023-12-28',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 4,
    class: ['B101'],
    date: '2023-12-27',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 5,
    class: ['A102', 'C101'],
    date: '2023-12-26',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 6,
    class: ['A102', 'C101'],
    date: '2023-12-25',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 7,
    class: ['A102', 'C101'],
    date: '2023-12-24',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
  {
    key: 8,
    class: ['D101'],
    date: '2023-12-23',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '审核中',
  },
];

const CheckClass = () => {
  const [data, setData] = useState(initData);

  const [checkAlert, setCheckAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const columns: TableColumnProps[] = [
    {
      title: '教室',
      dataIndex: 'class',
      render: (col, record) => {
        let temp = '';
        record.class.forEach(index => {
          temp += `${index}、`;
        });
        temp = temp.slice(0, -1);
        return temp;
      },
    },
    {
      title: '日期',
      dataIndex: 'date',
    },
    {
      title: '时间',
      dataIndex: 'timePeriod',
      render: (col, record) => {
        let temp = '';
        record.timePeriod.forEach(index => {
          temp += `${index}、`;
        });
        temp = temp.slice(0, -1);
        return temp;
      },
    },
    {
      title: '原因',
      dataIndex: 'reason',
    },
    {
      title: '借记人',
      dataIndex: 'person',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (col, value) => (
        <span style={{ color: '#FF7D00' }}>{value.status}</span>
      ),
    },
    {
      title: '操作',
      render: (col, value) => {
        return (
          <Button
            type={'primary'}
            onClick={() => {
              setCheckAlert(true);
              setAlertData(value);
            }}
          >
            取消申请
          </Button>
        );
      },
    },
  ];

  function closeAlert() {
    setAlertData({});
    setCheckAlert(false);
  }

  function deleteClass(key) {
    let tempIndex;
    data.forEach((value, index) => {
      if (value.key === key) {
        tempIndex = index;
      }
    });
    data.splice(tempIndex, 1);
    setData([...data]);
  }

  return (
    <>
      <Table
        stripe={true}
        borderCell={true}
        columns={columns}
        data={data}
        pagination={{
          showTotal: true,
          pageSize: 5,
        }}
        style={{
          marginRight: '30px',
          marginLeft: '30px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      />
      {checkAlert ? (
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
            title="请确认是否取消申请"
            content={
              <CheckAlert
                alertData={alertData}
                closeAlert={closeAlert}
                deleteClass={deleteClass}
              />
            }
          />
        </div>
      ) : null}
    </>
  );
};

export default CheckClass;
