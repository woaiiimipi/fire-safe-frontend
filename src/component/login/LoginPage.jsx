import React, { Component } from 'react';
import './LoginPage.css';
import { LoginForm } from './LoginForm';
import { MainPage } from '../main/MainPage';
import { Card } from 'antd';
import { WelcomeCarousel } from './WelcomeCarousel';

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-welcome">
          <WelcomeCarousel />
        </div>
        <div className="login-panel">
          <LoginForm className="panel-login-form" />
        </div>
      </div>
    );
  }
}
