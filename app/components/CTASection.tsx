'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 luxury-title text-gray-800">
            結果が出る学びを、今日から。
          </h2>
          <p className="text-2xl font-semibold mb-8 text-gold">
            AI×プログラミングで、あなたのキャリアを次のレベルへ。
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            「学んだけど使えない」「時間だけが過ぎていく」そんな経験はもう終わりです。<br />
            このサロンでは、<strong>学んだその日から実践できる</strong>実用的なスキルを身につけられます。
            週3〜5時間の学習で、"動く成果物"が確実に積み上がっていきます。
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            作業時間の削減・社内評価アップ・副業の受注力向上・ポートフォリオ充実を現実のものにしましょう。
          </p>
          <p className="text-2xl font-semibold mb-12 text-gray-800">
            <strong>今始めれば、3ヶ月後には周りから頼られる存在になっています。</strong>
          </p>
          <button className="premium-btn rounded-lg text-xl px-16 py-6 text-white">
            今すぐサロンに参加する
          </button>
        </motion.div>
      </div>
    </section>
  )
}