import axios from 'axios'
import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAIL,
  CURRENCY_ADD_REQUEST,
  CURRENCY_ADD_SUCCESS,
  CURRENCY_ADD_FAIL,
  CURRENCY_DELETE_REQUEST,
  CURRENCY_DELETE_SUCCESS,
  CURRENCY_DELETE_FAIL,
} from '../constants/currencyConstants'

export const deleteCurrency = (id) => async(dispatch) => {
  try{
    dispatch({
      type: CURRENCY_DELETE_REQUEST,
    })
    const {data} = await axios.delete(
      `/api/currencies/delete/${id}`,
    )
    dispatch({
      type: CURRENCY_DELETE_SUCCESS,
      payload: data,
    })
  }catch(error){
    dispatch({
      type: CURRENCY_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const addCurrency = (user, name, code, is_basic_currency) => async (dispatch) => {
  try{
    dispatch({
      type: CURRENCY_ADD_REQUEST,
    })
    const config = {
      headers: {
        'Content-type': 'application/json',
      }
    }
    const {data} = await axios.post(
      '/api/currencies/add/',
      {'user': user, 'name': name, 'code': code, 'is_basic_currency': is_basic_currency},
      config,
    )
    dispatch({
      type: CURRENCY_ADD_SUCCESS,
      payload: data,
    })
  }catch(error){
    dispatch({
      type: CURRENCY_ADD_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const listCurrencies = () => async (dispatch) => {
  try{
    dispatch({type: CURRENCY_LIST_REQUEST})
    const {data} = await axios.get('/api/currencies/')

    dispatch({
      type: CURRENCY_LIST_SUCCESS,
      payload: data,
    })

  }catch(error){
    dispatch({
      type: CURRENCY_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}