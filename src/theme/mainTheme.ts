import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import { deepPurple, grey, lightBlue, lightGreen, lime, orange, red, teal } from '@material-ui/core/colors'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

import { shuffle } from '../utils'

const mColors = [teal[100], orange[100], deepPurple[100], lightGreen[100], lime[100], lightBlue[100], red[100]]

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colorSet: Array<string>,
    appbar: {
      background: CSSProperties['background'],
      fontColor: CSSProperties['color'],
      position: CSSProperties['position'],
      boxShadow: CSSProperties['boxShadow']
    }
  }
  interface ThemeOptions {
    colorSet?: Array<string>,
    appbar?: {
      background?: CSSProperties['background'],
      fontColor?: CSSProperties['color'],
      position?: CSSProperties['position'],
      boxShadow?: CSSProperties['boxShadow']
    }
  }
}

const createCustomTheme = (options: ThemeOptions) => {
  return createMuiTheme({
    colorSet: shuffle(mColors),
    appbar: {
      background: 'linear-gradient(rgba(0,0,0,0.04), rgba(0,0,0,0))',
      fontColor: grey[900],
      position: 'absolute',
      boxShadow: 'none'
    },
    ...options
  })
}

const mainTheme = createCustomTheme({
  palette: {
    type: 'light', // dark
    primary: {
      main: teal[500]
    },
    secondary: {
      main: orange[600]
    },
    error: {
      main: red.A400
    },
    text: {
      primary: grey.A400, // 300
      secondary: grey[700] // 500
    },
    background: {
      paper: grey[50], // 800
      default: grey[200] // A400
    },
    common: {
      black: grey.A400,
      white: grey[50]
    },
    action: {
      hoverOpacity: 0.08
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: '"Roboto","BIZ UPDGothic",sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          '&::-webkit-scrollbar': {
            width: 6
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0,0,0,0)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: grey[400],
            borderRadius: 3
          }
        },
        html: {
          fontSize: 16,
          overflowX: 'hidden',
          width: '100%'
        },
        body: {
          textRendering: 'optimizeLegibility'
        }
      }
    }
  }
})

export { mainTheme }
