import { Carousel } from 'antd';
import React, { Component } from 'react';
import './WelcomeCarousel.css';
import { Button } from 'antd';

export class WelcomeCarousel extends React.Component {
  render() {
    return (
      <div className="welcome-carousel">
        <Carousel autoplay effect="fade" >
          <div className="welcome-carousel-item1">
            <Button className="welcome-btn">产品介绍</Button>
          </div>
          <div className="welcome-carousel-item2">
            <Button className="welcome-btn">了解HCKJ</Button>
          </div>
          <div className="welcome-carousel-item3">
            <Button className="welcome-btn">了解TJKJ</Button>
          </div>
        </Carousel>
      </div>
    );
  }
}
