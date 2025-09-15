'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    { icon: '🤔', text: 'AIツールは知っているけど、うまく使いこなせない' },
    { icon: '🙋', text: 'プログラミングに興味はあるけど、何から始めればいいかわからない' },
    { icon: '💡', text: '効率化したいけど、具体的な方法が見つからない' },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white leading-tight px-4 sm:px-0">
            <span className="block sm:inline">毎日の作業、</span>
            <span className="block sm:inline">もっと楽にできるはずなのに...</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            <span className="block sm:inline">毎日同じ作業の繰り返しで</span>
            <span className="block sm:inline">時間を取られていませんか？</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="luxury-card p-6 sm:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="feature-icon text-white text-2xl mb-6">
                <span>{problem.icon}</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight sm:leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold text-white mb-8">
            そんなあなたのために、「学ぶ」で終わらせない実践的なサロンを用意しました。
          </p>
          <button className="premium-btn text-white">
            今すぐ詳細を確認する
          </button>
        </motion.div>
      </div>
    </section>
  )
}