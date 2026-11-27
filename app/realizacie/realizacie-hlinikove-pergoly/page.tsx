import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Hliníkové pergoly - WoodSteel",
  description: "Naše dokončené realizace hliníkových pergol na míru — každá podle rozměrů a stylu domu.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/realizacie/realizacie-hlinikove-pergoly/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">hliníkové pergoly</span>.</>}
      subtitle="Hliníkové pergoly na míru — každá podle rozměrů a stylu domu."
      filter={(c) => c.toLowerCase().includes("hliníková pergola")}
    />
  );
}
