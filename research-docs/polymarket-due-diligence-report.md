# POLYMARKET
## VC Due Diligence Report

**Prepared:** January 2026
**Classification:** Confidential Investment Memorandum

---

# EXECUTIVE SUMMARY

**Company:** Polymarket
**Sector:** Prediction Markets / DeFi / Information Markets
**Stage:** Series B
**Total Funding:** ~$70M+
**Last Valuation:** Not publicly disclosed (estimated $1B+ post-Series B)
**Headquarters:** Offshore (US operations restricted)

### Investment Thesis
Polymarket is the dominant crypto-native prediction market platform globally, with unmatched liquidity in political and event markets. The platform successfully demonstrated product-market fit during the 2024 US election cycle, generating hundreds of millions in trading volume and becoming a go-to reference for media outlets worldwide. However, regulatory constraints excluding US users represent both a significant limitation and potential upside catalyst.

### Key Metrics (Estimated)
| Metric | Value |
|--------|-------|
| 2024 Trading Volume | $3-4B+ |
| Active Traders (Peak) | Tens of thousands |
| Total Funding | ~$70M |
| Founded | 2020 |
| Team Size | ~50 (estimated) |

---

# 1. TEAM & LEADERSHIP

## Founding Team

**Shayne Coplan** — Founder & CEO
- Founded Polymarket in 2020 at approximately age 22
- College dropout with early interest in prediction markets and crypto
- Has become a recognized voice in the prediction market industry
- Media-savvy; frequently cited in major publications

## Leadership Assessment

| Strength | Risk |
|----------|------|
| Young, ambitious founder with clear vision | Limited executive experience pre-Polymarket |
| Strong fundraising track record | Heavy regulatory burden for small team |
| Crypto-native with DeFi expertise | Key-person risk concentrated in founder |

## Team Composition
- Engineering-heavy team with blockchain expertise
- Product and design focus on user experience
- Compliance/legal capabilities (post-CFTC settlement)
- Estimated 50+ employees

---

# 2. FUNDING HISTORY & CAP TABLE

## Funding Rounds

| Round | Date | Amount | Lead Investor | Notes |
|-------|------|--------|---------------|-------|
| Seed | 2020 | ~$4M | Various | Initial capital |
| Series A | 2022 | ~$25M | Polychain, General Catalyst | Post-CFTC settlement |
| Series B | May 2024 | $45M | Founders Fund (Peter Thiel) | Major validation |
| **Total** | | **~$70M+** | | |

## Notable Investors
- **Founders Fund** (Peter Thiel) — Lead, Series B
- **General Catalyst**
- **Polychain Capital**
- **1confirmation**
- Various crypto-focused VCs and angels

## Investor Quality Assessment
✅ Tier-1 crypto investors with strong track records
✅ Founders Fund involvement signals mainstream validation
✅ Strategic investors with regulatory and crypto expertise

---

# 3. TECHNOLOGY & ARCHITECTURE

