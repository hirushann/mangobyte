// Site-wide copy and data. Contact details are placeholders until confirmed.
export const site = {
  name: "MangoByte",
  email: "hello@mangobyte.lk",
  location: "Colombo, Sri Lanka",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Website Development",
    body: "Custom, mobile-first websites built on modern stacks. Fast on a 4G connection in Kandy, solid under traffic from New York.",
    tags: ["Next.js", "WordPress", "E-commerce"],
  },
  {
    title: "App Development",
    body: "Web and mobile apps that turn your day-to-day processes into something customers actually enjoy using.",
    tags: ["iOS", "Android", "Web apps"],
  },
  {
    title: "UI/UX Design",
    body: "Interfaces designed around real user journeys, prototyped and tested before a single line of production code.",
    tags: ["Research", "Prototyping", "Design systems"],
  },
  {
    title: "Search Engine Optimization",
    body: "Technical SEO baked into every build, plus content and local search strategy that keeps you visible.",
    tags: ["Technical SEO", "Local SEO", "Content"],
  },
  {
    title: "Brand Identity",
    body: "Names, logos, colour and type systems that give growing businesses a look worth remembering.",
    tags: ["Logo", "Guidelines", "Packaging"],
  },
  {
    title: "Digital Marketing",
    body: "Social, paid and email campaigns tied back to numbers you can see, so every rupee has a job.",
    tags: ["Social", "Paid ads", "Analytics"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your business, your customers and what success looks like. You leave with a clear scope and quote.",
  },
  {
    step: "02",
    title: "Design",
    body: "Wireframes, then polished screens. You review real layouts, not mood boards, and we refine together.",
  },
  {
    step: "03",
    title: "Build",
    body: "Clean, fast code with SEO and accessibility built in. Weekly previews so there are no surprises.",
  },
  {
    step: "04",
    title: "Launch & grow",
    body: "We ship, monitor and keep improving. Support, updates and growth work whenever you need it.",
  },
];

export type Project = {
  name: string;
  category: string;
  client: string;
  location: string;
  year: string;
  tone: "mango" | "leaf" | "flesh" | "sprout" | "paper" | "ink";
};

export const projects: Project[] = [
  { name: "Awaba Las Vegas Tours", category: "Web Development", client: "Anonymous", location: "Las Vegas, USA", year: "2025", tone: "mango" },
  { name: "Dynamic Marine Logistics", category: "Web Development", client: "Anonymous", location: "Sri Lanka", year: "2025", tone: "leaf" },
  { name: "Serendib Ventures", category: "Web Development", client: "Mr. Shihan", location: "New York, USA", year: "2025", tone: "flesh" },
  { name: "Travelers Thoughts", category: "Web Development", client: "Mr. Perera", location: "Sri Lanka", year: "2025", tone: "sprout" },
  { name: "PikPakGo", category: "Web Development", client: "Mr. Chris", location: "Las Vegas, USA", year: "2025", tone: "ink" },
  { name: "Sport Unleash", category: "Web Development", client: "Mr. Alailima", location: "Sri Lanka", year: "2025", tone: "paper" },
];

export const values = [
  {
    title: "Built to perform",
    body: "Speed, accessibility and SEO aren't add-ons. Every site we ship is measured against them before launch.",
  },
  {
    title: "Honest pricing",
    body: "Clear quotes up front, priced for Sri Lankan businesses and startups, with no surprise invoices later.",
  },
  {
    title: "One small team",
    body: "You talk directly to the people designing and building your site. No account managers, no hand-offs.",
  },
];
