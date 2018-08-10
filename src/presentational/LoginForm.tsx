import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import FormInputComponent from './FormInputComponent'

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

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
    checkbox: {
        marginLeft: '5%',
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
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
})

interface IProps {
    errorMessage: string
    isSubmitAwaiting: boolean
}
const LoginForm: React.SFC<IProps & InjectedFormProps<{}, IProps> & WithStyles<typeof styles>> = props => (
    <Card className={props.classes.card}>
        <form noValidate={true} autoComplete='off' onSubmit={props.handleSubmit}>
            <CardContent>
                <Typography color='textSecondary' align='center' variant='display1'>
                    Login
                </Typography>
                <div className={props.classes.container}>
                    <Field name='email' component={FormInputComponent} type='email' label='Email' formControlClass={props.classes.textField} />
                    <Field name='password' component={FormInputComponent} type='password' label='Password' formControlClass={props.classes.textField} />
                </div>
                <Typography color='textSecondary' align='right' variant='body1'>
                    Don't have an account?<Link to='/register'>Register here</Link>
                </Typography>
                <Typography color='textSecondary' align='right' variant='body1'>
                    <Link to='/'>Forgot password?</Link>
                </Typography>
            </CardContent>
            <CardActions disableActionSpacing={true} className={props.classes.actions}>
                {
                    props.isSubmitAwaiting ?
                        <CircularProgress /> :
                        <Button variant='fab' color='primary' aria-label='send' type='submit' className={props.classes.button} disabled={!props.valid}>
                            <Icon>send</Icon>
                        </Button>
                }
                <Typography color='error' align='center' variant='body1'>
                    {props.errorMessage}
                </Typography>
            </CardActions>
        </form>
    </Card>
)

const reduxFormConfig = {
    form: 'login_form'
}

export default reduxForm<{}, IProps>(reduxFormConfig)(withStyles(styles)(LoginForm))