## Technical Stack Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                          │
│              (React, TypeScript, Web3 Wallet)               │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                    BACKEND SERVICES                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ REST API    │  │ WebSocket   │  │ Order Matching      │  │
│  │             │  │ (Real-time) │  │ Engine (Off-chain)  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                   POLYGON BLOCKCHAIN                         │
│  • Gnosis Conditional Token Framework                        │
│  • USDC Settlements                                          │
│  • Low-cost L2 transactions                                 │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                    UMA ORACLE SYSTEM                         │
│  • Optimistic Oracle for outcome resolution                 │
│  • Decentralized dispute resolution                         │
└─────────────────────────────────────────────────────────────┘
```

## Key Technical Components

| Component | Technology | Assessment |
|-----------|------------|------------|
| **Blockchain** | Polygon (L2) | ✅ Low fees, fast settlement, Ethereum security |
| **Token Framework** | Gnosis CTF | ✅ Battle-tested, audited |
| **Trading Engine** | Hybrid CLOB | ✅ Superior to AMM for price discovery |
| **Oracle** | UMA Protocol | ✅ Decentralized, economically secured |
| **Stablecoin** | USDC | ✅ Established, regulated issuer |
| **Frontend** | React/TypeScript | ✅ Modern, maintainable |

## Technical Differentiators

1. **Hybrid CLOB Model**: Off-chain order matching with on-chain settlement provides CEX-like UX with blockchain guarantees
2. **Polygon L2**: Sub-dollar transaction costs enable retail participation
3. **UMA Oracle**: Decentralized resolution prevents single points of failure
4. **Non-custodial**: Users maintain wallet control; reduces counterparty risk

## Technical Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Smart contract vulnerability | Medium | Multiple audits, battle-tested CTF |
| Oracle manipulation | Low | UMA economic guarantees, dispute mechanism |
| Polygon network issues | Low | Ethereum fallback, operational redundancy |
| Stablecoin depegging | Low | USDC is well-capitalized |

---

# 4. BUSINESS MODEL & UNIT ECONOMICS

## Revenue Model

| Revenue Stream | Status | Notes |
|----------------|--------|-------|
| Trading Fees (Taker) | Active | 1-2% on trades |
| Maker Fees | Minimal/Zero | Incentivizes liquidity |
| Spread Revenue | Indirect | Platform benefits from liquid markets |
| Data/API | Potential | Media citations create value |

## Fee Structure
- **Makers**: 0% (incentivizes liquidity provision)
- **Takers**: 1-2% (primary revenue source)
- **Blockchain gas**: Paid by users (minimal on Polygon)

## Volume Analysis

```
2024 Trading Volume Trajectory (Estimated)
├── Q1: ~$200M
├── Q2: ~$400M
├── Q3: ~$800M (election ramp-up)
└── Q4: ~$2B+ (election peak)
    Total: $3-4B+
