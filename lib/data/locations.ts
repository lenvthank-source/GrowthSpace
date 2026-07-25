export interface LocationData {
  slug: string;
  cityName: string;
  stateRegion: string;
  country: string;
  metroArea: string;
  isPrimaryHub: boolean;
  localStats: {
    techHubName?: string;
    businessDensityNote: string;
    activeIndustries: string[];
  };
  nearbyCities: string[];
  localOfficeOrProximity: string;
  localFAQ: Array<{ question: string; answer: string }>;
}

export const LOCATIONS: Record<string, LocationData> = {
  "gurgaon": {
    slug: "gurgaon",
    cityName: "Gurgaon",
    stateRegion: "Haryana",
    country: "India",
    metroArea: "Delhi NCR",
    isPrimaryHub: true,
    localStats: {
      techHubName: "Cyber City & Golf Course Road",
      businessDensityNote: "Home to 500+ Fortune 500 enterprise hubs and tech unicorns.",
      activeIndustries: ["Real Estate", "Fintech", "IT & SaaS", "Healthcare"],
    },
    nearbyCities: ["delhi-ncr", "noida", "faridabad"],
    localOfficeOrProximity: "Dedicated account management for Gurgaon & Cyber City corporate clients.",
    localFAQ: [
      {
        question: "Why hire GrowthSpare for digital marketing in Gurgaon?",
        answer: "Gurgaon's competitive tech ecosystem demands rapid market execution, localized SEO targeting corporate hubs like Cyber City, and dedicated performance marketing alignment."
      },
      {
        question: "Does GrowthSpare offer in-person strategy sessions in Gurgaon?",
        answer: "Yes! Our team provides dedicated face-to-face strategy and execution support across Cyber City, Golf Course Road, and Sohna Road."
      }
    ]
  },
  "delhi-ncr": {
    slug: "delhi-ncr",
    cityName: "Delhi NCR",
    stateRegion: "National Capital Region",
    country: "India",
    metroArea: "Delhi NCR",
    isPrimaryHub: true,
    localStats: {
      techHubName: "Okhla, GK-II, Connaught Place & Aerocity",
      businessDensityNote: "Premier economic capital hub for enterprise brands and high-growth startups.",
      activeIndustries: ["E-Commerce", "Legal", "Education", "Healthcare"],
    },
    nearbyCities: ["gurgaon", "noida", "faridabad"],
    localOfficeOrProximity: "Headquartered at Savitri Cinema Complex GK-II, New Delhi.",
    localFAQ: [
      {
        question: "Where is GrowthSpare's main office located?",
        answer: "Our main office is located at Indure House, 2nd Floor, Savitri Cinema Complex GK-II, New Delhi, Delhi 110048."
      }
    ]
  },
  "noida": {
    slug: "noida",
    cityName: "Noida",
    stateRegion: "Uttar Pradesh",
    country: "India",
    metroArea: "Delhi NCR",
    isPrimaryHub: true,
    localStats: {
      techHubName: "Sector 62, Sector 125 & Noida Expressway",
      businessDensityNote: "Rapidly expanding technology park hub for IT services and media conglomerates.",
      activeIndustries: ["IT Services", "Media & Publishing", "Real Estate", "E-Commerce"],
    },
    nearbyCities: ["delhi-ncr", "gurgaon", "greater-noida"],
    localOfficeOrProximity: "Serving Noida & Greater Noida tech corridors with full-suite digital solutions.",
    localFAQ: [
      {
        question: "How does GrowthSpare help Noida startups scale?",
        answer: "We deliver end-to-end performance marketing (Google Ads, Meta Ads), SEO ranking strategies, and custom software infrastructure."
      }
    ]
  },
  "bangalore": {
    slug: "bangalore",
    cityName: "Bangalore",
    stateRegion: "Karnataka",
    country: "India",
    metroArea: "Bengaluru Metro",
    isPrimaryHub: false,
    localStats: {
      techHubName: "Koramangala, Indiranagar & Whitefield",
      businessDensityNote: "India's Silicon Valley hub for venture-backed SaaS, B2B platforms, and AI startups.",
      activeIndustries: ["SaaS", "AI & DeepTech", "Fintech", "Logistics"],
    },
    nearbyCities: ["hyderabad", "chennai"],
    localOfficeOrProximity: "Remote enterprise partnership and custom AI technology deployment.",
    localFAQ: [
      {
        question: "Can GrowthSpare assist Bangalore-based tech startups?",
        answer: "Yes, we specialize in high-growth marketing, technical SEO, and custom Next.js/AI software for Bangalore SaaS companies."
      }
    ]
  },
  "mumbai": {
    slug: "mumbai",
    cityName: "Mumbai",
    stateRegion: "Maharashtra",
    country: "India",
    metroArea: "MMR Region",
    isPrimaryHub: false,
    localStats: {
      techHubName: "BKC, Lower Parel & Powai",
      businessDensityNote: "Financial capital hub for banking, entertainment, D2C brands, and corporate headquarters.",
      activeIndustries: ["Finance & Fintech", "D2C Brands", "Entertainment", "Real Estate"],
    },
    nearbyCities: ["pune", "navi-mumbai"],
    localOfficeOrProximity: "Strategic growth partner for Mumbai D2C brands and financial enterprises.",
    localFAQ: []
  }
};
