import {
    EMAIL_SENT_REQUEST,
    EMAIL_SENT_SUCCESS,
    EMAIL_SENT_FAIL,
} from '../constants/emailConstants'

export const emailReducer = (state = {email: '', message: ''}, action) => {
    switch(action.type){
        case EMAIL_SENT_REQUEST:
            return {loading:true, email: '', message: ''}
        case EMAIL_SENT_SUCCESS:
            return {loading:false, email: action.payload}
        case EMAIL_SENT_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}
