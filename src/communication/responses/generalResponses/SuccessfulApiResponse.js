import {Response} from "../Response.js"

export class SuccessfulApiResponse extends Response {
    static defaultResponse() {
        throw new Error("You have to implement the method");
    }

    static understandThis(response) {
        return (response.status <= 300 && response.status >= 200);
    }
}