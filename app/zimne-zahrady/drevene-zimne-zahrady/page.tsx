import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { zimnaZahradaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Dřevěné zimní zahrady - WoodSteel",
  description:
    "Dřevěné zimní zahrady z BSH dřeva. Teplo a charakter klasiky, záruka 5+ let, vlastní SK výroba.",
  alternates: { canonical: "https://woodsteel.sk/zimne-zahrady/drevene-zimne-zahrady/" },
};

export default function DreveneZimneZahradyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Zimní zahrady", parentHref: "/zimne-zahrady" }}
      hero={{
        eyebrow: "Dřevěné zimní zahrady",
        title: (
          <>
            Dřevěné zimní zahrady s <span className="text-gold">přirozeným teplem.</span>
          </>
        ),
        subtitle:
          "Dřevo přináší do prostoru teplo a charakter, jaké se nedají napodobit. Přirozený materiál, který časem nezestárne — jen získá patinu a zůstane samozřejmou součástí domu.",
        image:
          "/images/drevena-zimna-zahrada5.jpg",
      }}
      intro={{
        title: "Dřevo jako obytný materiál",
        body:
          "Dřevěné zimní zahrady přinášejí do interiéru teplo, kterého hliník nikdy nedosáhne. Vhodné pro rodinné domy s dřevěnými nebo přírodními prvky. Při správné impregnaci vydrží konstrukce generace.",
      }}
      features={[
        "Lepené BSH dřevo (Brettschichtholz)",
        "Posuvné systémy",
        "Příprava na vytápění / klimatizaci",
        "Záruka 5+ let",
        "Vlastní SK výroba",
        "Impregnace proti UV a vlhkosti",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("dřevěná zimní")}
      faqs={zimnaZahradaFaqs.slice(0, 5)}
      stickyName="Dřevěná zimní zahrada"
    />
  );
}
