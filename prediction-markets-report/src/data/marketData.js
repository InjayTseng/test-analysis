// Market Growth Data (Updated January 2026)
// Note: 2025 volume ranges $44-63B across sources; using conservative estimate
// Note: 2026 projection $222.5B per Piper Sandler analyst consensus
export const marketGrowthData = [
  { year: '2023', volume: 1.0, growth: null },
  { year: '2024', volume: 9.3, growth: 830 },
  { year: '2025', volume: 44.0, growth: 373 },
  { year: '2026E', volume: 222.5, growth: 406 },
];

// Market Share Data (January 2026)
// Note: Market share fluctuates significantly; Opinion Labs peaked at 40% in Nov 2025
export const marketShareData = [
  { name: 'Kalshi', value: 66, color: '#2563eb', volume: '$23.8B' },
  { name: 'Polymarket', value: 14, color: '#9333ea', volume: '$10-13B' },
  { name: 'Opinion Labs', value: 14, color: '#16a34a', volume: '$10B+' },
];

// Monthly Volume Trend (in $B)
// Note: Kalshi 2024 total was $1.97B; 2025 total was $23.8B
// Note: Opinion Labs launched October 2025, not 2024
export const volumeTrendData = [
  { month: 'Jan 24', kalshi: 0.05, polymarket: 0.4, opinionLabs: 0 },
  { month: 'Feb 24', kalshi: 0.06, polymarket: 0.5, opinionLabs: 0 },
  { month: 'Mar 24', kalshi: 0.08, polymarket: 0.6, opinionLabs: 0 },
  { month: 'Apr 24', kalshi: 0.10, polymarket: 0.7, opinionLabs: 0 },
  { month: 'May 24', kalshi: 0.12, polymarket: 0.9, opinionLabs: 0 },
  { month: 'Jun 24', kalshi: 0.15, polymarket: 1.2, opinionLabs: 0 },
  { month: 'Jul 24', kalshi: 0.18, polymarket: 1.5, opinionLabs: 0 },
  { month: 'Aug 24', kalshi: 0.20, polymarket: 1.8, opinionLabs: 0 },
  { month: 'Sep 24', kalshi: 0.25, polymarket: 2.0, opinionLabs: 0 },
  { month: 'Oct 24', kalshi: 0.35, polymarket: 2.5, opinionLabs: 0 },
  { month: 'Nov 24', kalshi: 0.30, polymarket: 2.6, opinionLabs: 0 },
  { month: 'Dec 24', kalshi: 0.13, polymarket: 1.5, opinionLabs: 0 },
  { month: 'Jan 25', kalshi: 0.8, polymarket: 1.2, opinionLabs: 0 },
  { month: 'Oct 25', kalshi: 4.4, polymarket: 3.0, opinionLabs: 1.5 },
  { month: 'Nov 25', kalshi: 5.5, polymarket: 2.5, opinionLabs: 1.6 },
  { month: 'Dec 25', kalshi: 6.38, polymarket: 2.8, opinionLabs: 1.2 },
  { month: 'Jan 26', kalshi: 8.4, polymarket: 3.2, opinionLabs: 1.0 },
];

// Funding Comparison (Updated January 2026)
// Note: Kalshi pre-seed was $150K from YC in 2019; no Series B documented
export const fundingData = [
  {
    company: 'Kalshi',
    preSeed: 0.15, // YC 2019
    seed: 0, // No separate seed round documented
    seriesA: 30,
    seriesB: 0,
    seriesC: 185,
    debt: 300,
    seriesD: 300,
    seriesE: 1000,
    totalRaised: 1700, // ~$1.59B equity + $300M debt ≈ $1.7B
    valuation: 11000,
    color: '#2563eb'
  },
  {
    company: 'Polymarket',
    seed: 4,
    seriesA: 25,
    seriesB: 45,
    seriesC: 0,
    seriesD: 0,
    seriesE: 0,
    strategic: 2000,
    totalRaised: 2300, // Varies by source ($274M-$2.3B depending on ICE classification)
    valuation: 12000, // Seeking $12-15B as of late 2025
    color: '#9333ea'
  },
  {
    company: 'Opinion Labs',
    seed: 5,
    seriesA: 0,
    seriesB: 0,
    seriesC: 0,
    seriesD: 0,
    seriesE: 0,
    totalRaised: 5,
    valuation: 50,
    color: '#16a34a'
  },
];

