import {
    CURRENCY_LIST_REQUEST,
    CURRENCY_LIST_SUCCESS,
    CURRENCY_LIST_FAIL,
} from '../constants/currencyConstants'

export const currencyListReducer = (state = {currencies:[]}, action) => {
    switch(action.type){
        case CURRENCY_LIST_REQUEST:
            return {loading:true, currencies: []}
        case CURRENCY_LIST_SUCCESS:
            return {loading:false, currencies: action.payload}
        case CURRENCY_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}