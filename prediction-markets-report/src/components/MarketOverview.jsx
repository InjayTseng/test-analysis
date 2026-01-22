import {
  MarketGrowthChart,
  MarketShareDonut,
  VolumeTrendChart,
} from '../charts';

export default function MarketOverview() {
  return (
    <section id="market" className="section bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Market Overview</h2>
          <p className="section-subtitle">
            The prediction markets industry has experienced explosive growth, emerging as a significant
            financial vertical
          </p>
        </div>

        {/* Growth Chart */}
        <div className="mb-8">
          <MarketGrowthChart />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MarketShareDonut />
          <div className="card">
            <h3 className="chart-title">Key Market Catalysts</h3>
            <p className="chart-subtitle mb-6">Events driving industry transformation</p>

            <div className="space-y-4">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900 font-medium">Oct 2024</span>
                    <span className="badge badge-green">Positive</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    DC Circuit Court rules in favor of Kalshi, allowing election contracts
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: '#9333ea' }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900 font-medium">Nov 2024</span>
                    <span className="badge badge-blue">Milestone</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    2024 US Election drives record $3.5B+ in single-month volume across platforms
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: '#ca8a04' }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900 font-medium">Jan 2025</span>
                    <span className="badge badge-yellow">Funding</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Kalshi closes $150M Series D at $1.7B valuation
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: '#0891b2' }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900 font-medium">Q1 2025</span>
                    <span className="badge badge-purple">Pending</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Supreme Court expected to review prediction market regulatory framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Trend Chart */}
        <VolumeTrendChart />

        {/* Industry Thesis */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900">Regulatory Clarity</h4>
            </div>
            <p className="text-sm text-slate-600">
              CFTC approval and court victories establishing legal framework for US prediction markets
            </p>
          </div>

          <div className="card card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900">Hypergrowth</h4>
            </div>
            <p className="text-sm text-slate-600">
              44x volume growth from 2023-2025, with projections exceeding $200B by 2026
            </p>
          </div>

          <div className="card card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900">Mainstream Adoption</h4>
            </div>
            <p className="text-sm text-slate-600">
              1.8M+ active traders with prediction markets becoming mainstream financial tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
