import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";

export const metadata: Metadata = {
  title: "Přístřešky na auto - WoodSteel",
  description:
    "Hliníkové přístřešky na auto na míru — kotvené do domu nebo samostatně stojící. Odvodnění skryté v konstrukci, vlastní SK výroba.",
  alternates: { canonical: "https://woodsteel.sk/pergoly/pristresky-na-auto/" },
};

export default function PristreskyNaAutoPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Přístřešky na auto",
        title: (
          <>
            Přístřešky na auto, které <span className="text-gold">vydrží počasí</span>.
          </>
        ),
        subtitle:
          "Konstrukce na míru, která ochrání auto před sluncem, sněhem i krupobitím. S odvodněním skrytým přímo v profilech.",
        image:
          "/images/IMG_5562.jpg",
      }}
      intro={{
        title: "Přístřešek, který odolá sněhu i větru",
        body:
          "Každý přístřešek navrhujeme podle sněhové oblasti a zatížení větrem v místě stavby — ne podle katalogu. Hliníkové provedení je štíhlé a bezúdržbové — přístřešek může být kotvený do domu nebo samostatně stojící v prostoru.",
      }}
      features={[
        "Kotvené do domu nebo samostatně stojící v prostoru",
        "Povrchová úprava hliníku komaxit",
        "Příprava na pozdější zasklení",
        "Integrované LED osvětlení jako volitelný doplněk",
        "Možnost osazení stínicí techniky (screenové rolety)",
        "Integrovaný žlab v konstrukci",
        "Volba základních a prémiových střešních krytin",
        "Záruka 5+ let",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("přístřešek") || c.toLowerCase().includes("carport")}
      stickyName="Přístřešek na auto"
    />
  );
}
