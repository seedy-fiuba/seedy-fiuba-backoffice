import {Endpoint} from "./Endpoint.js";
import {SuccessfulApiResponse} from "../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../responses/generalResponses/ServerErrorResponse";

export class ListProjectsEndpoint extends Endpoint {
    static url() {
        return '/api/project'
    }

    ownResponses() {
        return [SuccessfulApiResponse, ServerErrorResponse];
    }

    method() {
        return 'GET'
    }

    needsAuthorization() {
        return false; //TODO: Validar autorizaciones
    }
}