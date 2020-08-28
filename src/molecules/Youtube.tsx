import 'react-image-gallery/styles/scss/image-gallery.scss'

import { red } from '@material-ui/core/colors'
import { createStyles, fade, makeStyles, styled, Theme } from '@material-ui/core/styles'
import PlayIcon from '@material-ui/icons/PlayCircleFilledWhite'
import React from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'
type YoutubeProps = ReactPlayerProps & {
  url: string
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}))

const useStyles = makeStyles((theme: Theme) => createStyles({
  aspectOuter: {
    position: 'relative',
    boxShadow: theme.shadows[3],
    '&::before': {
      content: '""',
      paddingTop: '56.25%'
    }
  },
  aspectInner: {
    position: 'absolute',
    top: 0,
    bottom: 0
  },
  overlay: {
    transition: theme.transitions.create('all'),
    '&:hover': {
      background: 'rgba(0,0,0,0.08)',
      '& div': {
        boxShadow: theme.shadows[8],
        '& svg': {
          fill: red[500]
        }
      }
    }
  },
  play: {
    '& svg': {
      fontSize: '4rem',
      fill: theme.palette.action.active
    },
    transition: theme.transitions.create('all'),
    boxShadow: theme.shadows[4],
    borderRadius: '50%',
    background: fade(theme.palette.common.white, 0.7),
    width: 'calc(4rem - 12px)',
    height: 'calc(4rem - 12px)',
    overflow: 'visible'
  }
}))

const Youtube:React.FC<YoutubeProps> = ({ url, ...props }) => {
  const classes = useStyles()
  return (
    <Wrapper className={classes.aspectOuter}>
      <Wrapper className={classes.aspectInner}>
        <ReactPlayer
          url={url}
          width='100%'
          height='100%'
          volume={0}
          muted
          light
          playIcon={
            <Wrapper className={classes.overlay }>
              <Wrapper className={classes.play}>
                <PlayIcon/>
              </Wrapper>
            </Wrapper>
          }
          config={
            {
              youtube: {
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                  controls: 1
                }
              }
            }
          }
          {...props}
        />
      </Wrapper>
    </Wrapper>
  )
}

export { Youtube }
