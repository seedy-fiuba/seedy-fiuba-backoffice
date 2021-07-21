import ApiClient from "./ApiClient";
import {LoginEndpoint} from "../endpoints/users/LoginEndpoint";
import {RegisterEndpoint} from "../endpoints/users/RegisterEndpoint";
import {ListUsersEndpoint} from "../endpoints/users/ListUsersEndpoint";
import {GetUsersEndpoint} from "../endpoints/users/GetUsersEndpoint";
import {UpdateUsersEndpoint} from "../endpoints/users/UpdateUsersEndpoint";

class UsersApiClient extends ApiClient {
    login(data, onResponse) {
        return this._requester.call({
            endpoint: new LoginEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data,
            headers: {
                "X-Admin": "true"
            }
        });
    }

    register(data, onResponse) {
        return this._requester.call({
            endpoint: new RegisterEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data,
            headers: {
                "X-Admin": "true"
            }
        });
    }

    getUsers(data, onResponse) {
        return this._requester.call({
            endpoint: new ListUsersEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data,
            headers: {
                "X-Admin": "true"
            }
        })
    }

    getUser(id, onResponse) {
        console.log("consulting user with id: " + id);
        return this._requester.call({
            endpoint: new GetUsersEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            headers: {
                "X-Admin": "true"
            }
        })
    }

    updateUser(id, newStatus, onResponse) {
        console.log("attempting to update user with id: " + id);
        return this._requester.call({
            endpoint: new UpdateUsersEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: {
                status: newStatus
            },
            headers: {
                "X-Admin": "true"
            }
        })
    }
}

export default UsersApiClient;