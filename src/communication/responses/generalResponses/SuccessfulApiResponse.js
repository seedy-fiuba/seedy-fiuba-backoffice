import {Response} from "../Response.js"

export class SuccessfulApiResponse extends Response {
    static defaultResponse() {
        throw new Error("You have to implement the method");
    }

    static understandThis(jsonResponse) {
        return (jsonResponse.status <= 300 && jsonResponse.status >= 200);
    }
}