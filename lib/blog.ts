import seoExport from "./seo-export.json";

/** Autoři článků — jméno, role a oříznutá kulatá fotka. */
export const autori = {
  "denis-nemec":     { jmeno: "Denis Nemec",     role: "Zakladatel",                   foto: "/images/autor-denis-nemec.jpg" },
  "peter-kurilla":   { jmeno: "Peter Kurilla",   role: "Ředitel obchodního oddělení",  foto: "/images/autor-peter-kurilla.jpg" },
  "branislav-kmec":  { jmeno: "Branislav Kmec",  role: "Zakladatel",                   foto: "/images/autor-branislav-kmec.jpg" },
  "viktor-farda":    { jmeno: "Viktor Farda",    role: "Senior obchodní manažer",      foto: "/images/autor-viktor-farda.jpg" },
} as const;

export type AutorId = keyof typeof autori;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  /** Zhrnutie do rámčeka nad článkom. Keď chýba, použije sa `excerpt`. */
  summary?: string;
  /** Kto článok napísal. Keď chýba, uvedie sa Denis Nemec. */
  author?: AutorId;
  category: "Pergoly" | "Zimní zahrady" | "Zasklení" | "Obecné";
  contentHtml?: string;
  contentLength?: number;
};

const PLACEHOLDER_IMG =
  "/images/zimna-zahrada-rovinka.jpeg";

