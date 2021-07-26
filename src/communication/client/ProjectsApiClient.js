import ApiClient from "./ApiClient";
import {LoginEndpoint} from "../endpoints/users/LoginEndpoint";
import {ListProjectsEndpoint} from "../endpoints/projects/ListProjectsEndpoint";
import {GetProjectEndpoint} from "../endpoints/projects/GetProjectEndpoint";
import {UpdateProjectEndpoint} from "../endpoints/projects/UpdateProjectEndpoint";

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

    updateProject(id, newStatus, onResponse) {
        console.log("attempting to update project with id: " + id);
        return this._requester.call({
            endpoint: new UpdateProjectEndpoint(id),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: {
                status: newStatus
            },
            headers: {
                "X-Admin": "true",
                'X-Override-Token': "true"
            }
        })
    }
}

export default ProjectsApiClient;