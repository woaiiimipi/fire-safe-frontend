import React, { Component } from 'react';
import './XNavigator.scss';

export class XNavigator extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="hl_nav">
          <ul className="nav_list">
            <li className="highlight active">
              <a className="nav_head" href="javascipt:;">
                <i className="icon fa fa-home" />
                <span>网站首页</span>
              </a>
              <a href="javascipt:;" className="item">
                二级导航1
              </a>
            </li>
            <li className="highlight">
              <a className="nav_head">
                <i className="icon fa fa-cloud-download" />
                <span>在线下载</span>
              </a>
              <a className="item">
                二级导航1
              </a>
            </li>
            <li className="highlight">
              <a className="nav_head" >
                <i className="icon fa fa-diamond" />
                <span>成功案例</span>
              </a>
              <a href="javascipt:;" className="item">
                二级导航1
              </a>
              <a href="javascipt:;" className="item">
                二级导航2
              </a>
              <a href="javascipt:;" className="item">
                二级导航3
              </a>
              <a href="javascipt:;" className="item">
                二级导航4
              </a>
              <a href="javascipt:;" className="item">
                二级导航4
              </a>
            </li>
            <li className="highlight">
              <a className="nav_head" href="javascipt:;">
                <i className="icon fa fa-list-alt" />
                <span>新闻动态</span>
              </a>
              <a href="javascipt:;" className="item">
                二级导航1
              </a>
            </li>
            <li className="highlight">
              <a className="nav_head" href="javascipt:;">
                <i className="icon fa fa-comments" />
                <span>与我联系</span>
              </a>
            </li>
            <li>
              <a className="nav_head" href="javascipt:;">
                <i className="icon fa fa-user" />
                <span>关于我们</span>
              </a>
            </li>
            <li className="right highlight">
              <a className="nav_head" href="javascipt:;">
                <i className="icon fa fa-cog " />
                <span>个人中心</span>
              </a>
            </li>
          </ul>
          <div className="shade" />
        </nav>
      </div>
    );
  }
}
