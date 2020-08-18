import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import MetaTags from 'react-meta-tags'

import demo from '../assets/capture/tour/demo.gif'
import { Logo } from '../assets/static/synapse_logo'
import { Mockup } from '../molecules'
import { PR } from '../organisms'
import { SynapseAppBar } from '../pages'

const Home = () => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <MetaTags>
        <title>Synapse</title>
        <meta name='description' content='つなぐ、見える、伝わる。データ分析プラットフォーム「Synapse」' />
      </MetaTags>
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
              image: (
                <Mockup>
                  <img src={demo} alt='' height='auto' width='100%'/>
                </Mockup>
              )
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
    </React.Fragment>
  )
}

export { Home }
