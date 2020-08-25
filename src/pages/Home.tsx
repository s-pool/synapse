import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'

import bigdata from '../assets/image/bigdata.jpg'
import demo from '../assets/image/demo_mockup.webm'
import { Logo } from '../assets/logo/synapse_logo'
import { PR } from '../organisms'

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
        buttons: [
          {
            component: Link,
            to: '/',
            children: 'HOME'
          },
          {
            component: Link,
            to: '/faq',
            children: 'FAQ'
          },
          {
            component: Link,
            to: '/demo',
            children: 'DEMO'
          }
        ]
      }}
      contents={
        [
          {
            subtitle: 'つなぐ、見える、伝わる。',
            body: `データ分析プラットフォーム
            「Synapse」
            `,
            image: <video src={demo} height='auto' width='100%' autoPlay loop/>
          },
          {
            subtitle: 'データをつなぐ、人とつなぐ。',
            body: `データはあるが、分散されて手間がかかる。
            フォーマットが違って分析できない。
            そんなデータを、Synapseで一つに。
            `,
            reverse: true,
            split: [6, 6],
            image: <img src={bigdata} height='auto' width='100%' alt=''/>
          }
          /*
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
