import React, {Component} from 'react';
import {Col, Form, FormGroup, Row, Input, Label, Card, CardBody, CardHeader, Button} from 'reactstrap';
import {app} from "../../app/app";
import Box from '@material-ui/core/Box';
class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            project: {
                location: {
                    coordinates: []
                },
                hashtags: [],
                mediaUrls: [],
                stages: []
            },
            errorMessage: ''
        }

        this.fetchProject = this.fetchProject.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
        this.blockProject = this.blockProject.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({errorMessage: response.errorMessage(), loading: false});
        } else {
            this.setState({project: response.content(), loading: false});
            console.log(JSON.stringify(response.content()))
        }
    }

    fetchProject() {
        app.projectsApiClient().getProject(this.props.match.params.id, this.handleApiResponse, {'X-Override-Token': true})
    }

    blockProject() {
        let newStatus = this.state.project.isBlocked == true ? "unblocked" : "blocked"
        app.projectsApiClient().updateProject(this.state.project.id, newStatus, this.handleApiResponse)
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
                                <b>#ID: {this.state.project.id}</b>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                <FormGroup row>
                                        <Label for="id" sm={3}> ID</Label>
                                        <Col sm={9}>
                                            <Input type="id" name="id" id="id" disabled
                                                   defaultValue={this.state.project.id}/>
                                        </Col>
                                    </FormGroup>
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
                                    <FormGroup row>
                                        <Label for="status" sm={3}>Status</Label>
                                        <Col sm={9}>
                                            <Input type="status" name="status" id="status" disabled
                                                   Value={this.state.project.isBlocked ? 'blocked': this.state.project.status}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="reviewerId" sm={3}>Reviewer ID</Label>
                                        <Col sm={9}>
                                            <Input type="reviewerId" name="reviewerId" id="reviewerId" disabled
                                                   defaultValue={this.state.project.reviewerId}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="category" sm={3}>Category</Label>
                                        <Col sm={9}>
                                            <Input type="category" name="category" id="category" disabled
                                                   defaultValue={this.state.project.category}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="ownerId" sm={3}>Owner ID</Label>
                                        <Col sm={9}>
                                            <Input type="ownerId" name="ownerId" id="ownerId" disabled
                                                   defaultValue={this.state.project.ownerId}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="walletId" sm={3}>Wallet ID</Label>
                                        <Col sm={9}>
                                            <Input type="walletId" name="walletId" id="walletId" disabled
                                                   defaultValue={this.state.project.walletId}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="finishDate" sm={3}>Finish Date</Label>
                                        <Col sm={9}>
                                            <Input type="finishDate" name="finishDate" id="finishDate" disabled
                                                   defaultValue={this.state.project.finishDate}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="fundedAmount" sm={3}>Funded Amount</Label>
                                        <Col sm={9}>
                                            <Input type="fundedAmount" name="fundedAmount" id="fundedAmount" disabled
                                                   defaultValue={this.state.project.fundedAmount}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="currentStageID" sm={3}>Current stage ID</Label>
                                        <Col sm={9}>
                                            <Input type="currentStageID" name="currentStageID" id="currentStageID" disabled
                                                   defaultValue={this.state.project.currentStageId}/>
                                        </Col>
                                    </FormGroup>
                                    {
                                        this.state.project.stages.map((stage, i) => {
                                            let stageId = `stage-${i}`
                                            return (
                                                <div key={i}>
                                                    <Box bgcolor="text.secondary" color="background.paper"p={2}>
                                                        <h4>{`Stage ${i + 1}`}</h4>
                                                        <FormGroup row>
                                                            <Label for={stageId} sm={3}>{`Track`}</Label>
                                                            <Col sm={9}> 
                                                                <Input type="text" name={stageId} id={stageId} disabled
                                                                    defaultValue={stage.track} className="Track"/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup row>
                                                            <Label for={stageId} sm={3}>{`ID`}</Label>
                                                            <Col sm={9}> 
                                                                <Input type="text" name={stageId} id={stageId} disabled
                                                                    defaultValue={stage.id} className="ID"/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup row>
                                                            <Label for={stageId} sm={3}>{`Target amount`}</Label>
                                                            <Col sm={9}> 
                                                                <Input type="text" name={stageId} id={stageId} disabled
                                                                    defaultValue={stage.targetAmount} className="Status"/>
                                                            </Col>
                                                        </FormGroup>
                                                    </Box>
                                                </div>
                                            )
                                        })
                                    }
                                    <FormGroup row>
                                        <Label for="location" sm={3}>Location</Label>
                                        <Col sm={9}>
                                            <Input type="location" name="location" id="location" disabled
                                                   defaultValue={ '('+ this.state.project.location.coordinates.join(',') + ')'}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="mediaUrls" sm={3}>Media URLs</Label>
                                        <Col sm={9}>
                                            <Input type="textarea" name="mediaUrls" id="mediaUrls" disabled
                                                   defaultValue={this.state.project.mediaUrls.join('\n')}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="hashtags" sm={3}>Hashtags</Label>
                                        <Col sm={9}>
                                            <Input type="textarea" name="hashtags" id="hashtags" disabled
                                                   defaultValue={this.state.project.hashtags.join('\n')}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="createdAt" sm={3}>Created at</Label>
                                        <Col sm={9}>
                                            <Input type="createdAt" name="createdAt" id="createdAt" disabled
                                                   defaultValue={this.state.project.createdAt}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="updatedAt" sm={3}>Updated at</Label>
                                        <Col sm={9}>
                                            <Input type="updatedAt" name="updatedAt" id="updatedAt" disabled
                                                   defaultValue={this.state.project.updatedAt}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <Button color={this.state.project.isBlocked == true ? "success" : "danger" } onClick={this.blockProject}> {this.state.project.isBlocked == true ? "Unblock" : "Block" } </Button>{' '}
                        </Card>
                    </Col>
                </Row>
            )
        }
    }
}

export default ProjectView;