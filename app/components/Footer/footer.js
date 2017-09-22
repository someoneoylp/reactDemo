import React, { Component } from 'react';
import ProgressBar from '../public/ProgressBar'
const timeProgressWrapStyle = {
    width: '75%',
    display: 'inline-block',
    marginRight: '10px'
}
const volumeProgressWrapStyle ={
    width: '80%',
    display:'inline-block',
    marginLeft: '10px'
}
class Footer extends Component {
  constructor(props){
      super(props);
      this.play = this.play.bind(this);
      this.state = {
          timeProgress: 0, // 时间进度，都是从0开始播放
          volumeSize: 50, // 音量大小
          onplay: false //播放音乐
      }
  }

  play() {
    let newplay = !this.state.onplay
    this.setState({
        onplay: newplay
    })
  }
  render() {
    // 时间进度条设置
    const TimeProgressBar = {
        'automove': true, //是否可以自定移动
        'autodrag': true, //是否可以拖拽
        'initlength': 100, // 最开始圆点在的位置
        'speed': 100, //移动的速度 ---- 应该可以根据一些参数计算出来
        'style': 12 //进度条的样式
    }
    const VolumeProgressBar = {
        'automove': true, //是否可以自定移动
        'autodrag': true, //是否可以拖拽
        'initlength': 100, // 最开始圆点在的位置
        'speed': 100, //移动的速度 ---- 应该可以根据一些参数计算出来
        'style': 12 //进度条的样式
    }
    return (
        <div className="footer">
            <div className="paly-ctrl">
                <i className="fa fa-step-backward" aria-hidden="true"></i>
                <i className="fa fa-play" aria-hidden="true" onClick={this.play}></i>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
            </div>
            <div className="progress-ctrl">
                <ProgressBar 
                    progressWrapStyle = {timeProgressWrapStyle}
                    timeProgressBar={TimeProgressBar} 
                    length = {10}
                    intervalTime = {1000} // 定时器间隔时间
                    stop = {!this.state.onplay}
                />
                <i className="play-time">04:12/04:12</i>
            </div>
            <div className="volume-ctrl">
                <i className="fa fa-volume-up" aria-hidden="true"></i>
                <ProgressBar 
                    progressWrapStyle = {volumeProgressWrapStyle}
                    timeProgressBar={VolumeProgressBar} 
                    length = {10}
                    intervalTime = {1000} // 定时器间隔时间
                    stop = {!this.state.onplay}
                    />
            </div>
            <div className="lyric-ctrl">
                <span onClick={this.props.taggerLyric}>词</span>
            </div>
            
        </div>
    );
  }
}

export default Footer;