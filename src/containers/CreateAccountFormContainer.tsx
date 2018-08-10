import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { awaitingResponse, createAccount } from '../actions/createAccountActions'
import CreateAccountForm from '../presentational/CreateAccountForm'
import { validateEmail, validateName, validatePassword, validateUsername } from '../utils/validators'

interface ICreateAccountFormValues {
    email: string
    username: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
}

interface IProps {
    bwitterCreateAccount: (email: string, username: string, firstName: string, lastName: string, password: string) => (dispatch: Dispatch) => void
    bwitterAwaitingResponse: () => (dispatch: Dispatch) => void
    errorMessage: string
    isAwaitingResponse: boolean
    accountCreated: boolean
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterCreateAccount: createAccount,
    bwitterAwaitingResponse: awaitingResponse,
}, dispatch)

const mapStateToProps = (state: any) => ({
    errorMessage: state.createAccount.errorMessage,
    isAwaitingResponse: state.createAccount.isAwaitingResponse,
    accountCreated: state.login.accountCreated,
})

class CreateAccountFormContainer extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
    }
    submit = (values: ICreateAccountFormValues) => {
        if (this.props.isAwaitingResponse) { return }
        this.props.bwitterAwaitingResponse()
        this.props.bwitterCreateAccount(values.email, values.username, values.firstName, values.lastName, values.password)
    }
    validate = (values: ICreateAccountFormValues) => {
        const { email, username, firstName, lastName, password, confirmPassword } = values
        const errorList: ICreateAccountFormValues = {
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
        }
        if (!validateEmail(email)) {
            errorList.email = 'Invalid email'
        }
        if (!validateUsername(username)) {
            errorList.username = 'Invalid username'
        }
        if (!validateName(firstName)) {
            errorList.firstName = 'Invalid name'
        }
        if (!validateName(lastName)) {
            errorList.lastName = 'Invalid name'
        }
        if (!validatePassword(password)) {
            errorList.password = 'Invalid password'
        }
        if (password !== confirmPassword) {
            errorList.confirmPassword = 'Passwords do not match!'
        }
        return errorList
    }
    render() {
        return <CreateAccountForm
            onSubmit={this.submit}
            validate={this.validate}
            errorMessage={this.props.errorMessage}
            isSubmitAwaiting={this.props.isAwaitingResponse}
            accountCreated={this.props.accountCreated}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountFormContainer)