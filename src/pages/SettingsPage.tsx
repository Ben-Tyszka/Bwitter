import * as React from 'react'

import DeleteAccountContainer from '../containers/DeleteAccountContainer'
import BackAppBar from '../presentational/BackAppBar'

const SettingsPage: React.SFC = () => (
    <div>
        <BackAppBar back='/' title='Settings' />
        <DeleteAccountContainer />
    </div>
)

export default SettingsPage
