import * as React from 'react'

import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import FormInputComponent from './FormInputComponent'

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import AvatarContainer from '../containers/AvatarContainer'
import BwitterSnackbarContainer from '../containers/BwitterSnackbarContainer'

const styles = (theme: Theme) => createStyles({
    actions: {
        display: 'flex',
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        margin: '0 auto',
        marginTop: 80,
        [theme.breakpoints.up('sm')]: {
            width: '45%',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: '0 auto',
        marginTop: 25,
        width: 400,
    },
})

const ProfileForm: React.SFC<InjectedFormProps & WithStyles<typeof styles>> = ({ classes, handleSubmit, valid }) => (
    <div>
        <Card className={classes.card}>
            <AvatarContainer size='large' />
            <form noValidate={true} autoComplete='off' onSubmit={handleSubmit}>
                <CardContent>
                    <Typography color='textSecondary' align='center' variant='display1'>
                        Your Profile
                </Typography>
                    <div className={classes.container}>
                        <Field name='username' component={FormInputComponent} type='text' label='Username' formControlClass={classes.textField} bwitterStartAdornment={<InputAdornment position='start'>@</InputAdornment>} />
                        <Field name='bio' component={FormInputComponent} type='text' label='Bio' formControlClass={classes.textField} />
                        <Field name='firstName' component={FormInputComponent} type='text' label='First Name' formControlClass={classes.textField} />
                        <Field name='lastName' component={FormInputComponent} type='text' label='Last Name' formControlClass={classes.textField} />
                    </div>
                </CardContent>
                <CardActions disableActionSpacing={true} className={classes.actions}>
                    <Button variant='contained' size='large' className={classes.button} type='submit' color='secondary' disabled={!valid}>
                        <Icon>save</Icon>Save
                </Button>
                </CardActions>
            </form>
        </Card>
        <BwitterSnackbarContainer />
    </div>
)

const reduxFormConfig = {
    form: 'profile_form',
}

export default reduxForm(reduxFormConfig)(withStyles(styles)(ProfileForm))