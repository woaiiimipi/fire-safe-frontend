import React from 'react';
import { Map } from 'react-amap';
const AMAP_KEY = '5eadf1036d6063d6a011f5bafdd072cb';
import './GDMap.scss';
export class GDMap extends React.Component {
  render(){
    return(
      <div className="gd-map">
        <Map amapkey={AMAP_KEY}/>
      </div>
    );
  }
}