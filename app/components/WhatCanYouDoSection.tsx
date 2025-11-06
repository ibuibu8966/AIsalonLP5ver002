'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhatCanYouDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { icon: '👨‍💼', title: '経理×AI', description: '仕訳の自動化、決算書類の作成支援、経費精算の効率化' },
    { icon: '👩‍💻', title: '転売×AI', description: '商品リサーチの自動化、価格動向分析、出品作業の効率化' },
    { icon: '✍️', title: 'アフィリエイト×AI', description: 'コンテンツ生成、SEO分析、案件選定の自動化' },
  ]

  return (
    <section id="curriculum" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/ai-chip-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 text-white leading-tight px-4 sm:px-0">
            AIで実際に何ができるようになるの？
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            AIは単なるツールではありません。<span className="bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent font-semibold">あなたの能力を何倍にも拡張する武器</span>です。
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            className="luxury-card p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">プロンプト設計をマスターすると</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="luxury-list text-sm sm:text-base md:text-lg text-gray-600 space-y-2 md:space-y-3">
                <li>要約・抽出・分類・仕様化の型とチェックリストを活用</li>
                <li>議事録の自動化とポイント抽出</li>
                <li>データの整理と分析レポート自動生成</li>
                <li>仕様書の下書きと要件整理の効率化</li>
              </ul>
              <ul className="luxury-list text-sm sm:text-base md:text-lg text-gray-600 space-y-2 md:space-y-3">
                <li>楽天の注文履歴を自動抽出・整理</li>
                <li>iPhone明細PDFの自動保存＆文字起こし</li>
                <li>Gmail請求書の自動保存と分類</li>
                <li>会議内容の自動要約とタスク抽出</li>
              </ul>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="luxury-card p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="feature-icon text-white text-2xl mb-6">{skill.icon}</div>
                <h4 className="font-serif text-xl font-medium mb-4 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">{skill.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-tight sm:leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}