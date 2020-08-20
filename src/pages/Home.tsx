import { useTheme } from '@material-ui/core/styles'
import React from 'react'

import demo from '../assets/capture/demo/demo_mockup.webm'
import { Logo } from '../assets/static/synapse_logo'
import { PR } from '../organisms'
import { SynapseAppBar } from '../pages'

const Home = () => {
  const theme = useTheme()

  React.useEffect(() => {
    document.title = 'エスプール Synapse - データ分析プラットフォーム'
  }, [])

  return (
    <PR
      appbar={{
        logo: <Logo/>,
        fontcolor: theme.palette.primary.main,
        tools: <SynapseAppBar/>
      }}
      contents={
        [
          {
            subtitle: 'つなぐ、見える、伝わる。',
            body: `データ分析プラットフォーム
            「Synapse」
            `,
            image: demo
          }
          /*
          {
            subtitle: 'データをつなぐ、人とつなぐ。',
            body: `データはあるが、分散されて手間がかかる。フォーマットが違い分析できない。
            そんなデータを、Synapseで一つに。
            `,
            reverse: true,
            image: bigdata
          },
          {
            subtitle: '思いのままに。',
            body: `Synapseは直観的でインタラクティブなインターフェース。
              あなたの探求を妨げません。
            `,
            image: analytics
          }
          */
        ]
      }
    />
  )
}

export { Home }