// Valuation Timeline (Updated January 2026)
export const valuationTimelineData = [
  { date: '2020', kalshi: 9, polymarket: null, opinionLabs: null },
  { date: '2021', kalshi: 100, polymarket: null, opinionLabs: null },
  { date: '2022', kalshi: 400, polymarket: 1000, opinionLabs: null },
  { date: '2023', kalshi: 700, polymarket: 1000, opinionLabs: null },
  { date: '2024', kalshi: 750, polymarket: 1500, opinionLabs: null },
  { date: '2025', kalshi: 11000, polymarket: 9000, opinionLabs: 50 },
];

// Risk Assessment Data
export const riskAssessmentData = [
  {
    category: 'Regulatory',
    kalshi: 'Medium',
    polymarket: 'Medium',
    opinionLabs: 'High',
  },
  {
    category: 'Technology',
    kalshi: 'Low',
    polymarket: 'Medium',
    opinionLabs: 'High',
  },
  {
    category: 'Competitive',
    kalshi: 'Low',
    polymarket: 'Medium',
    opinionLabs: 'High',
  },
  {
    category: 'Financial',
    kalshi: 'Low',
    polymarket: 'Low',
    opinionLabs: 'High',
  },
  {
    category: 'Operational',
    kalshi: 'Low',
    polymarket: 'Medium',
    opinionLabs: 'Medium',
  },
];

// Competitive Radar Data
export const competitiveRadarData = [
  { metric: 'Market Share', kalshi: 95, polymarket: 60, opinionLabs: 15, fullMark: 100 },
  { metric: 'Regulatory Status', kalshi: 95, polymarket: 85, opinionLabs: 30, fullMark: 100 },
  { metric: 'Technology', kalshi: 85, polymarket: 90, opinionLabs: 85, fullMark: 100 },
  { metric: 'User Experience', kalshi: 80, polymarket: 90, opinionLabs: 75, fullMark: 100 },
  { metric: 'Liquidity', kalshi: 90, polymarket: 95, opinionLabs: 50, fullMark: 100 },
  { metric: 'Market Coverage', kalshi: 80, polymarket: 90, opinionLabs: 70, fullMark: 100 },
];

// Volume by Category
export const volumeByCategoryData = [
  { category: 'Sports', kalshi: 89, polymarket: 30, opinionLabs: 10 },
  { category: 'Politics', kalshi: 5, polymarket: 40, opinionLabs: 20 },
  { category: 'Crypto', kalshi: 3, polymarket: 20, opinionLabs: 30 },
  { category: 'Economics', kalshi: 2, polymarket: 5, opinionLabs: 35 },
  { category: 'Other', kalshi: 1, polymarket: 5, opinionLabs: 5 },
];

// User Growth Data
// Note: Opinion Labs launched October 2025; Kalshi peak DAU 400K on Election Day Nov 2024
// Note: Polymarket had 314K peak active traders Dec 2024, 450K+ Jan 2025
export const userGrowthData = [
  { quarter: 'Q1 2024', kalshi: 100000, polymarket: 50000, opinionLabs: 0 },
  { quarter: 'Q2 2024', kalshi: 150000, polymarket: 100000, opinionLabs: 0 },
  { quarter: 'Q3 2024', kalshi: 250000, polymarket: 190000, opinionLabs: 0 },
  { quarter: 'Q4 2024', kalshi: 500000, polymarket: 315000, opinionLabs: 0 },
  { quarter: 'Q1 2025', kalshi: 800000, polymarket: 450000, opinionLabs: 0 },
  { quarter: 'Q4 2025', kalshi: 2000000, polymarket: 500000, opinionLabs: 1000000 },
];

