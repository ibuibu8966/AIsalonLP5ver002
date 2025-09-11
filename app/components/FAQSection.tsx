'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: 'プログラミング初心者でも参加できますか？',
      answer: 'はい、初心者歓迎です。基礎から丁寧に解説し、個別サポートも充実しています。'
    },
    {
      question: 'どのような開発環境が必要ですか？',
      answer: 'Windows 11またはmacOS Catalina以降、メモリ8GB以上を推奨します。'
    },
    {
      question: 'サポート体制はどのようになっていますか？',
      answer: 'Discordでの質問対応、定期ライブ配信、アーカイブ視聴が可能です。個別サポートも充実しています。'
    },
    {
      question: '途中参加でもついていけますか？',
      answer: '可能です。アーカイブ視聴と個別ロードマップでキャッチアップを支援します。'
    },
    {
      question: 'コードレビューはどこまで見てもらえますか？',
      answer: '可読性・例外処理・保守性・運用設計まで確認します。'
    },
    {
      question: '忙しくて時間が取れない場合は？',
      answer: 'アーカイブ視聴で自分のペースで学習できます。週3-5時間程度の時間確保をおすすめしています。'
    }
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
            よくある質問
          </h2>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="luxury-card p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gold">Q. {faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">A. {faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}