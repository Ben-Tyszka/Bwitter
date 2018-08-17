import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { logout } from '../actions/accountActions'
import BwitterAppBarAndDrawer from '../presentational/BwitterAppBarAndDrawer'

interface IState {
    open: boolean
}

interface IProps {
    firstName: string
    lastName: string
    username: string
    bwitterLogout: () => void
}

const mapStateToProps = (state: any) => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    username: state.profile.username,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterLogout: logout,
}, dispatch)

class BwitterAppBarAndDrawerContainer extends React.Component<IProps, IState> {
    state: IState = {
        open: false
    }
    toggle = () => {
        const { open } = this.state
        this.setState({
            open: !open
        })
    }
    render() {
        const { open } = this.state
        const { firstName, lastName, username, bwitterLogout } = this.props
        return <BwitterAppBarAndDrawer
            open={open}
            toggle={this.toggle}
            logout={bwitterLogout}
            firstName={firstName}
            lastName={lastName}
            username={username} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BwitterAppBarAndDrawerContainer)