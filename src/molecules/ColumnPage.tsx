import { Box, Container, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'

type ColumnPageProps = {
  text: string,
  color?: string
}

const Wrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  minHeight: '95vh',
  padding: theme.spacing(16, 0)
}))

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    color: (props:ColumnPageProps) => props.color || theme.palette.text.primary,
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6)
    }
  }
}))

const ColumnPage:React.FC<ColumnPageProps> = ({ children, ...props }) => {
  const classes = useStyles(props)
  const theme = useTheme()
  return (
    <Container maxWidth='md'>
      <Wrapper>
        <Typography className={classes.title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h4' : 'h5'} align='center' component='h2'>
          {props.text}
        </Typography>
        <Box display='contents' onClick={e => e.stopPropagation()}>
          {children}
        </Box>
      </Wrapper>
    </Container>
  )
}

export { ColumnPage }
export type { ColumnPageProps }
