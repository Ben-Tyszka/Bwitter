import * as React from 'react'

import MaterialAvatar from '@material-ui/core/Avatar'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
    avatarLarge: {
        width: 200,
        height: 200,
        margin: '0 auto',
    },
    avatarSmall: {
        width: 130,
        height: 130,
        margin: '0 auto',
    }
})

interface IProps extends WithStyles<typeof styles> {
    size: string
    text: string
    color: string
}

const Avatar: React.SFC<IProps> = ({ text, size, classes, color }) => (
    <MaterialAvatar style={{ backgroundColor: color }} className={size === 'large' ? classes.avatarLarge : classes.avatarSmall}>
        {text}
    </MaterialAvatar>
)

export default withStyles(styles)(Avatar) 