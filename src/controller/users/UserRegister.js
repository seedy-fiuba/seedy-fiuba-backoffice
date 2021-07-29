import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Input, Label, Card, CardBody, FormFeedback, Button, Alert} from 'reactstrap';
import {app} from "../../app/app";

class UserRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            formData: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                role: "admin"
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
            this.setState({isLoading: false});
        } else {
            console.log(response.content())
            // Estaria copado emitir una alerta de que salio todo bien
            this.props.history.push('/users');
        }
    }

    handleSubmit() {
        this.setState({isLoading: true});
        console.log(this.state.formData)
        app.usersApiClient().register(this.state.formData, this.handleApiResponse);
    }

    render() {
        return (
            <Row>
                <Col xs={8}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input type="name" name="name" id="name" placeholder="name" required onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="lastName" sm={2}> LastName</Label>
                                    <Col sm={10}>
                                        <Input type="lastName" name="lastName" id="lastName" placeholder="lastName" required onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
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
                                        <Button color="success" onClick={this.handleSubmit}> {this.state.isLoading ?
                                                <span className="spinner-grow spinner-grow-sm" role="status"
                                                       aria-hidden="true"/>
                                                : 'Submit'} </Button>{' '}
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default UserRegister;