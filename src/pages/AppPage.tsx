import * as React from 'react'

import BwitterNavBar from '../presentational/BwitterNavBar'

const AppPage: React.SFC = () => (
    <div>
        <BwitterNavBar />
        <h1>You are logged in!</h1>
    </div>
)

export default AppPage
