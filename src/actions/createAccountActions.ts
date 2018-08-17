import randomColor from 'randomcolor'
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
            return dispatch({ type: SET_ERROR_MESSAGE, payload: message })
        }
        try {
            const { currentUser } = firebase.auth()
            if (currentUser !== null) {
                await firebase.firestore().collection('profiles').doc(currentUser.uid).set({
                    username: `${username}`,
                    firstName: `${firstName}`,
                    lastName: `${lastName}`,
                    bio: '',
                    profileColor: randomColor()
                })
            }
        } catch (error) {
            const { message } = error
            return dispatch({ type: SET_ERROR_MESSAGE, payload: message })
        }
        return dispatch({ type: ACCOUNT_CREATED })
    }
}

export const awaitingResponse = () => ({ type: AWAITING_RESPONSE })