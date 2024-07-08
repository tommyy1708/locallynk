import React from 'react';
import { Selector, useDispatch, useSelector } from 'react-redux';
import { login, logout } from './userSlice';
import { Avatar, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function UserLogin() {
  const ifLogged = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {ifLogged ? (
        <Space>
          <Avatar icon={<UserOutlined />}>
            <span style={{ color: 'white' }}>{user.name}</span>
          </Avatar>
          <Button type="link" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Space>
      ) : (
        <Link href="/login">
          <Button type="primary">Login</Button>
        </Link>
      )}
    </>
  );
}
