import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'
import LazyLoad from 'react-lazyload'

import { ColumnPage, ColumnPageProps, Fluid } from '../molecules'

type UUID = {
  uuid: string
}

type CardProps = {
  subtitle: string,
  image?: string
}

type HeadlineStaticProps = ColumnPageProps & {
  bgcolor?: string
  fluid?: string|boolean
}

type HeadlineProps = HeadlineStaticProps & {
  cards: Array<UUID & CardProps>,
  onClickCard: (target:string) => void
}

const Caption:React.FC = ({ children }) => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    typo: {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0)
      }
    }
  }))

  const classes = useStyles()
  const theme = useTheme()

  return (
    <Typography className={classes.typo} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h6' : 'subtitle1'} align='center' noWrap component='h2' >
      {children}
    </Typography>
  )
}

const Wrapper = styled('div')(() => ({
  position: 'relative'
}))

const BgLayer = styled('div')(({ theme, bgcolor }:{theme:Theme, bgcolor?: string}) => ({
  backgroundColor: bgcolor || theme.palette.background.default,
  position: 'absolute',
  zIndex: -1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}))

const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default
  },
  cardContent: {
    background: theme.palette.background.paper
  },
  cardMedia: {
    backgroundColor: theme.palette.background.default,
    backgroundPosition: 'center',
    backgroundSize: 'auto 66%',
    backgroundRepeat: 'no-repeat',
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0
    }
  }
}))

const Headline:React.FC<HeadlineProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Wrapper>
      <BgLayer bgcolor={props.bgcolor}/>
      {props.fluid && <Fluid color={typeof props.fluid === 'string' ? props.fluid : undefined}/>}
      <ColumnPage text={props.text} color={props.color}>
        <Grid container spacing={useMediaQuery(theme.breakpoints.up('sm')) ? 4 : 2}>
          {
            props.cards.map((card, i) => {
              console.log('card map')
              return (
                <Grid item xs={12} sm={6} md={4} key={`card-${card.uuid}`} >
                  <LazyLoad
                    once
                    debounce
                  >
                    <Grow in timeout={300 * i} >
                      <Card className={classes.card}>
                        <CardActionArea onClick={() => props.onClickCard(card.uuid)}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.image || 'https://source.unsplash.com/random/' + i}
                          />
                          <CardContent className={classes.cardContent}>
                            <Caption>
                              {card.subtitle}
                            </Caption>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </LazyLoad>
                </Grid>
              )
            })
          }
        </Grid>
      </ColumnPage>
    </Wrapper>
  )
}

export { Headline }
export type { CardProps, HeadlineProps, HeadlineStaticProps }
