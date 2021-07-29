import React, {Component} from 'react';
import {Table, Col} from "reactstrap";
import {Visibility} from "@material-ui/icons";

class ServersTable extends Component {
    constructor(props) {
        super(props);

        this.renderServerView = this.renderServerView.bind(this);
        this.formatName = this.formatName.bind(this);
    }

    renderServerView(server) {
        console.log("On click server: " + server.name);
        this.props.history.push('/servers/' + server._id);
    }

    formatName(name) {
        return name.toLowerCase().replace('-', ' ')
    }

    render() {
        if (this.props.servers.length === 0)
            return (
                <Col className="text-center">
                    <span className="spinner-grow text-success" role="status"/>
                </Col>
            )
        return (
            <Col>
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.servers.map((server, index) => {
                            return <tr key={index}>
                                <th scope="row">{server._id}</th>
                                <td className="text-capitalize">{this.formatName(server.name)}</td>
                                <td className={`text-capitalize ${(server.status === 'active') ? "text-success" : "text-danger"}`}>{server.status}</td>
                                <td><Visibility onClick={() => this.renderServerView(server)} style={{cursor: "pointer"}} /></td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </Col>
        )
    }
}

export default ServersTable;