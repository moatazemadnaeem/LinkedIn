import {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import {userReducer} from './user/userReducer'

export const store=createStore(userReducer,composeWithDevTools(applyMiddleware(logger)))