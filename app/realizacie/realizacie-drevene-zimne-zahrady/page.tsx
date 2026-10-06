import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Dřevěné zimní zahrady - WoodSteel",
  description: "Naše dokončené realizace dřevěných zimních zahrad — BSH dřevěné konstrukce.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/realizacie/realizacie-drevene-zimne-zahrady/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">dřevěné zimní zahrady</span>.</>}
      subtitle="Dřevěné BSH zimní zahrady, které přinesly teplo a charakter do reálných domácností."
      filter={(c) => c.toLowerCase().includes("dřevěná zimní")}
    />
  );
}
