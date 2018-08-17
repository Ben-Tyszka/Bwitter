import * as React from 'react'

import ProfileFormContainer from '../containers/ProfileFormContainer'
import BackAppBar from '../presentational/BackAppBar'


const ProfilePage: React.SFC = () => (
    <div>
        <BackAppBar back='/' title='Your Profile' />
        <ProfileFormContainer />
    </div>
)

export default ProfilePage