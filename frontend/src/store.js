import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  currencyListReducer,
} from './reducers/currencyReducers'
import { 
  emailReducer,
} from './reducers/emailReducers'

const reducer = combineReducers({
  currencyList: currencyListReducer,
  email: emailReducer,
})



const initialState = {
  // cart: {cartItems: cartItemsFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, initialState, 
  composeWithDevTools(applyMiddleware(...middleware)))

export default store