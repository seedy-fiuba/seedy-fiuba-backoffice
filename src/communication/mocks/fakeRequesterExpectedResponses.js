import {LoginEndpoint} from "../endpoints/users/LoginEndpoint";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";

const fakeRequesterExpectedResponses = () => {
    return {
        [LoginEndpoint.name]: LoginSuccessful,
    }
};

export default fakeRequesterExpectedResponses;