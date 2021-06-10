import {Endpoint} from "./Endpoint.js";
import {SuccessfulApiResponse} from "../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../responses/generalResponses/ServerErrorResponse";


export class GetProjectEndpoint extends Endpoint {
    constructor(id) {
        super();

        this._id = id;
    }

    url() {
        return '/api/project/' + this._id;
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