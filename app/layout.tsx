import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI×プログラミングサロン - 未来のスキルを身につけ、キャリアを加速させよう',
  description: '明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？「学ぶ」で終わらせない実践的なサロンで、時代の転換点に立つあなたを支援します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}