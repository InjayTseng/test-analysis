import { TrendingUp, Users, Building2 } from 'lucide-react';

const stats = [
  {
    value: '$44B',
    label: '2025 Market Volume',
    icon: TrendingUp,
    change: '+373% YoY',
    changeType: 'positive',
  },
  {
    value: '1.8M+',
    label: 'Active Traders',
    icon: Users,
    change: '+850% since 2023',
    changeType: 'positive',
  },
  {
    value: '3',
    label: 'Major Platforms',
    icon: Building2,
    change: 'Kalshi, Polymarket, Opinion Labs',
    changeType: 'neutral',
  },
];

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="badge badge-blue">Institutional Research</span>
            <span className="badge badge-purple">January 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Prediction Markets
            <br />
            <span className="gradient-text">Intelligence Report</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 text-balance">
            Comprehensive VC-style due diligence on the prediction markets industry,
            featuring deep analysis of <span className="text-accent-blue font-semibold">Kalshi</span>,{' '}
            <span className="text-accent-purple font-semibold">Polymarket</span>, and{' '}
            <span className="text-accent-green font-semibold">Opinion Labs</span>.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('companies').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary cursor-pointer"
            >
              View Company Profiles
            </button>
            <button
              onClick={() => document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary cursor-pointer"
            >
              Jump to Analysis
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card card-hover card-glow group"
              >
                <div className="p-3 bg-blue-50 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-blue" />
                </div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p
                  className={`text-sm mt-3 font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-accent-green'
                      : stat.changeType === 'negative'
                      ? 'text-accent-red'
                      : 'text-slate-600'
                  }`}
                >
                  {stat.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Insight Callout */}
        <div className="mt-12 callout callout-info">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Market Reversal Alert</h3>
              <p className="text-slate-600 text-sm">
                In Q4 2024, Kalshi overtook Polymarket to become the market leader with 66% share,
                reversing 3+ years of Polymarket dominance. This shift was driven by the DC Circuit
                Court ruling allowing election contracts on Kalshi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
