import * as React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { localSetBio, localSetFirstName, localSetLastName, localSetUsername, setProfileColor } from '../actions/profileActions'
import firebase from '../bwitterFirebase'

interface IProps {
    bwitterSetFirstName: (firstName: string) => (dispatch: Dispatch) => void
    bwitterSetLastName: (lastName: string) => (dispatch: Dispatch) => void
    bwitterSetUsername: (username: string) => (dispatch: Dispatch) => void
    bwitterSetBio: (bio: string) => (dispatch: Dispatch) => void
    bwitterSetProfileColor: (color: string) => (dispatch: Dispatch) => void
}

interface IState {
    listener: firebase.Unsubscribe | null
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    bwitterSetFirstName: localSetFirstName,
    bwitterSetLastName: localSetLastName,
    bwitterSetUsername: localSetUsername,
    bwitterSetBio: localSetBio,
    bwitterSetProfileColor: setProfileColor,
}, dispatch)

class ProfileListener extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        const { bwitterSetBio, bwitterSetFirstName, bwitterSetLastName, bwitterSetUsername, bwitterSetProfileColor } = this.props
        const { currentUser } = firebase.auth()
        if (currentUser === null) return

        const unsubListener = firebase.firestore().collection('profiles').doc(currentUser.uid).onSnapshot((doc) => {
            if (!doc.exists) return
            
            const { username, firstName, lastName, bio, profileColor } = doc.data() as any
            console.log(doc.data())
            bwitterSetUsername(username)
            bwitterSetFirstName(firstName)
            bwitterSetLastName(lastName)
            bwitterSetProfileColor(profileColor)
            bwitterSetBio(bio)
        })

        this.setState({
            listener: unsubListener
        })
    }
    componentWillUnmount() {
        const { listener } = this.state
        if (listener !== null) {
            listener()
        }
    }
    render() {
        return (<div />)
    }
}

export default connect(null, mapDispatchToProps)(ProfileListener)