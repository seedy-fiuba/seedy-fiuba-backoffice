import {Endpoint} from "../Endpoint.js";
import {SuccessfulApiResponse} from "../../responses/generalResponses/SuccessfulApiResponse";
import {ServerErrorResponse} from "../../responses/generalResponses/ServerErrorResponse";

export class ListServersEndpoint extends Endpoint {
    static url() {
        return '/servers'
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

export default ListServersEndpoint;