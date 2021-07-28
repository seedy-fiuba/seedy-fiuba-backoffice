import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader, Button, Alert} from 'reactstrap';
import {app} from "../../app/app";

class ServerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            server: {},
            errorMessage: undefined,
            infoMessage: undefined
        }

        this.fetchServer = this.fetchServer.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
        this.handleApiUpdateResponse = this.handleApiUpdateResponse.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.updateServer = this.updateServer.bind(this);
        this.formatName = this.formatName.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessages(), loading: false});
        } else {
            this.setState({server: response.content(), loading: false});
        }
    }
x
    handleApiUpdateResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessages(), loading: false});
        } else {
            this.setState({infoMessage: 'Updated Succesfully!', loading: false});
        }
    }

    handleUrlChange(event) {
        const server = this.state.server;
        server.url = event.target.value;

        this.setState({ server: server });
    }

    updateServer() {
        this.setState({loading: true});
        app.middleApiClient().updateServer(this.props.match.params.id, this.state.server, this.handleApiUpdateResponse);
    }

    fetchServer() {
        app.middleApiClient().getServer(this.props.match.params.id, this.handleApiResponse)
    }

    formatName(name) {
        return name.toLowerCase().replace('-', ' ')
    }

    componentDidMount() {
        this.setState({loading: true});
        this.fetchServer();
    }

    render() {
        if (this.state.loading) {
            return (
                <Col className="text-center">
                    <span className="spinner-grow text-success" role="status"
                          aria-hidden="true"/>
                </Col>
            )
        }
        return (
            <div>
                <Row>
                    <Col>
                        {
                            this.state.infoMessage &&
                            <Alert color="success">
                                {this.state.infoMessage}
                            </Alert>
                        }
                        {
                            this.state.errorMessage &&
                            <Alert color="danger">
                                {this.state.errorMessage}
                            </Alert>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <CardHeader>
                                <b>#ID: {this.state.server._id}</b>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="name" sm={3}>Name</Label>
                                        <Col sm={9}>
                                            <Input type="name" name="name" id="name" disabled
                                                   className="text-capitalize"
                                                   defaultValue={this.formatName(this.state.server.name)}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="status" sm={3}>Status</Label>
                                        <Col sm={9}>
                                            <Input type="status" name="status" id="status" disabled
                                                   className={`text-capitalize ${(this.state.server.status === 'active') ? "text-success" : "text-danger"}`}
                                                   defaultValue={this.state.server.status}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="description" sm={3}>Description</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="description" id="description" disabled
                                                   className="text-capitalize text-justify"
                                                   defaultValue={this.state.server.description}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="url" sm={3}>URL</Label>
                                        <Col sm={9}>
                                            <Input type="url" name="url" id="url"
                                                   defaultValue={this.state.server.url} onChange={this.handleUrlChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="date" sm={3}>Updated Date</Label>
                                        <Col sm={9}>
                                            <Input type="text" name="date" id="date" disabled
                                                   defaultValue={this.state.server.updatedDate}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                                <Col xs={3} sm={{ offset: "6" }}>
                                    <Button block color="primary" onClick={this.updateServer}>
                                        Save
                                    </Button>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ServerView;