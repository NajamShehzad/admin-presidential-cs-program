class AuthActions {

    static PHONE_NO_SENT = "PHONE_NO_SENT";
    static PHONE_NO_SENT_SUCCESSFUL = "PHONE_NO_SENT_SUCCESSFUL";
    static PHONE_NO_SENT_ERROR = "PHONE_NO_SENT_ERROR";

    static VERIFICATION_CODE_SENT = "VERIFICATION_CODE_SENT";
    static VERIFICATION_CODE_SENT_SUCCESSFUL = "VERIFICATION_CODE_SENT_SUCCESSFUL";
    static VERIFICATION_CODE_SENT_ERROR = "VERIFICATION_CODE_SENT_ERROR";
    
    static  phoneNoSent(data){
        return {
            type : this.PHONE_NO_SENT,
            data : data
        }
    }
    static phoneNoSentSuccessul(data){
        return {
            type : this.PHONE_NO_SENT_SUCCESSFUL,
            data: data
        }
    }
    static phoneNoSentError(data){
        return {
            type : this.PHONE_NO_SENT_ERROR,
            data: data
        }
    }

    static  verificationCodeSent(data){
        return {
            type : this.VERIFICATION_CODE_SENT,
            data : data
        }
    }
    static verificationCodeSentSuccessul(data){
        return {
            type : this.VERIFICATION_CODE_SENT_SUCCESSFUL,
            data: data
        }
    }
    static verificationCodeSentError(data){
        return {
            type : this.VERIFICATION_CODE_SENT_ERROR,
            data: data
        }
    }
}

export default AuthActions;