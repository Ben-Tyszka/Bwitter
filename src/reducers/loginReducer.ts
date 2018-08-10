import { AWAITING_RESPONSE, SET_ERROR_MESSAGE } from '../constants/loginConstants'

interface Istate {
    errorMessage: string
    isAwaitingResponse: boolean
}

const initialState: Istate = {
    errorMessage: '',
    isAwaitingResponse: false,
}

export default (state: Istate = initialState, action: any) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload, isAwaitingResponse: false }
        case AWAITING_RESPONSE:
            return { ...state, isAwaitingResponse: true }
        default:
            return state
    }
}