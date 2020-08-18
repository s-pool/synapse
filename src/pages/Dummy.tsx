import { teal } from '@material-ui/core/colors'
import React from 'react'

import { Logo } from '../assets/static/synapse_logo'
import { PR } from '../organisms'
import { SynapseAppBar } from '../pages'

const Dummy = () => {
  return (
    <PR
      appbar={{
        logo: <Logo/>,
        fontcolor: teal[500],
        tools: <SynapseAppBar/>
      }}
      contents={
        [
          {
            subtitle: 'Coming Soon ...',
            body: '',
            split: [false, 12]
          }
        ]
      }
    />
  )
}

export { Dummy }
