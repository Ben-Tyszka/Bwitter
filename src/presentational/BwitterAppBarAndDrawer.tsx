import * as React from 'react'

import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AvatarContainer from '../containers/AvatarContainer'

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
    avatarButton: {
        cursor: 'pointer',
    },
    fullList: {
        width: 'auto'
    },
    userInfoContainer: {
        marginTop: '5px',
        textAlign: 'center',
    },
})

interface IProps extends WithStyles<typeof styles> {
    firstName: string
    lastName: string
    username: string
    open: boolean
    toggle: () => void
    logout: () => void
}

const BwitterAppBarAndDrawer: React.SFC<IProps> = ({ classes, open, logout, toggle, firstName, lastName, username }) => (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={toggle}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant='title' color='inherit' className={classes.flex}>
                    Bwitter
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggle} >
            <div tabIndex={0} role='button' onClick={toggle} onKeyDown={toggle}>
                <AvatarContainer size='small' />
                <div className={classes.userInfoContainer}>
                    <Typography variant='body1' color='inherit' className={classes.flex}>
                        {firstName} {lastName}
                    </Typography>
                    <Typography variant='caption' color='textSecondary' className={classes.flex}>
                        @{username}
                    </Typography>
                </div>
            </div>
            <div className={classes.fullList}>
                <List>
                    <ListItem button={true} component={props => <Link to='/profile' {...props} />}>
                        <Icon>
                            person_outline
                            </Icon>
                        <ListItemText primary='Profile' />
                    </ListItem>
                    <ListItem button={true} component={props => <Link to='/settings' {...props} />}>
                        <Icon>
                            settings
                        </Icon>
                        <ListItemText primary='Settings ' />
                    </ListItem>
                    <ListItem button={true} onClick={logout}>
                        <Icon>
                            exit_to_app
                        </Icon>
                        <ListItemText primary='Log out' />
                    </ListItem>
                </List>
                <Divider />
            </div>
        </Drawer>
    </div >
)

export default withStyles(styles)(BwitterAppBarAndDrawer) 