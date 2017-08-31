import React, { Component } from 'react';
import MusicList from '../content/musicList.js';
import Personal from '../content/personal.js';
import Player from '../content/player.js';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        <HashRouter>
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
                <div>
                    <Route exact path="/musicList" component={MusicList} />
                    <Route path="/Personal" component={Personal} />
                    <Route path="/Player" component={Player} />
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default Header;