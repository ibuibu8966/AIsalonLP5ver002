'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TransformationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            サロンに入ると、あなたはどう変わる？
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold">30日後、90日後のあなたは今とは全く違うレベルにいます</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="luxury-card p-12 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl font-medium mb-8 text-gold">30日後の到達目標</h3>
            <ul className="luxury-list text-lg text-gray-700 space-y-4">
              <li>日常タスクの自動化システムを1つ完成</li>
              <li>AI議事録システムの構築と運用開始</li>
              <li>プロンプト設計の基本パターンを習得</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="luxury-card p-12 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-3xl font-medium mb-8 text-gold">90日後の到達目標</h3>
            <ul className="luxury-list text-lg text-gray-700 space-y-4">
              <li>社内で使える実用的なツールを1本公開</li>
              <li>複数の自動化システムを組み合わせた業務フロー構築</li>
              <li>副業案件に対応できるスキルレベルに到達</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="luxury-card p-12 rounded-lg mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-3xl font-medium mb-8 text-center text-gold">得られる具体的な変化</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="luxury-list text-lg text-gray-700 space-y-4">
              <li><strong>時間の大幅削減</strong>: 毎日2-3時間の時短を実現</li>
              <li><strong>社内評価アップ</strong>: 効率化の提案と実装で存在感向上</li>
            </ul>
            <ul className="luxury-list text-lg text-gray-700 space-y-4">
              <li><strong>副業の受注力向上</strong>: 実績とポートフォリオの充実</li>
              <li><strong>将来への投資</strong>: AI時代に必要不可欠なスキルセット獲得</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}