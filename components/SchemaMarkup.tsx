"use client";

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'article' | 'faq';
  data: {
    name?: string;
    description?: string;
    url?: string;
    telephone?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      latitude: number;
      longitude: number;
    };
    openingHours?: string[];
    priceRange?: string;
    servesCuisine?: string[];
    acceptsReservations?: boolean;
    author?: string;
    datePublished?: string;
    dateModified?: string;
    headline?: string;
    image?: string;
    services?: {
      name: string;
      description: string;
      offers: {
        price: string;
        priceCurrency: string;
        description: string;
      }[];
    }[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'organization':
        return {
          ...baseSchema,
          "@type": "Organization",
          "name": data.name || "Beach Bird Studios",
          "description": data.description || "Complete SEO websites that dominate search results. Local SEO, AI search optimization, and digital marketing services.",
          "url": data.url || "https://beachbirdstudios.com",
          "telephone": data.telephone || "(555) BEACH-01",
          "email": "hello@beachbirdstudios.com",
          "logo": "https://beachbirdstudios.com/logo.png",
          "image": "https://beachbirdstudios.com/og-image.png",
          "sameAs": [
            "https://www.linkedin.com/company/beach-bird-studios",
            "https://twitter.com/beachbirdstudios",
            "https://www.facebook.com/beachbirdstudios"
          ],
          "address": data.address && {
            "@type": "PostalAddress",
            "streetAddress": data.address.streetAddress,
            "addressLocality": data.address.addressLocality,
            "addressRegion": data.address.addressRegion,
            "postalCode": data.address.postalCode,
            "addressCountry": data.address.addressCountry
          },
          "geo": data.geo && {
            "@type": "GeoCoordinates",
            "latitude": data.geo.latitude,
            "longitude": data.geo.longitude
          },
          "areaServed": [
            "Florida",
            "North Carolina", 
            "South Carolina",
            "Miami",
            "Orlando",
            "Tampa",
            "Jacksonville",
            "Charlotte",
            "Raleigh",
            "Durham",
            "Charleston",
            "Wilmington"
          ],
          "knowsAbout": [
            "Search Engine Optimization",
            "Local SEO",
            "Website Design", 
            "Digital Marketing",
            "Google Business Profile",
            "AI Search Optimization",
            "Content Marketing"
          ]
        };

      case 'localBusiness':
        return {
          ...baseSchema,
          "@type": "LocalBusiness",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "telephone": data.telephone,
          "priceRange": data.priceRange || "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address?.streetAddress,
            "addressLocality": data.address?.addressLocality,
            "addressRegion": data.address?.addressRegion,
            "postalCode": data.address?.postalCode,
            "addressCountry": data.address?.addressCountry || "US"
          },
          "geo": data.geo && {
            "@type": "GeoCoordinates",
            "latitude": data.geo.latitude,
            "longitude": data.geo.longitude
          },
          "openingHoursSpecification": data.openingHours?.map(hours => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": hours.split(': ')[0],
            "opens": hours.split(': ')[1]?.split('-')[0],
            "closes": hours.split(': ')[1]?.split('-')[1]
          })),
          "acceptsReservations": data.acceptsReservations,
          "servesCuisine": data.servesCuisine
        };

      case 'service':
        return {
          ...baseSchema,
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Beach Bird Studios",
            "url": "https://beachbirdstudios.com"
          },
          "serviceType": "SEO Services",
          "areaServed": [
            "Florida", "North Carolina", "South Carolina", 
            "Miami", "Orlando", "Tampa", "Charlotte", "Raleigh", "Charleston"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog", 
            "name": "SEO Services",
            "itemListElement": data.services?.map((service, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.name,
                "description": service.description
              },
              "offers": service.offers.map(offer => ({
                "@type": "Offer",
                "price": offer.price,
                "priceCurrency": offer.priceCurrency,
                "description": offer.description,
                "availability": "https://schema.org/InStock"
              }))
            }))
          }
        };

      case 'article':
        return {
          ...baseSchema,
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": data.author || "Beach Bird Studios"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Beach Bird Studios",
            "logo": {
              "@type": "ImageObject",
              "url": "https://beachbirdstudios.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };

      case 'faq':
        return {
          ...baseSchema,
          "@type": "FAQPage",
          "mainEntity": data.faqs?.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      default:
        return baseSchema;
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}