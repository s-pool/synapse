import 'react-image-gallery/styles/scss/image-gallery.scss'

import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import ReactPlayer from 'react-player'

type YoutubeProps = {
  url: string
}

const Wrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0),
  width: '100%',
  height: '100%',
  boxShadow: theme.shadows[3]
}))

const Youtube:React.FC<YoutubeProps> = (props) => {
  return (
    <Wrapper>
      <ReactPlayer
        url={props.url}
        width='100%'
        height='100%'
        muted
        light
        config={
          {
            youtube: {
              playerVars: {
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
                autoplay: 1
              }
            }
          }
        }/>
    </Wrapper>
  )
}

export { Youtube }
