import {
  Alert,
  Button,
  Checkbox,
  Table,
  TableColumnProps,
} from '@arco-design/web-react';
import { useEffect, useState } from 'react';
import AdminDeleteAlert from '@/routes/MainPage/component/MenuItems/ResourcePage/commonent/alert/AdminDeleteAlert';

const initData = [
  {
    key: 1,
    class: ['A101'],
    date: '2023-12-30',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
    why: '缘由合理，准许通过',
  },
  {
    key: 2,
    class: ['A102', 'C101'],
    date: '2023-12-29',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '未通过原因',
  },
  {
    key: 3,
    class: ['A103'],
    date: '2023-12-28',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
    why: '缘由合理，准许通过',
  },
  {
    key: 4,
    class: ['B101'],
    date: '2023-12-27',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '未通过原因',
  },
  {
    key: 5,
    class: ['A102', 'C101'],
    date: '2023-12-26',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
    why: '缘由合理，准许通过',
  },
  {
    key: 6,
    class: ['A102', 'C101'],
    date: '2023-12-25',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '未通过原因',
  },
  {
    key: 7,
    class: ['A102', 'C101'],
    date: '2023-12-24',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '已通过',
    why: '缘由合理，准许通过',
  },
  {
    key: 8,
    class: ['D101'],
    date: '2023-12-23',
    timePeriod: ['8：00~9：40', '10：00~11：40'],
    reason: '考试',
    person: '顾夏',
    status: '未通过',
    why: '未通过原因',
  },
];

const AdminViewCheckedClass = () => {
  const [data, setData] = useState(initData);
  const [showData, setShowData] = useState(data);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const [pass, setPass] = useState(false);
  const [notPass, setNotPass] = useState(false);

  const columns: TableColumnProps[] = [
    {
      title: '借记人',
      dataIndex: 'person',
    },
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
      title: '缘由',
      dataIndex: 'reason',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (col, value) => {
        if (value.status === '已通过') {
          return <span style={{ color: 'green' }}>{value.status}</span>;
        } else if (value.status === '未通过') {
          return <span style={{ color: 'red' }}>{value.status}</span>;
        }
        return null;
      },
    },
    {
      title: '审核结果原因',
      dataIndex: 'why',
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
    if (!pass && !notPass) {
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

      setShowData([...tempData]);
    }
  }, [pass, notPass, deleteAlert]);

  function closeAlert() {
    setAlertData({});
    setDeleteAlert(false);
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

      {deleteAlert ? (
        <div
          style={{
            position: 'fixed',
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
              <AdminDeleteAlert
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

export default AdminViewCheckedClass;
