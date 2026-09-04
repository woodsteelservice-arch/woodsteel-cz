import type { Metadata } from "next";
import { GlazingSystemPage } from "@/components/GlazingSystemPage";

export const metadata: Metadata = {
  title: "Bezrámové zasklení teras - WoodSteel",
  description:
    "Bezrámový posuvný systém na zasklení terasy. Bezpečnostní jednosklo, zasklení až do výšky 3 metrů, minimalistický vzhled bez viditelných rámů.",
  alternates: { canonical: "https://woodsteel.sk/zasklenie-teras/bezramove-zasklenie/" },
};

export default function BezramoveZasklenniePage() {
  return (
    <GlazingSystemPage
      tag="Bezrámový systém"
      name="Bezrámový posuvný systém"
      claim="Zasklení terasy ochrání proti větru a dešti."
      description="Bezrámový posuvný systém představuje designové řešení pro náročnější zákazníky, kteří hledají moderní a minimalistický vzhled bez viditelných rámů. Využívá bezpečnostní jednosklo, které umožňuje zasklít prostory až do výšky 3 metrů. Poskytuje nejen spolehlivou ochranu před větrem, deštěm, sněhem a nečistotami, ale i luxusní, prémiový vzhled."
      features={[
        "zajišťuje ničím nerušený výhled do zahrady",
        "překážka proti násilnému vniknutí",
        "pojistky proti vysazení skel",
        "snadné a rychlé ovládání i údržba",
        "volba počtu křídel i způsobu otevírání",
      ]}
      image="/images/zasklenie-bezramovy-system.jpg"
    />
  );
}
