export interface IntegrationData {
  slug: string;
  name: string;
  category: "CMS" | "Database" | "Payment" | "Framework" | "CRM";
  logoUrl: string;
  valueProp: string;
  technicalCapabilities: string[];
  useCases: Array<{ title: string; desc: string }>;
  typicalStack: string[];
}

export const INTEGRATIONS: Record<string, IntegrationData> = {
  "sanity": {
    slug: "sanity",
    name: "Sanity CMS",
    category: "CMS",
    logoUrl: "/growthspare-a-logo.png",
    valueProp: "Headless Content Infrastructure for Real-Time Collaborative Digital Products",
    technicalCapabilities: [
      "Custom GROQ & GraphQL Query Architecture",
      "Structured Content Studio Customization",
      "Next.js App Router ISR & Live Preview Setup"
    ],
    useCases: [
      { title: "Enterprise Blog & Knowledge Base", desc: "Build sub-second loading content hubs connected to Next.js." },
      { title: "Multi-Brand Design Systems", desc: "Manage structured assets centrally for global deployment." }
    ],
    typicalStack: ["Sanity", "Next.js", "Tailwind CSS", "Vercel"]
  },
  "supabase": {
    slug: "supabase",
    name: "Supabase",
    category: "Database",
    logoUrl: "/growthspare-a-logo.png",
    valueProp: "Open Source Firebase Alternative with Postgres, Auth, Vector Embeddings & Realtime DB",
    technicalCapabilities: [
      "PostgreSQL Database Design & Row Level Security (RLS)",
      "pgvector Vector Store for AI RAG Applications",
      "Realtime WebSockets & Edge Functions"
    ],
    useCases: [
      { title: "AI Agent Context Storage", desc: "Store vector embeddings for fast AI retrieval." },
      { title: "SaaS Multi-Tenant Database", desc: "Secure multi-user enterprise databases with RLS policies." }
    ],
    typicalStack: ["Supabase", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  "nextjs": {
    slug: "nextjs",
    name: "Next.js",
    category: "Framework",
    logoUrl: "/growthspare-a-logo.png",
    valueProp: "React Framework for High-Performance Web Applications, SSR & App Router Architecture",
    technicalCapabilities: [
      "Server Components & Streaming SSR",
      "Incremental Static Regeneration (ISR)",
      "Built-in SEO & Image Optimization Engine"
    ],
    useCases: [
      { title: "High-Traffic Corporate Web Apps", desc: "Achieve perfect 100 PageSpeed scores on Google Lighthouse." },
      { title: "Headless E-Commerce Platforms", desc: "Fast dynamic shopping carts with instant page transitions." }
    ],
    typicalStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  }
};
