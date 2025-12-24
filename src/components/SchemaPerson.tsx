// src/components/SchemaPerson.tsx
export default function SchemaPerson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.briankillianconsulting.com/#brian-killian",
    name: "Brian Killian",
    jobTitle: "Principal",
    url: "https://www.briankillianconsulting.com/",
    image: "https://www.briankillianconsulting.com/brian-killian.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Brian Killian Consulting",
      url: "https://www.briankillianconsulting.com/",
    },
    sameAs: [
      // Replace with your real LinkedIn URL (must match what you use on the site)
      "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a string
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
