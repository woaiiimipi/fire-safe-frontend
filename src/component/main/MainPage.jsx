import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  DatePicker,
  Divider,
  Button,
  TreeSelect,
  Dropdown,
  message,
  Table,
  Card,
  Drawer
} from 'antd';
import './MainPage.scss';
import { LoginForm } from '../login/LoginForm';
import '../login/LoginForm.css';
import { SelectTree } from '../tree/SelectTree';
import { Route } from 'react-router-dom';
import { GDMap } from '../map/GDMap';
import { XNavigator } from './XNavigator';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);
function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];
const getDataFromServer = () => {
  fetch('http://10.32.2.70:8080/hello') ///此url地址内有json数据  可模拟使用
    .then(res => res.json()) ///解析json数据
    .then(data => {
      console.log(data);
      // this.setState({posts: data})  ////赋值到本地数据
    })
    .catch(e => console.log('错误:', e)); ///请求出错
};

export class MainPage extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Route>
        <div className="main-page">
          <Layout>
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu> */}
            {/* <Button icon="setting" className="btn-setting" onClick={this.showDrawer}>
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                className="main-drawer"
              >
                <div className="drawer-div">123</div>
              </Drawer> */}
            <div className="main-header">
              <span className="main-title">
                I AM TITLE!
              </span>
              <XNavigator />
            </div>
            <Layout>
              {/* <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        subnav 1
                      </span>
                    }
                  >
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        subnav 2
                      </span>
                    }
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        subnav 3
                      </span>
                    }
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider> */}
              <Layout style={{ padding: '16px 24px 24px' }}>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  单位：
                  <SelectTree />
                  接收时间：
                  <DatePicker className={'time-picker'} />
                  <DatePicker className={'time-picker'} />
                  <Button
                    type="primary"
                    className={'time-picker'}
                    onClick={getDataFromServer}
                  >
                    查询
                  </Button>
                  <Divider type="vertical" className="vertical-divider" />
                  <Button className={'time-picker'}>btn1</Button>
                  <Button className={'time-picker'}>btn2</Button>
                  <Button className={'time-picker'}>btn3</Button>
                  <Button className={'time-picker'}>btn4</Button>
                  <Divider />
                  <Table dataSource={dataSource} columns={columns} />
                  {/* <GDMap></GDMap> */}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Route>
    );
  }
}
