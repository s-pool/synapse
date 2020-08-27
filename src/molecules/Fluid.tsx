import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import clsx from 'clsx'
import React from 'react'

const FLUID_SIZE = window.innerHeight * 0.75
const FLUID_R = FLUID_SIZE / 2
const MIN_R = FLUID_R * 0.8

const FluidObj = styled('div')(() => ({
  position: 'absolute',
  zIndex: -1,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: FLUID_SIZE,
  height: FLUID_SIZE,
  borderRadius: FLUID_R,
  animationDelay: `${-1 * Math.round(Math.random() * 24)}s`,
  animationDuration: `${Math.round(Math.random() * 10) + 24}s`
}))

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
    '0%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    },
    '20%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    },
    '40%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    },
    '60%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    },
    '80%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    },
    '100%': {
      width: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      height: String(Math.round((Math.random() / 10 + 1) * FLUID_SIZE) + 'px'),
      borderTopLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderTopRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomLeftRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px'),
      borderBottomRightRadius: String(Math.round((Math.random() * FLUID_R + MIN_R)) + 'px')
    }
  }
})
)

type FluidProps = {
  color?: string
}

const Fluid:React.FC<FluidProps> = (props) => {
  const classes = useStyles(props)

  return (
    <React.Fragment>
      <FluidObj className={clsx(classes.motion)}/>
      <FluidObj className={clsx(classes.motion)}/>
      <FluidObj className={clsx(classes.motion)}/>
    </React.Fragment>
  )
}

export { Fluid }
