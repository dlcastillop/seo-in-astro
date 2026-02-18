export interface JsonLdForArticle {
  type: "Article" | "NewsArticle" | "BlogPosting";
  images: string[];
  datePublished: Date;
  dateModified: Date;
  authors: {
    name: string;
    url: string;
  }[];
  headline: string;
  baseUrl: string;
}

interface JsonLdForBreadcrumb {
  itemList: { name: string; route: string }[];
  baseUrl: string;
}

interface JsonLdForFaq {
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface JsonLdForSoftwareApp {
  softwareName: string;
  softwareDescription: string;
  operatingSystem: string;
  category:
    | "GameApplication"
    | "SocialNetworkingApplication"
    | "TravelApplication"
    | "ShoppingApplication"
    | "SportsApplication"
    | "LifestyleApplication"
    | "BusinessApplication"
    | "DesignApplication"
    | "DeveloperApplication"
    | "DriverApplication"
    | "EducationalApplication"
    | "HealthApplication"
    | "FinanceApplication"
    | "SecurityApplication"
    | "BrowserApplication"
    | "CommunicationApplication"
    | "DesktopEnhancementApplication"
    | "EntertainmentApplication"
    | "MultimediaApplication"
    | "HomeApplication"
    | "UtilitiesApplication"
    | "ReferenceApplication";
  offer: {
    price: number;
    currency: string;
  };
  rating: {
    value: number;
    count: number;
  };
}

export const jsonLdForArticle = ({
  authors,
  dateModified,
  datePublished,
  headline,
  images,
  type,
  baseUrl,
}: JsonLdForArticle) => {
  let author;

  if (authors.length === 1) {
    author = {
      "@type": "Person",
      ...authors[0],
    };
  } else {
    author = authors.map((author) => {
      return {
        "@type": "Person",
        ...author,
      };
    });
  }

  const image = images.map((img) => {
    if (img.startsWith("/")) {
      return `${baseUrl}${img}`;
    } else {
      return img;
    }
  });

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    image,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author,
  };
};

export const jsonLdForBreadcrumb = ({ itemList, baseUrl }: JsonLdForBreadcrumb) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemList.map((itemList, key) => {
      return {
        "@type": "ListItem",
        position: key + 1,
        name: itemList.name,
        item: `${baseUrl}${itemList.route}`,
      };
    }),
  };
};

export const jsonLdForFaq = ({ faqs }: JsonLdForFaq) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      };
    }),
  };
};

export const jsonLdForSoftwareApp = ({
  category,
  offer,
  operatingSystem,
  rating,
  softwareDescription,
  softwareName,
}: JsonLdForSoftwareApp) => {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: softwareName,
    operatingSystem,
    category,
    offers: {
      "@type": "Offer",
      price: offer.price,
      priceCurrency: offer.currency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      ratingCount: rating.count,
    },
  };

  if (softwareDescription) jsonLd.description = softwareDescription;

  return jsonLd;
};
