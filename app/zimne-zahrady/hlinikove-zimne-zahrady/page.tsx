import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { zimnaZahradaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Hliníkové zimní zahrady - WoodSteel",
  description:
    "Hliníkové zimní zahrady na míru. Posuvné systémy, bezúdržbová konstrukce s úpravou komaxit, záruka 5+ let.",
  alternates: { canonical: "https://woodsteel.sk/zimne-zahrady/hlinikove-zimne-zahrady/" },
};

export default function HlinikoveZimneZahradyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Zimní zahrady", parentHref: "/zimne-zahrady" }}
      hero={{
        eyebrow: "Hliníkové zimní zahrady",
        title: (
          <>
            Hliníkové zimní zahrady. <span className="text-gold">Maximální výhled.</span>
          </>
        ),
        subtitle:
          "Lehká konstrukce a velkorysé prosklení, které do prostoru pustí maximum světla. Čisté linie, které nekonkurují výhledu, a prostor připravený na celoroční využití — v létě i uprostřed zimy.",
        image:
          "/images/zimna-zahrada-hamuliakovo.jpeg",
      }}
      intro={{
        title: "Krásný design, maximum světla",
        body:
          "Hliníková zimní zahrada poskytuje ideální poměr cena/výkon — uděláme ji v sezónním nebo i celoročním provedení, stačí si vybrat variantu. Konstrukce je bezúdržbová a s povrchovou úpravou komaxit vydrží desetiletí.",
      }}
      features={[
        "Povrchová úprava hliníku komaxit",
        "Zasklení rámové / bezrámové",
        "Posuvné systémy",
        "Integrované LED osvětlení jako volitelný doplněk",
        "Možnost osazení stínicí techniky (screenové rolety)",
        "Integrovaný žlab v konstrukci",
        "Volba základních a prémiových střešních krytin",
        "Volitelné topení / klimatizace",
        "Záruka 5+ let",
        "Vlastní SK výroba",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("zimní") && !c.toLowerCase().includes("dřevěná")}
      faqs={zimnaZahradaFaqs.slice(0, 5)}
      stickyName="Hliníková zimní zahrada"
    />
  );
}
