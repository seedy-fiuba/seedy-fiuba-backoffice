import {Endpoint} from "../Endpoint.js";
import {SuccessfulApiResponse} from "../../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../../responses/generalResponses/ServerErrorResponse";


export class UpdateServerEndpoint extends Endpoint {
    constructor(id) {
        super();

        this._id = id;
    }

    url() {
        return '/servers/' + this._id;
    }

    ownResponses() {
        return [SuccessfulApiResponse, ServerErrorResponse];
    }

    method() {
        return 'PUT'
    }

    needsAuthorization() {
        return false; //TODO: Validar autorizaciones
    }
}