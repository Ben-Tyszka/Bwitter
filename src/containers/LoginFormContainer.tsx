import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { awaitingResponse, login } from '../actions/loginActions'
import LoginForm from '../presentational/LoginForm'
import { validateEmail, validatePassword } from '../utils/validators'

interface IState {
    emailOk: boolean
    passwordOk: boolean
    staySignedIn: boolean
    submitButtonEnabled: boolean

    emailValue: string
    passwordValue: string
}

interface IProps {
    bwitterLogin: (email: string, password: string, stayLoggedIn: boolean) => (dispatch: Dispatch) => void
    bwitterAwaitingResponse: () => (dispatch: Dispatch) => void
    errorMessage: string
    isAwaitingResponse: boolean
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterAwaitingResponse: awaitingResponse,
    bwitterLogin: login,
}, dispatch)

const mapStateToProps = (state: any) => ({
    errorMessage: state.login.errorMessage,
    isAwaitingResponse: state.login.isAwaitingResponse,
})

class LoginFormContainer extends React.Component<IProps> {
    state: IState = {
        emailOk: true,
        passwordOk: true,
        staySignedIn: false,
        submitButtonEnabled: false,
        
        emailValue: '',
        passwordValue: '',
    }
    constructor(props: any) {
        super(props)

        this.handleUsernameOrEmailChange = this.handleUsernameOrEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleStaySignedInChange = this.handleStaySignedInChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleUsernameOrEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.currentTarget
        let emailValid: boolean = true
        let shouldEnableSubmitButton: boolean = false

        if (!validateEmail(value)) {
            emailValid = false
        }
        if (emailValid && validatePassword(this.state.passwordValue)) {
            shouldEnableSubmitButton = true
        }
        this.setState({
            emailOk: emailValid,
            emailValue: value,
            submitButtonEnabled: shouldEnableSubmitButton,
        })
    }
    handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.currentTarget
        let passwordValid: boolean = true
        let shouldEnableSubmitButton: boolean = false

        if (!validatePassword(value)) {
            passwordValid = false
        }
        if (passwordValid && validateEmail(this.state.emailValue)) {
            shouldEnableSubmitButton = true
        }
        this.setState({
            passwordOk: passwordValid,
            passwordValue: value,
            submitButtonEnabled: shouldEnableSubmitButton,
        })
    }
    handleStaySignedInChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            staySignedIn: event.currentTarget.checked,
        })
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (this.props.isAwaitingResponse) { return }
        this.props.bwitterAwaitingResponse()
        const { emailValue, passwordValue, staySignedIn } = this.state
        if (validateEmail(emailValue) && validatePassword(passwordValue)) {
            this.props.bwitterLogin(emailValue, passwordValue, staySignedIn)
        }
    }
    render() {
        return (
            <LoginForm
                submitOnClick={this.handleSubmit}
                passwordOnChange={this.handlePasswordChange}
                emailOnChange={this.handleUsernameOrEmailChange}
                staySignedInOnChange={this.handleStaySignedInChange}
                errorMessage={this.props.errorMessage}
                emailOk={this.state.emailOk}
                passwordOk={this.state.passwordOk}
                submitButtonEnabled={this.state.submitButtonEnabled}
                shouldShowLoadingComponent={this.props.isAwaitingResponse} />

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)