// Company Profiles Data (Updated January 2026)
export const companyProfiles = {
  kalshi: {
    name: 'Kalshi',
    tagline: 'The Regulated Leader',
    status: 'CFTC-Regulated',
    statusColor: 'green',
    founded: 2018,
    headquarters: 'New York, NY',
    valuation: '$11B',
    totalRaised: '$1.7B',
    employees: '256+',
    users: 'Millions',
    monthlyVolume: '$6.38B',
    marketShare: '66%',
    description: 'Kalshi is the first CFTC-regulated prediction market in the United States, offering legal event contracts on politics, economics, sports, and culture. The company achieved explosive growth in 2025, becoming the market leader.',
    founders: [
      { name: 'Tarek Mansour', role: 'CEO', background: 'MIT, Goldman Sachs, Citadel, Palantir' },
      { name: 'Luana Lopes Lara', role: 'Co-Founder', background: 'MIT, Bridgewater, Citadel Securities, Five Rings' },
    ],
    fundingRounds: [
      { round: 'Pre-Seed (YC)', amount: '$150K', date: '2019', lead: 'Y Combinator' },
      { round: 'Series A', amount: '$30M', date: 'Feb 2021', lead: 'Sequoia Capital' },
      { round: 'Debt', amount: '$300M', date: 'Late 2024', lead: 'Various' },
      { round: 'Series C', amount: '$185M', date: 'Jun 2025', lead: 'Paradigm' },
      { round: 'Series D', amount: '$300M', date: 'Oct 2025', lead: 'a16z, Sequoia' },
      { round: 'Series E', amount: '$1B', date: 'Nov 20-21, 2025', lead: 'Paradigm', note: 'Announced Dec 2, 2025' },
    ],
    keyInvestors: ['Sequoia Capital', 'Paradigm', 'Andreessen Horowitz', 'CapitalG', 'Y Combinator', 'Coinbase Ventures', 'General Catalyst', 'Meritech Capital', 'IVP', 'Multicoin Capital', 'Charles Schwab', 'Henry Kravis', 'ARK Invest'],
    strengths: [
      'Only CFTC-regulated US prediction market with DCM + DCO',
      'Dominant market share (66%)',
      'Strong institutional backing (~$1.7B raised)',
      'Robinhood integration (27.4M funded accounts) drives 50%+ volume',
      '2025: $23.8B volume, $263.5M fee revenue, 3,500+ markets, 11B contracts',
    ],
    weaknesses: [
      '20+ lawsuits/cease-and-desist orders; 34 state AGs coalition',
      '89% revenue concentration in sports',
      'Robinhood dependency risk (launching own exchange Q2 2026)',
      '2.4 Trustpilot rating, customer service issues',
      'Competition: DraftKings (Dec 19, 2025), FanDuel Predicts entering market',
    ],
    technology: {
      architecture: 'Custom matching engine (Kalshi Exchange)',
      settlement: 'Kalshi Klear clearinghouse (CFTC-registered Aug 2024)',
      uptime: '98%',
      latency: '<250ms execution',
    },
  },
  polymarket: {
    name: 'Polymarket',
    tagline: 'The Crypto Pioneer',
    status: 'CFTC-Approved (Nov 24, 2025)',
    statusColor: 'purple',
    founded: 2020,
    headquarters: 'New York, NY',
    valuation: '$12-15B', // Seeking $12-15B as of late Oct 2025
    totalRaised: '$2.3B', // Varies by source depending on ICE classification
    employees: '40-50',
    users: '500K+',
    monthlyVolume: '$2.5-3B',
    marketShare: '~14%', // Down from 95%+ pre-2025; fluctuates significantly
    description: 'Polymarket is a crypto-native prediction market built on Polygon, offering permissionless markets on global events through USDC stablecoin trading. Returned to the US market on December 3, 2025 after nearly 4 years (since Jan 2022 CFTC settlement).',
    founders: [
      { name: 'Shayne Coplan', role: 'CEO', background: 'NYU Dropout, early Ethereum investor at age 16' },
    ],
    fundingRounds: [
      { round: 'Seed', amount: '$4M', date: '2020', lead: 'Polychain Capital' },
      { round: 'Series A', amount: '$25M', date: 'Dec 2021', lead: 'General Catalyst' },
      { round: 'Series B', amount: '$45M', date: 'May 2024', lead: 'Founders Fund' },
      { round: 'Strategic', amount: '$2B', date: 'Oct 2025', lead: 'ICE (NYSE owner)' },
    ],
    keyInvestors: ['ICE', 'Founders Fund', 'General Catalyst', 'Polychain Capital', 'Dragonfly Capital', '1confirmation'],
    strengths: [
      'Deepest liquidity in crypto prediction markets',
      'Zero trading fees (2% profit fee only)',
      'Strong brand recognition globally',
      'ICE partnership for data licensing',
      'POLY token airdrop creates user loyalty',
    ],
    weaknesses: [
      'Zero revenue model, VC-dependent',
      'Multiple security incidents (2024-2025); FBI raid Nov 13, 2024 (closed Jul 2025)',
      'State litigation challenges',
      'Lost market share to Kalshi (95% → 32%)',
    ],
    technology: {
      architecture: 'Polygon (Layer 2) hybrid CLOB',
      settlement: 'On-chain USDC via UMA Oracle',
      uptime: '99.5%',
      latency: '~2s (blockchain confirmation)',
    },
  },
  opinionLabs: {
    name: 'Opinion Labs',
    tagline: 'The AI-Powered Challenger',
    status: 'Unregulated (DeFi)',
    statusColor: 'blue',
    founded: 2023, // Some sources cite 2022; majority say 2023
    headquarters: 'Hong Kong',
    valuation: '$20-50M (estimated)',
    totalRaised: '$5M+', // Aug 2024 undisclosed Binance Labs + Mar 2025 $5M YZi Labs
    employees: '10-30',
    users: '1M+', // 670K active on-chain participants
    monthlyVolume: '$1.6B (peak weekly)',
    marketShare: '~14%', // Peaked at 40% in Nov 2025; fluctuates significantly
    description: 'Opinion Labs is a DeFi prediction market on BNB Chain featuring the first AI-powered multi-agent oracle system. Achieved $10B volume in 55 days post-launch (Oct 2025), briefly capturing 40% market share.',
    founders: [
      { name: 'Forrest Liu', role: 'CEO', background: 'Columbia University, CMBI Investment Banking' },
      { name: 'KJ', role: 'Co-Founder', background: 'Blockchain infrastructure, quantitative systems' }, // CTO title unverified
    ],
    fundingRounds: [
      { round: 'Pre-Seed (MVB)', amount: 'Undisclosed', date: 'Aug 2024', lead: 'Binance Labs (via BNB Chain MVB Season 7)' },
      { round: 'Seed', amount: '$5M', date: 'Mar 2025', lead: 'YZi Labs (CZ)' },
    ],
    keyInvestors: ['YZi Labs (CZ)', 'Amber Group', 'Animoca Ventures', 'Manifold Trading', 'Echo'],
    strengths: [
      'First AI-powered multi-agent oracle',
      'Permissionless market creation',
      'Strong BNB Chain ecosystem support',
      'Focus on underserved macro-economic markets',
      'Achieved $10B volume in 55 days',
    ],
    weaknesses: [
      'Severely underfunded vs competition ($5M vs $1.89B)',
      'No disclosed security audits',
      'No US regulatory pathway',
      'Pre-token economics unproven',
    ],
    technology: {
      architecture: 'BNB Chain on-chain CLOB',
      settlement: 'AI Oracle + Chainlink integration',
      uptime: '99.0%',
      latency: '~2s (BNB finality)',
    },
  },
};

