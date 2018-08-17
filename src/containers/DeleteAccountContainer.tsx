import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { deleteAccount, working } from '../actions/accountActions'
import DeleteAccount from '../presentational/DeleteAccount'

interface IState {
    open: boolean
}

interface IProps {
    bwitterDelete: () => (dispatch: Dispatch) => void
    bwitterAwaitingResponse: () => (dispatch: Dispatch) => void
    errorMessage: string
    isAwaitingResponse: boolean
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterDelete: deleteAccount,
    bwitterDeleteWorking: working,
}, dispatch)

const mapStateToProps = (state: any) => ({
    errorMessage: state.account.deleteMessage,
    working: state.account.working,
})

class BwitterSnackbarContainer extends React.Component<IProps, IState> {
    state: IState = {
        open: false,
    }
    constructor(props: any) {
        super(props)
    }
    no = () => {
        this.setState({
            open: false
        })
    }
    onDeleteButtonClicked = () => {
        this.setState({
            open: true
        })
    }
    render() {
        const { open } = this.state
        const { errorMessage, isAwaitingResponse, bwitterDelete } = this.props
        return <DeleteAccount
            yes={bwitterDelete}
            no={this.no}
            onClickDeleteButton={this.onDeleteButtonClicked}
            open={open}
            errorMessage={errorMessage}
            working={isAwaitingResponse} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BwitterSnackbarContainer)