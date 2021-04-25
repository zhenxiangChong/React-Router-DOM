import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <NavLink activeClassName="" className="" to="/about">About</NavLink>
              <NavLink activeClassName="" className="" to="/home">Home</NavLink>
            </div>
          </div>
        </div>
        <hr/>
        <div>
          <div>
            <div>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
