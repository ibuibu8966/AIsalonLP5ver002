'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 luxury-title text-gray-800">
            今すぐ始めて、3ヶ月後の成長した自分に出会いましょう。
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            決済は <strong>ロボットペイ</strong> を利用します。
            お申し込み完了後、Discordの招待リンクとウェルカムガイドをお送りします。
          </p>
          <button className="premium-btn rounded-lg text-2xl px-20 py-8 mb-8 text-white">
            お申し込みはこちら
          </button>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}