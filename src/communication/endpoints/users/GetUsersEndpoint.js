import {Endpoint} from "../Endpoint";
import {SuccessfulApiResponse} from "../../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../../responses/generalResponses/ServerErrorResponse";


export class GetUsersEndpoint extends Endpoint {
    constructor(id) {
        super();

        this._id = id;
    }

    url() {
        return '/users/' + this._id;
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