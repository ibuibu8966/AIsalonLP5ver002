'use client'

import Link from 'next/link'

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-black text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-gold text-lg font-semibold mb-4">会社情報</h3>
            <p className="text-sm mb-2">株式会社SENRITSU</p>
            <p className="text-sm mb-2">大阪府東大阪市高殿町11-2</p>
            <p className="text-sm">カワショウビル2・3階</p>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-gold text-lg font-semibold mb-4">サービス</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleSmoothScroll(e, 'features')}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  特徴
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  onClick={(e) => handleSmoothScroll(e, 'curriculum')}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  カリキュラム
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  onClick={(e) => handleSmoothScroll(e, 'instructors')}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  講師紹介
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleSmoothScroll(e, 'pricing')}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  料金プラン
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, 'faq')}
                  className="hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-gold text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-sm mb-2">Email: senritsu@senritsu.site</p>
            <p className="text-sm mb-2">電話: 06-6781-0808</p>
            <p className="text-sm">Web: senritsu.site</p>
          </div>
        </div>

        {/* 法的情報リンク */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6">
            <Link
              href="/privacy"
              className="text-sm hover:text-gold transition-colors duration-300"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-sm hover:text-gold transition-colors duration-300"
            >
              利用規約
            </Link>
            <Link
              href="/commercial"
              className="text-sm hover:text-gold transition-colors duration-300"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500">
            © 2025 株式会社SENRITSU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
