import {Endpoint} from "../Endpoint.js";
import {SuccessfulApiResponse} from "../../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../../responses/generalResponses/ServerErrorResponse";

export class RegisterEndpoint extends Endpoint {
    static url() {
        return '/users'
    }

    ownResponses() {
        return [SuccessfulApiResponse, ServerErrorResponse];;
    }

    method() {
        return 'POST'
    }

    needsAuthorization() {
        return false;
    }
}