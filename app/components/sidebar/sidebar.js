import React, { Component } from 'react';
import Tree from '../public/Tree.js'

const node = {
  title: '推荐',  
  key: '0' ,
  level:'level1',
  icon : "",
  child:[  
      {
        title: '发现音乐', 
        key: '0-0',
        level:'level2',
        icon: "fa-music",
        child:[  
            {  
              title: '推荐', 
              key: '0-0-0',
              level:'level3'
            }, 
            {  
              title: '排行榜', 
              key: '0-0-1',
              level:'level3'
            },  
            {  
              title: '歌单', 
              key: '0-0-2',
              level:'level3'
            }, 
            {  
              title: '主播电台', 
              key: '0-0-3',
              level:'level3'
            }, 
            {  
              title: '最新音乐', 
              key: '0-0-4',
              level:'level3'
            }, 
        ]
      },  
      {
        title: '私人FM', 
        key: '0-1',
        level:'level2',
        icon: "fa-envira",
      },  
      {
        title: 'MV', 
        key: '0-2',
        level:'level2',
        icon: "fa-youtube-play",
        child: [
          {
            title: 'MV精选', 
            key: '0-2-0',
            level:'level3'
          },
          {
            title: '网易独家', 
            key: '0-2-1',
            level:'level3'
          },
          {
            title: '全部MV', 
            key: '0-2-2',
            level:'level3'
          }
        ]

      }, 
      {
        title: '朋友', 
        key: '0-3',
        level:'level2',
        icon: "fa-users",
      }, 
  ]
}

class Sidebar extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false  //可以设置目录一开始是打开还是关闭
    }
  }
  render() {
    return (
      <div className="sidebar">
        {/* 推荐 */}
        <Tree 
           treeList = {node}
           open = {this.state.open}  
        /> 
        {/* 我的音乐 创建歌单 */}
        {/* 下载的音乐 */}
      </div>
    );
  }
}

export default Sidebar;