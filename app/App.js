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

  render() {
    const loadingClass = classNames("loading-wrapper", {
        "isShow" : false
    });
    return (
        <div className="App">
            {/* basename: 为所有的页面添加一个基准的URL */}
            <Router>
                <div className="wrapper">
                    <div className={ loadingClass }>
                        <img src={loading} className="isLoading"/>
                    </div>
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
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
