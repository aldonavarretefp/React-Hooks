import React from 'react'


import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';
// import NotFoundScreen from './NotFoundScreen';


const AppRouter = () => {
    return (
        <Router>
            <>
            <Navbar/>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <div className="container">
                <Switch>
                    <Route exact path="/about">
                        <AboutScreen/>
                    </Route>
                    <Route exact path="/login">
                        <LoginScreen/>
                    </Route>
                    <Route path="/">
                        <HomeScreen/>
                    </Route>
                    {/* <Route path='*'>
                        <NotFoundScreen/>
                    </Route> */}
                    <Redirect to="/"/>
                </Switch>
            </div>
            </>
    </Router>
    )
}

export default AppRouter
