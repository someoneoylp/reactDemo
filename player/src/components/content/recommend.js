import React, { Component } from 'react';
import {getData, postData} from '../../api/fetchData.js'
import Slider from '../public/Slider.js';
import Image1 from '../../image/1.jpg';
import Image2 from '../../image/6.jpg';
import Image3 from '../../image/16.jpg';
// 轮播图图片
const IMAGE_DATA = [
  {
    src: Image1,
    alt: 'images-1',
  },
  {
    src: Image2,
    alt: 'images-2',
  },
  {
    src: Image3,
    alt: 'images-3',
  }
];

class Recommend extends Component {
  componentDidMount() {
    console.log(getData("/api/personalized/playlist"))
    
  }

  render() {
    const sliderSetting= {
        speed: 2000,  //轮播速度
        dots: true,
        arrows: true, //是否要箭头
        autoplay: true  //是否自动播放
    }
    return (
      <div className="recommend">
        <Slider 
            items = { IMAGE_DATA }
            sliderSetting = { sliderSetting }
        />
          个性推荐
      </div>
    );
  }
}

export default Recommend;