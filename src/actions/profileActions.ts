import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import firebase from '../bwitterFirebase'
import { PROFILE_ERROR, PROFILE_SUCCESS, RESET, SET_BIO, SET_FIRSTNAME, SET_LASTNAME, SET_PROFILE_COLOR, SET_USERNAME } from '../constants/profileConstants'

export const setUsername: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (bwitterUsername: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const { currentUser } = firebase.auth()
            if (currentUser === null) return
            await firebase.firestore().collection('profiles').doc(currentUser.uid).update({ username: bwitterUsername })
        } catch (error) {
            return dispatch({ type: PROFILE_ERROR, payload: 'Erorr updating profile' })
        }
        return dispatch({ type: PROFILE_SUCCESS })
    }
}

export const setFirstName: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (bwitterFirstName: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const { currentUser } = firebase.auth()
            if (currentUser === null) return
            await firebase.firestore().collection('profiles').doc(currentUser.uid).update({ firstName: bwitterFirstName })
        } catch (error) {
            return dispatch({ type: PROFILE_ERROR, payload: true })
        }
        return dispatch({ type: PROFILE_SUCCESS })
    }
}

export const setLastName: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (bwitterLastName: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const { currentUser } = firebase.auth()
            if (currentUser === null) return
            await firebase.firestore().collection('profiles').doc(currentUser.uid).update({ lastName: bwitterLastName })
        } catch (error) {
            return dispatch({ type: PROFILE_ERROR, payload: true })
        }
        return dispatch({ type: PROFILE_SUCCESS })
    }
}

export const setBio: ActionCreator<ThunkAction<Promise<Action>, any, void, any>> = (bwitterBio: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
        try {
            const { currentUser } = firebase.auth()
            if (currentUser === null) return
            await firebase.firestore().collection('profiles').doc(currentUser.uid).update({ bio: bwitterBio })
        } catch (error) {
            return dispatch({ type: PROFILE_ERROR, payload: true })
        }
        return dispatch({ type: PROFILE_SUCCESS })
    }
}

export const localSetFirstName = (firstName: string) => ({ type: SET_FIRSTNAME, payload: firstName })
export const localSetLastName = (lastName: string) => ({ type: SET_LASTNAME, payload: lastName })
export const localSetUsername = (username: string) => ({ type: SET_USERNAME, payload: username })
export const setProfileColor = (color: string) => ({ type: SET_PROFILE_COLOR, payload: color })
export const localSetBio = (bio: string) => ({ type: SET_BIO, payload: bio })
export const reset = () => ({ type: RESET })