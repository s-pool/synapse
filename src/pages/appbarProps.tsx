import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../assets/logo/synapse_logo'
import { StyledAppBarProps } from '../molecules'

const appbarProps:StyledAppBarProps = {
  logo: <Logo/>,
  menu: [
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
}

export { appbarProps }
