import ApiClient from "./ApiClient";
import {ListServersEndpoint} from "../endpoints/middle/ListServersEndpoint";
import {GetServerEndpoint} from "../endpoints/middle/GetServerEndpoint";
import {app} from "../../app/app";
import {UpdateServerEndpoint} from "../endpoints/middle/UpdateServerEndpoint";


class MiddleApiClient extends ApiClient {
    getServers(onResponse) {
        return this._requester.call({
            endpoint: new ListServersEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            headers: {
                'X-Auth-Token': app.getToken()
            }
        })
    }

    getServer(id, onResponse) {
        return this._requester.call({
            endpoint: new GetServerEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            headers: {
                'X-Auth-Token': app.getToken()
            }
        })
    }

    updateServer(id, data, onResponse) {
        return this._requester.call({
            endpoint: new UpdateServerEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: {
                url: data.url
            },
            headers: {
                'X-Auth-Token': app.getToken()
            }
        })
    }
}

export default MiddleApiClient;