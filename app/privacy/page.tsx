'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
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
            プライバシーポリシー
          </h1>
          <p className="text-center text-gold text-sm">Privacy Policy</p>
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
          <p className="text-sm text-gray-400 mb-8">
            最終更新日: 2025年10月30日 (v1.0)
          </p>

          <section className="mb-10">
            <p className="text-gray-300 leading-relaxed mb-6">
              株式会社SENRITSU(以下「当社」といいます)は、当社が提供する「AI×プログラミングサロン」(以下「本サービス」といいます)における個人情報の取扱いについて、以下のとおりプライバシーポリシー(以下「本ポリシー」といいます)を定めます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">1. 事業者情報</h2>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="mb-2">事業者名: 株式会社SENRITSU</p>
              <p className="mb-2">代表取締役: 加藤 大成</p>
              <p className="mb-2">所在地: 大阪府東大阪市高殿町11-2 カワショウビル2・3階</p>
              <p className="mb-2">電話番号: 07-3626-8645</p>
              <p>お問い合わせ先: senritsu@senritsu.site</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">2. 取得する個人情報</h2>
            <p className="mb-4">当社は、以下の個人情報を取得します。</p>
            <ul className="luxury-list space-y-2">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>決済情報(クレジットカード情報等)</li>
              <li>アカウント情報(ID、パスワード等)</li>
              <li>サービス利用履歴</li>
              <li>IPアドレス、Cookie情報等のアクセス情報</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">3. 利用目的</h2>
            <p className="mb-4">当社は、取得した個人情報を以下の目的で利用します。</p>
            <ul className="luxury-list space-y-2">
              <li>本サービスの提供、維持、改善のため</li>
              <li>ユーザー認証およびアカウント管理のため</li>
              <li>料金の請求および決済処理のため</li>
              <li>お問い合わせへの対応のため</li>
              <li>メールマガジンや各種通知の配信のため</li>
              <li>サービスの不正利用防止のため</li>
              <li>システムの保守・運用のため</li>
              <li>法令に基づく対応のため</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">4. 第三者への提供</h2>
            <p className="mb-4">
              当社は、以下の場合を除き、ユーザーの同意なく第三者に個人情報を提供しません。
            </p>
            <ul className="luxury-list space-y-2">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              ※ 決済処理のため、UnivaPayに対して必要な個人情報を提供します。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">5. 個人情報の国際的な移転</h2>
            <p className="leading-relaxed">
              現時点において、当社は個人情報を国外に移転する予定はありません。今後、国外への移転が必要となった場合には、移転先の国名、移転の目的、移転する情報の種類、移転先における安全管理措置等を明示した上で、必要に応じて本ポリシーを更新いたします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">6. 安全管理措置</h2>
            <p className="mb-4">当社は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のため、以下の措置を講じます。</p>
            <ul className="luxury-list space-y-2">
              <li>アクセス制限および操作ログの記録</li>
              <li>個人情報を取り扱う従業員に対する教育・研修の実施</li>
              <li>個人情報の暗号化</li>
              <li>その他、合理的な安全対策の実施</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">7. Cookieおよび類似技術の使用</h2>
            <p className="leading-relaxed mb-4">
              当社は、本サービスの利便性向上および不正利用防止のため、Cookieおよび類似の技術を使用する場合があります。ユーザーはブラウザの設定によりCookieを無効化することができますが、その場合、本サービスの一部機能が利用できなくなる可能性があります。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">8. 個人情報の開示等の請求</h2>
            <p className="mb-4">
              ユーザーは、当社に対して、個人情報の開示、訂正、追加、削除、利用停止等を請求することができます。請求方法については、以下のお問い合わせ先までご連絡ください。
            </p>
            <div className="pl-4 border-l-2 border-gold/30">
              <p className="mb-2">お問い合わせ先: senritsu@senritsu.site</p>
              <p className="text-sm text-gray-400">※ 回答までに15日程度を要する場合があります。</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">9. 未成年者の利用について</h2>
            <p className="leading-relaxed">
              本サービスは未成年者の利用を想定していません。未成年者が本サービスを利用することはできません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">10. プライバシーポリシーの変更</h2>
            <p className="leading-relaxed">
              当社は、法令の変更や事業内容の変更等に伴い、本ポリシーを変更する場合があります。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
            </p>
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
