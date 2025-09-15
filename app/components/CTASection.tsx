'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light mb-6 md:mb-8 text-white leading-tight">
            結果が出る学びを、今日から。
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent px-4 sm:px-0">
            <span className="block sm:inline">AI×プログラミングで、</span>
            <span className="block sm:inline">あなたのキャリアを次のレベルへ。</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 px-4 sm:px-0">
            「学んだけど使えない」「時間だけが過ぎていく」そんな経験はもう終わりです。<br />
            このサロンでは、<strong>学んだその日から実践できる</strong>実用的なスキルを身につけられます。
            週3〜5時間の学習で、"動く成果物"が確実に積み上がっていきます。
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 px-4 sm:px-0">
            作業時間の削減・社内評価アップ・副業の受注力向上・ポートフォリオ充実を現実のものにしましょう。
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 md:mb-12 text-white px-4 sm:px-0">
            <strong>今始めれば、3ヶ月後には周りから頼られる存在になっています。</strong>
          </p>
          <button className="premium-btn text-white">
            今すぐサロンに参加する
          </button>
        </motion.div>
      </div>
    </section>
  )
}