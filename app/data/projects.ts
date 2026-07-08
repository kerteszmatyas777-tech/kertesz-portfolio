export type Project = {
  title: string;
  slug: string;
  category: string;
  image: string;

  year: string;
  client: string;

  services: string[];
  colors: string[];

  overview: string;
  challenge: string;
  solution: string;

  gallery: string[];
};

export const projects: Project[] = [
  {
    title: "Kertész Szigszer",
    slug: "kertesz-szigszer",
    category: "Brand Identity",
    image: "/projects/kertesz.jpg",

    year: "2025",
    client: "Kertész Szigszer",

    services: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Print Design",
    ],

    colors: [
      "#113B8E",
      "#F8F9FB",
      "#2F2F2F",
      "#D8C7A1",
    ],

    overview:
      "Kertész Szigszer is a handcrafted herbal syrup brand built around authenticity, nature and premium quality.",

    challenge:
      "Create a visual identity that communicates craftsmanship while standing out in a competitive market.",

    solution:
      "A clean visual system with refined typography and a timeless identity.",

    gallery: [
      "/projects/kertesz.jpg",
      "/projects/kertesz.jpg",
      "/projects/kertesz.jpg",
      "/projects/kertesz.jpg",
    ],
  },

  {
    title: "Gibi Gyöngy",
    slug: "gibi-gyongy",
    category: "Brand Identity",
    image: "/projects/gibi.png",

    year: "",
    client: "",
    services: [],
    colors: [],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [],
  },

  {
    title: "Mazur",
    slug: "mazur",
    category: "Brand Identity",
    image: "/projects/mazur.png",

    year: "",
    client: "",
    services: [],
    colors: [],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [],
  },

  {
    title: "Tisztafa",
    slug: "tisztafa",
    category: "Brand Identity",
    image: "/projects/tisztafa.png",

    year: "",
    client: "",
    services: [],
    colors: [],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [],
  },

  {
    title: "Hermon Kertépítés",
    slug: "hermon-kertepites",
    category: "Brand Identity",
    image: "/projects/hermon.png",

    year: "",
    client: "",
    services: [],
    colors: [],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [],
  },

  {
    title: "Szolnok Vár Projektkiadvány",
    slug: "szolnok-var",
    category: "Publishing",
    image: "/projects/Portfolio_20258.jpg",

    year: "",
    client: "",
    services: [],
    colors: [],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [],
  },
];