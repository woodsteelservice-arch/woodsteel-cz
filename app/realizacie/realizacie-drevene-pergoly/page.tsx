import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Dřevěné pergoly - WoodSteel",
  description: "Naše dokončené realizace dřevěných pergol u rodinných domů — od zaměření po montáž.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/realizacie/realizacie-drevene-pergoly/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">dřevěné pergoly</span>.</>}
      subtitle="BSH dřevěné konstrukce u rodinných domů — od zaměření po montáž."
      filter={(c) => c.toLowerCase().includes("dřevěná pergola")}
    />
  );
}
