import { useState } from 'react';
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
import { volumeTrendData } from '../data/marketData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xl">
        <p className="text-slate-900 font-semibold mb-3">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4 text-sm mb-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-600">{entry.name}</span>
            </div>
            <span className="font-mono text-slate-900">${entry.value}B</span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Total</span>
            <span className="font-mono text-slate-900 font-bold">
              ${payload.reduce((sum, entry) => sum + entry.value, 0).toFixed(2)}B
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload, activeKey, setActiveKey }) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      {payload.map((entry, index) => (
        <button
          key={index}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 ${
            activeKey === entry.dataKey || activeKey === null
              ? 'bg-slate-100'
              : 'opacity-50'
          }`}
          onClick={() => setActiveKey(activeKey === entry.dataKey ? null : entry.dataKey)}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-slate-700">{entry.value}</span>
        </button>
      ))}
    </div>
  );
};

export default function VolumeTrendChart() {
  const [activeKey, setActiveKey] = useState(null);

  const getOpacity = (key) => {
    if (activeKey === null) return 0.8;
    return activeKey === key ? 0.9 : 0.2;
  };

  const getStrokeOpacity = (key) => {
    if (activeKey === null) return 1;
    return activeKey === key ? 1 : 0.3;
  };

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Monthly Volume Trend</h3>
        <p className="chart-subtitle">Platform trading volume over time (Jan 2024 - Jan 2025)</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={volumeTrendData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorKalshi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPolymarket" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOpinionLabs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 11 }}
            interval="preserveStartEnd"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `$${value}B`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={<CustomLegend activeKey={activeKey} setActiveKey={setActiveKey} />}
          />
          <Area
            type="monotone"
            dataKey="kalshi"
            name="Kalshi"
            stroke="#2563eb"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('kalshi')}
            fillOpacity={getOpacity('kalshi')}
            fill="url(#colorKalshi)"
          />
          <Area
            type="monotone"
            dataKey="polymarket"
            name="Polymarket"
            stroke="#9333ea"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('polymarket')}
            fillOpacity={getOpacity('polymarket')}
            fill="url(#colorPolymarket)"
          />
          <Area
            type="monotone"
            dataKey="opinionLabs"
            name="Opinion Labs"
            stroke="#16a34a"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('opinionLabs')}
            fillOpacity={getOpacity('opinionLabs')}
            fill="url(#colorOpinionLabs)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
          <p className="text-3xl font-bold text-accent-blue">+3900%</p>
          <p className="text-sm text-slate-600 mt-1">Kalshi YoY Growth</p>
        </div>
        <div className="text-center p-4 bg-accent-purple/10 rounded-lg border border-accent-purple/20">
          <p className="text-3xl font-bold text-accent-purple">-44%</p>
          <p className="text-sm text-slate-600 mt-1">Polymarket Q4 Decline</p>
        </div>
        <div className="text-center p-4 bg-accent-green/10 rounded-lg border border-accent-green/20">
          <p className="text-3xl font-bold text-accent-green">+1400%</p>
          <p className="text-sm text-slate-600 mt-1">Opinion Labs YoY Growth</p>
        </div>
      </div>
    </div>
  );
}
