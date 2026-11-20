import seoExport from "./seo-export.json";
import { clanekSkloHtml } from "./clanok-sklo";
import { clanekVyuzitiHtml } from "./clanok-vyuziti";
import { clanekRealizaceHtml } from "./clanok-realizace";
import { clanekMaterialHtml } from "./clanok-material";
import { clanekStineniHtml } from "./clanok-stineni";
import { clanekVizualizaceHtml } from "./clanok-vizualizace";
import { clanekCenaHtml } from "./clanok-cena";
import { clanekPristresekHtml } from "./clanok-pristresek";

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
    slug: "pristresek-na-auto-nebo-garaz",
    title: "Přístřešek na auto, nebo garáž? Co z toho se vám vyplatí",
    date: "2026-11-22",
    image: "/images/pristresok-na-auto-hero.jpg",
    author: "viktor-farda",
    excerpt:
      "Garáž řeší zabezpečení a skladování, přístřešek řeší počasí. Co přístřešek skutečně vyřeší, co ne, jak velký ho navrhnout a na co se při návrhu nejčastěji zapomíná.",
    summary:
      "Pokud auto nepotřebujete zabezpečit ani v garáži nic skladovat, dělá přístřešek většinu užitku za zlomek nákladů. Spolehlivě vyřeší sníh, námrazu ve mrazivých nocích, UV záření na laku a horko v interiéru; nevyřeší krádež, skladování ani déšť vháněný bokem. Rozměr navrhujte na používání auta, ne na jeho délku — s rezervou na otevřené dveře a nosič kol, a s výškou vyřešenou předem. Nejčastěji se zapomíná na odtok vody, nosný podklad pro patky, dimenzování na sněhovou oblast a přípravu vedení pro osvětlení či nabíjení elektromobilu.",
    category: "Pergoly",
    contentHtml: clanekPristresekHtml,
  }),
  enrich({
    slug: "co-ovlivnuje-cenu-pergoly-a-zimni-zahrady",
    title: "Co opravdu ovlivňuje cenu pergoly a zimní zahrady",
    date: "2026-11-21",
    image: "/images/co-ovplyvnuje-cenu.jpg",
    author: "peter-kurilla",
    excerpt:
      "Dvě pergoly o stejné ploše se můžou v ceně lišit dvojnásobně. Rozdíl nedělá marže, ale rozhodnutí o rozponu, střeše a zasklení. Kde se dá ušetřit rozumně — a kde se to nevyplácí.",
    summary:
      "Cenu konstrukce netvoří metr čtvereční, ale rozhodnutí při návrhu. Nejvíc s ní hýbe zasklení, pak rozpon (sloup navíc je mnohem levnější než silnější nosník), typ střechy a složitost kotvení a základů — položka, kterou nabídky nejčastěji tají. Materiál a barva rozhodují méně, než se čeká. Rozumně se šetří sloupem místo delšího rozponu, pevnou střechou a odložením doplňků s připraveným vedením; nešetří se na dimenzování na sníh, na vrstveném skle ve střeše, na kování posuvů a na kotvení. Proto cenu posíláme až po zaměření — do 24 hodin.",
    category: "Obecné",
    contentHtml: clanekCenaHtml,
  }),
  enrich({
    slug: "jak-si-predstavit-pergolu-u-sveho-domu",
    title: "Jak si pergolu nebo zimní zahradu představit u svého domu",
    date: "2026-11-20",
    image: "/images/ukazka-po.jpg",
    author: "denis-nemec",
    excerpt:
      "Pergolu nelze vrátit do obchodu — stojí u domu dvacet let. Tři způsoby, jak si výsledek představit ještě před stavbou, a jedna věc, kterou žádný z nich nenahradí.",
    summary:
      "Představu o budoucí konstrukci si lze udělat třemi způsoby: z fotek dokončených realizací (hned, ale bez vašeho domu), vizualizací do fotky vašeho domu (do minuty, zdarma, umožní porovnat barvy vedle sebe) nebo projektem od architekta (týdny a tisíce korun, smysl u novostaveb a atypických zadání). Všechny tři řeší jen vzhled. Jestli konstrukce na vašem domě vůbec jde, jaké rozměry se vejdou a kolik to bude stát, určí až zaměření technikem — to není alternativa k vizualizaci, ale další fáze. Pořadí je logické: nejdřív představa, potom technik.",
    category: "Obecné",
    contentHtml: clanekVizualizaceHtml,
  }),
  enrich({
    slug: "stineni-a-prehrivani-prosklenych-prostor",
    title: "Proč se prosklený prostor přehřívá — a co s tím opravdu funguje",
    date: "2026-11-19",
    image: "/images/stineni-prehrivani.jpg",
    author: "viktor-farda",
    excerpt:
      "Lidé se ptají, jestli nebude v zimní zahradě v zimě zima. Ve skutečnosti pak řeší červenec. Proč venkovní stínění funguje a vnitřní žaluzie ne — a co se musí naplánovat předem.",
    summary:
      "Prosklený prostor se přehřívá kvůli skleníkovému efektu: záření projde sklem dovnitř, ale teplo už ven neodejde. Z toho plyne základní pravidlo — slunce je potřeba zastavit ještě před sklem. Nejúčinnější jsou venkovní screenové rolety, u pergol lamelová střecha; vnitřní žaluzie odstraní oslnění, ale ne horko. Reflexní sklo funguje trvale a bez obsluhy, hodí se ale spíš jako doplněk. Polovinu úspěchu dělá příčné větrání, které se musí naplánovat při návrhu. Nejnáročnější je západní orientace — nízké odpolední slunce zastaví jedině svislé screeny.",
    category: "Obecné",
    contentHtml: clanekStineniHtml,
  }),
  enrich({
    slug: "hlinik-nebo-drevo-material-konstrukce",
    title: "Hliník, nebo dřevo? Jak vybrat materiál konstrukce",
    date: "2026-11-18",
    image: "/images/hlinik-nebo-drevo.jpg",
    author: "branislav-kmec",
    excerpt:
      "Hliník se nekroutí a nepotřebuje péči, dřevo má teplotu a k některým domům prostě sedí líp. Čím se oba materiály liší v praxi — a proč u dřeva nikdy nepoužíváme masivní hranoly.",
    summary:
      "Hliník je tvarově stálý, barevně stálý a zvládne větší rozpon na tenčím profilu — proto se hodí k novostavbám a všude, kde se počítá s prosklením a posuvy. Dřevo má teplotu a strukturu a ke starším či venkovským domům sedí líp, ale vyžaduje obnovu lazury po pár letech. U dřeva používáme výhradně lepené dřevo, ne masivní hranoly: masiv pracuje, kroutí se a praská. Oba materiály se dají kombinovat — nejčastěji dřevěná nosná konstrukce s hliníkovým zasklením.",
    category: "Obecné",
    contentHtml: clanekMaterialHtml,
  }),
  enrich({
    slug: "jak-probiha-realizace-krok-za-krokem",
    title: "Jak probíhá realizace krok za krokem: od prvního telefonátu po předání",
    date: "2026-11-17",
    image: "/images/realizace-montaz.jpg",
    author: "peter-kurilla",
    excerpt:
      "Nejčastější otázka po cenové nabídce není o ceně, ale o tom, jak to celé probíhá. Sedm kroků od prvního kontaktu po předání, jak dlouho trvají a co se nejčastěji protáhne.",
    summary:
      "Realizace má sedm kroků: první kontakt, bezplatné zaměření u vás doma, cenová nabídka do 24 hodin, smlouva se zálohou, výroba na míru, montáž a předání se zárukou. Zaměření je klíčové — technik posuzuje stav fasády, spád terasy, odtok vody i sněhovou oblast a teprve pak vzniká konkrétní řešení. Montáž trvá u pergoly obvykle den, u zimní zahrady dva až tři. Nejdelší a nejhůř odhadnutelná část bývá rozmýšlení nad nabídkou, proto s ní počítejte, pokud máte pevný termín.",
    category: "Obecné",
    contentHtml: clanekRealizaceHtml,
  }),
  enrich({
    slug: "zimni-zahrada-ktera-se-opravdu-pouziva",
    title: "Zimní zahrada, do které si denně sednete",
    date: "2026-11-16",
    image: "/images/zimni-zahrada-rano.jpg",
    excerpt:
      "Ranní káva, jídelní stůl, pracovna nebo místo pro rostliny — zimní zahrady se nakonec využívají jinak, než si majitelé plánovali. A tři věci rozhodují o tom, jestli do ní budete chodit denně.",
    summary:
      "Zákazníci si zimní zahradu pořizují kvůli jedné představě a nakonec ji používají úplně jinak — a víc. Nejčastější odpovědí je ranní káva, protože za sklem si sednete i v lednu. Hodně lidí si tam přesune jídelní stůl a do původní jídelny pak skoro nechodí. Dál se objevuje pracovna, přezimování rostlin, místo pro děti za deště a cvičení. Zimní zahrady, které se opravdu používají, mají tři věci společné: jeden jasný účel, pohodlné sezení a vyřešené stínění a světlo.",
    category: "Zimní zahrady",
    contentHtml: clanekVyuzitiHtml,
  }),
  enrich({
    slug: "jake-sklo-do-zimni-zahrady",
    title: "Jaké sklo do zimní zahrady: dvojsklo, trojsklo a bezpečnostní sklo v praxi",
    date: "2026-11-16",
    image: "/images/sklo-zimni-zahrada.jpg",
    excerpt:
      "Sklo tvoří většinu plochy i většiny ceny zimní zahrady a nejde ho později vyměnit. Jak se rozhodnout mezi jednosklem, dvojsklem a trojsklem, proč do střechy patří vrstvené sklo a kolik sněhu musí konstrukce unést.",
    summary:
      "Zasklení je u zimní zahrady nejdůležitější a prakticky nevratné rozhodnutí. Jednosklo zastaví déšť a vítr, izolační dvojsklo (Ug kolem 1,1) je rozumný standard pro užívání od jara do podzimu i s přitápěním, trojsklo (Ug kolem 0,6) dává smysl jen při napojení na vytápění domu — je těžší a konstrukce na něj musí být dimenzovaná od začátku. Do střechy patří vrstvené bezpečnostní sklo, protože při rozbití zůstanou střepy na fólii. Proti letnímu přehřívání pomáhá reflexní sklo v kombinaci s venkovním stíněním. A tloušťku skla i profilů určuje sněhová oblast.",
    category: "Zimní zahrady",
    contentHtml: clanekSkloHtml,
  }),
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
