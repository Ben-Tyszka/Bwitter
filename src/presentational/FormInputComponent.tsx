import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

type IFormInputComponentProps = {
    label: string
    type: string
    formControlClass: string
    bwitterStartAdornment?: React.Component
} & WrappedFieldProps

const FormInputComponent: React.SFC<IFormInputComponentProps> = ({ input, label, type, formControlClass, bwitterStartAdornment, meta: { touched, error, warning }, ...otherProps }) => (
    <FormControl error={touched && error} aria-describedby='component-helper-text' className={formControlClass}>
        <InputLabel htmlFor='component-helper'>{label}</InputLabel>
        <Input {...input} placeholder={label} type={type} startAdornment={bwitterStartAdornment}/>
        <FormHelperText id='component-helper-text'>{touched && (error && <div>{error}</div>)}</FormHelperText>
    </FormControl>
)

export default FormInputComponent