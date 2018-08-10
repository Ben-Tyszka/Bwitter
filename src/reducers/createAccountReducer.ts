import { ACCOUNT_CREATED, AWAITING_RESPONSE, SET_ERROR_MESSAGE } from '../constants/createAccountConstants'

interface IState {
    errorMessage: string
    isAwaitingResponse: boolean
    accountCreated?: boolean
}

const initialState: IState = {
    errorMessage: '',
    isAwaitingResponse: false,
}

export default (state: IState = initialState, action: any): IState => {
    switch (action.type) {
        case ACCOUNT_CREATED:
            return { ...state, errorMessage: '', isAwaitingResponse: false, accountCreated: true }
        case AWAITING_RESPONSE:
            return { ...state, isAwaitingResponse: true }
        case SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload, isAwaitingResponse: false }
        default:
            return state
    }
}