// Regulatory Events Timeline (Updated January 2026)
export const regulatoryTimelineData = [
  {
    date: 'Nov 2020',
    event: 'Kalshi receives CFTC approval',
    impact: 'positive',
    company: 'Kalshi',
    description: 'First CFTC-regulated prediction market (DCM designation)',
  },
  {
    date: 'Jan 2022',
    event: 'CFTC settles with Polymarket',
    impact: 'negative',
    company: 'Polymarket',
    description: '$1.4M settlement, required to block US users',
  },
  {
    date: 'Sep 2023',
    event: 'CFTC blocks election contracts',
    impact: 'negative',
    company: 'Kalshi',
    description: 'CFTC 3-2 vote rejects political event contracts',
  },
  {
    date: 'Aug 2024',
    event: 'Kalshi Klear approved',
    impact: 'positive',
    company: 'Kalshi',
    description: 'CFTC approves Kalshi clearinghouse (DCO)',
  },
  {
    date: 'Sep 2024',
    event: 'District Court rules for Kalshi',
    impact: 'positive',
    company: 'Kalshi',
    description: 'Judge Cobb vacates CFTC election contract ban',
  },
  {
    date: 'Oct 2024',
    event: 'DC Circuit denies CFTC stay',
    impact: 'positive',
    company: 'Kalshi',
    description: 'Appeals court allows Kalshi to operate during appeal',
  },
  {
    date: 'Mar 2025',
    event: 'Nevada issues cease-and-desist',
    impact: 'negative',
    company: 'Kalshi',
    description: 'Nevada Gaming Control Board first state to act against Kalshi',
  },
  {
    date: 'May 2025',
    event: 'CFTC drops appeal',
    impact: 'positive',
    company: 'Kalshi',
    description: 'CFTC voluntarily dismisses election contracts appeal (not court ruling)',
  },
  {
    date: 'Jul 2025',
    event: 'Polymarket acquires QCEX',
    impact: 'positive',
    company: 'Polymarket',
    description: 'Polymarket acquires CFTC-licensed exchange QCEX for $112M',
  },
  {
    date: 'Nov 2025',
    event: 'Polymarket CFTC approval',
    impact: 'positive',
    company: 'Polymarket',
    description: 'CFTC grants Amended Order of Designation via QCEX',
  },
  {
    date: 'Dec 3, 2025',
    event: 'Polymarket US re-entry',
    impact: 'positive',
    company: 'Polymarket',
    description: 'Polymarket launches in US after nearly 4-year hiatus (since Jan 2022)',
  },
];

