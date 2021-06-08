import ApiClient from "./ApiClient";
import {LoginEndpoint} from "../endpoints/users/LoginEndpoint";
import {ListUsersEndpoint} from "../endpoints/users/ListUsersEndpoint";
import {GetUsersEndpoint} from "../endpoints/users/GetUsersEndpoint";

class UsersApiClient extends ApiClient {
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

    getUser(id, onResponse) {
        console.log("consulting user with id: " + id);
        return this._requester.call({
            endpoint: new GetUsersEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse)
        })
    }
}

export default UsersApiClient;