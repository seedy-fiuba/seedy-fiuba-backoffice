import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {app} from "../app/app";
import {Login} from "../controller/Login";
import {PrivateRoute} from "./PrivateRoute";
import {Home} from "../controller/Home";


class Routes extends Component {
    //<!--<PrivateRoute exact path={app.routes().profile} component={Profile}/>-->

    render() {
        return (
            <Router key="router">
                <Route exact path={app.routes().login} render={props => localStorage.getItem("token") ?
                    <Redirect to={{pathname: app.routes().home}}/> :
                    <Login {...props}/>
                }/>
                <PrivateRoute exact path={app.routes().home} component={Home}/>
            </Router>
        )
    }


}

export default Routes;