// State Litigation Status (Updated January 2026)
export const stateLitigationData = [
  { state: 'Massachusetts', status: 'Preliminary Injunction Granted (Jan 20, 2026)', target: 'Kalshi', severity: 'high' },
  { state: 'Nevada', status: 'Cease & Desist (Mar 2025); Kalshi won injunction Apr 2025 but dissolved Nov 2025', target: 'Kalshi', severity: 'high' },
  { state: 'New Jersey', status: 'Kalshi Won Injunction, State Appealing to 3rd Circuit', target: 'Kalshi', severity: 'high' },
  { state: 'Maryland', status: 'Injunction Denied, Appeal Pending', target: 'Kalshi', severity: 'medium' },
  { state: 'Connecticut', status: 'Kalshi filed lawsuit Dec 3, 2025; won temp injunction Dec 16', target: 'Kalshi', severity: 'medium' },
  { state: 'New York', status: 'Active Legislation (ORACLE Act)', target: 'Industry', severity: 'medium' },
  { state: 'Tennessee', status: 'Cease & Desist (Jan 9, 2026); Kalshi won TRO Jan 12', target: 'Industry', severity: 'medium' },
  { state: 'Ohio', status: 'Active', target: 'Kalshi', severity: 'low' },
  { state: 'Illinois', status: 'Class Action Filed (Jan 8, 2026)', target: 'Kalshi', severity: 'medium' },
];

