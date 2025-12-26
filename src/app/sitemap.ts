import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://briankillianconsulting.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/forecasting-controls`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/approval-cycle-time`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/cross-functional-realignment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/lease-up-concessions`,
      lastModified: new Date(),
    },
  ];
}
