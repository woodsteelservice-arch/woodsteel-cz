import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Zap, Clock, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Akční cenová nabídka - WoodSteel",
  description:
    "Vyžádejte si nezávaznou cenovou nabídku do 24 hodin. Bezplatná prohlídka a zaměření přímo u vás.",
  alternates: { canonical: "https://woodsteel.sk/akcna-cenova-ponuka/" },
};

const promises = [
  "Reagujeme do hodiny v pracovních dnech",
  "Cenová nabídka do 24-48 hodin",
  "Bezplatná prohlídka u vás doma",
  "Vizualizace v ceně nabídky",
  "Bez závazků a bez nátlaku",
  "Cena z nabídky = cena na faktuře",
];

export default function CenovaPonukaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Cenová nabídka</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown max-w-4xl mx-auto">
              Bezplatná cenová nabídka<br className="hidden md:inline" />
              <span className="text-gold">do 24 hodin.</span>
            </h1>
            <p className="mt-6 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              Vyplňte krátký formulář — náš obchodník se vám ozve a domluví
              bezplatnou prohlídku u vás doma. Termín v rozmezí 3-7 dní.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 space-y-10">
              {/* Why us */}
              <div>
                <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
                  <Zap size={14} /> Náš slib
                </div>
                <h2 className="font-display font-bold text-2xl lg:text-3xl text-brown">
                  Žádná překvapení. Garantujeme.
                </h2>
                <ul className="mt-7 space-y-4">
                  {promises.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-charcoal text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speed metric */}
              <div className="bg-gradient-to-br from-brown to-wood rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-gold" />
                  <div className="text-eyebrow text-gold">Průměrná doba reakce</div>
                </div>
                <div className="font-display font-extrabold text-5xl text-gold">42 min</div>
                <p className="mt-3 text-cream/85 text-sm leading-relaxed">
                  Za posledních 30 dní. V pracovních dnech v čase 8:00–17:00.
                </p>
              </div>

              <a href="tel:+421904473111" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/15 group-hover:bg-gold flex items-center justify-center transition-colors shrink-0">
                  <Phone size={18} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-eyebrow text-mutedbrand">Nebo nám rovnou zavolejte</div>
                  <div className="font-display font-bold text-lg text-brown group-hover:text-gold transition-colors">
                    +421 904 473 111
                  </div>
                </div>
              </a>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm variant="card" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
