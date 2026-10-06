import type { Metadata } from "next";
import { GlazingSystemPage } from "@/components/GlazingSystemPage";

export const metadata: Metadata = {
  title: "Rámové zasklení teras - WoodSteel",
  description:
    "Hliníkový rámový posuvný systém na zasklení terasy. Jednosklo nebo izolační dvojsklo, zasklení až do výšky 2,7 metru, příznivý poměr cena/výkon.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/zasklenie-teras/ramove-zasklenie/" },
};

export default function RamoveZasklenniePage() {
  return (
    <GlazingSystemPage
      tag="Rámový systém"
      name="Hliníkový rámový posuvný systém"
      claim="Ochrání vaši terasu proti větru a dešti."
      description="Posuvný rámový systém je vyroben z vysoce kvalitních hliníkových profilů doplněných nerezovými komponenty. Jako výplň používáme jednosklo nebo izolační dvojsklo, které umožňuje zasklít prostory až do výšky 2,7 metru. Pokud hledáte příznivý poměr cena/výkon, je rámový posuvný systém pro vás ideálním řešením."
      features={[
        "chrání před hlukem, prachem i nepřízní počasí",
        "překážka proti násilnému vniknutí",
        "pojistky proti vysazení skel",
        "jednoduchá montáž díky již zkompletovanému systému",
        "snadné a rychlé ovládání i údržba",
        "volba počtu křídel i způsobu otevírání",
      ]}
      image="/images/zasklenie-ramovy-system.jpg"
    />
  );
}
