import { useState } from 'react';
import { companyProfiles } from '../data/marketData';
import { Check, X, Building2, Users, DollarSign, TrendingUp, Server, Shield } from 'lucide-react';

const tabs = [
  { id: 'kalshi', label: 'Kalshi', color: '#2563eb' },
  { id: 'polymarket', label: 'Polymarket', color: '#9333ea' },
  { id: 'opinionLabs', label: 'Opinion Labs', color: '#16a34a' },
];

const StatusBadge = ({ status, color }) => {
  const colorClasses = {
    green: 'bg-accent-green/20 text-accent-green border-accent-green/30',
    purple: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
    blue: 'bg-accent-blue/20 text-accent-blue border-accent-blue/30',
  };

  return (
    <span className={`badge ${colorClasses[color]}`}>
      {status}
    </span>
  );
};

export default function CompanyProfiles() {
  const [activeTab, setActiveTab] = useState('kalshi');
  const company = companyProfiles[activeTab];

  return (
    <section id="companies" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Company Profiles</h2>
          <p className="section-subtitle">
            In-depth analysis of the three major prediction market platforms
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex bg-card rounded-xl p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                style={{
                  borderBottom: activeTab === tab.id ? `2px solid ${tab.color}` : 'none',
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tab.color }}
                  />
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Company Content */}
        <div className="space-y-8">
          {/* Header Card */}
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: tabs.find(t => t.id === activeTab).color + '20' }}
                >
                  <Building2
                    className="w-8 h-8"
                    style={{ color: tabs.find(t => t.id === activeTab).color }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900">{company.name}</h3>
                    <StatusBadge status={company.status} color={company.statusColor} />
                  </div>
                  <p className="text-slate-600">{company.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{company.valuation}</p>
                  <p className="text-xs text-slate-600">Valuation</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{company.totalRaised}</p>
                  <p className="text-xs text-slate-600">Total Raised</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{company.users}</p>
                  <p className="text-xs text-slate-600">Users</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{company.marketShare}</p>
                  <p className="text-xs text-slate-600">Market Share</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-accent-blue" />
                <h4 className="font-semibold text-slate-900">About</h4>
              </div>
              <p className="text-slate-600 text-sm mb-6">{company.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-600">Founded</p>
                  <p className="text-slate-900 font-medium">{company.founded}</p>
                </div>
                <div>
                  <p className="text-slate-600">Headquarters</p>
                  <p className="text-slate-900 font-medium">{company.headquarters}</p>
                </div>
                <div>
                  <p className="text-slate-600">Employees</p>
                  <p className="text-slate-900 font-medium">{company.employees}</p>
                </div>
                <div>
                  <p className="text-slate-600">Monthly Volume</p>
                  <p className="text-slate-900 font-medium">{company.monthlyVolume}</p>
                </div>
              </div>
            </div>

            {/* Founders */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-accent-purple" />
                <h4 className="font-semibold text-slate-900">Leadership</h4>
              </div>
              <div className="space-y-4">
                {company.founders.map((founder, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <span className="text-lg font-bold text-slate-700">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{founder.name}</p>
                      <p className="text-sm text-slate-600">{founder.role}</p>
                      <p className="text-xs text-slate-600">{founder.background}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding History */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-accent-green" />
                <h4 className="font-semibold text-slate-900">Funding History</h4>
              </div>
              <div className="space-y-3">
                {company.fundingRounds.map((round, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="badge badge-blue">{round.round}</span>
                      <span className="text-slate-900 font-medium">{round.amount}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600">{round.date}</p>
                      <p className="text-xs text-slate-600">{round.lead}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-slate-600 mb-2">Key Investors</p>
                <div className="flex flex-wrap gap-2">
                  {company.keyInvestors.map((investor, index) => (
                    <span key={index} className="text-xs bg-card px-2 py-1 rounded text-slate-600">
                      {investor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-5 h-5 text-accent-cyan" />
                <h4 className="font-semibold text-slate-900">Technology Stack</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Architecture</p>
                  <p className="text-slate-900">{company.technology.architecture}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Settlement</p>
                  <p className="text-slate-900">{company.technology.settlement}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <p className="text-xl font-bold text-accent-green">{company.technology.uptime}</p>
                    <p className="text-xs text-slate-600">Uptime</p>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <p className="text-xl font-bold text-accent-blue">{company.technology.latency}</p>
                    <p className="text-xs text-slate-600">Latency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-accent-green" />
                <h4 className="font-semibold text-slate-900">Strengths</h4>
              </div>
              <ul className="space-y-3">
                {company.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-accent-yellow" />
                <h4 className="font-semibold text-slate-900">Weaknesses</h4>
              </div>
              <ul className="space-y-3">
                {company.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
