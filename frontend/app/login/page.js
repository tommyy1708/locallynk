'use client'; // Add this at the top of the file
import { use, useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    // setLoading(true);
    const data = {
      email: values.username,
      password: values.password,
    }
    const res = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('res', res);
    // Add your login logic here
    // Simulate a login delay
    if(res.status !== 200){
      message.error('username or password is incorrect');
      return;
    }

    setTimeout(() => {
      setLoading(false);
      message.success('Login successful');
      navigate.push('/');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
  );
};

export default LoginPage;
