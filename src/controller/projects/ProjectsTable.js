import React, {Component} from 'react';
import {Table} from "reactstrap";
import {Visibility} from "@material-ui/icons";

class ProjectsTable extends Component {

    constructor(props) {
        super(props);
        this.renderProject = this.renderProject.bind(this);
    }

    renderProject(project) {
        console.log("On click project: " + project._id);
        this.props.history.push('/project/' + project._id);
    }

    render() {
        if (this.props.projects.length === 0)
            return <div className="spinner-grow text-success" role="status">
                    </div>
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody>

                {
                    this.props.projects.map((project) => {
                        return <tr>
                            <th scope="row">{project._id}</th>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>{project.category}</td>
                            <td>{project.status}</td>
                            <td>{project.createdAt}</td>
                            <td>{project.updatedAt}</td>
                            <td><Visibility onClick={() => this.renderProject(project)} style={{cursor: "pointer"}} /></td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default ProjectsTable;