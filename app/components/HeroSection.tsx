'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="hero-section text-white py-32 px-6 text-center relative bg-gradient-to-br from-charcoal to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
          AI×プログラミングサロン
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 text-gold tracking-wide">
          未来のスキルを身につけ、キャリアを加速させよう
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12 mb-16" />
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto opacity-90">
          明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？<br />
          「学ぶ」で終わらせない実践的なサロンで、時代の転換点に立つあなたを支援します。
        </p>
      </motion.div>
    </section>
  )
}