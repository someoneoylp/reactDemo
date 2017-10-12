/**
 * 拖拽组件
 * 功能：
 *  可以随意拖拽
 *  内容可以自定义
 *  要可以限制拖拽范围
 *  怎么表示拖拽的范围呢
 *  在父元素里面才可以拖拽  --- 先这样做吧  >.<没有做
 */
import React, {Component} from 'react';

class DragComp extends Component{
    constructor(props){
        super(props)

        this.state ={
            initX : null,
            initY : null,
            initClientX : null,
            initClientY: null
        }

        this.handleDragstart = this.handleDragstart.bind(this);
        this.handleDrag      = this.handleDrag.bind(this);
    }
    // 实现拖拽思路，主要是根据拖拽的距离设置div的left和right
    handleDragstart(e) {
        this.setState({
            initX: e.target.offsetLeft,
            initY: e.target.offsetTop,
            initClientX: e.clientX,
            initClientY: e.clientY
        })
    }

    handleDrag(e) {
        if(e.clientX){
            e.target.style.left = this.state.initX + (e.clientX - this.state.initClientX)+'px';
            e.target.style.top =  this.state.initY + (e.clientY - this.state.initClientY)+'px';
        }
    }
    
    render() {
        
        return (
            <div
                style = {this.props.dragCompStyle}
                className='drag-box'
                draggable="true" 
                onDragStart = {this.handleDragstart.bind(this)} 
                onDrag = {this.handleDrag.bind(this)}
            >
                {this.props.children}
            </div>
        )
    }

}

export default DragComp;