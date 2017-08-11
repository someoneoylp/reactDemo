import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
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
    const friendsIcon = classNames('header-nav-icon', {
        'friends' : true
    })
    const listIcon = classNames('header-nav-icon', {
        'list' : true
    })
    return (
        <div className="App">
            <Router>
                <div className="wrapper">
                    <div className={ loadingClass }>
                        <img src={loading} className="isLoading"/>
                    </div>
                    <div className="header">
                        <div className="func">
                            <div className="burger-box">
                                <div className="burger"></div>
                                <div className="burger"></div>
                                <div className="burger"></div>
                            </div>
                        </div>
                        <div className="header-nav">
                            <i className={ musicIcon } onClick={this.setNav}>
                                <NavLink to="/musicList" activeClassName="musAct"></NavLink>
                            </i>
                            <i className={ listIcon }>
                                <NavLink to="/Player" activeClassName="listAct"></NavLink>
                            </i>
                            <i className={ friendsIcon }>
                                <NavLink to="/Personal" activeClassName="friAct"></NavLink>
                            </i>
                        </div>
                        <div className="search">
                        </div> 
                    </div>
                    <div className="content">
                        <Route exact path="/musicList" component={ MusicList } />
                        <Route path="/Personal" component={ Personal } />
                        <Route path="/Player" component={ Player } />
                    </div>
                    {/* <Footer />
                    <Sidebar /> */}
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
