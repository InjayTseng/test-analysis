import { investmentRecommendations } from '../data/marketData';
import { TrendingUp, TrendingDown, Target, AlertTriangle } from 'lucide-react';

const ratingColors = {
  BUY: {
    bg: 'bg-accent-green/20',
    border: 'border-accent-green/30',
    text: 'text-accent-green',
    icon: TrendingUp,
  },
  HOLD: {
    bg: 'bg-accent-yellow/20',
    border: 'border-accent-yellow/30',
    text: 'text-accent-yellow',
    icon: Target,
  },
  'SPECULATIVE BUY': {
    bg: 'bg-accent-blue/20',
    border: 'border-accent-blue/30',
    text: 'text-accent-blue',
    icon: AlertTriangle,
  },
  SELL: {
    bg: 'bg-accent-red/20',
    border: 'border-accent-red/30',
    text: 'text-accent-red',
    icon: TrendingDown,
  },
};

const companyColors = {
  Kalshi: '#2563eb',
  Polymarket: '#9333ea',
  'Opinion Labs': '#16a34a',
};

export default function InvestmentRecommendations() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Investment Recommendations</h2>
          <p className="section-subtitle">
            Analyst ratings and key investment factors for each platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {investmentRecommendations.map((rec) => {
            const ratingStyle = ratingColors[rec.rating];
            const Icon = ratingStyle.icon;

            return (
              <div key={rec.company} className="card card-hover">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: companyColors[rec.company] + '20' }}
                    >
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: companyColors[rec.company] }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{rec.company}</h3>
                      <p className="text-xs text-slate-600">{rec.timeframe} outlook</p>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div
                  className={`p-4 rounded-xl ${ratingStyle.bg} border ${ratingStyle.border} mb-6`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${ratingStyle.text}`} />
                      <span className={`text-xl font-bold ${ratingStyle.text}`}>
                        {rec.rating}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-600">Confidence</p>
                      <p className="text-lg font-bold text-slate-900">{rec.confidence}%</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-600">Price Target</span>
                      <span className="text-slate-900 font-mono font-bold">{rec.priceTarget}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${ratingStyle.bg.replace('/20', '')}`}
                        style={{ width: `${rec.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Key Factors */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-900 mb-3">Key Factors</h4>
                  <div className="space-y-3">
                    {rec.keyFactors.map((factor) => (
                      <div key={factor.factor}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-slate-600">{factor.factor}</span>
                          <span className="text-slate-900 font-mono">{factor.score}/100</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${factor.score}%`,
                              backgroundColor:
                                factor.score >= 80
                                  ? '#16a34a'
                                  : factor.score >= 60
                                  ? '#ca8a04'
                                  : '#dc2626',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bull/Bear Case */}
                <div className="space-y-4">
                  <div className="p-3 bg-accent-green/10 rounded-lg border border-accent-green/20">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-accent-green" />
                      <span className="text-xs font-medium text-accent-green">Bull Case</span>
                    </div>
                    <p className="text-sm text-slate-600">{rec.bullCase}</p>
                  </div>
                  <div className="p-3 bg-accent-red/10 rounded-lg border border-accent-red/20">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="w-4 h-4 text-accent-red" />
                      <span className="text-xs font-medium text-accent-red">Bear Case</span>
                    </div>
                    <p className="text-sm text-slate-600">{rec.bearCase}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-card rounded-lg border border-border">
          <p className="text-xs text-slate-600 text-center">
            <strong className="text-slate-600">Disclaimer:</strong> This report is for informational
            purposes only and does not constitute investment advice. Past performance is not
            indicative of future results. Please consult with a qualified financial advisor before
            making any investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
