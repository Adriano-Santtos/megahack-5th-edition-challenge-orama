import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/Index';
import Home from './pages/Home/Index';
import Singin from './pages/Singin/Index';
import Register from './pages/Singin/Register';
import Success from './pages/Singin/Singin';
import Dashboard from './pages/Dashboard/Index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/singin" component={Singin} />
                <Route path="/register" component={Register} />
                <Route path="/success" component={Success} />
                <Route path="/dashboard" component={Dashboard} />

            </Switch>        
        </BrowserRouter>
    );
}
