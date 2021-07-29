import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {app} from "../../app/app";
import ProjectsTable from "./ProjectsTable";

export class ProjectsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            page: 0,
            errorMessage: ''
        }

        this.fetchProjects = this.fetchProjects.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        console.log(response)
        if (response.hasError()) {
            this.setState({ errorMessage: response.errorMessage()});
        } else {
            this.setState({projects: response.content()})
        }
    }

    fetchProjects() {
        console.log("Fetching projects...");
        // let payload = {
        //     page: this.state.page,
        //     size: ITEMS_PER_PAGE
        // }
        app.projectsApiClient().getProjects({}, this.handleApiResponse, {'X-Override-Token': true})
    }

    componentDidMount() {
        this.fetchProjects();
    }

    render() {
        return (
            <Row>
                <Col xs={10}>
                    <ProjectsTable projects={this.state.projects}  history={this.props.history}/>
                </Col>
            </Row>
        )
    }
}

export default ProjectsList;