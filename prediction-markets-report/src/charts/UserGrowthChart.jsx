import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { userGrowthData } from '../data/marketData';

const formatUsers = (value) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
        <p className="text-slate-900 font-semibold mb-3">{label}</p>
        {payload
          .sort((a, b) => b.value - a.value)
          .map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-6 text-sm mb-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-slate-600">{entry.name}</span>
              </div>
              <span className="font-mono text-slate-900">{formatUsers(entry.value)}</span>
            </div>
          ))}
      </div>
    );
  }
  return null;
};

export default function UserGrowthChart() {
  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">User Growth Trajectory</h3>
        <p className="chart-subtitle">Registered users by platform (Q1 2024 - Q1 2025)</p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={userGrowthData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="userColorKalshi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="userColorPolymarket" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="userColorOpinionLabs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="quarter"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={formatUsers}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-slate-600">{value}</span>}
          />
          <Area
            type="monotone"
            dataKey="kalshi"
            name="Kalshi"
            stroke="#2563eb"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#userColorKalshi)"
          />
          <Area
            type="monotone"
            dataKey="polymarket"
            name="Polymarket"
            stroke="#9333ea"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#userColorPolymarket)"
          />
          <Area
            type="monotone"
            dataKey="opinionLabs"
            name="Opinion Labs"
            stroke="#16a34a"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#userColorOpinionLabs)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-blue/10 to-transparent border border-accent-blue/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-600 text-sm">Kalshi</span>
            <span className="badge badge-blue">+700%</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">1.2M</p>
          <p className="text-xs text-slate-600 mt-1">From 150K (Q1 2024)</p>
          <div className="mt-3">
            <div className="progress-bar">
              <div className="progress-fill bg-accent-blue" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-purple/10 to-transparent border border-accent-purple/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-600 text-sm">Polymarket</span>
            <span className="badge badge-purple">+525%</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">500K</p>
          <p className="text-xs text-slate-600 mt-1">From 80K (Q1 2024)</p>
          <div className="mt-3">
            <div className="progress-bar">
              <div className="progress-fill bg-accent-purple" style={{ width: '42%' }} />
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-accent-green/10 to-transparent border border-accent-green/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-600 text-sm">Opinion Labs</span>
            <span className="badge badge-green">+1900%</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">100K</p>
          <p className="text-xs text-slate-600 mt-1">From 5K (Q1 2024)</p>
          <div className="mt-3">
            <div className="progress-bar">
              <div className="progress-fill bg-accent-green" style={{ width: '8%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
