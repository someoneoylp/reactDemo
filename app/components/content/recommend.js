import React, { Component } from 'react';
import {getData, postData} from '../../api/fetchData.js'
import MusicItem from '../public/musicItem.js'
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
  constructor(props,context){
    super(props);
    this.state = {
        playlists: []
    }
  }

  componentDidMount() {
    getData("/api/personalized/playlist").then((res) => {
      console.log(res.data.result)
    });
    getData("/api/playlist/highquality/list").then((res) => {
      this.setState({
        playlists : res.data.playlists
  
      })
      console.log(res.data.playlists)
    })
  }

  render() {
    const sliderSetting= {
        speed: 2000,  //轮播速度
        dots: true,
        arrows: true, //是否要箭头
        autoplay: true  //是否自动播放
    }
    const music_list = this.state.playlists.length;
    const content = [];
    this.state.playlists.forEach((item,index) => {
      content.push( <MusicItem 
                imgUrl = {item.coverImgUrl}
                desc = {item.copywriter} />)
    });              
    return (
      <div className="recommend">
        <Slider 
            items = { IMAGE_DATA }
            sliderSetting = { sliderSetting }
        />
          <div className="content">
             {content}
          </div>
         
      </div>
    );
  }
}

export default Recommend;