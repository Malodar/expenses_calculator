import axios from 'axios'
import {
  EMAIL_SENT_REQUEST,
  EMAIL_SENT_SUCCESS,
  EMAIL_SENT_FAIL,
} from '../constants/emailConstants'
import apiKeys from '../emailJSapikeys '


export const sendEmail = (payload) => async (dispatch) => {
  const sendingParams = {
    service_id: apiKeys.SERVICE_ID,
    template_id: apiKeys.TEMPLATE_ID,
    user_id: apiKeys.USER_ID,
    template_params: {email: payload.email, message: payload.message},
  }

  try{
    dispatch({type: EMAIL_SENT_REQUEST})
    const headers = { 
        'content-type': 'application/json'
    };
    const {data} = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send', 
      JSON.stringify(sendingParams),
      { headers }
      )

    dispatch({
      type: EMAIL_SENT_SUCCESS,
      payload: data,
    })
  }catch(error){
    dispatch({
      type: EMAIL_SENT_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

