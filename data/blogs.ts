export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-ai-in-digital-marketing",
    title: "The Future of AI in Social Media Marketing ",
    excerpt:
      "Discover how artificial intelligence is transforming marketing strategies, automation, customer engagement, and business growth.",
    category: "Artificial Intelligence",
    image: "/assets/blogs/blog1.jpg",
    author: "BIGBEANS DIGITAL",
    date: "2026-06-15",
    readTime: "6 min read",
    featured: true,
  },

  {
    id: 2,
    slug: "why-every-business-needs-a-professional-website",
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "Learn why a professionally designed website is one of the most valuable investments for building trust and generating leads.",
    category: "Website Development",
    image: "/assets/blogs/blog2.jpg",
    author: "BIGBEANS DIGITAL",
    date: "10 June 2026",
    readTime: "5 min read",
    featured: false,
  },

  {
    id: 3,
    slug: "social-media-marketing-trends",
    title: "Top Social Media Marketing Trends You Should Know",
    excerpt:
      "Explore the latest social media strategies, content formats, and engagement techniques shaping modern brands.",
    category: "Social Media",
    image: "/assets/blogs/blog3.jpg",
    author: "BIGBEANS DIGITAL",
    date: "05 June 2026",
    readTime: "7 min read",
    featured: false,
  },

  {
    id: 4,
    slug: "seo-strategies-for-business-growth",
    title: "SEO Strategies That Drive Long-Term Business Growth",
    excerpt:
      "Understand the SEO techniques that help businesses improve visibility, generate organic traffic, and increase conversions.",
    category: "SEO",
    image: "/assets/blogs/blog4.jpg",
    author: "BIGBEANS DIGITAL",
    date: "01 June 2026",
    readTime: "8 min read",
    featured: false,
  },

  {
    id: 5,
    slug: "branding-mistakes-small-businesses-make",
    title: "Common Branding Mistakes Small Businesses Should Avoid",
    excerpt:
      "Discover branding mistakes that prevent businesses from standing out and learn how to build a memorable brand identity.",
    category: "Branding",
    image: "/assets/blogs/blog5.jpg",
    author: "BIGBEANS DIGITAL",
    date: "28 May 2026",
    readTime: "6 min read",
    featured: false,
  },

  {
    id: 6,
    slug: "performance-marketing-explained",
    title: "Performance Marketing Explained for Beginners",
    excerpt:
      "A practical guide to understanding paid advertising, ROI, campaign optimization, and performance-driven marketing.",
    category: "Social Media Marketing ",
    image: "/assets/blogs/blog6.jpg",
    author: "BIGBEANS DIGITAL",
    date: "22 May 2026",
    readTime: "7 min read",
    featured: false,
  },
];