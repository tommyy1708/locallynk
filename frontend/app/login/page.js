'use client'; // Add this at the top of the file
import { use, useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { loginAxios, setToken } from '../../lib/loginAxios';

const LoginPage = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success_msg = (msg) => {
    messageApi.success(msg);
  }

  const error_msg = (msg) => {
    messageApi.error(msg);
  }

const handleLogin = async (values) => {
    setLoading(true)
    try {
        const response = await loginAxios(values)
        console.log('response', response);
        if (response.status === 200) {
            setToken(response.data)
            success_msg('Login successful')
            navigate.push('/')
        } else {
            setLoading(false)
            error_msg('Email or password is incorrect')
        }
    } catch(error) {
        setLoading(false)
        if (error.response && error.response.data) {
            error_msg(
                error.response.data.email ||
                'Email or password is incorrect'
            )
        } else {
            error_msg('An unexpected error occurred')
        }
    }
}

  return (
    <>
     {contextHolder}
    <div className={styles.container}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};

export default LoginPage;
