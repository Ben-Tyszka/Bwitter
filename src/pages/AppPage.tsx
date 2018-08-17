import * as React from 'react'

import BwitterAppBarAndDrawerContainer from '../containers/BwitterAppBarAndDrawerContainer'

const AppPage: React.SFC = () => (
    <div>
        <BwitterAppBarAndDrawerContainer />
        <h1>You are logged in!</h1>
    </div>
)

export default AppPage
