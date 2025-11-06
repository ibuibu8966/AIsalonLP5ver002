'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function TermsOfService() {
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
            利用規約
          </h1>
          <p className="text-center text-gold text-sm">Terms of Service</p>
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
              この利用規約(以下「本規約」といいます)は、株式会社SENRITSU(以下「当社」といいます)が提供する「AI×プログラミングサロン」(以下「本サービス」といいます)の利用条件を定めるものです。本サービスをご利用いただく際には、本規約に同意いただいたものとみなします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第1条(適用)</h2>
            <ol className="luxury-list space-y-2">
              <li>本規約は、本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
              <li>当社が本サービス上で掲載する本サービス利用に関するルール等は、本規約の一部を構成するものとします。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第2条(利用登録)</h2>
            <ol className="luxury-list space-y-2">
              <li>利用登録の申請者は、本規約を遵守することに同意し、当社が定める方法により利用登録を申請します。</li>
              <li>当社は、申請者が以下のいずれかの事由に該当すると判断した場合、利用登録を承認しないことがあります。
                <ul className="ml-6 mt-2 space-y-1">
                  <li>・ 虚偽の事項を届け出た場合</li>
                  <li>・ 本規約に違反したことがある者からの申請である場合</li>
                  <li>・ 未成年者である場合</li>
                  <li>・ その他、当社が利用登録を適当でないと判断した場合</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第3条(アカウント管理)</h2>
            <ol className="luxury-list space-y-2">
              <li>ユーザーは、自己の責任において、本サービスに関するアカウント情報を適切に管理および保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはなりません。</li>
              <li>アカウント情報の管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はユーザーが負うものとし、当社は一切の責任を負いません。ただし、当社の故意または重大な過失による場合はこの限りではありません。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第4条(料金および支払方法)</h2>
            <ol className="luxury-list space-y-2">
              <li>本サービスの利用料金は、月額2,980円(税込)とします。</li>
              <li>料金の支払方法は、UnivaPayクレジットカード決済とします。</li>
              <li>料金は、初回登録時に初月分が課金され、その後毎月1日に自動的に課金されます。</li>
              <li>当社は、無料トライアルやキャンペーン割引等を提供しておりません。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第5条(解約)</h2>
            <ol className="luxury-list space-y-2">
              <li>ユーザーは、当社が定める方法により、本サービスの利用契約を解約することができます。</li>
              <li>解約を希望する場合は、毎月15日までに所定のフォームよりご連絡ください。16日以降のご連絡の場合、翌月分まで課金されます。</li>
              <li>月の途中での解約はできません。また、日割り計算による返金は行いません。</li>
              <li>最低契約期間の定めはありません。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第6条(禁止事項)</h2>
            <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol className="luxury-list space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
              <li>本サービスを通じて入手した情報を商業的に利用する行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスまたはこれを試みる行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って本サービスを利用する行為</li>
              <li>他のユーザーまたは第三者に不利益、損害、不快感を与える行為</li>
              <li>当社サービスの他のユーザーまたは第三者になりすます行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第7条(本サービスの提供の停止等)</h2>
            <ol className="luxury-list space-y-2">
              <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ul className="ml-6 mt-2 space-y-1">
                  <li>・ 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>・ 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>・ コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>・ その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
              </li>
              <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第8条(利用制限および登録抹消)</h2>
            <ol className="luxury-list space-y-2">
              <li>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                <ul className="ml-6 mt-2 space-y-1">
                  <li>・ 本規約のいずれかの条項に違反した場合</li>
                  <li>・ 登録事項に虚偽の事実があることが判明した場合</li>
                  <li>・ 料金等の支払債務の不履行があった場合</li>
                  <li>・ 当社からの連絡に対し、一定期間返答がない場合</li>
                  <li>・ その他、当社が本サービスの利用を適当でないと判断した場合</li>
                </ul>
              </li>
              <li>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第9条(保証の否認および免責事項)</h2>
            <ol className="luxury-list space-y-2">
              <li>当社は、本サービスに事実上または法律上の瑕疵(安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます)がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。ただし、当社に故意または重大な過失がある場合は、この限りではありません。</li>
              <li>前項ただし書に該当する場合であっても、当社の損害賠償責任は、損害の事由が生じた時点から遡って過去1ヶ月間にユーザーが当社に支払った利用料金を上限とします。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第10条(サービス内容の変更等)</h2>
            <p className="leading-relaxed">
              当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第11条(利用規約の変更)</h2>
            <ol className="luxury-list space-y-2">
              <li>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</li>
              <li>変更後の本規約は、本サービス上に表示した時点から効力を生じるものとします。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第12条(個人情報の取扱い)</h2>
            <p className="leading-relaxed">
              当社は、本サービスの利用によって取得する個人情報については、当社のプライバシーポリシーに従い適切に取り扱うものとします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第13条(通知または連絡)</h2>
            <p className="leading-relaxed">
              ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第14条(権利義務の譲渡の禁止)</h2>
            <p className="leading-relaxed">
              ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-gold mb-4">第15条(準拠法・裁判管轄)</h2>
            <ol className="luxury-list space-y-2">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
            </ol>
          </section>

          <p className="text-right text-sm text-gray-400 mt-12">以上</p>
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
