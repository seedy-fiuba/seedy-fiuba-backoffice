import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {app} from "../../app/app";
import UsersTable from "./UsersTable";

const ITEMS_PER_PAGE = 10;

export class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            page: 0,
            errorMessage: ''
        }

        this.fetchUsers = this.fetchUsers.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({ errorMessage: response.errorMessage()});
        } else {
            this.setState({users: response.content().users})
        }
    }

    fetchUsers() {
        console.log("Fetching users...");
        let payload = {
            page: this.state.page,
            size: ITEMS_PER_PAGE
        }
        app.usersApiClient().getUsers(payload, this.handleApiResponse)
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <Row>
                <Col xs={10}>
                    <UsersTable users={this.state.users}
                                history={this.props.history}
                    />
                </Col>
            </Row>
        )
    }
}

export default UsersList;