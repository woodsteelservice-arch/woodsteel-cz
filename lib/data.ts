// Real assets reused from existing WoodSteel sites (prod + dev media library).

export const team = [
  {
    name: "Branislav Kmec",
    role: "Zakladatel",
    photo: "/images/BranoKmecBG.png",
    quote:
      "Mojí vizí je posouvat se dál, držet krok s trendy a zároveň si zachovat lidský, proklientský přístup.",
  },
  {
    name: "Denis Nemec",
    role: "Zakladatel",
    photo: "/images/DenisNemecBG.png",
    quote:
      "Mojí prioritou je, abychom jako společnost doručovali našim zákazníkům co nejvyšší hodnotu.",
  },
  {
    name: "Peter Kurilla",
    role: "Ředitel obchodního oddělení",
    photo: "/images/PeterKurillaBG.png",
    quote: "V oboru se pohybuji už více než 5 let.",
  },
  {
    name: "Viktor Farda",
    role: "Senior obchodní manažer",
    photo: "/images/ViktorFardaBG.png",
    quote:
      "Působím na pozici seniorního obchodního manažera s dlouholetými zkušenostmi.",
  },
];

// `location` je voliteľná — pri fotkách, kde obec zatiaľ nemáme doplnenú,
// karta zobrazí len kategóriu namiesto prázdneho riadka.
export const realizations: {
  location?: string;
  category: string;
  image: string;
}[] = [
  {
    location: "BA — Vrakuňa",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-BA-Vrakuna.jpeg",
  },
  {
    location: "Hamuliakovo",
    category: "Zimní zahrada",
    image:
      "/images/zimna-zahrada-hamuliakovo.jpeg",
  },
  {
    location: "Senec",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-senec.jpeg",
  },
  {
    location: "Rovinka",
    category: "Zasklení terasy",
    image:
      "/images/zimna-zahrada-rovinka.jpeg",
  },
  {
    location: "Dunajská Lužná",
    category: "Zimní zahrada",
    image:
      "/images/zimna-zahrada-dunajska-luzna.jpeg",
  },
  {
    location: "Trenčín — Soblahov",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola-trencin.jpeg",
  },
  {
    location: "Kittsee",
    category: "Zimní zahrada",
    image:
      "/images/zimna-zahrada-kittse.jpeg",
  },
  {
    location: "BA — Podunajské Biskupice",
    category: "Zimní zahrada",
    image:
      "/images/zimna-zahrada-podunajske-biskupice.jpeg",
  },
  {
    location: "Horné Janíky",
    category: "Hliníková pergola",
    image:
      "/images/zimna-zahrada-horne-janiky-1.jpeg",
  },
  // Drevené realizácie prevzaté z woodsteel.sk — konštrukcia je skutočne
  // drevená, preto majú vlastnú kategóriu a nemiešajú sa s hliníkovými.
  {
    location: "Rovinka",
    category: "Dřevěná zimní zahrada",
    image:
      "/images/drevena-zimna-zahrada2.jpg",
  },
  {
    location: "Rovinka",
    category: "Dřevěná zimní zahrada",
    image:
      "/images/drevena-zimna-zahrada3.jpg",
  },
  {
    location: "Rovinka",
    category: "Dřevěná zimní zahrada",
    image:
      "/images/drevena-zimna-zahrada4.jpg",
  },
  {
    location: "Rovinka",
    category: "Dřevěná zimní zahrada",
    image:
      "/images/drevena-zimna-zahrada5.jpg",
  },
  // Ďalšie hliníkové pergoly prevzaté z woodsteel.sk
  {
    location: "Ivanka pri Dunaji",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola2.jpg",
  },
  {
    location: "Neded",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola3.jpg",
  },
  {
    location: "Trenčín",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola4.jpg",
  },
  {
    location: "BA — Vrakuňa",
    category: "Hliníková pergola",
    image:
      "/images/hlinikova-pergola5.jpg",
  },
  // Prístrešky na auto — vlastné fotografie zákazníka
  {
    location: "BA — Koliba",
    category: "Přístřešek na auto",
    image:
      "/images/pristresok-na-auto-2.jpg",
  },
  {
    location: "Trenčianske Teplice",
    category: "Přístřešek na auto",
    image:
      "/images/pristresok-na-auto-3.jpg",
  },
  {
    location: "Viničné",
    category: "Přístřešek na auto",
    image:
      "/images/pristresok-na-auto-4.jpg",
  },
];

