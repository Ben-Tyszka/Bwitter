import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import createAccountReducer from './reducers/createAccountReducer'
import loginReducer from './reducers/loginReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    createAccount: createAccountReducer,
    form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store