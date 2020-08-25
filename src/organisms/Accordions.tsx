import 'react-image-gallery/styles/scss/image-gallery.scss'

import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, IconButton, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import clsx from 'clsx'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import LazyLoad from 'react-lazyload'

type UUID = {
  uuid: string
}

type AccordionItemProps = {
  summary: string,
  details: Array<string>,
  images?: Array<string>
}

type AccordionsProps = {
  items: Array<UUID & AccordionItemProps>
}

const Wrapper = styled('div')(() => ({

}))

const ImageWrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  width: '100%',
  height: '100%'
}))

const useStyles = makeStyles((theme: Theme) => createStyles({
  accordion: {
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.divider,
    '&:before': {
      display: 'none'
    }
  },
  summary: {
    padding: theme.spacing(0, 2),
    '&:hover': {
      background: theme.palette.action.hover
    }
  },
  details: {
    flexDirection: 'column',
    padding: theme.spacing(2, 3),
    margin: theme.spacing(2, 0),
    marginLeft: theme.spacing(3),
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.divider
  },
  detailsTypo: {
    whiteSpace: 'pre-wrap',
    marginBottom: theme.spacing(1)
  },
  nav: {
    '& .image-gallery-bullets .image-gallery-bullet': {
      boxShadow: 'none',
      border: 'none',
      padding: 4,
      background: theme.palette.action.active
    },
    '& .image-gallery-bullets .image-gallery-bullet.active': {
      background: theme.palette.primary.main
    }
  },
  navButton: {
    position: 'absolute',
    zIndex: 4,
    '& svg': {
      fontSize: '2rem'
    },
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  navButtonLeft: {
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  navButtonRight: {
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  navButtonFull: {
    right: 0,
    bottom: 0
  }
}))

const Accordions:React.FC<AccordionsProps> = (props) => {
  console.log('render Accordion')

  const classes = useStyles()

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Wrapper>
      {
        props.items.map((item) => (
          <Accordion className={classes.accordion} expanded={expanded === item.uuid} onChange={handleChange(item.uuid)} key={item.uuid}>
            <AccordionSummary
              className={classes.summary}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='subtitle1' component='span'>
                {item.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {
                item.details.map((detail, i) => {
                  return (
                    <Typography className={classes.detailsTypo} variant='body1' key={`${item.uuid}-body-${i}`}>
                      {detail}
                    </Typography>
                  )
                })
              }
              {
                (item.images)
                  ? <LazyLoad
                    once
                    height={400}
                    placeholder={
                      <Box display='flex' justifyContent='center' alignItems='center' height={400} bgcolor='rgba(0,0,0,0.04)' margin={2}>
                        <CircularProgress/>
                      </Box>
                    }
                    debounce
                  >
                    <ImageWrapper className={classes.nav}>
                      <ImageGallery
                        items={
                          item.images.map((src) => {
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
                        slideDuration={300}
                        lazyLoad
                        renderLeftNav={
                          (onClick) => {
                            return (
                              <IconButton className={clsx(classes.navButton, classes.navButtonLeft)} onClick={onClick}>
                                <NavigateBeforeIcon/>
                              </IconButton>
                            )
                          }
                        }
                        renderRightNav={
                          (onClick) => {
                            return (
                              <IconButton className={clsx(classes.navButton, classes.navButtonRight)} onClick={onClick}>
                                <NavigateNextIcon/>
                              </IconButton>
                            )
                          }
                        }
                        renderFullscreenButton={
                          (onClick) => {
                            return (
                              <IconButton className={clsx(classes.navButton, classes.navButtonFull)} onClick={onClick}>
                                <FullscreenIcon/>
                              </IconButton>
                            )
                          }
                        }
                      />
                    </ImageWrapper>
                  </LazyLoad>
                  : <></>
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Wrapper>
  )
}

export { Accordions }
export type { AccordionsProps, AccordionItemProps }
