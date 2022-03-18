import Image from 'next/image'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import Layout from 'pages/VerseExkurs/layout'
import { useState } from 'react'
import Starmap from 'components/VerseExkursStarmap'
import { Tab } from '@headlessui/react'
import {
  StarmapIcon,
  SystemHistoryIcon,
  DistancesIcon,
  JumppointsIcon,
  BorderIcon,
} from 'components/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_SYSTEME } from 'graphql/queries'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_SYSTEME,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.systeme,
    },
  }
}

export default function StarmapPage({ data }) {
  const [swiper, setSwiper] = useState(null)
  console.log(data)

  return (
    <div className="pt-10 mx-auto print:pt-5 prose prose-td:align-middle prose-invert xl:max-w-[90%]">
      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-between">
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-1 xl:p-3 m-1 transition-all duration-300 ease-in-out w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[170px] xl:h-[170px]'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              <StarmapIcon classes="fill-white" width="100%" height="100%" />
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-1 xl:p-3 m-1 transition-all duration-300 ease-in-out w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[170px] xl:h-[170px]'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              <SystemHistoryIcon
                classes="fill-white"
                width="100%"
                height="100%"
              />
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-1 xl:p-3 m-1 transition-all duration-300 ease-in-out w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[170px] xl:h-[170px]'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              <DistancesIcon classes="fill-white" width="100%" height="100%" />
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-1 xl:p-3 m-1 transition-all duration-300 ease-in-out w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[170px] xl:h-[170px]'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              <JumppointsIcon classes="fill-white" width="100%" height="100%" />
            </h1>
          </Tab>
          <Tab
            className={({ selected }) =>
              (selected ? 'text-primary' : 'opacity-50') +
              ' p-1 xl:p-3 m-1 transition-all duration-300 ease-in-out w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[170px] xl:h-[170px]'
            }
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-inherit">
              <BorderIcon classes="fill-white" width="100%" height="100%" />
            </h1>
          </Tab>
          <hr />
        </Tab.List>
        <Tab.Panels className={'px-4'}>
          <Tab.Panel>
            <div className="">
              <h2>
                Für die Systembeschreibung klicken sie auf das jeweilige System
              </h2>
              <div className="w-8/12 max-w-[630px] aspect-[637/160]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://cms.ariscorp.de/assets/e3b8e2b3-5657-4112-ab8f-c0f1311e9a6b"
                    layout="fill"
                    alt="Starmap Legende"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="https://cms.ariscorp.de/assets/e3b8e2b3-5657-4112-ab8f-c0f1311e9a6b?width=16&quality=1"
                  />
                </div>
              </div>
              <Starmap data={data} />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <p>
                Star Citizens Lore umfasst 800 Jahre in der Zukunft. Die
                Redaktion bietet Ihnen eine schnelle Chronologie der großen
                Ereignisse, um die Entwicklung der Menschheit in diesen vielen
                Jahrhunderten besser zu verstehen.
              </p>
              <h3>
                Klicke einfach weiter, um die Entwicklung des Verse zu sehen.
              </h3>
              <Swiper
                grabCursor={true}
                navigation={true}
                pagination={true}
                speed={0}
                onRealIndexChange={(index) => setSwiper({ swiperIndex: index })}
                modules={[Navigation, Pagination]}
              >
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2000.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2300.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2400.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2500a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2530a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2600a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2700a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2750a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2800a.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2900.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.ariscorp.de/assets/img/exkurs/starmap/2945.webp"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 0 ||
                    swiper?.swiperIndex?.activeIndex == null
                      ? 'block'
                      : 'hidden'
                  }
                ></div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 1 ? 'block' : 'hidden'
                  }
                >
                  <h5>2300: Die Eroberung der Sterne</h5>
                  <p>
                    Im 23. Jahrhundert strebt die Menschheit danach, über das
                    Sol-System hinaus zu expandieren. Im Jahr 2232 wurde das
                    Schiff Kolonieschiff Artemis gestartet um das System GJ
                    667Cc zu besiedeln. Leider wurde die Kommunikation schnell
                    unterbrochen und die Erde hat nie wieder Nachrichten von der
                    Expedition erhalten. Im Jahr 2262 stellen wir fest, dass
                    viele Raumschiffe bei einer genauen Lokalisierung des
                    Sonnensystems verschwinden. Das Gebiet wird als Neso-Dreieck
                    bezeichnet und von den Behörden als außerhalb der Grenzen
                    erklärt. Der Wissenschaftler Nick Croshaw untersuchte das
                    Phänomen und zehn Jahre später, im Jahr 2271, entdeckte er
                    den ersten Sprungpunkt zu einem neuen System, das später zu
                    seinen Ehren Croshaw genannt wird. Es dauert bis 2282, bis
                    der Weltgipfel alle führenden Führer der Erde zusammenbringt
                    und die Kolonisierung von Croshaw organisiert. Nach der
                    Entdeckung des Sprungpunkt-Phänomens machten sich viele
                    Entdecker auf die Suche nach neuen Systemen. 2287 fand man
                    in Croshaw einen weiteren Sprungpunkt nach Rhetor und 2290
                    einen weiteren für das Null-System. Eine neue Zeit der
                    Entdeckung und Expansion öffnet sich der Menschheit und
                    setzt sich 500 Jahre später immer noch fort.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 2 ? 'block' : 'hidden'
                  }
                >
                  <h5>2400: Erster Kontakt</h5>
                  <p>
                    In der ersten Hälfte des 25. Jahrhunderts wurden die
                    Systemerkundungen fortgesetzt mit Virgil 2412, Davien 2430,
                    Cathcart 2438, Bremen 2441, Nexus 2445 und Corel 2449. Am
                    12. Juni 2438 hat die Menschheit endlich die Antwort auf die
                    große Frage erhalten, die sie sich seit Jahrtausenden
                    stellt: {'"'}Sind wir allein im Universum?{'"'} Der erste
                    Kontakt mit einer intelligenten und Hochentwickelten
                    Alienrasse, den Banu, findet im Davien-System statt. Ein
                    Friedensvertrag wird von General Neal Socolovich und seiner
                    Delegation in nur wenigen Monaten unterzeichnet, um den
                    Handel mit diesen neuen Verbündeten zu fördern. Die Galaxie
                    wächst weiter in der zweiten Hälfte des Jahrhunderts mit
                    Ferron 2460, Cano und Kilian 2463, Min 2473, Tiber 2474,
                    Taranis 2478, Pyro und Idris 2493 und schließlich Magnus im
                    Jahr 2499. Das Oretani-System, nicht in dieser Liste
                    erwähnt, hatte ein tragisches Schicksal. Entdeckt im Jahr
                    2481, werden Teams in das System geschickt, um einen
                    Planeten zu terraformen. Leider wird die Kommunikation mit
                    der Expedition im Jahr 2485 unterbrochen, als der einzige
                    bekannte Sprungpunkt des Systems zusammenbricht, so dass die
                    Menschen des Oritani systems von der restlichen Welt
                    abgeschnitten werden. Am Ende des 25. Jahrhunderts wuchs der
                    bekannte Raum der Galaxie von Jahrzehnt zu Jahrzehnt.
                    Hinweis: Ungenauigkeiten der Daten auf den folgenden
                    Systemen: Yulin, Tanga, Bacchus, Geddon und Ellis.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 3 ? 'block' : 'hidden'
                  }
                >
                  <h5>2500: Der diplomatische Zwischenfll mit den Xi{"'"}An</h5>
                  <p>
                    Die große Entdeckung des 26. Jahrhunderts ist das
                    Terra-System im Jahr 2508. Terra III ist der Erde ohne
                    Terraforming ähnlich. Ein grünes Paradies, wie ein gelobtes
                    Land, das nur auf die Ankunft der Menschheit wartet. Sie
                    wird sofort kolonisiert, um heute einer der
                    einflussreichsten Planeten der UEE mit der Erde zu werden.
                    Die Entdeckung der Systeme geht weiter mit Helios im Jahr
                    2509, Hadrian 2510, Kiel 2514, Baker 2522, Tayac 2524 und
                    Horus 2528. Im Jahr 2523 hat die UNE mehr als 20 Systeme in
                    ihrem Einflussbereich erfasst. 70% der Menschheit lebt auf
                    anderen Sternen als der Erde. Um jeden dieser Personen
                    besser zu vertreten, wird eine neue Regierung eingesetzt,
                    die UPE (United Planet of Earth), in der die Posten des
                    hohen Sekretärs (zuständig für Infrastruktur), des hohen
                    Generals (verantwortlich für Expansion und Schutz) und des
                    hohen Richters (zuständig für die Justiz) geschaffen werden.
                    Einige Jahre später, im Jahr 2528, wurde die einheitliche
                    Währung, die United Earth Credits (UEC), geschaffen und ist
                    auch heute noch in Kraft. Im Jahr 2529 kam es in der Stadt
                    Jata auf dem Planeten Cestulus (Davien-System) aus Angst vor
                    einer Wirtschaftskrise nach der Einführung der neuen Währung
                    zu heftigen Unruhen. Die Entdeckung des Pallas-Systems im
                    Jahr 2530 verursachte einen großen diplomatischen
                    Zwischenfall, nach der Begegnung mit einer neuen
                    Alien-Rasse, den Xi{"'"}an. Das System heißt tatsächlich
                    Th.us{"'"}ᾱng und gehört zu diesem Alien-Imperium. Die
                    Entdecker wurden gefangen genommen und ihre sichere Rückkehr
                    kostete der UPE viel Geld: Die Alien-Rasse verlangte die
                    genaue Lokalisierung aller Systeme, die der Menschheit
                    gehörten. Dieser Vorfall legte den Grundstein für eine
                    schwierige Beziehung zwischen den beiden Rassen während der
                    folgenden zwei Jahrhunderte. Hinweis: Ungenauigkeit des
                    Datums zur Entdeckung des Goss-Systems.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 4 ? 'block' : 'hidden'
                  }
                >
                  <h5>2530: Tevarin Krieg und der Beginn der Messer-Ära</h5>
                  <p>
                    Die System-Entdeckungen gehen weiter mit Hades und Hadur (Yᾱ
                    {"'"}mon) 2531, Odin im Jahr 2532, Charon 2538, Gurzil 2539,
                    Rihlah 2542, Castra 2544, Nyx 2582 und Oya 2587. Am 15.
                    November 2541 entdeckte Dr. Kellar Lench zum ersten Mal die
                    Rasse Tevarin in ihrem Geburtssystem Elysium, das von den
                    Einheimischen Kaleth {"'"}ala genannt wurde. Dieses
                    kriegerische Volk begann die Feindseligkeiten im folgenden
                    Jahr durch die Gefangennahme des Planeten Idris IV nach
                    einem massiven Orbitalangriff. Das ist der Beginn des ersten
                    Tevarin-Krieges. Die Menschen haben den Angriff
                    vorausgesehen und die meisten Siedler rechtzeitig evakuiert.
                    Nur etwa 100 Menschen, die von Rachel Lock angeführt werden,
                    organisieren den Widerstand auf dem Planeten. Ihre
                    Sabotage-Operationen stören die Logistik der Tevarin-Armee.
                    Diese Gruppe von Überlebenden ist bekannt als {'"'}The Grey
                    {'"'}. Im Jahr 2544 starteten die Streitkräfte der UPE die
                    Operation Nemesis. Der Widerstand der {'"'}Grey{'"'}{' '}
                    unterstützt sie, indem sie wertvolle Informationen
                    verbreiten. In der Schlacht von Idris IV zeichnet sich
                    Oberst Ivar Messer als brillanter Stratege aus und wird nach
                    dem Krieg zum ikonischen Gesicht der Armee. Ivar Messer
                    wurde im Jahr 2546 beauftragt, den Führer der Tevarins
                    zurück zu den UPE-Kommando zu bringen. Der Krieg ist vorbei.
                    Messers Waffen haben ihn in den Rang eines hohen Generals
                    katapultiert. Er schafft ein Klima der Angst und erklärt,
                    dass die Menschheit eine harte Hand ohne Gegenmacht braucht.
                    Die Posten des hohen Sekretärs und des hohen Richters werden
                    als überholt angesehen. Ivar Messer schafft es, sein Endziel
                    zu erreichen, die Schaffung einer Figur der höchsten
                    Autorität: der Kaiser. Im selben Jahr wurde die UPE zur UEE
                    (United Empire of Earth). Heute besteht der dringende
                    Verdacht, dass Ivar Messer im Jahr 2545 in Jata
                    Terroranschläge herbeigeführt hat, die Tausende von Opfern
                    gefordert haben, um dieses Klima des Terrors zu schaffen.
                    Eine ängstliche Bevölkerung ist leichter beeinflussbar. Der
                    Krieg der Tevarins ist zwar vorbei, aber eine neue Gefahr
                    kann jederzeit mit einem viel heftigeren Gegner, den Xi{"'"}
                    An, ausbrechen. Ein Niemandsland wird zwischen den beiden
                    Fraktionen aufgestellt und wird die
                    {'"'}Perry Line{'"'}genannt. Am Ende des 26. Jahrhunderts
                    begann für die Menschheit eine dunkle Zeit, genannt die
                    Messer Ära, die für mehr als zwei Jahrhunderte andauern
                    wird. Hinweis: Ungenauigkeit des Datums zur Entdeckung des
                    Kins-Systems.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 5 ? 'block' : 'hidden'
                  }
                >
                  <h5>2600: Die Vanduul Bedrohung</h5>
                  <p>
                    Im Jahr 2603 begannen die Tevarin, nach 50 Jahren heimlicher
                    Vorbereitung, einen zweiten Krieg, mit dem einzigen Ziel,
                    ihre ursprüngliche Welt Kaleeth {"'"}ala (inzwischen von
                    Menschen in Elysium IV umbenannt) wieder aufzunehmen. Am 24.
                    Juni 2610,als sie erkannten, dass sie den Krieg gegen die
                    UEE niemals gewinnen können, stürzte die Tevarin-Flotte in
                    einer Geste der Verzweiflung auf ihre ursprüngliche Welt.
                    Angesichts dieser Niederlage lehnten die überlebenden
                    Tevarins ihren Rijora-Kriegercode für einen Zeitraum namens
                    Purge ab, um dann in der UEE assimiliert zu werden. In
                    dieser Zeit hat die Menschheit keine Zeit zum Atmen. Im Jahr
                    2617 entdeckten die Leutnants Ahmad Harar und Carl Dyson
                    einen Sprungpunkt zum Kayfa-System. Als sie auf der anderen
                    Seite ankamen, stießen sie auf die Xi{"'"}an. Gefangen
                    genommen und verhört werden die Offiziere drei Tage später
                    wieder freigelassen. Die Xi{"'"}an kündigen an, dass jedes
                    weitere Treffen dieser Art mit der Zerstörung des Schiffes
                    und seiner Insassen enden wird. Diese historische Tatsache
                    gilt als der Beginn des Kalten Krieges mit den Xi{"'"}an.
                    Wir müssen bis 2638 warten, um das erste Zeichen der
                    Rebellion gegen das Messer-Regime zu sehen. Senator Assan
                    Kieren von Terra prangert die militärische Agenda der UEE
                    an. Er fordert eine Neuwahl für die Unabhängigkeit von Terra
                    und der angrenzenden Systeme. Livia Messer III diskreditiert
                    ihn mit harter Propaganda. Assan Kieren verschwindet. Mord
                    wird vermutet. Die Erforschung des Weltraums im Geltungs
                    berreich der Xi{"'"}An-wurde im 27. Jahrhundert stark
                    verlangsamt. Auf der anderen Seite wurden einige Systeme mit
                    Orion im Jahr 2650, Leir im Jahr 2677 und Viking im Jahr
                    2686 entdeckt. Am 9. August 2681,als die Siedlungen auf der
                    Armitage im Orion-System gut abliefen, bombardierte eine
                    Gruppe von Schiffen die Stadt Dell und tötete 638 Menschen.
                    Es ist die erste Begegnung der Menschheit mit den Vanduuls.
                    Die Vanduuls führen in den folgenden 16 Jahren zahlreiche
                    Überfälle im Orion-System durch. Illyana Messer VI nutzt
                    diese Angriffe, um die Notwendigkeit einer obersten
                    Autorität der UEE zu rechtfertigen, aber nicht wirklich
                    gegen diesen neuen Aggressor zu handeln, wahrscheinlich weil
                    die Überfälle in einem einzigen System stattfanden. Samuel
                    Messer VII ist die Nachfolgerin von Illyana Messer VI im
                    Jahr 2697. Die Vanduul-Bedrohung ist für den neuen Kaiser,
                    der es vorzieht, seine Macht zu nutzen, um die Unterwerfung
                    des Volkes unter seine Autorität zu erzwingen, noch immer
                    nicht an erster Stelle. Am Ende des 27. Jahrhunderts ist die
                    Menschheit zwischen der Xi{"'"}An-Bedrohung auf der einen
                    und den Vanduul-Angriffen der anderen seite ihres
                    territoriums umgeben. Hinweis: Ungenauigkeiten über das
                    Datum zur Entdeckung des Ayr{"'"}ka Systems.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 6 ? 'block' : 'hidden'
                  }
                >
                  <h5>2700: Der Fall von Orion</h5>
                  <p>
                    Am Anfang des 28. Jahrhunderts, angesichts der Untätigkeit
                    der Führer, siedelten sich auf Orion immer mehr Söldner,
                    ehemalige Soldaten und Piloten an, die angesichts der
                    Vanduul Scharmützel die Herausforderung suchten. Armitage
                    wird zu einem Versteck von Hitzköpfen, aber auch zu einer
                    Goldmine von Vanduul Waren (Technologien oder manchmal sogar
                    Alien-Körper). Am 16. Februar 2712 landen die Vanduuls mit
                    einer massiven Flotte im System Orion. Dutzende von
                    Kapitalschiffen nähern sich und schütten einen Regen von
                    Schüssen auf den Planeten aus. Die Schlacht von Orion
                    beginnt. Die UEE -Navy hat nur drei Zerstörer und einige
                    Fregatten im System, die verzweifelt versuchen, den Angriff
                    der Aliens abzuwehren, während Pfadfinder geschickt werden,
                    um Verstärkung zu holen. Die Schlacht dauert drei Tage und
                    nach und nach, dank einer konsequenten Verstärkung der
                    Flotte der UEE, gelingt es der Navy den Feind im Weltraum
                    und auf dem Boden des Planeten zurückzudrängen. Am 19.
                    Februar 2712 trifft die Menschheit zum ersten Mal auf die
                    Massenvernichtungswaffe der Vanduuls, die Kingship genannt
                    wird. Diese alptraumhafte, mehr als 3000 Meter lange Schiff,
                    vernichtet die meisten Schiffe der UEE und die anderen
                    flüchten in das Tiber-System. Alle Menschen, die auf
                    Armitage zurückbleiben, werden sich selbst überlassen. Dies
                    ist die erste große Niederlage des Messer-Regimes. Die
                    Vanduuls bleiben ein Jahr auf dem Planeten, um ihn
                    vollständig auszubeuten und gehen dann zurück in ihr
                    Territorium. Von 2715 bis 2788 wurde die Armee überall auf
                    dem Territorium eingesetzt, um die Verteidigung gegen die Xi
                    {"'"}an zu festigen, den Vanduul-Angriffen zu widerstehen,
                    die fortgesetzt werden, und die Revolten überall auf dem
                    Territorium gegen das autoritäre Regime zu beruhigen. Auch
                    in dieser Zeit wurden nur wenige Systeme entdeckt: Gliese
                    2712, Tohil 2716 und Vector 2726. Die imperiale Macht der
                    Messer wird immer fragiler.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 7 ? 'block' : 'hidden'
                  }
                >
                  <h5>2750: Der Fall der Messer-Dynastie</h5>
                  <p>
                    Die Erkundung ist immer noch pausiert und nur einige Systeme
                    wurden am Ende des 28. Jahrhunderts entdeckt, wie Garron
                    2784, Osiris 2788 und Tal 2789. Drei Ereignisse aus dem
                    späten 28. Jahrhundert werden das Messer-Regime zu Fall
                    bringen. Am 3. Dezember 2757 wurde Anthony Tanaka, ein
                    12-jähriger Junge, kaltblütig ermordet, weil er sich
                    weigerte einen verletzten Kollegen bei einer gefährlichen
                    Aufgabe zu ersetzen. Das Ereignis hat einen doppelten
                    Einfluss auf die öffentliche Meinung: Nicht nur ein kleines
                    Kind wird getötet, sondern es ist auch ein Beweis dafür,
                    dass Kinderarbeit unter dem Messer-Regime real ist. Am 29.
                    März 2789 verkündete Senator Akari, dass er ein
                    Friedensabkommen mit den Xi{"'"}an ausgehandelt habe und
                    ließ diesen im Senat, ohne die Zustimmung des Imperators,
                    abstimmen, der sich auf Goss beurlaubt hatte. Die Abstimmung
                    ist gültig, aber der Friedensvertrag wird nicht vom Kaiser
                    unterzeichnet, wenn er zurückkommt. Vor Ort beginnen die
                    Streitkräfte beider Seiten sich aus der Perry-Linie
                    zurückzuziehen, um die Beziehungen zu beruhigen, trotz der
                    Hartnäckigkeit des Imperators. Am 12. April 2792
                    verbreiteten Aktivisten Bilder des brutalen Terraformierungs
                    von Garron II trotz der Anwesenheit von Leben auf dem
                    Planeten. Die Fotografien der ausgerotteten Arten sind
                    überall im Spectrum zu finden. Die Bevölkerung, die durch
                    diese Ereignisse angefeuert wird und die Schwäche des
                    Regimes ausnutze, rebelliert im ganzen Reich. Am 3. Mai 2792
                    endete die Messer Ära dank des Erfolgs der Bewegung. Erin
                    Toi, der gerade zum Imperator ernannt wurde, setzt das
                    UEE-Tribunal wieder als Gegenmacht ein, um zu vermeiden,
                    dass sich die Fehler der Vergangenheit wiederholen. Im Jahr
                    2793 kamen der Imperator des UEE und Kaiser Kr.e der Xi{"'"}
                    an im Kayfa-System zusammen und die Freundschaft zwischen
                    den beiden Völkern wurde durch die Unterzeichnung des
                    Vertrags der Perry-Linie besiegelt, die die Systeme des
                    Niemandslands gerecht auf die beiden Mächte verteilt. Erin
                    Toi versucht auch Kontakt mit den Vanduul aufzunehmen, um
                    die Beziehungen zu beruhigen, aber ohne Erfolg. Im Jahr 2795
                    wurde der Fair Chance Act ratifiziert. Mit dem das
                    Terraformierung eines Planeten, auf dem sich Leben
                    entwickelt, von nun an als Verbrechen gilt und die UEE die
                    Sicherheit der betreffenden Systeme gewährleistet. Garron
                    und Osiris stehen als erste Systeme unter dem Fair Chance
                    Act. Anmerkung: Obwohl nicht von der Regierungskonferenz
                    präzisiert, gehen wir in diesem Absatz davon aus, dass Ende
                    des 28. Jahrhunderts alle verbleibenden Xi{"'"}An-Systeme
                    von der UEE, als Folge der verbesserung der Beziehungen,
                    entdeckt wurden. Das betrifft: Virtus, Eealus, El{"'"}sin,
                    Khabari und Markahil. Man geht auch davon aus, dass die
                    Entdeckung von Virtus das bekanntwerden von Trise-System der
                    Banu mitermöglicht hat.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 8 ? 'block' : 'hidden'
                  }
                >
                  <h5>2800: Das UEE baut sich neu auf</h5>
                  <p>
                    Im 29. Jahrhundert versuchte sich die UEE, nach dem Ende der
                    Messer-Ära, neu zu formieren. Die nächsten 100 Jahre sind
                    relativ ruhig. Im Jahr 2800 unterstützt Erin Toi den hohen
                    Sekretär Leon dabei für das Amt des Imperators zu
                    kanidieren. Nach seiner erfolgreichen Wahl entschließt er,
                    die Ark zu bauen. Eine Station, die alle Kenntnisse der
                    Menschheit vereint. Alle Alien-Arten (einschließlich der
                    Vanduul) wurden zu seiner Eröffnung eingeladen. Bei dieser
                    Veranstaltung wollte Kaiser Leon zeigen, dass sich die UEE
                    verändert hat und nun nach Wissensaustausch und Frieden
                    strebt. Die weiterführung der erforschung beginnt nach und
                    nach und viele Systeme werden in dieser Zeit entdeckt:
                    Kellog 2811, Genesis 2812, Tirol 2823, Oso 2861, Chronos
                    2863 und Branaugh 2877. Nach der Entdeckung von Leben auf
                    diesen Planeten werden die Systeme Kellog, Genesis und Oso
                    direkt unter dem Fair Chance Act platziert. Im Jahr 2871
                    starteten die Vanduul wieder einen massiven Angriff auf
                    Caliban mit einem Kingship. Die Razzien im System gehen bis
                    2884 weiter. Trotz vieler Versuche hat die UEE immer noch
                    nicht den Sprungpunkt gefunden, der es den Vanduul
                    ermöglicht, ihre Razzia von ihrem Territorium aus
                    durchzuführen. Im Jahr 2872 will die UEE der Galaxie zeigen,
                    dass ihre Projekte nicht mehr rein militärisch sind und
                    startet in diesem Rahmen das Projekt Archangel: Synthworld.
                    Die Idee ist, ein ganzes Ökosystem aus einem leblosen
                    Felsplaneten zu entwerfen. Die Anwendung des Fair Chance Act
                    hat die Anzahl der kolonisierbaren Planeten begrenzt und es
                    ist notwendig eine Alternative für die Menschheit zu finden.
                    Anmerkung: Nach einem kürzlichen Interview mit dem Lore-Team
                    wird das ursprünglich entdeckte Stanton-System im Jahr 2903
                    wahrscheinlich zu einem früheren Zeitpunkt geändert werden.
                    Sehr wahrscheinlich im 29. Jahrhundert. Die Karte von 2900
                    berücksichtigt also die Entdeckung von Stanton.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 9 ? 'block' : 'hidden'
                  }
                >
                  <h5>2900: Die Vanduul-Bedrohung eindämmen</h5>
                  <p>
                    Zu Beginn des 30. Jahrhunderts belastet das
                    Synthworld-Projekt die Volkswirtschaften des Imperiums, die
                    Unterschiede zwischen wohlhabenden und armen Klassen nehmen
                    zu und die Vanduul-Angriffe scheinen nicht zu stoppen. All
                    diese Elemente bringen ein Klima der Spannung in die
                    Bevölkerung der UEE. Die Erforschung geht jedoch weiter und
                    zwar mit der Entdeckung der Systeme Kallis im Jahr 2921,
                    Tamsa 2943 und Kabal 2944. Im Jahr 2920 verkaufte die UEE,
                    um ihr Budget zu retten, das Stanton-System an vier
                    Unternehmen, die jeweils die Planeten: ArcCorp, Crusader,
                    Hurston und Microtech Kauften. Der Kaiser Kelos Costigan im
                    Jahr 2949 wurde im Jahr 2928 gewählt. Es ist insbesondere
                    bekannt für die Anwendung des {'"'}Historischen
                    Wahrheitsaktes{'"'}
                    (Historical Truth Act), der die Freigabe vieler historischer
                    Akten ermöglicht, insbesondere während des Messer-Regimes.
                    Am 11. Oktober 2945 starteten die Vanduuls einen neuen
                    Großangriff auf Vega II. Nach der Rede von Admiral Bishop im
                    Senat führt die UEE endlich einen groß angelegten Krieg
                    gegen die Vanduuls. Anmerkung: In diesem Artikel werden wir
                    annehmen, dass die UEE in diesem Jahrhundert zahlreiche
                    Informationen über die Vanduul-Systeme erhält, da dies zuvor
                    nicht das Hauptanliegen der UEE war (auch hier wurde nichts
                    zur Regierungskonferenz präzisiert). Dies betrifft:
                    Vanguard, Vagabond, Vendetta, Veritas, Veritas, Vesper,
                    Virgo, Volt, Voodoo und Vulture.
                  </p>
                </div>
                <div
                  className={
                    swiper?.swiperIndex?.activeIndex == 10 ? 'block' : 'hidden'
                  }
                ></div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <p>
                Die Nähe der Systeme in Star Citizen wird nicht mehr durch ihre
                tatsächliche physische Nähe definiert, sondern durch die
                Existenz von Sprungpunkten (Jump-Points), die sie miteinander
                verbinden. Daher wird es auch keine Lichtjahrangabe zu den
                Entfernungen der Sternensysteme geben, da diese nicht relevant
                sein werden für interstellare Reisen.
              </p>
              <p>
                Sprungpunkte sind Wurmlochverwandte, Naturphänomene, die am Rand
                von Gravitationsschächten (Sterne, schwarzen Löchern usw.)
                gebildet werden und es ermöglichen, fast augenblicklich zwischen
                ihren beiden Enden zu reisen. Technisch gesehen handelt es sich
                um Zugangspunkte zu einem vierdimensionalen Tunnel, der einen
                Durchbruch in der Raum/Zeit schafft. Man muss an seinen Rändern
                {'"'}surfen{'"'} und bestimmte Bahnen einhalten, um nicht mit
                Objekten im Tunnel oder in instabilen Gebieten darin zu
                kollidieren, was katastrophale Folgen hätte. In Star Citizen,
                aus Gründen der Spielbarkeit, wurden die Entfernungen durch 10
                und die Größe der Sterne durch 6 geteilt (Nur im Spiel, nicht in
                der Lore). Man erhält also folgende Werte:
              </p>
              <div className="w-full aspect-[3529/1245] relative">
                <Image
                  src="https://cms.ariscorp.de/assets/a769ad76-31e5-4979-84f5-ba49788561ce"
                  layout="fill"
                  alt="Starmap Legende"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="https://cms.ariscorp.de/assets/a769ad76-31e5-4979-84f5-ba49788561ce?width=16&quality=1"
                />
              </div>
              <p>
                Es wird wohl durchaus möglich sein, ein anderes System durch
                Quantenreisen zu erreichen, statt der Verwendung eines
                Sprungpunktes, vorausgesetzt, diese sind angrenzend. Die Zeiten,
                die man dafür jedoch brauchen wird, um das nächste System zu
                erreichen, scheinen im Spiel jedoch gewaltig zu sein. Man kann
                sich gut vorstellen, dass eine Crew ein paar Tage oder sogar
                Wochen auf einem Raumschiff auf einer Quantenreise verbringen
                müsste, daher ist es schwierig, sich Spieler vorzustellen, die
                diese Distanzen auf diese Weise zurücklegen wollen würden.
              </p>
              <hr />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <p>
                In Star Citizen ist das Verständnis der Sprungpunkt - Mechanik
                für alle interstellaren Reisenden von entscheidender Bedeutung.
                In diesem Leitfaden sammeln wir alle Informationen, die wir zu
                diesem Thema über das Gameplay als auch über die Lore haben.
              </p>
              <p>
                Die Theorie hinter den Jump-Points Sprungpunkte sind
                Gravitationsbrunnen in der Raum-Zeit, die es den Raumschiffen
                mit Sprungantrieb ermöglichen, einen {'"'}Sprung{'"'}{' '}
                durchzuführen.
              </p>
              <p>
                Diese Anomalien bilden sich immer in der Nähe einer massiven
                Gravitationsquelle. Also finden wir sie in den Sonnensystemen
                und können, bis zum Beweis des Gegenteils, nicht von jedem Stern
                isoliert sein.
              </p>
              <p>
                Man nennt einen {'"'}Sprung{'"'}, die Aktion, in diesen
                Raum-Zeit-Hohlraum einzudringen, um auf die andere Seite des
                Tunnels zu gelangen und so ein neues Sternensystem zu erreichen.
                Um es zusammenzufassen, sie sind echte natürliche Autobahnen, um
                zwischen den Systemen zu reisen.
              </p>
              <p>
                Reisen durch einen Sprungpunkt Das Durchfliegen von
                Sprungpunkten wird sich dabei unterscheiden, ob es sich um einen
                kartierten oder unkartierten Sprungpunkt handelt. Um einen
                Sprungpunkt zu durchfliegen, ist es notwendig, eine bestimmte
                Route zu folgen, um ein Hindernis von der Größe eines Sterns zu
                vermeiden. Der Bordcomputer vom Raumschiff wird eine assistierte
                Navigation für die am häufigsten verwendeten Sprungpunkte
                enthalten. Für die anderen wird es notwendig sein, manuell zu
                steuern. Das Fliegen in einem nicht registrierten Sprungpunkt
                ist a priori besonders komplex und riskant. Daher gibt es einen
                eigenständigen Beruf, um diese riskante Aufgabe der Kartierung
                zu vollbringen: die {'"'}Navjumper{'"'}.
              </p>
              <p>
                Zustände und Positionen von Sprungpunkten ändern sich mit der
                Zeit. Daher ist es notwendig sie regelmäßig zu kartografieren,
                um sichere automatisierte Flugbahnen zu erhalten und die Zeit im
                Inneren zu minimieren.
              </p>
              <p>
                Die verschiedenen Sprungpunkt-Klassen Es gibt drei verschiedene
                Sprungpunkt-Klassen. Diese Klassen bestimmen die Größe der
                Raumschiffe, die den Sprungpunkt durchqueren können. Es ist ein
                bisschen wie Pässe in den Bergen. Einige sind breit genug, um
                diese mit dem Fahrzeug zu überqueren, andere können nur zu Fuß
                passiert werden. Zum Beispiel kann ein Hull E-Schiff oder ein
                Javelin-Schiff nur einen großen Sprungpunkt passieren. Folgend
                gibt es eine Vorstellung davon, was es geben könnte:
              </p>
              <div className="w-full aspect-[1200/841] relative">
                <Image
                  src="https://cms.ariscorp.de/assets/c5318dd2-7bb6-4f1e-bb86-092652a9e055"
                  layout="fill"
                  alt="Starmap Legende"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="https://cms.ariscorp.de/assets/c5318dd2-7bb6-4f1e-bb86-092652a9e055?width=16&quality=1"
                />
              </div>
              <p>
                Was hat das mit der Starmap zu tun? Um den Einfluss dieser
                Sprungpunkt-Größen auf das Gameplay zu zeigen, machen wir zwei
                Gedankenexperimente von verschiedenen Raumschiffrouten, die von
                Terra nach Centauri reisen wollen.
              </p>
              <div className="w-full aspect-[3680/1236] relative">
                <Image
                  src="https://cms.ariscorp.de/assets/a3e75409-9f24-452e-a1f2-d2b6aa45e36e"
                  layout="fill"
                  alt="Starmap Legende"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="https://cms.ariscorp.de/assets/a3e75409-9f24-452e-a1f2-d2b6aa45e36e?width=16&quality=1"
                />
              </div>
              <h4>Situation 1:</h4>
              <p>
                Ein ziviler Händler mit einer Hull E kann nur große Sprungpunkte
                bereisen. Also benutzt er die Strecke, die grün angegeben ist.
                Vorteil: Sichere Strecke, für die Benutzung großer Schiffe
                möglich Nachteil: Lange Strecke (insgesammt 11 Sprünge)
              </p>
              <h4>Situation 2:</h4>
              <p>
                Ein Schmuggler in einer Avenger Titan möchte illegale Ware in
                kleinen Mengen schnell liefern. Er kann jede Art von Jump-Point
                nehmen. Er benutzt die Strecke in rot. Vorteil: Kurze Route (6
                Sprünge), wenige mögliche Kontrollen für Sicherheitsbehörden und
                die Advocacy Nachteil: Ungesicherte Flugroute, mäßige
                Infrastruktur (Tankmöglichkeiten)
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <p>
                In der Lore von Star Citizen wird oft auf den Begriff der Grenze
                verwiesen, was in einem dreidimensionalen System abstrakt ist,
                in dem die Reisemöglichkeiten theoretisch unendlich sind.
              </p>
              <p>
                Um zu versuchen, das System der Grenzen und Reisen in Star
                Citizen zu verstehen, werden wir uns der Kreis-Sternenkarte der
                bekannten Systeme, sowie auf die ARK Starmap bedienen. Die
                beiden Ankerpunkte dieser Karte sind die Systeme Sol (Erde) und
                Terra. Die beiden wichtigsten Systeme des UEE. Um sie herum
                organisieren sich die von den Menschen gesteuerten Systeme mit
                den {'"'}westlichen Systemen{'"'} der Vanduul, den {'"'}
                südlichen Systemen{'"'}
                der Banu, und den {'"'}östlichen Systemen{'"'} der Xi{"'"}an.
              </p>
              <p>
                Auf dem Bild kann man die groben Grenzen zwischen den
                verschiedenen Spezien farblich unterscheiden:
              </p>
              <p className="space-x-4">
                <span className="uppercase text-cyan-500">uee</span>
                <span className="text-yellow-400 uppercase">Banu</span>
                <span className="text-green-500 uppercase">Xi{"'"}An</span>
                <span className="text-red-600 uppercase">Vanduul</span>
              </p>
              <div className="w-full aspect-[1200/841] relative">
                <Image
                  src="https://cms.ariscorp.de/assets/041bf58e-f736-4384-a265-1ef9a21330d6"
                  layout="fill"
                  alt="Starmap Legende"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="https://cms.ariscorp.de/assets/041bf58e-f736-4384-a265-1ef9a21330d6?width=16&quality=1"
                />
              </div>
              <p>
                Man muss diese Karte ein wenig studieren, bevor man die
                Bedeutung tatsächlich erfasst. Was ins Auge fällt, ist das
                Vorhandensein von echten Pufferzonen zwischen den verschiedenen
                Zivilisationen. Wenn die Vanduul zum Beispiel einen Angriff auf
                Terra planen wollten, müssten sie zuerst drei von der UEE
                überwachte Systeme durchqueren. Die Flugroute würde wie folgt
                sein:
              </p>
              <p>{'Virgil -> Nyx -> Pyro -> Stanton -> Terra'}</p>
              <p>
                Wenn man bedenkt, dass zwei der verwendeten Sprungpunkte von
                mittlerer Größe sind, die wahrscheinlich nicht zulassen, dass
                eine ganze Flotte und ein Kingship sie durchqueren, wird schnell
                klar, wie schwierig es ist, einen massiven Angriff zu starten.
              </p>
              <p>
                Aus kommerzieller Sicht bietet diese Anordnung größere
                Möglichkeiten für Reiserouten als nur eine Reise, und die
                Händler müssen die Systeme auswählen, die sie durchqueren
                wollen. Man kann sich leicht vorstellen, dass bestimmte Straßen
                einen Mehrwert auf Kosten der Sicherheit bringen können oder
                umgekehrt, dass eine hochsichere Straße den Transportunternehmen
                wahrscheinlich weniger Vorteile bringen wird.
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

StarmapPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
