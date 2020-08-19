import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import React, { lazy, Suspense } from 'react'
import { animateScroll as scroll, Element, scroller } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import { StyledFab } from '../atoms'
import { ColumnPage, ScrollPages, ScrollPagesProps, StyledAppBar, StyledAppBarProps } from '../molecules'
import { AccordionItemProps, CardProps, Headline, HeadlineStaticProps } from '../organisms'
import { mainTheme as theme } from '../theme'

const Accordions = lazy(() => import('../wrap/organisms/LazyAccordions'))

type Content = CardProps & {
  items: Array<AccordionItemProps>
}

type FAQProps = {
  appbar: StyledAppBarProps,
  headline: HeadlineStaticProps,
  contents: Array<Content>
}

const scrollProps = {
  duration: theme.transitions.duration.standard,
  smooth: 'easeOutCubic'
}

const handleClickCard = (target:string) => {
  scroller.scrollTo(target, scrollProps)
}

const FAQ:React.FC<FAQProps> = (props) => {
  console.log('render FAQ')

  const contents = React.useMemo(() => {
    return (
      props.contents.map((content) => {
        return (
          {
            ...content,
            uuid: uuidv4(),
            items: content.items.map((item) => {
              return (
                {
                  uuid: uuidv4(),
                  ...item
                }
              )
            })
          }
        )
      })
    )
  }, [props.contents])

  const accordions: ScrollPagesProps['contents'] = React.useMemo(() => {
    return (
      contents.map((content, i) => {
        const ContentsBody = (
          <Element name={content.uuid} key={`faq-p-${content.uuid}`} >
            <ColumnPage text={content.subtitle}>
              <Suspense fallback={<></>}>
                <Accordions items={content.items}/>
              </Suspense>
            </ColumnPage>
          </Element>
        )
        return (
          {
            body: ContentsBody,
            bgColor: theme.colorSet[i % theme.colorSet.length]
          }
        )
      })
    )
  }, [contents])

  return (
    <React.Fragment>
      <StyledAppBar {...props.appbar}/>
      <ScrollPages contents={[
        {
          body: <Headline {...props.headline} cards={contents} onClickCard={handleClickCard}/>,
          bgColor: 'rgba(0,0,0,0)'
        },
        ...accordions
      ]} />
      <StyledFab alt='Scroll to Top' onClick={() => scroll.scrollToTop(scrollProps)}>
        <KeyboardArrowUpIcon fontSize='large'/>
      </StyledFab>
    </React.Fragment>
  )
}

export { FAQ }
