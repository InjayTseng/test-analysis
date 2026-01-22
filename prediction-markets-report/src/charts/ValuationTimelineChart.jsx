import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts';
import { valuationTimelineData } from '../data/marketData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
        <p className="text-slate-900 font-semibold mb-3">{label}</p>
        {payload
          .filter((entry) => entry.value !== null)
          .sort((a, b) => b.value - a.value)
          .map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-6 text-sm mb-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-slate-600">{entry.name}</span>
              </div>
              <span className="font-mono text-slate-900 font-bold">${entry.value}M</span>
            </div>
          ))}
      </div>
    );
  }
  return null;
};

const CustomDot = ({ cx, cy, payload, dataKey }) => {
  if (payload[dataKey] === null) return null;

  const colors = {
    kalshi: '#2563eb',
    polymarket: '#9333ea',
    opinionLabs: '#16a34a',
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill={colors[dataKey]} stroke="#000" strokeWidth={2} />
      <circle cx={cx} cy={cy} r={3} fill="#000" />
    </g>
  );
};

export default function ValuationTimelineChart() {
  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Valuation Trajectory</h3>
        <p className="chart-subtitle">Company valuations over time (2020-2025)</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={valuationTimelineData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `$${value >= 1000 ? `${value / 1000}B` : `${value}M`}`}
            domain={[0, 2500]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-slate-600">{value}</span>}
          />
          <ReferenceLine
            y={1000}
            stroke="#475569"
            strokeDasharray="5 5"
            label={{
              value: 'Unicorn Status',
              position: 'right',
              fill: '#475569',
              fontSize: 11,
            }}
          />
          <Line
            type="monotone"
            dataKey="kalshi"
            name="Kalshi"
            stroke="#2563eb"
            strokeWidth={3}
            dot={<CustomDot dataKey="kalshi" />}
            activeDot={{ r: 8, fill: '#2563eb', stroke: '#000', strokeWidth: 2 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="polymarket"
            name="Polymarket"
            stroke="#9333ea"
            strokeWidth={3}
            dot={<CustomDot dataKey="polymarket" />}
            activeDot={{ r: 8, fill: '#9333ea', stroke: '#000', strokeWidth: 2 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="opinionLabs"
            name="Opinion Labs"
            stroke="#16a34a"
            strokeWidth={3}
            dot={<CustomDot dataKey="opinionLabs" />}
            activeDot={{ r: 8, fill: '#16a34a', stroke: '#000', strokeWidth: 2 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-blue/20 to-transparent border border-accent-blue/20">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">Kalshi</span>
            <span className="badge badge-blue">34x</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">$1.7B</p>
          <p className="text-xs text-slate-600">$50M → $1.7B (2020-2025)</p>
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-purple/20 to-transparent border border-accent-purple/20">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">Polymarket</span>
            <span className="badge badge-purple">115x</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">$2.3B</p>
          <p className="text-xs text-slate-600">$20M → $2.3B (2020-2025)</p>
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-green/20 to-transparent border border-accent-green/20">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 text-sm">Opinion Labs</span>
            <span className="badge badge-green">2.5x</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">$50M</p>
          <p className="text-xs text-slate-600">$20M → $50M (2023-2025)</p>
        </div>
      </div>
    </div>
  );
}
