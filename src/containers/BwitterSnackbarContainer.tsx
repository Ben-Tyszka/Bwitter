import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { reset } from '../actions/profileActions'
import BwitterSnackbar from '../presentational/BwitterSnackbar'

interface IProps {
    showErrorSnackbar: boolean
    showSuccessSnackbar: boolean
    bwitterReset: () => void
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterReset: reset,
}, dispatch)

const mapStateToProps = (state: any) => ({
    showErrorSnackbar: state.profile.error,
    showSuccessSnackbar: state.profile.ok
})

class BwitterSnackbarContainer extends React.Component<IProps> {
    render() {
        const { showErrorSnackbar, showSuccessSnackbar, bwitterReset } = this.props
        return <BwitterSnackbar message={showErrorSnackbar ? 'Error saving profile' : 'Saved profile'} open={showErrorSnackbar || showSuccessSnackbar} onClose={bwitterReset} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BwitterSnackbarContainer)