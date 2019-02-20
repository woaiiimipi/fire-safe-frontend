import React, { Component } from 'react';
import './LoginPage.css';
import { LoginForm } from './LoginForm';
import { MainPage } from '../main/MainPage';
import { Card } from 'antd';

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-welcome">
          <img className="welcome-img"></img>
        </div>
        <div className="login-panel">
            <LoginForm className="panel-login-form"/>
        </div>
      </div>
    );
  }
}
