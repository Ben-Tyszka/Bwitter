import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import LoginFormContainer from '../containers/LoginFormContainer'

const HomePage: React.SFC = () => (
    <div>
        <Typography variant='display1' color='inherit' align='center'>
            Welcome to Bwitter!
        </Typography>
        <LoginFormContainer />
    </div>
)

export default HomePage