// Investment Recommendations (Updated January 2026)
export const investmentRecommendations = [
  {
    company: 'Kalshi',
    rating: 'HOLD',
    confidence: 70,
    priceTarget: '$15-20B',
    timeframe: '12-18 months',
    keyFactors: [
      { factor: 'Regulatory Moat', score: 95 },
      { factor: 'Market Position', score: 95 },
      { factor: 'Growth Trajectory', score: 90 },
      { factor: 'Technology', score: 80 },
      { factor: 'Team Quality', score: 95 },
    ],
    bullCase: 'Supreme Court affirms federal preemption, sports expansion continues',
    bearCase: 'State-by-state bans fragment market, Robinhood launches competing exchange',
  },
  {
    company: 'Polymarket',
    rating: 'BUY',
    confidence: 65,
    priceTarget: '$12-15B',
    timeframe: '12-18 months',
    keyFactors: [
      { factor: 'Regulatory Moat', score: 75 },
      { factor: 'Market Position', score: 80 },
      { factor: 'Growth Trajectory', score: 85 },
      { factor: 'Technology', score: 90 },
      { factor: 'Team Quality', score: 80 },
    ],
    bullCase: 'POLY token airdrop drives massive user retention, recaptures US share',
    bearCase: 'State litigation blocks key states, security incidents damage trust',
  },
  {
    company: 'Opinion Labs',
    rating: 'SPECULATIVE BUY',
    confidence: 45,
    priceTarget: '$200M+',
    timeframe: '24-36 months',
    keyFactors: [
      { factor: 'Regulatory Moat', score: 30 },
      { factor: 'Market Position', score: 40 },
      { factor: 'Growth Trajectory', score: 85 },
      { factor: 'Technology', score: 85 },
      { factor: 'Team Quality', score: 75 },
    ],
    bullCase: 'AI oracle becomes industry standard, successful Series A and token launch',
    bearCase: 'Fails to raise funding, duopoly dominates, regulatory enforcement',
  },
];

// System Architecture Data (from blog: polymarket-vs-kalshi-vs-opinion-labs.md)
export const architectureData = {
  kalshi: {
    name: 'Kalshi',
    color: '#2563eb',
    layers: [
      {
        name: 'User Interface',
        components: ['Web App', 'Mobile App', 'Robinhood Integration'],
        description: 'Multi-platform access for retail and institutional traders',
      },
      {
        name: 'API Layer',
        components: ['REST API', 'WebSocket', 'FIX 4.4 Protocol'],
        description: 'Institutional-grade connectivity for HFT and trading systems',
      },
      {
        name: 'Matching Engine',
        components: ['Continuous Double Auction', 'Sub-250ms Execution', '3,500+ Markets'],
        description: 'High-performance order matching with institutional latency',
      },
      {
        name: 'Clearinghouse',
        components: ['Kalshi Klear LLC', 'CFTC-Registered DCO', 'Real-time Settlement'],
        description: 'Proprietary clearing infrastructure (approved Aug 2024)',
      },
      {
        name: 'Infrastructure',
        components: ['AWS Cloud-Native', 'Kubernetes', 'Docker'],
        description: 'Enterprise-grade cloud infrastructure',
      },
      {
        name: 'Security',
        components: ['NIST 800 Compliance', 'Universal Encryption', 'MFA'],
        description: 'Bank-grade security standards',
      },
    ],
    techStack: {
      frontend: ['Web App', 'Mobile App', 'Robinhood SDK'],
      backend: ['REST', 'WebSocket', 'FIX 4.4'],
      infrastructure: ['AWS', 'Kubernetes', 'Docker'],
      settlement: 'USD (Kalshi Klear)',
      oracle: 'Centralized (Internal Arbiter)',
    },
  },
  polymarket: {
    name: 'Polymarket',
    color: '#9333ea',
    layers: [
      {
        name: 'User Interface',
        components: ['React', 'TypeScript', 'Web3 Wallet'],
        description: 'Modern web app with crypto wallet integration',
      },
      {
        name: 'Backend Services',
        components: ['REST API', 'WebSocket', 'Off-chain Order Matching'],
        description: 'Hybrid architecture for speed and decentralization',
      },
      {
        name: 'Polygon Blockchain',
        components: ['Gnosis CTF (ERC-1155)', 'USDC Settlements', 'Sub-dollar Tx Costs'],
        description: 'Layer 2 scaling for fast, cheap transactions',
      },
      {
        name: 'UMA Oracle System',
        components: ['Optimistic Oracle', 'Decentralized Dispute Resolution', '2hr Liveness'],
        description: 'Trustless outcome resolution via economic incentives',
      },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Web3.js', 'ethers.js'],
      backend: ['Node.js', 'REST', 'WebSocket'],
      blockchain: ['Polygon (L2)', 'ERC-1155'],
      settlement: 'USDC (On-chain)',
      oracle: 'UMA Optimistic Oracle',
    },
  },
  opinionLabs: {
    name: 'Opinion Labs',
    color: '#16a34a',
    layers: [
      {
        name: 'Opinion.Trade',
        components: ['Live Prediction Exchange', 'Permissionless Markets', 'AI Market Creation'],
        description: 'Real-world market trading platform',
      },
      {
        name: 'Opinion AI Oracle',
        components: ['Claude', 'ChatGPT', 'Grok'],
        description: 'Multi-agent AI jury system for outcome resolution',
      },
      {
        name: 'Security Layer',
        components: ['TEE (Trusted Execution)', 'Human Reviewer Oversight', 'Consensus Mechanism'],
        description: 'Hardware security with human verification layer',
      },
      {
        name: 'Chainlink Integration',
        components: ['Verified Data Feeds', 'Macroeconomic Indicators', 'On-chain Verification'],
        description: 'Decentralized oracle for economic data',
      },
      {
        name: 'BNB Chain',
        components: ['Full On-chain CLOB', 'Fast Finality (~2s)', 'Low Gas Fees'],
        description: 'Native blockchain infrastructure',
      },
    ],
    techStack: {
      frontend: ['Web App', 'Wallet Connect'],
      backend: ['On-chain CLOB'],
      blockchain: ['BNB Chain'],
      settlement: 'Crypto (On-chain)',
      oracle: 'AI Multi-Agent + Chainlink',
    },
  },
};

