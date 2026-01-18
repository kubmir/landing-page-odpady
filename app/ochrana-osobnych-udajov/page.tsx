import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov | ODPADY24.sk',
  description: 'Zásady spracovania a ochrany osobných údajov spoločnosti ODPADY24.sk v súlade s GDPR.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Zásady ochrany osobných údajov
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg text-gray-600 mb-8">
                  Tieto zásady ochrany osobných údajov vysvetľujú, ako zhromažďujeme, používame 
                  a chránime vaše osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 
                  2016/679 (GDPR) a zákonom č. 18/2018 Z.z. o ochrane osobných údajov.
                </p>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    1. Prevádzkovateľ osobných údajov
                  </h2>
                  <p className="mb-4">
                    Prevádzkovateľom vašich osobných údajov je:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-lg">ODPADY24 s. r. o.</p>
                    <p>Sídlo: 215 Terany, 962 68</p>
                    <p>IČO: 57381798</p>
                    <p>DIČ: 2122693265</p>
                    <p>Registrácia: Okresný súd Banská Bystrica, Oddiel: Sro, Vložka č. 54467/S</p>
                    <p className="mt-2">Kontaktný email: info@odpady24.sk</p>
                    <p>Telefón: +421 948 850 491, +421 903 596 876</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Aké osobné údaje zhromažďujeme
                  </h2>
                  <p className="mb-4">
                    Zhromažďujeme nasledujúce kategórie osobných údajov:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Kontaktné údaje:</strong> meno, priezvisko, e-mailová adresa, telefónne číslo</li>
                    <li><strong>Údaje o lokalite:</strong> adresa, mesto, PSČ (pre účely poskytnutia služby)</li>
                    <li><strong>Komunikačné údaje:</strong> obsah správ odoslaných cez kontaktný formulár</li>
                    <li><strong>Technické údaje:</strong> IP adresa, typ prehliadača, informácie o zariadení, časové údaje (len pri udelení súhlasu s cookies alebo pre bezpečnostné účely)</li>
                    <li><strong>Údaje z kontaktného formulára:</strong> údaje o čase vyplnenia formulára (pre ochranu pred spamom)</li>
                  </ul>
                  <p className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                    <strong>Poznámka:</strong> Poskytnutie osobných údajov označených ako povinné (meno, e-mail, správa) 
                    je nevyhnutné pre vybavenie vášho dopytu. Ak tieto údaje neposkytnete, nebudeme môcť reagovať 
                    na vašu žiadosť.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Účely spracovania osobných údajov
                  </h2>
                  <p className="mb-4">
                    Vaše osobné údaje spracovávame na nasledujúce účely:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Komunikácia a reakcia na vaše dopyty cez kontaktný formulár</li>
                    <li>Poskytovanie služieb čistenia kanalizácií a súvisiacich služieb</li>
                    <li>Fakturácia a účtovníctvo</li>
                    <li>Zlepšovanie našich služieb a webovej stránky (analytické cookies)</li>
                    <li>Plnenie zákonných povinností</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    4. Právny základ spracovania
                  </h2>
                  <p className="mb-4">
                    Vaše osobné údaje spracovávame na základe:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Súhlasu (čl. 6 ods. 1 písm. a) GDPR):</strong> pre analytické cookies (Google Analytics)</li>
                    <li><strong>Plnenia zmluvy (čl. 6 ods. 1 písm. b) GDPR):</strong> pre poskytovanie našich služieb</li>
                    <li><strong>Oprávneného záujmu (čl. 6 ods. 1 písm. f) GDPR):</strong> pre reakciu na vaše dopyty</li>
                    <li><strong>Zákonnej povinnosti (čl. 6 ods. 1 písm. c) GDPR):</strong> pre účtovné a daňové účely</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    5. Doba uchovávania údajov
                  </h2>
                  <p className="mb-4">
                    Vaše osobné údaje uchovávame po dobu:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Kontaktné údaje z formulárov:</strong> 2 roky od poslednej komunikácie</li>
                    <li><strong>Účtovné doklady:</strong> 10 rokov (zákonná povinnosť)</li>
                    <li><strong>Analytické údaje (cookies):</strong> 26 mesiacov</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    6. Cookies a Google Analytics
                  </h2>
                  <p className="mb-4">
                    Naša webová stránka používa súbory cookies. Rozlišujeme:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Nevyhnutné cookies:</strong> potrebné pre správne fungovanie stránky</li>
                    <li><strong>Analytické cookies (Google Analytics):</strong> pomáhajú nám pochopiť, 
                    ako návštevníci používajú našu stránku. Tieto cookies sa aktivujú <strong>len po vašom 
                    súhlase</strong>.</li>
                  </ul>
                  <p className="mb-4">
                    Google Analytics zbiera anonymizované údaje o návštevnosti (IP adresa je anonymizovaná). 
                    Viac informácií nájdete v{' '}
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-orange hover:underline"
                    >
                      Zásadách ochrany súkromia Google
                    </a>.
                  </p>
                  <p>
                    Svoj súhlas s cookies môžete kedykoľvek odvolať cez odkaz <strong>Nastavenia cookies</strong> v pätičke stránky,
                    prípadne vymazaním údajov stránky (cookies a lokálne úložisko) vo vašom prehliadači.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    7. Príjemcovia osobných údajov a spracovatelia
                  </h2>
                  <p className="mb-4">
                    Vaše osobné údaje môžeme zdieľať s:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Google LLC:</strong> poskytovateľ analytických služieb (Google Analytics) - len pri udelení súhlasu, pôsobí ako spracovateľ</li>
                    <li><strong>Poskytovateľ hostingových služieb:</strong> spoločnosť poskytujúca hosting pre našu webovú stránku, ktorá spracováva údaje v rámci poskytovania služieb</li>
                    <li><strong>Účtovná spoločnosť:</strong> pre spracovanie účtovných dokladov, pôsobí ako spracovateľ</li>
                    <li><strong>Štátne orgány:</strong> ak to vyžaduje zákon (napr. daňový úrad, súdy)</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Všetci spracovatelia sú viazaní zmluvou o spracovaní osobných údajov v súlade s čl. 28 GDPR 
                    a zabezpečujú primeranú úroveň ochrany vašich údajov.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    8. Prenos údajov do tretích krajín
                  </h2>
                  <p className="mb-4">
                    Pri používaní služby Google Analytics môžu byť údaje prenášané do USA. 
                    Spoločnosť Google je certifikovaná v rámci EU-U.S. Data Privacy Framework, 
                    čo zabezpečuje primeranú úroveň ochrany vašich údajov v súlade s čl. 45 GDPR.
                  </p>
                  <p>
                    Ostatné osobné údaje (z kontaktných formulárov) sa spracúvajú výlučne v rámci 
                    Európskej únie a nie sú prenášané do tretích krajín.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    8a. Automatizované rozhodovanie a profilovanie
                  </h2>
                  <p>
                    Vaše osobné údaje <strong>nepoužívame</strong> na automatizované rozhodovanie vrátane profilovania 
                    v zmysle čl. 22 GDPR. Všetky rozhodnutia týkajúce sa spracovania vašich údajov sú vykonávané 
                    ľudskými zamestnancami.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    8b. Bezpečnostné opatrenia
                  </h2>
                  <p className="mb-4">
                    Na ochranu vašich osobných údajov používame technické a organizačné opatrenia v súlade 
                    s čl. 32 GDPR:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Šifrovanie dát pri prenose (HTTPS/SSL)</li>
                    <li>Ochrana proti neoprávnenému prístupu k systémom</li>
                    <li>Pravidelné zálohovanie dát</li>
                    <li>Obmedzený prístup k osobným údajom len pre oprávnené osoby</li>
                    <li>Pravidelné aktualizácie bezpečnostných systémov</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    8c. Záznam o činnostiach spracovania
                  </h2>
                  <p>
                    V súlade s čl. 30 GDPR vedieme záznam o činnostiach spracovania osobných údajov, 
                    ktorý obsahuje informácie o účeloch spracovania, kategóriách údajov, príjemcoch 
                    a dobe uchovávania údajov.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    8d. Poverenec pre ochranu osobných údajov
                  </h2>
                  <p>
                    V súlade s čl. 37 GDPR sme <strong>neustanovili</strong> poverenca pre ochranu osobných údajov (DPO), 
                    pretože naša činnosť spracovania osobných údajov nevyžaduje jeho ustanovenie podľa zákona.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    9. Vaše práva
                  </h2>
                  <p className="mb-4">
                    Podľa GDPR a zákona č. 18/2018 Z.z. máte nasledujúce práva:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Právo na prístup (čl. 15 GDPR):</strong> môžete požiadať o kópiu vašich osobných údajov, ktoré spracovávame</li>
                    <li><strong>Právo na opravu (čl. 16 GDPR):</strong> môžete požiadať o opravu nesprávnych alebo neúplných údajov</li>
                    <li><strong>Právo na vymazanie (čl. 17 GDPR):</strong> môžete požiadať o vymazanie vašich údajov, ak nie sú potrebné alebo ak odvoláte súhlas</li>
                    <li><strong>Právo na obmedzenie spracovania (čl. 18 GDPR):</strong> môžete požiadať o obmedzenie spracovania v určitých prípadoch</li>
                    <li><strong>Právo na prenosnosť (čl. 20 GDPR):</strong> môžete požiadať o prenos údajov v štruktúrovanom formáte k inému prevádzkovateľovi</li>
                    <li><strong>Právo namietať (čl. 21 GDPR):</strong> môžete namietať voči spracovaniu na základe oprávneného záujmu alebo pre marketingové účely</li>
                    <li><strong>Právo odvolať súhlas (čl. 7 GDPR):</strong> ak ste udelili súhlas, môžete ho kedykoľvek odvolať bez ovplyvnenia zákonnosti spracovania pred odvolaním</li>
                    <li><strong>Právo byť informovaný o porušení (čl. 34 GDPR):</strong> máte právo byť informovaný o porušení ochrany osobných údajov, ak môže mať vysoké riziko pre vaše práva</li>
                    <li><strong>Právo podať sťažnosť (čl. 77 GDPR):</strong> máte právo podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
                  </ul>
                  <p className="text-sm text-gray-600 p-3 bg-blue-50 border-l-4 border-blue-400">
                    <strong>Dôležité:</strong> Odvolanie súhlasu s cookies môžete vykonať cez odkaz <strong>Nastavenia cookies</strong> v pätičke stránky,
                    prípadne vymazaním údajov stránky (cookies a lokálne úložisko) vo vašom prehliadači.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    10. Ako uplatniť svoje práva
                  </h2>
                  <p className="mb-4">
                    Pre uplatnenie vašich práv nás môžete kontaktovať písomne alebo elektronicky:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p><strong>Email:</strong> <a href="mailto:info@odpady24.sk" className="text-brand-orange hover:underline">info@odpady24.sk</a></p>
                    <p><strong>Telefón:</strong> +421 948 850 491</p>
                    <p><strong>Písomne:</strong> ODPADY24 s. r. o., 215 Terany, 962 68</p>
                  </div>
                  <p className="mb-4">
                    V žiadosti prosím uveďte:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Vaše meno a kontaktné údaje</li>
                    <li>Presné vymedzenie práva, ktoré chcete uplatniť</li>
                    <li>Popis vašej žiadosti</li>
                  </ul>
                  <p className="p-3 bg-green-50 border-l-4 border-green-400 text-green-800">
                    <strong>Dôležité:</strong> Na vašu žiadosť odpovieme do <strong>30 dní</strong> od jej prijatia 
                    v súlade s čl. 12 ods. 3 GDPR. V zložitých prípadoch môžeme túto lehotu predĺžiť o ďalších 
                    60 dní, o čom vás budeme informovať.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    11. Dozorný orgán
                  </h2>
                  <p className="mb-4">
                    Ak sa domnievate, že spracovanie vašich osobných údajov porušuje GDPR alebo zákon č. 18/2018 Z.z., 
                    máte právo podať sťažnosť na dozorný orgán v súlade s čl. 77 GDPR:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="font-medium text-lg">Úrad na ochranu osobných údajov Slovenskej republiky</p>
                    <p>Hraničná 12, 820 07 Bratislava 27</p>
                    <p>Slovenská republika</p>
                    <p className="mt-2"><strong>Email:</strong> <a href="mailto:statny.dozor@pdp.gov.sk" className="text-brand-orange hover:underline">statny.dozor@pdp.gov.sk</a></p>
                    <p><strong>Web:</strong> <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">dataprotection.gov.sk</a></p>
                    <p><strong>Telefón:</strong> +421 2 323 132 14</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Sťažnosť môžete podať v mieste vášho bydliska, mieste výkonu práce alebo v mieste 
                    údajného porušenia, t.j. na Slovensku.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    12. Zmeny zásad ochrany osobných údajov
                  </h2>
                  <p className="mb-4">
                    Tieto zásady môžeme z času na čas aktualizovať v súvislosti so zmenami v legislatíve 
                    alebo našich procesoch spracovania. O významných zmenách vás budeme informovať 
                    prostredníctvom oznámenia na našej webovej stránke alebo emailom, ak to bude potrebné.
                  </p>
                  <p className="mb-4">
                    Odporúčame vám pravidelne kontrolovať túto stránku, aby ste boli informovaní 
                    o aktuálnych zásadách ochrany osobných údajov.
                  </p>
                  <p className="mt-4 text-gray-500 font-medium">
                    Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    13. Ďalšie informácie
                  </h2>
                  <p className="mb-4">
                    Tieto zásady ochrany osobných údajov sú zostavené v súlade s:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracovaní osobných údajov (GDPR)</li>
                    <li>Zákonom č. 18/2018 Z.z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov</li>
                    <li>Zákonom č. 351/2011 Z.z. o elektronických komunikáciách (v súvislosti s cookies)</li>
                  </ul>
                  <p>
                    Ak máte akékoľvek otázky týkajúce sa spracovania vašich osobných údajov, 
                    neváhajte nás kontaktovať na adrese info@odpady24.sk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
