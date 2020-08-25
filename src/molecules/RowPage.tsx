
import { Container, Grid, GridProps, Grow, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'
import LazyLoad from 'react-lazyload'

type RowPageProps = {
  subtitle: string,
  body: string,
  image?: React.ReactElement,
  split?: [GridProps['xs'], GridProps['xs']],
  reverse?: boolean
}

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  title: {

  },
  body: {
    lineHeight: 1.75,
    whiteSpace: 'pre-line',
    wordBreak: 'break-all'
  }
}))

const RowPage:React.FC<RowPageProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  const [left, right] = props.split || [5, 7]
  const direction = props.reverse ? 'row-reverse' : 'row'
  return (
    <Container className={classes.root} maxWidth='lg'>
      <Grid
        container
        direction={direction}
        justify='center'
        alignItems='center'
        spacing={10}
      >
        <Grid item md={left} xs={12}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography className={classes.title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h4' : 'h5'} color='textPrimary' component='h2'>
                {props.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.body} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h5' : 'h6'} color='textSecondary' component='span'>
                {props.body}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={right} xs={12}>
          <LazyLoad
            once
            debounce
          >
            <Grow in timeout={300}>
              {props.image}
            </Grow>
          </LazyLoad>
        </Grid>
      </Grid>
    </Container>
  )
}

export { RowPage }
export type { RowPageProps }
