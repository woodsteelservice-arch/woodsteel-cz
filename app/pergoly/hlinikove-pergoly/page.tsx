import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové pergoly - WoodSteel",
  description:
    "Hliníkové pergoly na míru s integrovaným žlabem a přípravou na pozdější zasklení. Odolné vůči počasí, snadné na údržbu, s moderními liniemi.",
  alternates: { canonical: "https://woodsteel.sk/pergoly/hlinikove-pergoly/" },
};

export default function HlinikovePergolyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Hliníkové pergoly",
        title: (
          <>
            Hliníková pergola <span className="text-gold">podle vašich představ</span>.
          </>
        ),
        subtitle:
          "Odolná vůči povětrnostním vlivům, snadná na údržbu a s moderním vzhledem. Cenově dostupný systém s integrovaným žlabem a různými možnostmi střešní krytiny.",
        image:
          "/images/hlinikova-pergola-senec.jpeg",
      }}
      intro={{
        title: "Pergola, která roste s vámi",
        body:
          "Rozměry, odstín i střešní krytinu volíme podle vašeho domu. Kdykoli ji doplníte o boční screenové rolety proti slunci a větru — a později i o zasklení.",
      }}
      features={[
        "Povrchová úprava hliníku komaxit",
        "Příprava na pozdější zasklení",
        "Integrované LED osvětlení jako volitelný doplněk",
        "Možnost osazení stínicí techniky (screenové rolety)",
        "Integrovaný žlab v konstrukci",
        "Volba základních a prémiových střešních krytin",
        "Záruka 5+ let",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("hliníková pergola") || c.toLowerCase().includes("pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Hliníková pergola"
    />
  );
}
