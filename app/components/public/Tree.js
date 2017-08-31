import React, { Component } from 'react';
import classNames from 'classnames';

class Tree extends Component {

    constructor(props){
        super(props)
        this.treeItemCroup    = this.treeItemCroup.bind(this);
        this.handleClick      = this.handleClick.bind(this);

        this.state ={
            openList : false
        }
    }

    componentDidMount() {
        console.log(this.props.treeList)
    }

    handleClick(e) {
        let targetHeihgt = e.target.parentNode.lastChild.style.height;
        let ulHeight = e.target.parentNode.lastChild.childNodes.length;
        e.target.parentNode.lastChild.style.height = targetHeihgt === "0px" ? ulHeight*24+"px" : "0";
        if(e.target.nodeName == "SPAN"){
             e.target.nextElementSibling.style.transform = e.target.nextElementSibling.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)"
        }else{
            e.target.style.transform = e.target.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)"
        }
    }

    treeItemCroup(itemGroup, key, level, isShow) {
        let itemGroupItem = []
        let ulStyle = {
                        height: this.props.open ? ulheight*10+"px" : "0px"
                     }
        if(itemGroup.child){
            itemGroupItem = itemGroup.child.map((item, key) => {
                let iconClass = classNames('fa',item.icon)
                let iconChevron = classNames('fa',{'fa-chevron-right' : item.icon && item.child})
                let groupStyle = {
                    color :      level == "level2" ? "rgb(57, 57, 57)" : "rgb(57, 57, 57)", 
                    fontSize:    level == "level2" ? "13px" : "13px",
                    marginLeft : level.slice(5)+"0px",
                    marginTop  : level == "level2" ? "10px" : "20px"
                }
                let isShow = item.icon;
                return  <li className={item.level} style={groupStyle}>
                            <i className={iconClass} aria-hidden="true"></i>
                            <span onClick={this.handleClick.bind(this)}>{item.title}</span><i className={iconChevron} aria-hidden="true" onClick={this.handleClick.bind(this)}></i>
                            {this.treeItemCroup(item, item.key, item.level, isShow)}
                        </li>
            })
        }
        return (
            <ul className = {level} style={ulStyle}>
                {itemGroupItem}
            </ul>
        )
    }

    render() {
        return (
            <div className="tree">
                { this.treeItemCroup(this.props.treeList, this.props.treeList.key, this.props.treeList.level, false) }
            </div>
        );
    }
}

export default Tree;