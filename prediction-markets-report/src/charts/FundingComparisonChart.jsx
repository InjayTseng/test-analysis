import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { fundingData } from '../data/marketData';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-xl min-w-[200px]">
        <p className="text-slate-900 font-semibold mb-3">{data.company}</p>
        <div className="space-y-2 text-sm">
          {data.seed > 0 && (
            <div className="flex justify-between">
              <span className="text-slate-600">Seed</span>
              <span className="font-mono text-slate-900">${data.seed}M</span>
            </div>
          )}
          {data.seriesA > 0 && (
            <div className="flex justify-between">
              <span className="text-slate-600">Series A</span>
              <span className="font-mono text-slate-900">${data.seriesA}M</span>
            </div>
          )}
          {data.seriesB > 0 && (
            <div className="flex justify-between">
              <span className="text-slate-600">Series B</span>
              <span className="font-mono text-slate-900">${data.seriesB}M</span>
            </div>
          )}
          {data.seriesC > 0 && (
            <div className="flex justify-between">
              <span className="text-slate-600">Series C</span>
              <span className="font-mono text-slate-900">${data.seriesC}M</span>
            </div>
          )}
          {data.seriesD > 0 && (
            <div className="flex justify-between">
              <span className="text-slate-600">Series D</span>
              <span className="font-mono text-slate-900">${data.seriesD}M</span>
            </div>
          )}
          <div className="border-t border-border pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-600">Total Raised</span>
              <span className="font-mono text-slate-900">${data.totalRaised}M</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-slate-600">Valuation</span>
              <span className="font-mono text-accent-cyan">${data.valuation >= 1000 ? `${data.valuation / 1000}B` : `${data.valuation}M`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function FundingComparisonChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const sortedData = [...fundingData].sort((a, b) => b.totalRaised - a.totalRaised);

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Funding Comparison</h3>
        <p className="chart-subtitle">Total capital raised by platform</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 10, right: 80, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `$${value}M`}
          />
          <YAxis
            type="category"
            dataKey="company"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#1e293b', fontSize: 14, fontWeight: 500 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar
            dataKey="totalRaised"
            radius={[0, 8, 8, 0]}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {sortedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
                style={{
                  filter: activeIndex === index ? `drop-shadow(0 0 10px ${entry.color})` : 'none',
                }}
              />
            ))}
            <LabelList
              dataKey="totalRaised"
              position="right"
              formatter={(value) => `$${value}M`}
              fill="#1e293b"
              fontSize={14}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {sortedData.map((company, index) => (
          <div
            key={company.company}
            className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
              activeIndex === index
                ? 'bg-card-hover border-border-highlight scale-[1.02]'
                : 'bg-secondary border-border hover:bg-card-hover'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: company.color }}
              />
              <span className="font-medium text-slate-900">{company.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-600 text-xs">Raised</p>
                <p className="text-slate-900 font-semibold">${company.totalRaised}M</p>
              </div>
              <div>
                <p className="text-slate-600 text-xs">Valuation</p>
                <p className="text-accent-cyan font-semibold">
                  ${company.valuation >= 1000 ? `${company.valuation / 1000}B` : `${company.valuation}M`}
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-slate-600 text-xs">Valuation/Raised Multiple</p>
              <p className="text-slate-900 font-bold text-lg">
                {(company.valuation / company.totalRaised).toFixed(1)}x
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
