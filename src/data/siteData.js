export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Quest Financial Services",
    legalName: "Quest Financial Services (Pvt) Ltd",
    tagline: "Your Wealth, Our Quest",
    description:
      "Premier financial advisory firm delivering wealth management, investment planning, and corporate finance solutions across Zimbabwe and Southern Africa.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@questfinancial.co.zw",
    address: "7th Floor, Joina City, Corner Jason Moyo & Inez Terrace, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 42,
    established: "2012",
    yearsExperience: "12+",
    projectsCompleted: "500+",
    employees: "35+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "quest-financial-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Quest",
    logoLine2: "Financial",
  },

  hero: {
    badge: "Trusted Wealth Advisors Since 2012",
    titleParts: [
      { text: "Your Wealth " },
      { text: "Our Quest.", highlight: true },
    ],
    subtitle:
      "We do not just manage portfolios. We architect financial legacies. From high-net-worth individuals to growing enterprises, Quest delivers strategies that compound over decades.",
    ctaPrimary: "Book a Consultation",
    ctaSecondary: "Our Services",
    trustBadge: "SEC Registered",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920", alt: "Modern financial district skyline at dusk" },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920", alt: "Financial data analysis on screens" },
      { url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920", alt: "Professional business meeting in boardroom" },
    ],
  },

  stats: [
    { number: "500+", label: "Portfolios Managed" },
    { number: "$25M+", label: "Assets Under Advisory" },
    { number: "12+", label: "Years of Excellence" },
    { number: "98%", label: "Client Retention" },
  ],

  servicesPreview: [
    {
      iconName: "ChartLineUp",
      title: "Wealth Management",
      desc: "Comprehensive portfolio construction and active management. We build diversified strategies tailored to your risk appetite, time horizon, and legacy goals.",
    },
    {
      iconName: "Briefcase",
      title: "Corporate Finance",
      desc: "M&A advisory, capital raising, and restructuring. We help businesses unlock value through strategic financial engineering.",
    },
    {
      iconName: "ShieldCheck",
      title: "Risk & Insurance",
      desc: "Protecting what you have built. Bespoke insurance solutions and risk mitigation strategies for individuals and corporations.",
    },
    {
      iconName: "CurrencyDollar",
      title: "Investment Planning",
      desc: "From ZSE equities to offshore diversification. Research-driven investment strategies that outperform benchmarks consistently.",
    },
    {
      iconName: "GraduationCap",
      title: "Estate Planning",
      desc: "Trusts, wills, and succession planning that ensure your wealth transfers seamlessly across generations. No gaps. No disputes.",
    },
    {
      iconName: "Users",
      title: "Retirement Solutions",
      desc: "Pension fund management and retirement income strategies. Making sure your golden years are genuinely golden.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      title: "Corporate Treasury Optimization",
      category: "Corporate Finance",
    },
    {
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800",
      title: "HNWI Portfolio Growth Strategy",
      category: "Wealth Management",
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      title: "Pension Fund Restructuring",
      category: "Retirement",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Built on " },
      { text: "Trust.", highlight: true },
      { text: " Driven by Results." },
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
    imageAlt: "Quest Financial Services team in professional consultation",
    experienceYears: "12+",
    experienceLabel: "Years Advising",
    points: [
      {
        title: "Independent Advice",
        desc: "We are not tied to any bank or product provider. Our recommendations serve your interests, not commission structures.",
      },
      {
        title: "Proven Track Record",
        desc: "Consistent portfolio outperformance against ZSE benchmarks. Our clients average 18% annual returns over the last 5 years.",
      },
      {
        title: "Institutional Expertise",
        desc: "Our team includes former RBZ analysts, Big 4 alumni, and CFA charterholders. You get institutional-grade advice at private client scale.",
      },
      {
        title: "Local & Global",
        desc: "Deep understanding of the Zimbabwean market with offshore diversification capabilities. Your wealth grows locally and internationally.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920",
    backgroundAlt: "Professional financial advisory meeting",
    titleParts: [
      { text: "Your Legacy " },
      { text: "Starts", highlight: true },
      { text: " Today." },
    ],
    subtitle:
      "Book a complimentary 30-minute strategy session. No obligations. No sales pressure. Just a clear picture of where your finances stand and where they could go.",
    ctaPrimary: "Schedule Consultation",
    whatsappText: "Hi Quest Financial! I would like to book a consultation to discuss my financial goals.",
  },

  homeTestimonials: [
    {
      name: "Tawanda Nyamukapa",
      role: "Business Owner",
      text: "Quest turned my scattered investments into a coherent portfolio. In three years, my net worth has grown by 45%. Their advice on offshore diversification was the best financial decision I ever made.",
      rating: 5,
    },
    {
      name: "Grace Mudimu",
      role: "Retired Executive",
      text: "The retirement planning team gave me genuine peace of mind. I know exactly what my income will look like for the next 25 years. That level of clarity is priceless.",
      rating: 5,
    },
    {
      name: "Farai Chigwedere",
      role: "Medical Specialist",
      text: "As a doctor, I have zero time for financial management. Quest handles everything. Monthly reports, tax optimization, estate planning. I just focus on my practice.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Finance With " },
      { text: "Purpose.", highlight: true },
    ],
    heroSubtitle:
      "Quest Financial Services was founded on a single conviction: every Zimbabwean deserves access to world-class financial advice, not just the ultra-wealthy.",
    storyImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
    storyImageAlt: "Quest Financial team in consultation",
    storyProjectCount: "500+",
    storyProjectLabel: "Portfolios Managed",
    storyTitle: "From a Two-Person Consultancy to Zimbabwe's Most Trusted Advisory Firm.",
    storyParagraphs: [
      "Quest Financial Services was born in 2012 when two former RBZ analysts realized that ordinary Zimbabweans were being left behind by the financial advisory industry. Banks sold products. Brokers chased commissions. Nobody was actually sitting down with clients and building long-term financial strategies.",
      "We started with a single office and a radical promise: independent advice, zero product bias, and absolute transparency on fees. The response was immediate. Word spread that there was a firm in Harare that actually put clients first.",
      "Today, we manage over $25 million in advisory assets across 500+ client portfolios. Our team has grown to 35+ professionals, including CFA charterholders, tax specialists, and estate planners. The promise has not changed. Your wealth is our quest.",
    ],
    mission:
      "To democratize world-class financial advice in Zimbabwe. We believe that sophisticated wealth management should be accessible to every professional, entrepreneur, and family building their future.",
    vision:
      "To be Southern Africa's most trusted independent financial advisory firm, known for integrity, performance, and the transformative impact we have on our clients' financial lives.",
    values: [
      { iconName: "ShieldCheck", title: "Integrity", desc: "We earn trust through transparency. Every fee disclosed. Every conflict declared. Your interests always come first." },
      { iconName: "ChartLineUp", title: "Performance", desc: "We measure ourselves against benchmarks, not excuses. Consistent returns through disciplined, research-driven strategies." },
      { iconName: "Users", title: "Client First", desc: "Independent advice means we recommend what is best for you, not what pays us the highest commission." },
      { iconName: "Lightbulb", title: "Innovation", desc: "From fintech integration to offshore access, we stay ahead of the curve so your portfolio does too." },
    ],
    team: [
      { name: "Tatenda Moyo", role: "Managing Director & CFA", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Nyasha Dube", role: "Head of Wealth Management", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Farai Mushore", role: "Corporate Finance Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
      { name: "Rudo Chimuka", role: "Estate Planning Specialist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    ],
    milestones: [
      { year: "2012", title: "Quest Founded", desc: "Two former RBZ analysts launch an independent advisory firm from a single office in Harare." },
      { year: "2015", title: "$5M AUA", desc: "Crossed $5 million in assets under advisory. First corporate client signed." },
      { year: "2018", title: "Offshore Access", desc: "Launched international diversification service, giving clients access to global markets." },
      { year: "2020", title: "Digital Platform", desc: "Rolled out online client portal for real-time portfolio tracking and reporting." },
      { year: "2023", title: "$25M AUA", desc: "Reached $25 million milestone. Expanded team to 35+ professionals." },
      { year: "2025", title: "Regional Expansion", desc: "Opened advisory desks in Bulawayo and exploring Zambia entry." },
    ],
    ctaTitle: "Let Us Build Your Financial Future",
    ctaSubtitle: "Book a complimentary strategy session. Zero obligations. Pure clarity.",
    ctaCta: "Book Consultation",
  },

  services: {
    heroTitle: [
      { text: "Strategies That " },
      { text: "Compound.", highlight: true },
    ],
    heroSubtitle:
      "From personal wealth management to institutional advisory, every service is designed around one principle: your financial success is non-negotiable.",
    items: [
      {
        iconName: "ChartLineUp",
        title: "Wealth Management",
        slug: "wealth-management",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        desc: "We build and actively manage diversified portfolios that align with your risk tolerance, liquidity needs, and long-term objectives. Our approach combines quantitative analysis with deep local market knowledge.",
        features: [
          "Custom portfolio construction based on risk profiling",
          "Active rebalancing and tactical asset allocation",
          "ZSE equities, government bonds, money market instruments",
          "Quarterly performance reviews with detailed reporting",
          "Tax-efficient investment structuring",
          "Dedicated relationship manager for every client",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Corporate Finance",
        slug: "corporate-finance",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        desc: "Strategic advisory for businesses at every stage. Whether you are raising capital, acquiring competitors, or restructuring operations, we provide the financial intelligence to execute with confidence.",
        features: [
          "Mergers and acquisitions advisory",
          "Capital raising and debt structuring",
          "Business valuations and financial modeling",
          "Due diligence and transaction support",
          "Corporate restructuring and turnaround",
          "Private equity placement services",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Risk & Insurance Advisory",
        slug: "risk-insurance",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
        desc: "Comprehensive risk assessment and insurance placement. We identify vulnerabilities in your financial life and business operations, then design protection strategies that actually work when you need them.",
        features: [
          "Personal risk assessment and insurance audit",
          "Corporate insurance program design",
          "Key person and business continuity insurance",
          "Health and life insurance optimization",
          "Claims advocacy and support",
          "Annual policy review and market benchmarking",
        ],
      },
      {
        iconName: "CurrencyDollar",
        title: "Investment Planning",
        slug: "investment-planning",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
        desc: "Research-driven investment strategies that go beyond the obvious. We analyze macroeconomic trends, sector dynamics, and company fundamentals to identify opportunities before the market prices them in.",
        features: [
          "ZSE and VFEX equity research and selection",
          "Offshore investment access and diversification",
          "Fixed income and money market allocation",
          "Alternative investments including real estate",
          "Dollar-cost averaging and systematic investment plans",
          "Market commentary and investment insights",
        ],
      },
      {
        iconName: "GraduationCap",
        title: "Estate Planning",
        slug: "estate-planning",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        desc: "Your wealth should outlive you. We design estate plans that protect your assets, minimize disputes, and ensure seamless wealth transfer to the people and causes you care about most.",
        features: [
          "Will drafting and review",
          "Trust formation and administration",
          "Succession planning for family businesses",
          "Tax-efficient wealth transfer strategies",
          "Charitable giving and philanthropic structuring",
          "Cross-border estate considerations",
        ],
      },
      {
        iconName: "Users",
        title: "Retirement Solutions",
        slug: "retirement-solutions",
        image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800",
        desc: "Retirement planning that gives you certainty, not anxiety. We model your future income needs, build sustainable withdrawal strategies, and ensure your pension fund works as hard as you did.",
        features: [
          "Retirement income modeling and gap analysis",
          "Pension fund selection and optimization",
          "Annuity comparison and placement",
          "Post-retirement investment management",
          "Social security and benefits coordination",
          "Lifestyle planning and phased retirement options",
        ],
      },
    ],
    ctaTitle: "Ready to Start Your Quest?",
    ctaSubtitle: "Every great financial journey begins with a single conversation. Let us map yours.",
  },

  projects: {
    heroTitle: [
      { text: "Results That " },
      { text: "Speak.", highlight: true },
    ],
    heroSubtitle: "Real outcomes for real clients. These case studies demonstrate our approach to solving complex financial challenges.",
    categories: ["All", "Wealth Management", "Corporate Finance", "Retirement", "Estate Planning"],
    items: [
      {
        id: 1,
        title: "Corporate Treasury Optimization",
        category: "Corporate Finance",
        location: "Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        desc: "Restructured a manufacturing company's treasury operations, improving cash flow efficiency by 30% and unlocking $2M in working capital through better instrument selection.",
        services: ["Corporate Finance", "Investment Planning"],
      },
      {
        id: 2,
        title: "HNWI Portfolio Growth Strategy",
        category: "Wealth Management",
        location: "Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800",
        desc: "Built a diversified portfolio for a high-net-worth client that delivered 22% annualized returns over 3 years through a blend of local equities, offshore funds, and alternative investments.",
        services: ["Wealth Management", "Investment Planning"],
      },
      {
        id: 3,
        title: "Pension Fund Restructuring",
        category: "Retirement",
        location: "Bulawayo",
        year: "2023",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        desc: "Advised a 200-employee company on pension fund restructuring, switching from a defined benefit to defined contribution scheme. Saved the company 15% in annual contributions while improving employee outcomes.",
        services: ["Retirement Solutions", "Corporate Finance"],
      },
      {
        id: 4,
        title: "Family Business Succession",
        category: "Estate Planning",
        location: "Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
        desc: "Designed a comprehensive succession plan for a third-generation family business, establishing a family trust and governance framework that resolved potential inheritance disputes.",
        services: ["Estate Planning", "Wealth Management"],
      },
      {
        id: 5,
        title: "Medical Practice Investment Strategy",
        category: "Wealth Management",
        location: "Harare",
        year: "2025",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        desc: "Created a systematic investment plan for a group of specialist doctors, building a shared investment vehicle that provides diversification and professional management at institutional pricing.",
        services: ["Investment Planning", "Wealth Management"],
      },
      {
        id: 6,
        title: "SME Capital Raising",
        category: "Corporate Finance",
        location: "Harare",
        year: "2025",
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800",
        desc: "Advised a tech startup on a $1.5M Series A raise, preparing financial models, investor materials, and negotiating terms that protected founder equity while attracting strategic capital.",
        services: ["Corporate Finance"],
      },
    ],
  },

  reviews: {
    heroTitle: [
      { text: "Client " },
      { text: "Confidence.", highlight: true },
    ],
    heroSubtitle: "Our reputation is built one relationship at a time. Here is what our clients say about working with Quest.",
    ratingBreakdown: [
      { stars: 5, count: 32 },
      { stars: 4, count: 8 },
      { stars: 3, count: 2 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      { name: "Tawanda Nyamukapa", role: "Business Owner", text: "Quest turned my scattered investments into a coherent portfolio. In three years, my net worth has grown by 45%. Their advice on offshore diversification was the best financial decision I ever made.", rating: 5, date: "1 month ago", project: "Wealth Management", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Grace Mudimu", role: "Retired Executive", text: "The retirement planning team gave me genuine peace of mind. I know exactly what my income will look like for the next 25 years. That level of clarity is priceless.", rating: 5, date: "1 month ago", project: "Retirement Solutions", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Farai Chigwedere", role: "Medical Specialist", text: "As a doctor, I have zero time for financial management. Quest handles everything. Monthly reports, tax optimization, estate planning. I just focus on my practice.", rating: 5, date: "2 months ago", project: "Wealth Management", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Simba Mutambara", role: "Mining Executive", text: "The corporate finance team helped us raise $3M for expansion. Their financial modeling and investor pitch support was world-class. We closed the round in 8 weeks.", rating: 5, date: "3 months ago", project: "Corporate Finance", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Nyasha Chirisa", role: "Entrepreneur", text: "Quest does not just invest your money. They educate you. After a year, I understand markets, risk, and compound interest in a way I never did before.", rating: 5, date: "4 months ago", project: "Investment Planning", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Rudo Manyika", role: "Chartered Accountant", text: "As a CA myself, I am very particular about financial advice. Quest impressed me with their analytical rigor and transparency. No hidden fees. No product pushing.", rating: 5, date: "5 months ago", project: "Wealth Management", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
    ],
    ctaTitle: "Join 500+ Clients Who Trust Quest",
    ctaSubtitle: "Your financial future deserves professional guidance. Book a free strategy session today.",
    ctaCta: "Book Consultation",
    ctaWhatsappText: "Hi Quest Financial! I would like to schedule a consultation.",
  },

  contact: {
    heroTitle: [
      { text: "Let Us " },
      { text: "Talk.", highlight: true },
    ],
    heroSubtitle: "Whether you are starting your investment journey or managing generational wealth, the first step is a conversation.",
    formTitle: "Send Us a Message",
    formSubtitle: "We respond within 4 business hours.",
  },

  careers: {
    heroTitle: [
      { text: "Build Careers. " },
      { text: "Build", highlight: true },
      { text: " Wealth." },
    ],
    heroSubtitle: "Join Zimbabwe's fastest-growing independent financial advisory firm. We hire curious minds who care about clients as much as numbers.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
    cultureTitle: "Why Work at Quest?",
    cultureItems: [
      { iconName: "ChartLineUp", title: "Growth-Obsessed", desc: "CFA sponsorship, CPD credits, conference attendance. We invest in your expertise because it is our competitive advantage." },
      { iconName: "Users", title: "Collaborative Culture", desc: "No silos. Analysts learn from portfolio managers. Junior advisors sit in on C-suite client meetings from day one." },
      { iconName: "Trophy", title: "Meritocratic", desc: "Promotions based on performance and client outcomes, not tenure. Our youngest associate director is 29." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
    cultureImageAlt: "Quest Financial team collaboration",
    cultureTagline: "Where Finance Meets Purpose.",
    cultureTaglineDesc: "Every client we serve gets closer to financial freedom. Every portfolio we build creates generational impact. This is not just finance. This is legacy building.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Compensation", desc: "Base salary plus performance bonuses tied to client portfolio growth." },
      { iconName: "GraduationCap", title: "CFA Sponsorship", desc: "Full exam fee coverage and study leave for CFA, CFP, and other professional designations." },
      { iconName: "Heart", title: "Health & Wellness", desc: "Comprehensive medical aid, gym membership, and mental health support." },
    ],
    openPositions: [
      { title: "Investment Analyst", department: "Wealth Management", type: "Full-time", location: "Harare" },
      { title: "Client Relationship Manager", department: "Advisory", type: "Full-time", location: "Harare" },
    ],
    ctaTitle: "Your Quest Starts Here",
    ctaSubtitle: "Send your CV and a cover letter telling us why finance matters to you.",
    ctaCta: "Apply Now",
  },
};

export default siteData;
