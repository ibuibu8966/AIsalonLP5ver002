'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-pulse leading-tight">
            <span className="block sm:inline">今すぐ始めて、</span>
            <span className="block sm:inline">3ヶ月後の成長した</span>
            <span className="block sm:inline">自分に出会いましょう。</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            決済は <strong>ロボットペイ</strong> を利用します。
            お申し込み完了後、Discordの招待リンクとウェルカムガイドをお送りします。
          </p>
          <button className="premium-btn mb-8 text-white text-base sm:text-lg md:text-xl lg:text-2xl">
            お申し込みはこちら
          </button>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}