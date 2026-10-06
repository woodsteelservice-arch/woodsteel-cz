import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookies - WoodSteel",
  description:
    "Jaké soubory cookies na webu používáme, k čemu slouží a jak svůj souhlas kdykoli změníte nebo odvoláte.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/cookies/" },
};

/** Kategórie zodpovedajú prepínačom v lište súhlasu (components/CookieConsent.tsx). */
const categories = [
  {
    name: "Nezbytné",
    state: "Vždy zapnuté",
    text: "Zajišťují základní fungování stránky — například zapamatování vaší volby v této liště. Bez nich by web nefungoval, proto se nedají vypnout.",
  },
  {
    name: "Analytické",
    state: "Volitelné",
    text: "Měří návštěvnost a to, které stránky lidi zajímají, abychom web mohli zlepšovat. Používáme Google Analytics 4 a Google Tag Manager.",
  },
  {
    name: "Marketingové",
    state: "Volitelné",
    text: "Umožňují měřit účinnost reklamy a zobrazit vám relevantnější nabídky. Používáme Meta Pixel a reklamní funkce Google.",
  },
  {
    name: "Preferenční",
    state: "Volitelné",
    text: "Zapamatují si vaše nastavení, abyste je při další návštěvě nemuseli zadávat znovu.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 lg:pt-40 pb-12 bg-cream/40">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
            <div className="text-eyebrow text-gold mb-4 inline-flex items-center gap-2">
              <Link href="/" className="hover:text-brown">WoodSteel</Link>
              <span className="opacity-50">/</span>
              <span className="text-mutedbrand">Cookies</span>
            </div>
            <h1 className="text-display-1 font-extrabold text-brown">
              Soubory <span className="text-gold">cookies.</span>
            </h1>
            <p className="mt-5 text-mutedbrand text-base lg:text-lg max-w-2xl mx-auto">
              Cookies jsou malé soubory, které si stránka uloží ve vašem prohlížeči. Níže najdete,
              k čemu je používáme a jak svou volbu kdykoli změníte.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <div className="space-y-4">
              {categories.map((c) => (
                <div key={c.name} className="rounded-2xl border border-cream bg-white p-5 lg:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-lg font-bold text-brown">{c.name}</h2>
                    <span className="shrink-0 text-xs font-semibold text-mutedbrand bg-cream/60 rounded-full px-3 py-1">
                      {c.state}
                    </span>
                  </div>
                  <p className="mt-2 text-mutedbrand leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gold/30 bg-cream/30 p-6 lg:p-8">
              <h2 className="font-display text-xl font-bold text-brown">Změna souhlasu</h2>
              <p className="mt-2 text-mutedbrand leading-relaxed">
                Souhlas můžete kdykoli změnit nebo úplně odvolat. Analytické a marketingové
                cookies se načtou až po vašem souhlasu — do jeho udělení jsou zablokované.
              </p>
              <div className="mt-5">
                <CookieSettingsButton />
              </div>
            </div>

            <p className="mt-10 text-mutedbrand leading-relaxed">
              Cookies můžete spravovat i přímo v nastavení svého prohlížeče, kde lze
              stávající soubory vymazat a ukládání nových zakázat. Jak nakládáme s osobními
              údaji, popisuje{" "}
              <Link href="/ochrana-osobnych-udajov" className="text-gold underline">
                ochrana osobních údajů
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
