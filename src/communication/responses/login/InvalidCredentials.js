import {ErrorApiResponse} from "../generalResponses/ErrorApiResponse";

export class InvalidCredentials extends ErrorApiResponse {
    static defaultResponse() {
        return {
            "error": "Missing password"
        }
    }

    static understandThis(response) {
        return response.status === 401;
    }
}