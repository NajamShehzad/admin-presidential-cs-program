import AuthActions from '../actions/authActions';

function authReducer(state = {
    user: null,
    isError: false,
    isLoading: false,
    errorMessage: false,
    phoneNo: null,
    token: null,
    successMessage: null,
    authToken: null
}, action) {

    switch (action.type) {

        case AuthActions.PHONE_NO_SENT:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                phoneNo: action.data.phoneNo,
                isLoading : true,
                authToken : null
            };
        case AuthActions.PHONE_NO_SENT_SUCCESSFUL:
            return {
                ...state,
                isError:false,
                isLoading : false,
                errorMessage:null,
                successMessage: action.data.successMessage,
            };
        case AuthActions.PHONE_NO_SENT_ERROR:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage:null,
                isError: true,
                isLoading : false
            };
        case AuthActions.VERIFICATION_CODE_SENT:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                token: action.data.token,
                isLoading : true,
                authToken : null
            };
        case AuthActions.VERIFICATION_CODE_SENT_SUCCESSFUL:
            return {
                ...state,
                isError: false,
                isLoading : false,
                errorMessage:null,
                successMessage: action.data.successMessage,
                authToken : action.data.authToken
            };
        case AuthActions.VERIFICATION_CODE_SENT_ERROR:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage: null,
                isError: true,
                isLoading : false
            };
        default:
            return state;
    }
}
export default authReducer;