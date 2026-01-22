# KALSHI — VC DUE DILIGENCE REPORT

**Date:** January 21, 2026
**Status:** Series E | $11B Valuation
**Sector:** Fintech / Prediction Markets / Regulated Exchange
**HQ:** New York, NY

---

## EXECUTIVE SUMMARY

Kalshi is the first CFTC-regulated prediction market exchange in the United States. Founded in 2018 by MIT graduates, the company has achieved remarkable growth—from $1.8M revenue (2023) to $263.5M (2025)—reaching a $11B valuation after raising $1.59B in total funding.

| Metric | Value |
|--------|-------|
| **Valuation** | $11B (Nov 2025) |
| **Total Raised** | $1.59B equity + $300M debt |
| **2025 Fee Revenue** | $263.5M |
| **2025 Trading Volume** | $23.8B |
| **Market Share** | 66.4% (US regulated) |
| **Revenue Mix** | 89% Sports / 11% Other |

### Investment Verdict

**HIGH-GROWTH OPPORTUNITY WITH CRITICAL CONCENTRATION RISKS**

- **Strengths:** First-mover regulatory moat, explosive growth, elite investor syndicate, strong founder-market fit
- **Critical Risks:** Robinhood dependency (>50% volume), state regulatory battles (11+ states), 89% sports concentration, class action lawsuits

---

## 1. TEAM & LEADERSHIP

### Founders

| Founder | Role | Background | Stake | Net Worth |
|---------|------|------------|-------|-----------|
| **Tarek Mansour** | CEO | MIT CS/Math, Goldman Sachs, Citadel, Palantir | ~12% | $1.3B |
| **Luana Lopes Lara** | Co-Founder | MIT CS/Math, Bridgewater, Citadel Securities, Five Rings; former professional ballerina | ~12% | $1.3B |

Both founders became billionaires at age 29. Luana is the world's youngest self-made female billionaire (Forbes, Dec 2025).

### Executive Team

| Role | Name | Background |
|------|------|------------|
| **CFO** | Saurabh Tejwani | Former Uber, Gopuff SVP Finance (hired Nov 2025) |
| **General Counsel** | Rick Heaslip | Former poker pro, drove legal victories |
| **Director of Engineering** | Phil Bogle | 11-year Google veteran |

### Board of Directors

