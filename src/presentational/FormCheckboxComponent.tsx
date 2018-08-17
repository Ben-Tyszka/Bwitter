import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const FormCheckboxComponent: React.SFC<WrappedFieldProps> = ({ input, meta: { touched, error, warning }, ...otherProps }) => (
    <div>
        <FormControlLabel control={<Checkbox color='secondary' {...input} />} label='Stay signed in' />
    </div>
)

export default FormCheckboxComponent