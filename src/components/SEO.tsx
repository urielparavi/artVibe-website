import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const SITE_NAME = "דוד כהן — אמן";
const BASE_URL = "https://artvibe-website.netlify.app";
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.jpg`;
const DEFAULT_DESC = "דוד כהן — אמן ישראלי מוביל המתמחה בציורי שמן, אקוורל ופורטרטים. יצירות מקוריות בהזמנה אישית, גלריה מקוונת ושיעורי ציור בירושלים.";

const SEO = ({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ציורי שמן ואקוורל מקוריים`;

  const artistSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "דוד כהן",
    "jobTitle": "אמן",
    "url": BASE_URL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "רחוב בצלאל 15",
      "addressLocality": "ירושלים",
      "addressCountry": "IL"
    },
    "telephone": "054-1234567",
    "email": "david@artist.co.il",
    "sameAs": [
      "https://instagram.com/davidcohenart",
      "https://facebook.com/davidcohenart"
    ]
  };

  return (
    <Helmet>
      {/* Basic */}
      <html lang="he" dir="rtl" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="he_IL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(artistSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
