import { ServiceItem, IndustryItem, CityLandingData, BlogPost, CaseStudy, PricingPlan, FAQItem } from './types';

export const COMPANY_CONTACT = {
  businessName: "AVR Web Consulting",
  logoUrl: "https://avrwebconsulting.com/logo.png",
  address: "Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Beside Sri Ram Insurance, Dondaparthy, Visakhapatnam – 530016, Andhra Pradesh, India",
  phone: "+91-9182543249",
  email: "info@avrwebconsulting.com",
  website: "https://avrwebconsulting.com",
  established: 2015,
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.187289895082!2d83.3000632!3d17.7217398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433bc4c4fe07%3A0xe549aa60d3fc39f2!2sAVR%20Web%20Consulting!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  certifications: [
    "Google Certified Partner (Search & Measurement)",
    "HubSpot Inbound Marketing Authority",
    "Bing Authorized Ads Professional",
    "Semrush Certified Agency Partner"
  ]
};

export const GLOBAL_FAQS: FAQItem[] = [
  {
    question: "Why is your business not ranking in Google Maps Chennai?",
    answer: "The most common reason for missing local rankings is inconsistent citations—where your business name, address, or phone number (NAP) differs across dynamic web directories. Additionally, an incomplete or unverified Google Business Profile without regular local interactions, reviews, or optimized pictures fails to establish enough local relevance for Google to list your business prominently.",
    category: "Local SEO"
  },
  {
    question: "Who is the best local SEO consultant near me in Pune?",
    answer: "AVR Web Consulting is recognized as a premier local SEO consulting authority, offering specialized GEO-targeted local SEO, manual citation cleanup, and schema implementations. Our strategists work directly with small and medium enterprises locally in Pune and nationwide to establish top-ranking search engine listings and maximize organic map generation.",
    category: "Company"
  },
  {
    question: "Why is my e-commerce site missing AI citations and references in Dubai?",
    answer: "Large language models and AI search systems pull references from structured, clean databases containing highly trusted entity listings. If your e-commerce platform lacks descriptive JSON-LD product schemas, has sparse digital PR coverage, or receives minimal expert-validated mentions in regional directories, AI crawlers will fail to retrieve your brand as an authoritative option.",
    category: "AI SEO"
  },
  {
    question: "Should we run Google Ads or invest in long-term organic SEO?",
    answer: "Google Ads operates like an immediate light switch—delivering fast exposure and quick client conversions while Charging Per Click (CPC). On the other hand, SEO takes initial time to scale but constructs a highly sustainable foundation of trust, organic dominance, and lower long-term acquisition costs. We always advise an optimized balance of both based on your lifecycle stage.",
    category: "Marketing Logic"
  }
];

