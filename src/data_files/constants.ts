import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Subsektor Seni Rupa",
  tagline: "purwakARTa",
  description: "Subsektor senirupa adalah salah satu  subsektor dari 17 subsektor yang ada di komite Ekraf, adapun kegiatan yg ada di subsektor seni rupa yaitu workshop seni rupa, diskusi seputar seni rupa, pameran karya. Kegiatan tersebut adalah upaya untuk aktivasi subsektor seni rupa untuk dapat berkontribusi di bidang seni rupa baik untuk pelaku pemula maupun yang sudah expert tanpa ada sekat yang membatasi antar pelaku seni rupa agar terbentuk menjadi suatu ekosistem senirupa di Purwakarta.",
  description_short: "Wadah kreatif untuk  seluruh entitas seni rupa agar dapat menjalin silaturahmi dan mengembangkan kemampuan seni rupa.",
  url: "https://senirupa.ekrafpurwakarta.com/",
  author: "Ekraf Purwakarta - Subsektor Seni Rupa",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} - Ekraf Purwakarta`,
  description: "Wadah kreatif untuk  seluruh entitas seni rupa agar dapat menjalin silaturahmi dan mengembangkan kemampuan seni rupa.",
  image: ogImageSrc,
};
