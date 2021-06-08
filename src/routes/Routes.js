import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {app} from "../app/app";
import {Login} from "../controller/Login";
import {PrivateRoute} from "./PrivateRoute";
import {Home} from "../controller/Home";
import {UsersList} from "../controller/users/List";
import UserView from "../controller/users/UserView";
import {ProjectsList} from "../controller/projects/List";
import Nav from "../components/Navbar/Navbar";
import {Col, Row} from "reactstrap";

class Routes extends Component {

    render() {
        return (
            <Router key="router">
                <br/>
                <br/>
                <Row>
                    <Col xs={2}>
                        <Nav/>
                    </Col>
                    <Col xs={10}>
                        <Switch>
                            <Route exact path={app.routes().login} render={props => localStorage.getItem("token") ?
                                <Redirect to={{pathname: app.routes().home}}/> :
                                <Login {...props}/>
                            }/>
                            <PrivateRoute exact path={app.routes().home} component={Home}/>
                            <PrivateRoute exact path={app.routes().users} component={UsersList}/>
                            <PrivateRoute exact path={app.routes().profile} component={UserView}/>
                            <PrivateRoute exact path={app.routes().projects} component={ProjectsList}/>
                        </Switch>
                    </Col>
                </Row>
            </Router>
        )
    }


}

export default Routes;