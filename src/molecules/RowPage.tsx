
import { Container, Grid, GridProps, Grow, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled } from '@material-ui/core/styles'
import React from 'react'
import LazyLoad from 'react-lazyload'

type RowPageProps = {
  subtitle: string,
  body: string,
  image?: string,
  split?: [GridProps['xs'], GridProps['xs']],
  reverse?: boolean
}

const BodyWrapper = styled('div')(() => ({
  whiteSpace: 'pre-line',
  wordBreak: 'break-all'
}))

const useStyles = makeStyles(() => createStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    lineHeight: 1.75
  }
}))

const RowPage:React.FC<RowPageProps> = (props) => {
  const classes = useStyles()
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
        <Grid item xs={left}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-start'
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography variant='h4' color='textPrimary' component='h2'>
                {props.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BodyWrapper>
                <Typography className={classes.body} variant='h5' color='textSecondary' component='span'>
                  {props.body}
                </Typography>
              </BodyWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={right}>
          <LazyLoad
            once
            debounce
          >
            <Grow in timeout={300}>
              <video src={props.image} height='auto' width='100%' autoPlay loop/>
            </Grow>
          </LazyLoad>
        </Grid>
      </Grid>
    </Container>
  )
}

export { RowPage }
export type { RowPageProps }
