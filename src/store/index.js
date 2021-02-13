import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import WeatherReducer from "../reducers/weatherReducer";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState= {
    weather:{
    
    }
}

const bigReducer = combineReducers({weather:WeatherReducer})
export default function configureStore() {
    return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
}