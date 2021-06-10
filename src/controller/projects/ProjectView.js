import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader} from 'reactstrap';
import {app} from "../../app/app";

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            project: {},
            errorMessage: ''
        }

        this.fetchProject = this.fetchProject.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessage(), loading: false});
        } else {
            this.setState({project: response.content(), loading: false});
        }
    }

    fetchProject() {
        console.log('llega aca')
        app.projectsApiClient().getProject(this.props.match.params.id, this.handleApiResponse, {'X-Override-Token': true})
    }

    componentDidMount() {
        this.setState({loading: true});
        this.fetchProject();
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
                                <b>#ID: {this.state.project._id}</b>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="title" sm={3}>Title</Label>
                                        <Col sm={9}>
                                            <Input type="title" name="title" id="title" disabled
                                                   defaultValue={this.state.project.title}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="description" sm={3}>Description</Label>
                                        <Col sm={9}>
                                            <Input type="description" name="description" id="description" disabled
                                                   defaultValue={this.state.project.description}/>
                                        </Col>
                                    </FormGroup>
                                    {/* <FormGroup row>
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
                                    </FormGroup> */}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        }
    }
}

export default ProjectView;