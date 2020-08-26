import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import { deepPurple, grey, lightBlue, lightGreen, lime, orange, red, teal } from '@material-ui/core/colors'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

import { shuffle } from '../utils'

const mColors = [teal[100], orange[100], deepPurple[100], lightGreen[100], lime[100], lightBlue[100], red[100]]

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    randomColors: Array<string>,
    bgColors: Array<string>,
    appbar: {
      background: CSSProperties['background'],
      fontColor: CSSProperties['color'],
      boxShadow: CSSProperties['boxShadow']
    }
  }
  interface ThemeOptions {
    randomColors?: Array<string>,
    bgColors?: Array<string>,
    appbar?: {
      background?: CSSProperties['background'],
      fontColor?: CSSProperties['color'],
      boxShadow?: CSSProperties['boxShadow']
    }
  }
}

const createCustomTheme = (options: ThemeOptions) => {
  return createMuiTheme({
    randomColors: shuffle(mColors),
    bgColors: [grey[50], grey[100]],
    appbar: {
      background: 'linear-gradient(rgba(0,0,0,0.04), rgba(0,0,0,0))',
      fontColor: grey[900],
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
    fontFamily: '"Roboto","BIZ UPDGothic",sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    h1: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    h2: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    h3: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    h4: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    h5: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    h6: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    subtitle1: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    subtitle2: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    body1: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    body2: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    button: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif',
      textTransform: 'none'
    },
    caption: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    },
    overline: {
      fontFamily: '"Roboto","BIZ UPDGothic",sans-serif'
    }
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
