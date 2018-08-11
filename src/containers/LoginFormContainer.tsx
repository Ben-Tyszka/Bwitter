import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { awaitingResponse, login } from '../actions/loginActions'
import LoginForm from '../presentational/LoginForm'
import { validateEmail, validatePassword } from '../utils/validators'

interface ICreateAccountFormValues {
    email: string
    password: string
    stayLoggedIn: boolean
}

interface IProps {
    bwitterLogin: (email: string, password: string, stayLoggedIn: boolean) => (dispatch: Dispatch) => void
    bwitterAwaitingResponse: () => (dispatch: Dispatch) => void
    errorMessage: string
    isAwaitingResponse: boolean
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterLogin: login,
    bwitterAwaitingResponse: awaitingResponse,
}, dispatch)

const mapStateToProps = (state: any) => ({
    errorMessage: state.login.errorMessage,
    isAwaitingResponse: state.login.isAwaitingResponse,
})

class LoginFormContainer extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
    }
    submit = (values: ICreateAccountFormValues) => {
        if (this.props.isAwaitingResponse) { return }
        this.props.bwitterAwaitingResponse()
        this.props.bwitterLogin(values.email, values.password, values.stayLoggedIn)
    }
    validate = (values: ICreateAccountFormValues) => {
        const { email, password } = values
        const errorList = {
            email: '',
            password: '',
        }
        if (!validateEmail(email)) {
            errorList.email = 'Invalid email'
        }
        if (!validatePassword(password)) {
            errorList.password = 'Invalid password'
        }
        return errorList
    }
    render() {
        return <LoginForm
            onSubmit={this.submit}
            validate={this.validate}
            errorMessage={this.props.errorMessage}
            isSubmitAwaiting={this.props.isAwaitingResponse}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)