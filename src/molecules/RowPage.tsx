
import { Container, Grid, GridProps, Grow, Icon, Paper, Typography } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'
import LazyLoad from 'react-lazyload'

type SlideTitleProps = {
  shadow?: boolean,
  contrast?: boolean
}

type RowPageProps = SlideTitleProps & {
  subtitle: string,
  body: string,
  image?: string | React.ReactElement,
  split?: [GridProps['xs'], GridProps['xs']],
  reverse?: boolean
}

const StyledTypo = styled(Typography)(({ theme, ...props }: SlideTitleProps & {theme: Theme}) => ({
  textShadow: props.shadow ? '1px 1px 4px rgba(0,0,0,0.12), -1px 1px 4px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.12), -1px -1px 4px rgba(0,0,0,0.12)' : 'none',
  color: props.contrast ? theme.palette.getContrastText(theme.palette.text.primary) : undefined
}))

const BodyTypo = styled(StyledTypo)(() => ({
  lineHeight: 1.75
}))

const StyledContainer = styled(Container)(() => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const Image = styled(Icon)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: 'visible'
}))

const TextBox = styled('div')(() => ({
  whiteSpace: 'pre-line',
  wordBreak: 'break-all'
}))

const RowPage:React.FC<RowPageProps> = (props) => {
  const [left, right] = props.split || [5, 7]
  const direction = props.reverse ? 'row-reverse' : 'row'
  return (
    <StyledContainer maxWidth='lg'>
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
              <StyledTypo variant='h4' color='textPrimary'>
                {props.subtitle}
              </StyledTypo>
            </Grid>
            <Grid item xs={12}>
              <TextBox>
                <BodyTypo variant='h5' color='textSecondary'>
                  {props.body}
                </BodyTypo>
              </TextBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={right}>
          <LazyLoad
            once
            debounce
          >
            <Grow in>
              {
                typeof props.image === 'string'
                  ? <Paper elevation={4}>
                    <Image>
                      <img src={props.image} alt='' height='auto' width='100%'/>
                    </Image>
                  </Paper>
                  : <Image>{props.image}</Image>
              }
            </Grow>
          </LazyLoad>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export { RowPage }
export type { RowPageProps }
