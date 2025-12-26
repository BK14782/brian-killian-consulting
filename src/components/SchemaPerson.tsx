// src/components/SchemaPerson.tsx
export default function SchemaPerson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://briankillianconsulting.com/#brian-killian",
    name: "Brian Killian",
    jobTitle: "Principal",
    url: "https://briankillianconsulting.com/",
    image: "https://briankillianconsulting.com/brian-killian.jpg",
    worksFor: {
      "@type": "Organization",
      name: "Brian Killian Consulting",
      url: "https://briankillianconsulting.com/",
    },
    sameAs: [
      // Replace with your real LinkedIn URL (must match what you use on the site)
      "https://www.linkedin.com/in/briannkillian/",
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