// Skutočné recenzie zákazníkov zo slovenského Googlu — pre českú verziu
// preložené. Obsah ani vyznenie neupravujeme, mení sa len jazyk.
// `location` a `time` sú voliteľné, karta ich zobrazí, len ak sú vyplnené.
export const reviews: {
  name: string;
  text: string;
  location?: string;
  time?: string;
}[] = [
  {
    name: "Alena C.",
    text: "Zimní zahradu od Woodsteelu vřele doporučujeme. Je nad očekávání 👌 Pokud ji chcete užívat už na jaře, neváhejte si ji objednat už teď. Děkujeme zvlášť panu Kurillovi za vysoce profesionální jednání se zákazníkem 👍",
  },
  {
    name: "Naďa G.",
    text: "Dlouho jsme se rozhodovali, kterou firmu si zvolíme, a jsem nesmírně ráda, že jsem se rozhodla právě pro Woodsteel. Neskutečně milý a ochotný personál s promptní komunikací a profesionálním přístupem. Zimní zahradu nám dokončili ještě před termínem, což nás potěšilo ještě víc. Za nás určitě doporučuji. :)",
  },
  {
    name: "Radka Š.",
    text: "Určitě doporučuji, výborná komunikace od začátku až do konce, odborný a profesionální přístup, precizní práce a vysoká kvalita. O zákazníka se starají. Výsledek skutečně stojí za to.",
  },
  {
    name: "Veronika H.",
    text: "Společnost nám montovala hliníkovou pergolu. Od prvního kontaktu perfektní a srozumitelná komunikace, rychlé dodání a montáž proběhla bez problémů za pár hodin. Perfektní práce, děkujeme :)",
  },
  {
    name: "Roman Z.",
    text: "Máme od nich prosklení terasy. Perfektní komunikace s obchodním zástupcem, profesionální zaměření a montáž. Můžu jen doporučit. 👍",
  },
  {
    name: "Tomáš M.",
    text: "Dostal jsem doporučení od spokojeného souseda a také můžu jen doporučit. Byly mi vysvětleny všechny detaily, které jsem potřeboval ujasnit. Samotná realizace během jednoho pracovního dne. Známá zkušenost hodná recenze. Určitě rád doporučím i já dál.",
  },
];

export const categories = [
  {
    slug: "pergoly",
    name: "Pergoly",
    description:
      "Hliníkové pergoly s moderním vzhledem nebo klasické dřevěné konstrukce z lepeného BSH dřeva. Příprava na pozdější zasklení.",
    image:
      "/images/hlinikova-pergola-svetla.jpeg",
  },
  {
    slug: "zimne-zahrady",
    name: "Zimní zahrady",
    description:
      "Plnohodnotná obytná zóna nezávislá na počasí. Izolační dvojsklo, posuvné systémy s plynulým otevíráním.",
    image:
      "/images/zimna-zahrada-moderna.jpeg",
  },
  {
    slug: "zasklenie-teras",
    name: "Zasklení teras",
    description:
      "Proměna otevřené terasy v chráněný prostor během chladnějších měsíců. Plně posuvné, otevřené v létě, uzavřené v zimě.",
    image:
      "/images/zasklenie-terasy-javor-v2.jpeg",
  },
];

// `meta` = krátky časový alebo vecný údaj ku kroku
export const process = [
  { n: "01", title: "Poptávka", meta: "Do hodiny", description: "Zavoláte nebo napíšete." },
  { n: "02", title: "Prohlídka", meta: "Zdarma", description: "Přijedeme zaměřit prostor." },
  { n: "03", title: "Cenová nabídka", meta: "Do 48 hodin", description: "Cenová nabídka na míru." },
  { n: "04", title: "Výroba", meta: "Vlastní dílna", description: "Vyrábíme na Slovensku." },
  { n: "05", title: "Montáž", meta: "Na klíč", description: "Postavíme a předáme." },
];

// Číslo je vždy prvé — pás ho zobrazuje veľké a odpočítava od nuly,
// popis pod ním musí na číslo nadväzovať.
// Poradie sleduje to, čo zákazníka pri rozhodovaní zaujíma najviac:
// koľko toho postavíme → akú istotu dostane → kam všade chodíme →
// ako rýchlo sa ozveme. Posledný údaj vedie priamo k dopytu.
export const stats = [
  { value: "250+", label: "Realizací ročně" },
  { value: "5+", label: "Let záruka" },
  { value: "5", label: "Zemí působení" },
  { value: "48h", label: "Do odeslání cenové nabídky" },
];

// `match` = cesty, pri ktorých sa položka označí ako aktívna (prefixová zhoda).
// Ak chýba, použije sa `href`.
export const navigation = [
  {
    label: "Produkty",
    href: "/pergoly",
    match: ["/pergoly", "/zimne-zahrady", "/zasklenie-teras"],
    // Dve úrovne — kategória a jej prevedenia, rovnako ako na woodsteel.sk
    submenu: [
      {
        label: "Pergoly",
        href: "/pergoly",
        items: [
          { label: "Hliníkové pergoly", href: "/pergoly/hlinikove-pergoly" },
          { label: "Dřevěné pergoly", href: "/pergoly/drevene-pergoly" },
          { label: "Přístřešky na auto", href: "/pergoly/pristresky-na-auto" },
        ],
      },
      {
        label: "Zimní zahrady",
        href: "/zimne-zahrady",
        items: [
          { label: "Hliníkové zimní zahrady", href: "/zimne-zahrady/hlinikove-zimne-zahrady" },
          { label: "Dřevěné zimní zahrady", href: "/zimne-zahrady/drevene-zimne-zahrady" },
        ],
      },
      {
        label: "Zasklení teras",
        href: "/zasklenie-teras",
        items: [
          { label: "Rámové zasklení teras", href: "/zasklenie-teras/ramove-zasklenie" },
          { label: "Bezrámové zasklení teras", href: "/zasklenie-teras/bezramove-zasklenie" },
        ],
      },
    ],
  },
  { label: "Realizace", href: "/realizacie" },
  { label: "Články", href: "/clanky" },
  { label: "O nás", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];
