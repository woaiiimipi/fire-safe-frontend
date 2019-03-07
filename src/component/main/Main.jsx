import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Main.scss';
import { Route, Link } from 'react-router-dom';
import { GDMap } from '../map/GDMap';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const mainNav = {
  nav1: 'nav1',
  nav2: 'nav2',
  nav3: 'nav3'
};

const menuSystem = {
  nav1: {
    title: 'nav1',
    subNav: {
      you: 'you',
      me: 'me',
      he: 'he'
    }
  },
  nav2: {
    title: 'nav2',
    subNav: {
      you: 'you1',
      me: 'me1',
      he: 'he1'
    }
  }
};

export class Main extends React.Component {
  state = {
    path: menuSystem.nav1.subNav.me
  };

  nav1_sub1 = props => (
    <Content style={{ padding: '0 24px', height: '100%' }}>Content1</Content>
  );
  nav1_sub2 = props => (
    <Content style={{ padding: '0 24px', height: '100%' }}>Content2</Content>
  );
  nav1_sub3 = props => (
    <Content style={{ padding: '0 24px', height: '100%' }}>Content3</Content>
  );

  onPathChange(path) {
    console.log(`onPathChange:::   ${path}`);
    this.setState({ path });
  }

  render() {
    const path = this.state.path;
    return (
      <Layout className="main">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item
              key="nav1"
              onClick={() => this.onPathChange(menuSystem.nav1.subNav.he)}
            >
              nav1
            </Menu.Item>
            <Menu.Item
              key="nav2"
              onClick={() => this.onPathChange(menuSystem.nav1.subNav.me)}
            >
              nav2
            </Menu.Item>
            <Menu.Item
              key="nav3"
              onClick={() => this.onPathChange(menuSystem.nav1.subNav.you)}
            >
              nav3
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content" style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider
              width={150}
              style={{
                background: '#fff',
                height: '100%',
                paddingBottom: '24px',
                position: 'inherit'
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: 'calc(100% - 24px)' }}
              >
                <Menu.Item key="sub1">option1</Menu.Item>
                <Menu.Item key="sub2">option2</Menu.Item>
                <Menu.Item key="sub3">option3</Menu.Item>
                <Menu.Item key="sub4">option4</Menu.Item>
                <Menu.Item key="sub5">option5</Menu.Item>
              </Menu>
            </Sider>
            {path === menuSystem.nav1.subNav.me && (
              <Content className="right-content" >
                <GDMap></GDMap>
              </Content>
            )}
            {path === menuSystem.nav1.subNav.he && (
              <Content className="right-content">
                Content2
              </Content>
            )}
            {path === menuSystem.nav1.subNav.you && (
              <Content className="right-content">
                Content3
              </Content>
            )}
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