```

## Unit Economics Concerns

| Factor | Assessment |
|--------|------------|
| Gross Margin | High (minimal COGS for blockchain) |
| Customer Acquisition | Organic/viral (low CAC) |
| Revenue per Trade | Low (fee competition) |
| Cyclicality | **HIGH** — election years vs. off-years |
| US TAM Exclusion | **CRITICAL** — largest market blocked |

---

# 5. MARKET & COMPETITIVE LANDSCAPE

## Market Size

| Segment | TAM | Notes |
|---------|-----|-------|
| Global Sports Betting | $250B+ | Adjacent/overlapping |
| Prediction Markets | $500M-2B | Nascent, high growth |
| Political Betting | $1B+ | Polymarket dominant |
| Information Markets | TBD | Emerging category |

## Competitive Matrix

| Platform | Regulatory | Liquidity | US Access | Tech | Winner |
|----------|------------|-----------|-----------|------|--------|
| **Polymarket** | ❌ Offshore | ✅ Highest | ❌ Blocked | ✅ Crypto | Volume |
| **Kalshi** | ✅ CFTC | ⚠️ Growing | ✅ Legal | ⚠️ Trad | US Market |
| **PredictIt** | ⚠️ Limited | ⚠️ Low | ⚠️ Capped | ❌ Legacy | Academic |
| **Augur** | ❌ Decentral | ❌ Minimal | ⚠️ Gray | ⚠️ Complex | Ideology |
| **Metaculus** | ✅ N/A | N/A | ✅ Yes | ✅ Good | Research |

## Competitive Assessment

**Strengths vs. Kalshi:**
- 10x+ more liquidity in most markets
- Better price discovery
- Faster market creation
- Lower fees

**Weaknesses vs. Kalshi:**
- Cannot serve US customers (largest market)
- No regulatory clarity
- Enforcement risk

---

# 6. REGULATORY & LEGAL RISK

## Regulatory Status

| Jurisdiction | Status | Risk Level |
|--------------|--------|------------|
| United States | ❌ Blocked (CFTC settlement) | **HIGH** |
| European Union | ⚠️ Uncertain (MiCA) | Medium |
| Rest of World | ⚠️ Varies | Medium |

## CFTC Settlement (January 2022)

- **Fine:** $1.4 million civil penalty
- **Violations:** Operating unregistered derivatives facility
- **Requirements:**
  - Wind down US-facing operations
  - Implement geo-blocking
  - Cease offering binary options to US persons
- **Ongoing Risk:** Additional enforcement if US users access platform

## Legal Risk Matrix

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Additional CFTC action | Medium | High | Geo-blocking, VPN detection |
| State-level gambling laws | Low | Medium | Terms of service |
| International regulation | Medium | Medium | Jurisdiction monitoring |
| User lawsuits | Low | Low | Non-custodial model |

## Regulatory Upside Scenario
- Shift in US regulatory stance (potential under crypto-friendly administration)
- CFTC approval for event contracts (Kalshi precedent)
- Legalization of prediction markets broadly

---

# 7. RISK ASSESSMENT

## Critical Risks

| Risk | Severity | Probability | Notes |
|------|----------|-------------|-------|
| US regulatory enforcement | Critical | Medium | Could force shutdown or major pivot |
| Competition from Kalshi | High | High | If Kalshi achieves liquidity parity |
| Cyclical volume collapse | High | Certain | Off-election years will see decline |
| Key person risk (Coplan) | Medium | Low | Young founder, limited succession |
| Smart contract exploit | High | Low | Audited, but non-zero risk |

## Risk-Adjusted Scenarios

| Scenario | Probability | Outcome |
|----------|-------------|---------|
| **Bull:** US re-entry + continued dominance | 20% | 10x+ return |
| **Base:** Maintain offshore dominance | 50% | 2-4x return |
| **Bear:** Regulatory pressure + Kalshi competition | 25% | 1x return |
| **Worst:** Shutdown/enforcement action | 5% | 0.5x or total loss |

---

# 8. INVESTMENT RECOMMENDATION

## Strengths
✅ Clear market leader in crypto-native prediction markets
✅ Proven product-market fit (2024 election volumes)
✅ Strong technology moat (liquidity, UX, speed)
✅ Blue-chip investor backing
✅ Secular tailwind for information markets

## Weaknesses
❌ US market exclusion severely limits TAM
❌ Regulatory uncertainty is existential risk
❌ Cyclical business tied to election cycles
❌ Revenue model still unproven at scale
❌ Competition from regulated alternatives

## Key Diligence Questions

1. **Path to US re-entry?** What is the regulatory strategy?
2. **Off-year sustainability?** How will volumes hold between elections?
3. **Profitability timeline?** When does the company expect to be cash-flow positive?
4. **Competitive moat?** How defensible is liquidity advantage vs. Kalshi?
5. **Exit scenarios?** Acquisition targets, IPO feasibility given regulatory status?

## Verdict

| Factor | Rating |
|--------|--------|
| Team | B+ |
| Technology | A |
| Market | A- |
| Business Model | B |
| Regulatory | C |
| Competitive Position | A |
| **Overall** | **B+** |

### Recommendation: **CONDITIONAL INVEST**

Polymarket represents a compelling opportunity in a nascent market with clear product leadership. However, investment should be contingent on:

1. Clear articulation of US regulatory strategy
2. Evidence of non-political market diversification
3. Path to profitability in off-election years
4. Reasonable valuation given regulatory constraints

The 2024 election cycle proved the concept; the question is whether Polymarket can build a durable business around it.

---

# APPENDICES

## A. Key Sources for Further Diligence
- Polymarket Documentation: docs.polymarket.com
- CFTC Settlement: cftc.gov/PressRoom/PressReleases/8478-22
- Crunchbase: crunchbase.com/organization/polymarket
- GitHub (Open Source): github.com/Polymarket
- Dune Analytics: On-chain trading data
- UMA Protocol: docs.uma.xyz

## B. Comparable Transactions
- Kalshi: Raised $100M+ across rounds; CFTC-regulated
- Robinhood: Retail trading platform comparison
- FTX (pre-collapse): Crypto derivatives exchange

## C. Market Opportunity Framework
```
Information Markets Evolution:
Polls → Prediction Markets → AI-Augmented Forecasting
                    ↑
              Polymarket positioned here
```

---

*This report is based on publicly available information and knowledge through May 2025. For investment decisions, conduct independent verification of all claims and consult with legal/financial advisors.*

**Prepared by:** Research Team
**Date:** January 21, 2026
