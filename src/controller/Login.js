import React, {Component} from 'react';
import {Form, Button, FormGroup, Label, Input, Col, Row, Alert, FormFeedback} from 'reactstrap';
import "../assets/css/Login.css";
import logo from "../assets/img/logo-seedyfiuba.png";
import '../assets/css/App.css';
import {app} from '../app/app';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            formData: {
                email: '',
                password: ''
            },
            errorMessage: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleInputChange(event) {
        const input = event.target;
        let formData = this.state.formData;
        formData[input.name] = input.value;
        this.setState({formData: formData});
    }

    handleApiResponse(response) {
        this.setState({isLoading: false});
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessages()});
        } else {
            console.log(response.content())
            app.loginUser(response.content().token);
            this.props.login();
            this.props.history.push(app.routes().login);
        }
    }

    handleSubmit() {
        this.setState({isLoading: true});
        app.usersApiClient().login(this.state.formData, this.handleApiResponse);
    }

    render() {
        return (
            <div className="container">
                <Col xs="5" className="align-content-center">
                    <Row>
                        <Col className="text-center">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h3>
                                Admin
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <FormGroup row>
                                    <Label for="email" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="email" placeholder="Email" required onChange={this.handleInputChange}/>
                                        <FormFeedback valid> sarasa  </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="password" placeholder="Password" required onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col sm={{size: 5, offset: 9}}>
                                        <Button color="primary" onClick={this.handleSubmit} disabled={this.state.isLoading}>
                                            {this.state.isLoading ?
                                                <span className="spinner-grow spinner-grow-sm" role="status"
                                                       aria-hidden="true"/>
                                                : 'Sign In'}
                                        </Button>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                {
                                    this.state.errorMessage &&
                                        <Col sm={12}>
                                            <Alert color="danger">
                                                {this.state.errorMessage}
                                            </Alert>
                                        </Col>
                                }
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Login;