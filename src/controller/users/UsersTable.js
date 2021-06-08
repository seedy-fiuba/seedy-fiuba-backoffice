import React, {Component} from 'react';
import {Table, Col} from "reactstrap";
import {Visibility} from "@material-ui/icons";

class UsersTable extends Component {

    constructor(props) {
        super(props);

        this.renderProfile = this.renderProfile.bind(this);
    }

    renderProfile(user) {
        console.log("On click user: " + user.id);
        this.props.history.push('/users/' + user.id);
    }

    render() {
        if (this.props.users.length === 0)
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.props.users.map((user, index) => {
                            return <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.role}</td>
                                <td><Visibility onClick={() => this.renderProfile(user)} style={{cursor: "pointer"}} /></td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default UsersTable;