import { AppBar, AppBarProps, Box, Button, Drawer, IconButton, ListItem, ListItemText, Toolbar, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme, useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { Link } from 'react-router-dom'

type StyledAppBarProps = AppBarProps & {
  logo: React.ReactElement,
  fontcolor?: string,
  buttons?: Array<{
    children: string
  }>
}

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flex: 1,
  [theme.breakpoints.down('xs')]: {
    justifyContent: 'center'
  }
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

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: (props: StyledAppBarProps) => ({
    position: 'absolute',
    background: theme.appbar.background,
    boxShadow: theme.appbar.boxShadow,
    color: props.fontcolor || theme.appbar.fontColor
  }),
  menu: {
    position: 'absolute',
    left: theme.spacing(1),
    '& svg': {
      fontSize: 32
    }
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: 240,
      padding: theme.spacing(2, 0),
      background: theme.palette.common.black,
      color: theme.palette.common.white
    }
  },
  drawerItem: {
    marginLeft: theme.spacing(2)
  }
}))

const StyledAppBar:React.FC<StyledAppBarProps> = (props) => {
  console.log('render Appbar')
  const classes = useStyles(props)
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <AppBar className={classes.root} position='relative' {...props}>
        <Toolbar>
          <Wrapper>
            <Link to='/' aria-label='root'>
              <LogoWrapper color={props.fontcolor}>
                {props.logo}
              </LogoWrapper>
            </Link>
          </Wrapper>
          {
            useMediaQuery(theme.breakpoints.up('sm'))
              ? <Box display='flex' marginRight={2}>
                {
            props.buttons?.map(({ children, ...rest }) => {
              return (
                <Button color='inherit' size='large' {...rest}>{children}</Button>
              )
            })
                }
              </Box>
              : <IconButton onClick={() => setOpen(!open)} color='inherit' className={classes.menu} >
                <MenuIcon/>
              </IconButton>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        {
        props.buttons?.map(({ children, ...rest }) => {
          return (
            <ListItem button onClick={() => setOpen(false)} {...rest}>
              <ListItemText className={classes.drawerItem}>{children}</ListItemText>
            </ListItem >
          )
        })
        }
      </Drawer>
    </React.Fragment>
  )
}

export { StyledAppBar }
export type { StyledAppBarProps }
