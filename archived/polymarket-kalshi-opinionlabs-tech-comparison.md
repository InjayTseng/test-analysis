# Polymarket vs Kalshi vs Opinion Labs: Technical & Architecture Comparison

*Last Updated: January 2026*

## Executive Summary

| Platform | Type | Blockchain | Trading Engine | Oracle | Regulation |
|----------|------|------------|----------------|--------|------------|
| **Polymarket** | Decentralized | Polygon (L2) | Hybrid CLOB | UMA + Chainlink | QCEX License (US) |
| **Kalshi** | Centralized | Off-chain (Solana/Base integration) | Traditional CLOB | Centralized + Data Feeds | CFTC DCM |
| **Opinion Labs** | Decentralized | BNB Chain | CLOB | AI Oracle + ZK Proofs | Unregulated |

---

## 1. Infrastructure: Blockchain vs Traditional

### Polymarket
| Aspect | Details |
|--------|---------|
| **Architecture** | Decentralized, blockchain-native |
| **Blockchain** | Polygon PoS (Ethereum L2) |
| **Why Polygon** | Low fees (~$0.007/trade), fast finality, EVM compatibility |
| **Settlement** | On-chain via smart contracts |
| **Off-chain Components** | Order matching, APIs, WebSocket (AWS eu-west-2 London) |
| **Collateral** | USDC stablecoin |

**Key Stats:**
- ~8% of Polygon network gas usage (Oct 2024)
- Polygon upgrades (PIPs 60, 43) targeting 1,000 TPS and ~5s finality

