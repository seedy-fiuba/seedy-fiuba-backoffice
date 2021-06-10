import {ServerErrorResponse} from "../responses/generalResponses/ServerErrorResponse.js";
import {LoginEndpoint} from "../endpoints/LoginEndpoint";
import {ListUsersEndpoint} from "../endpoints/ListUsersEndpoint";
import {ListProjectsEndpoint} from "../endpoints/ListProjectsEndpoint";


class ApiClient {
    constructor(requester, onServerErrorDo = () => {
    }) {
        this._requester = requester;
        this._handleServerError = onServerErrorDo;
        this._handleResponse = this._handleResponse.bind(this);
    }

    _handleResponse(response, onResponse) {
        if (response instanceof ServerErrorResponse) {
            console.log("Server error: ", response);
            return this._handleServerError(response);
        }

        return onResponse(response);
    }

    login(data, onResponse) {
        return this._requester.call({
            endpoint: new LoginEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data
        });
    }

    getUsers(data, onResponse) {
        return this._requester.call({
            endpoint: new ListUsersEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data
        })
    }

    getProjects(data, onResponse, customHeaders) {
        return this._requester.call({
            endpoint: new ListProjectsEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data,
            headers: customHeaders
        })
    }
}

export default ApiClient;