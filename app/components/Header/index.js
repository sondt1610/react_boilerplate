import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

function HeaderContent() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Products List</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderContent;
