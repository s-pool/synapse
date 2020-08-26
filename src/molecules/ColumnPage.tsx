import { Box, Container, Typography } from '@material-ui/core'
import { createStyles, makeStyles, styled, Theme } from '@material-ui/core/styles'
import React from 'react'

type ColumnPageProps = {
  text: string,
  color?: string
}

const Wrapper = styled('div')(({ theme }:{theme:Theme}) => ({
  minHeight: '95vh',
  padding: theme.spacing(16, 0),
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(12, 0)
  }
}))

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    color: (props:ColumnPageProps) => props.color || theme.palette.text.primary,
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6),
      ...theme.typography.h5
    }
  }
}))

const ColumnPage:React.FC<ColumnPageProps> = ({ children, ...props }) => {
  const classes = useStyles(props)
  return (
    <Container maxWidth='md'>
      <Wrapper>
        <Typography className={classes.title} variant='h4' align='center' component='h2'>
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
