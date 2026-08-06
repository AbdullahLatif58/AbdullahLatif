const whatsapp = "/images/project-whatsapp.jpg";
const olive = "/images/project-olive.jpg";
const n8n = "/images/project-n8n.jpg";
const realtor = "/images/project-realtor.jpg";

export const profile = {
  first: "Abdullah",
  last: "Latif",
 role: "Software Engineer",
 tagline: "Building AI-powered software",
 taglineTwo: "for modern businesses.",
  location: "Lahore, Punjab, PK",
  email: "latifabdullah337@gmail.com",
  phone: "+92 329 787 4104",
  github: "https://github.com/AbdullahLatif58",
  linkedin: "https://www.linkedin.com/in/",
  origin: "From Pakistan with",
  originAccent: "Code",
};

export const heroTags = ["Next.js", "Node.js", "MySQL"];

export const about = [
  "Software Engineer specializing in modern web applications, SaaS platforms and AI-powered solutions. Experienced in designing production systems from architecture through deployment with a strong focus on scalability, maintainability and business impact.",

  "Over the past year, I've engineered full-stack applications including WhatsApp SaaS platforms, AI-assisted e-commerce systems, workflow automation pipelines and large-scale marketplace platforms using Next.js, Node.js, MySQL and modern cloud tooling.",

  "Beyond writing code, I enjoy solving business problems through software—designing clean architectures, building reusable systems, integrating AI capabilities such as RAG and LLM workflows, and delivering products that are reliable in production."
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5 / CSS3"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "REST API Design"] },
  { title: "Database", items: ["MySQL", "MongoDB", "Schema Design"] },
  { title: "Automation", items: ["n8n", "Baileys API", "OpenAI API"] },
  { title: "Tools", items: ["Git", "GitHub Actions", "Postman", "Vercel", "Jest"] },
];

export const expertise = [
"Software Engineering",
"AI Applications",
"SaaS Platforms",
"Automation Systems",
"Backend Architecture"
]

export const projects = [
  {
    slug: "whispersender",
    index: "01",
    title: "WhatsApp Marketing SaaS Platform",
    href: "https://app.whispersender.com",
    hrefLabel: "app.whispersender.com",
    year: "2026",
    image: whatsapp,
    stack: ["Node.js", "Baileys", "Next.js", "MySQL"],
   summary:
"Engineered a multi-tenant WhatsApp communication platform that enables businesses to manage multiple WhatsApp accounts, collaborate with teams, automate customer interactions and run large-scale messaging campaigns from a single unified dashboard.",
   bullets: [
  "Architected a scalable backend supporting multiple WhatsApp sessions per workspace with persistent authentication, automatic reconnection and subscription-based account limits.",

  "Built a complete customer communication suite including shared inboxes, bulk broadcasts, rich media messaging (text, images, videos and documents), automated replies, reusable templates and advanced contact management.",

  "Implemented enterprise-ready workspace collaboration with role-based access control (RBAC), allowing business owners to invite agents, assign permissions and securely manage customer conversations from a centralized dashboard."
]
  },
  {
    slug: "zaitoonkatail",
    index: "02",
    title: "Zaitoon Ka Tail — Olive Oil Store",
    href: "https://zaitoonkatail.pk",
    hrefLabel: "zaitoonkatail.pk",
    year: "2025",
    image: olive,
    stack: ["Next.js", "Node.js", "MySQL"],
    summary:
      "Engineered a complete e-commerce platform for a commercial olive oil brand featuring inventory management, secure checkout, merchant administration and performance-focused storefront architecture.",
    bullets: [
      "Conversion-focused storefront with a responsive UI optimised for performance and the Pakistani market.",
      "MySQL-backed product, order and inventory system with a merchant dashboard for full admin control.",
    ],
  },
  {
    slug: "seo-automation",
    index: "03",
    title: "N8N SEO Automation Pipeline",
    href: "",
    hrefLabel: "Internal agency tool",
    year: "2025",
    image: n8n,
    stack: ["n8n", "Node.js", "OpenAI API", "REST APIs"],
    summary:
      "Built an AI-assisted SEO automation pipeline that transformed repetitive agency workflows into reusable automated processes, significantly reducing manual operational effort.",
    bullets: [
      "Automated keyword tracking, competitor analysis, AI-powered content gap identification and report generation.",
      "OpenAI API generates SEO recommendations and content briefs from keyword and competitor data.",
      "Modular, reusable workflow blocks adaptable across client campaigns with minimal configuration.",
    ],
  },
  {
    slug: "realtor",
    index: "04",
    title: "Realtor — Real Estate Platform",
    href: "https://realtor-omega-ecru.vercel.app",
    hrefLabel: "realtor-omega-ecru.vercel.app",
    year: "2025",
    image: realtor,
    stack: ["Next.js", "Node.js", "MySQL"],
    summary:
      "Designed and engineered a scalable real-estate platform with server-rendered listings, advanced filtering, optimized SEO pages and a secure administrative dashboard.",
    bullets: [
      "Filtering by location, price range, property type and bedrooms across server-rendered listing pages.",
      "Normalised MySQL schema handling listings, agent profiles, inquiries and saved search state at scale.",
    ],
  },
];


  export const experience = [
  {
    year: "2026",
    kind: "Recognition",
    title: "Recognized for Building Production Software",
    body: "Trusted to independently architect and deliver production-ready applications for commercial clients across SaaS, e-commerce and real-estate domains within a fast-paced agency environment.",
  },
  {
    year: "2026",
    kind: "Academic",
    title: "Graduated with a Software Engineering Capstone",
    body: "Completed a capstone project focused on scalable e-commerce architecture featuring dynamic storefront switching, intelligent product recommendations and voice-assisted product discovery.",
  },
  {
    year: "2025",
    kind: "Innovation",
    title: "Designed a Dynamic Commerce Engine",
    body: "Engineered an application architecture capable of switching entire storefront experiences instantly while preserving business logic, customer data and application state.",
  },
  {
    year: "2026",
    kind: "Growth",
    title: "Promoted from Intern to Software Developer",
    body: "Advanced to a full development role after consistently delivering production-quality features, demonstrating ownership and contributing across frontend, backend and system design.",
  },
];


export const techMarquee = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "n8n",
  "Baileys",
  "OpenAI API",
  "Git",
  "GitHub Actions",
  "Jest",
  "Vercel",
  "Postman",
];