**Sources:** [Polygon Technology](https://polygon.technology/blog/what-is-polymarket-how-a-polygon-early-adopter-became-the-official-prediction-market-on-x), [QuantVPS](https://www.quantvps.com/blog/polymarket-servers-location)

---

### Kalshi
| Aspect | Details |
|--------|---------|
| **Architecture** | Centralized, traditional exchange |
| **Primary Infrastructure** | Cloud-native (AWS, proprietary) |
| **Blockchain Integration** | Solana + Base (Dec 2025 tokenization) |
| **Why Centralized** | CFTC regulatory compliance requirements |
| **Settlement** | Internal clearinghouse (Kalshi Klear DCO) |
| **Collateral** | USD (fiat), USDC, USDT (TRON) |

**Blockchain Expansion (2025):**
- KalshiEco Hub partnership with Solana and Base
- Tokenized event contracts as SPL tokens on Solana
- DFlow integration for on-chain settlement
- TRON support for USDT deposits/withdrawals

**Sources:** [Blockworks](https://blockworks.co/news/kalshi-ecosystem-hub-solana-base), [Kalshi News](https://news.kalshi.com/p/kalshi-solana-tokenized-predictions)

---

### Opinion Labs
| Aspect | Details |
|--------|---------|
| **Architecture** | Fully decentralized, permissionless |
| **Blockchain** | BNB Chain (mainnet Oct 2025) |
| **Previous Network** | Monad testnet (early 2025) |
| **Why BNB Chain** | Low fees, fast finality, strong DeFi ecosystem |
| **Settlement** | On-chain with ZK verification |
| **Collateral** | Any ERC-20 token |

**Sources:** [Globe Newswire](https://www.globenewswire.com/news-release/2025/10/16/3167923/0/en/Opinion-the-YZi-Labs-Backed-Prediction-Market-Announces-Mainnet-Launch-Exclusively-on-BNB-Chain.html), [Messari](https://messari.io/project/opinion-labs/profile)

---

## 2. Trading Engine: CLOB vs AMM vs Hybrid

### Comparison Table

| Feature | Polymarket | Kalshi | Opinion Labs |
|---------|------------|--------|--------------|
| **Engine Type** | Hybrid CLOB | Traditional CLOB | Decentralized CLOB |
| **Order Matching** | Off-chain | Centralized | On-chain |
| **Settlement** | On-chain | Off-chain | On-chain |
| **Order Types** | Market, Limit | Market, Limit | Market, Limit |
| **Execution** | Sub-second | Sub-millisecond | Block-dependent |
| **Liquidity Model** | Peer-to-peer | Market makers | FIFO matching |

### Polymarket Trading Engine
- **Hybrid CLOB**: Orders matched off-chain for speed, settled on-chain for security
- **CTF Exchange Contract**: Facilitates atomic swaps between outcome tokens and USDC
- **~50 EOAs** submit matched orders to Polygon
- **One taker, multiple makers** per transaction

**Sources:** [Polymarket Docs](https://docs.polymarket.com/developers/CTF/overview), [Bitget](https://www.bitget.com/news/detail/12560604342504)

### Kalshi Trading Engine
- **High-performance matching**: Thousands of TPS, sub-millisecond latency
- **Real-time order books**: Full bid/ask visibility
- **FIX 4.4 Protocol**: For institutional/HFT traders
- **Infrastructure providers**: Powers Robinhood, Coinbase, Crypto.com, Phantom

**Sources:** [Kalshi Docs](https://docs.kalshi.com/welcome), [Kalshi News](https://news.kalshi.com/p/apiv2-is-here)

### Opinion Labs Trading Engine
- **Pure CLOB architecture**: All orders on-chain
- **FIFO matching**: First-in, first-out order execution
- **Multi-token support**: Any ERC-20 as trading pair
- **Permissionless**: Anyone can create markets

**Sources:** [Opinion Labs Medium](https://opinionlabs.medium.com/opinion-why-another-prediction-market-9ec68eb6fa93), [O.LAB Whitepaper](https://whitepaper.olab.xyz/opinion-labs-docs/o.lab)

---

## 3. Smart Contracts: Framework, Audits, Open Source

### Polymarket Smart Contracts

| Component | Details |
|-----------|---------|
| **Base Framework** | Gnosis Conditional Token Framework (CTF) |
| **Token Standard** | ERC-1155 (up to 256 outcomes per event) |
| **Core Contracts** | CTFExchange.sol, NegRiskAdapter |
| **Collateral Handling** | Split/merge USDC into YES/NO tokens |

**Key Contract Addresses (Polygon):**
```
USDC: 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174
CTF_EXCHANGE: 0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E
CTF_CORE: 0x4D97DCd97eC945f40cF65F87097ACe5EA0476045
```

**Audits:**
| Auditor | Scope | Date |
|---------|-------|------|
| ChainSecurity | NegRiskAdapter | April 2024 |
| ChainSecurity | Conditional Tokens | Historical |

**Open Source:** Yes - 91 repositories on GitHub, all code free to use

**Sources:** [ChainSecurity Audit](https://old.chainsecurity.com/wp-content/uploads/2024/04/ChainSecurity_Polymarket_NegRiskAdapter_audit.pdf), [Polymarket GitHub](https://github.com/polymarket)

---

### Kalshi Smart Contracts

| Component | Details |
|-----------|---------|
| **Framework** | Proprietary (not blockchain-native) |
| **Token Standard** | N/A (centralized contracts) |
| **Solana Integration** | SPL tokens via DFlow API |

**Open Source Status:**
- Core platform: **Proprietary**
- Python SDK: Licensed as "LicenseRef-Proprietary"
- API: Documented with OpenAPI/AsyncAPI specs
- Community tools: Open source (trading bots, analysis frameworks)

**Sources:** [Kalshi GitHub](https://github.com/Kalshi), [PyPI kalshi-python](https://pypi.org/project/kalshi-python/)

---

### Opinion Labs Smart Contracts

| Component | Details |
|-----------|---------|
| **Framework** | Custom (BNB Chain compatible) |
| **Token Standard** | ERC-20 compatible |
| **Oracle Contracts** | Optimistic Oracle + AI resolution |

**Audit Status:** Not publicly documented as of January 2026

**Open Source:** Whitepaper and documentation public; smart contract repos not prominently featured

**Sources:** [Opinion Labs Whitepaper](https://whitepaper.olab.xyz/opinion-labs-docs)

---

## 4. Oracle/Settlement: How Outcomes Are Determined

### Polymarket: Dual Oracle System

#### UMA Optimistic Oracle (Primary - ~80% of markets)
| Phase | Process |
|-------|---------|
| **1. Proposal** | Proposer submits answer + bond |
| **2. Challenge** | 2-hour dispute window |
| **3. First Dispute** | New request created (ignores frivolous disputes) |
| **4. Second Dispute** | Escalates to DVM token holder vote |
| **5. DVM Resolution** | 48-96 hour voting period |

**Managed Proposer Whitelist (MOOv2):**
- Only vetted proposers (20+ proposals, >95% accuracy)
- 37 qualified addresses at launch
- Disputes remain open to anyone

**Stats:** ~98.5% of requests resolve without dispute; ~1.3% dispute rate

#### Chainlink Data Feeds (Price Markets)
- **Use Case**: Crypto prices, stock benchmarks
- **Features**: Low-latency, timestamped, verifiable
- **Product**: 15-minute crypto prediction markets
- **Settlement**: Automated via Chainlink Automation

**March 2025 Incident:** UMA governance attack - $7M affected when holder with 5M UMA tokens (25% of vote) manipulated Ukraine mineral deal market outcome

**Sources:** [UMA Docs](https://docs.uma.xyz/protocol-overview/how-does-umas-oracle-work), [Chainlink PR](https://www.prnewswire.com/news-releases/polymarket-partners-with-chainlink-to-enhance-accuracy-of-prediction-market-resolutions-302555123.html), [Orochi Network](https://orochi.network/blog/oracle-manipulation-in-polymarket-2025)

---

### Kalshi: Centralized Resolution

| Aspect | Details |
|--------|---------|
| **Primary Method** | Centralized determination |
| **Data Sources** | Government data, institutional feeds |
| **Accuracy** | 99%+ markets resolved without dispute (2025) |
| **Oversight** | CFTC market surveillance requirements |

**Verification Sources:**
- Federal Reserve announcements
- Bureau of Labor Statistics
- Official sports results
- Election certification data

**Sources:** [Kalshi Help Center](https://help.kalshi.com/kalshi-101/how-is-kalshi-regulated)

---

### Opinion Labs: AI + ZK Oracle

#### Four-Layer System
1. **Opinion AI**: Multi-agent AI oracle for complex data
2. **Brevis ZK Coprocessor**: Mathematical verification
3. **TEE Execution**: Trusted Execution Environments
4. **Human Oversight**: Final arbitration layer

**AI Oracle Features:**
- Converts prompts to detailed prediction contracts
- Multi-model jury system (prevents single point of failure)
- Runs in TEEs for tamper resistance
- Verifiable via zero-knowledge proofs

**ZK Settlement Process:**
1. Developers specify required on-chain historical data
2. Brevis computes off-chain with ZK proof generation
3. Verified results returned via callback functions

**Sources:** [Blockchain Reporter](https://blockchainreporter.net/opinion-labs-and-brevis-transform-prediction-markets-with-zk-technology/), [Messari](https://messari.io/project/opinion-labs/profile)

---

## 5. Security: Audits, Incidents, Bug Bounties

### Security Comparison Table

| Aspect | Polymarket | Kalshi | Opinion Labs |
|--------|------------|--------|--------------|
| **Smart Contract Audits** | ChainSecurity (2024) | N/A (centralized) | Not public |
| **Known Incidents** | Dec 2025, Nov 2025, Sep 2024 | None reported | None reported |
| **Bug Bounty** | Not formally announced | Yes (multiple programs) | Not announced |
| **Regulatory Oversight** | QCEX (US) | CFTC DCM | None |
| **Fund Custody** | Self-custody (Safe) | Segregated accounts | Self-custody |

### Polymarket Security Incidents

**December 2025:** Third-party authentication vulnerability
- Magic Labs email login compromised
- 3-digit OTP potentially brute-forced
- Core protocol unaffected
- Number of affected users/value not disclosed

**November 2025:** Phishing campaign
- Comment section social engineering
- $500K+ reported losses

**September 2024:** Google login proxy exploit
- USDC drained via proxy function manipulation

**Sources:** [The Block](https://www.theblock.co/post/383711/polymarket-third-party-vulnerability-hack), [Yahoo Tech](https://tech.yahoo.com/cybersecurity/articles/polymarket-hack-third-party-vulnerability-130228247.html)

---

### Kalshi Bug Bounty Programs

| Program | Scope | Rewards |
|---------|-------|---------|
| **App/Website** | Web, mobile, APIs, digital assets | Varies by severity |
| **Market** | Market rule bugs/ambiguities | $25-$100 |
| **Contract Draft** | Unfiled contract issues | Varies |

**Regulatory Security:**
- Regular third-party audits
- Financial reporting requirements
- Fund segregation mandates
- Real-time market surveillance

**Sources:** [Kalshi Bug Bounty](https://help.kalshi.com/bug-bounty-programs/app-and-website-bug-bounty-program), [Kalshi Safety](https://news.kalshi.com/p/how-kalshi-keeps-traders-safe)

---

## 6. Scalability: TPS and High-Volume Handling

### Performance Metrics

| Metric | Polymarket | Kalshi | Opinion Labs |
|--------|------------|--------|--------------|
| **Current TPS** | ~37.6 (Polygon avg) | Thousands | BNB Chain dependent |
| **Target TPS** | 1,000 (PIPs 60/43) | 65,000 (Solana) | N/A |
| **Finality** | ~5s (planned) | Sub-second | ~3s (BNB Chain) |
| **Peak Monthly Volume** | $2.76B (Oct 2025) | $6.38B (Dec 2025) | $1.5B weekly |
| **Peak Daily Volume** | N/A | $381.7M (Dec 21, 2025) | N/A |
| **Monthly Active Users** | 445,000+ | Millions weekly | N/A |

### Polymarket Scalability
- **Hybrid architecture**: Off-chain matching, on-chain settlement
- **AWS eu-west-2**: Handles order routing, APIs, WebSocket streams
- **Polygon optimization**: ~$0.007 per trade gas cost
- **Future**: Potential L1/appchain launch in 6-12 months

### Kalshi Scalability
- **Traditional infrastructure**: Cloud-native, auto-scaling
- **Solana integration**: 65,000 TPS capability
- **TRON support**: 3-second blocks, near-zero fees
- **December 2025**: 27.67M trades in single month

### Opinion Labs Scalability
- **BNB Chain**: Fast finality, low fees
- **~40% market share**: Within one month of mainnet launch

**Sources:** [Kalshi Data](https://www.kalshidata.com/), [Token Terminal](https://tokenterminal.com/explorer/projects/polymarket/metrics/trading-volume)

---

## 7. API/Developer Tools

### API Feature Comparison

| Feature | Polymarket | Kalshi | Opinion Labs |
|---------|------------|--------|--------------|
| **REST API** | Yes | Yes (v2) | Yes |
| **WebSocket** | Yes | Yes | Yes |
| **Python SDK** | py-clob-client | kalshi-python | Planned |
| **TypeScript SDK** | Yes | Yes | Planned |
| **GraphQL** | Yes | No | No |
| **FIX Protocol** | No | Yes (4.4) | No |
| **Demo Environment** | Testnet | Yes (demo.kalshi.com) | Monad testnet |
| **Documentation** | Comprehensive | Comprehensive | Basic |
| **OpenAPI Spec** | No | Yes | No |

### Polymarket Developer Tools

**Official SDKs:**
```bash
pip install py-clob-client  # Python 3.9+
```

**Key Features:**
- ClobClient class for CLOB API
- Magic/email wallet support
- Gnosis Safe integration
- Subgraph for on-chain indexing

**Endpoints:**
- REST: `https://clob.polymarket.com`
- Gamma API: Market metadata, categorization, volume
- Chain ID: 137 (Polygon mainnet)

**GitHub Resources:**
- 91 public repositories
- Trading bots (Polymarket/agents)
- Code examples
- Architecture documentation

**Sources:** [py-clob-client](https://github.com/Polymarket/py-clob-client), [Polymarket Docs](https://docs.polymarket.com/)

---

### Kalshi Developer Tools

**Official SDK:**
```bash
pip install kalshi-python  # Auto-generated from OpenAPI
```

**Key Features:**
- Complete market data endpoints
- Order management
- Historical data access
- Real-time streaming

**Endpoints:**
- Demo: `https://demo.kalshi.com/trade-api/v2/`
- Production: `https://trading-api.kalshi.com/trade-api/v2/`

**Authentication:**
- 30-minute token expiry
- Key rotation recommended
- Separate dev/prod keys

**Institutional Features:**
- FIX 4.4 protocol
- DFlow API (Solana integration)
- Jupiter DEX routing

**Sources:** [Kalshi Docs](https://docs.kalshi.com/welcome), [Kalshi API Help](https://help.kalshi.com/kalshi-api)

---

### Opinion Labs Developer Tools

**API Access:**
- Request-based (form application)
- Single key for OpenAPI, WebSocket, CLOB SDK

**Documentation:**
- `docs.opinion.trade` - OpenAPI
- `whitepaper.olab.xyz` - Protocol docs

**Available Endpoints:**
- Active markets
- Token prices
- Orderbook data
- Price history

**Sources:** [Opinion Docs](https://docs.opinion.trade/developer-guide/opinion-open-api/overview)

---

## 8. Data Transparency: On-Chain vs Off-Chain

### Transparency Comparison

| Aspect | Polymarket | Kalshi | Opinion Labs |
|--------|------------|--------|--------------|
| **Trade Data** | On-chain (Polygon) | Off-chain | On-chain (BNB) |
| **Order Book** | Off-chain | Off-chain | On-chain |
| **Settlement** | On-chain | Off-chain | On-chain + ZK |
| **Public Explorer** | PolygonScan | Internal | BscScan |
| **Subgraph** | Yes (public) | No | Unknown |
| **CFTC Reporting** | Via QCEX | Yes (DCM) | No |
| **Audit Trail** | Blockchain | Internal | Blockchain + ZK proofs |

### Polymarket Data Access
- **On-chain**: All trades, positions, settlements verifiable on Polygon
- **Dune Analytics**: Public dashboards (e.g., `dune.com/filarm/polymarket-activity`)
- **Token Terminal**: Volume tracking
- **Subgraph**: Real-time indexing of market data

### Kalshi Data Access
- **KalshiData.com**: Public dashboard
- **API**: Historical and real-time data
- **Research Division**: Published forecasting accuracy studies
- **CFTC Filing**: Public market listings and rules

### Opinion Labs Data Access
- **BNB Chain**: All transactions verifiable
- **ZK Proofs**: Mathematical verification of settlements
- **On-chain resolution**: Consensus oracle data public

**Sources:** [Dune Analytics](https://dune.com/filarm/polymarket-activity), [KalshiData](https://www.kalshidata.com/)

---

## 9. Technical Team: Engineering Talent & Backgrounds

### Polymarket

| Role | Person | Background |
|------|--------|------------|
| **Founder/CEO** | Shayne Coplan | NYU CS dropout, Ethereum 2014 investor (age 16), self-taught developer |
| **Engineering** | Internal team | Crypto-native, smart contract specialists |

**Company Profile:**
- Founded: 2020
- Location: New York
- Valuation: $8-9B (Oct 2025)
- Investors: ICE ($2B strategic investment), Polychain Capital, Founders Fund

**Technical Philosophy:**
- Influenced by Friedrich Hayek (decentralized knowledge)
- Robin Hanson (prediction market theory)
- Built initial platform solo from "bathroom office"

**Sources:** [Wikipedia](https://en.wikipedia.org/wiki/Shayne_Coplan), [DataWallet](https://www.datawallet.com/crypto/who-is-shayne-coplan-polymarket)

---

### Kalshi

| Role | Person | Background |
|------|--------|------------|
| **Co-Founder/CEO** | Tarek Mansour | MIT, Goldman Sachs (structured credit), Citadel (global macro) |
| **Co-Founder/COO** | Luana Lopes Lara | MIT MEng CS, MIT Brain & Cognitive Sciences, Citadel Securities, Five Rings Capital |

**Company Profile:**
- Founded: 2018
- Location: New York
- Employees: 70-195
- Valuation: $11B (Dec 2025)
- Investors: Sequoia, a16z, Paradigm

**Technical Team:**
- Doubling engineering team for international expansion
- Hiring: Engineering, product, design, operations
- Tech stack: Apache Kafka, Golang, React

**Sources:** [Kalshi About](https://kalshi.com/about), [Forbes](https://news.mit.edu/news-clip/forbes-814)

---

### Opinion Labs

| Role | Person | Background |
|------|--------|------------|
| **Founder** | Forrest Liu | Technical architecture lead |
| **Core Contributor** | Nicki L | Technical development, UX |

**Team Background:**
- Previous experience at Citadel, JP Morgan, McKinsey, Amazon, ByteDance
- Expertise in algorithmic trading and large-scale consumer apps

**Company Profile:**
- Founded: 2023 (Hong Kong)
- Funding: $5M seed (YZi Labs, Animoca, Amber Group)
- Focus: Decentralized prediction + AI oracle infrastructure

**Sources:** [Tracxn](https://tracxn.com/d/companies/opinion-labs/__X2AtIBDDrkUnG5gG-xeVCHLqZv6Y7UeQ-d9sagfsOJE), [Crunchbase](https://www.crunchbase.com/organization/opinion-labs)

---

## 10. Innovation: Unique Features, Patents, R&D

### Innovation Comparison Matrix

| Innovation Area | Polymarket | Kalshi | Opinion Labs |
|-----------------|------------|--------|--------------|
| **Oracle Tech** | UMA + Chainlink dual system | Centralized + data feeds | AI + ZK verification |
| **Tokenization** | Native (CTF) | Solana SPL tokens (2025) | Native ERC-20 |
| **DeFi Composability** | Limited | Via DFlow/Jupiter | Full |
| **Market Creation** | Curated | Curated | Permissionless + AI |
| **Settlement Speed** | 2hr - 96hr (UMA) / Instant (Chainlink) | Instant | AI-assisted |
| **Regulatory Innovation** | QCEX acquisition | First CFTC election trading (2024) | None |

### Polymarket Innovations

**2024-2025 Developments:**
1. **Chainlink Integration**: 15-minute crypto prediction markets
2. **X/Twitter Partnership**: Real-time Grok AI annotations
3. **QCEX Acquisition**: US regulatory compliance pathway
4. **Managed Proposers (MOOv2)**: Improved oracle efficiency
5. **ICE Partnership**: Data distribution, tokenization initiatives

**Planned:**
- L1/Appchain launch (6-12 months)
- Enhanced surveillance tools
- International expansion

**Sources:** [ICE Press Release](https://ir.theice.com/press/news-details/2025/ICE-Announces-Strategic-Investment-in-Polymarket/default.aspx)

---

### Kalshi Innovations

**2024-2025 Developments:**
1. **First CFTC Election Trading**: Legal US political markets (2024)
2. **Solana Tokenization**: SPL token event contracts (Dec 2025)
3. **TRON Integration**: 3-second settlements, near-zero fees
4. **Research Division**: 40% more accurate than Wall Street (inflation)
5. **Infrastructure-as-a-Service**: Powers Robinhood, Coinbase, Crypto.com
6. **KalshiEco Hub**: $2M+ builder grants

**Key Metrics:**
- 3,500+ markets
- 62.2% global market share
- $23.8B volume (2025), +1,108% YoY

**Sources:** [TechCrunch](https://techcrunch.com/2025/12/02/kalshi-raises-1b-at-11b-valuation-doubling-value-in-under-two-months/), [Kalshi Solana](https://news.kalshi.com/p/kalshi-solana-tokenized-predictions)

---

### Opinion Labs Innovations

**Unique Features:**
1. **Opinion AI Oracle**: First decentralized multi-agent AI oracle
2. **Brevis ZK Integration**: Mathematically provable settlements
3. **TEE Execution**: Tamper-resistant AI processing
4. **Permissionless Markets**: AI-assisted creation and verification
5. **Multi-Model Jury**: No single AI/operator determines outcome

**Four-Layer "Opinion Stack":**
1. Opinion.Trade - Prediction markets
2. Opinion AI - Oracle + market creation
3. Opinion Metapool - Unified liquidity (planned)
4. Opinion Protocol - Token standard (planned)

**Market Position:**
- Third largest prediction market (behind Polymarket, Kalshi)
- $60.9M open interest (Nov 2025)
- ~40% market share within 1 month of BNB launch

**Sources:** [Messari Report](https://messari.io/report/opinion-an-emerging-player-in-prediction-markets), [BingX](https://bingx.com/en/learn/article/what-is-opinion-prediction-market-how-to-earn-points)

---

## Summary: Which Platform for Which Use Case?

| Use Case | Best Platform | Reason |
|----------|---------------|--------|
| **US Regulated Trading** | Kalshi | CFTC DCM license, legal nationwide |
| **Crypto-Native Experience** | Polymarket | Full on-chain, self-custody, DeFi integration |
| **Institutional Trading** | Kalshi | FIX protocol, high TPS, regulatory compliance |
| **Permissionless Markets** | Opinion Labs | AI-assisted creation, any ERC-20 collateral |
| **Quick Settlement** | Polymarket (Chainlink markets) or Kalshi | 15-min markets (Polymarket), instant (Kalshi) |
| **Developer Building** | Polymarket | Open source, 91 repos, comprehensive SDKs |
| **DeFi Composability** | Opinion Labs | Native BNB Chain, full ERC-20 support |
| **Data Transparency** | Polymarket | Full on-chain, public subgraphs |
| **AI/ZK Innovation** | Opinion Labs | Multi-agent AI oracle, ZK settlement proofs |

---

## Key Sources

### Polymarket
- [Polymarket Documentation](https://docs.polymarket.com/)
- [Polymarket GitHub](https://github.com/polymarket)
- [ChainSecurity Audit](https://www.chainsecurity.com/security-audit/polymarket-conditional-tokens)
- [UMA Documentation](https://docs.uma.xyz/protocol-overview/how-does-umas-oracle-work)
- [Polygon Blog](https://polygon.technology/blog/what-is-polymarket-how-a-polygon-early-adopter-became-the-official-prediction-market-on-x)

### Kalshi
- [Kalshi API Documentation](https://docs.kalshi.com/welcome)
- [Kalshi Help Center](https://help.kalshi.com/)
- [Kalshi News](https://news.kalshi.com/)
- [Y Combinator Profile](https://www.ycombinator.com/companies/kalshi)

### Opinion Labs
- [Opinion Labs Whitepaper](https://whitepaper.olab.xyz/opinion-labs-docs)
- [Opinion API Docs](https://docs.opinion.trade/developer-guide/opinion-open-api/overview)
- [Messari Profile](https://messari.io/project/opinion-labs/profile)
- [Blockchain Reporter - ZK Integration](https://blockchainreporter.net/opinion-labs-and-brevis-transform-prediction-markets-with-zk-technology/)

---

*This comparison reflects publicly available information as of January 2026. Platform features and specifications may change.*
