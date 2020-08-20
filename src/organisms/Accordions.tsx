import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import LazyLoad from 'react-lazyload'

import { getMediaType } from '../utils'

type UUID = {
  uuid: string
}

type AccordionItemProps = {
  summary: string,
  details: Array<string>,
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
    padding: theme.spacing(1, 5),
    '&:hover': {
      background: theme.palette.action.hover
    }
  },
  details: {
    flexDirection: 'column',
    padding: theme.spacing(2, 4),
    margin: theme.spacing(2, 0),
    marginLeft: theme.spacing(6),
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.divider
  },
  detailsTypo: {
    whiteSpace: 'pre-wrap',
    marginBottom: theme.spacing(1)
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
                item.details.map((p, i) => {
                  const mType = getMediaType(p)
                  if (mType === 'img') {
                    return (
                      <LazyLoad
                        once
                        height={400}
                        placeholder={
                          <Box display='flex' justifyContent='center' alignItems='center' height={400} bgcolor='rgba(0,0,0,0.04)' margin={2}>
                            <CircularProgress/>
                          </Box>
                        }
                        debounce
                        key={`${item.uuid}-fig-${i}`}
                      >
                        <ImageWrapper>
                          <img src={p} alt='' height='auto' width='100%'/>
                        </ImageWrapper>
                      </LazyLoad>
                    )
                  } else if (mType === 'video') {
                    return (
                      <LazyLoad
                        once
                        height={400}
                        placeholder={
                          <Box display='flex' justifyContent='center' alignItems='center' height={400} bgcolor='rgba(0,0,0,0.04)' margin={2}>
                            <CircularProgress/>
                          </Box>
                        }
                        debounce
                        key={`${item.uuid}-fig-${i}`}
                      >
                        <ImageWrapper>
                          <video src={p} height='auto' width='100%' autoPlay loop/>
                        </ImageWrapper>
                      </LazyLoad>
                    )
                  } else {
                    return (
                      <Typography className={classes.detailsTypo} variant='body1' key={`${item.uuid}-body-${i}`}>
                        {p}
                      </Typography>
                    )
                  }
                })
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
