// 右上方的个人信息部分
import { Divider, Message, Typography } from '@arco-design/web-react';
import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Button } from '@arco-design/web-react';

const FormItem = Form.Item;

const { Text } = Typography;

const person = [
  {
    number: '1',
    password: '1',
    name: '顾夏',
    college: '计算机学院',
    class: '讲师',
  },
  {
    number: '2',
    password: '2',
    name: '夏熙凌',
    college: '计算机学院',
    class: '管理员',
  },
];

const PersonalInformation = ({ getIfLogIn, getIfAdmin }) => {
  const [ifLogIn, setIfLogIn] = useState(false);
  const [Person, setPerson] = useState({});

  function ShowPerson() {
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
              <span style={{ fontSize: '15px' }}>{Person.name}</span>
            </Text>
            <Divider type="vertical" />
            <Text>
              <span style={{ fontSize: '15px' }}>{Person.college}</span>
            </Text>
            <Divider type="vertical" />
            <Text>
              <span style={{ fontSize: '15px' }}>{Person.class}</span>
            </Text>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div className="divider-demo">
              <Text>
                <Button
                  status={'danger'}
                  style={{ fontSize: '15px' }}
                  onClick={() => {
                    const bool = window.confirm('请确认是否退出登录？');
                    if (bool) {
                      setIfLogIn(false);
                      getIfLogIn(false);
                      getIfAdmin(false, '');
                      setPerson({});
                      Message.info('您已退出登录！');
                    }
                  }}
                >
                  退出
                </Button>
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function LogIn() {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef();
    useEffect(() => {
      formRef.current.setFieldsValue({
        rate: 5,
      });
    }, []);
    const formItemLayout = {
      labelCol: {
        span: 2,
      },
      wrapperCol: {
        span: 5,
      },
    };
    const noLabelLayout = {
      wrapperCol: {
        span: 5,
        offset: 1,
      },
    };
    return (
      <Form
        {...formItemLayout}
        ref={formRef}
        autoComplete="off"
        labelAlign={'left'}
        style={{
          position: 'fixed',
          left: '70%',
          marginTop: 10,
        }}
      >
        <FormItem label="学工号" field="学工号" rules={[{ required: true }]}>
          <Input
            style={{ width: 170, position: 'relative', right: 55 }}
            placeholder="请输入学工号"
            onChange={value => {
              setNumber(value);
            }}
          />
        </FormItem>
        <FormItem label="密码" field="密码" rules={[{ required: true }]}>
          <Input
            style={{ width: 170, position: 'relative', right: 55 }}
            placeholder="请输入密码"
            onChange={value => {
              setPassword(value);
            }}
          />
        </FormItem>
        <FormItem
          {...noLabelLayout}
          style={{ position: 'fixed', top: 61, left: 1290 }}
        >
          <Button
            type="primary"
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();

                  let ifPass = false;
                  person.forEach(value => {
                    if (value.number === number) {
                      if (value.password === password) {
                        ifPass = true;
                        setPerson({ ...value });
                        if (value.class === '管理员') {
                          getIfAdmin(true, value.name);
                        } else {
                          getIfAdmin(false, value.name);
                        }
                      }
                    }
                  });

                  if (ifPass) {
                    Message.info('校验通过，登录成功！');
                    setIfLogIn(true);
                    getIfLogIn(true);
                    setNumber('');
                    setPassword('');
                  } else {
                    Message.error('您输入的学工号或密码有误！');
                  }
                } catch (_) {
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
          >
            提交
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            onClick={() => {
              formRef.current.resetFields();
            }}
          >
            重置
          </Button>
        </FormItem>
      </Form>
    );
  }

  function Show() {
    if (ifLogIn) {
      return <ShowPerson />;
    } else {
      return <LogIn />;
    }
  }

  return <Show />;
};

export default PersonalInformation;
