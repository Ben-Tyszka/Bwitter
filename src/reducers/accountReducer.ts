import { DELETE_ACCOUNT_ERROR, DELETE_WORKING, DELETED_ACCOUNT } from '../constants/accountConstants'

interface IState {
    deleteMessage: string
    working: boolean
}

const initialState: IState = {
    deleteMessage: '',
    working: false

}

export default (state: IState = initialState, action: any): IState => {
    switch (action.type) {
        case DELETE_ACCOUNT_ERROR:
            return { ...state, deleteMessage: action.payload, working: false }
        case DELETED_ACCOUNT:
            return { ...state, deleteMessage: '', working: false }
        case DELETE_WORKING:
            return { ...state, working: true }
        default:
            return state
    }
}