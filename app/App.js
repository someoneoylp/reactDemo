import React, { Component } from 'react';
import './css/App.css';
import './css/reset.css';
import Header from './components/header/header';
import MusicList from './components/content/musicList.js';
import Personal from './components/content/personal.js';
import Player from './components/content/player.js';
import Sidebar from './components/sidebar/sidebar.js';
import classNames from 'classnames';
import loading from './image/loading.gif';
import Footer from './components/Footer/footer.js';

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

class App extends Component {
  constructor(props,context){
    super(props);
    this.state = {
      isLoading : false
    }
  }
  componentDidMount() {
    this.setState({
        isLoading: false
    })
  }

  setNav() {
  }

  render() {
    const loadingClass = classNames("loading-wrapper", {
        "isShow" : false
    });
    const musicIcon = classNames('header-nav-icon', {
        'music' : true
    })
    const settingIcon = classNames('header-nav-icon','fa', 'fa-cog','setting-icon')
    const searchIcon =  classNames('fa','fa-search','search-icon')
    return (
        <div className="App">
            <Router>
                <div className="wrapper">
                    <div className={ loadingClass }>
                        <img src={loading} className="isLoading"/>
                    </div>
                    <div className="header">
                        <div className="header-nav">
                            <div className="header-logo">
                                <i className={ musicIcon } onClick={this.setNav}>
                                    <NavLink to="/musicList" activeClassName="musAct"></NavLink>
                                </i>
                                网易云音乐
                            </div>
                            <div className="header-search">
                                <i className={searchIcon} aria-hidden="true"></i>
                                <input type="text" />
                            </div> 
                            <div className="header-setting">
                                <i className={ settingIcon } aria-hidden="true">
                                    <NavLink to="/Player" activeClassName="listAct"></NavLink>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <Sidebar />
                        <div className="music-content">
                            <Route exact path="/musicList" component={ MusicList } />
                            <Route path="/Personal" component={ Personal } />
                            <Route path="/Player" component={ Player } />
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
