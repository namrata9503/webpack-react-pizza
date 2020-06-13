import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import Pizza from './containers/Pizza';
import AsyncComponent from './hoc/asyncComponent';

const asyncPizza = AsyncComponent(()=>{
    return import('./containers/Pizza.js');
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" component={Users} />
                    <Route path="/pizza" component={asyncPizza} />
                </div>
            </div>
        )
    }
}

export default App;