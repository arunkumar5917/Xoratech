import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = WEBSITE_URL;
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/business`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/business/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/business/packages`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/business/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/internships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/internships/domains`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/internships/apply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/verify-certificate`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}