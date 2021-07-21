class HTTPResponse {
    constructor(response) {
        this._response = response;
    }

    httpStatusCode() {
        return this._response.statusCode;
    }
}


export class ServerErrorResponse extends HTTPResponse {
    static defaultResponse() {
        return {
            statusCode: 500
        }
    }

    static understandThis(response) {
        return response.statusCode >= 400;
    }

    errorMessages() {
        return this._response.message;
    }

    hasError() {
        return true;
    }

    content() {
        return "Server error code: " + this.httpStatusCode()
    }

    errors() {
        return ["Ocurrió un error. Por favor intentalo de nuevo más tarde"];
    }
}
