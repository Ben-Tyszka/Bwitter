import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import firebase from '../bwitterFirebase'
import { ACCOUNT_CREATED, AWAITING_RESPONSE, SET_ERROR_MESSAGE } from '../constants/createAccountConstants'

export const createAccount: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (email: string, username: string, firstName: string, lastName: string, password: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            const { message } = error
            dispatch({ type: SET_ERROR_MESSAGE, payload: message })
        }
        dispatch({ type: ACCOUNT_CREATED })
    }
}

export const awaitingResponse = () => ({ type: AWAITING_RESPONSE })