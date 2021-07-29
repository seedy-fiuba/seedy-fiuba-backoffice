import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {app} from "../../app/app";
import ServersTable from "./ServersTable";


export class ServersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            servers: [],
            errorMessage: ''
        }

        this.fetchServers = this.fetchServers.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        if (response.hasError()) {
            this.setState({ errorMessage: response.errorMessage()});
        } else {
            this.setState({servers: response.content()})
        }
    }

    fetchServers() {
        console.log("Fetching servers...");
        app.middleApiClient().getServers(this.handleApiResponse)
    }

    componentDidMount() {
        this.fetchServers();
    }

    render() {
        return (
            <Row>
                <Col xs={10}>
                    <ServersTable servers={this.state.servers}
                                history={this.props.history}
                    />
                </Col>
            </Row>
        )
    }
}

export default ServersList;