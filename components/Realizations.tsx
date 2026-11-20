import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { realizations } from "@/lib/data";

export function Realizations() {
  // Na úvodnej stránke len české realizácie — zvyšok je na /realizacie.
  const ceske = realizations.filter((r) => r.country === "Česká republika");

  return (
    <section id="realizations" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="Realizace"
          title="Inspirujte se našimi projekty"
          subtitle="Z 250+ dokončených realizací vám ukazujeme ty české — od Hradce Králové přes Brno až po Frýdek-Místek. Zbytek najdete v galerii."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {ceske.map((r) => (
            <article
              key={r.image}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream"
            >
              <Image
                src={r.image}
                alt={r.location ? `${r.category} — ${r.location}` : r.category}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              {r.country && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brown text-[11px] font-semibold tracking-wide uppercase">
                  <MapPin size={11} className="text-gold" />
                  {r.country}
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 text-white">
                <div className="text-eyebrow text-gold/95 mb-1">{r.category}</div>
                {r.location && (
                  <div className="flex items-center gap-1.5 font-display font-semibold text-base sm:text-lg">
                    <MapPin size={14} className="opacity-80" />
                    {r.location}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/realizacie"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-brown/15 hover:border-gold text-brown hover:text-gold font-semibold text-sm rounded-full transition-colors"
          >
            Prohlédnout všechny realizace
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
