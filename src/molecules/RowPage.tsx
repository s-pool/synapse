
import { Container, Grid, GridProps, Grow, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import LazyLoad from 'react-lazyload'

type RowPageProps = {
  subtitle: string,
  body: string,
  image?: React.ReactElement,
  split?: [GridProps['xs'], GridProps['xs']],
  reverse?: boolean
}
const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
}))

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(10, 5)
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.h6
    }
  },
  body: {
    [theme.breakpoints.down('xs')]: {
      ...theme.typography.subtitle1
    },
    lineHeight: 1.75,
    whiteSpace: 'pre-line'
  },
  shift: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2)
    }
  }
}))

const RowPage:React.FC<RowPageProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  const [left, right] = props.split || [5, 7]
  const direction = props.reverse ? 'row' : 'row-reverse'
  return (
    <Container className={classes.root} maxWidth='lg'>
      <Grid
        container
        direction={direction}
        justify='center'
        alignItems='center'
        spacing={10}
      >
        {
          props.image &&
            <Grid item md={right} xs={12}>
              <LazyLoad
                once
                debounce
                height={360}
              >
                <Grow in timeout={300}>
                  <Wrapper>
                    {props.image}
                  </Wrapper>
                </Grow>
              </LazyLoad>
            </Grid>
        }
        <Grid item md={left} xs={12}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
            spacing={useMediaQuery(theme.breakpoints.up('sm')) ? 4 : 2}
            className={clsx(props.reverse && classes.shift)}
          >
            <Grid item xs={12}>
              <Typography className={classes.title} variant='h4' color='textPrimary' component='h2'>
                {props.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.body} variant='h5' color='textSecondary' component='span'>
                {props.body}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export { RowPage }
export type { RowPageProps }
