import * as React from 'react'

import { connect } from 'react-redux'
import Avatar from '../presentational/Avatar'

interface IProps {
    size: string
    firstName: string
    lastName: string
    color: string
}

const mapStateToProps = (state: any) => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    color: state.profile.color,
})

class AvatarContainer extends React.Component<IProps> {
    render() {
        const { firstName, lastName, size, color } = this.props
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`
        return <Avatar
            size={size}
            text={initials}
            color={color}
        />
    }
}

export default connect(mapStateToProps, null)(AvatarContainer)