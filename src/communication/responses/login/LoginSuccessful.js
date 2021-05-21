import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class LoginSuccessful extends SuccessfulApiResponse {
    static defaultResponse() {
        return {
            "token": "TokenMock"
        }
    }
}