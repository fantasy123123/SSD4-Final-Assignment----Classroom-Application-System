import {
  Table,
  TableColumnProps,
  Checkbox,
  DatePicker,
} from '@arco-design/web-react';
import { useEffect, useState } from 'react';

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
  },
];

const ViewFreeClass = () => {
  const [data, setData] = useState([]);
  const [ifDate, setIfDate] = useState(false);

  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [C, setC] = useState(false);
  const [D, setD] = useState(false);

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [noDataString, setNoDataString] = useState('请先选择日期！');

  useEffect(() => {
    if (ifDate) {
      setData([...initData]);
      setNoDataString('暂无空闲教室！');
    } else {
      setData([]);
      setNoDataString('请先选择日期！');
    }
  }, [ifDate]);

  useEffect(() => {
    setData([]);
    if (ifDate) {
      if (
        !A &&
        !B &&
        !C &&
        !D &&
        !first &&
        !second &&
        !third &&
        !fourth &&
        !fifth
      ) {
        setData(initData);
      } else {
        const tempData = [];
        const tempBalcony = [];
        const tempTime = [];
        if (A) {
          tempBalcony.push('A');
        }
        if (B) {
          tempBalcony.push('B');
        }
        if (C) {
          tempBalcony.push('C');
        }
        if (D) {
          tempBalcony.push('D');
        }
        if (first) {
          tempTime.push('theFirst');
        }
        if (second) {
          tempTime.push('theSecond');
        }
        if (third) {
          tempTime.push('theThird');
        }
        if (fourth) {
          tempTime.push('theFourth');
        }
        if (fifth) {
          tempTime.push('theFifth');
        }

        initData.forEach(value => {
          if (tempBalcony.length !== 0 && tempTime.length === 0) {
            let match = false;
            tempBalcony.forEach(key => {
              if (key === value.balcony) {
                match = true;
              }
            });
            if (match) {
              tempData.push(value);
            }
          }

          if (tempTime.length !== 0 && tempBalcony.length === 0) {
            let match = true;
            tempTime.forEach(key => {
              if (value[key] === '非空闲') {
                match = false;
              }
            });
            if (match) {
              tempData.push(value);
            }
          }

          if (tempTime.length !== 0 && tempBalcony.length !== 0) {
            let match1 = false;
            let match2 = true;
            tempBalcony.forEach(key => {
              if (key === value.balcony) {
                match1 = true;
              }
            });
            tempTime.forEach(key => {
              if (value[key] === '非空闲') {
                match2 = false;
              }
            });
            if (match1 && match2) {
              tempData.push(value);
            }
          }
        });
        setData([...tempData]);
      }
    }
  }, [A, B, C, D, first, second, third, fourth, fifth]);

  const columns: TableColumnProps[] = [
    {
      title: '楼座',
      dataIndex: 'balcony',
    },
    {
      title: '教室',
      dataIndex: 'class',
    },
    {
      title: '8：00~9：40',
      dataIndex: 'theFirst',
      render: (col, value) => {
        if (value.theFirst === '空闲') {
          return <span style={{ color: 'green' }}>{value.theFirst}</span>;
        } else if (value.theFirst === '非空闲') {
          return <span style={{ color: 'red' }}>{value.theFirst}</span>;
        }
        return null;
      },
    },
    {
      title: '10：00~11：40',
      dataIndex: 'theSecond',
      render: (col, value) => {
        if (value.theSecond === '空闲') {
          return <span style={{ color: 'green' }}>{value.theSecond}</span>;
        } else if (value.theSecond === '非空闲') {
          return <span style={{ color: 'red' }}>{value.theSecond}</span>;
        }
        return null;
      },
    },
    {
      title: '14：00~15：40',
      dataIndex: 'theThird',
      render: (col, value) => {
        if (value.theThird === '空闲') {
          return <span style={{ color: 'green' }}>{value.theThird}</span>;
        } else if (value.theThird === '非空闲') {
          return <span style={{ color: 'red' }}>{value.theThird}</span>;
        }
        return null;
      },
    },
    {
      title: '16：00~17：40',
      dataIndex: 'theFourth',
      render: (col, value) => {
        if (value.theFourth === '空闲') {
          return <span style={{ color: 'green' }}>{value.theFourth}</span>;
        } else if (value.theFourth === '非空闲') {
          return <span style={{ color: 'red' }}>{value.theFourth}</span>;
        }
        return null;
      },
    },
    {
      title: '19：00~20：40',
      dataIndex: 'theFifth',
      render: (col, value) => {
        if (value.theFifth === '空闲') {
          return <span style={{ color: 'green' }}>{value.theFifth}</span>;
        } else if (value.theFifth === '非空闲') {
          return <span style={{ color: 'red' }}>{value.theFifth}</span>;
        }
        return null;
      },
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', marginLeft: 50 }}>
        <DatePicker
          onChange={value => {
            if (value) {
              setIfDate(true);
            } else {
              setIfDate(false);
            }
          }}
        />
        <div
          style={{
            fontSize: 17,
            fontWeight: 'bolder',
            marginLeft: 50,
            position: 'relative',
            top: 2,
          }}
        >
          楼座：
        </div>
        <div style={{ display: 'flex', position: 'relative', top: 5 }}>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setA(!A);
            }}
          >
            A
          </Checkbox>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setB(!B);
            }}
          >
            B
          </Checkbox>
          <Checkbox
            style={{ marginRight: 20 }}
            onChange={() => {
              setC(!C);
            }}
          >
            C
          </Checkbox>
          <Checkbox
            onChange={() => {
              setD(!D);
            }}
          >
            D
          </Checkbox>
        </div>
      </div>
      <div style={{ marginLeft: 50, display: 'flex' }}>
        <div
          style={{
            fontSize: 17,
            fontWeight: 'bolder',
            marginTop: 10,
          }}
        >
          空闲时间段：
        </div>
        <div style={{ display: 'flex', marginTop: 14 }}>
          <Checkbox
            style={{ marginLeft: 55 }}
            onChange={() => {
              setFirst(!first);
            }}
          >
            8：00~9：40
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 58 }}
            onChange={() => {
              setSecond(!second);
            }}
          >
            10：00~11：40
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 67 }}
            onChange={() => {
              setThird(!third);
            }}
          >
            14：00~15：40
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 67 }}
            onChange={() => {
              setFourth(!fourth);
            }}
          >
            16：00~17：40
          </Checkbox>
          <Checkbox
            style={{ marginLeft: 68 }}
            onChange={() => {
              setFifth(!fifth);
            }}
          >
            19：00~20：40
          </Checkbox>
        </div>
      </div>

      <Table
        stripe={true}
        borderCell={true}
        columns={columns}
        data={data}
        noDataElement={
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
    </div>
  );
};

export default ViewFreeClass;
