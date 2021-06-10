import ApiClient from "../communication/client/ApiClient";
import UsersApiClient from "../communication/client/UsersApiClient";
import ProjectsApiClient from "../communication/client/ProjectsApiClient";
import FakeRequester from "../communication/requester/FakeRequester";
import RemoteRequester from "../communication/requester/RemoteRequester";
import {getSetting} from "../settings";

class App {

    constructor() {
        this._usersApiClient = undefined;
        this._projectsApiClient = undefined;
    }

    usersApiClient() {
        if (this._usersApiClient === undefined) {
            this._usersApiClient = this._setUpUsersApiClient();
        }

        return this._usersApiClient;
    }

    projectsApiClient() {
        if (this._projectsApiClient === undefined) {
            this._projectsApiClient = this._setUpProjectsApiClient();
        }

        return this._projectsApiClient;
    }

    _setUpApiClient(api) {
        const requester = this._setUpRequester(api);
        return new ApiClient(requester);
    }

    _setUpProjectsApiClient() {
        const requester = this._setUpRequester("PROJECTS");
        return new ProjectsApiClient(requester);
    }

    _setUpUsersApiClient() {
        const requester = this._setUpRequester("USERS");
        return new UsersApiClient(requester);
    }

    _setUpRequester(api) {
        const usingFakeApi = getSetting("USING_FAKE_API");
        if (usingFakeApi) {
            console.log("Using FAKE Api");
            return new FakeRequester();
        }

        const remoteApiUrl = getSetting(api + "_API_URL");
        console.log("Setting remote requester URL: " + remoteApiUrl)
        return new RemoteRequester(remoteApiUrl);
    }

    routes() {
        return {
            login: '/',
            home: '/home',
            users: '/users',
            project: '/project/:id',
            profile: '/users/:id',
            projects: '/projects'
        }
    }

    loginUser(token) {
        localStorage.setItem("token", token);
    }

    thereIsLoggedInUser() {
        return localStorage.getItem("token");
    }
}

export let app = new App();