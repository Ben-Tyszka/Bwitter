import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import firebase from '../bwitterFirebase'
import { DELETE_ACCOUNT_ERROR, DELETE_WORKING, DELETED_ACCOUNT, LOGOUT } from '../constants/accountConstants'

export const deleteAccount: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = () => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const { currentUser } = firebase.auth()
            if (currentUser !== null) {
                await firebase.firestore().collection('profiles').doc(currentUser.uid).delete()
            }
        } catch (error) {
            const { message } = error
            return dispatch({ type: DELETE_ACCOUNT_ERROR, payload: message })
        }
        try {
            const { currentUser } = firebase.auth()
            if (currentUser !== null) {
                await currentUser.delete()
            }
        } catch (error) {
            const { message } = error
            return dispatch({ type: DELETE_ACCOUNT_ERROR, payload: message })
        }
        return dispatch({ type: DELETED_ACCOUNT })
    }
}

export const working = () => ({ type: DELETE_WORKING })
export const logout: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = () => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            await firebase.auth().signOut()
        } catch (error) {
            console.error(error)
            return
        }
        return dispatch({ type: LOGOUT })
    }
}