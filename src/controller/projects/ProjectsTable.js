import React, {Component} from 'react';
import {Table} from "reactstrap";

class ProjectsTable extends Component {

    constructor(props) {
        super(props);
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
                        </tr>
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default ProjectsTable;