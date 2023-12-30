import {
  Alert,
  Button,
  Checkbox,
  DatePicker,
  Table,
  TableColumnProps,
} from '@arco-design/web-react';
import { useEffect, useState } from 'react';
import AgainAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/AgainAlert';
import CancelAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/CancelAlert';
import WhyAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/WhyAlert';
import DeleteAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/DeleteAlert';

const initData = [
  {
    key: 1,
    class: ['A101'],
    date: '2023-12-30',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
  },
  {
    key: 2,
    class: ['A102', 'C101'],
    date: '2023-12-29',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '原因',
  },
  {
    key: 3,
    class: ['A103'],
    date: '2023-12-28',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
  },
  {
    key: 4,
    class: ['B101'],
    date: '2023-12-27',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '原因',
  },
  {
    key: 5,
    class: ['A102', 'C101'],
    date: '2023-12-26',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
  },
  {
    key: 6,
    class: ['A102', 'C101'],
    date: '2023-12-25',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '原因',
  },
  {
    key: 7,
    class: ['A102', 'C101'],
    date: '2023-12-24',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
  },
  {
    key: 8,
    class: ['D101'],
    date: '2023-12-23',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '原因',
  },
];

const DoneClass = () => {
  const [data, setData] = useState(initData);
  const [showData, setShowData] = useState(data);

  const [deleteAlert, setDeleteAlert] = useState(false);
  const [cancelAlert, setCancelAlert] = useState(false);
  const [whyAlert, setWhyAlert] = useState(false);
  const [againAlert, setAgainAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const [pass, setPass] = useState(false);
  const [notPass, setNotPass] = useState(false);
  const [cancel, setCancel] = useState(false);

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
      render: (col, value) => {
        if (value.status === '已通过') {
          return <span style={{ color: 'green' }}>{value.status}</span>;
        } else if (value.status === '未通过') {
          return <span style={{ color: 'red' }}>{value.status}</span>;
        } else if (value.status === '已取消借记') {
          return <span style={{ color: 'gray' }}>{value.status}</span>;
        }
        return null;
      },
    },
    {
      title: '操作',
      render: (col, value) => {
        if (value.status === '已通过') {
          return (
            <Button
              type={'primary'}
              onClick={() => {
                setCancelAlert(true);
                setAlertData(value);
              }}
            >
              取消申请
            </Button>
          );
        } else if (value.status === '未通过') {
          return (
            <Button
              type={'primary'}
              status={'warning'}
              onClick={() => {
                setWhyAlert(true);
                setAlertData(value);
              }}
            >
              查看原因
            </Button>
          );
        } else if (value.status === '已取消借记') {
          return (
            <Button
              status={'warning'}
              onClick={() => {
                setAgainAlert(true);
                setAlertData(value);
              }}
            >
              重新申请
            </Button>
          );
        }
        return null;
      },
    },
    {
      title: '删除记录',
      render: (col, value) => {
        return (
          <Button
            status={'danger'}
            onClick={() => {
              setDeleteAlert(true);
              setAlertData(value);
            }}
          >
            删除该条记录
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    if (!cancel && !pass && !notPass) {
      setShowData([...data]);
    } else {
      const tempData = [];

      if (pass) {
        data.forEach(value => {
          if (value.status === '已通过') {
            tempData.push(value);
          }
        });
      }

      if (notPass) {
        data.forEach(value => {
          if (value.status === '未通过') {
            tempData.push(value);
          }
        });
      }

      if (cancel) {
        data.forEach(value => {
          if (value.status === '已取消借记') {
            tempData.push(value);
          }
        });
      }

      setShowData([...tempData]);
    }
  }, [cancel, pass, notPass, deleteAlert, whyAlert, againAlert, cancelAlert]);

  function closeAlert() {
    setAlertData({});
    setDeleteAlert(false);
    setCancelAlert(false);
    setWhyAlert(false);
    setAgainAlert(false);
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
    setShowData([...data]);
  }

  function changeStatus(key) {
    data.forEach(value => {
      if (value.key === key) {
        value.status = '已取消借记';
      }
    });
    setData([...data]);
    setShowData([...data]);
  }

  return (
    <>
      <div style={{ display: 'flex', marginLeft: 50 }}>
        <div
          style={{
            fontSize: 17,
            fontWeight: 'bolder',
            marginLeft: 50,
            position: 'relative',
            top: 2,
          }}
        >
          状态：
        </div>
        <div style={{ display: 'flex', position: 'relative', top: 5 }}>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setPass(!pass);
            }}
          >
            已通过
          </Checkbox>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setNotPass(!notPass);
            }}
          >
            未通过
          </Checkbox>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setCancel(!cancel);
            }}
          >
            已取消借记
          </Checkbox>
        </div>
      </div>

      <Table
        stripe={true}
        borderCell={true}
        columns={columns}
        data={showData}
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

      {againAlert ? (
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
            title="请确认是否重新申请："
            content={
              <AgainAlert
                alertData={alertData}
                closeAlert={closeAlert}
                deleteClass={deleteClass}
              />
            }
          />
        </div>
      ) : null}

      {cancelAlert ? (
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
            title="请确认是否取消申请："
            content={
              <CancelAlert
                alertData={alertData}
                closeAlert={closeAlert}
                changeStatus={changeStatus}
              />
            }
          />
        </div>
      ) : null}

      {whyAlert ? (
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
            title="查看原因："
            content={<WhyAlert alertData={alertData} closeAlert={closeAlert} />}
          />
        </div>
      ) : null}

      {deleteAlert ? (
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
            title="请确认是否删除该记录："
            content={
              <DeleteAlert
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

export default DoneClass;
