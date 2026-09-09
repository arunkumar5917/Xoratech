import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/student/", "/admin", "/staff"],
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}