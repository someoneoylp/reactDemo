import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/header/header';
import MusicList from './components/content/musicList.js';
import Personal from './components/content/personal.js';
import Player from './components/content/player.js';
import Sidebar from './components/sidebar/sidebar.js';
import classNames from 'classnames'
import loading from './image/loading.gif';



import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props,context){
    super(props);
    this.state = {
      isLoading : true
    }
  }
  componentDidMount() {
    this.setState({
        isLoading: false
    })
  }
  render() {
    var loadingClass = classNames({
        "isShow" : this.state.isLoading,
        "loading": false
    });
    return (
      <div className="App">
        <HashRouter>
            <div className="wrapper">
                <img src={loading} className={ loadingClass } />
                <div className="header">
                    <div class="func">
                        <Link to="/sidebar">
                            <div class="burger"></div>
                            <div class="burger"></div>
                            <div class="burger"></div>
                        </Link>
                    </div>
                    <div class="header-nav">
                        <Link to="/musicList">
                            <i class="music header-nav-icon">
                                M
                            </i>
                        </Link>
                        <Link to="/Player">
                            <i class="list header-nav-icon">
                                L
                            </i>
                        </Link>
                        <Link to="/Personal">
                            <i class="friends header-nav-icon">
                              P 
                            </i>
                        </Link>
                        
                    </div>
                    <div class="search">
                        S
                    </div> 
                </div>
                <div className="content">
                    <Route exact path="/musicList" component={ MusicList } />
                    <Route path="/Personal" component={ Personal } />
                    <Route path="/Player" component={ Player } />
                </div>
                <div className="footer">
                  F
                </div>
                <Sidebar />
            </div>
            
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
