import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import MetaTags from 'react-meta-tags'

import bigdata from '../assets/image/bigdata.jpg'
import demo from '../assets/image/demo1.png'
import mockup from '../assets/image/mockup.png'
import mockup2 from '../assets/image/mockup2.png'
import mockup3 from '../assets/image/mockup3.png'
import { Gallery, Youtube } from '../molecules'
import { PR } from '../organisms'
import { appbarProps } from '../pages'

const Home = () => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <MetaTags>
        <title>エスプール Synapse - データ分析プラットフォーム</title>
        <meta name='description' content='つなぐ、見える、伝わる。データ分析プラットフォーム「Synapse」' />
      </MetaTags>
      <PR
        appbar={{
          ...appbarProps,
          fontcolor: theme.palette.primary.main
        }}
        contents={
          [
            {
              subtitle: 'つなぐ、見える、伝わる。',
              body: `データ分析プラットフォーム
            「Synapse」
            `,
              image: <Gallery items={[mockup, mockup2, mockup3]} showBullets={false} showNav={false} autoPlay onClick={(e:any) => { e.stopPropagation() }}/>
            },
            {
              subtitle: 'データをつなぐ、人とつなぐ。',
              body: `データはあるが、散らばっていて手間がかかる。
            フォーマットが違って分析できない。
            そんなデータを、Synapseで一つに。
            `,
              reverse: true,
              split: [6, 6],
              image: <img src={bigdata} height='auto' width='100%' alt=''/>
            },
            {
              subtitle: '思いのままに。',
              body: `Synapseは直観的でインタラクティブなインターフェース。
              あなたの探求を妨げません。
            `,
              image: <Youtube url='https://youtu.be/lTgSW7qU3UA' light={demo}/>
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { Home }
