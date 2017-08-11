// 歌单组件
import React, { Component } from 'react';
import Recommend from './recommend.js';
import RankingList from './rankingList.js';
import proxy from 'http-proxy-middleware';

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

class MusicList extends Component {
  render() {
    
    return (
        <div className="MusicList">
            <Router>
            <div className="music-box">
                <div className="music-nav">
                    <NavLink to={`${this.props.match.url}/recommend`} className="recommend" activeClassName="musicNavActive">个性推荐</NavLink>
                    <NavLink to={`${this.props.match.url}/rankingList`} className="ranking-list" activeClassName="musicNavActive">排行榜</NavLink>
                </div>
                <div className="conten-view">
                    <Route exact path={`${this.props.match.url}/recommend`} component={ Recommend } />
                    <Route exact path={`${this.props.match.url}/rankingList`} component={ RankingList } />
                    <Route exact path={`${this.props.match.url}`} component={ Recommend }></Route>
                </div>
                
            </div>
            </Router>
            
            {/*不同歌单切换导航 （个性推荐，排行榜） */}
            {/*轮播图---组件  */}
            {/*歌单item --- 组件  */}
        </div>
    );
  }
}

export default MusicList;
