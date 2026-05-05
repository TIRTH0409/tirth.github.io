/* Project data + thumbnail SVG factory */
window.PROJECTS = [
  {
    n: "01", title: "Helix Pay", role: "Lead Designer · Fintech", year: "2026",
    tags: ["Mobile", "Fintech", "Design System"],
    blurb: "Cross-border payments app rebuilt around a single number — the rate you actually get.",
    palette: ["#0040FF", "#6E5BFF", "#00C2FF"]
  },
  {
    n: "02", title: "Nimbus EHR", role: "Product Designer · Healthcare", year: "2025",
    tags: ["Web App", "Healthcare", "Research"],
    blurb: "Electronic health records reimagined for the 11-minute appointment.",
    palette: ["#00C2FF", "#C6F432", "#0040FF"]
  },
  {
    n: "03", title: "Forge ERP", role: "UX Designer · ERP", year: "2025",
    tags: ["Dashboard", "ERP", "Data Viz"],
    blurb: "Inventory + manufacturing dashboard for a 200-person factory floor.",
    palette: ["#FF5C2A", "#0A0E1A", "#FF5C2A"]
  },
  {
    n: "04", title: "Citrine Wallet", role: "UX Researcher · Crypto", year: "2025",
    tags: ["Mobile", "Research", "Onboarding"],
    blurb: "Onboarding flow that taught 14k first-time users to self-custody — without the jargon.",
    palette: ["#C6F432", "#0040FF", "#0A0E1A"]
  },
  {
    n: "05", title: "Petalcare", role: "Product Designer · Wellness", year: "2024",
    tags: ["Mobile", "Wellness", "Brand"],
    blurb: "Period & cycle tracker built around honesty over algorithms.",
    palette: ["#FF5C2A", "#FFB199", "#6E5BFF"]
  },
  {
    n: "06", title: "Atlas DS", role: "Design Systems Lead", year: "2024",
    tags: ["Design System", "Tokens", "Docs"],
    blurb: "Multi-brand design system with semantic tokens, theming, and Figma-to-code parity.",
    palette: ["#0A0E1A", "#0040FF", "#F5F4F1"]
  },
  {
    n: "07", title: "Loom Books", role: "Freelance · SaaS", year: "2024",
    tags: ["Web", "SaaS", "Marketing"],
    blurb: "Bookkeeping for solo founders. A landing page and dashboard that don't apologize.",
    palette: ["#6E5BFF", "#00C2FF", "#FF5C2A"]
  }
];

/* Generate a thumb SVG for a given project */
window.makeThumbSVG = function(p, w = 360, h = 240) {
  const [c1, c2, c3] = p.palette;
  const isMobile = p.tags.includes("Mobile");
  const isDash = p.tags.includes("Dashboard") || p.tags.includes("ERP");
  const isDS = p.tags.includes("Design System");
  const seed = parseInt(p.n);

  let inner = "";

  if (isMobile) {
    inner = `
      <rect x="${w/2-70}" y="20" width="140" height="200" rx="20" fill="${c1}" opacity="0.95"/>
      <rect x="${w/2-58}" y="40" width="116" height="170" rx="8" fill="rgba(255,255,255,.95)"/>
      <circle cx="${w/2-30}" cy="68" r="10" fill="${c2}"/>
      <rect x="${w/2-12}" y="62" width="50" height="6" rx="3" fill="#0A0E1A" opacity=".15"/>
      <rect x="${w/2-12}" y="74" width="32" height="4" rx="2" fill="#0A0E1A" opacity=".1"/>
      <rect x="${w/2-46}" y="92" width="92" height="40" rx="6" fill="${c3}" opacity=".25"/>
      <rect x="${w/2-46}" y="140" width="44" height="44" rx="6" fill="${c1}" opacity=".15"/>
      <rect x="${w/2+2}" y="140" width="44" height="44" rx="6" fill="${c2}" opacity=".15"/>
      <rect x="${w/2-46}" y="190" width="92" height="6" rx="3" fill="#0A0E1A" opacity=".15"/>`;
  } else if (isDash) {
    inner = `
      <rect x="20" y="20" width="${w-40}" height="${h-40}" rx="6" fill="rgba(255,255,255,.95)"/>
      <rect x="20" y="20" width="${w-40}" height="32" rx="6" fill="${c1}" opacity=".9"/>
      <circle cx="36" cy="36" r="5" fill="#fff" opacity=".7"/>
      <rect x="48" y="33" width="60" height="6" rx="3" fill="#fff" opacity=".7"/>
      <rect x="36" y="68" width="${w-72}" height="60" rx="4" fill="${c1}" opacity=".1"/>
      <polyline points="40,120 80,100 120,108 160,80 200,90 240,70 280,76 320,60" stroke="${c1}" stroke-width="2" fill="none"/>
      <rect x="36" y="142" width="80" height="60" rx="4" fill="${c2}" opacity=".15"/>
      <rect x="124" y="142" width="80" height="60" rx="4" fill="${c3}" opacity=".15"/>
      <rect x="212" y="142" width="${w-248}" height="60" rx="4" fill="${c1}" opacity=".1"/>`;
  } else if (isDS) {
    inner = `
      <rect x="20" y="20" width="${w-40}" height="${h-40}" rx="6" fill="rgba(255,255,255,.95)"/>
      <circle cx="80" cy="70" r="22" fill="${c2}"/>
      <rect x="120" y="50" width="44" height="44" rx="6" fill="${c1}"/>
      <polygon points="200,50 222,94 178,94" fill="${c3}" opacity=".7"/>
      <rect x="240" y="55" width="80" height="34" rx="17" fill="${c1}" opacity=".15"/>
      <rect x="40" y="120" width="60" height="60" rx="6" fill="${c1}" opacity=".1"/>
      <rect x="110" y="120" width="60" height="60" rx="6" fill="${c2}" opacity=".25"/>
      <rect x="180" y="120" width="60" height="60" rx="6" fill="${c3}" opacity=".4"/>
      <rect x="250" y="120" width="60" height="60" rx="6" fill="${c1}" opacity=".7"/>`;
  } else {
    inner = `
      <rect x="20" y="20" width="${w-40}" height="${h-40}" rx="6" fill="rgba(255,255,255,.95)"/>
      <rect x="40" y="40" width="120" height="14" rx="3" fill="${c1}"/>
      <rect x="40" y="62" width="200" height="6" rx="3" fill="#0A0E1A" opacity=".2"/>
      <rect x="40" y="74" width="160" height="6" rx="3" fill="#0A0E1A" opacity=".15"/>
      <rect x="40" y="100" width="${w-80}" height="100" rx="6" fill="${c1}" opacity=".15"/>
      <circle cx="${w/2}" cy="150" r="38" fill="${c2}" opacity=".7"/>
      <circle cx="${w/2-20}" cy="138" r="14" fill="${c3}"/>`;
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg-${seed}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="50%" stop-color="${c2}"/>
        <stop offset="100%" stop-color="${c3}"/>
      </linearGradient>
      <pattern id="grid-${seed}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg-${seed})"/>
    <rect width="${w}" height="${h}" fill="url(#grid-${seed})"/>
    ${inner}
    <text x="${w-16}" y="${h-14}" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(255,255,255,.7)" text-anchor="end" letter-spacing="1">CASE ${p.n} — ${p.year}</text>
  </svg>`;
};
