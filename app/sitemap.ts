import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bigbeansdigital.com";

  return [
    // Main Pages
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/academy`,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/connect`,
    },
    {
      url: `${baseUrl}/courses`,
    },
    {
      url: `${baseUrl}/internship`,
    },
    {
      url: `${baseUrl}/our-work`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
    {
      url: `${baseUrl}/digital-marketing-agency-london`,
    },

    {
      url: `${baseUrl}/digital-marketing-agency-kolkata`,
    },
{
      url: `${baseUrl}/digital-marketing-agency-mumbai`,
    },

    

    // Courses
    {
      url: `${baseUrl}/courses/digital-marketing-mastery`,
    },

    // Services
    {
      url: `${baseUrl}/services/branding`,
    },
    {
      url: `${baseUrl}/services/google-ads-meta-ads`,
    },
    {
      url: `${baseUrl}/services/logo-designing`,
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
    },
    {
      url: `${baseUrl}/services/website-development`,
    },

    // Blogs
    {
      url: `${baseUrl}/blog/clinic-instagram-marketing-strategy`,
    },
    {
      url: `${baseUrl}/blog/getmorecustomers`,
    },
    {
      url: `${baseUrl}/blog/new-instagram-logo-redesign`,
    },
    {
      url: `${baseUrl}/blog/real-estate-video-marketing-ideas-for-reels`,
    },
    {
      url: `${baseUrl}/blog/website-seo-audit`,
    },
    {
      url: `${baseUrl}/blog/why-is-my-competitor-getting-more-leads`,
    },
    {
      url: `${baseUrl}/blog/spider-man-social-media-marketing-trend`,
    },
    {
      url: `${baseUrl}/blog/google-marketing-live-gemini-ads-guide`,
    },
    
    {
      url: `${baseUrl}/blog/social-media-marketing-cost-india`,
    },

    {
      url: `${baseUrl}/blog/how-to-choose-a-business-name-guide-for-startups`,
    },


  ];
}