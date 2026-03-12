import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "KMS Traders — Carpetologist",
        "image": "https://carpetologist.com/logo.jpg", // Placeholder
        "@id": "https://carpetologist.com",
        "url": "https://carpetologist.com",
        "telephone": "+917558077632",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Muvattupuzha",
            "addressLocality": "Ernakulam",
            "addressRegion": "Kerala",
            "postalCode": "686661", // General Muvattupuzha PIN
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.9875, // Approximate for Muvattupuzha
            "longitude": 76.5819
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "sameAs": [
            "https://www.instagram.com/carpetologist_official"
        ],
        "priceRange": "$$$"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
