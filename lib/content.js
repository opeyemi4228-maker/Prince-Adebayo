// Single source of truth for all site copy.
// Biographical details, statements and media entries below are drafts written
// for layout — have the campaign verify or replace each one before launch.

export const site = {
  name: "Prince Adewole Adebayo",
  shortName: "Prince Adebayo",
  role: "SDP Presidential Candidate",
  party: "Social Democratic Party",
  slogan: "Progress!",
  url: "https://princeadebayo.ng",
  email: "info@princeadebayo.ng",
  pressEmail: "press@princeadebayo.ng",
  phone: "+234 800 000 0000",
  address: "Campaign Headquarters, Abuja, FCT, Nigeria",
  // Main portrait used in the hero and on The Man page. Set to null to show the
  // branded monogram instead.
  portrait: "/images/prince-adebayo-portrait.jpg",
  // Full-bleed home hero photo (landscape, at least 2400px wide), e.g. "/images/hero.jpg".
  heroImage: null,
  // Add each official profile URL to show it; links without one stay hidden.
  socials: [
    { label: "X", href: null },
    { label: "Facebook", href: null },
    { label: "Instagram", href: null },
    { label: "YouTube", href: null },
  ],
};

// Photos of Prince Adebayo (Wikimedia Commons, CC0). Swap in the campaign's
// own high-resolution shoot when available.
export const photos = {
  portrait: { src: "/images/prince-adebayo-portrait.jpg", alt: "Prince Adewole Adebayo pointing as he makes a point" },
  speaking: { src: "/images/prince-adebayo-speaking.jpg", alt: "Prince Adewole Adebayo speaking, hand raised" },
  resolve: { src: "/images/prince-adebayo-resolve.jpg", alt: "Prince Adewole Adebayo with a clenched fist" },
};

const ng = (name) => `/images/nigeria/${name}.jpg`;

