import {Endpoint} from "../Endpoint";
import {SuccessfulApiResponse} from "../../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../../responses/generalResponses/ServerErrorResponse";


export class GetServerEndpoint extends Endpoint {
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
        return 'GET'
    }

    needsAuthorization() {
        return false; //TODO: Validar autorizaciones
    }
}