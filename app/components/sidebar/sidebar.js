import React, { Component } from 'react';
import Tree from '../public/Tree.js'

const node = {
  title: '推荐',  
  key: '0' ,
  level:'level1',
  component: "/tuijian",
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
              level:'level3',
              component: "/RecommendMus",
            }, 
            {  
              title: '排行榜', 
              key: '0-0-1',
              level:'level3',
              component: "/RankingList",
            },  
            {  
              title: '歌单', 
              key: '0-0-2',
              level:'level3',
              component: "/PlayList",
            }, 
            {  
              title: '主播电台', 
              key: '0-0-3',
              level:'level3',
              component: "/RadioMus",
            }, 
            {  
              title: '最新音乐', 
              key: '0-0-4',
              level:'level3',
              component: "/NewMus",
            }, 
        ]
      },  
      {
        title: '私人FM', 
        key: '0-1',
        level:'level2',
        icon: "fa-envira",
        component: "/PrivateFM",
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
            level:'level3',
            component: "/HighMv",
          },
          {
            title: '网易独家', 
            key: '0-2-1',
            level:'level3',
            component: "/SoleWy",
          },
          {
            title: '全部MV', 
            key: '0-2-2',
            level:'level3',
            component: "/AllMv",
          }
        ]

      }, 
      {
        title: '朋友', 
        key: '0-3',
        level:'level2',
        icon: "fa-users",
        component: "/Friends",
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
        <Tree 
           treeList = {node}
           open = {this.state.open}  
        /> 
      </div>
    );
  }
}

export default Sidebar;