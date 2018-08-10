import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) => createStyles({
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
})

interface IProps extends WithStyles<typeof styles> { }

const BwitterNavbar: React.SFC<IProps> = props => (
    <div className={props.classes.root}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton className={props.classes.menuButton} color='inherit' aria-label='Menu'>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant='title' color='inherit' className={props.classes.flex}>
                    Bwitter
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

export default withStyles(styles)(BwitterNavbar) 