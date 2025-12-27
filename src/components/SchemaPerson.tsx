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
  knowsAbout: [
    "Commercial real estate operations",
    "Property management consulting",
    "Operational and financial reporting",
    "Budgeting and reforecasting",
    "Capital planning and project governance",
    "Portfolio performance analysis",
    "Owner and investor reporting",
    "Vendor management and controls",
    "Process improvement and SOP development"
  ],
};


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
