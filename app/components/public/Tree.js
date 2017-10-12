import React, { Component } from 'react';
import classNames from 'classnames';
/*
树组件功能：
    层次过多时也能正常显示  先解决
        先把数据都打印出来  结构不太好
        调整样式
    可以控制开关闭合
    可以根据child有没有来判断有没有子元素
    有checbox功能
    m没有可以，component
    icon
    要有默认的样式
    全部都是li
    拖拽

    重写重写

    写东西一定不要拖拖拉拉，过段时间自己都不记得自己写了什么鬼>.<

    要家样式图标，结构，样式自定义
    选中样式, 利用index key来做
    state等于的话就是true 
    点击title的时候才会边颜色，点击箭头的时候只是展开收起  √
    可以设置每个子元素的高度maxHeigh,minHeight, auto不行要用li来做决定


    不能控制一开始的开关，应该一开始就是关闭的

*/
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
        // 传一个标识符进来，判断是箭头还是title
        // 箭头旋转
        //兄弟节点的key找到key- 的都隐藏起来
        // 展开收起还是有问题
        // 怎么设置show为false
        // 根据item找到在treeList的位置
        //数组，对象
        if(type === 'arrow'){
            let isShow = e.target.style.transform === "rotate(-90deg)";
            e.target.style.transform = isShow ? "rotate(0deg)" : "rotate(-90deg)"
            // 点击的时候设置当前层级的子元素素隐藏
            // 点击的时候是根据当前是否是展开来判定是否展开，如果child的child的隐藏的，那么就会显示，应该给父级一个标记，根据这个标记判定是展开还是隐藏
            this.showTree(item, isShow)
            // 没有实际作用的代码，因为改变item,show没有重新渲染，执行下这个代码会重新渲染？？
            this.setState({
                currentIndex : this.state.currentIndex
            }) 
        }
        // 好像没有重新渲染，数据有更新
        // 点击title变化是因为state改变导致重新渲染了
        if(type === 'title'){
            this.setState({
                currentIndex : item.key
            })  
        }
    }

    showTree(tree, isShow){
        // 没有重新渲染
        // 没有记住状态
        tree.child.map((childs) => {
            // 如果已经收起来了，就不再改变child的状态，怎么判断是否收起来了呢？？
            // 点击收起的时候就是把当前展开的关闭，等点击展开的时候就把原来展开的展开，不是因为这次操作而展开的不处理
            // 现在点击展开的时候所有的child都会展开
            childs.show = isShow
            if(childs.child){
                this.showTree(childs, isShow)
            }
        })
    }

    itemTitle(item){
        if(item.component){ 
            return (<Link to={ item.component } >
                         <span onClick={this.handleClick.bind(this, item,  'titile')}>{item.title}</span>
                    </Link>)
        }else{
            return (
                 <span onClick={this.handleClick.bind(this, item,  'title')}>{item.title}</span>
            )
        }
    }

    treeItemCroup(item) {
        let itemStyle = {
            marginLeft: item.level ?  20*parseInt(item.level.slice(5), 10)+'px' : false
        }
        let iconRight = classNames('fa',{'fa-chevron-down' : item.child})
        let iconLeft = classNames('fa',item.icon)
        // console.log(item.show)
        let itemClass = classNames(item.level, {
            curretnItem: this.state.currentIndex === item.key ? true : false,
            showTree: item.show
        })
        // 点击的时候设置子节点的show为false
        return (
            <li style={itemStyle} id={item.key} className={itemClass} key={item.key}>
                {/*如果child存在，则绑定点击展开事件 */}
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