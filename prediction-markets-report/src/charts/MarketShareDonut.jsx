import { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
} from 'recharts';
import { marketShareData } from '../data/marketData';

const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, value
  } = props;

  return (
    <g>
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#0f172a" className="text-2xl font-bold">
        {payload.name}
      </text>
      <text x={cx} y={cy + 15} textAnchor="middle" fill="#475569" className="text-sm">
        {value}% Market Share
      </text>
      <text x={cx} y={cy + 35} textAnchor="middle" fill="#64748b" className="text-xs">
        {payload.volume} Volume
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        style={{ filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.5))' }}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 15}
        outerRadius={outerRadius + 20}
        fill={fill}
        opacity={0.3}
      />
    </g>
  );
};

export default function MarketShareDonut() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Market Share Distribution</h3>
        <p className="chart-subtitle">2025 prediction market share by platform</p>
      </div>

      <div className="flex items-center justify-between">
        <ResponsiveContainer width="60%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={marketShareData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              onMouseEnter={onPieEnter}
              strokeWidth={0}
            >
              {marketShareData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="w-[35%] space-y-4">
          {marketShareData.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-slate-50 ring-1 ring-slate-200'
                  : 'hover:bg-slate-50'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <p className="text-slate-900 font-medium">{item.name}</p>
                  <p className="text-xs text-slate-600">{item.volume}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-900">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-4 h-4 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-600">
            <span className="text-slate-900 font-medium">Market Reversal:</span> Kalshi overtook Polymarket in Q4 2024, reversing 3 years of Polymarket dominance
          </span>
        </div>
      </div>
    </div>
  );
}
