'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function WhyNowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const videoRef = useRef<HTMLVideoElement>(null)
  const reverseVideoRef = useRef<HTMLVideoElement>(null)
  const [showReverse, setShowReverse] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const reverseVideo = reverseVideoRef.current
    if (!video || !reverseVideo) return

    const handleVideoEnded = () => {
      setShowReverse(true)
      reverseVideo.currentTime = 0
      reverseVideo.play()
    }

    const handleReverseVideoEnded = () => {
      setShowReverse(false)
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('ended', handleVideoEnded)
    reverseVideo.addEventListener('ended', handleReverseVideoEnded)

    video.play().catch((error) => {
      console.log('Video autoplay failed:', error)
    })

    return () => {
      video.removeEventListener('ended', handleVideoEnded)
      reverseVideo.removeEventListener('ended', handleReverseVideoEnded)
    }
  }, [])

  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showReverse ? 'opacity-0' : 'opacity-100'}`}
        src="/videos/why-now-bg.mp4"
        muted
        playsInline
      />
      <video
        ref={reverseVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showReverse ? 'opacity-100' : 'opacity-0'}`}
        src="/videos/why-now-bg.mp4"
        muted
        playsInline
        style={{ transform: 'scaleX(-1)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 text-white leading-tight px-4 sm:px-0">
            なぜ今、AIとプログラミングなのか
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            時代の転換点に立つ今、準備をするかしないかで大きな差が生まれています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">変化の波が押し寄せている</h3>
            <ul className="luxury-list text-sm sm:text-base md:text-lg text-gray-300 space-y-3 md:space-y-4">
              <li><strong>AI革命の到来</strong>: ChatGPTをはじめとする生成AIが業務を劇的に変えている</li>
              <li><strong>自動化のニーズ</strong>: 単純作業を自動化し、創造的な仕事に集中する時代へ</li>
              <li><strong>スキル格差の拡大</strong>: AI・プログラミングを使える人とそうでない人の差が急拡大</li>
              <li><strong>市場価値の向上</strong>: 実装力とAI活用スキルを持つ人材への需要が急上昇</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="luxury-card p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-6xl text-gold mb-6">🎯</div>
              <h4 className="font-serif text-2xl font-medium mb-4">今学び始めれば</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                数年後には圧倒的なアドバンテージを手にできます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}