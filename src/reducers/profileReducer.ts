import { PROFILE_ERROR, PROFILE_SUCCESS, RESET, SET_BIO, SET_FIRSTNAME, SET_LASTNAME, SET_PROFILE_COLOR, SET_USERNAME } from '../constants/profileConstants'

interface IState {
    username: string
    firstName: string
    lastName: string
    bio: string
    color: string
    error: boolean
    ok: boolean
}

const initialState: IState = {
    username: '',
    firstName: '',
    lastName: '',
    bio: '',
    color: '#fff',
    error: false,
    ok: false,

}

export default (state: IState = initialState, action: any): IState => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload }
        case SET_FIRSTNAME:
            return { ...state, firstName: action.payload }
        case SET_LASTNAME:
            return { ...state, lastName: action.payload }
        case PROFILE_ERROR:
            return { ...state, error: true, ok: false }
        case PROFILE_SUCCESS:
            return { ...state, error: false, ok: true }
        case RESET:
            return { ...state, error: false, ok: false }
        case SET_PROFILE_COLOR:
            return { ...state, color: action.payload }
        case SET_BIO:
            return { ...state, bio: action.payload }
        default:
            return state
    }
}