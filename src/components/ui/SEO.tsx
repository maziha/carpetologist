import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    type?: string;
    image?: string;
}

const SEO = ({
    title = "Carpetologist — Luxury Carpets | KMS Traders, Muvattupuzha",
    description = "Premium imported carpets and rugs in Kerala. Visit our boutique showroom in Muvattupuzha, Ernakulam for luxury Turkish, Persian, and Silk carpets.",
    canonical = "https://carpetologist.com",
    type = "website",
    image = "/og-image.jpg" // Placeholder URL
}: SEOProps) => {
    const siteTitle = "Carpetologist";
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Local SEO Keywords (Note: Search engines primarily use content and structure, but meta keywords can be added for legacy or minor engines) */}
            <meta name="keywords" content="luxury carpets Kerala, carpet shop Ernakulam, rugs Muvattupuzha, Turkish carpets Kerala, Persian rugs Ernakulam, KMS Traders Carpets" />
        </Helmet>
    );
};

export default SEO;
