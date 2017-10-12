//轮播图组件
import React, { Component } from 'react';
import classNames from 'classnames';

// 不能复用
const winW =  800 //屏幕宽度

class Carousel3 extends Component {
  constructor(props) {
    super(props)
    // bind ？？避免this的指向有错误，es6是要手动绑定this的，如果是用es5的React.createClass()创建组件，this会自动绑定当前组件实例
    //需要传递参数的时候就要绑定this
    this.turn      = this.turn.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.autoPlay = this.autoPlay.bind(this)
    this.state = {
      rotateY: 0, //当前图片容器的旋转角度
      current: 0,
    }
  }
  componentDidMount() {
    // if(this.props.sliderSetting.autoplay){
    //     this.autoPlay()
    // }
  }
  componentWillUnmount(){
      this.timer && clearInterval(this.timer);
  }
 // 自动播放功能
  autoPlay(){
    let _this = this;
    let deg = 360 / this.props.items.length;
    // 旋转角度有问题
    console.log(deg)
    const speed = this.props.sliderSetting.speed;
    const itemLen = this.props.items.length
      this.timer =  setInterval(() => {
          let oldRotateY = _this.state.rotateY;
          _this.setState({
              rotateY: oldRotateY-(deg), // 旋转角度
              current: ++_this.state.current
          })
          if(_this.state.current == itemLen){
              _this.setState({
                current : 0
              })
          }
      }, speed)
  }

  turn(way){
    // 可以获取被点击的图片，也不能根据图片来确定往哪个方向
    let deg = 360 / this.props.items.length;
    let oldRotateY = this.state.rotateY;

    console.log(deg)
    let newRotateY = oldRotateY+deg*way;
    // 如果新的角度／360 === 0；那就是第一张图片  ---- 0
    this.setState ({
      rotateY: newRotateY,
      current: Math.abs((newRotateY-parseInt(newRotateY/360)*360) / deg)
    })
    // 可以根据当前的角度来判断是第几个照片
  }

  jump(index){
    // 根据上一个图片的定位以及点击的index来确定要旋转的角度
    // 有两种情况，一个是正的旋转
    let deg = 360 / this.props.items.length;
    console.log(deg)
    let jumpNum = index - this.state.current;
    let newRotateY = this.state.rotateY-(jumpNum*deg);
    this.setState ({
      rotateY: newRotateY,
      current: index
    })
  }

  render() {
    let len = this.props.items.length;
    let rotate = 360/len;
    let tan = Math.tan((180/len)/180*Math.PI)
    // 应该去获取图片的宽度的，不知道 !>_<
    // 图片围成的圆圈直径应该是box的宽度
    let traZ =(130 / tan)+20;
    let imageBox = {
      transform : "rotateY("+this.state.rotateY+"deg)"
    }
    return (
      <div className="carousel">
          <i className="left arrow" onClick={this.turn.bind(this,1)}></i>
          <i className="right arrow" onClick={this.turn.bind(this,-1)}></i>
          <div className="carousel-container">
              <ul className="image-box" style={imageBox}>
                  {
                      this.props.items.map((item, index) => {
                          let sliderItem = {
                              transform : "rotateY("+index*rotate+"deg)  translateZ("+traZ+"px )"
                          }
                          return <li className="slider-item" style={sliderItem} key={index}><img src={item.src} key={index}/></li>
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
                      return <li key={index} className={classNames({'dot-active': index == this.state.current})} onClick={this.jump.bind(this, index)}> </li>
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
Carousel3.defaultProps = {
  items: [],
  sliderSetting: {
    speed: 2000,  
    dots: true,
    arrows: true,
    autoplay: true  
  }
};
export default Carousel3;