import { Typography } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import MetaTags from 'react-meta-tags'

import { Fluid, StyledAppBar } from '../molecules'
import { appbarProps } from '../pages'

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

const Blank:React.FC = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>エスプール Synapse - データ分析プラットフォーム</title>
        <meta name='description' content='つなぐ、見える、伝わる。データ分析プラットフォーム「Synapse」' />
      </MetaTags>
      <StyledAppBar
        {...appbarProps}
        fontcolor={grey[50]}
      />
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

export { Blank }
