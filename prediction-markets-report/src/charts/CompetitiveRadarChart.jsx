import { useState } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { competitiveRadarData } from '../data/marketData';

const CustomLegend = ({ payload, activeKey, setActiveKey }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {payload.map((entry, index) => (
        <button
          key={index}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 border ${
            activeKey === entry.dataKey || activeKey === null
              ? 'bg-card-hover border-border-highlight'
              : 'opacity-40 border-transparent'
          }`}
          onClick={() => setActiveKey(activeKey === entry.dataKey ? null : entry.dataKey)}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium text-slate-900">{entry.value}</span>
        </button>
      ))}
    </div>
  );
};

export default function CompetitiveRadarChart() {
  const [activeKey, setActiveKey] = useState(null);

  const getOpacity = (key) => {
    if (activeKey === null) return 0.6;
    return activeKey === key ? 0.8 : 0.1;
  };

  const getStrokeOpacity = (key) => {
    if (activeKey === null) return 1;
    return activeKey === key ? 1 : 0.2;
  };

  return (
    <div className="chart-container">
      <div className="mb-6">
        <h3 className="chart-title">Competitive Analysis</h3>
        <p className="chart-subtitle">Multi-dimensional platform comparison</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={competitiveRadarData}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#64748b', fontSize: 10 }}
            axisLine={false}
          />
          <Radar
            name="Kalshi"
            dataKey="kalshi"
            stroke="#2563eb"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('kalshi')}
            fill="#2563eb"
            fillOpacity={getOpacity('kalshi')}
          />
          <Radar
            name="Polymarket"
            dataKey="polymarket"
            stroke="#9333ea"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('polymarket')}
            fill="#9333ea"
            fillOpacity={getOpacity('polymarket')}
          />
          <Radar
            name="Opinion Labs"
            dataKey="opinionLabs"
            stroke="#16a34a"
            strokeWidth={2}
            strokeOpacity={getStrokeOpacity('opinionLabs')}
            fill="#16a34a"
            fillOpacity={getOpacity('opinionLabs')}
          />
          <Legend
            content={<CustomLegend activeKey={activeKey} setActiveKey={setActiveKey} />}
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-accent-blue/10 rounded-lg border border-accent-blue/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-accent-blue"></div>
            <span className="font-medium text-slate-900">Kalshi</span>
          </div>
          <p className="text-sm text-slate-600">
            Strongest in <span className="text-accent-blue font-medium">Regulatory Status</span> and{' '}
            <span className="text-accent-blue font-medium">Market Share</span>
          </p>
        </div>
        <div className="p-4 bg-accent-purple/10 rounded-lg border border-accent-purple/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
            <span className="font-medium text-slate-900">Polymarket</span>
          </div>
          <p className="text-sm text-slate-600">
            Leads in <span className="text-accent-purple font-medium">Technology</span> and{' '}
            <span className="text-accent-purple font-medium">Market Coverage</span>
          </p>
        </div>
        <div className="p-4 bg-accent-green/10 rounded-lg border border-accent-green/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-accent-green"></div>
            <span className="font-medium text-slate-900">Opinion Labs</span>
          </div>
          <p className="text-sm text-slate-600">
            Competitive in <span className="text-accent-green font-medium">User Experience</span> and{' '}
            <span className="text-accent-green font-medium">Technology</span>
          </p>
        </div>
      </div>
    </div>
  );
}