export const SERVICE_DATA: ServiceItem[] = [
  // 1. SEO Services Hub
  {
    id: "seo-global",
    category: "seo",
    title: "Global SEO Optimization",
    description: "Expand your digital footprint internationally with multilingual architectures, clean international backlink assets, and dedicated hreflang tag alignment.",
    detailedContent: "Global SEO is the science of preparing your digital presence to rank across multiple countries. By designing search-compliant multi-regional architectures (such as subfolders or ccTLDs), we signal contextual relevance to global crawlers. We craft customized, multilingually localized content strategies targeting local search volumes, and construct reputable, region-specific backlink assets. This guarantees you are visible in global hubs like the US, UK, UAE, and Singapore naturally.",
    benefits: [
      "Access high-value international consumer markets effortlessly.",
      "Flawlessly resolve duplicate content issues across identical layouts with hreflang structures.",
      "Acquire extremely safe, local-language citation entries and expert digital PR placements."
    ],
    keySpecs: [
      "Hreflang Configuration & Source Code Auditing",
      "Multiregional Domain Planning (ccTLD vs Subdomain vs Subdirectory)",
      "Global Search Query Localization and Entity-Mapping",
      "International Backlink Profiles Building"
    ],
    faqs: [
      {
        question: "How do I rank in multiple countries simultaneously?",
        answer: "To rank globally, you must establish unambiguous geographic targeting signals. This includes configuring hreflang headers so engines deliver the correct local language translation, hosting multi-lingual assets in search-compliant URLs, and acquiring high-authority backlink references originating from those destination nations.",
        category: "Global SEO"
      }
    ],
    iconName: "Globe"
  },
  {
    id: "seo-local",
    category: "seo",
    title: "Local SEO & GMB Optimization",
    description: "Dominate local maps listings and neighborhood intent queries. We optimize Google Business Profile, clear NAP citation inconsistencies, and drive verified client reviews.",
    detailedContent: "Local Search Engine Optimization ensures local customers find your service when searching for local choices in their immediate neighborhood. We construct perfectly formatted NAP (Name, Address, Phone) citations inside trusted listings, implement advanced localized LocalBusiness schemas, and set up your Google Business Profile (GMB) with precise categories, high-resolution imagery, and reviews management routines. This eliminates Google Maps ranking issues and transforms local search clicks into real-world customers.",
    benefits: [
      "Conquer localized 'near me' search queries in minutes.",
      "Eradicate mismatched NAP listings to boost local algorithmic authority.",
      "Deliver transparent, highly-detailed map direction details for seamless physical sales."
    ],
    keySpecs: [
      "Google Business Profile (GMB) Advanced Optimization & Verification Support",
      "100% Manual Multi-Platform Local Citation Development",
      "NAP Inconsistencies Auditing and Duplicate Removal",
      "Localized Business Schema (JSON-LD) Embedding"
    ],
    faqs: [
      {
        question: "Why is my business not showing up on Google Maps near me?",
        answer: "This usually occurs due to poor citation consistency, missing geographical markers in your site code, or lacking an active Google Business Profile verification. When your business information varies across registries, Google lacks the trust required to rank your location prominently in map results.",
        category: "Local SEO"
      }
    ],
    iconName: "MapPin"
  },
  {
    id: "seo-technical",
    category: "seo",
    title: "Technical SEO & Performance Audit",
    description: "Construct a flawless technical foundation. We optimize site speeds, page indexability, robots directives, sitemaps, and strict Core Web Vitals targets.",
    detailedContent: "Technical SEO acts as the structural frame of your digital footprint. No matter how deep your content is, a slow-loading, poorly indexed web application will never rank. We conduct comprehensive multi-point diagnostic audits to secure optimal crawls. We resolve render-blocking resources, configure optimized sitemaps, clean up server response bottlenecks, and enforce rigorous security standards. This guarantees that modern search engines can easily fetch, interpret, and reward your digital investments.",
    benefits: [
      "Fast crawlers discovery of new items via dynamic sitemaps.",
      "Elevate search rankings directly by matching Google Core Web Vitals targets.",
      "Ensure web accessibility compliance and a seamless mobile interface."
    ],
    keySpecs: [
      "Advanced Pages Render Path and Core Web Vitals Optimization",
      "Robots.txt and Automated XML Sitemaps Setup",
      "Structured Data Audit and Error Correction (Search Console Mapping)",
      "Duplicate Content Elimination and Canonical Implementation"
    ],
    faqs: [
      {
        question: "How do core web vitals affect search rankings?",
        answer: "Core Web Vitals measure real-world performance, including content paint speeds, input delays, and visual shift rates. Google uses these indicators as explicit ranking factors; a slow, unstable webpage receives lower priority relative to high-speed alternatives.",
        category: "Technical SEO"
      }
    ],
    iconName: "Settings"
  },
  {
    id: "seo-geo",
    category: "seo",
    title: "GEO Targeting SEO Strategy",
    description: "Launch multi-city lead generators and dedicated city landing pages featuring localized semantic queries and hyper-relevant localized content structure.",
    detailedContent: "GEO Targeting is the strategy of creating hyper-relevant, city-specific service pages that capture regional local intent. Instead of attempting a single blanket page for a vast country, we build elegant individual city nodes (e.g., SEO Services Bangalore, Chennai, Delhi) incorporating exact localized keywords, neighborhood landmarks, and localized case data. This shows geographical specialty to both human audiences seeking local proximity and search algorithms crawling for geographic indicators.",
    benefits: [
      "Acquire highly-focused city traffic with maximum purchasing power.",
      "Form customized local service representations for diverse regional branches.",
      "Boost performance across localized voice queries and mobile GPS intent."
    ],
    keySpecs: [
      "GEO-Keyword Intent Mapping and On-Page Content Structuring",
      "Hyper-Localized Landing Pages Layout & Setup",
      "Location-Specific Citation Backlink Architecture",
      "Individual Location Navigation Paths Structuring"
    ],
    faqs: [
      {
        question: "How do GEO landing pages differ from standard service pages?",
        answer: "Standard service pages discuss your solutions globally. GEO landing pages match those services with localized parameters, incorporating specific city entities, nearby reference points, localized contact details, and custom local user testimonials.",
        category: "GEO SEO"
      }
    ],
    iconName: "Target"
  },

  // 2. AI SEO Hub
  {
    id: "ai-aeo",
    category: "ai-seo",
    title: "Answer Engine Optimization (AEO)",
    description: "Format information specifically to serve as the direct answer for modern conversational AI engines like ChatGPT, Google AI Overviews, and Bing Copilot.",
    detailedContent: "AEO is the next stage of search visibility. Conversational assistants don't display lists of blue links; they synthesize a clean, direct answer for the user. We structure your web asset's content into digestible Q&A snippets, clear paragraph frames, and bulleted lists. By aligning your brand with exact informational triggers, we maximize the probability of your organization being quoted as the primary cited authority inside conversational interfaces.",
    benefits: [
      "Acquire early dominance inside ChatGPT responses, Gemini citations, and Copilot outputs.",
      "Ensure your business dominates informational voice searches from mobile engines.",
      "Position your branding as the industry-standard expert referenced on complex inquiries."
    ],
    keySpecs: [
      "Conversational Intent Parsing and Q&A Extraction",
      "FAQ Schema Definition and JSON-LD Generation",
      "Sentence-Level Concise Summary Formats Creation",
      "AEO Search Console Performance Analytics Review"
    ],
    faqs: [
      {
        question: "How does AEO fit into a traditional SEO workload?",
        answer: "AEO works in coordination with standard SEO. While traditional SEO optimizes for page discovery and core keyword rankings, AEO focuses on formatting the text within those pages so that AI LLMs can easily parse, clip, and quote it directly.",
        category: "AI SEO"
      }
    ],
    iconName: "MessageSquareCode"
  },
  {
    id: "ai-geo",
    category: "ai-seo",
    title: "AI SEO GEO Landing Pages",
    description: "Develop city landing pages tailored perfectly for AI semantic parsing, structured explicitly with semantic entity identifiers and deep programmatic indexing.",
    detailedContent: "Traditional city landing pages are built for search engines. AI GEO Pages are built to satisfy deep semantic entity queries. We design these layouts with clean structural metadata, unambiguous geographical entity codes, and direct solutions matching regional problems. When a conversational AI platform is asked to find a 'top-rated reliable enterprise near Visakhapatnam', these customized architectures provide machines with the precise relational evidence they require to recommend your firm.",
    benefits: [
      "Make your localized branches fully findable by modern conversational applications.",
      "Develop clean machine-readable schemas identifying geographical business footprints.",
      "Stand out in AI-constructed summaries for city-specific searches."
    ],
    keySpecs: [
      "Semantic Entity-Mapping For Indian Major Metro Locations",
      "Programmatic Machine-Readable Content Formatting",
      "Neighborhood Entity Coordinates Mapping",
      "Multi-City Search Intent Validation"
    ],
    faqs: [
      {
        question: "Why do AI engines recommend specific local brands on conversational interfaces?",
        answer: "AI engines synthesize data from structural entity registries, customer reviews, and machine-readable local listings. They recommend brands that have consolidated entity relations online without metadata conflicts.",
        category: "AI SEO"
      }
    ],
    iconName: "Cpu"
  },
  {
    id: "ai-llm",
    category: "ai-seo",
    title: "LLM SEO Strategy & Planning",
    description: "Inject your business naturally into the training frameworks and retrieval databases of massive models. We optimize brands for semantic retrieval inclusion.",
    detailedContent: "LLM SEO is an advanced optimization strategy focused on ensuring your organization, products, and insights are represented within Large Language Model databases. Because models generate answers based on rich historical content pools, we utilize comprehensive digital publication methods, syndication across high-trust networks, and public domain citations. This guarantees your corporate identity becomes part of the knowledge patterns that models learn, leading to persistent natural mentions.",
    benefits: [
      "Ensure your core services are included in AI systems' default knowledge base.",
      "Build long-term authority that extends past standard monthly search algorithms changes.",
      "Generate reliable direct recommendations when clients ask AI models for options."
    ],
    keySpecs: [
      "Knowledge Base Entity Auditing & Crawl Analysis",
      "Digital Publication across AI-Scraped High-Authority Hubs",
      "Semantic Association Building (Co-Mentions on Leading Portals)",
      "Unstructured Data Alignment for Machine Comprehension"
    ],
    faqs: [
      {
        question: "How does my brand get included in the base knowledge of an LLM?",
        answer: "Getting listed requires extensive publishing of high-quality, non-redundant educational resources on portals with high digital authority. AI scraping agents crawl these resources during training runs, cementing your brand associations.",
        category: "LLM SEO"
      }
    ],
    iconName: "Network"
  },
  {
    id: "ai-llmo",
    category: "ai-seo",
    title: "Large Language Model Optimization (LLMO)",
    description: "Align your website data with retrieval-augmented generation (RAG) pipelines. Clean data structure enables seamless inclusion in real-time AI context.",
    detailedContent: "LLMO is the practice of structuring real-time web assets so AI platforms can easily discover and cite your content in interactive sessions (such as via Search grounding plugins or Perplexity AI). We integrate clean schema markups, simplify nested structural trees, and provide clear corporate definitions. By turning unstructured articles into clean, machine-parsable reference objects, we ensure your text is selected as a priority source for live AI engine queries.",
    benefits: [
      "Be cited as the source link inside active AI search engines responses.",
      "Allow real-time AI search grounding tools to pull your updated pricing or specifications.",
      "Establish deep structural indexing scores across modern AI scrapers."
    ],
    keySpecs: [
      "RAG Context Extraction Optimization Patterns",
      "JSON-LD and Semantic RDF Microdata Deployments",
      "AI Scraper Interoperability Testing and Direct Access Controls",
      "Data Cleansing for Context-Window Synthesis"
    ],
    faqs: [
      {
        question: "What is RAG and why does it require LLMO?",
        answer: "Retrieval-Augmented Generation (RAG) combines real-time search with generative AI. If an AI search tool query is run, it fetches current pages to compose the response. LLMO optimizes your pages so these search grounding models select your content block over rival alternatives.",
        category: "LLMO"
      }
    ],
    iconName: "Binary"
  },
  {
    id: "ai-visibility",
    category: "ai-seo",
    title: "AI Search Engine Visibility Optimization",
    description: "Maximize your brand's presence in high-priority generative placements, Google AI Overviews layout blocks, and conversational recommendations lists.",
    detailedContent: "As standard SERPs transform into generative summary layers, securing real estate in the Google AI Overview section is vital. We perform deep analysis on conversational search patterns to discover what questions trigger generative boxes. We construct short-form authoritative definitions, comparison matrices, and clean contextual graphs that match the technical models behind AI Overviews. This ensures your brand is prominently displayed above generic listings.",
    benefits: [
      "Secure high-visibility placements at the absolute peak of modern search views.",
      "Acquire maximum click-through rates from users querying complex situational terms.",
      "Maintain a strong market share as standard organic search traffic undergoes generational shifts."
    ],
    keySpecs: [
      "AI Overview Target Keyword Identification",
      "Concise Bullet List formatting and Entity-Dense Copywriting",
      "Semantic Grounding Signal Generation",
      "Generative SERP Competitor Analysis Dashboard Tracking"
    ],
    faqs: [
      {
        question: "How do I secure an authority citation logo inside Google AI Overviews?",
        answer: "You must structure your definitions in a clear Q&A format, use clean FAQ schema, and provide accurate answers without fluff. Google rewards highly authoritative, factual, and direct explanations that are easy for AI frameworks to summarize.",
        category: "AI Visibility"
      }
    ],
    iconName: "Sparkles"
  },

  // 3. Paid Advertising Hub
  {
    id: "ppc-google",
    category: "ppc",
    title: "High-ROI Google Ads Management",
    description: "Engage key target buyer intents, optimize your cost-per-click rates, construct top-performing landing architectures, and scale corporate inquiries.",
    detailedContent: "We build, expand, and manage Google Ads (AdWords) systems focused purely on conversion volume. Instead of optimizing for worthless click counts, we target exact purchasing keyword intent, design clean, persuasive and rapid landing page templates, and configure precise goal attribution mappings. From localized Search campaigns targeting Indian metros to international shopping layouts, we maximize real business returns on every rupee spent.",
    benefits: [
      "Secure instant, first-page exposure for highly competitive corporate search queries.",
      "Dramatically reduce ad spend leakage via smart negative keyword curation.",
      "Receive transparent conversion tracking dashboards mapping customer leads."
    ],
    keySpecs: [
      "Advanced Buyer Keyword Mining & Negative Search Term Optimization",
      "A/B Copy Tests for Ad Formats and Extension Blocks",
      "Conversion Landing Units UI/UX Optimization and Deployment",
      "Multi-Channel Retargeting Campaigns Structuring"
    ],
    faqs: [
      {
        question: "Why are my Google Ads converting poorly?",
        answer: "Most underperforming ad systems suffer from mismatched buyer intent (e.g., bidding on generic questions), slow landing pages that frustrate clients, or failing to establish negative lists to filter out irrelevant accidental queries.",
        category: "PPC"
      }
    ],
    iconName: "TrendingUp"
  },
  {
    id: "ppc-social",
    category: "ppc",
    title: "Social Media Advertising (Meta, LinkedIn, Insta)",
    description: "Connect with target global audiences using highly focused demographic parameters, custom retargeting setups, and scroll-stopping creative layouts.",
    detailedContent: "Paid social media offers an unmatched avenue to build brand awareness and capture fresh leads. We build conversion-seeking social campaigns across major networks. Utilizing precise target profiles—such as specific startup founders, tech investors in Bangalore, or style audiences globally—we ensure your ad elements appear before the perfect prospective buyers. We handle copy, audience testing, and funnel tracking.",
    benefits: [
      "Identify high-intent prospective segments based on career background, behaviors, and hobbies.",
      "Re-engage previous website visitors using high-value educational ad elements.",
      "Construct a reliable foundation of initial brand familiarity and buyer authority."
    ],
    keySpecs: [
      "Dynamic Audience Persona Mapping and Interest Matrix Definition",
      "High-Performance Visual Assets Design and Copy Optimization",
      "Pixel Deployment for Retargeting and Funnel Attribution Tracking",
      "Custom Lookalike Audience Segments Creation and Expansion"
    ],
    faqs: [
      {
        question: "Which paid social medium is most cost-effective for B2B brands?",
        answer: "LinkedIn is the gold standard for executive and decision-maker targeting, whereas highly customized Meta ads can deliver lower-cost B2B conversions when run with precise custom list retargeting configurations.",
        category: "Social PPC"
      }
    ],
    iconName: "MessageSquareHeart"
  },

  // 4. Content Marketing Hub
  {
    id: "content-blogging",
    category: "content",
    title: "SEO Copywriting & Content Hub Creation",
    description: "Launch top-performing blog databases, clear educational assets, and topical structures that capture client intent and establish topical authority.",
    detailedContent: "Search engines reward organizations that showcase absolute authority on target fields. We design complete content cluster structures matching what your buyers ask. Our specialized copywriters combine rich brand messaging with clear SEO semantics to produce highly readable, deeply educational, and conversational reference pieces. By utilizing structured layout guidelines, we write pages that satisfy readers and compile cleanly for search algorithms as well.",
    benefits: [
      "Establish unambiguous industry leadership for your corporate digital hub.",
      "Generate continuous long-tail search traffic from educational inquiry tracks.",
      "Empower your marketing assets with highly sharing-friendly corporate resources."
    ],
    keySpecs: [
      "Topical Authority Cluster Planning and Mapping",
      "Conversational Entity-Rich Professional Copywriting",
      "Internal Linking Matrix Setup",
      "User Search Intent Specific Page Styling"
    ],
    faqs: [
      {
        question: "How long does a content copywriting strategy take to drive SEO leads?",
        answer: "Generally, high-quality, comprehensive content clusters begin showing indexing traction and organic keyword positioning within 60 to 90 days of publication, scaling continuously from there.",
        category: "Content"
      }
    ],
    iconName: "FileText"
  },
  {
    id: "content-guest",
    category: "content",
    title: "100% Manual Guest Posting & Link Building",
    description: "Secure safe, highly authoritative digital citations. No PBNs or link networks—just pure manual outreach and trusted editorial reference link profiles.",
    detailedContent: "Traditional backlink campaigns often fail due to unsafe link schemes that risk Google penalties. At AVR Web Consulting, we believe in 100% manual outreach. We pitch custom, editorial-grade articles directly to actual, operational web publishers in your niche. By building genuine relationships, we earn highly relevant contextual backlinks that act as verified votes of confidence. This elevates your domain authority safely in both traditional search and AI retrieval models.",
    benefits: [
      "Boost absolute domain ranking authority and index power safely.",
      "Acquire natural referral buyer traffic directly from top-tier industry hubs.",
      "Protect your web asset from future search algorithm update flags."
    ],
    keySpecs: [
      "Manual Domain Authority Vetted Site Lists Pitching",
      "High-Quality Editorial Contextual Link Placement",
      "Zero-PBN Clean Digital Footprint Guarantee",
      "White-Hat Relationship Outreach Strategy"
    ],
    faqs: [
      {
        question: "Are backlinks still a critical SEO element in the AI-driven era?",
        answer: "Absolutely. High-quality editorial backlinks remain a foundational trust signal. Both traditional search engines and AI retrieval crawlers utilize external linking references to determine the credibility and authority of a site before serving its content as a trusted source.",
        category: "Link Building"
      }
    ],
    iconName: "FileCheck2"
  },

  // 5. Web Design & Development Hub
  {
    id: "web-wordpress",
    category: "web-dev",
    title: "Custom WordPress SEO-First Development",
    description: "Launch high-conversion custom WordPress themes crafted specifically with lightning-fast codebases, fully decoupled dependencies, and integrated SEO plugins.",
    detailedContent: "A standard site template filled with bloated code slows down user experience and limits ranking achievements. We develop responsive custom WordPress sites engineered from line one with lightweight frameworks. Every block, page template, and utility is optimized for speed, fully semantic, and optimized with structural SEO plugins like RankMath or Yoast. This delivers a magnificent management experience for team members and a performance engine for digital marketing campaigns.",
    benefits: [
      "Manage your content using an intuitive, flexible, custom block framework.",
      "Achieve instant page loads that help elevate Core Web Vitals rankings.",
      "Ensure clean cross-device display responsiveness and touch standards compliance."
    ],
    keySpecs: [
      "Performant Custom Block WordPress Development",
      "Advanced SEO On-Page Plugin Integrations (Yoast/RankMath setups)",
      "Crawl-Efficient Code Base Construction & Speed Diagnostics",
      "Automatic Scheme JSON Integrations"
    ],
    faqs: [
      {
        question: "Is WordPress a good CMS choice for advanced SEO management?",
        answer: "WordPress is highly recommended for search campaigns. Its modular framework, native structured blogging layout, and powerful schema integration plugins make on-page optimization, content scaling, and technical cleanups simple to coordinate.",
        category: "Web Dev"
      }
    ],
    iconName: "Code"
  },
  {
    id: "web-ecommerce",
    category: "web-dev",
    title: "E-Commerce Architecture & Conversion SEO",
    description: "Construct scalable online store engines styled using modern e-commerce SEO frameworks. Optimize category pathways, product schema details, and shopping checkouts.",
    detailedContent: "E-Commerce SEO operates on scale. With hundreds of overlapping product configurations, avoiding duplicate indexing issues is critical. We develop lightning-fast online store architectures on WooCommerce and Shopify platforms. We set up precise canonical paths, build optimized product listings with detailed JSON-LD microdata (including real-time pricing, stock indicators, and customer reviews), and design friction-free checkouts to drive revenue.",
    benefits: [
      "Display dynamic product price, stock status, and star rating metrics in search results.",
      "Eradicate product options duplicate indexing issues with canonical logic.",
      "Transform search engine clicks into completed orders with fast checkouts."
    ],
    keySpecs: [
      "Advanced Product Schema microdata Configuration",
      "Frictionless UI Checkout Path Layouts and Testing",
      "Canonical Management for Brand/Color Filtered Pages",
      "Large-Scale Inventory Page Speed Management"
    ],
    faqs: [
      {
        question: "How does product schema markup grow online store traffic?",
        answer: "Product schema transmits critical information to search engines directly. This enables rich snippet layouts with stars, live pricing, and stock status directly in SERPs, which significantly elevates client click-through metrics.",
        category: "E-Commerce SEO"
      }
    ],
    iconName: "ShoppingCart"
  }
];

