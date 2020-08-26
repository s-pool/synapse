import 'react-image-gallery/styles/scss/image-gallery.scss'

import { Box, CircularProgress, IconButton } from '@material-ui/core'
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import clsx from 'clsx'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import LazyLoad from 'react-lazyload'

type ImageBoxProps = {
  items: Array<string>
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& .image-gallery': {
      background: 'rgba(0,0,0,0)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .image-gallery-content': {
      flex: 1
    },
    '& .image-gallery-content.fullscreen': {
      background: theme.palette.background.paper
    },
    '& .image-gallery-bullets': {
      bottom: '4%'
    },
    '& .image-gallery-bullets .image-gallery-bullet': {
      border: 'none',
      padding: 4,
      background: fade(theme.palette.common.black, 0.4),
      boxShadow: theme.shadows[1],
      '&:hover': {
        background: fade(theme.palette.common.white, 0.9)
      }
    },
    '& .image-gallery-bullets .image-gallery-bullet.active': {
      background: fade(theme.palette.common.white, 0.9)
    }
  },
  navButton: {
    position: 'absolute',
    zIndex: 4,
    '& svg': {
      fontSize: '2rem'
    },
    padding: 0,
    color: fade(theme.palette.common.black, 0.9)
  },
  navButtonLeft: {
    left: '3%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  navButtonRight: {
    right: '3%',
    top: '50%',
    transform: 'translate(50%, -50%)'
  },
  navButtonFull: {

  }
}))
const ImageBox:React.FC<ImageBoxProps> = (props) => {
  const classes = useStyles()
  const ref = React.useRef<any>(null)

  const handleClick = () => {
    ref.current?.toggleFullScreen()
  }

  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  return (
    <React.Fragment>
      <LazyLoad
        once
        height={400}
        placeholder={
          <Box display='flex' justifyContent='center' alignItems='center' height={400} bgcolor='rgba(0,0,0,0.04)' margin={2}>
            <CircularProgress/>
          </Box>
        }
        debounce
      >
        <Box className={classes.root} onClick={handleClick}>
          <ImageGallery
            ref={ref}
            items={
              props.items.map((src) => {
                return (
                  {
                    original: src
                  }
                )
              })
            }
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            showFullscreenButton={false}
            slideDuration={300}
            lazyLoad
            renderLeftNav={
              (onClick) => {
                const f = (e: any) => {
                  onClick(e)
                  stopPropagation(e)
                }
                return (
                  <IconButton className={clsx(classes.navButton, classes.navButtonLeft)} onClick={f}>
                    <NavigateBeforeIcon/>
                  </IconButton>
                )
              }
            }
            renderRightNav={
              (onClick) => {
                const f = (e: any) => {
                  onClick(e)
                  stopPropagation(e)
                }
                return (
                  <IconButton className={clsx(classes.navButton, classes.navButtonRight)} onClick={f}>
                    <NavigateNextIcon/>
                  </IconButton>
                )
              }
            }
          />
        </Box>
      </LazyLoad>
    </React.Fragment>
  )
}

export { ImageBox }