| Director | Background |
|----------|------------|
| **Alfred Lin** | Sequoia Capital Managing Partner (#1 Midas List 3x) |
| **Brian Quintenz** | Former CFTC Commissioner, a16z crypto policy head |
| **Timothy McDermott** | Former CEO Nadex, TeraExchange CEO |

### Strategic Advisor

**Donald Trump Jr.** — Joined January 2025. Creates regulatory conflict concerns given Trump administration's CFTC nominees.

### Team Size

- **July 2024:** 42 employees
- **October 2025:** ~256 employees
- **Growth:** 232% YoY headcount

### Key Departures

| Name | Former Role | Departed To |
|------|-------------|-------------|
| Eliezer Mishory | Chief Regulatory Officer | DOGE (Musk's government efficiency team) |
| Samantha Schwab | Director of Biz Dev | US Treasury Deputy Chief of Staff |

---

## 2. FUNDING HISTORY

| Round | Date | Amount | Valuation | Lead |
|-------|------|--------|-----------|------|
| Y Combinator | W19 | ~$150K | — | YC |
| Seed | 2020 | ~$6M | $9.1M | Sequoia |
| Series A | Feb 2021 | $30M | ~$100M | Sequoia |
| Series C | Jun 2025 | $185M | $2B | Paradigm |
| Debt | Oct 2024 | $300M | — | — |
| Series D | Oct 2025 | $300M | $5B | a16z, Sequoia |
| Series E | Nov 2025 | $1B | $11B | Paradigm |

**Total:** $1.59B equity + $300M debt = **$1.89B**

### Valuation Trajectory

```
$9M (2020) → $100M (2021) → $2B (Jun '25) → $5B (Oct '25) → $11B (Nov '25)
```

**5.5x in 5 months** (Jun-Nov 2025)

### Investor Syndicate (39 total)

**Tier 1 VCs:** Sequoia, Paradigm, Andreessen Horowitz, CapitalG (Google), General Catalyst, IVP, ARK Invest

**Notable Angels:** Henry Kravis (KKR), Charles Schwab, Peng Zhao (Citadel Securities CEO)

---

## 3. BUSINESS MODEL

### Revenue Streams

| Stream | Mechanism |
|--------|-----------|
| **Transaction Fees** | Maker-taker model; ~1.2% average take rate |
| **Kalshi Trading LLC** | Affiliated market-making arm |
| **Interest Income** | Spread on customer deposits |
| **Data Licensing** | CNN, CNBC partnerships |
| **Deposit Fees** | 2% on debit card deposits |

### Fee Structure

| Fee Type | Formula | Max |
|----------|---------|-----|
| Taker | 0.07 × C × P × (1-P) | 1.75% at 50¢ |
| Maker | 0.0175 × C × P × (1-P) | 0.44% at 50¢ |

### Financial Performance

| Year | Fee Revenue | Volume | YoY Growth |
|------|-------------|--------|------------|
| 2023 | $1.8M | $183M | — |
| 2024 | $24M | $1.97B | 1,220% |
| 2025 | $263.5M | $23.8B | 998% |

**Run Rate (Nov '25):** $600-700M annualized net revenue

### Revenue Concentration (WARNING)

- **Sports:** 89% of 2025 fee revenue
- **Other (politics, economics, culture):** 11%

---

## 4. TECHNOLOGY

### Core Architecture

| Component | Technology |
|-----------|------------|
| **Matching Engine** | Continuous Double Auction (CDA), sub-250ms execution |
| **Clearinghouse** | Kalshi Klear LLC (proprietary, CFTC-registered Aug 2024) |
| **Infrastructure** | AWS cloud-native, Kubernetes, Docker, Terraform |
| **Security** | NIST 800 compliance, universal encryption, MFA |

### API Capabilities

| Protocol | Use Case |
|----------|----------|
| REST API | Standard trading, 50-200ms latency |
| WebSocket | Real-time market data, order book |
| FIX 4.4 | Institutional/HFT access |

### Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Go, Python, Java, Rust |
| **Frontend** | CloudFront CDN, Cloudflare |
| **Mobile** | Flutter (iOS/Android) |
| **Database** | PostgreSQL, Snowflake, Redshift |
| **Streaming** | Kafka, Flink, Spark |

### Technical Moat

1. **Only CFTC-regulated DCM + DCO combination** for prediction markets
2. **Kalshi Klear** enables faster market listings and settlements
3. **FIX protocol** attracts institutional traders
4. **SIG partnership** provides 30x more liquidity than competitors

### Known Reliability Issues

| Date | Incident |
|------|----------|
| Oct 2025 | 1.5-hour outage during college football (API worked, retail locked out) |
| May 2025 | Outage during Pope announcement |
| Aug 2025 | "Entire Kalshi operation" affected |

---

## 5. TRACTION METRICS

### Volume Milestones

| Period | Volume |
|--------|--------|
| Election Night 2024 | $1B (single day) |
| March Madness 2025 | $513M |
| NBA Playoffs 2025 | $453M |
| October 2025 | $4.4B (monthly record) |
| Full Year 2025 | $23.8B |
| Weekly Run Rate | $2.3B+ |

### User Metrics

| Metric | Value |
|--------|-------|
| Peak DAU | 400,000 (Election Day 2024) |
| Claimed Users | 10M+ |
| Markets Offered | 3,500+ |

### Market Share

- **Kalshi:** 66.4% of US regulated volume (Jan 2026)
- **Polymarket:** ~33%
- Kalshi overtook Polymarket in Q3 2025

---

## 6. GO-TO-MARKET & PARTNERSHIPS

### Distribution Partners

| Partner | Launch | Volume Share | Economics |
|---------|--------|--------------|-----------|
| **Robinhood** | Mar 2025 | **>50%** | $0.01 each |
| **Webull** | Feb 2025 | Undisclosed | Undisclosed |
| **PrizePicks** | Nov 2025 | New | Undisclosed |

### Media Partnerships

| Partner | Deal | Economics |
|---------|------|-----------|
| **CNN** | Real-time data integration | Kalshi pays CNN |
| **CNBC** | Multi-year exclusive | Kalshi pays CNBC |

### CRITICAL DEPENDENCY

**Robinhood contributes >50% of Kalshi's volume.** Robinhood is acquiring MIAXdx (DCM/DCO) with Susquehanna—closing January 20, 2026—to launch their own prediction market exchange in 2026. This could eliminate Kalshi's largest distribution channel.

---

## 7. COMPETITIVE LANDSCAPE

### Market Share

| Platform | Share | 2025 Volume | Differentiator |
|----------|-------|-------------|----------------|
| **Kalshi** | 66% | $23.8B | CFTC-regulated, USD |
| **Polymarket** | 33% | ~$15B | Crypto-native, 0.10% fees |
| **PredictIt** | <1% | Limited | Academic, 93% accuracy |

### Competitive Threats

| Competitor | Threat Level | Status |
|------------|--------------|--------|
| **Robinhood** | CRITICAL | Acquiring own DCM for 2026 launch |
| **Polymarket** | HIGH | $2B ICE investment, March 2026 integration |
| **DraftKings** | MEDIUM-HIGH | Launched Dec 2025, 38 states |
| **FanDuel** | MEDIUM-HIGH | CME partnership, gradual rollout |
| **Gemini** | MEDIUM | CFTC approval Dec 2025, fee-free |

### Accuracy Comparison (Vanderbilt Study)

| Platform | Accuracy |
|----------|----------|
| PredictIt | 93% |
| Kalshi | 78% |
| Polymarket | 67% |

---

## 8. REGULATORY RISK ANALYSIS

### Federal Status

- **CFTC Designated Contract Market (DCM)** since 2020
- **Political contracts victory:** CFTC dismissed appeal May 2025
- **Sports contracts:** CFTC has taken no enforcement action

### State-Level Litigation

| State | Status | Outcome |
|-------|--------|---------|
| **Massachusetts** | Preliminary injunction **GRANTED** (Jan 20, 2026) | **FIRST US BAN** |
| **Nevada** | Injunction dissolved; appeal pending 9th Circuit | Mixed |
| **New Jersey** | Injunction granted; appeal pending 3rd Circuit | Adverse |
| **Maryland** | Injunction denied; appeal pending 4th Circuit | Favorable |
| **Connecticut** | Kalshi counter-sued; oral arguments Feb 11, 2026 | Pending |
| **Ohio, NY, IL, AZ, MT, TN** | Various actions | Active |

**38 state attorneys general** have filed amicus briefs supporting state authority over prediction markets.

### Tribal Opposition

- **3 California tribes** sued Kalshi (July 2025)
- **Ho-Chunk Nation (Wisconsin)** federal lawsuit
- **16 tribes + Indian Gaming Association** filed supporting briefs

### Supreme Court Pathway

Legal experts predict circuit split will force Supreme Court review by 2027. TD Cowen: "Supreme Court will eventually have to settle tensions between federal commodities law and state gambling regulation."

---

## 9. CLASS ACTION LAWSUITS

| Case | Filed | Jurisdiction | Key Allegation |
|------|-------|--------------|----------------|
| Yee v. Kalshi | Oct 2025 | SDNY | Illegal sports betting |
| Multi-State Class | Nov 2025 | SDNY | Consumers bet against Kalshi affiliates |
| Illinois Class | Jan 2026 | N.D. Illinois | Illegal gambling platform |

**Central Allegation:** Plaintiffs claim Kalshi markets consumers as betting "peer-to-peer" while they actually bet against Kalshi's affiliated trading arm (Kalshi Trading LLC) or partner Susquehanna.

---

## 10. CUSTOMER SENTIMENT

### Review Scores

| Platform | Rating |
|----------|--------|
| App Store | 4.7/5.0 |
| Google Play | 4.5/5.0 |
| **Trustpilot** | **2.4/5.0** |

### Trustpilot Breakdown (Polarized)

- 5-star: 35%
- 1-star: 62%
- Middle ratings: 3%

### Common Complaints

1. **Payment issues:** Withdrawals delayed, trades disappearing
2. **Customer service:** Unresponsive for weeks/months
3. **Technical problems:** App crashes during high-volume events
4. **Unauthorized charges:** Multiple reports

---

## 11. RISK MATRIX

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| **Robinhood Dependency** | CRITICAL | HIGH | Seeking new partners |
| **State Regulatory Bans** | CRITICAL | MEDIUM-HIGH | Legal appeals |
| **Sports Revenue Concentration** | CRITICAL | HIGH | Product diversification |
| **Class Actions** | HIGH | MEDIUM | Arbitration clauses |
| **Competition (Polymarket/ICE)** | HIGH | HIGH | First-mover advantage |
| **Customer Trust** | MEDIUM | MEDIUM | Ops investment |
| **Supreme Court Adverse Ruling** | CRITICAL | MEDIUM | 18-36 month horizon |

---

## 12. KEY DATES TO MONITOR

| Date | Event |
|------|-------|
| **Jan 20, 2026** | Massachusetts ban could take effect |
| **Jan 20, 2026** | Robinhood/MIAXdx acquisition closed |
| **Feb 11, 2026** | Connecticut oral arguments |
| **Feb 2026** | 9th Circuit ruling expected |
| **Mar 2026** | Polymarket ICE trading terminal integration |
| **2026** | Robinhood own exchange launch |
| **2026-2027** | Potential Supreme Court certiorari |

---

## 13. INVESTMENT THESIS

### Bull Case

- **Regulatory moat:** Only CFTC-regulated DCM+DCO for prediction markets
- **Explosive growth:** 998% revenue growth, $600-700M run rate
- **Elite syndicate:** Sequoia, Paradigm, a16z, CapitalG backing
- **TAM expansion:** $1T annual volume projected by 2030
- **Exchange economics:** Near-zero marginal costs at scale
- **Founder quality:** MIT quant traders with institutional credibility

### Bear Case

- **Robinhood existential risk:** >50% volume partner launching competing exchange
- **Regulatory overhang:** 11+ state battles, potential Supreme Court loss
- **89% sports concentration:** Single adverse ruling could eliminate majority of revenue
- **Customer trust issues:** 2.4 Trustpilot score, payment complaints
- **Affiliated trading conflicts:** Class actions target Kalshi Trading LLC structure
- **Valuation risk:** $11B on $263M revenue (42x) in uncertain regulatory environment

---

## 14. RECOMMENDATION

### Proceed with Caution

Kalshi represents a compelling opportunity in a nascent, high-growth market with exceptional founders and strong investor backing. However, **three existential risks** require resolution before significant capital deployment:

1. **Robinhood dependency:** Develop contingency for potential 50%+ volume loss
2. **Regulatory clarity:** Monitor Massachusetts ban enforcement and circuit court rulings
3. **Sports concentration:** Assess business viability if sports contracts are restricted

### Suggested Due Diligence Items

- [ ] Direct conversation with founders on Robinhood relationship post-2026
- [ ] Legal opinion on state preemption likelihood at Supreme Court
- [ ] Review Kalshi Trading LLC structure and conflict safeguards
- [ ] Customer retention/churn data beyond volume metrics
- [ ] Unit economics breakdown: Sports vs. non-sports margins

---

## SOURCES

### Company & Financial
- [Sacra - Kalshi Revenue, Valuation & Funding](https://sacra.com/c/kalshi/)
- [Yahoo Finance - Kalshi Fee Revenue 2025](https://finance.yahoo.com/news/kalshi-fee-revenue-2025-263-145801350.html)
- [Kalshi Blog - $11 Billion Valuation](https://news.kalshi.com/p/kalshi-11-billion-valuation-series-e)
- [TechCrunch - Series E](https://techcrunch.com/2025/12/02/kalshi-raises-1b-at-11b-valuation-doubling-value-in-under-two-months/)
- [Tracxn - Funding History](https://tracxn.com/d/companies/kalshi/__HuX3wfPWu044GptzSimSdojZRlhj4yOMZ88METagMls/funding-and-investors)

### Team & Leadership
- [Fortune - Luana Lopes Lara Profile](https://fortune.com/2025/12/04/meet-luana-lopes-lara-the-29-year-old-ballerina-spent-college-summers-working-for-ray-dalio-worlds-youngest-female-self-made-billionaire-millennial-kalshi-wealth/)
- [CFO.com - Saurabh Tejwani Hire](https://www.cfo.com/news/betting-platform-kalshi-names-a-cfo-saurabh-tejwani-ryanair-neil-sorahan-trial-balance/804268/)
- [CNBC - Trump Jr. Advisor](https://www.cnbc.com/2025/01/13/kalshi-names-donald-trump-jr-as-strategic-advisor-to-prediction-market-firm.html)

### Technology
- [Kalshi API Documentation](https://docs.kalshi.com/)
- [Kalshi Security](https://kalshi.com/security)
- [CFTC - Kalshi Klear Registration](https://www.cftc.gov/PressRoom/PressReleases/8957-24)

### Partnerships
- [Yahoo Finance - Robinhood Partnership](https://sg.finance.yahoo.com/news/robinhood-partners-kalshi-launch-nfl-155902168.html)
- [CNBC - Exclusive Partnership](https://www.cnbc.com/2025/12/04/cnbc-and-kalshi-strike-exclusive-partnership.html)
- [Axios - CNN Partnership](https://www.axios.com/2025/12/02/cnn-kalshi-prediction-market-data)

### Competitive
- [Finance Magnates - Market Share](https://www.financemagnates.com/forex/analysis/kalshi-captures-60-market-share-ending-polymarkets-prediction-market-dominance/)
- [ICE - Polymarket Investment](https://ir.theice.com/press/news-details/2025/ICE-Announces-Strategic-Investment-in-Polymarket/default.aspx)
- [Robinhood - MIAXdx Acquisition](https://robinhood.com/us/en/newsroom/robinhood-prediction-markets-joint-venture/)

### Regulatory & Legal
- [Holland & Knight - CFTC Victory](https://www.hklaw.com/en/insights/publications/2025/05/new-jersey-federal-court-sides-with-kalshi-over-prediction-market)
- [National Law Review - Nevada Ruling](https://natlawreview.com/article/prediction-market-leader-kalshi-suffers-legal-blow-nevada-court-rules-platform)
- [U.S. News - Massachusetts Ban](https://www.usnews.com/news/top-news/articles/2026-01-20/kalshi-cannot-operate-sports-prediction-market-in-massachusetts-judge-rules)
- [ClassAction.org - Lawsuit](https://www.classaction.org/news/class-action-lawsuit-claims-kalshi-illegally-runs-online-sports-betting-platform)

### Customer Reviews
- [Trustpilot - Kalshi](https://www.trustpilot.com/review/kalshi.com)
- [BBB - Kalshi Profile](https://www.bbb.org/us/ny/new-york/profile/online-gaming/kalshi-0121-87176188/complaints)

### Market Size
- [CNBC - $1 Trillion Prediction Markets](https://www.cnbc.com/2025/12/17/prediction-markets-trillion-dollar-trading-volume-ek-report.html)
- [Yogonet - Eilers & Krejcik Report](https://www.yogonet.com/international/news/2026/01/12/117085-us-prediction-markets-could-reach-1-trillion-eilers-krejcik-says)

---

*Report compiled January 21, 2026 from comprehensive web research across team/funding, technology, market risks, and business analysis dimensions.*