export const INDUSTRY_DATA: IndustryItem[] = [
  {
    id: "ind-startups",
    title: "SEO Agency for Startups in India",
    subtitle: "Fueling early-stage business growth with rapid-acting search dominance engines.",
    intro: "For fast-scaling startups, traditional SEO timelines of 12 months are often too slow. You need highly tactical search setups that find key niche queries, establish digital authority, and generate client leads with managed marketing spends. We construct tailored agile campaigns that position early-stage companies as established leaders in weeks.",
    challenges: [
      "Extremely limited domain ranking age compared to historical market competitors.",
      "High business burn rates requiring visible ROI on performance spends.",
      "Quickly evolving target buyer niches and messaging standards."
    ],
    solutions: [
      "Laser-targeted on mid-to-high intent niche keywords bypassed by legacy brands.",
      "Quick establishment of founder expertise using high-end manual guest article publication.",
      "Structuring content to maximize selection by AI search products like ChatGPT & Perplexity."
    ],
    results: "Average startup partners achieve a 280% organic inquiry scale-up within 150 days of implementation.",
    keywordsUsed: ["SEO agency for startups India", "LLMO services for startups London", "AI search engines vs traditional SEO US"]
  },
  {
    id: "ind-ecommerce",
    title: "E-Commerce SEO Services",
    subtitle: "Transform organic store listings into top-performing revenue checkout points.",
    intro: "Online retail is highly competitive. With massive consumer choices, ranking at the top of organic shopping queries is the difference between a thriving store and a failed venture. We optimize product categorization maps, correct crawling issues on dynamic filters, and deploy highly detailed JSON-LD datasets.",
    challenges: [
      "Massive duplicate index vulnerabilities caused by multiple size/color tags.",
      "Low product description text sizes causing default categorization issues.",
      "Slow loading times as inventory grows."
    ],
    solutions: [
      "Configure strict product canonical routing rules on Shopify and WooCommerce platforms.",
      "Develop engaging copy blocks for category paths targeting long-tail buyer wishes.",
      "Optimize product imagery, implement CDNs, and clean up theme file sizes."
    ],
    results: "Featured fashion e-commerce client scaled monthly sales clicks from 4,500 to 74,000 within 8 months.",
    keywordsUsed: ["AI citations for ecommerce Dubai", "E-commerce SEO Visakhapatnam", "Best local SEO company Bangalore"]
  },
  {
    id: "ind-healthcare",
    title: "Healthcare Clinic SEO & Patient Acquisition",
    subtitle: "Build deep digital authority and local visibility to drive patient bookings.",
    intro: "Medical search needs absolute compliance and authority under search directories guidelines. Information must be clinically safe, highly accurate, and written by certified experts. Our structured healthcare campaigns focus heavily on regional visibility, clinic map optimizations, and professional medical schema markup.",
    challenges: [
      "Strict search engine standards regarding medical content accuracy.",
      "High reliance on local neighborhood map rankings for immediate appointments.",
      "Complex compliance limitations regarding online patient reviews."
    ],
    solutions: [
      "Align health explanations directly with recognized medical guidelines.",
      "Optimize local profiles across geo networks to manage map visibility issues.",
      "Embed detailed MedicalClinic schema models connecting doctors, specialties, and clinics."
    ],
    results: "Multi-branch clinic scaled local patient appointments count by 160% in Visakhapatnam and Chennai.",
    keywordsUsed: ["AI mentions for healthcare Australia", "Google Maps ranking issue Chennai", "Local SEO consultant near me Pune"]
  },
  {
    id: "ind-fashion",
    title: "Fashion & Retail Organic SEO",
    subtitle: "Dominate seasonal search queries, local apparel listings, and online sales trends.",
    intro: "Fashion search is incredibly visual, seasonal, and highly competitive. Brands must appear for top local retail terms of direct search intent. We combine local city maps visibility tactics for physical locations with deep product e-commerce SEO optimizations.",
    challenges: [
      "Drastic seasonal fluctuations in target product search terms.",
      "High reliance on social platforms over standard search queries.",
      "Dynamic stock updates causing page status issues (404 errors)."
    ],
    solutions: [
      "Establish evergreen brand category paths that remain rankable year-round.",
      "Sync local multi-city branch landing targets with seasonal collections pages.",
      "Set up dynamic product schemas matching current pricing modifications automatically."
    ],
    results: "National clothing brand scaled local shopping visits by 340% during primary shopping seasons.",
    keywordsUsed: ["GEO targeting SEO Hyderabad", "AI visibility for fashion brands New York", "Best local SEO company Bangalore"]
  },
  {
    id: "ind-saas",
    title: "SaaS & Tech SEO Specialist",
    subtitle: "Engage B2B buyers with technical educational guides and advanced AI visibility.",
    intro: "Software buyers search for solutions, tool templates, and technical comparisons. We build comprehensive educational pipelines that solve customer technical questions, while optimizing SaaS brand placement within state-of-the-art AI search models.",
    challenges: [
      "High cost-per-click levels in PPC Google search campaigns.",
      "Long, complex evaluation cycles involving multiple stakeholders.",
      "Need to appear as the top software brand citation across ChatGPT and Claude."
    ],
    solutions: [
      "Form clean topical keyword groups targetting product search intentions.",
      "Optimize product document layouts to satisfy modern machine-readable AI indexing protocols.",
      "Utilize digital PR strategies that establish backlink relationships on leading tech portals."
    ],
    results: "SaaS automation client scaled domain organic views by 5.2x with zero paid social click reliance in 6 months.",
    keywordsUsed: ["AI citations for SaaS Canada", "Technical SEO vs LLM SEO Germany", "LLM SEO consultant UK"]
  }
];

