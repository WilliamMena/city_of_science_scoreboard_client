import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from "./reducers/sessionReducer.js"
import sessionFormData from './reducers/sessionFormData.js'

const reducers = combineReducers({
  sessions: sessionReducer,
  sessionFormData
})
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware));
