import 'react-image-gallery/styles/scss/image-gallery.scss'

import { Box, IconButton } from '@material-ui/core'
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import clsx from 'clsx'
import React from 'react'
import ImageGallery, { ReactImageGalleryProps } from 'react-image-gallery'

type GalleryProps = {
  items: Array<string>
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& img.image-gallery-image': {
      outline: 'none'
    },
    '& .image-gallery': {
      background: 'rgba(0,0,0,0)'
    },
    '& .image-gallery-slide': {
      opacity: 0
    },
    '& .image-gallery-slide.center': {
      opacity: 1
    },
    '& .image-gallery-content': {
      flex: 1
    },
    '& .image-gallery-content.fullscreen': {
      background: theme.palette.background.paper,
      top: '50%',
      transform: 'translateY(-50%)'
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
const Gallery:React.FC<GalleryProps & ReactImageGalleryProps> = ({ items, ...props }) => {
  const classes = useStyles()
  const ref = React.useRef<any>(null)

  const handleClick = () => {
    ref.current?.toggleFullScreen()
  }

  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  return (
    <Box className={classes.root} onClick={handleClick}>
      <ImageGallery
        ref={ref}
        items={
          items.map((src) => {
            return (
              {
                original: src,
                originalAlt: ''
              }
            )
          })
        }
        showPlayButton={false}
        showBullets={true}
        showThumbnails={false}
        showFullscreenButton={false}
        slideDuration={300}
        slideInterval={5000}
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
        {...props}
      />
    </Box>
  )
}

export { Gallery }
