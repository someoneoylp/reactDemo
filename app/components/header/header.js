import React, { Component } from 'react';
import classNames from 'classnames';

import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';


class Header extends Component {
  render() {
    const musicIcon = classNames('header-nav-icon', {
        'music' : true
    });
    const settingIcon = classNames('header-nav-icon','fa', 'fa-cog','setting-icon')
    const searchIcon =  classNames('fa','fa-search','search-icon')
    return (
        <HashRouter>
            <div className="header">
            <div className="header-nav">
                <div className="header-logo">
                    <i className={ musicIcon } onClick={this.setNav}>
                        <NavLink to="/musicList" activeClassName="musAct"></NavLink>
                    </i>
                    网易云音乐
                </div>
                <div className="goback">
                    <i className="fa fa-chevron-right" id="next" aria-hidden="true"></i>
                    <i className="fa fa-chevron-left" id="previous" aria-hidden="true"></i>
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
        </HashRouter>
    );
  }
}

export default Header;