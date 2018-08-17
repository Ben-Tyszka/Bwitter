import * as React from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => createStyles({
    button: {
        margin: theme.spacing.unit,
    },
})

interface IProps extends WithStyles<typeof styles> {
    open: boolean
    working: boolean
    errorMessage: string
    onClickDeleteButton: () => void
    yes: () => void
    no: () => void
}

const DeleteAccount: React.SFC<IProps> = ({ classes, open, yes, no, onClickDeleteButton, errorMessage, working }) => (
    <div>
        <Button variant='outlined' color='secondary' className={classes.button} onClick={onClickDeleteButton}>
            Delete Account
        </Button>
        <Typography variant='body1' color='error'>
            {errorMessage}
        </Typography>
        <Dialog open={open} onClose={no} aria-labelledby='alert-dialog-delete-title' aria-describedby='alert-dialog-delete-description'>
            <DialogTitle id='alert-dialog-delete-title'>Are you sure you want to delete your Bwitter Account?</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-delete-description'>
                    All your data will be deleted... continue?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {working ?
                    <CircularProgress />
                    :
                    <Button onClick={yes} color='secondary'>
                        Yes
                    </Button>
                }
                <Button onClick={no} color='primary' autoFocus={true}>
                    No
                </Button>
            </DialogActions>
        </Dialog>
    </div>
)

export default withStyles(styles)(DeleteAccount)