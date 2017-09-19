// 歌单组件
import React, { Component } from 'react';
import Recommend from './recommend.js';
import RankingList from './rankingList.js';
import NewSong from './NewSong.js';
import proxy from 'http-proxy-middleware';
import Slider from '../public/Slider2.js';
import Hot from './hot.js'
import TabsControl from '../public/TabsControl'

import Image1 from '../../image/1.jpg';
import Image2 from '../../image/2.jpg';
import Image3 from '../../image/3.jpg';
import Image4 from '../../image/4.jpg';
import Image5 from '../../image/5.jpg';
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
  },
  {
    src: Image4,
    alt: 'images-4',
  },
  {
    src: Image5,
    alt: 'images-5',
  },
  {
    src: Image2,
    alt: 'images-2',
  },
  {
    src: Image3,
    alt: 'images-3',
  },
  {
    src: Image4,
    alt: 'images-4',
  }
];

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

class MusicList extends Component {
  constructor(props){
    super(props)
    this.tabClick = this.tabClick.bind(this);
    
  }
  componentDidMount(){
  }

  tabClick(name){
  }
  render() {
    const sliderSetting= {
        speed: 2000,  //轮播速度
        dots: true,
        arrows: true, //是否要箭头
        autoplay: true  //是否自动播放
    }
    return (
        <div className="MusicList">
            <Router>
                <div className="music-box">
                    <Slider 
                        items = { IMAGE_DATA }
                        sliderSetting = { sliderSetting }
                    /> 
                    <TabsControl initTab = {1}>
                        <div name="个性推荐">
                            <Recommend key="1" />
                        </div>
                        <div name="热门精选">
                            <Hot key="2"/>
                        </div>
                        <div name="新歌速递">
                            <NewSong key="3"/>
                        </div>
                    </TabsControl>
                </div>
            </Router>
            
            {/*不同歌单切换导航 （个性推荐，排行榜） */}
            {/*轮播图---组件  */}
            {/*歌单item --- 组件  */}
        </div>
    );
  }
}

export default MusicList;
