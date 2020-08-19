import { styled } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import { Element, scroller } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import { mainTheme as theme } from '../theme'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowX: 'hidden'
})

const ContentWrapper = styled('div')((props:{background:string}) => ({
  background: props.background,
  boxShadow: `
    0px -3px 1px -2px ${fade(props.background, 0.20)},
    0px -2px 2px 0px ${fade(props.background, 0.14)},
    0px -1px 5px 0px ${fade(props.background, 0.12)}
  `
}))

type Content = {
  body: React.ReactElement,
  bgColor?: CSSProperties['backgroundColor']
}

type ScrollPagesProps = {
  contents: Array<Content>
}

const scrollProps = {
  duration: theme.transitions.duration.standard,
  smooth: 'easeOutCubic'
}

const handleClickCard = (target:string) => {
  scroller.scrollTo(target, scrollProps)
}

const ScrollPages:React.FC<ScrollPagesProps> = (props) => {
  console.log('render ScrollPages')

  const contents = React.useMemo(() => {
    return (
      props.contents.map((content) => {
        return (
          {
            ...content,
            uuid: uuidv4()
          }
        )
      })
    )
  }, [props.contents])

  return (
    <React.Fragment>
      <Wrapper>
        {
          contents.map((content) => {
            return (
              <Element name={content.uuid} key={`sp-${content.uuid}`} >
                <ContentWrapper background={content.bgColor || theme.palette.background.default} onClick={() => handleClickCard(content.uuid)}>
                  {content.body}
                </ContentWrapper>
              </Element>
            )
          })
        }
      </Wrapper>
    </React.Fragment>
  )
}

export { ScrollPages }
export type { ScrollPagesProps }
