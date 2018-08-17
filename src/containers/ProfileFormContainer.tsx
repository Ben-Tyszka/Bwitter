import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { setBio, setFirstName, setLastName, setUsername } from '../actions/profileActions'
import ProfileForm from '../presentational/ProfileForm'
import { validateName, validateUsername } from '../utils/validators'

interface IProfileFormValues {
    username: string
    bio: string
    firstName: string
    lastName: string
}

interface IProps {
    bwitterSetFirstName: (firstName: string) => (dispatch: Dispatch) => void
    bwitterSetLastName: (lastName: string) => (dispatch: Dispatch) => void
    bwitterSetUsername: (username: string) => (dispatch: Dispatch) => void
    bwitterSetBio: (bio: string) => (dispatch: Dispatch) => void
    initialValues: any,
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterSetFirstName: setFirstName,
    bwitterSetLastName: setLastName,
    bwitterSetUsername: setUsername,
    bwitterSetBio: setBio,
}, dispatch)

const mapStateToProps = (state: any) => ({
    initialValues: state.profile,
})

class ProfileFormContainer extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
    }
    submit = (values: IProfileFormValues) => {
        const { bwitterSetFirstName, bwitterSetLastName, bwitterSetUsername, bwitterSetBio, initialValues } = this.props
        if (initialValues.firstName !== values.firstName) {
            bwitterSetFirstName(values.firstName)
        }
        if (initialValues.lastName !== values.lastName) {
            bwitterSetLastName(values.lastName)
        }
        if (initialValues.username !== values.username) {
            bwitterSetUsername(values.username)
        }
        if (initialValues.bio !== values.bio) {
            bwitterSetBio(values.bio)
        }
    }
    validate = (values: IProfileFormValues) => {
        const { firstName, lastName, username } = values
        const errorList: IProfileFormValues = {
            firstName: '',
            lastName: '',
            username: '',
            bio: '',
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
        return errorList
    }
    render() {
        const { initialValues } = this.props
        return <ProfileForm
            onSubmit={this.submit}
            validate={this.validate}
            initialValues={initialValues}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormContainer)