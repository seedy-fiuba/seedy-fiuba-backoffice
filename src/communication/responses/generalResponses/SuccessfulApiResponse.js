import {Response} from "../Response.js"

export class SuccessfulApiResponse extends Response {
    static defaultResponse() {
        throw new Error("You have to implement the method");
    }

    static understandThis(response) {
        return (response.statusCode <= 300 && response.statusCode >= 200);
    }
}