import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import clsx from 'clsx'
import React from 'react'

type FluidProps = {
  color?: string
  height?: number
}

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute'
}))

const FluidObject:React.FC<FluidProps & {height: number}> = ({ height, ...props }) => {
  const FLUID_SIZE = height
  const FLUID_RADIUS = FLUID_SIZE / 2
  const FLUID_MIN_RADIUS = FLUID_SIZE * 0.4

  const FluidBase = styled('div')(() => ({
    position: 'absolute',
    zIndex: -1,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: FLUID_SIZE,
    height: FLUID_SIZE,
    borderRadius: FLUID_RADIUS,
    animationDelay: `${-1 * Math.round(Math.random() * 24)}s`,
    animationDuration: `${Math.round(Math.random() * 10) + 24}s`
  }))

  const fluidKeyframes = () => ({
    width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
    height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
    borderTopLeftRadius: String(Math.round((Math.random() * FLUID_RADIUS + FLUID_MIN_RADIUS)) + 'px'),
    borderTopRightRadius: String(Math.round((Math.random() * FLUID_RADIUS + FLUID_MIN_RADIUS)) + 'px'),
    borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_RADIUS + FLUID_MIN_RADIUS)) + 'px'),
    borderBottomRightRadius: String(Math.round((Math.random() * FLUID_RADIUS + FLUID_MIN_RADIUS)) + 'px')
  })

  const useStyles = makeStyles((theme:Theme) => createStyles({
    motion: {
      animationName: '$rotate, $fluid',
      animationTimingFunction: 'linear, ease',
      animationIterationCount: 'infinite',
      animationDirection: 'normal, alternate',
      background: (props:FluidProps) => `radial-gradient(ellipse at center,
          ${fade(props.color || theme.randomColors[Math.floor(theme.randomColors.length * Math.random())], 0.9)} 0%,
          ${fade(props.color || theme.randomColors[Math.floor(theme.randomColors.length * Math.random())], 0.6)} 100%
          )`
    },
    '@keyframes rotate': {
      from: {
        transform: 'translate(-50%, -50%) rotate(0deg)'
      },
      to: {
        transform: 'translate(-50%, -50%) rotate(360deg)'
      }
    },
    '@keyframes fluid': {
      '0%': fluidKeyframes(),
      '20%': fluidKeyframes(),
      '40%': fluidKeyframes(),
      '60%': fluidKeyframes(),
      '80%': fluidKeyframes(),
      '100%': fluidKeyframes()
    }
  })
  )

  const classes = useStyles(props)

  return (
    <React.Fragment>
      <FluidBase className={clsx(classes.motion)}/>
      <FluidBase className={clsx(classes.motion)}/>
      <FluidBase className={clsx(classes.motion)}/>
    </React.Fragment>
  )
}

const Fluid:React.FC<FluidProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const [height, setHeight] = React.useState(window.innerHeight * 0.75)

  React.useEffect(() => {
    if (typeof (props.height) !== 'number') {
      ref.current && setHeight(ref.current?.clientHeight * 0.75)
    }
  }, [props.height])

  return (
    <Wrapper ref={ref}>
      <FluidObject {...props} height={props.height || height}/>
    </Wrapper>
  )
}

export { Fluid }
