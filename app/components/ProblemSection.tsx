'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    { icon: '🤖', text: 'AIツールは知っているけど、うまく使いこなせない' },
    { icon: '💻', text: 'プログラミングに興味はあるけど、何から始めればいいかわからない' },
    { icon: '⚡', text: '効率化したいけど、具体的な方法が見つからない' },
  ]

  return (
    <section className="py-24 px-6 japanese-pattern" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 luxury-title text-gray-800">
            毎日の作業、もっと楽にできるはずなのに...
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            毎日同じ作業の繰り返しで時間を取られていませんか？
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="luxury-card p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="feature-icon text-white text-2xl mb-6">
                <span>{problem.icon}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold text-gray-800 mb-8">
            そんなあなたのために、「学ぶ」で終わらせない実践的なサロンを用意しました。
          </p>
          <button className="premium-btn rounded-lg text-lg px-12 py-4 text-white">
            今すぐ詳細を確認する
          </button>
        </motion.div>
      </div>
    </section>
  )
}