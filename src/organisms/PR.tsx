import React from 'react'

import { RowPage, RowPageProps, ScrollPages, StyledAppBar, StyledAppBarProps } from '../molecules'
import { mainTheme as theme } from '../theme'

type PRProps = {
  appbar: StyledAppBarProps,
  contents: Array<RowPageProps>
}

const PR:React.FC<PRProps> = (props) => {
  console.log('render PR')
  return (
    <React.Fragment>
      <StyledAppBar {...props.appbar}/>
      <ScrollPages contents={React.useMemo(() => {
        return (
          props.contents.map((content, i) => {
            const scrollPagesProps = {
              body: <RowPage {...content} key={`PR-${i}`}/>,
              bgColor: (i % 2 === 0) ? theme.palette.background.paper : theme.palette.background.default
            }
            return scrollPagesProps
          })
        )
      }, [props.contents])} />
    </React.Fragment>
  )
}

export { PR }
export type { PRProps }
