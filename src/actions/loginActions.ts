import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import firebase from '../bwitterFirebase'
import { AWAITING_RESPONSE, SET_ERROR_MESSAGE } from '../constants/loginConstants'

export const login: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (email: string, password: string, stayLoggedIn: boolean) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            stayLoggedIn ?
                await firebase.auth().signInWithEmailAndPassword(email, password) :
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                    .then(() => {
                        return firebase.auth().signInWithEmailAndPassword(email, password)
                    })
        } catch (error) {
            const { message } = error
            if (message.includes('no user record')) {
                dispatch({ type: SET_ERROR_MESSAGE, payload: 'User not found' })
            } else if (message.includes('The password is invalid or the user does not have')) {
                dispatch({ type: SET_ERROR_MESSAGE, payload: 'Incorrect password' })
            } else {
                dispatch({ type: SET_ERROR_MESSAGE, payload: message })
            }
        }
    }
}

export const awaitingResponse = () => ({ type: AWAITING_RESPONSE })