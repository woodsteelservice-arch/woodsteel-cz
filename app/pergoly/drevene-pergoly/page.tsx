import type { Metadata } from "next";
import { ProductSubpage } from "@/components/ProductSubpage";
import { pergolaFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Dřevěné pergoly - WoodSteel",
  description:
    "Dřevěné pergoly na míru z lepeného dřeva. Přirozené teplo, tvarová stálost a příprava na pozdější zasklení. Vlastní SK výroba.",
  alternates: { canonical: "https://woodsteelzimnizahrady.cz/pergoly/drevene-pergoly/" },
};

export default function DrevenePergolyPage() {
  return (
    <ProductSubpage
      breadcrumb={{ parentLabel: "Pergoly", parentHref: "/pergoly" }}
      hero={{
        eyebrow: "Dřevěné pergoly",
        title: (
          <>
            Dřevěné pergoly s <span className="text-gold">charakterem klasiky</span>.
          </>
        ),
        subtitle:
          "Přirozený materiál, který prostoru dodá teplo a časem získá patinu. Sedne k tradiční fasádě stejně jako k novostavbě.",
        image:
          "/images/drevena-pergola-hero.jpg",
      }}
      intro={{
        title: "Přírodní dřevo, které vydrží",
        body:
          "Používáme lepené dřevo — vrstvenou konstrukci, která nepraská ani se nekroutí a udrží tvar i po letech. Povrchová úprava ji chrání před sluncem a vlhkostí, takže pergola stárne pomalu a pěkně.",
      }}
      features={[
        "Lepené dřevo, které nepraská ani se nekroutí",
        "Povrchová úprava proti slunci a vlhkosti",
        "Integrované odvodnění konstrukce",
        "Připravená na pozdější zasklení",
        "Volitelné LED osvětlení a boční screenové rolety",
        "Volba základních a prémiových střešních krytin",
        "Záruka 5+ let",
      ]}
      realizationFilter={(c) => c.toLowerCase().includes("dřevěná pergola")}
      faqs={pergolaFaqs.slice(0, 5)}
      stickyName="Dřevěná pergola"
    />
  );
}