type SeoEntry = {
  path: string;
  content_html?: string;
  content_text_length?: number;
};
const seoMap = new Map<string, SeoEntry>(
  (seoExport as SeoEntry[]).map((e) => [e.path.replace(/^\//, "").replace(/\/$/, ""), e])
);

function enrich(post: Omit<BlogPost, "contentLength"> & { contentLength?: number }): BlogPost {
  const entry = seoMap.get(post.slug);
  return {
    ...post,
    // Vlastné HTML má prednosť — články písané tu nie sú v seo-exporte.
    contentHtml: post.contentHtml ?? entry?.content_html,
    contentLength: post.contentLength ?? entry?.content_text_length,
  };
}

export const blogPosts: BlogPost[] = [
  enrich({
    slug: "ako-spravne-kotvit-pergolu-do-fasady-domu",
    title: "Jak správně kotvit pergolu do fasády domu",
    date: "2026-03-03",
    image: "/images/ako-spravne-kotvit-pergolu.jpg",
    excerpt: "Připojení pergoly ke stěně domu se zdá být jednoduché — ale provedený detail rozhoduje o desetiletích bezproblémového provozu. Jaké jsou nejčastější chyby a jak se jim vyhnout.",
    category: "Pergoly",
  }),
  enrich({
    slug: "home-office-pod-pergolou-praca-na-cerstvom-vzduchu-bez-kompromisov",
    title: "Home office pod pergolou: práce na čerstvém vzduchu bez kompromisů",
    date: "2026-03-03",
    image: "/images/home-office-pod-pergolou.jpg",
    excerpt: "Stabilní wi-fi, stín, ochrana před sluncem i deštěm — pergola je dnes plnohodnotný outdoor pracovní prostor. Podívejme se na praktické tipy.",
    category: "Pergoly",
  }),
  enrich({
    slug: "ako-vyuzit-pergolu-naplno-pocas-celeho-roka",
    title: "Jak využít pergolu naplno během celého roku",
    date: "2026-03-03",
    image: "/images/ako-vyuzit-pergolu.jpg",
    excerpt: "Boční screenové rolety, infrazářiče, LED osvětlení a textilie — několik doplňků promění pergolu z letního doplňku na celoroční oblíbenou zónu.",
    category: "Pergoly",
  }),
  enrich({
    slug: "ako-zladit-pergolu-alebo-zimnu-zahradu",
    title: "Jak sladit pergolu nebo zimní zahradu s vaším domem",
    date: "2025-11-06",
    image: "/images/ako-zladit-zimnu-zahradu.jpg",
    excerpt: "Materiál, barva, profilace — výběr detailů rozhoduje o tom, jestli konstrukce vypadá jako přirozené pokračování domu, nebo jako přilepený doplněk.",
    category: "Obecné",
  }),
  enrich({
    slug: "ako-vyuzit-zimnu-zahradu",
    title: "Jak využít zimní zahradu naplno",
    date: "2025-11-06",
    image: "/images/vyuzitie-zimnej-zahrady.jpg",
    excerpt: "Obývací pokoj, jídelna, zimní herbář nebo úplně nový obytný prostor — možnosti využití zimní zahrady jsou širší, než se zdá.",
    category: "Zimní zahrady",
  }),
  enrich({
    slug: "udrzba-hlinikovej-pergoly",
    title: "Údržba hliníkové pergoly",
    date: "2025-11-06",
    image: "/images/udrzba-hlinikovej-pergoly.jpg",
    excerpt: "Hliník je bezúdržbový — ale několik jednoduchých kroků ročně prodlouží životnost a estetiku vaší pergoly o desetiletí.",
    category: "Pergoly",
  }),
  enrich({
    slug: "zimna-zahrada-alebo-pergola-co-je-vhodnejsie",
    title: "Zimní zahrada nebo pergola — co je vhodnější?",
    date: "2025-09-28",
    image: "/images/zimna-zahrada-pergola.jpg",
    excerpt: "Investice do outdoor prostoru — srovnání dvou nejoblíbenějších řešení podle rozpočtu, lokality, stylu domu i plánovaného využití.",
    category: "Obecné",
  }),
  enrich({
    slug: "premena-terasy-na-zimnu-zahradu",
    title: "Proměna terasy na zimní zahradu",
    date: "2025-06-07",
    image: "/images/premena-terasy.jpg",
    excerpt: "Jaké možnosti máte při proměně stávající terasy na plně uzavíratelnou zimní zahradu — od jednoduchého zasklení po kompletní konstrukci.",
    category: "Zimní zahrady",
  }),
  enrich({
    slug: "zimna-zahrada-ako-investicia",
    title: "Zimní zahrada jako investice",
    date: "2025-06-07",
    image: "/images/zimna-zahrada-investicia.jpg",
    excerpt: "Jak se zvýší hodnota nemovitosti s přidanou zimní zahradou? Pohled na návratnost investice z více úhlů.",
    category: "Zimní zahrady",
  }),
  enrich({
    slug: "zasklenie-terasy-a-jej-vyhody",
    title: "Zasklení terasy a jeho výhody",
    date: "2025-04-14",
    image: "/images/zasklenie-terasy-blog.jpg",
    excerpt: "Posuvné systémy umožňují mít otevřenou terasu v létě a uzavřený prostor v zimě. Jaké systémy existují a který si vybrat.",
    category: "Zasklení",
  }),
  enrich({
    slug: "poistenie-zimnej-zahrady",
    title: "Pojištění zimní zahrady — na co si dát pozor",
    date: "2025-01-21",
    image: "/images/poistenie.jpg",
    excerpt: "Krupobití, vichřice, vandalismus — jaká rizika pokrývá standardní pojištění nemovitosti a kdy je potřeba připojištění.",
    category: "Zimní zahrady",
  }),
  enrich({
    slug: "ako-si-vybrat-zimnu-zahradu",
    title: "Jak si vybrat zimní zahradu?",
    date: "2024-11-29",
    image: "/images/zimna-zahrada-blog.jpg",
    excerpt: "Hliník vs. dřevo, celoroční vs. sezónní, na míru vs. typová — průvodce rozhodováním podle vašich potřeb a rozpočtu.",
    category: "Zimní zahrady",
  }),
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Odhad času čtení v minutách.
 *
 * `contentLength` nesou starší články ze seo-exportu; novější si nesou rovnou
 * HTML, takže z něj délku dopočítáme. 200 slov za minutu je běžný průměr.
 */
export function readingMinutes(post: BlogPost): number {
  const znaky =
    post.contentLength ??
    (post.contentHtml ? post.contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").length : 0);
  if (!znaky) return 3;
  return Math.max(2, Math.round(znaky / 6 / 200));
}

/** Kategorie, které se reálně vyskytují — v pořadí podle počtu článků. */
export function blogKategorie(): { nazev: string; pocet: number }[] {
  const mapa = new Map<string, number>();
  for (const p of blogPosts) mapa.set(p.category, (mapa.get(p.category) ?? 0) + 1);
  return [...mapa.entries()]
    .map(([nazev, pocet]) => ({ nazev, pocet }))
    .sort((a, b) => b.pocet - a.pocet);
}

/** Autor článku — s rozumným výchozím stavem pro starší články bez údaje. */
export function autorClanku(post: BlogPost) {
  return autori[post.author ?? "denis-nemec"];
}
