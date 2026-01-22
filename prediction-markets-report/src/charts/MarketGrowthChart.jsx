import { useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { marketGrowthData } from '../data/marketData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xl">
        <p className="text-slate-900 font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.name === 'Volume' ? `$${entry.value}B` : `${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MarketGrowthChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBarColor = (index) => {
    const colors = ['#475569', '#64748b', '#2563eb', '#3b82f6'];
    return activeIndex === index ? '#22d3ee' : colors[index];
  };

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="chart-title">Market Volume Growth</h3>
          <p className="chart-subtitle">Prediction markets annual trading volume</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent-blue"></div>
            <span className="text-slate-600">Volume ($B)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-green"></div>
            <span className="text-slate-600">YoY Growth</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart
          data={marketGrowthData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `$${value}B`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="left"
            dataKey="volume"
            name="Volume"
            radius={[8, 8, 0, 0]}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {marketGrowthData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="growth"
            name="Growth"
            stroke="#16a34a"
            strokeWidth={3}
            dot={{ fill: '#16a34a', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, fill: '#16a34a', stroke: '#000' }}
            connectNulls
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
        {marketGrowthData.map((item, index) => (
          <div
            key={item.year}
            className={`text-center p-3 rounded-lg transition-all duration-200 ${
              activeIndex === index ? 'bg-slate-50 ring-1 ring-accent-blue/30' : ''
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <p className="text-2xl font-bold text-slate-900">${item.volume}B</p>
            <p className="text-sm text-slate-600">{item.year}</p>
            {item.growth && (
              <p className="text-xs text-accent-green font-medium mt-1">+{item.growth}% YoY</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
