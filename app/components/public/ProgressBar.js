
/**
 * 进度条组件
 * 功能：
 *      可以移动 √
 *      可以拖拽 √
 *      可以设置是否自动移动 
 *      可以设置是否移动
 *      外部可以控制暂停与继续
 *      可以横纵两个方向拖拽选择
 * 暴露接口
 *      要接受一个参数，定义进度条的长度
 *      返回一个数据，当前进度条进度是多少
 *      如果可以移动，移动的速度是多少
 *      是否自动移动
 *      是否可以拖拽
 *      进度条的样式要可以自定义
 *      是否要圆点---可以做加载进度条那种的
 *      应该写一个默认的，没有传入数据的时候怎么显示
 *     
 *先做。。。。
 * 
 * 有基本样式
 *  ⚠️ 不要开启两个定时器，要及时关闭 --- √
 * 
 * 
 * bug:
 *  拖拽到边缘位置的时候偶尔会多出一个圆点的距离
 */

import React, {PropTypes, Component } from 'react';

class ProgressBar extends Component {

    constructor(props){
        super(props)

        this.state ={
            initClientX : null,
            initOffsetLeft : null,
            timer : null
        }
        this.handleDragstart = this.handleDragstart.bind(this);
        this.handleDrag      = this.handleDrag.bind(this);
        this.stop            = this.stop.bind(this);
    }

    componentDidMount() {
        if(!this.props.stop){
            this.autoMove()
        }
    }

    componentWillReceiveProps(nextProps) {
        // 判断数据是否改变
        if(nextProps.stop !== this.props.stop){
            if(nextProps.stop){
                this.stop()
            }else{
               // this.autoMove()
            }
        }
        
    }
    /*
        拖拽实现思路：
            首先要限制拖拽的范围，只能横向拖拽，不能纵向
            时时获取拖拽的距离，去设置圆点以及进度条的长度
    */ 
    handleDragstart(e) {
        this.setState({
            initClientX: e.clientX,
            initOffsetLeft: e.target.offsetLeft
        })
    }

    handleDrag(e) {
        // console.log("最开始圆点距离横条左边位置:"+this.state.initClientX)
        // console.log('还有鼠标点击距离屏幕左边位置:'+this.state.initOffsetLeft)
        // console.log('s鼠标移动距离：' +e.clientX)
        // 以圆点的中心为标准移动
        let moveX = null;
        moveX = this.state.initOffsetLeft + (e.clientX - this.state.initClientX);
       
        if(moveX >= -e.target.offsetWidth/2 && moveX <= e.target.parentNode.offsetWidth+e.target.offsetWidth/2){
            e.target.style.left = moveX+'px';
            e.target.nextSibling.style.width =  moveX+e.target.offsetWidth/2+'px';
        }

    }

    /*
        移动功能实现思路，根据长度弄一个定时器，计算出间隔事件改变e.target.style.left
    */
    autoMove() {
        // 总量 ／ 长度
        // 总量根据从外部传递数据来获取，长度根据progress-bar-wrap的width
        // 在当前的宽度上添加长度
        let progressBarWrapW = document.getElementsByClassName('progress-bar-wrap')[0].offsetWidth;
        let progressBar = document.getElementsByClassName('progress-bar')[0]
        let move = document.getElementsByClassName('move')[0]
        let changeAmount = progressBarWrapW/this.props.length;
        let _this = this;
        let Timer = setInterval(function(){
            move.style.marginLeft = parseFloat(move.style.marginLeft.slice(0, -2))+changeAmount+'px';
            progressBar.style.width =parseFloat(progressBar.style.width.slice(0, -2))  + changeAmount+'px';
            if(parseInt(progressBar.style.width.slice(0, -2)) >= progressBarWrapW){
                clearInterval(_this.state.timer)
            }
        },this.props.intervalTime)
        // 停止定时器，当progressBar.style.width = progressBarWrapW就停止
        this.setState({
            timer : Timer
        })
    }

    stop() {
        let _this = this
        clearInterval(_this.state.timer)
    }

    render() {
        return (
            <div className="progress-bar-wrap" style = {this.props.progressWrapStyle}>
                <span 
                    className="move" 
                    style = {this.props.moveStyle} 
                    draggable="true" 
                    onDragStart = {this.handleDragstart.bind(this)} 
                    onDrag = {this.handleDrag.bind(this)}
                    onDragEnter = {this.handleDragenter} 
                    onDragLeave = {this.handleDragleave} 
                    onDragEnd = {this.handleDragend} 
                >
                </span>
                <span className="progress-bar" style ={this.props.progressStyle}></span>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    timeProgressBar:    PropTypes.object, //样式
    progressWrapStyle:  PropTypes.object,
    progressStyle:      PropTypes.object, 
    moveStyle:          PropTypes.object,
    length:             PropTypes.number.isRequired,
    intervalTime:       PropTypes.number.isRequired, // 定时器间隔时间
    stop:               PropTypes.bool
};
ProgressBar.defaultProps = {
    stop: true
}
export default ProgressBar;