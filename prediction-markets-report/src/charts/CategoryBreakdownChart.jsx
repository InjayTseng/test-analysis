import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import { volumeByCategoryData } from '../data/marketData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + entry.value, 0);
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
        <p className="text-slate-900 font-semibold mb-3">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-6 text-sm mb-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-600">{entry.name}</span>
            </div>
            <span className="font-mono text-slate-900">{entry.value}%</span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Combined</span>
            <span className="font-mono text-slate-900">{total}%</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function CategoryBreakdownChart() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Volume by Category</h3>
        <p className="chart-subtitle">Trading volume distribution across market categories (%)</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={volumeByCategoryData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-slate-600">{value}</span>}
          />
          <Bar
            dataKey="kalshi"
            name="Kalshi"
            fill="#2563eb"
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data) => setActiveCategory(data.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {volumeByCategoryData.map((entry, index) => (
              <Cell
                key={`kalshi-${index}`}
                opacity={activeCategory === null || activeCategory === entry.category ? 1 : 0.3}
              />
            ))}
          </Bar>
          <Bar
            dataKey="polymarket"
            name="Polymarket"
            fill="#9333ea"
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data) => setActiveCategory(data.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {volumeByCategoryData.map((entry, index) => (
              <Cell
                key={`polymarket-${index}`}
                opacity={activeCategory === null || activeCategory === entry.category ? 1 : 0.3}
              />
            ))}
          </Bar>
          <Bar
            dataKey="opinionLabs"
            name="Opinion Labs"
            fill="#16a34a"
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data) => setActiveCategory(data.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {volumeByCategoryData.map((entry, index) => (
              <Cell
                key={`opinionLabs-${index}`}
                opacity={activeCategory === null || activeCategory === entry.category ? 1 : 0.3}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-5 gap-3">
        {volumeByCategoryData.map((cat) => (
          <div
            key={cat.category}
            className={`p-3 rounded-lg border transition-all duration-200 cursor-default ${
              activeCategory === cat.category
                ? 'bg-card-hover border-border-highlight scale-105'
                : 'bg-secondary border-border hover:bg-card-hover'
            }`}
            onMouseEnter={() => setActiveCategory(cat.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <p className="text-slate-900 font-medium text-sm mb-2">{cat.category}</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent-blue">Kalshi</span>
                <span className="text-slate-600">{cat.kalshi}%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent-purple">Poly</span>
                <span className="text-slate-600">{cat.polymarket}%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent-green">OpLabs</span>
                <span className="text-slate-600">{cat.opinionLabs}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-slate-900 font-medium text-sm">Category Concentration Risk</p>
            <p className="text-slate-600 text-sm mt-1">
              Politics dominates all platforms (30-60% of volume). This creates significant event-driven volatility around election cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
