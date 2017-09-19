import React, { Component } from 'react';
import {getData, postData} from '../../api/fetchData.js'
import MusicItem from '../public/musicItem.js'
import Slider from '../public/Slider.js';


class Recommend extends Component {
  constructor(props,context){
    super(props);
    this.state = {
        playlists: []
    }
  }

  componentDidMount() {
    getData("/api/personalized/playlist").then((res) => {
    });
    getData("/api/playlist/highquality/list").then((res) => {
      this.setState({
        playlists : res.data.playlists
  
      })
    })
  }

  render() {
    let content = [];
    let Wrapper = []
    this.state.playlists.forEach((item,index) => {
      content.push( <MusicItem 
                imgUrl = {item.coverImgUrl}
                desc = {item.copywriter} key={index}/>)
      if(!((index+1)%4)) {
        Wrapper.push(content);
        content = []
      } 
    });   
    return (
      <div className="recommend">
          <div className="recommend-content">
              {
                Wrapper.map((item, index) => {
                  return <div className="recommend-item" key={index}>{item}</div>
                })
              }
          </div>
         
      </div>
    );
  }
}

export default Recommend;