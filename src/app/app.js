import ApiClient from "../communication/client/ApiClient";
import FakeRequester from "../communication/requester/FakeRequester";
import RemoteRequester from "../communication/requester/RemoteRequester";
import {getSetting} from "../settings";

class App {

    constructor() {
        this._usersApiClient = undefined;
    }

    usersApiClient() {
        if (this._usersApiClient === undefined) {
            this._usersApiClient = this._setUpApiClient("USERS");
        }

        return this._usersApiClient;
    }

    _setUpApiClient(api) {
        const requester = this._setUpRequester(api);
        return new ApiClient(requester);
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