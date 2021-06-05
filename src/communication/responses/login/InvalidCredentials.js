import {ErrorApiResponse} from "../generalResponses/ErrorApiResponse";

export class InvalidCredentials extends ErrorApiResponse {
    static defaultResponse() {
        return {
            "error": "Missing password"
        }
    }

    static understandThis(jsonResponse) {
        return jsonResponse.status === 401;
    }
}