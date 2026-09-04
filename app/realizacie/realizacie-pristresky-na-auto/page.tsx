import type { Metadata } from "next";
import { RealizationsSubpage } from "@/components/RealizationsSubpage";

export const metadata: Metadata = {
  title: "Realizace - Přístřešky na auto - WoodSteel",
  description: "Naše dokončené realizace přístřešků na auto — hliníkové konstrukce na míru.",
  alternates: { canonical: "https://woodsteel.sk/realizacie/realizacie-pristresky-na-auto/" },
};

export default function Page() {
  return (
    <RealizationsSubpage
      title={<>Realizace — <span className="text-gold">přístřešky na auto</span>.</>}
      subtitle="Přístřešky na jedno i více vozidel postavené naším týmem."
      filter={(c) => c.toLowerCase().includes("přístřešek") || c.toLowerCase().includes("carport")}
    />
  );
}
