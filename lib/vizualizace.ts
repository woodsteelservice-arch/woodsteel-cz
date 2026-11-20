/**
 * Zdieľané dáta pre AI vizualizáciu (klient aj API route).
 *
 * Engine je prevzatý z woodsteel-pricing (`/api/visualize`), ale tento web je
 * verejný — negeneruje teda obchodník s prihlásením, ale návštevník. Preto je
 * ponuka zjednodušená (produkt + farba) a výstup zamknutý za kontaktné údaje.
 */

export type ProduktVizu = "pergola" | "zimni_zahrada" | "pristresek" | "zaskleni";

export const PRODUKTY: {
  kod: ProduktVizu;
  nazev: string;
  popis: string;
  /** Anglický opis do promptu pre model */
  en: string;
  /** Kľúčové slová názvov súborov v public/reference */
  refKeywords: string[];
}[] = [
  {
    kod: "pergola",
    nazev: "Hliníková pergola",
    popis: "Zastřešení terasy na štíhlých sloupech",
    en: "aluminium terrace pergola (roof canopy on slim aluminium posts)",
    refKeywords: ["pergola"],
  },
  {
    kod: "zimni_zahrada",
    nazev: "Zimní zahrada",
    popis: "Plně prosklený hliníkový prostor",
    en: "winter garden (fully glazed aluminium conservatory)",
    refKeywords: ["zimna", "zahrada"],
  },
  {
    kod: "zaskleni",
    nazev: "Zasklení terasy",
    popis: "Posuvné zasklení stávající terasy",
    en: "terrace glazing system (sliding glass panels enclosing an existing covered terrace)",
    refKeywords: ["zimna", "zahrada"],
  },
  {
    kod: "pristresek",
    nazev: "Přístřešek na auto",
    popis: "Samostatně stojící carport",
    en: "freestanding aluminium carport (flat-roof car shelter on slim posts)",
    refKeywords: ["pergola"],
  },
];

export const FARBY: {
  kod: string;
  nazev: string;
  swatch: string;
  refKeyword?: string;
  /** Najčastejšie objednávané prevedenie — na webe dostane štítok. */
  oblibene?: boolean;
}[] = [
  { kod: "RAL 7016 — antracit, matný", nazev: "Antracit", swatch: "#383E42", refKeyword: "antracit", oblibene: true },
  { kod: "PE 7016 TD — antracit strukturovaný", nazev: "Antracit struktura", swatch: "#44494C", refKeyword: "antracit" },
  { kod: "RAL 9010 — bílá", nazev: "Bílá", swatch: "#F2F0EA", refKeyword: "biela" },
  { kod: "RAL 9006 — stříbrná metalíza", nazev: "Stříbrná", swatch: "#A7ABAD", refKeyword: "siva" },
  { kod: "P8017T — tmavě hnědá strukturovaná", nazev: "Tmavě hnědá", swatch: "#4A352E", refKeyword: "tmavohneda" },
  { kod: "Lepené dřevo (BSH), transparentní lazura", nazev: "Dřevo", swatch: "#A9682F", refKeyword: "drevo" },
];

/** Kraje ČR — pro formulář i pro směrování leadu obchodníkovi. */
export const KRAJE = [
  "Hlavní město Praha",
  "Středočeský kraj",
  "Jihočeský kraj",
  "Plzeňský kraj",
  "Karlovarský kraj",
  "Ústecký kraj",
  "Liberecký kraj",
  "Královéhradecký kraj",
  "Pardubický kraj",
  "Kraj Vysočina",
  "Jihomoravský kraj",
  "Olomoucký kraj",
  "Zlínský kraj",
  "Moravskoslezský kraj",
];

/** Prostředí/scéna, do které se konstrukce zasadí, když zákazník nenahraje fotku domu. */
export const PROSTREDI: { kod: string; nazev: string; en: string }[] = [
  {
    kod: "moderni",
    nazev: "Moderní novostavba",
    en: "a contemporary single-family house with white render, anthracite windows and a flat or low-pitched roof, on a tidy lawn terrace",
  },
  {
    kod: "klasicky",
    nazev: "Klasický rodinný dům",
    en: "a traditional Central-European family house with light plaster facade, pitched tiled roof and a paved terrace with a mature garden",
  },
  {
    kod: "bungalov",
    nazev: "Bungalov",
    en: "a single-storey bungalow with large sliding windows opening onto a paved garden terrace",
  },
];
