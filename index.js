import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { MainPage } from './src/component/main/MainPage'
import { LoginPage } from './src/component/login/LoginPage';

function App() {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
