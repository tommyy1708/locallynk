// 'use client';
// import React, { useEffect, useState } from 'react';
import {
  Layout,
  Menu,
  Input,
  Select,
  Row,
  Col,
  Typography,
  Avatar,
  Flex,
  Dropdown,
  Space,
  Button,
  Carousel,
  Divider,
  Card,
} from 'antd';
import Link from 'next/link';
import {
  HomeOutlined,
  ShopOutlined,
  TagOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from '@ant-design/icons';
import styles from './page.module.css';
// Redux
// import { useSelector, useDispatch } from 'react-redux';
// import { login, logout } from '../lib/redux/userSlice';
// import SpinComponent from '../app/components/SpinComponent';

const HomePage = () => {

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

  // const dispatch = useDispatch();
  // const { is_loggin, user,uid } = useSelector((state) => state.user);
  // const [isClient, setIsClient] = useState(false);
  // const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(logout());
      setLoading(false);
    }, 1000);
  };

  const items = [
    { key: '0', label: 'Profile' },
    { key: '1', label: 'Settings' },
    {
      key: '2',
      label: <a onClick={handleLogout}>Logout</a>,
      danger: true,
    },
  ];


  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* <SpinComponent spinning={loading} /> */}
      <Header
        style={{
          position: 'sticky',
          top: 0,
          height: 'auto',
          textAlign: 'center',
          color: '#555',
          padding: '0 2rem',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Flex gap="middle" vertical>
          <Row justify="space-between" align="middle">
            <Col>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                Localynk
              </div>
            </Col>
            <Col style={{ width: '33%', display: 'flex' }}>

            </Col>
            <Col
              style={{
                cursor: 'pointer',
              }}
            >

            </Col>
          </Row>
        </Flex>
      </Header>

      <Content
        style={{ padding: '0 50px', backgroundColor: 'white' }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
          items={[
            {
              label: <Link href="/news">Local News</Link>,
              key: 'news',
              icon: <NotificationOutlined />,
            },
            {
              label: <Link href="/homemade">Homemade Products</Link>,
              key: 'home_made',
              icon: <ShopOutlined />,
            },
            {
              label: (
                <Link href="/secondhand">Second-Hand Sales</Link>
              ),
              key: 'second_hand',
              icon: <TagOutlined />,
            },
            {
              label: <Link href="/services">Boot Camp</Link>,
              key: 'boot_camp',
              icon: <TagOutlined />,
            },
            {
              label: <Link href="/services">Sports</Link>,
              key: 'sport',
              icon: <TagOutlined />,
            },
            {
              label: <Link href="/repair">Repair</Link>,
              key: 'repair',
              icon: <TagOutlined />,
            },
          ]}
        />

        <Divider className={styles.divider} />

        <Carousel autoplay>
          <div>
            <img
              src="/images/advertize/ad_1.png"
              alt="Carousel 1"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src="/images/advertize/ad_1.png"
              alt="Carousel 2"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <img
              src="/images/advertize/ad_1.png"
              alt="Carousel 3"
              style={{ width: '100%' }}
            />
          </div>
        </Carousel>
        <div className="site-layout-content">
          <Title level={2} style={{ margin: '16px 0' }}>
            Welcome to LocalLynk
          </Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                title="Local News"
                extra={<Link href="/news">More</Link>}
                style={{ marginBottom: '16px' }}
              >
                <p>Stay updated with the latest local news.</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Homemade Products"
                extra={<Link href="/homemade">More</Link>}
                style={{ marginBottom: '16px' }}
              >
                <p>
                  Discover amazing homemade products from your
                  neighbors.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Second-Hand Sales"
                extra={<Link href="/secondhand">More</Link>}
                style={{ marginBottom: '16px' }}
              >
                <p>Find great deals on second-hand items.</p>
              </Card>
            </Col>
          </Row>
          <Title level={3} style={{ margin: '16px 0' }}>
            Advertisements
          </Title>
          <Row gutter={16}>
            <Col span={24}>
              <Card
                title="Advertise with us"
                style={{ marginBottom: '16px', textAlign: 'center' }}
              >
                <p>
                  Place your advertisement here to reach local
                  customers.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#4096ff',
          color: '#fff',
        }}
      >
        LocalLynk ©2023
      </Footer>
    </Layout>
  );
};

export default HomePage;


     {
       /* {isClient && is_loggin ? (
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
                    <Text style={{ color: '#555' }}>{user}</Text>
                  </Space>
                </Dropdown>
              ) : (
                <Link href="/login">
                  <Button type="primary">Login</Button>
                </Link>
              )} */
     }