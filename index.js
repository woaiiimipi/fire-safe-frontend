import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { LoginPage } from './src/login/LoginPage'

function App() {
  return (
    <div>
      <LoginPage/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
