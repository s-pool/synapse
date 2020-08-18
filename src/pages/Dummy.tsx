import { teal } from '@material-ui/core/colors'
import React from 'react'
import MetaTags from 'react-meta-tags'

import { Logo } from '../assets/static/synapse_logo'
import { PR } from '../organisms'
import { SynapseAppBar } from '../pages'

const Dummy = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Synapse | Demo</title>
        <meta name='description' content='Synapseのデモページ。' />
      </MetaTags>
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
    </React.Fragment>
  )
}

export { Dummy }
