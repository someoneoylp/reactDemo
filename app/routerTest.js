import React, { Component } from 'react';
import {BrowserRouter,  Route, Link } from 'react-router-dom'
const Links = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to={{pathname: '/about'}}>About</Link>
      <Link replace to="/contact">Contact</Link>
      <Link to="/nested">Nested</Link>
    </nav>
  )
  
  const App = () => (
    <BrowserRouter>
      <div>
        <AddressBar/>
        
        <Links />
        
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/nested" render={Nested} />
      </div>
    </BrowserRouter>
  )
  
  const Nested = () => (
    <div>
      <Link to="/nested/one">One</Link>
      <Link to="/nested/two">Two</Link>
      <Link replace to="/nested/Three">Three</Link>
      <div>选择一个点击</div>
      <Route path="/nested/:minooo?" render={({match}) => <h2>URL: {match.params.minooo || 'minooo'}</h2>} />
    </div>
  )
  
  /* 为了展示URL的变化的组件 请无视我*/
  const AddressBar = () => (
    <Route render={({ location:{pathname}, history}) => (
      <div className="address-bar">
        <div>
          <button
            className="ab-button"
            onClick={history.goBack}
          >◀︎</button>
        </div>
        <div>
          <button
            className="ab-button"
            onClick={history.goForward}
          >▶</button>
        </div>
        <div className="url">URL: {location.pathname}</div>
      </div>
  
    )}/>
  )
  
  render(<App/>, document.getElementById('root'))