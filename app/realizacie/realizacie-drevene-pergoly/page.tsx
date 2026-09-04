import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Dřevěné pergoly - WoodSteel",
  description: "Naše dokončené realizace dřevěných pergol — z rodinných domů po celém Slovensku.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-drevene-pergoly/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">dřevěné pergoly</span>.</>}
      subtitle="BSH dřevěné konstrukce z rodinných domů po celém Slovensku."
      filter={(c) => c.toLowerCase().includes("dřevěná pergola")}
    />
  );
}
