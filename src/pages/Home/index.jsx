import React, { Component } from 'react'
import Message from './Message'
import News from './News'
import {NavLink, Redirect, Route, Switch } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news"> </Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
