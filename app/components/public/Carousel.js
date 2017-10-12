//轮播图组件

import React, { Component } from 'react';
import classNames from 'classnames';

const winW =  800 //屏幕宽度
class Carousel extends Component {
  constructor(props) {
    super(props),
    this.state = {
      current: 0 //当前显示的图片index
    }
  }

  componentDidMount() {
    let _this = this;
    const speed = this.props.sliderSetting.speed;
    const itemLen = this.props.items.length 
    if(this.props.sliderSetting.autoplay){
        setInterval(() => {
          _this.setState({
            current : ++_this.state.current
          })
          if(_this.state.current == itemLen){
            _this.setState({
              current : 0
            })
          }
	     }, speed)
    }
  }

  turn(n) {
    var _n = this.state.current + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({current: _n});
  }

  jump(index) {
    this.setState({current: index})
  }
  render() {
    const style = {
      marginLeft: -this.state.current*winW+"px"
    }
    return (
      <div className="slider">
        <div className="image-box">
          {/*是否显示左右箭头  */}
          {
            this.props.sliderSetting.arrows ? 
            <div className="slider-arrow">
                <i className="fa fa-chevron-left arrow" aria-hidden="true" onClick={this.turn.bind(this,-1)}></i>
                <i className="fa fa-chevron-right arrow" aria-hidden="true" onClick={this.turn.bind(this,1)}></i>
            </div>
            :
            null
          }
          <ul style={style}>
            {
              this.props.items.map((item, index) => {
                return <li className="slider-item" key={index}><img src={item.src} key={index}/></li>
              })
            }
          </ul>
          
        </div>
        {/*是否显示dots  */}
        { 
          this.props.sliderSetting.dots ? 
            <div className="dots">
              <ul>
                {
                  this.props.items.map((item,index) => {
                    return <li key={index} className={classNames({'dot-active': index == this.state.current})} onClick={this.jump.bind(this,index)}> </li>
                  })
                }
              </ul>
            </div>
            : 
            null
          }
      </div>
    );
  }
}

Carousel.defaultProps = {
  items: [],
  sliderSetting: {
    speed: 2000,  
    dots: true,
    arrows: true,
    autoplay: true  
  }
};
export default Carousel;