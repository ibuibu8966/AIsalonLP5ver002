'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function InstructorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const instructors = [
    {
      name: 'KIDD - AI・生成AIツール専門講師',
      description: '最新のAI技術とツールに精通し、実践的な活用方法を分かりやすく解説。常に最新トレンドをキャッチアップし、本当に使えるAI情報のみを厳選してお届けします。',
      specialties: [
        'AI・生成AIツールの使い方講習と最新動向の紹介',
        'ライブQ&Aとデモ・モックアプリの共有',
        '定期ライブ配信',
      ]
    },
    {
      name: 'R - プログラミング・開発実務講師',
      description: '元テックキャンプ講師として豊富な指導経験を持ち、現在は会社経営も手がけるプロフェッショナル。要件定義から本番デプロイまでの実務フローを、実際の開発を通じて指導します。',
      specialties: [
        'プロトタイプ開発のライブ解説',
        '開発環境構築から本番デプロイまで',
        'コードレビューと品質管理、実務レベルの開発フロー指導',
      ]
    }
  ]

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 luxury-title text-gray-800">
            実績豊富な講師陣があなたをサポート
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              className="luxury-card p-12 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-gold">{instructor.name}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{instructor.description}</p>
              <h4 className="text-xl font-semibold mb-4 text-gold">専門分野:</h4>
              <ul className="luxury-list text-gray-700 space-y-2">
                {instructor.specialties.map((specialty, i) => (
                  <li key={i}>{specialty}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 p-6 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-gray-600">
            ※「TECH CAMP」は株式会社divの登録商標です。本サロンは同社とは一切関係ありません。
          </p>
        </motion.div>
      </div>
    </section>
  )
}