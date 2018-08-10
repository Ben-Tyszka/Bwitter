import * as React from 'react'

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import { PASSWORD_MAX_CHARS, PASSWORD_MIN_CHARS } from '../settings'

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

interface IProps extends WithStyles<typeof styles> {
    emailOk: boolean
    errorMessage: string
    passwordOk: boolean
    submitButtonEnabled: boolean
    shouldShowLoadingComponent: boolean
    emailOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    passwordOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    submitOnClick: (event: React.FormEvent<HTMLFormElement>) => void
    staySignedInOnChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const LoginForm: React.SFC<IProps> = props => (
    <Card className={props.classes.card}>
        <form noValidate={true} autoComplete='off' onSubmit={props.submitOnClick}>
            <CardContent>
                <Typography className={props.classes.title} color='textSecondary' align='center'>
                    Login
                </Typography>
                <div className={props.classes.container}>
                    <FormControl className={props.classes.textField} error={!props.emailOk} aria-describedby='email-helper-text'>
                        <InputLabel htmlFor='email-helper'>Email</InputLabel>
                        <Input id='email-helper' onChange={props.emailOnChange} type='email' />
                        <FormHelperText id='email-helper-text'>{props.emailOk ? '' : 'Please enter a valid email'}</FormHelperText>
                    </FormControl>
                    <FormControl className={props.classes.textField} error={!props.passwordOk} aria-describedby='password-helper-text'>
                        <InputLabel htmlFor='password-helper'>Password</InputLabel>
                        <Input id='password-helper' onChange={props.passwordOnChange} type='password' />
                        <FormHelperText id='password-helper-text'>{props.passwordOk ? '' : 'Password must be between ' + PASSWORD_MIN_CHARS + '-' + PASSWORD_MAX_CHARS + ' characters and should only contain A-z0-9_-'}</FormHelperText>
                    </FormControl>
                    <FormControl className={props.classes.checkbox}>
                        <FormControlLabel
                            control={
                                <Checkbox onChange={props.staySignedInOnChange} />
                            }
                            label='Stay signed in?'
                        />
                    </FormControl>
                </div>
                <Typography color='textSecondary' align='right' variant='body1'>
                    <Link to='/register'>Create an account</Link>
                </Typography>
                <Typography color='textSecondary' align='right' variant='body1'>
                    <a>Forgot password?</a>
                </Typography>
            </CardContent>
            <CardActions className={props.classes.actions} disableActionSpacing={true}>
                {
                    props.shouldShowLoadingComponent ?
                        <CircularProgress /> :
                        <Button variant='fab' color='primary' aria-label='send' className={props.classes.button} type='submit' disabled={!props.submitButtonEnabled}>
                            <Icon>send</Icon>
                        </Button>
                }
            </CardActions>
        </form>
        <Typography color='error' align='center' variant='body1'>
            {props.errorMessage}
        </Typography>
    </Card>
)

export default withStyles(styles)(LoginForm)