export const CITY_LANDING_DATA: CityLandingData[] = [
  {
    id: "city-delhi",
    cityName: "Delhi",
    metaTitle: "Premier SEO Agency in Delhi | Advanced AI-Driven SEO Services",
    metaDescription: "Elevate your enterprise market reach, fix maps indexation conflicts, and secure high AI citations in Delhi with specialized local hybrid campaigns.",
    introText: "Delhi is the heart of India's corporate headquarters and small enterprises. Standing out in the crowded Delhi marketplace requires more than generic SEO tactics. We build highly targeted local campaign pathways that position your business at the top of neighborhood map choices and secure priority mentions in AI Search listings.",
    localChallenges: "High competitor density makes bidding for standard Google search terms extremely expensive. Furthermore, inconsistent NAP listings in diverse regional guides frequently result in Google Maps ranking issues for local Delhi brands.",
    localKeywords: ["SEO agency for startups India", "SEO vs Google Ads Delhi", "Google Maps ranking issue Delhi"],
    faqs: [
      {
        question: "Why should my Delhi brand invest in SEO over expensive PPC?",
        answer: "While Google Ads delivers immediate exposure, high competitor bidding continuously inflates local Delhi CPC rates. Deeply-optimized organic and LLM-targeted campaigns construct permanent visibility without charging you for client visits.",
        category: "City Insight"
      }
    ]
  },
  {
    id: "city-bangalore",
    cityName: "Bangalore",
    metaTitle: "Best Local SEO Company in Bangalore | Tech & Startup SEO Solutions",
    metaDescription: "Secure top search rankings, drive high-intent tech startup inquiries, and optimize AI visibility in Bangalore with our hybrid strategies.",
    introText: "As India's silicon valley, Bangalore startups compete on absolute technology bounds. Landing page content must align with advanced tech user expectations and fulfill machine-readable indexing parameters used by generative AI retrieval agents.",
    localChallenges: "Tech audiences ignore default low-quality listings. Brands require authoritative, engineering-grade copywriting paired with clean JSON-LD microdata structure.",
    localKeywords: ["Best local SEO company Bangalore", "AI Visibility Bangalore", "Startup SEO Bangalore"],
    faqs: [
      {
        question: "What makes digital campaign strategies in Bangalore unique?",
        answer: "Bangalore is packed with tech-savvy buyers. Traditional on-page optimization must be upgraded with AEO templates and machine-readable data clusters so ChatGPT and local AI models prominently cite your services on user questions.",
        category: "City Insight"
      }
    ]
  },
  {
    id: "city-chennai",
    cityName: "Chennai",
    metaTitle: "Top SEO Services Chennai | Expert Google Maps & Technical Ranking Solutions",
    metaDescription: "Resolve map validation errors, build high-converting landing assets, and scale corporate traffic in Chennai with our technical SEO framework.",
    introText: "From industrial complexes to emerging SaaS agencies, Chennai brands require structured optimization that signals top authority levels. We resolve deep technical site code errors, indexation flags, and geographical map issues.",
    localChallenges: "Many local healthcare and industrial portals in Chennai suffer from high loading delays, unoptimized page parameters, and unverified local business markers.",
    localKeywords: ["Google Maps ranking issue Chennai", "SEO services Chennai", "Best local SEO company Bangalore"],
    faqs: [
      {
        question: "Why is my small business missing from local search results in Chennai?",
        answer: "This is usually caused by indexing limits, broken mobile responsiveness, or map location duplicates. We perform systematic configuration cleanups to help Google clearly map and prioritize your Chennai coordinates.",
        category: "City Insight"
      }
    ]
  },
  {
    id: "city-hyderabad",
    cityName: "Hyderabad",
    metaTitle: "Expert SEO Services in Hyderabad | High-Performance On-Page & GEO Targeting",
    metaDescription: "Target high-intent buyer inquiries, clear search penalties, and build local brand citations on AI engines in Hyderabad with expert local consultants.",
    introText: "Hyderabad's rapidly growing IT centers and massive corporate networks require agile optimization frameworks. We implement precise multi-branch landing hubs and local geographic targeting structures.",
    localChallenges: "Overlapping geographic target locations in metro areas of Hyderabad can confuse standard search algorithms if domain metadata is not structured with precise JSON microdata.",
    localKeywords: ["GEO targeting SEO Hyderabad", "AI Overview visibility tips Hyderabad", "Local SEO consultant near me Pune"],
    faqs: [
      {
        question: "How do you coordinate search visibility across multiple Hyderabad directories?",
        answer: "We employ 100% manual localized citations directory verification. By aligning NAP layouts across directories, we eliminate data conflicts and secure priority listings in city search directories.",
        category: "City Insight"
      }
    ]
  },
  {
    id: "city-mumbai",
    cityName: "Mumbai",
    metaTitle: "Expert SEO Agency in Mumbai | Scalable AEO & High-ROI PPC Campaigns",
    metaDescription: "Acquire high-intent customers, optimize conversions, and maximize conversational AI visibility in Mumbai with custom optimization models.",
    introText: "As India's financial hub, Mumbai demands quick performance and high return on investment. We build modern, conversion-focused paid advertising systems integrated with organic AEO parameters.",
    localChallenges: "Extreme competition makes broad visibility exceptionally costly. Mumbai brands must employ super-focused, long-tail customer intent structures to acquire affordable high-intent queries.",
    localKeywords: ["Answer Engine Optimization Mumbai", "SEO Mumbai", "Best local SEO company Bangalore"],
    faqs: [
      {
        question: "How does AEO help Mumbai firms dominate local queries?",
        answer: "Instead of battling for costly standard keywords, AEO targets exact conversational questions. This secures highly visible direct answer quotes at the peak of the page view without high paid bidding costs.",
        category: "City Insight"
      }
    ]
  },
  {
    id: "city-pune",
    cityName: "Pune",
    metaTitle: "Top Local SEO Consultant in Pune | Tailored Consulting Solutions",
    metaDescription: "Partner with an expert local SEO consultant in Pune and scale business leads, optimize technical elements, and lead AI visibility metrics.",
    introText: "Pune's active medium manufacturing shops, startups, and universities require reliable marketing systems. We provide customized, affordable consultancies for local scale-up.",
    localChallenges: "Mid-sized businesses in Pune often suffer from slow older template designs, lacking structured data blocks, and empty organic backlink profiles.",
    localKeywords: ["Local SEO consultant near me Pune", "SEO Pune", "Best local SEO company Bangalore"],
    faqs: [
      {
        question: "How do we locate the most competent local consultant in Pune?",
        answer: "Look for partners who deliver verified local performance histories, provide total pricing transparency, and possess state-of-the-art competence in AI search mechanics alongside traditional on-page frameworks.",
        category: "Pune"
      }
    ]
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "local-seo-guide",
    title: "The Comprehensive Small Business Local SEO & GMB Playbook",
    subtitle: "Step-by-step instructions to dominate neighborhood searches and eliminate indexing conflicts.",
    excerpt: "Discover the critical strategies to optimize your Google Business Profile, resolve map listing errors, coordinate local citations, and drive actual physical foot traffic to your local channels.",
    author: "Ravi Kumar, Principal SEO Architect",
    publishDate: "2026-05-12",
    readTime: "8 min read",
    contentMarkdown: `## Why Local Search Is Your Most Powerful Lead Generator

For small and mid-sized enterprises, capturing neighboring customers is the fastest path to sustainable growth. When someone types **"local SEO consultant near me Pune"**, they aren't casual web surfers; they are highly motivated buyers seeking immediate action.

### Phase 1: Perfecting Your Google Business Profile (GBP)

Your Google Business Profile stands as the central hub of your digital local identity. To optimize it for high map placement:

1. **Verify Your Coordinates:** Complete Google's visual validation protocol to confirm target physical business addresses.
2. **Category Selection:** Identify your primary classification with absolute surgical precision. If you run a digital marketing boutique, label it primarily as a 'Marketing Agency', rather than generic broad labels.
3. **High-Resolution Visual Assets:** Keep your local listings updated with actual interior and exterior photographs weekly.
4. **Regular Interactions Q&A:** Implement a protocol to respond to every customer review within 24 hours.

### Phase 2: Resolving Mismatched Citation Inconsistencies

One of the leading elements behind **"Google Maps ranking issue Chennai"** is citation decay. When search algorithms fetch local directories and locate diverse variants of your address (e.g., '1st Street' vs 'First St' vs 'TSN Colony Beside Sri Ram Insurance'), their confidence levels in your location decrease, causing your map listings to drop.

| Directory Signal | Ideal Format | Risk Variant |
|------------------|--------------|--------------|
| Business Name    | AVR Web Consulting | AVR SEO Agency Ltd |
| Address          | TSN Colony, Visakhapatnam | TSN Clny, Vsp |
| Contact Phone    | +91-9182543249 | +91-9182XXXXXX |

Our team provides complete manual cleanup across leading Indian directory sites—ensuring perfect record consistency to build absolute trust across crawler engines.`,
    tags: ["Local SEO", "GMB Optimization", "Google Maps"],
    faqs: [
      {
        question: "How do I fix common Google Maps ranking issues?",
        answer: "By executing an audit to discover mismatched NAP records across the web, systematically editing those external listings to match your verified GBP format, and encouraging highly-rated client reviews.",
        category: "Action Plan"
      }
    ]
  },
  {
    id: "geo-optimization",
    title: "The Art of GEO SEO & Location Targeting Nodes",
    subtitle: "Designing multi-city landing architectures that capture intent without indexing penalties.",
    excerpt: "Learn how to structure multi-city landing assets that satisfy both regional search intent and search engines' strict duplicate content guidelines.",
    author: "Ananya Rao, Director of Enterprise Strategy",
    publishDate: "2026-04-28",
    readTime: "6 min read",
    contentMarkdown: `## Scaling Beyond a Single Geographic Hub

As your enterprise expands, you want to acquire customers in multiple cities (e.g., **Delhi, Bangalore, Chennai, Hyderabad**). However, simply duplicating your main homepage text and substituting city names is an outdated black-hat tactic that triggers search engine filters.

### Designing Programmatic GEO Targeting Nodes

To deploy city pages that actually rank and remain entirely safe:

- **Produce Unique Regional Overviews:** Discuss specific local challenges, market histories, or nearby landmarks for each destination hub.
- **Incorporate City-Specific Customer Proof:** Showcase real client testimonials or projects originating from that specific city.
- **Form Unique Internal Linking Bridges:** Establish clear menu links to your localized nodes to pass indexing authority smoothly.
- **Local Business JSON Schemas:** Include dynamic geographic coordinate parameters matching the local business branches in each layout.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AVR Web Consulting",
  "telephone": "+91-9182543249",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "TSN Colony Beside Sri Ram Insurance",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530016",
    "addressCountry": "IN"
  }
}
\`\`\`

By ensuring each page is deeply customized, search engine crawlers reward your localized nodes with prominent placement.`,
    tags: ["GEO SEO", "City landing pages", "SEO Targeting"],
    faqs: [
      {
        question: "How do GEO landing pages survive duplicate content filters?",
        answer: "By ensuring over 60% of the content on each city page is uniquely written, featuring local reviews, local team insights, and specialized regional case studies.",
        category: "Best Practice"
      }
    ]
  },
  {
    id: "ai-overview-seo",
    title: "Answer Engine Optimization (AEO) and AI Overview Playbook",
    subtitle: "Format your digital assets to dominate ChatGPT answers, Gemini citations, and Perplexity widgets.",
    excerpt: "A complete technical guide on structuring website content so conversational AI applications crawl and cite your brand on user queries.",
    author: "Vikas Reddy, Head of AI Research",
    publishDate: "2026-05-18",
    readTime: "10 min read",
    contentMarkdown: `## The Generative Search Revolution Is Live

The standard list of ten blue search links is undergoing a massive transformation. Modern search engines are generating direct synthesized responses utilizing **Google AI Overviews**, Perplexity AI, or Bing Copilot. If your business content isn't structured to fit inside this layout, your organic digital traffic could disappear.

### The AEO Content Formulation Strategy

To convert standard informational blogs into high-performing AI citation assets, structure your text using these principles:

1. **The Q&A Pattern:** Begin main context blocks with a direct, clear question (e.g., *'What is Answer Engine Optimization?'*) immediately followed by a concise 2-sentence definition.
2. **Maximize Schema Mapping:** Implement highly descriptive FAQ and Article microdata snippets in the source code.
3. **Structured Analytical Data:** Present pricing models, operational comparisons, and pros/cons inside clean HTML tables and lists. AI scrapers are highly optimized to pull data from structured tables.
4. **Entity Density:** Mention recognized, verifiable industry entities, tools, and platforms to anchor your content in Google's Knowledge Graph.

### Traditional SEO vs Generative AI Visibility

| SEO Vector | Traditional Search | Generative AEO |
|------------|--------------------|----------------|
| Priority | Meta title keyword match | Direct concise answers |
| Parser | Simple search indexer | Semantic LLM retriever |
| Format | Long-form narratives | Clean Q&A, structured tables |
| Success Measure | Standard SERP position | Generative Overview citation |

Adopting this hybrid optimization framework preserves your standard rankings while positioning your brand as the primary option recommended by modern conversational tools.`,
    tags: ["AEO", "AI Overviews", "LLM Optimization"],
    faqs: [
      {
        question: "Can standard search campaigns be converted to support AEO?",
        answer: "Yes. By refactoring existing high-value service explanations into crisp Q&A blocks and embedding semantic validation tags, legacy pages can be quickly optimized for AI extraction.",
        category: "AEO Optimization"
      }
    ]
  },
  {
    id: "technical-seo-checklist",
    title: "The Ultimate 2026 Technical SEO and Speed Audit Checklist",
    subtitle: "Master the backend search ranking signals that govern crawl rates and algorithmic index placement.",
    excerpt: "An actionable, developer-vetted technical checklist to audit, optimize, and resolve site rendering speed bottlenecks and mobile responsive errors.",
    author: "Pranav Teja, Chief Technology Officer",
    publishDate: "2026-05-02",
    readTime: "7 min read",
    contentMarkdown: `## Core Code Performance Is the Ultimate Structural Signal

You can publish the most comprehensive copywriting online, but if search engines struggle to crawl your files, your pages will remain hidden. Technical optimization ensures crawler bots can access, render, and index your website swiftly and securely.

### The Crucial Technical Search Checkpoints

Secure your organic growth by resolving these primary backend structural checks:

- **Crawlability Directives:** Ensure your robots.txt directory directives are optimally configured—preventing crawlers from wasting crawl budget on systemic admin pages while permitting complete access to educational resources.
- **Core Web Vitals Optimization:**
  - Modern platforms require LCP scores under 2.5 seconds.
  - Eliminate custom render-blocking styling scripts from primary page blocks.
  - Implement modern responsive image formats (such as WebP or AVIF) with precise size declarations to prevent layout shifts.
- **Sitemap Cleanliness:** Ensure your automated XML sitemap lists only absolute canonical URLs—keeping broken draft directories out of indexing trails.
- **SSL Enforcements:** Maintain clean HTTPS routing protocols globally across all subdomain properties.

Our customized WordPress theme structures and lightweight layouts are engineered from line one to score 100 on Google PageSpeed diagnostics naturally, giving our clients a solid framework for high-ranking marketing campaigns.`,
    tags: ["Technical SEO", "Page Speed", "Core Web Vitals"],
    faqs: [
      {
        question: "How do I identify render-blocking resources on my website?",
        answer: "By executing a comprehensive diagnosis using modern browser inspection modules or Google's free PageSpeed tool, which locates the exact styling files delaying page renders.",
        category: "Diagnostic Support"
      }
    ]
  },
  {
    id: "intl-seo-vs-ai",
    title: "International SEO vs AI SEO - The Strategic Choice for Global Scaling",
    subtitle: "Should your brand invest in multi-lingual SEO parameters or focus fully on conversational AI visibility?",
    excerpt: "An in-depth guide comparing multi-language domain targeting and emerging conversational LLM-focused optimization strategies.",
    author: "Ravi Kumar, Principal SEO Architect",
    publishDate: "2026-05-20",
    readTime: "9 min read",
    contentMarkdown: `## Navigating The Generational Search Split

Global brands planning target expansions face a technical challenge. Do they deploy multi-lingual localized domain variations across different regional hubs, or do they optimize content for conversational AI engines like ChatGPT, Gemini, and Claude?

### Phase 1: Comparing Global SEO and AEO Strategies

Traditional international campaigns focus on standard geolocation targeting—building out ccTLD domain hubs and multilingual content indexes. AI-driven optimization, conversely, bypasses country URLs to optimize conversational brand associations globally within large language models.

| Metric | International Multi-Regional SEO | Advanced Conversational AI SEO |
|--------|-----------------------------|---------------------------|
| Architecture | ccTLD domains, hreflang tags | Entity-focused schemas, JSON-LD API data |
| Resource Needs | Multi-language translation bureaus | Semantic parsing frameworks |
| User Profile | Traditional web navigators | Direct voice & conversational AI query clients |

### Integrating a Hybrid Optimization Model

The most effective global strategy integrates both paradigms:

1. **Deploy localized multi-lingual indexes** to secure standard search volumes in each destination market.
2. **Incorporate concise semantic data blocks** on every product page to ensure AI grounding engines can easily retrieve correct localized pricing and features.
3. **Syndicate expert technical summaries** across reputable regional technology platforms to build brand mentions across dynamic AI models training pipelines.

This multi-threaded architecture protects your standard global rankings while preparing your brand to capture emerging generative search shares.`,
    tags: ["AI SEO", "International SEO", "Marketing Strategy"],
    faqs: [
      {
        question: "Does global scaling require localized physical branches?",
        answer: "No. By implementing multiregional schema models and securing mentions on regional platforms, global organizations can operate and rank in distant metros without local offices.",
        category: "Global Growth"
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-seo",
    title: "Industrial B2B Firm Achieves 420% Organic Search Inquiry Scaling",
    clientName: "Visakha Heavy Engineering Corp",
    industry: "Manufacturing & Heavy Industries",
    category: "seo",
    duration: "6 Months Campaign",
    metrics: [
      { label: "Organic Monthly Views", value: "+420%", subtext: "From 3k to 15.6k visitors" },
      { label: "Qualified Lead Inquiries", value: "3.5x", subtext: "Via targeted landing pages" },
      { label: "Top-3 Keyword Placements", value: "28+", subtext: "Focused transactional queries" }
    ],
    challenge: "The client suffered from poor digital visibility, missing local search parameters, and an outdated codebase that took over 7 seconds to render in mobile view. Their target b2b keywords were dominated by national aggregators.",
    solution: "We completely rebuilt their website using our custom, lightweight custom WordPress architecture, bringing paint times under 1.5 seconds. We deployed structured schema markups and launched a focused geographic content pipeline targeting manufacturing inquiries in industrial cities like Chennai and Visakhapatnam.",
    impactResult: "The client secured first-page organic visibility for over 28 highly competitive industrial search terms, resulting in a 3.5x scale-up in verified telephone and contact form inquiries without any paid PPC dependency."
  },
  {
    id: "case-ai-visibility",
    title: "E-Commerce Footwear Brand Future-Proofs Brand Mentions on Generative Engines",
    clientName: "WalkFit Activewear Labs",
    industry: "Consumer Retail & E-Commerce",
    category: "ai-visibility",
    duration: "4 Months AI SEO Program",
    metrics: [
      { label: "AI Overview Citations", value: "34+", subtext: "Unique model query inclusions" },
      { label: "AEO Direct Conversions", value: "+180%", subtext: "Inbound via AI grounding tools" },
      { label: "JSON Schema Completeness", value: "100%", subtext: "Correct structured data validation" }
    ],
    challenge: "While listing strongly on generic brand queries, WalkFit was completely missing from conversational recommendations when clients asked AI engines (e.g., ChatGPT, Claude) for 'best durable running shoes for flat feet in Hyderabad'.",
    solution: "We deployed a complete LLMO campaign: rebuilding online catalog pages with detailed schema tags, structuring description content into machine-optimized Q&A formats, and launching digital PR campaigns to secure references inside key AI training databases.",
    impactResult: "WalkFit's brand earned persistent mentions and recommendations across leading generative platforms, driving a 180% scale-up in inbound traffic originating from AI search integrations."
  },
  {
    id: "case-ppc",
    title: "Regional Healthcare Provider Slashes Client Acquisition Cost by 48%",
    clientName: "Narayana Dental Centers",
    industry: "Healthcare & Patient Services",
    category: "ppc",
    duration: "3 Months Optimization",
    metrics: [
      { label: "Cost Per Acquisition", value: "-48%", subtext: "Ad cost halved per patient" },
      { label: "Google Maps Placements", value: "#1", subtext: "In local clinic searches" },
      { label: "PPC Conversion Rate", value: "+8.4%", subtext: "Inquiries per ad landing page views" }
    ],
    challenge: "The provider's paid search campaigns were draining budgets due to broad targeting, keyword leakage on irrelevant queries, and poor landing pages that failed to establish trust under search engine E-E-A-T guidelines.",
    solution: "We restructured their entire Google Ads workflow—implementing precise buyer intent keyword targeting, setting up expansive negative keyword lists, building fast call-to-action landing templates, and optimizing their Google Maps listings with manual citation updates.",
    impactResult: "Patient acquisition costs fell by 48% within 90 days of implementation, transforming their ad spend into a highly efficient customer generation system."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  // 1. Traditional SEO Packages
  {
    id: "price-seo-starter",
    category: "seo",
    name: "Local Growth SEO",
    price: "$100",
    period: "month",
    description: "Ideal for local neighborhood small shops wanting local map placement and GMB visibility.",
    features: [
      "Custom Google Business Profile (GMB) Optimization",
      "NAP Citation Cleanup & Directory Development (35+ sites)",
      "Targeted Local GEO Keyword Setup (Up to 10 queries)",
      "Core Web Vitals Diagnosis and On-Page Cleanup",
      "Regular Performance Reports & Google Analytics Sync"
    ]
  },
  {
    id: "price-seo-business",
    category: "seo",
    name: "Enterprise Market Leader",
    price: "$200",
    period: "month",
    description: "Perfect for growing startups and medium companies scaling target regions nationally.",
    features: [
      "Everything in Local Growth tier included",
      "Expanded National SEO Targeting (Up to 30 keywords)",
      "Technical Crawl and Core Web Vitals Fixes",
      "Premium Guest Blogging Placements (2 authoritative posts/month)",
      "Custom Localized Schema Markup Implementation",
      "Competitor SEO Gap Analysis Tracking"
    ],
    popular: true
  },

  // 2. AI SEO Packages
  {
    id: "price-ai-visibility",
    category: "ai-seo",
    name: "AI Visibility Hub",
    price: "$150",
    period: "month",
    description: "Format your corporate assets to secure placement inside AI search models and Google AI Overviews.",
    features: [
      "AEO Content Restructuring & Snippets Optimization",
      "Rich FAQ schema markup integration (JSON-LD)",
      "LLM Search Retrieval Optimization & Optimization Diagnostics",
      "Conversational search intent mapping and deployment",
      "Regular Generative Serps placement performance reviews"
    ]
  },
  {
    id: "price-ai-premium",
    category: "ai-seo",
    name: "AEO + LLMO Ultimate",
    price: "$299",
    period: "month",
    description: "The complete next-generation search optimization stack for ambitious digital brands.",
    features: [
      "Everything in AI Visibility Hub tier included",
      "Active LLM Knowledge Training Database Placement Strategy",
      "Custom Entity-Density Content Writing (4 optimized guides/month)",
      "Global grounding reference authority backlink generation",
      "Multi-Machine Crawl Auditing and Diagnostic Support",
      "Priority Executive Consultation & Support Desk Access"
    ],
    popular: true
  },

  // 3. Paid PPC Packages
  {
    id: "price-ppc-starter",
    category: "ppc",
    name: "Conversion PPC Quickstart",
    price: "$149",
    period: "month",
    description: "Generate inbound phone inquiries and forms swiftly with expert Google Ads management.",
    features: [
      "Complete Target Keyword Identification & Competitor Bid Auditing",
      "Ad copy layouts implementation and monthly expansion",
      "conversion-optimized Landing page setup and A/B configurations",
      "Dynamic conversion goals mapping & call attribution tracking",
      "Managed Negative search term cleanups weekly"
    ]
  }
];
