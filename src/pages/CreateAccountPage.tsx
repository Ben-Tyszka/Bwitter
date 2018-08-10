import * as React from 'react'

import CreateAccountFormContainer from '../containers/CreateAccountFormContainer'
import BwitterNavBar from '../presentational/BwitterNavBar'

const CreateAccountPage: React.SFC = () => (
    <div>
        <BwitterNavBar />
        <CreateAccountFormContainer />
    </div>
)

export default CreateAccountPage
