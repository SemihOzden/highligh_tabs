import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact={true}>
            <Home />
            </Route>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/features">
            <Features />
            </Route>
        </Switch>
    )
}
