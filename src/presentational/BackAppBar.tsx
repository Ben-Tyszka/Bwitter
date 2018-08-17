import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = (theme: Theme) => createStyles({
    flex: {
        flexGrow: 1,
    },
    backButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        width: 40,
        height: 40,
        color: 'white',
    },
})

interface IProps extends WithStyles<typeof styles> {
    back: string
    title: string
}

const ProfileNavbar: React.SFC<IProps> = ({ classes, back, title }) => (
    <div className={classes.root}>
        <AppBar position='static'>
            <Toolbar>
                <Link to={back} className={classes.link}>
                    <IconButton className={classes.backButton} color='inherit'>
                        <Icon>navigate_before</Icon>
                    </IconButton>
                </Link>
                <Typography variant='title' color='inherit' className={classes.flex}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

export default withStyles(styles)(ProfileNavbar) 