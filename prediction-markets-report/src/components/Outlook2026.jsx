import { outlook2026 } from '../data/marketData';
import { Calendar, TrendingUp, Target, Zap } from 'lucide-react';

export default function Outlook2026() {
  return (
    <section id="outlook" className="section bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">2026 Outlook</h2>
          <p className="section-subtitle">
            Market projections, key events, and strategic predictions for the year ahead
          </p>
        </div>

        {/* Market Size Projections */}
        <div className="card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent-blue/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Market Size Projections</h3>
              <p className="text-sm text-slate-600">2026 annual volume estimates</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-100 to-white border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-yellow">Conservative</span>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">{outlook2026.marketSize.conservative}</p>
              <p className="text-sm text-slate-600">
                Assumes regulatory headwinds and slower adoption
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-fill bg-accent-yellow" style={{ width: '50%' }} />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-blue/20 to-transparent border border-accent-blue/30 scale-105 shadow-glow-blue">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-blue">Base Case</span>
                <span className="text-xs text-accent-blue">Most Likely</span>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">{outlook2026.marketSize.base}</p>
              <p className="text-sm text-slate-600">
                Continues current growth trajectory with moderate expansion
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-fill bg-accent-blue" style={{ width: '75%' }} />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-accent-green/20 to-transparent border border-accent-green/30">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-green">Optimistic</span>
              </div>
              <p className="text-4xl font-bold text-slate-900 mb-2">{outlook2026.marketSize.optimistic}</p>
              <p className="text-sm text-slate-600">
                Major regulatory wins and mainstream institutional adoption
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-fill bg-accent-green" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Events Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-purple/20 rounded-lg">
                <Calendar className="w-5 h-5 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Key Events Calendar</h3>
                <p className="text-sm text-slate-600">Market-moving events to watch</p>
              </div>
            </div>

            <div className="space-y-4">
              {outlook2026.keyEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{
                      backgroundColor:
                        index === 0
                          ? '#2563eb'
                          : index === 1
                          ? '#9333ea'
                          : index === 2
                          ? '#16a34a'
                          : '#22d3ee',
                    }}
                  />
                  <div>
                    <span className="text-xs text-slate-600">{event.date}</span>
                    <p className="text-slate-900 font-medium">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictions */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-cyan/20 rounded-lg">
                <Target className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Analyst Predictions</h3>
                <p className="text-sm text-slate-600">Probability-weighted forecasts</p>
              </div>
            </div>

            <div className="space-y-4">
              {outlook2026.predictions.map((pred, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">{pred.prediction}</span>
                    <span
                      className={`text-sm font-mono font-bold ${
                        pred.probability >= 70
                          ? 'text-accent-green'
                          : pred.probability >= 50
                          ? 'text-accent-yellow'
                          : 'text-accent-red'
                      }`}
                    >
                      {pred.probability}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${pred.probability}%`,
                        backgroundColor:
                          pred.probability >= 70
                            ? '#16a34a'
                            : pred.probability >= 50
                            ? '#ca8a04'
                            : '#dc2626',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent-yellow/20 rounded-lg">
              <Zap className="w-5 h-5 text-accent-yellow" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Strategic Recommendations</h3>
              <p className="text-sm text-slate-600">Actionable insights for stakeholders</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">For Investors</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue">•</span>
                  Prioritize Kalshi for regulatory safety
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue">•</span>
                  Monitor Polymarket regulatory developments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue">•</span>
                  Opinion Labs as high-risk/high-reward play
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue">•</span>
                  Consider sector ETF when available
                </li>
              </ul>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">For Platforms</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple">•</span>
                  Invest in regulatory compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple">•</span>
                  Expand market categories beyond politics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple">•</span>
                  Build institutional-grade infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple">•</span>
                  Pursue strategic partnerships
                </li>
              </ul>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">For Regulators</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-green">•</span>
                  Establish clear federal framework
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green">•</span>
                  Address state-federal jurisdiction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green">•</span>
                  Consider crypto-native regulation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-green">•</span>
                  Balance innovation with protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
