import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Icon, Typography } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import LazyLoad from 'react-lazyload'

import { isImage } from '../utils'

const Wrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  '& .MuiAccordionSummary-root': {
    padding: theme.spacing(0, 5)
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0)
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(0, 5),
    margin: theme.spacing(2, 0)
  }
}))

const SAccordionDetails = styled(AccordionDetails)(() => ({
  flexDirection: 'column'
}))

const BrTypography = styled(Typography)(({ theme }:{theme:Theme}) => ({
  whiteSpace: 'pre-wrap',
  marginBottom: theme.spacing(1)
}))

const Image = styled(Icon)(({ theme }:{theme:Theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 0),
  width: '100%',
  height: '100%'
}))

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

const Accordions:React.FC<AccordionsProps> = (props) => {
  console.log('render Accordion')

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Wrapper>
      {
        props.items.map((item) => (
          <Accordion expanded={expanded === item.uuid} onChange={handleChange(item.uuid)} key={item.uuid}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='subtitle1' component='h6'>
                {item.summary}
              </Typography>
            </AccordionSummary>
            <SAccordionDetails>
              {
                item.details.map((p, i) => {
                  return (
                    isImage(p)
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
                        <Image key={`${item.uuid}-fig-${i}`}>
                          <img src={p} alt='' height='auto' width='90%'/>
                        </Image>
                      </LazyLoad>
                      : <BrTypography variant='body1' key={`${item.uuid}-body-${i}`}>
                        {p}
                      </BrTypography>
                  )
                })
              }
            </SAccordionDetails>
          </Accordion>
        ))
      }
    </Wrapper>
  )
}

export { Accordions }
export type { AccordionsProps, AccordionItemProps }