// Scenes from across Nigeria, used throughout the site.
export const scenes = {
  asoRock: { src: ng("aso-rock"), alt: "Aso Rock rising over the savannah, Abuja", caption: "Aso Rock, Abuja" },
  assembly: { src: ng("assembly"), alt: "The National Assembly building, Abuja", caption: "National Assembly, Abuja" },
  bridgeNight: { src: ng("bridge-night"), alt: "Third Mainland Bridge lit up at night over Lagos", caption: "Third Mainland Bridge, Lagos" },
  farmer: { src: ng("farmer"), alt: "A farmer carrying harvested rice across a green field", caption: "Harvest season" },
  lagos: { src: ng("lagos"), alt: "Lagos Island skyline", caption: "Lagos Island" },
  lekki: { src: ng("lekki"), alt: "The Lekki Ikoyi Link Bridge, Lagos", caption: "Lekki Ikoyi Link Bridge" },
  market: { src: ng("market"), alt: "Traders and shoppers in a busy Nigerian market", caption: "Market day" },
  nurse: { src: ng("nurse"), alt: "A Nigerian nurse reviewing patient records", caption: "Care at the ward level" },
  police: { src: ng("police"), alt: "A Nigerian police officer on duty", caption: "Nigeria Police Force" },
  pupils: { src: ng("pupils"), alt: "Two pupils taking a test on a laptop", caption: "Learning for the future" },
  rail: { src: ng("rail"), alt: "A train on the Lagos Rail Mass Transit Red Line", caption: "Lagos Red Line" },
  rice: { src: ng("rice"), alt: "Aerial view of rice fields in Munjibir, Kano State", caption: "Rice fields, Kano State" },
  unilag: { src: ng("unilag"), alt: "Senate House, University of Lagos", caption: "University of Lagos" },
  youth: { src: ng("beach"), alt: "A group of young Nigerians at Tarkwa Bay Beach, Lagos", caption: "Tarkwa Bay, Lagos" },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "The Man", href: "/about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Campaign", href: "/campaign" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const values = [
  "Rule of Law",
  "Production Economy",
  "Security for All",
  "Quality Education",
  "Accountable Government",
  "Opportunity for Youth",
  "A Nigeria That Works",
];

export const stats = [
  { value: 30, suffix: "+", label: "Years in law, enterprise and public advocacy" },
  { value: 36, suffix: "", label: "States, plus the FCT, in one national vision" },
  { value: 774, suffix: "", label: "Local governments the plan is built to reach" },
  { value: 8, suffix: "", label: "Manifesto pillars, each with measurable targets" },
];

export const strengths = [
  {
    title: "The Advocate",
    kicker: "Law & Justice",
    image: photos.speaking,
    body: "A lawyer by training and conviction, he has spent his career standing in courtrooms for the principle that no Nigerian is above the law, and none beneath its protection.",
  },
  {
    title: "The Builder",
    kicker: "Enterprise",
    image: scenes.lagos,
    body: "As a founder and investor, including in media through KAFTAN TV, he has created jobs, built institutions and learned first hand what it takes to make an idea work in Nigeria.",
  },
  {
    title: "The Reformer",
    kicker: "Public Life",
    image: scenes.assembly,
    body: "As the Social Democratic Party's presidential flagbearer, he brings a politics of solutions: clear diagnoses, costed plans and a refusal to trade in division.",
  },
];

export const biography = {
  lead: "Prince Adewole Adebayo is a lawyer, entrepreneur and statesman from Ondo State who believes Nigeria's problems are solvable, and has spent three decades proving that hard problems yield to competence, courage and the rule of law.",
  paragraphs: [
    "Born in 1972, he grew up with a front row view of both the promise of Nigeria and the cost of failing it. That tension shaped his choice of profession: the law, as the most direct instrument for protecting ordinary people from abuse of power.",
    "In legal practice he built a reputation for rigorous preparation and for taking on difficult, consequential matters. Alongside the law, he built businesses, including KAFTAN TV, creating employment and giving Nigerians a platform to be heard.",
    "In 2022 he won the Social Democratic Party's presidential primary and took a message of production, security and justice to every region of the country. He did not campaign on slogans; he campaigned on solutions, and he did so with civility.",
    "Today he leads the SDP's bid for the presidency with the same conviction: that Nigeria can be a country where the law works, the economy produces, every child learns, and every citizen is safe.",
  ],
};

export const principles = [
  { title: "Competence over noise", body: "Every promise is backed by a plan, a budget line and a measure of success." },
  { title: "Justice as foundation", body: "Investment, security and dignity all begin with laws that are applied equally." },
  { title: "Production, not consumption", body: "Wealth is created by what Nigerians make, grow and export, not by what we import." },
  { title: "One Nigeria, many voices", body: "Unity built on fairness, federalism and respect for every region and faith." },
];

export const timeline = [
  { year: "1972", title: "Born in Ondo State", body: "Raised in South West Nigeria with values of service, education and enterprise." },
  { year: "Early career", title: "Called to the Nigerian Bar", body: "Begins legal practice, developing expertise in commercial and constitutional matters." },
  { year: "Practice", title: "Builds a leading law practice", body: "Leads complex litigation and advisory work for businesses, institutions and individuals." },
  { year: "Enterprise", title: "Founds KAFTAN TV & other ventures", body: "Invests in media and business, creating jobs and amplifying Nigerian voices." },
  { year: "2022", title: "Wins SDP presidential primary", body: "Emerges as the Social Democratic Party's flagbearer for the 2023 general election." },
  { year: "2023", title: "Takes the campaign nationwide", body: "Presents a practical agenda on security, production, justice and education." },
  { year: "2027", title: "The mission continues", body: "Leads the SDP's bid to build a Nigeria that works for every citizen." },
];

export const pillars = [
  {
    id: "security",
    image: scenes.police,
    no: "01",
    title: "Security & Rule of Law",
    short: "Safe communities, functioning courts, and a justice system Nigerians trust.",
    detail: "Insecurity is the first tax on every Nigerian. We will restore the state's monopoly on force, modernise policing, and make justice swift and fair.",
    commitments: [
      "Community and state policing within a coordinated national framework",
      "Modern intelligence, surveillance and border security infrastructure",
      "Judicial reform to clear case backlogs and guarantee timely trials",
      "Welfare, training and accountability for every officer in uniform",
    ],
  },
  {
    id: "economy",
    image: scenes.market,
    no: "02",
    title: "Production Economy & Jobs",
    short: "Move Nigeria from importing to making, and pay Nigerians to build it.",
    detail: "Prosperity comes from production. We will lower the cost of doing business, back manufacturers, and turn our population into our greatest economic asset.",
    commitments: [
      "Targeted support for manufacturing clusters in every geopolitical zone",
      "Stable, predictable monetary and fiscal policy to protect the naira",
      "Access to affordable credit for MSMEs and first time entrepreneurs",
      "Local content rules that reward value addition at home",
    ],
  },
  {
    id: "education",
    image: scenes.pupils,
    no: "03",
    title: "Education & Human Capital",
    short: "Every child in school, every graduate employable.",
    detail: "A nation rises no higher than its classrooms. We will bring children who are out of school back to class, pay teachers properly, and align learning with the jobs of the future.",
    commitments: [
      "Free, compulsory and quality basic education enforced nationwide",
      "Teacher recruitment, training and competitive remuneration",
      "Stable university funding to end disruptive strikes",
      "Technical and vocational pathways linked to industry",
    ],
  },
  {
    id: "health",
    image: scenes.nurse,
    no: "04",
    title: "Healthcare for All",
    short: "A primary healthcare centre that works in every ward.",
    detail: "No Nigerian should die of a preventable illness or be bankrupted by a hospital bill. We will rebuild health from the ward up.",
    commitments: [
      "Functional primary healthcare in every ward of the federation",
      "Expanded national health insurance coverage",
      "Incentives to retain doctors, nurses and health workers at home",
      "Local production of essential medicines and equipment",
    ],
  },
  {
    id: "infrastructure",
    image: scenes.rail,
    no: "05",
    title: "Power & Infrastructure",
    short: "Reliable electricity, connected roads and rail, modern cities.",
    detail: "Nothing works without power. We will fix generation, transmission and distribution, and build the infrastructure that connects markets.",
    commitments: [
      "Decentralised power generation and state level electricity markets",
      "Completion of strategic road, rail and port corridors",
      "Public and private partnerships with transparent contracts",
      "Affordable housing and urban renewal programmes",
    ],
  },
  {
    id: "agriculture",
    image: scenes.farmer,
    no: "06",
    title: "Agriculture & Food Security",
    short: "Feed the nation, then feed the world.",
    detail: "Nigeria has the land and the people to end hunger. We will secure farms, modernise agriculture and build value chains from farm to factory.",
    commitments: [
      "Security for farming communities and an end to conflict between farmers and herders",
      "Mechanisation, irrigation and quality inputs for smallholders",
      "Storage and processing to cut losses after harvest",
      "Guaranteed offtake and access to export markets",
    ],
  },
  {
    id: "governance",
    image: scenes.assembly,
    no: "07",
    title: "Accountable Governance",
    short: "A lean, transparent government that answers to the people.",
    detail: "Corruption is a policy choice. We will cut the cost of governance, open the books and strengthen the institutions that keep power in check.",
    commitments: [
      "Open budgets and public, searchable government contracts",
      "Independent, well resourced anticorruption institutions",
      "True federalism and devolution of powers to states",
      "Reduced cost of governance at every level",
    ],
  },
  {
    id: "youth",
    image: scenes.youth,
    no: "08",
    title: "Youth, Women & Inclusion",
    short: "A seat at the table, and a share of the future, for every Nigerian.",
    detail: "Our young people and women are not a constituency to be managed; they are the engine of the nation. We will invest in them directly.",
    commitments: [
      "Digital economy and innovation hubs in every state",
      "Youth enterprise funds and apprenticeship programmes",
      "Increased representation of women in appointive positions",
      "Inclusion and protection for persons with disabilities",
    ],
  },
];

export const statements = [
  // Campaign statements for display; replace with verified, sourced quotes.
  "Nigeria is not a poor country. It is a poorly managed one. And management can be fixed.",
  "The law must be a shield for the weak, not a weapon for the powerful.",
  "We will not consume our way to prosperity. We will produce our way there.",
];

export const zones = [
  { name: "North Central", focus: "Agro industrial corridors & security" },
  { name: "North East", focus: "Rebuilding, resettlement & education" },
  { name: "North West", focus: "Farm security, irrigation & livestock reform" },
  { name: "South East", focus: "Manufacturing, trade & infrastructure" },
  { name: "South South", focus: "Environmental justice & energy value chain" },
  { name: "South West", focus: "Innovation, industry & urban renewal" },
];

export const roadmap = [
  { phase: "First 100 Days", items: ["National security summit and command restructuring", "Executive order on open contracting", "Emergency plan for children out of school"] },
  { phase: "Year One", items: ["Power sector decentralisation framework", "MSME credit facility live in all 36 states and the FCT", "Judicial backlog clearance programme"] },
  { phase: "Mid Term", items: ["Manufacturing clusters operational in six zones", "Primary healthcare functional in every ward", "Measurable reduction in food prices"] },
  { phase: "Full Term", items: ["A production led economy that creates jobs", "Safer communities nationwide", "A government Nigerians trust again"] },
];

export const campaignEvents = [
  // Sample schedule for layout; replace with the confirmed itinerary.
  { date: "Nov 08", city: "Lagos", title: "Town Hall: The Production Economy", venue: "Venue to be announced" },
  { date: "Nov 15", city: "Kano", title: "Farmers & Traders Forum", venue: "Venue to be announced" },
  { date: "Nov 22", city: "Enugu", title: "Manufacturing & Enterprise Dialogue", venue: "Venue to be announced" },
  { date: "Nov 29", city: "Port Harcourt", title: "Youth & Innovation Summit", venue: "Venue to be announced" },
  { date: "Dec 06", city: "Maiduguri", title: "Security & Rebuilding Conversation", venue: "Venue to be announced" },
  { date: "Dec 13", city: "Abuja", title: "National Policy Presentation", venue: "Venue to be announced" },
];

export const media = [
  // Sample entries for layout; replace with real releases, links and images.
  { type: "Speech", date: "Oct 2026", title: "A Nigeria That Works: The Case for a Production Economy", excerpt: "An address on how Nigeria can move from importing to making, and from consumption to wealth creation.", image: photos.speaking },
  { type: "Interview", date: "Oct 2026", title: "On Security, Justice and the Rule of Law", excerpt: "A wide ranging conversation on restoring safety and confidence in Nigeria's institutions.", image: photos.portrait },
  { type: "Press Release", date: "Sep 2026", title: "SDP Presidential Campaign Unveils Eight Pillar Agenda", excerpt: "The campaign sets out measurable commitments across security, economy, education and more.", image: scenes.assembly },
  { type: "Opinion", date: "Sep 2026", title: "Why Education Is a National Security Issue", excerpt: "Children out of school are not just a social crisis. They are a threat to our collective future.", image: scenes.pupils },
  { type: "Speech", date: "Aug 2026", title: "Address to Nigerian Youth Leaders", excerpt: "On building a digital economy that rewards talent, not connections.", image: photos.resolve },
  { type: "Press Release", date: "Aug 2026", title: "Campaign Announces Nationwide Town Hall Tour", excerpt: "Engagements across all six geopolitical zones to listen, explain and build together.", image: scenes.bridgeNight },
];


export const heroSlides = [
  // `image`: optional photo path in /public; falls back to site.heroImage, then a branded backdrop.
  {
    kicker: "The Vision",
    title: "A Nigeria that works for all.",
    body: "Three decades of solving hard problems in law, enterprise and public life, now focused on one mission.",
    cta: { label: "Read the Manifesto", href: "/manifesto" },
    image: "/images/nigeria/bridge-night.jpg",
  },
  {
    kicker: "Security & Justice",
    title: "Safe streets. Fair courts.",
    body: "Modern policing, swift justice, and a rule of law that protects every citizen equally.",
    cta: { label: "The Security Plan", href: "/manifesto#security" },
    image: "/images/nigeria/police.jpg",
  },
  {
    kicker: "Production Economy",
    title: "Make it here. Grow it here.",
    body: "Back the makers, the farmers and the builders, and turn our population into our greatest asset.",
    cta: { label: "The Economic Plan", href: "/manifesto#economy" },
    image: "/images/nigeria/market.jpg",
  },
  {
    kicker: "Education",
    title: "Every child in a classroom.",
    body: "Free, quality basic education, well-paid teachers and universities that never shut down.",
    cta: { label: "The Education Plan", href: "/manifesto#education" },
    image: "/images/nigeria/pupils.jpg",
  },
];

// Attribution for every photo on the site, shown on /credits.
export const photoCredits = [
  { image: "Portraits of Prince Adewole Adebayo (3)", author: "MoAli1010", license: "Creative Commons Zero (public domain)", source: "https://commons.wikimedia.org/wiki/File:PAA_Wikipedia_Speech.jpg" },
  { image: "Aso Rock, Abuja", author: "Ovinuchi Prince Ejiohuo", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Aso_Rock_Nigeria.jpg" },
  { image: "National Assembly, Abuja", author: "Kabusa16", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:National_Assembly_Building,_Abuja,_Nigeria.jpg" },
  { image: "Third Mainland Bridge at night", author: "S.aderogba", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Third-mainland-bridge-at-night.jpg" },
  { image: "Farmer at harvest", author: "Photobyamin", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Farmer_at_harvest.jpg" },
  { image: "Lagos Island cityscape", author: "Jamie Tubers", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Lagos_Island_City_Scape.jpg" },
  { image: "Lekki Ikoyi Link Bridge", author: "Chippla", license: "Creative Commons Attribution ShareAlike 3.0", source: "https://commons.wikimedia.org/wiki/File:Lekki_Ikoyi_Link_Bridge.jpg" },
  { image: "Happy trader in the market", author: "Obedmakolo", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Happy_trader_in_the_market.jpg" },
  { image: "A Nigerian nurse", author: "Jamie Tubers", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:A_Nigerian_Nurse.jpg" },
  { image: "Nigeria Police officer", author: "AMISOM Public Information", license: "Creative Commons Zero (public domain)", source: "https://commons.wikimedia.org/wiki/File:2014_01_06_Nigeria_Formed_Police_Unit_Police_Replacement_and_Rotation_01_(11798026163).jpg" },
  { image: "Pupils doing online tests", author: "Advancedsolver", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Pupils_doing_online_tests.jpg" },
  { image: "Lagos Red Line train", author: "Just Ozed", license: "Creative Commons Attribution 3.0", source: "https://commons.wikimedia.org/wiki/File:HST_train_on_Lagos_metro_red_line.jpg" },
  { image: "Rice farm in Munjibir", author: "Bappancey", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:RICE_FARM_IN_MUNJIBIR_TOWN.jpg" },
  { image: "University of Lagos Senate House", author: "Abiolakintrunde", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Unilag_Senate_house.jpg" },
  { image: "Young Nigerians at Tarkwa Bay", author: "KING DAYO", license: "Creative Commons Attribution ShareAlike 4.0", source: "https://commons.wikimedia.org/wiki/File:Nigerian_Youths_Having_Fun_at_Takwa_Bay_Beach,_Lagos.jpg" },
];
