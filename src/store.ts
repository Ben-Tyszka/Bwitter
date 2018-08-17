import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { DELETED_ACCOUNT, LOGOUT } from './constants/accountConstants'
import accountReducer from './reducers/accountReducer'
import createAccountReducer from './reducers/createAccountReducer'
import loginReducer from './reducers/loginReducer'
import profileReducer from './reducers/profileReducer'

const appReducer = combineReducers({
    login: loginReducer,
    createAccount: createAccountReducer,
    profile: profileReducer,
    form: formReducer,
    account: accountReducer,
})

const rootReducer = (state: any, action: any) => {
    if (action.type === DELETED_ACCOUNT || action.type === LOGOUT) {
        state = undefined
    }
    return appReducer(state, action)
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store