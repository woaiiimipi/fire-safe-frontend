import React, { Component } from "react";
import './LoginPage.css'; 
import {LoginForm} from './LoginForm'
import { MainPage } from "../main/MainPage";
export class LoginPage extends Component{
  render() {
    return(<div className="login-page">
      <MainPage></MainPage>
    </div>);
  }
}
