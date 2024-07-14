"use client";

import { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { login_request, token_setup } from '../../lib/axiosInstacne';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../lib/redux/userSlice';
import styles from './styles.module.css'
import LoadingSpin from '../components/LoadingSpin';

const { Item } = Form;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success_msg = (msg) => {
    messageApi.success(msg);
  };

  const error_msg = (msg) => {
    messageApi.error(msg);
  };

  const handleLogin = async (values) => {
    setLoading(true);
    await login_request(values).then((response) => {
      if(response.status == 200) {
        console.log('response', response);
        token_setup(response.data);
        const data = response.data;
        dispatch(
          login({
            user: data.first_name,
            uid: data.uid,
          })
        );
        success_msg('Login successful! Redirecting to home page...');
        setTimeout(() => {
          navigate.push('/');
         }, 2000);
      } else {
        setLoading(false);
        error_msg('Login failed. Please using correct email and password.');
      }
    });
  };

  return (
    <>
      {contextHolder}
      <SpinLoading loading={loading} />
      <div className={styles.container}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          onFinish={handleLogin}
        >
          <Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon" />
              }
              placeholder="Email"
            />
          </Item>
          <Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={
                <LockOutlined className="site-form-item-icon" />
              }
              type="password"
              placeholder="Password"
            />
          </Item>
          <Item>
            <Item
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Remember me</Checkbox>
            </Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
