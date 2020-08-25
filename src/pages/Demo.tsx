import { Typography } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../assets/logo/synapse_logo'
import { Fluid, StyledAppBar } from '../molecules'

const Wrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const BgLayer = styled('div')(({ theme, bgcolor }:{theme:Theme, bgcolor?: string}) => ({
  backgroundColor: bgcolor || theme.palette.background.default,
  position: 'absolute',
  zIndex: -1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}))

const Demo:React.FC = () => {
  return (
    <React.Fragment>
      <StyledAppBar {...{
        logo: <Logo/>,
        fontcolor: grey[50],
        buttons: [
          {
            component: Link,
            to: '/',
            children: 'HOME'
          },
          {
            component: Link,
            to: '/faq',
            children: 'FAQ'
          },
          {
            component: Link,
            to: '/demo',
            children: 'DEMO'
          }
        ]
      }}/>
      <Wrapper>
        <BgLayer bgcolor={blueGrey[200]}/>
        <Fluid/>
        <Typography color='textPrimary' variant='h4'>
        Coming Soon...
        </Typography>
      </Wrapper>
    </React.Fragment>
  )
}

export { Demo }
