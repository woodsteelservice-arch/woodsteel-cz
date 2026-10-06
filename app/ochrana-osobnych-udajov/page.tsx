import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů - WoodSteel",
  description:
    "Informace o zpracování osobních údajů podle čl. 13 nařízení GDPR — správce, účel, rozsah, doba uchovávání a práva subjektu údajů.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/ochrana-osobnych-udajov/" },
};

/** Prevádzkovateľ podľa výpisu z obchodného registra — text prevzatý z woodsteel.sk. */
const operator = [
  ["Společnost", "Woodsteel SK s.r.o."],
  ["Sídlo", "Priehon 112/37, 972 05 Sebedražie, Slovenská republika"],
  ["IČO", "53594126"],
  ["DIČ", "2121454324"],
  ["IČ DPH", "SK2121454324"],
  ["IBAN", "SK88 0900 0000 0052 0828 1887"],
];

const purposes = [
  "Kontaktování zájemce s cenovou nabídkou",
  "Uzavření smlouvy",
  "Archivační a daňová povinnost",
];

const rights = [
  "požadovat od správce přístup k osobním údajům a jejich případnou opravu nebo výmaz, případně omezení zpracování, a vznést námitku proti zpracování,",
  "kdykoli požadovat informace týkající se zpracování osobních údajů v zákonném rozsahu,",
  "přenést osobní údaje týkající se osoby klienta k jinému správci,",
  "nebýt předmětem žádného rozhodnutí založeného výhradně na automatizovaném zpracování, včetně profilování,",
  "obrátit se s jakoukoli žádostí nebo stížností na dozorový úřad — Úrad na ochranu osobných údajov Slovenskej republiky, případně na Úřad pro ochranu osobních údajů v zemi svého bydliště.",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-xl lg:text-2xl font-bold text-brown">{title}</h2>
      <div className="mt-3 space-y-3 text-mutedbrand leading-relaxed">{children}</div>
    </section>
  );
}

export default function OchranaOsobnychUdajovPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Ochrana osobních údajů</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Ochrana <span className="text-gold">osobních údajů.</span>
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              Ve smyslu ust. čl. 13 Nařízení EP a Rady (EU) č. 2016/679, obecného nařízení
              o ochraně osobních údajů („Nařízení GDPR“).
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <Section title="Správce">
              <p>Správcem je společnost:</p>
              <dl className="rounded-2xl border border-cream bg-cream/30 p-5 lg:p-6 space-y-2">
                {operator.map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-3">
                    <dt className="sm:w-40 shrink-0 text-sm font-semibold text-brown">{label}</dt>
                    <dd className="text-brown">{value}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Osobní údaje pro správce mohou zpracovávat i další zpracovatelé,
                a to zejména poskytovatelé softwaru, ve kterém jsou osobní údaje klientů evidovány,
                případně další poskytovatelé zpracovatelských softwarů, služeb a aplikací,
                které správce v současnosti využívá či nevyužívá.
              </p>
            </Section>

            <Section title="Účel zpracování osobních údajů">
              <ul className="space-y-2">
                {purposes.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Osobní údaje, které uchováváme">
              <p>
                Jméno, příjmení, adresa trvalého nebo přechodného pobytu, rodné číslo, datum
                narození, státní příslušnost, druh a číslo dokladu totožnosti, je-li klient
                fyzickou osobou nebo zástupcem klienta – právnické osoby; u fyzické osoby –
                podnikatele také adresa místa podnikání, označení rejstříku nebo jiné evidence,
                ve které je fyzická osoba – podnikatel zapsána, a číslo zápisu do tohoto rejstříku
                nebo jiné evidence.
              </p>
            </Section>

            <Section title="Doba uchovávání">
              <p>
                Kontaktní údaje v rozsahu jméno, e-mailová adresa a telefon budou zpracovávány po dobu
                3 let, pokud nedošlo k uzavření smlouvy.
              </p>
              <p>
                Pokud došlo k uzavření smlouvy, osobní údaje klienta budou správcem
                zpracovávány po dobu 10 let od uzavření smlouvy mezi klientem a správcem.
              </p>
            </Section>

            <Section title="Poučení o dobrovolnosti">
              <p>
                Poskytnutí osobních údajů klienta je dobrovolné. V rozsahu, v jakém je však
                správce povinen osobní údaje klientů získávat, zpracovávat a uchovávat,
                je poskytnutí některých osobních údajů podmínkou pro poskytování služeb ze
                strany správce. Těmito povinnými údaji jsou: všechna jména a příjmení, rodné
                číslo, trvalý nebo jiný pobyt a státní občanství; v případě, že jde o fyzickou osobu
                – podnikatele, také její obchodní název, odlišující dodatek nebo další
                označení, místo podnikání a identifikační číslo, druh a číslo průkazu totožnosti,
                stát, případně orgán, který jej vydal, a doba jeho platnosti.
              </p>
              <p>
                Poskytnutí zbývajících osobních údajů závisí výlučně na rozhodnutí klienta
                a správce poskytnutím těchto údajů nepodmiňuje prodej zboží ani
                poskytování služeb.
              </p>
            </Section>

            <Section title="Informace o právech subjektu údajů">
              <p>
                Klient potvrzuje, že mu byly řádně poskytnuty informace o rozsahu zpracovávaných
                osobních údajů a účelu jejich zpracování, a o právu klienta:
              </p>
              <ul className="space-y-2">
                {rights.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Kontakt">
              <p>
                S dotazy ke zpracování osobních údajů se na nás obraťte na{" "}
                <a href="mailto:info@woodsteel.sk" className="text-gold underline">info@woodsteel.sk</a>{" "}
                nebo na čísle{" "}
                <a href="tel:+421904473111" className="text-gold underline">+421 904 473 111</a>.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
