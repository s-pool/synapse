import { blueGrey, grey } from '@material-ui/core/colors'
import React from 'react'
import MetaTags from 'react-meta-tags'

import bookmark from '../assets/capture/apps/bookmark.gif'
import navi from '../assets/capture/apps/navi.gif'
import table from '../assets/capture/apps/table.gif'
import date from '../assets/capture/graphs/date.gif'
import exclude from '../assets/capture/graphs/exclude.gif'
import filter from '../assets/capture/graphs/filter.gif'
import define from '../assets/capture/others/define.gif'
import gamen from '../assets/capture/tour/gamen.png'
import kihon from '../assets/capture/tour/kihon.gif'
import clear from '../assets/capture/trouble/clear.gif'
import light from '../assets/icon/emoji_objects.svg'
import help from '../assets/icon/help.svg'
import chart from '../assets/icon/insert_chart.svg'
import flag from '../assets/icon/outlined_flag.svg'
import mouth from '../assets/icon/pest_control_rodent.svg'
import apps from '../assets/icon/touch_app.svg'
import { Logo } from '../assets/static/synapse_logo'
import { FAQ } from '../organisms'
import { SynapseAppBar } from '../pages'

const FAQEC = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Synapse | FAQ</title>
        <meta name='description' content='Synapseの操作方法について、よくある質問と回答。' />
      </MetaTags>
      <FAQ
        appbar={{
          logo: <Logo/>,
          fontcolor: grey[50],
          tools: <SynapseAppBar/>
        }}
        headline={{
          text: 'FAQ',
          background: {
            color: blueGrey[200]
          },
          fluid: true
        }}
        contents={
          [
            {
              subtitle: 'はじめに',
              image: flag,
              items: [
                {
                  summary: 'Synapseとは',
                  details: [
                    'Synapseは「つなぐ、見える、伝わる。」をコンセプトにしたBIツールです。',
                    '散らばったデータをつなぎ、可視化することで、人とデータをつなぎ、経営判断に役立てることができます。',
                    '悪い兆候の検出や、データサイエンティストによる分析など、今後さらなる拡張が予定されています。'
                  ]
                },
                {
                  summary: '基本操作',
                  details: [
                    'Synapseは直観的でインタラクティブな操作を提供します。',
                    'グラフにホバーすることで詳細が表示され、クリックするとその項目でフィルターをかけることができます。',
                    kihon
                  ]
                },
                {
                  summary: '画面構成',
                  details: [
                    'Synapseの画面はこのようになっています。',
                    '①は現在のフィルター、②でページ切り替え、③はフィルター操作パネルです。',
                    gamen
                  ]
                }
              ]
            },
            {
              subtitle: 'アプリ操作',
              image: apps,
              items: [
                {
                  summary: '別のページを見たい',
                  details: [
                    '右上の矢印ボタン、またはページ名をクリックすると、表示するページを選択できます。',
                    navi
                  ]
                },
                {
                  summary: 'グラフではなく表を見たい',
                  details: [
                    'グラフを右クリック -> データを表示を選択すると、テーブル表示に切り替わります。',
                    table
                  ]
                },
                {
                  summary: '条件を比較したい',
                  details: [
                    '比較したい条件を選択し、右上のブックマークボタンからブックマークを作成します。',
                    'ブックマークを選択することで、条件を切り替えて比較することができます。',
                    bookmark
                  ]
                }
              ]
            },
            {
              subtitle: 'グラフ操作',
              image: chart,
              items: [
                {
                  summary: 'ある商品の売上を見たい',
                  details: [
                    'ページ上部のフィルターパネルから絞り込みを行うことができます。',
                    'また、グラフの項目をクリックすることでも選択ができます。',
                    filter
                  ]
                },
                {
                  summary: '過去3か月のデータを確認したい',
                  details: [
                    '年月をクリックしたままドラッグすることで、範囲選択ができます。',
                    'さらに、選択した範囲をドラッグすることで、範囲の移動も可能です。',
                    date
                  ]
                },
                {
                  summary: 'リピート数0以外の顧客を選択したい',
                  details: [
                    '除外したい条件を選択後、上の選択バーをクリックします。',
                    'メニュー -> 除外値を選択で、最初に選択していた条件以外でフィルターがかかります。',
                    exclude
                  ]
                }
              ]
            },
            {
              subtitle: 'トラブルシューティング',
              image: help,
              items: [
                {
                  summary: 'グラフに表示されるデータが少なくなってしまった',
                  details: [
                    'ページ上部の選択バーをご確認ください。',
                    '×ボタンで選択状態を解除します。',
                    clear
                  ]
                },
                {
                  summary: 'グラフが勝手に動いている',
                  details: [
                    '同じアカウントで別のユーザーがグラフを操作した場合、全てのユーザー間でグラフが同期されます。'
                  ]
                }
              ]
            },
            {
              subtitle: 'その他',
              image: light,
              items: [
                {
                  summary: '数値の定義を知りたい',
                  details: [
                    'グラフ上部のホバーメニュー -> 詳細を表示で、簡単な説明を見ることができます。',
                    '定義書でより詳しい情報が見られます。',
                    define
                  ]
                },
                {
                  summary: '会議でグラフを共有したい',
                  details: [
                    '同じアカウントで別のユーザーがグラフを操作した場合、全てのユーザー間でグラフが同期されます。',
                    'プレゼンテータの着眼点に合わせてグラフが動くことで、参加者に言いたいことが伝えられます。'
                  ]
                }
              ]
            },
            {
              subtitle: 'COMING SOON...',
              image: mouth,
              items: [

              ]
            }
          ]
        }
      />
    </React.Fragment>
  )
}

export { FAQEC }
