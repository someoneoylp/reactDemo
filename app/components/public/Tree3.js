import React, { Component } from 'react';
import classNames from 'classnames';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
import {
    Link,
  } from 'react-router-dom';

class Tree extends Component {
    constructor(props){
        super(props)
        this.treeItemCroup    = this.treeItemCroup.bind(this);
        this.handleClick      = this.handleClick.bind(this);
        this.state ={
            currentIndex : ''
        }
    }
    handleClick(item, type, e) {
        if(type === 'arrow'){
            let isShow = e.target.style.transform === "rotate(-90deg)";
            e.target.style.transform = isShow ? "rotate(0deg)" : "rotate(-90deg)"
            this.showTree(item, isShow)
            this.setState({
                currentIndex : this.state.currentIndex
            }) 
        }
        if(type === 'title'){
            this.setState({ currentIndex : item.key })  
        }
    }
    showTree(tree, isShow){
        tree.child.map((childs) => {
            childs.show = isShow ;
            if(childs.child){
                this.showTree(childs, isShow)
            }
        })
    }
    itemTitle(item){
        if(item.component){ 
            return (<Link to={ item.component } onClick={this.handleClick.bind(this, item, 'title')}>
                         {item.title}
                    </Link>)
        }else{
            return (
                 <span onClick={this.handleClick.bind(this, item,  'title')}>{item.title}</span>
            )
        }
    }
    treeItemCroup(item) {
        let itemStyle = {
            marginLeft: item.level ?  15*parseInt(item.level.slice(5), 10)+'px' : false
        }
        let iconRight = classNames('fa',{'fa-chevron-down' : item.child})
        let iconLeft = classNames('fa',item.icon)
        let itemClass = classNames(item.level, {
            curretnItem: this.state.currentIndex === item.key ? true : false,
            showTree: item.show
        })
        return (
            <li style={itemStyle} id={item.key} className={itemClass} key={item.key}>
                <i aria-hidden="true" className={iconLeft}></i>
                {this.itemTitle(item)}
                <i aria-hidden="true" className={iconRight} onClick={this.handleClick.bind(this, item,  'arrow')}></i>
            </li>
        )
    }
    tree(treeList, res){
        treeList.map((item) => {
            res.push(this.treeItemCroup(item));
            if(item.child){
                this.tree(item.child, res)
            }
        })
        return res
    }
    render() {
        let res = []
        return (
            <div className="tree">
                {this.tree(this.props.treeList, res)}
            </div>
        );
    }
}
export default Tree;