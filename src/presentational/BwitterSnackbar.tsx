import * as React from 'react'

import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

interface IProps {
    message: string
    open: boolean
    onClose: () => void
}

const BwitterSnackbar: React.SFC<IProps> = ({ message, open, onClose }) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={4000}
        ContentProps={{
            'aria-describedby': 'message-id',
        }}
        onClose={onClose}
        message={<span id='message-id'>{message}</span>}
        action={[
            <IconButton key='close' aria-label='Close' color='inherit' onClick={onClose}>
                <Icon>
                    close
              </Icon>
            </IconButton>,
        ]}
    />
)

export default BwitterSnackbar