import {Response} from "../Response.js"

export class ErrorApiResponse extends Response {
    static defaultResponse() {
        throw new Error("You have to implement the method");
    }

    static errorCodes() {
        throw new Error("You have to implement the method");
    }

    static understandThis(response) {
        return response.error !== undefined && this.errorCodes().includes(response.error);
    }

    errorMessages() {
        return this.errors();
    }

    hasError() {
        return true;
    }

    description() {
        return "¡Ha ocurrido un error!"
    }

    message() {
        return this.errorMessages();
    }
}