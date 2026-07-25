export interface IndustryData {
  slug: string;
  name: string;
  iconName: string;
  heroHeadline: string;
  industryPainPoints: string[];
  complianceStandards: string[];
  keyModules: Array<{ title: string; description: string }>;
  industryMetrics: Array<{ label: string; value: string }>;
  recommendedServices: string[];
}

export const INDUSTRIES: Record<string, IndustryData> = {
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    iconName: "Building2",
    heroHeadline: "Accelerate Property Sales with Lead Gen & Custom Real Estate CRM",
    industryPainPoints: [
      "High lead drop-off rates and unorganized broker communications",
      "Manual site visit tracking and delayed inquiry responses",
      "Inconsistent property listing updates across marketing portals"
    ],
    complianceStandards: ["RERA Compliance", "GDPR Data Privacy"],
    keyModules: [
      { title: "Automated Lead Routing", description: "Instantly assign Meta/Google ad leads to available sales agents via WhatsApp & SMS." },
      { title: "Virtual Tour Integration", description: "Embed interactive 3D site visits directly into custom property landing pages." }
    ],
    industryMetrics: [
      { label: "Average Lead Cost Reduction", value: "34%" },
      { label: "Lead-to-Visit Conversion", value: "2.8x" }
    ],
    recommendedServices: ["crm", "ppc", "ai-chatbots", "web-development"]
  },
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    iconName: "Stethoscope",
    heroHeadline: "Patient Acquisition & Custom Clinic Management Systems",
    industryPainPoints: [
      "Missed patient appointments and high no-show rates",
      "Complex local SEO competition for specialized medical procedures",
      "Manual medical records and fragmented patient follow-ups"
    ],
    complianceStandards: ["HIPAA Data Security", "NABH Guidelines"],
    keyModules: [
      { title: "24/7 Patient Booking Bot", description: "Qualify patient inquiries and auto-schedule appointments." },
      { title: "Local Doctor SEO", description: "Dominate Google Maps local pack for high-intent medical searches." }
    ],
    industryMetrics: [
      { label: "Appointment Confirmation Rate", value: "92%" },
      { label: "Local Search Visibility", value: "4.5x" }
    ],
    recommendedServices: ["seo", "ai-chatbots", "custom-software", "ppc"]
  },
  "ecommerce": {
    slug: "ecommerce",
    name: "E-Commerce & D2C",
    iconName: "ShoppingBag",
    heroHeadline: "Scale D2C Sales with Performance Ads & Fast Next.js Storefronts",
    industryPainPoints: [
      "High cart abandonment and rising Customer Acquisition Cost (CAC)",
      "Slow store page load speeds dampening mobile conversions",
      "Low customer repeat purchase frequency"
    ],
    complianceStandards: ["PCI-DSS Payment Security", "Consumer Protection Act"],
    keyModules: [
      { title: "Sub-Second Next.js Storefronts", description: "Lightning-fast headless store architecture connected to Shopify/Sanity." },
      { title: "ROAS-Driven Meta & Google Ads", description: "Hyper-targeted dynamic product ads and retargeting flows." }
    ],
    industryMetrics: [
      { label: "Average ROAS Improvement", value: "4.2x" },
      { label: "Page Load Speed", value: "< 0.8s" }
    ],
    recommendedServices: ["ppc", "web-development", "email", "social-media"]
  },
  "education": {
    slug: "education",
    name: "Education & EdTech",
    iconName: "GraduationCap",
    heroHeadline: "Drive Student Enrollments with Targeted Marketing & Custom Portals",
    industryPainPoints: [
      "Seasonal enrollment spikes requiring rapid lead scaling",
      "Fragmented student inquiry tracking across multiple channels",
      "High counseling call drop-offs"
    ],
    complianceStandards: ["Data Privacy Protection"],
    keyModules: [
      { title: "Student Admission CRM", description: "Manage counselor calls, fee follow-ups, and entrance exam leads." },
      { title: "Omnichannel Enrollment PPC", description: "Run high-converting Google Search & YouTube ad campaigns." }
    ],
    industryMetrics: [
      { label: "Enrollment Growth Rate", value: "+180%" },
      { label: "Cost Per Qualified Lead", value: "-28%" }
    ],
    recommendedServices: ["ppc", "crm", "seo", "branding"]
  }
};
