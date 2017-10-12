import React, { Component } from 'react';


/**
 * loading组件
 * 功能： 
 *     有动画效果
 *     有罩层
 *     可以控制尺寸
 * 时间思路：
 *     用css3做
 *     要能在父元素里面垂直居中   
 *     还要沾满整个屏幕         
 *传递的参数：  
        显示的开关
        size

 */
class LoadingComp extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            this.props.isloading ? 
            <div className="loading">
                <span>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
            : null
        )
    }
}

export default LoadingComp