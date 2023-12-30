// 右上方的个人信息部分
import { Divider, Typography } from '@arco-design/web-react';

const { Text } = Typography;

const person = {
  name: '顾夏',
  college: '计算机学院',
  class: '讲师',
};

const PersonalInformation = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: 30,
      }}
    >
      <div style={{ marginTop: '25px', textAlign: 'right' }}>
        <div className="divider-demo">
          <Text>
            <span style={{ fontSize: '15px' }}>{person.name}</span>
          </Text>
          <Divider type="vertical" />
          <Text>
            <span style={{ fontSize: '15px' }}>{person.college}</span>
          </Text>
          <Divider type="vertical" />
          <Text>
            <span style={{ fontSize: '15px' }}>{person.class}</span>
          </Text>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="divider-demo">
            <Text>
              <a
                href={'about:blank'}
                style={{ textDecoration: 'none', fontSize: '15px' }}
              >
                切换账号
              </a>
            </Text>
            <Divider type="vertical" />
            <Text>
              <a
                href={'about:blank'}
                style={{ textDecoration: 'none', fontSize: '15px' }}
              >
                退出
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
