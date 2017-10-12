import React, { Component } from 'react';
import './css/App.css';
import './css/reset.css';
import Header from './components/header/header';
import MusicList from './components/content/musicList.js';
import Personal from './components/content/personal.js';
import Player from './components/content/player.js';
import Sidebar from './components/sidebar/sidebar.js';
import DragComp from './components/public/DragComp';
import classNames from 'classnames';
import loading from './image/loading.gif';
import Footer from './components/Footer/footer.js';
import createHistory from 'history/createBrowserHistory'
import LoadingComp from './components/public/loading.js'

const history = new createHistory()
history.push('/RecommendMus');

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
      isLoading : false,
      showLyric: false
    }
    this.taggerLyric = this.taggerLyric.bind(this)
  }
  componentDidMount() {
    this.setState({
        isLoading: false
    })
  }

  taggerLyric(){
    this.setState({
        showLyric : !this.state.showLyric
    })
  }

  render() {
    const loadingClass = classNames("loading-wrapper", {
        "isShow" : false
    });
    const showLyric = classNames({
        "isShow" : this.state.showLyric
    });
    const dragCompStyle = {
        display : this.state.showLyric ? 'block' : 'none',
        top: '600px'
    }
    return (
        <div className="App">
            <LoadingComp isLoading={this.state.isLoading}/>
            {/* basename: 为所有的页面添加一个基准的URL */}
            <Router>
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <Sidebar />
                        <div className="music-content">
                            <Switch>
                                <Route exact path="/RecommendMus" component={ MusicList } />
                                <Route path="/Personal" component={ Personal } />
                                <Route path="/Player" component={ Player } />
                            </Switch>
                        </div>
                    </div>
                    <Footer taggerLyric = {this.taggerLyric}/>
                    <DragComp dragCompStyle = {dragCompStyle}>
                        <div className="lyric-box">
                            <i className="closeLyric" onClick={this.taggerLyric}>x</i>
                            <p className="lyric">You say you wander your own land</p>
                        </div>
                    </DragComp>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
