import { AppBar, AppBarProps, Box, Toolbar } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'

type StyledAppBarProps = AppBarProps & {
  logo: React.ReactElement,
  hidden?: boolean,
  fontcolor?: string,
  tools?: React.ReactElement
}

const SAppBar = styled(AppBar)(({ theme, ...props }: StyledAppBarProps & {theme: Theme}) => ({
  position: theme.appbar.position,
  background: theme.appbar.background,
  boxShadow: theme.appbar.boxShadow,
  color: props.fontcolor || theme.appbar.fontColor
}))

const LogoWrapper = styled('div')(({ theme, color }:{theme: Theme, color: StyledAppBarProps['fontcolor']}) => ({
  fill: color || theme.appbar.fontColor,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1, 0),
  width: 'auto',
  height: 0,
  ...theme.mixins.toolbar
}))

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flex: 1
}))

const StyledAppBar:React.FC<StyledAppBarProps> = (props) => {
  console.log('render Appbar')

  return (
    <SAppBar position='relative' {...props}>
      <Toolbar>
        <Wrapper>
          <Link to='/'>
            <LogoWrapper color={props.fontcolor}>
              {props.logo}
            </LogoWrapper>
          </Link>
        </Wrapper>
        <Box display='flex' marginRight={2}>
          {props.tools}
        </Box>
      </Toolbar>
    </SAppBar>
  )
}

export { StyledAppBar }
export type { StyledAppBarProps }
