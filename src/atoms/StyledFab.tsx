import { Fab, FabProps, Tooltip, TooltipProps } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'

import { HideOnScroll } from '../atoms'

type StyledFabProps = {
  children: React.ReactElement,
  onClick?: () => void,
  alt?: TooltipProps['title'],
  color?: FabProps['color']
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.primary.main)
  }
}))

const StyledFab:React.FC<StyledFabProps> = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <HideOnScroll type={'zoom'} thereshold={600} reverse permanent>
      <Tooltip title={props.alt || ''}>
        <Fab className={classes.fab} color={props.color || 'primary'} onClick={props?.onClick}>
          {children}
        </Fab>
      </Tooltip>
    </HideOnScroll>
  )
}

export { StyledFab }
export type { StyledFabProps }
