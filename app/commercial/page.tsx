'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function CommercialTransactions() {
  return (
    <main className="min-h-screen bg-black text-gray-300">
      {/* ヘッダー */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 text-center">
            特定商取引法に基づく表記
          </h1>
          <p className="text-center text-gold text-sm">
            Specified Commercial Transaction Act
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
        </motion.div>
      </div>

      {/* コンテンツ */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="luxury-card p-8 md:p-12 mb-8">
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">販売事業者</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">株式会社SENRITSU</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">運営統括責任者</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">代表取締役</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">所在地</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">〒577-0035</p>
              <p className="text-gray-300">大阪府東大阪市高殿町11-2</p>
              <p className="text-gray-300">カワショウビル2・3階</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">お問い合わせ先</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-2">
                Email: senritsu@senritsu.site
              </p>
              <p className="text-gray-300 mb-2">電話番号: 06-6781-0808</p>
              <p className="text-gray-300">ウェブサイト: senritsu.site</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              サービス名・商品名
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">AI×プログラミングサロン</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">販売価格</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-2">月額2,980円(税込)</p>
              <p className="text-sm text-gray-400">
                ※ 表示価格はすべて税込価格です。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              販売価格以外でお客様に発生する金銭
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">
                インターネット接続料金、通信料金等はお客様のご負担となります。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">支払方法</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">
                クレジットカード決済(UnivaPayクレジットカード決済)
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">支払時期</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-2">
                初回:お申込み時に初月分を決済
              </p>
              <p className="text-gray-300">
                継続:毎月1日に当月分を自動決済
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              サービス・商品の引渡時期
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">
                決済完了後、24時間以内にサービスをご利用いただけます。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">返品・交換</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-4">
                デジタルコンテンツという商品の性質上、サービス提供後の返品・返金は承っておりません。
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-gold">解約について:</strong>
              </p>
              <p className="text-gray-300 mb-2">
                解約を希望される場合は、毎月15日までに所定のフォームよりご連絡ください。
              </p>
              <p className="text-gray-300 mb-2">
                16日以降のご連絡の場合、翌月分まで課金されます。
              </p>
              <p className="text-gray-300">
                月の途中での解約および日割り計算による返金は行いません。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              最低契約期間・契約期間
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">最低契約期間の定めはありません。</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              無料トライアル・キャンペーン割引
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">
                無料トライアルおよびキャンペーン割引は提供しておりません。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              クーリング・オフ
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300">
                本サービスは、特定商取引法に定めるクーリング・オフの対象外となります。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">動作環境</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-2">
                インターネット接続が可能な環境
              </p>
              <p className="text-gray-300 mb-2">
                推奨ブラウザ: Google Chrome、Safari、Microsoft Edge(最新版)
              </p>
              <p className="text-sm text-gray-400">
                ※ 動作環境を満たしていても、すべての環境での動作を保証するものではありません。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">
              その他の特約事項
            </h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="text-gray-300 mb-2">
                ・ 本サービスは未成年者の利用を想定していません。
              </p>
              <p className="text-gray-300 mb-2">
                ・ サービス内容は予告なく変更される場合があります。
              </p>
              <p className="text-gray-300">
                ・
                詳細については利用規約をご確認ください。
              </p>
            </div>
          </section>
        </div>

        {/* ホームに戻るボタン */}
        <div className="text-center">
          <Link href="/" className="premium-btn inline-block text-black">
            ホームに戻る
          </Link>
        </div>
      </motion.div>

      <Footer />
    </main>
  )
}
