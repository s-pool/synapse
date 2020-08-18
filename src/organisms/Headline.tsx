import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import React from 'react'

import { ColumnPage, ColumnPageProps, Fluid } from '../molecules'

const SCard = styled(Card)(({ theme }:{theme:Theme}) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.default
}))

const SCardMedia = styled(CardMedia)(({ theme }:{theme:Theme}) => ({
  backgroundColor: theme.palette.background.default,
  backgroundPosition: 'center',
  backgroundSize: 'auto 66%',
  backgroundRepeat: 'no-repeat',
  paddingTop: '56.25%' // 16:9
}))

const SCardContent = styled(CardContent)(({ theme }:{theme:Theme}) => ({
  background: theme.palette.background.paper
}))

const Caption:React.FC = ({ children, ...props }) => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    typo: {
      margin: theme.spacing(1, 0)
    }
  })
  )
  const classes = useStyles()
  return (
    <Typography className={classes.typo} variant='h6' align='center' {...props} component='h2'>
      {children}
    </Typography>
  )
}

type UUID = {
  uuid: string
}

type HeadlineOptionProps = {
  background?: {
    image?: string,
    color?: string
  },
  fluid?: string|boolean,
  contrast?: boolean
}

type CardProps = {
  subtitle: string,
  image?: string
}

type HeadlineStaticProps = ColumnPageProps & HeadlineOptionProps

type HeadlineProps = HeadlineStaticProps & {
  cards: Array<UUID & CardProps>,
  onClickCard: (target:string) => void
}

const Wrapper = styled('div')(() => ({
  position: 'relative'
}))

const Layer = styled('div')(() => ({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}))

const BgLayer = styled(Layer)(({ theme, background }:{theme:Theme, background?: HeadlineStaticProps['background']}) => ({
  backgroundColor: background?.color || theme.palette.background.default,
  backgroundImage: `url(${background?.image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}))

const Overlay = styled(Layer)(() => ({
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(1px)'
}))

const Headline:React.FC<HeadlineProps> = (props) => {
  return (
    <Wrapper>
      <BgLayer background={props.background}/>
      {props.fluid && <Fluid color={typeof props.fluid === 'string' ? props.fluid : undefined}/>}
      {props.background?.image && <Overlay/>}
      <ColumnPage text={props.text} color={props.color} contrast={props.contrast}>
        <Grid container spacing={4}>
          {
            props.cards.map((card, i) => {
              console.log('Accordion map')
              return (
                <Grid item xs={12} sm={6} md={4} key={`card-${card.uuid}`} >
                  <Grow in timeout={300 * i} >
                    <SCard>
                      <CardActionArea onClick={() => props.onClickCard(card.uuid)}>
                        <SCardMedia
                          image={card.image || 'https://source.unsplash.com/random/' + i}
                        />
                        <SCardContent>
                          <Caption>
                            {card.subtitle}
                          </Caption>
                        </SCardContent>
                      </CardActionArea>
                    </SCard>
                  </Grow>
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
