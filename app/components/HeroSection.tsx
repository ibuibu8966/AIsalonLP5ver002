'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
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
    <section className="hero-section text-white py-32 px-6 text-center relative overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showReverse ? 'opacity-0' : 'opacity-100'}`}
        src="/videos/hero-background.mp4"
        muted
        playsInline
      />
      <video
        ref={reverseVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showReverse ? 'opacity-100' : 'opacity-0'}`}
        src="/videos/hero-background.mp4"
        muted
        playsInline
        style={{ transform: 'scaleX(-1)' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight">
          <span className="block sm:inline">AI×プログラミング</span>
          <span className="block sm:inline">サロン</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-light mb-4 text-gold tracking-wide px-4 sm:px-0">
          <span className="block sm:inline">未来のスキルを身につけ、</span>
          <span className="block sm:inline">キャリアを加速させよう</span>
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12 mb-16" />
        <p className="text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-4xl mx-auto opacity-90 px-4 sm:px-6">
          <span className="block mb-2">明日の業務から使える"武器"を手に入れて、</span>
          <span className="block mb-2">働き方を変えてみませんか？</span>
          <span className="block">「学ぶ」で終わらせない実践的なサロンで、</span>
          <span className="block">時代の転換点に立つあなたを支援します。</span>
        </p>
      </motion.div>
    </section>
  )
}