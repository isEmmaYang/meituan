import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Tabs from './components/Tabs'

import Home from './pages/home'
import Order from './pages/order'
import Mine from './pages/mine'
import NotFind from './pages/notFind'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* 根页面 */}
          <Switch>
            <Route path="/" exact render={()=><Redirect to="/home"/>}/>
            <Route path="/home" component={Home}/>
            <Route path="/order" component={Order}/>
            <Route path="/mine" component={Mine}/>
            <Route component={NotFind}/>
          </Switch>

          {/* tab栏 */}
          <Tabs></Tabs>

        </div>
      </Router>
    );
  }
}


export default App;
