import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ShowroomBooking } from "@/components/ShowroomBooking";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Showroom - WoodSteel",
  description:
    "Navštivte náš showroom v Rovince. Sedněte si pod hotovou zimní zahradu a prohlédněte si, jak vypadá a působí výsledek, dřív než se pro něj rozhodnete.",
  alternates: { canonical: "https://woodsteel.sk/showroom/" },
};

/** Videá prevzaté zo sekcie Showroom na woodsteel.sk */
const videos = [
  {
    id: "3Np7U4NERZc",
    title: "Hliníková zimní zahrada ve stříbrné barvě s izolačními dvojskly",
    poster: "/images/yt-3Np7U4NERZc.jpg",
    caption:
      "Všimněte si, jak tiše běží posuvná část a kolik světla propustí izolační dvojskla. To je přesně ten typ konstrukce, pod který si u nás sednete.",
  },
  {
    id: "ZYtCChJLp4s",
    title: "Hliníková zimní zahrada Woodsteel",
    poster: "/images/yt-ZYtCChJLp4s.jpg",
    caption:
      "Projděte se dokončenou zimní zahradou — od prvního kroku dovnitř až po výhled do zahrady. Za dvě minuty uvidíte víc než na dvaceti fotkách.",
  },
];

/** Zážitok, ktorý sa nedá sprostredkovať fotkou ani vizualizáciou */
const experience = [
  {
    title: "Kolik prostoru tím získáte",
    text: "Metr na papíře a metr pod nohama jsou dvě různé věci. Naživo si rozměr ověříte za pár vteřin.",
  },
  {
    title: "Jak zní ticho",
    text: "Zavřete posuvné zasklení a ruch zvenku ztichne. Rozdíl je slyšet okamžitě — a je větší, než většina lidí čeká.",
  },
  {
    title: "Jak to bude vypadat u vás",
    text: "Vzorky barev a skel přiložíme k fotce vašeho domu. Odstín si vyberete na denním světle, ne na monitoru.",
  },
  {
    title: "Jaké to je na dotek",
    text: "Chytíte profil, opřete se o něj, přejedete rukou po povrchové úpravě. Tloušťku materiálu fotka nepřenese.",
  },
];

export default function ShowroomPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[68svh] flex items-end overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-uvod.jpg"
              alt="Výstavní zimní zahrada WoodSteel v Rovince"
              fill
              priority
              sizes="100vw"
              className="object-cover ws-kenburns"
            />
          </div>
          {/* Fotka je svetlá — plošný závoj by ju zmazal, tmavíme hlavne pod textom */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/45 to-brown/10 sm:via-brown/30 sm:to-brown/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/45 via-transparent to-transparent sm:from-brown/75 sm:via-brown/15" />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-16 pt-32">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">WoodSteel</Link>
              <span>/</span>
              <span className="text-white">Showroom</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-white max-w-4xl reveal">
              Navštívte náš showroom <span className="text-gold">v Rovinke</span>
            </h1>
            <p
              className="mt-6 text-cream/90 text-lg max-w-2xl reveal"
              style={{ animationDelay: "120ms" }}
            >
              Místo, kde si výsledek svého outdoor prostoru nemusíte
              představovat. Stačí si do něj sednout.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 reveal"
              style={{ animationDelay: "220ms" }}
            >
              <Link
                href="#obhliadka"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-hover text-brown hover:text-white font-semibold rounded-full transition-all shadow-[0_4px_16px_rgba(203,171,88,0.4)] hover:shadow-[0_10px_28px_rgba(203,171,88,0.55)] hover:-translate-y-0.5"
              >
                Domluvit prohlídku
              </Link>
              <a
                href="tel:+421904473111"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-semibold backdrop-blur-sm transition-all hover:bg-white hover:text-brown hover:-translate-y-0.5"
              >
                <Phone size={18} />
                +421 904 473 111
              </a>
            </div>
          </div>

          <span
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-eyebrow text-[0.7rem]">Prohlédněte si prostor</span>
            <ArrowDown size={16} className="animate-bounce [animation-duration:2.5s]" />
          </span>
        </section>

        {/* Predstavte si výsledok */}
        <section className="py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="text-eyebrow text-gold mb-4">Showroom Rovinka</div>
              <h2 className="text-display-2 font-bold text-brown">
                Představte si výsledek dřív,
                <span className="text-gold"> než padne rozhodnutie</span>
              </h2>
              <p className="mt-7 text-mutedbrand text-base lg:text-lg leading-relaxed">
                Vizualizace ukáže tvar. Vzorkovník ukáže barvu. Ani jedno vám
                neřekne, jak se v tom prostoru budete cítit v horkém odpoledni
                nebo když začne pršet.
              </p>
              <p className="mt-4 text-mutedbrand text-base lg:text-lg leading-relaxed">
                V Rovince si to vyzkoušíte naživo.
              </p>

              <p className="mt-8 font-display italic text-lg text-brown/90 border-l-2 border-gold/50 pl-5">
                Nikoho tu nepřesvědčujeme. Prostor to udělá lépe za nás.
              </p>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-cream shadow-[0_24px_60px_rgba(63,34,17,0.16)] group">
                <Image
                  src="/images/showroom-rovinka.jpeg"
                  alt="Interiér výstavní zimní zahrady v showroomu Rovinka"
                  fill
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="text-eyebrow text-gold/90">Výstavní zimní zahrada</div>
                  <div className="mt-1.5 font-display font-bold text-white text-lg sm:text-xl">
                    V reálné velikosti, ne na výkrese
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Čo si tu vyskúšate */}
        <section className="py-16 sm:py-20 lg:py-28 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-px bg-gold/60" />
                Co si tu vyzkoušíte
              </div>
              <h2 className="text-display-2 font-bold text-brown">
                Čtyři věci, které fotka nepřenese
              </h2>
            </Reveal>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {experience.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <article className="group h-full rounded-2xl bg-white border border-cream p-7 sm:p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_16px_44px_rgba(63,34,17,0.09)] hover:-translate-y-1">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display font-extrabold text-3xl text-gold/35 transition-colors duration-300 group-hover:text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display font-bold text-xl text-brown">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-mutedbrand leading-relaxed">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Videá */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <Reveal className="max-w-3xl mx-auto text-center">
              <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-px bg-gold/60" />
                Video
              </div>
              <h2 className="text-display-2 font-bold text-brown">
                Než se k nám vypravíte, prohlédněte si to zblízka
              </h2>
              <p className="mt-4 text-mutedbrand text-base lg:text-lg leading-relaxed">
                Dvě krátká videa z hotových zimních zahrad. Uvidíte, jak konstrukce
                pracuje se světlem a jak působí zevnitř — tedy přesně to, co vás
                čeká i v Rovince.
              </p>
            </Reveal>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {videos.map((v, i) => (
                <Reveal key={v.id} delay={i * 120}>
                  <VideoEmbed
                    id={v.id}
                    title={v.title}
                    poster={v.poster}
                    caption={v.caption}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dohodnutie obhliadky */}
        <ShowroomBooking />

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
