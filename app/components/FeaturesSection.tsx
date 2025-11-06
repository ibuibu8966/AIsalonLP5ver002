'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      number: '1',
      title: 'AI・生成AI専門カリキュラム',
      description: '最新ツールの"正しい使い方"を厳選し、実務で再現できる型を配布',
      goal: '30日で「日常タスクの自動化」＋「議事録のAI化」を1つ完成',
      basics: [
        'プロンプト設計チェックリスト（要約／抽出／分類／仕様化）',
        'ツール用途マップと比較（検索・要約・表変換・議事録化）',
        '実例：楽天の注文履歴抽出／iPhone明細PDFの自動保存＆文字起こし',
        'そのまま流用できるテンプレ（データ抽出・要件整理・仕様書下書き）',
      ],
      specialized: [
        { title: '経理×AI', content: '仕訳自動化、決算書類作成支援、経費精算効率化' },
        { title: '転売×AI', content: '商品リサーチ自動化、価格動向分析、出品作業効率化' },
        { title: 'アフィリエイト×AI', content: 'コンテンツ生成、SEO分析、案件選定自動化' },
      ]
    },
    {
      number: '2',
      title: '本格プログラミング実装',
      description: '基礎→API連携→運用まで、"動かし続ける"実装力を獲得',
      goal: '90日で社内/副業向けのツールを1本公開',
      skills: [
        'GAS/JavaScript/Pythonでの自動化とAPI連携（認証・非同期）',
        '例外処理／ログ／通知（Slack/メール）まで含めた運用設計',
        'スクレイピング→シート/DB→可視化（定期実行・失敗時リトライ）',
        'コードレビューによる品質向上とベストプラクティス習得',
      ]
    },
    {
      number: '3',
      title: 'コミュニティ学習環境',
      description: 'Discordで"詰まりを最短で解消"し、成果物を積み上げる',
      goal: '毎週の提出物をポートフォリオ化',
      support: [
        'チャンネル例：#質問箱／#自動化レシピ／#制作ギャラリー／#ライブ告知',
        '専門分野チャンネル：#経理AI／#転売AI／#アフィリエイトAI（順次開設）',
        'ライブ＋アーカイブでいつでも復習、質問し放題',
        'コードレビュー（可読性・保守性・例外処理・運用設計）',
        '成果テンプレ＆事例ライブラリで再利用性を強化',
      ]
    }
  ]

  return (
    <section id="features" className="py-32 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/features-bg.jpg)',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 text-white px-4 sm:px-0">
            サロンの3つの特徴
          </h2>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="luxury-card p-6 sm:p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="feature-icon text-white text-xl font-bold mr-6">{feature.number}</div>
                <h3 className="font-serif text-base sm:text-lg md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">{feature.title}</h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 md:mb-6 leading-tight sm:leading-relaxed">{feature.description}</p>
              
              {feature.basics && (
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-gold">基礎カリキュラム:</h4>
                    <ul className="luxury-list space-y-2">
                      {feature.basics.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {feature.specialized && (
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-gold">専門分野カリキュラム（順次展開予定）:</h4>
                      <ul className="luxury-list space-y-2">
                        {feature.specialized.map((item, i) => (
                          <li key={i}>
                            <strong>{item.title}</strong>: {item.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {feature.skills && (
                <div className="space-y-6">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-gold">学べること:</h4>
                  <ul className="luxury-list space-y-3">
                    {feature.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {feature.support && (
                <div className="space-y-6">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-gold">サポート内容:</h4>
                  <ul className="luxury-list space-y-3">
                    {feature.support.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8 p-6 bg-gradient-to-r from-black/50 to-black/30 rounded-2xl backdrop-blur-sm border border-gold/30">
                <p className="text-lg font-semibold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">到達目安: {feature.goal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}