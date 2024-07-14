'use client';
import React, { useEffect, useState } from 'react';
import { Dropdown, Space, Button, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Provider } from 'react-redux';

const { Title, Text } = Typography;

const Profile = () => {
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const { is_loggin, user, uid } = useSelector((state) => state.user);

  console.log('is_loggin', is_loggin);

  const handleLogout = () => {
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
    }, 1000);
  };

  const items = [
    { key: '0', label: 'Profile' },
    { key: '1', label: 'Settings' },
    {
      key: '2',
      label: 'Logout',
      danger: true,
      // onClick: handleLogout,
    },
  ];

  return

          <Dropdown
          style={{ textAlign: 'center' }}
          menu={{
            items,
          }}
          trigger={['click']}
          placement="topRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Space
            align="center"
            style={{
              display: 'flex',
            }}
          >
            <Avatar icon={<UserOutlined />} />
            <Text style={{ color: '#555' }}>Tommy</Text>
          </Space>
        </Dropdown>

};

export default Profile;
{
  /* {is_loggin ? (
        <Dropdown
          style={{ textAlign: 'center' }}
          menu={{
            items,
          }}
          trigger={['click']}
          placement="topRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Space>
            <Avatar icon={<UserOutlined />} />
            <Text style={{ color: '#555' }}>username</Text>
          </Space>
        </Dropdown>
      ) : (
        <Link href="/login">
          <Button type="primary">Login</Button>
        </Link>
      )} */
}
