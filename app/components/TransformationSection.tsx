'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TransformationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/robot-hand.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 text-white px-4 sm:px-0">
            サロンに入ると、あなたはどう変わる？
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            <span className="font-semibold">30日後、90日後のあなたは今とは全く違うレベルにいます</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            className="luxury-card p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">30日後の到達目標</h3>
            <ul className="luxury-list space-y-2 sm:space-y-3 md:space-y-4">
              <li>日常タスクの自動化システムを1つ完成</li>
              <li>AI議事録システムの構築と運用開始</li>
              <li>プロンプト設計の基本パターンを習得</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="luxury-card p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">90日後の到達目標</h3>
            <ul className="luxury-list space-y-2 sm:space-y-3 md:space-y-4">
              <li>社内で使える実用的なツールを1本公開</li>
              <li>複数の自動化システムを組み合わせた業務フロー構築</li>
              <li>副業案件に対応できるスキルレベルに到達</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="luxury-card p-12 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-3xl font-medium mb-8 text-center text-gold">得られる具体的な変化</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="luxury-list space-y-2 sm:space-y-3 md:space-y-4">
              <li><strong>時間の大幅削減</strong>: 毎日2-3時間の時短を実現</li>
              <li><strong>社内評価アップ</strong>: 効率化の提案と実装で存在感向上</li>
            </ul>
            <ul className="luxury-list space-y-2 sm:space-y-3 md:space-y-4">
              <li><strong>副業の受注力向上</strong>: 実績とポートフォリオの充実</li>
              <li><strong>将来への投資</strong>: AI時代に必要不可欠なスキルセット獲得</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}