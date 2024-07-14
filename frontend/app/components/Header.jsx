'use client';
import { useSelector, useDispatch } from 'react-redux';
import {login, logout} from '../store/store';
import React from 'react';
import {Button, Flex, Input , Layout, Row , Col} from 'antd';
import Profile from './Profile';

const {Search : AntSearch} = Input;
const { Header: AntHeader } = Layout;

const Header = () => {
  const dispath = useDispatch();
  const loginState = useSelector((state) => state.is_login);
  
  const handleSearch = (value) => {
    console.log(value);
  }


  return (
    <AntHeader
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
            <AntSearch
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={handleSearch}
            />
          </Col>
          <Col
            style={{
              cursor: 'pointer',
            }}
          >
            {loginState ? <Profile/> : <Button onClick={dispath(logout())}>Logout</Button>  }
          </Col>
        </Row>
      </Flex>
    </AntHeader>
  );
};

export default Header;
