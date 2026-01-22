import {
  CompetitiveRadarChart,
  ValuationTimelineChart,
  FundingComparisonChart,
  RiskMatrixChart,
  CategoryBreakdownChart,
  UserGrowthChart,
} from '../charts';

export default function CompetitiveAnalysis() {
  return (
    <section id="analysis" className="section bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Competitive Analysis</h2>
          <p className="section-subtitle">
            Multi-dimensional comparison of the three major prediction market platforms
          </p>
        </div>

        {/* Competitive Radar */}
        <div className="mb-8">
          <CompetitiveRadarChart />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ValuationTimelineChart />
          <FundingComparisonChart />
        </div>

        {/* Risk Matrix */}
        <div className="mb-8">
          <RiskMatrixChart />
        </div>

        {/* Category Breakdown and User Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CategoryBreakdownChart />
          <UserGrowthChart />
        </div>

        {/* Comparison Table */}
        <div className="card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-slate-900">Platform Comparison Matrix</h3>
            <p className="text-sm text-slate-600">Side-by-side feature comparison</p>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-blue" />
                      Kalshi
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-purple" />
                      Polymarket
                    </div>
                  </th>
                  <th className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-green" />
                      Opinion Labs
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-slate-900">US Regulatory Status</td>
                  <td className="text-center">
                    <span className="badge badge-green">CFTC Regulated</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-red">No License</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-blue">State Licensed</span>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">US Access</td>
                  <td className="text-center text-accent-green">Full Access</td>
                  <td className="text-center text-accent-red">Blocked</td>
                  <td className="text-center text-accent-yellow">Limited States</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">Settlement</td>
                  <td className="text-center">USD (Bank/Card)</td>
                  <td className="text-center">USDC (Crypto)</td>
                  <td className="text-center">USD (Bank/Card)</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">Min Trade</td>
                  <td className="text-center">$1</td>
                  <td className="text-center">~$1 (+ gas)</td>
                  <td className="text-center">$1</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">Max Position</td>
                  <td className="text-center">$100K</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center">$25K</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">KYC Required</td>
                  <td className="text-center text-accent-green">Yes (Full)</td>
                  <td className="text-center text-accent-red">No</td>
                  <td className="text-center text-accent-green">Yes (Basic)</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">API Access</td>
                  <td className="text-center text-accent-green">Yes</td>
                  <td className="text-center text-accent-green">Yes</td>
                  <td className="text-center text-accent-yellow">Limited</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">Mobile App</td>
                  <td className="text-center text-accent-green">iOS + Android</td>
                  <td className="text-center text-accent-yellow">PWA Only</td>
                  <td className="text-center text-accent-green">iOS + Android</td>
                </tr>
                <tr>
                  <td className="font-medium text-slate-900">Market Types</td>
                  <td className="text-center">Politics, Finance, Events</td>
                  <td className="text-center">Politics, Crypto, Global</td>
                  <td className="text-center">Politics, Sports, Pop Culture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="callout callout-info">
            <h4 className="font-semibold text-slate-900 mb-2">Regulatory Advantage</h4>
            <p className="text-sm text-slate-600">
              Kalshi's CFTC license is a significant competitive moat, providing legal certainty
              that Polymarket and Opinion Labs cannot match for US operations.
            </p>
          </div>
          <div className="callout callout-warning">
            <h4 className="font-semibold text-slate-900 mb-2">Technology Trade-offs</h4>
            <p className="text-sm text-slate-600">
              Polymarket's blockchain architecture enables permissionless markets but introduces
              latency and gas costs that traditional platforms avoid.
            </p>
          </div>
          <div className="callout callout-success">
            <h4 className="font-semibold text-slate-900 mb-2">Market Opportunity</h4>
            <p className="text-sm text-slate-600">
              Opinion Labs' AI-powered approach and mobile-first design could capture the
              underserved casual user segment overlooked by incumbents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
