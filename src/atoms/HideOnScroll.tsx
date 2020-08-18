import { Slide, SlideProps, useScrollTrigger, Zoom } from '@material-ui/core'
import { UseScrollTriggerOptions } from '@material-ui/core/useScrollTrigger/useScrollTrigger'
import React from 'react'

type HideOnScrollProps = {
  children: React.ReactElement,
  type?: 'slide' | 'zoom'
  direction?: SlideProps['direction'],
  reverse?: boolean,
  init?: boolean,
  thereshold?: UseScrollTriggerOptions['threshold'],
  permanent?: UseScrollTriggerOptions['disableHysteresis']
}

const HideOnScroll:React.FC<HideOnScrollProps> = ({ children, thereshold = 100, ...props }) => {
  const scrolling = useScrollTrigger({
    disableHysteresis: props.permanent,
    threshold: thereshold
  })

  const [y, setY] = React.useState(0)

  React.useEffect(() => {
    setY(window.pageYOffset)
  }, [scrolling])

  return (
    <React.Fragment>
      {
        (props.type === 'zoom')
          ? <Zoom in={(y > thereshold) ? props.reverse ? scrolling : !scrolling : props.init}>
            {children}
          </Zoom>
          : <Slide appear={false} direction={props.direction || 'down'} in={(y > thereshold) ? props.reverse ? scrolling : !scrolling : props.init}>
            {children}
          </Slide>
      }
    </React.Fragment>
  )
}

HideOnScroll.defaultProps = {
  thereshold: 100
}

export { HideOnScroll }
export type { HideOnScrollProps }
