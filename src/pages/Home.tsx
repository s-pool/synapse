import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import { Helmet } from 'react-helmet'

import bigdata from '../assets/image/bigdata.jpg'
import thumbnail from '../assets/image/demo_thumbnail.png'
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
      <Helmet>
        <title>エスプール Synapse - データ分析プラットフォーム</title>
        <meta name='description' content='つなぐ、見える、伝わる。データ分析プラットフォーム「Synapse」' />
      </Helmet>
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
              image: <Youtube url='https://youtu.be/lTgSW7qU3UA' light={thumbnail}/>
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { Home }
