import { Container, Typography, TypographyProps } from '@material-ui/core'
import { styled, Theme } from '@material-ui/core/styles'
import React from 'react'

type SlideTitleProps = TypographyProps & {
  shadow?: boolean,
  contrast?: boolean,
  component?: React.ElementType
}

type ColumnPageProps = SlideTitleProps & {
  text: string
}

const SlideTitle = styled(Typography)(({ theme, ...props }: SlideTitleProps & {theme: Theme}) => ({
  marginBottom: theme.spacing(12),
  textShadow: props.shadow ? '1px 1px 4px rgba(0,0,0,0.12), -1px 1px 4px rgba(0,0,0,0.12), 1px -1px 4px rgba(0,0,0,0.12), -1px -1px 4px rgba(0,0,0,0.12)' : 'none',
  color: props.contrast ? theme.palette.getContrastText(theme.palette.text.primary) : undefined
}))

const InnerContainer = styled('div')(({ theme }:{theme:Theme}) => ({
  minHeight: '95vh',
  padding: theme.spacing(16, 0)
}))

const ColumnPage:React.FC<ColumnPageProps> = ({ children, text, ...props }) => {
  return (
    <Container maxWidth='md'>
      <InnerContainer>
        <SlideTitle variant='h4' align='center' {...props} component='h2'>
          {text}
        </SlideTitle>
        {children}
      </InnerContainer>
    </Container>
  )
}

export { ColumnPage }
export type { ColumnPageProps }
