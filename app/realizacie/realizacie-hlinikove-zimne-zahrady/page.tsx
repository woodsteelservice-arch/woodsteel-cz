import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Hliníkové zimní zahrady - WoodSteel",
  description: "Naše dokončené realizace hliníkových zimních zahrad — bezúdržbové konstrukce na míru.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/realizacie/realizacie-hlinikove-zimne-zahrady/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">hliníkové zimní zahrady</span>.</>}
      subtitle="Štíhlé hliníkové profily s velkými prosklenými plochami v reálných domácnostech."
      filter={(c) => c.toLowerCase().includes("hliníková zimní") || (c.toLowerCase().includes("zimní") && !c.toLowerCase().includes("dřevěná"))}
    />
  );
}
