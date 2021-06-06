import React, {Component} from 'react';
import {Table} from "reactstrap";

class UsersTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.users.length === 0)
            return <div className="spinner-grow text-success" role="status">
                    </div>
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody>

                {
                    this.props.users.map((user) => {
                        return <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.updatedAt}</td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default UsersTable;