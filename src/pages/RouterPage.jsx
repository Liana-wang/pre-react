import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class RouterPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h3>RouterPage</h3>
                <Router>
                    <Link to='/'>首页  </Link>
                    <Link to='/user'>  用户中心</Link>

                    {/* 优先级 children > compoenent > render */}
                    {/* component和render和location完全匹配，children不完全 */}
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={HomePage}
                        // children={() => <div>children</div>}
                        // render={() => <div>render</div>}
                        />
                        <Route path='/user' component={UserPage} />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
                <hr />
            </div>
        );
    }
}

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h5>HomePage</h5>
            </div>
        );
    }
}

class UserPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h5>UserPage</h5>
            </div>
        );
    }
}

class EmptyPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h5>EmptyPage 404</h5>
            </div>
        );
    }
}