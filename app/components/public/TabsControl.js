/*
*tab组件，切换页面
*外部使用，可以输入
*/
import React, { Component } from 'react';
import List from './List'
import Panel from './Panel'
import classNames from 'classnames';
class TabsControl extends Component {

    constructor(props){
        super(props)
        this.state = {
            currenttab : {
              value: ''
            }
          }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.setState({
            currenttab: this.props.initTab
        })
    }
    handleClick(name, e) {
        // 获取点击的组件名字

        this.setState ({
            currenttab : name
        })
    }
    // 把标题渲染出来
    getTitle() {
        let _this = this
        return (
            React.Children.map(this.props.children, function(child){
                let activeLink = classNames({
                    'activeLink' : _this.state.currenttab == child.props.children.key 
                })
                return (
                    <li onClick={_this.handleClick.bind(this, child.props.children.key)} className = { activeLink }>{child.props.name}</li>
                )
            })
        ) 
    }

    getContent() {
        let _this = this
        return (
            React.Children.map(this.props.children, function(child){
                if(_this.state.currenttab == child.props.children.key){
                    return (
                        <div onClick={_this.handleClick.bind(this, child.props.name)}>{child.props.children}</div>
                    )
                }
                return (
                    null
                )
            })
        ) 
    }
    render() {
        return (
            <div>
                <ul className="tabLink">
                    {this.getTitle()}
                </ul>
                <div className="tabContent">
                    {this.getContent()}
                </div>
            </div>
            
        );
    }
}

export default TabsControl;