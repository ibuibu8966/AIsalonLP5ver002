'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhatCanYouDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { icon: '📊', title: '経理×AI', description: '仕訳の自動化、決算書類の作成支援、経費精算の効率化' },
    { icon: '🛒', title: '転売×AI', description: '商品リサーチの自動化、価格動向分析、出品作業の効率化' },
    { icon: '📝', title: 'アフィリエイト×AI', description: 'コンテンツ生成、SEO分析、案件選定の自動化' },
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
            AIで実際に何ができるようになるの？
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            AIは単なるツールではありません。<span className="text-gold font-semibold">あなたの能力を何倍にも拡張する武器</span>です。
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            className="luxury-card p-12 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl font-medium mb-8 text-gold">プロンプト設計をマスターすると</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="luxury-list text-lg text-gray-700 space-y-3">
                <li>要約・抽出・分類・仕様化の型とチェックリストを活用</li>
                <li>議事録の自動化とポイント抽出</li>
                <li>データの整理と分析レポート自動生成</li>
                <li>仕様書の下書きと要件整理の効率化</li>
              </ul>
              <ul className="luxury-list text-lg text-gray-700 space-y-3">
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
                className="luxury-card p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="feature-icon text-white text-2xl mb-6">{skill.icon}</div>
                <h4 className="font-serif text-xl font-medium mb-4 text-gold">{skill.title}</h4>
                <p className="text-gray-700 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}