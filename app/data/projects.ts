export type Project = {
  title: string;
  slug: string;
  category: string;
  categoryKey: "brandIdentity" | "publishing";
  categoryLabel?: {
    en: string;
    hu: string;
  };
  image: string;

  year: string;
  client: string;

  services: string[];
  colors: string[];

  overview: string;
  challenge: string;
  solution: string;

  gallery: string[];
  galleryEn?: string[];
  galleryLayout?: "mixed" | "wideGrid";
  socialMediaGallery?: string[];
};

export const projects: Project[] = [
  {
    title: "Kertész Szigszer",
    slug: "kertesz-szigszer",
    category: "Brand Identity",
    categoryKey: "brandIdentity",
    categoryLabel: {
      en: "Logo Design",
      hu: "Logótervezés",
    },
    image: "/projects/kertesz.jpg",

    year: "2025",
    client: "Kertész Szigszer",

    services: [
      "Logo Design",
      "T-shirt Printing",
    ],

    colors: [
      "#144422",
      "#94865F",
      "#1E1E1C",
      "#EFEFEF",
    ],

    overview:
      "Kertész Szigszer is an insulation and sheet metal company providing professional services in the field of mechanical insulation.",

    challenge:
      "The goal was to create a modern and easily recognisable logo for Kertész Szigszer Kft. that communicates trust and works clearly on workwear.",

    solution:
      "I designed a clean, structured logo and prepared the T-shirt print application, giving the company a professional and recognisable workwear presence.",

    gallery: [
      "/projects/kertesz-szigszer/kertesz-szigszer-gallery-01.png",
      "/projects/kertesz-szigszer/kertesz-szigszer-03.png",
      "/projects/kertesz-szigszer/kertesz-szigszer-07.png",
      "/projects/kertesz-szigszer/kertesz-szigszer-02.png",
      "/projects/kertesz-szigszer/kertesz-szigszer-04.png",
      "/projects/kertesz-szigszer/kertesz-szigszer-01.png",
    ],
    galleryLayout: "wideGrid",
  },

  {
    title: "Gibi Gyöngy",
    slug: "gibi-gyongy",
    category: "Brand Identity",
    categoryKey: "brandIdentity",
    image: "/projects/gibi.png",

    year: "",
    client: "",
    services: [],
    colors: [
      "#2A3F31",
      "#A6B798",
      "#821714",
      "#D6A64B",
      "#AF1F59",
      "#150D0D",
      "#F5F4F2",
    ],
    overview: "",
    challenge: "",
    solution: "",
    gallery: [
      "/projects/gibi-gyongy/gibi-gyongy-07.png",
      "/projects/gibi-gyongy/gibi-gyongy-01.png",
      "/projects/gibi-gyongy/gibi-gyongy-06.png",
      "/projects/gibi-gyongy/gibi-gyongy-05.png",
    ],
    galleryEn: [
      "/projects/gibi-gyongy/gibi-gyongy-07.png",
      "/projects/gibi-gyongy/gibi-gyongy-02-en.png",
      "/projects/gibi-gyongy/gibi-gyongy-06.png",
      "/projects/gibi-gyongy/gibi-gyongy-05.png",
    ],
    galleryLayout: "wideGrid",
    socialMediaGallery: [
      "/projects/gibi-gyongy/gibi-gyongy-04.png",
      "/projects/gibi-gyongy/gibi-gyongy-03.png",
    ],
  },

  {
    title: "Mazur",
    slug: "mazur",
    category: "Brand Identity",
    categoryKey: "brandIdentity",
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
    categoryKey: "brandIdentity",
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
    categoryKey: "brandIdentity",
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
    categoryKey: "publishing",
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
