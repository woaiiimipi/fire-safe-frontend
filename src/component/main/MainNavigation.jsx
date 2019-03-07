import React, { Component } from 'react';
import './MainNavigation.scss';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <SubMenu
            title={
              <span className="submenu-title-">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.Item key="setting:5">Option 1</Menu.Item>
            <Menu.Item key="setting:6">Option 2</Menu.Item>
            <Menu.Item key="setting:7">Option 3</Menu.Item>
            <Menu.Item key="setting:8">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.Item key="setting:9">Option 1</Menu.Item>
            <Menu.Item key="setting:10">Option 2</Menu.Item>
            <Menu.Item key="setting:11">Option 3</Menu.Item>
            <Menu.Item key="setting:12">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.Item key="setting:13">Option 1</Menu.Item>
            <Menu.Item key="setting:14">Option 2</Menu.Item>
            <Menu.Item key="setting:15">Option 3</Menu.Item>
            <Menu.Item key="setting:16">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
