
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'

type UUID = {
  uuid: string
}

type AccordionItemProps = {
  summary: string,
  details: Array<string>,
  images?: React.ReactElement
}

type AccordionsProps = {
  items: Array<UUID & AccordionItemProps>
}

const Wrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  width: '100%'
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
    <React.Fragment>
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
                item.images &&
                <Wrapper>
                  {item.images}
                </Wrapper>
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </React.Fragment>
  )
}

export { Accordions }
export type { AccordionsProps, AccordionItemProps }
