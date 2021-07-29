import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {app} from "../app/app";
import {Login} from "../controller/Login";
import {PrivateRoute} from "./PrivateRoute";
import {Home} from "../controller/Home";
import {UsersList} from "../controller/users/List";
import UserView from "../controller/users/UserView";
import UserRegister  from "../controller/users/UserRegister";
import {ProjectsList} from "../controller/projects/List";
import ProjectView from "../controller/projects/ProjectView";
import Nav from "../components/Navbar/Navbar";
import {Col, Row} from "reactstrap";
import ServersList from "../controller/servers/List";
import ServerView from "../controller/servers/ServerView";


class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }

        this.login = this.login.bind(this);
    }

    login() {
        this.setState({ isAuthenticated: true })
    }

    render() {
        return (
            <Router key="router">
                <br/>
                <br/>
                <Row>
                    { (this.state.isAuthenticated || app.thereIsLoggedInUser()) &&
                        <Col xs={2}>
                            <Nav/>
                        </Col>
                    }
                    <Col xs={(this.state.isAuthenticated || app.thereIsLoggedInUser()) ? 10 : 12}>
                        <Switch>
                            <Route exact path={app.routes().login} render={props => (this.state.isAuthenticated || app.thereIsLoggedInUser()) ?
                                <Redirect to={{pathname: app.routes().home}}/> :
                                <Login {...props} login={this.login}/>
                            }/>
                            <PrivateRoute exact path={app.routes().home} component={Home}/>
                            <PrivateRoute exact path={app.routes().users} component={UsersList}/>
                            <PrivateRoute exact path={app.routes().project} component={ProjectView}/>
                            <PrivateRoute exact path={app.routes().profile} component={UserView}/>
                            <PrivateRoute exact path={app.routes().projects} component={ProjectsList}/>
                            <PrivateRoute exact path={app.routes().registerAdmin} component={UserRegister}/>
                            <PrivateRoute exact path={app.routes().servers} component={ServersList}/>
                            <PrivateRoute exact path={app.routes().server} component={ServerView}/>
                        </Switch>
                    </Col>
                </Row>
            </Router>
        )
    }


}

export default Routes;