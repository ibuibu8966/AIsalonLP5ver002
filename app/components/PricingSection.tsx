'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    'AI・生成AIツールの使い方講習',
    '最新動向の紹介とライブQ&A',
    'プログラミング基礎解説',
    'デモ・モックアプリの共有',
    '定期ライブ配信（週1回または月1回）',
    'アーカイブ視聴（過去の全配信）',
    'Discord質問し放題',
    'コードレビューサポート',
    '個別最適化アンケート',
    '学習ロードマップ提供',
  ]

  return (
    <section className="py-24 px-6 japanese-pattern" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 luxury-title text-gray-800">
            料金プラン
          </h2>
        </motion.div>

        <motion.div
          className="pricing-card p-12 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-serif text-4xl font-medium mb-6 text-gold">ベーシックプラン</h3>
          <div className="text-5xl md:text-6xl font-bold mb-8 text-gold">
            ¥2,980<span className="text-2xl">/月（税込）</span>
          </div>
          
          <h4 className="text-2xl font-semibold mb-8 text-gray-800">含まれるサービス:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              >
                <ul className="luxury-list text-gray-700">
                  <li>{service}</li>
                </ul>
              </motion.div>
            ))}
          </div>
          
          <p className="text-xl text-gray-700 mb-8">
            <strong>シンプルで手頃な価格で、充実したサポートを受けられます。</strong>
          </p>
          
          <button className="premium-btn rounded-lg text-xl px-16 py-6 text-white">
            今すぐ申し込む
          </button>
        </motion.div>
      </div>
    </section>
  )
}