// Architecture Comparison Table
export const architectureComparisonData = [
  { feature: 'Architecture', kalshi: 'Centralized', polymarket: 'Hybrid (Off-chain + L2)', opinionLabs: 'Full On-chain CLOB' },
  { feature: 'Oracle', kalshi: 'Centralized Arbiter', polymarket: 'UMA Optimistic Oracle', opinionLabs: 'AI Multi-Agent + Chainlink' },
  { feature: 'Market Creation', kalshi: 'CFTC-approved Only', polymarket: 'Curated', opinionLabs: 'Permissionless + AI' },
  { feature: 'Blockchain', kalshi: 'Traditional Rails (USD)', polymarket: 'Polygon (L2)', opinionLabs: 'BNB Chain' },
  { feature: 'Settlement', kalshi: 'USD (Kalshi Klear)', polymarket: 'USDC (On-chain)', opinionLabs: 'Crypto (Native)' },
  { feature: 'Latency', kalshi: '<250ms', polymarket: '~2s', opinionLabs: '~2s' },
  { feature: 'API Protocols', kalshi: 'REST, WebSocket, FIX 4.4', polymarket: 'REST, WebSocket, Web3', opinionLabs: 'Web3, On-chain' },
];

// 2026 Outlook Metrics (Updated January 2026)
// Note: Market projections vary widely. Base case is Piper Sandler analyst consensus.
export const outlook2026 = {
  marketSize: {
    conservative: '$150B',
    base: '$222.5B',
    optimistic: '$250B',
  },
  keyEvents: [
    { date: 'Dec 22, 2025', event: 'FanDuel Predicts launched in 5 states (all 50 by Jan 15, 2026)' },
    { date: 'Q1 2026', event: 'Polymarket POLY token airdrop expected' },
    { date: 'Q1 2026', event: 'Opinion Labs Series A expected (unconfirmed)' },
    { date: 'Q2 2026', event: 'Robinhood prediction exchange launches (MIAXdx acquired Jan 21, 2026)' },
    { date: 'Q3 2026', event: '2026 US Midterm election markets peak' },
    { date: '2027-2028', event: 'Supreme Court case on federal preemption likely' },
  ],
  predictions: [
    { prediction: 'Kalshi maintains market leadership (50-60%)', probability: 70 },
    { prediction: 'Polymarket recaptures share to 35-45%', probability: 60 },
    { prediction: 'Supreme Court grants certiorari on state gambling laws', probability: 75 },
    { prediction: 'Industry reaches $200B+ annual volume', probability: 75 },
    { prediction: 'Major M&A transaction occurs', probability: 100, note: 'Achieved: Robinhood/MIAXdx Jan 2026' },
  ],
};
