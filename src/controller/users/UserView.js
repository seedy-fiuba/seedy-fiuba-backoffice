import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader, Button} from 'reactstrap';
import {app} from "../../app/app";

class UserView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {},
            errorMessage: ''
        }

        this.fetchUser = this.fetchUser.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessage(), loading: false});
        } else {
            this.setState({user: response.content(), loading: false});
        }
    }

    fetchUser() {
        app.usersApiClient().getUser(this.props.match.params.id, this.handleApiResponse)
    }

    componentDidMount() {
        this.setState({loading: true});
        this.fetchUser();
    }

    render() {
        if (this.state.loading) {
            return (
                <Col className="text-center">
                    <span className="spinner-grow text-success" role="status"
                          aria-hidden="true"/>
                </Col>
            )
        } else {
            return (
                <Row>
                    <Col xs={8}>
                        <Card>
                            <CardHeader>
                                <b>#ID: {this.state.user.id}</b>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="name" sm={3}>Name</Label>
                                        <Col sm={9}>
                                            <Input type="name" name="name" id="name" disabled
                                                   defaultValue={this.state.user.name}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="last_name" sm={3}>Last Name</Label>
                                        <Col sm={9}>
                                            <Input type="last_name" name="last_name" id="last_name" disabled
                                                   defaultValue={this.state.user.lastName}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="email" sm={3}>Email</Label>
                                        <Col sm={9}>
                                            <Input type="email" name="email" id="email" disabled
                                                   defaultValue={this.state.user.email}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="role" sm={3}>Role</Label>
                                        <Col sm={9}>
                                            <Input type="role" name="role" id="role" disabled
                                                   defaultValue={this.state.user.role}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="created_at" sm={3}>Created At</Label>
                                        <Col sm={9}>
                                            <Input type="created_at" name="created_at" id="created_at" disabled
                                                   defaultValue={this.state.user.createdAt}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="updated_at" sm={3}>Updated At</Label>
                                        <Col sm={9}>
                                            <Input type="updated_at" name="updated_at" id="updated_at" disabled
                                                   defaultValue={this.state.user.updatedAt}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="status" sm={3}> Status </Label>
                                        <Col sm={9}>
                                            <Input type="updated_at" name="status" id="status" disabled
                                                   Value={this.state.user.status}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <Button color={this.state.user.status == 'blocked' ? "success" : "danger" } onClick={() => {
                                let newStatus = this.state.user.status == 'blocked' ? "available" : "blocked"
                                app.usersApiClient().updateUser(this.state.user.id, newStatus , this.handleApiResponse)
                            }}> {this.state.user.status == 'blocked' ? "Unblock" : "Block" } </Button>{' '}
                        </Card>
                    </Col>
                </Row>
            )
        }
    }
}

export default UserView;