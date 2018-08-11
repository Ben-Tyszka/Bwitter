import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

import Checkbox from '@material-ui/core/Checkbox'

const FormCheckboxComponent: React.SFC<WrappedFieldProps> = ({ input, meta: { touched, error, warning }, ...otherProps }) => (
    <Checkbox
        color='secondary'
        {...input}
    />
)

export default FormCheckboxComponent