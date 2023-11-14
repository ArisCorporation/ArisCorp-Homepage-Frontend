import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Layout from './layout'
import client from 'apollo/clients'
import Head from 'next/head'

export default function InprintPage() {
  const siteTitle = 'Impressum - Astro Research and Industrial Service Corporation'
  return (
    <div className="pt-32">
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="justify-center">
        <h1>Impressum</h1>
        <p>Angaben gemäß $5 TMG</p>
        <p>Lucas Gruber</p>
        <p>Forggenseestr. 26</p>
        <p>86163 Augsburg</p>
        <p className='text-xl text-white'>Vertreten durch:</p>
        <p>Lucas Gruber</p>
        <p className='text-xl text-white'>Kontakt:</p>
        <p>Telefon: +49-17620589509</p>
        <p>Email: <a href="mailto:contact@ariscorp.de">contact@ariscorp.de</a></p>
        <h1>Haftungsauschluss</h1>
        <h2>Haftung für Inhalte:</h2>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        <h2>Haftung für Links:</h2>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      </div>
    </div>
  )
}

InprintPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
