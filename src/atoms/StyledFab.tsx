import { Fab, FabProps, Tooltip, TooltipProps } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'

import { HideOnScroll } from '../atoms'

const SFab = styled(Fab)(({ theme }:{theme:Theme}) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.getContrastText(theme.palette.primary.main)
}))

type StyledFabProps = {
  children: React.ReactElement,
  onClick?: () => void,
  alt?: TooltipProps['title'],
  color?: FabProps['color']
}

const StyledFab:React.FC<StyledFabProps> = ({ children, ...props }) => {
  return (
    <HideOnScroll type={'zoom'} thereshold={600} reverse permanent>
      <Tooltip title={props.alt || ''}>
        <SFab color={props.color || 'primary'} onClick={props?.onClick}>
          {children}
        </SFab>
      </Tooltip>
    </HideOnScroll>
  )
}

export { StyledFab }
export type { StyledFabProps }
