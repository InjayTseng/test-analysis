import { useState } from 'react';
import { riskAssessmentData } from '../data/marketData';

const riskColors = {
  Low: {
    bg: 'bg-accent-green/20',
    border: 'border-accent-green/40',
    text: 'text-accent-green',
    glow: 'hover:shadow-glow-green',
  },
  Medium: {
    bg: 'bg-accent-yellow/20',
    border: 'border-accent-yellow/40',
    text: 'text-accent-yellow',
    glow: 'hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]',
  },
  High: {
    bg: 'bg-accent-red/20',
    border: 'border-accent-red/40',
    text: 'text-accent-red',
    glow: 'hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]',
  },
};

const riskDescriptions = {
  Regulatory: {
    Kalshi: 'CFTC-regulated, state litigation ongoing',
    Polymarket: 'No US license, CFTC settlement history',
    'Opinion Labs': 'State-level licenses, clean record',
  },
  Technology: {
    Kalshi: 'Battle-tested exchange, 99.9% uptime',
    Polymarket: 'Blockchain dependency, smart contract risks',
    'Opinion Labs': 'Early-stage, unproven at scale',
  },
  Competitive: {
    Kalshi: 'Strong moat, but challengers emerging',
    Polymarket: 'Regulatory barriers limit growth',
    'Opinion Labs': 'Small player against well-funded rivals',
  },
  Financial: {
    Kalshi: 'Strong funding, clear path to profitability',
    Polymarket: 'Crypto revenue volatility',
    'Opinion Labs': 'Limited runway, needs next round',
  },
  Operational: {
    Kalshi: 'Experienced team, proven execution',
    Polymarket: 'Offshore ops complexity, talent challenges',
    'Opinion Labs': 'Scaling challenges ahead',
  },
};

export default function RiskMatrixChart() {
  const [hoveredCell, setHoveredCell] = useState(null);

  const companies = ['Kalshi', 'Polymarket', 'Opinion Labs'];
  const companyColors = {
    Kalshi: '#2563eb',
    Polymarket: '#9333ea',
    'Opinion Labs': '#16a34a',
  };

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Risk Assessment Matrix</h3>
        <p className="chart-subtitle">Multi-dimensional risk analysis by platform</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-xs uppercase tracking-wider text-slate-600 font-medium py-3 px-4">
                Category
              </th>
              {companies.map((company) => (
                <th key={company} className="text-center py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: companyColors[company] }}
                    />
                    <span className="text-sm font-medium text-slate-900">{company}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {riskAssessmentData.map((row, rowIndex) => (
              <tr key={row.category} className="border-t border-border">
                <td className="py-4 px-4">
                  <span className="text-slate-900 font-medium">{row.category}</span>
                </td>
                {['kalshi', 'polymarket', 'opinionLabs'].map((key, colIndex) => {
                  const company = companies[colIndex];
                  const risk = row[key];
                  const colors = riskColors[risk];
                  const cellId = `${rowIndex}-${colIndex}`;
                  const isHovered = hoveredCell === cellId;

                  return (
                    <td key={key} className="py-4 px-4">
                      <div
                        className={`
                          relative flex flex-col items-center justify-center p-3 rounded-lg border
                          transition-all duration-300 cursor-default
                          ${colors.bg} ${colors.border} ${colors.glow}
                          ${isHovered ? 'scale-105 z-10' : ''}
                        `}
                        onMouseEnter={() => setHoveredCell(cellId)}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        <span className={`text-sm font-semibold ${colors.text}`}>
                          {risk}
                        </span>
                        {isHovered && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 w-48">
                            <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
                              <p className="text-xs text-slate-600">
                                {riskDescriptions[row.category][company]}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent-green/20 border border-accent-green/40" />
          <span className="text-sm text-slate-600">Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent-yellow/20 border border-accent-yellow/40" />
          <span className="text-sm text-slate-600">Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent-red/20 border border-accent-red/40" />
          <span className="text-sm text-slate-600">High Risk</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
        <h4 className="text-sm font-medium text-slate-900 mb-3">Key Insights</h4>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-accent-blue">•</span>
            <span>
              <span className="text-slate-900">Kalshi</span> has the lowest overall risk profile due to
              regulatory clarity
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-purple">•</span>
            <span>
              <span className="text-slate-900">Polymarket</span> faces highest regulatory and
              operational risks
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-green">•</span>
            <span>
              <span className="text-slate-900">Opinion Labs</span> primary risk is financial runway and
              competitive position
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
