import AuthActions from '../actions/authActions';
import axios from 'axios';
import Path from '../../config/path';

class AuthMiddleware {

    static sendPhoneNo(data) {
        return dispatch => {
            dispatch(AuthActions.phoneNoSent(data))
            axios.post(`${Path.SEND_PHONE_NO}`, {
                phone: data.phoneNo
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(AuthActions.phoneNoSentError({errorMessage:response.data.message}));
                }
                else {
                    dispatch(AuthActions.phoneNoSentSuccessul({successMessage:response.data.message}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(AuthActions.phoneNoSentError({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }

    static verifyCode(data) {
        return dispatch => {
            dispatch(AuthActions.verificationCodeSent(data))
            axios.post(`${Path.VERIFY_CODE}`, {
                phone: data.phoneNo,
                token: data.token
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(AuthActions.verificationCodeSentError({errorMessage:response.data.message}));
                }
                else {
                    dispatch(AuthActions.verificationCodeSentSuccessul({successMessage:response.data.message,authToken:response.data.authToken}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(AuthActions.verificationCodeSentError({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }
}

export default AuthMiddleware;