import ApiClient from "./ApiClient";
import {LoginEndpoint} from "../endpoints/users/LoginEndpoint";
import {ListProjectsEndpoint} from "../endpoints/ListProjectsEndpoint";
import {GetProjectEndpoint} from "../endpoints/GetProjectEndpoint";

class ProjectsApiClient extends ApiClient {
    getProjects(data, onResponse, customHeaders) {
        return this._requester.call({
            endpoint: new ListProjectsEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data,
            headers: customHeaders
        })
    }

    getProject(id, onResponse, customHeaders) {
        console.log("consulting project with id: " + id);
        return this._requester.call({
            endpoint: new GetProjectEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            headers: customHeaders
        })
    }
}

export default ProjectsApiClient;