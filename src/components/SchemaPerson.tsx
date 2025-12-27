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
    sameAs: ["https://www.linkedin.com/in/briannkillian/"],
    worksFor: {
      "@id": "https://briankillianconsulting.com/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
