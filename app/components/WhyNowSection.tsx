'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyNowSection() {
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
            なぜ今、AIとプログラミングなのか
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            時代の転換点に立つ今、準備をするかしないかで大きな差が生まれています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl font-medium mb-8 text-gold">変化の波が押し寄せている</h3>
            <ul className="luxury-list text-lg text-gray-700 space-y-4">
              <li><strong>AI革命の到来</strong>: ChatGPTをはじめとする生成AIが業務を劇的に変えている</li>
              <li><strong>自動化のニーズ</strong>: 単純作業を自動化し、創造的な仕事に集中する時代へ</li>
              <li><strong>スキル格差の拡大</strong>: AI・プログラミングを使える人とそうでない人の差が急拡大</li>
              <li><strong>市場価値の向上</strong>: 実装力とAI活用スキルを持つ人材への需要が急上昇</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="luxury-card p-12 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-6xl text-gold mb-6">🚀</div>
              <h4 className="font-serif text-2xl font-medium mb-4">今学び始めれば</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                数年後には圧倒的なアドバンテージを手にできます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}