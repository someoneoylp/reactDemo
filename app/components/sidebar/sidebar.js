import React, { Component } from 'react';
import Tree from '../public/Tree3.js'

// 数组还是对象
const node = [
  {
    title: '发现音乐', 
    key: '0-0',
    level:'level2',
    icon: "fa-music",
    show: true,
    child:[  
        {  
          title: '推荐', 
          key: '0-0-0',
          level:'level3',
          show: true,
          component: "/RecommendMus",
        }, 
        {  
          title: '排行榜', 
          key: '0-0-1',
          level:'level3',
          show: true,
          component: "/RankingList",
        },  
        {  
          title: '歌单', 
          key: '0-0-2',
          level:'level3',
          show: true,
          component: "/PlayList",
        }, 
        {  
          title: '主播电台', 
          key: '0-0-3',
          level:'level3',
          show: true,
          // component: "/RadioMus",
        }, 
        {  
          title: '最新音乐', 
          key: '0-0-4',
          level:'level3',
          show: true,
          // component: "/NewMus",
        }, 
    ]
  },  
  {
    title: '私人FM', 
    key: '0-1',
    level:'level2',
    icon: "fa-envira",
    show: true,
    // component: "/PrivateFM",
  },  
  {
    title: 'MV', 
    key: '0-2',
    level:'level2',
    icon: "fa-youtube-play",
    show: true,
    child: [
      {
        title: 'MV精选', 
        key: '0-2-0',
        level:'level3',
        show: true,
        // component: "/HighMv",
      },
      {
        title: '网易独家', 
        key: '0-2-1',
        level:'level3',
        show: true,
        // component: "/SoleWy",
      },
      {
        title: '全部MV', 
        key: '0-2-2',
        level:'level3',
        show: true,
        // component: "/AllMv",
      }
    ]

  }, 
  {
    title: '朋友', 
    key: '0-3',
    level:'level2',
    icon: "fa-users",
    show: true,
    // component: "/Friends",
  }
]


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