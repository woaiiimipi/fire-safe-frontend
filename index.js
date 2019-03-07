import './src/component/CommonStyle.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { MainPage } from './src/component/main/MainPage';
import { LoginPage } from './src/component/login/LoginPage';
import { WelcomeCarousel } from './src/component/login/WelcomeCarousel';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { IsPC } from './src/utils/DeviceUtils';
import { Demo } from './src/component/Demo';
import { Main } from './src/component/main/Main';


function App() {
  return (
    <div id="app" className={!IsPC() && 'mobile-device'}>
      <Route exact path="/" component={LoginPage} />
      {/* <WelcomeCarousel></WelcomeCarousel> */}
      <Route exact path="/main" component={Main} />
      {/* <Main></Main> */}
    </div>
  );
}

// window.onbeforeunload = ()=>{
//   return "真的离开?";
// }



if(IsPC){
  console.log(`PC`);
}else {
  console.log(`手机`);
}
ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);
