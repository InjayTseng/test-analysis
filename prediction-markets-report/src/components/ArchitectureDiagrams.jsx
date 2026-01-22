import { useState } from 'react';
import { motion } from 'framer-motion';
import { architectureData, architectureComparisonData } from '../data/marketData';
import { Layers, ArrowDown, Server, Database, Shield, Cpu, Globe, Zap } from 'lucide-react';

const tabs = [
  { id: 'kalshi', label: 'Kalshi', color: '#2563eb' },
  { id: 'polymarket', label: 'Polymarket', color: '#9333ea' },
  { id: 'opinionLabs', label: 'Opinion Labs', color: '#16a34a' },
];

const layerIcons = {
  'User Interface': Globe,
  'API Layer': Server,
  'Backend Services': Server,
  'Matching Engine': Zap,
  'Clearinghouse': Database,
  'Infrastructure': Cpu,
  'Security': Shield,
  'Security Layer': Shield,
  'Polygon Blockchain': Layers,
  'UMA Oracle System': Database,
  'Opinion.Trade': Globe,
  'Opinion AI Oracle': Cpu,
  'Chainlink Integration': Database,
  'BNB Chain': Layers,
};

function ArchitectureLayer({ layer, index, color, total }) {
  const Icon = layerIcons[layer.name] || Layers;
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Layer Box */}
      <div
        className="relative border-2 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: color + '40' }}
      >
        {/* Layer Header */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: color + '20' }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-sm">{layer.name}</h4>
            <p className="text-xs text-slate-500">{layer.description}</p>
          </div>
        </div>

        {/* Components */}
        <div className="flex flex-wrap gap-2">
          {layer.components.map((component, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: color + '15',
                color: color,
              }}
            >
              {component}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow Connector */}
      {!isLast && (
        <div className="flex justify-center py-2">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>
      )}
    </motion.div>
  );
}

function ArchitectureDiagram({ platform }) {
  const data = architectureData[platform];

  return (
    <div className="space-y-0">
      {data.layers.map((layer, index) => (
        <ArchitectureLayer
          key={layer.name}
          layer={layer}
          index={index}
          color={data.color}
          total={data.layers.length}
        />
      ))}
    </div>
  );
}

function TechStackSummary({ platform }) {
  const data = architectureData[platform];
  const stack = data.techStack;

  return (
    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
      <h4 className="font-semibold text-slate-900 mb-3 text-sm">Tech Stack Summary</h4>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs text-slate-500 mb-1">Frontend</p>
          <p className="text-slate-700">{stack.frontend?.join(', ') || 'N/A'}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Backend</p>
          <p className="text-slate-700">{stack.backend?.join?.(', ') || stack.backend || 'N/A'}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Settlement</p>
          <p className="text-slate-700">{stack.settlement}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Oracle</p>
          <p className="text-slate-700">{stack.oracle}</p>
        </div>
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
            <th className="text-left py-3 px-4 font-semibold" style={{ color: '#2563eb' }}>Kalshi</th>
            <th className="text-left py-3 px-4 font-semibold" style={{ color: '#9333ea' }}>Polymarket</th>
            <th className="text-left py-3 px-4 font-semibold" style={{ color: '#16a34a' }}>Opinion Labs</th>
          </tr>
        </thead>
        <tbody>
          {architectureComparisonData.map((row, index) => (
            <tr key={row.feature} className={index % 2 === 0 ? 'bg-slate-50' : ''}>
              <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
              <td className="py-3 px-4 text-slate-600">{row.kalshi}</td>
              <td className="py-3 px-4 text-slate-600">{row.polymarket}</td>
              <td className="py-3 px-4 text-slate-600">{row.opinionLabs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArchitectureDiagrams() {
  const [activeTab, setActiveTab] = useState('kalshi');
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="architecture" className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">System Architecture</h2>
          <p className="section-subtitle">
            Technical infrastructure comparison of the three major prediction market platforms
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
            <button
              onClick={() => setShowComparison(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                !showComparison ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Diagrams
            </button>
            <button
              onClick={() => setShowComparison(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                showComparison ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comparison Table
            </button>
          </div>
        </div>

        {showComparison ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card"
          >
            <ComparisonTable />
          </motion.div>
        ) : (
          <>
            {/* Platform Tabs */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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

            {/* Architecture Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-5 h-5" style={{ color: tabs.find(t => t.id === activeTab)?.color }} />
                  <h3 className="font-semibold text-slate-900">
                    {architectureData[activeTab].name} Architecture
                  </h3>
                </div>
                <ArchitectureDiagram platform={activeTab} />
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-5 h-5" style={{ color: tabs.find(t => t.id === activeTab)?.color }} />
                  <h3 className="font-semibold text-slate-900">
                    Technical Details
                  </h3>
                </div>

                {/* Key Characteristics */}
                <div className="space-y-4 mb-6">
                  {activeTab === 'kalshi' && (
                    <>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-900 mb-2">Centralized Architecture</h4>
                        <p className="text-sm text-blue-700">
                          Traditional financial infrastructure with proprietary matching engine and CFTC-registered clearinghouse.
                          Offers institutional-grade connectivity via FIX 4.4 protocol for high-frequency trading.
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-900 mb-2">Enterprise Infrastructure</h4>
                        <p className="text-sm text-blue-700">
                          AWS cloud-native deployment with Kubernetes orchestration. NIST 800 security compliance
                          ensures bank-grade protection for USD settlements.
                        </p>
                      </div>
                    </>
                  )}

                  {activeTab === 'polymarket' && (
                    <>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <h4 className="font-medium text-purple-900 mb-2">Hybrid Architecture</h4>
                        <p className="text-sm text-purple-700">
                          Off-chain order matching for speed combined with on-chain settlement on Polygon L2.
                          Uses Gnosis Conditional Token Framework (ERC-1155) for position tokens.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <h4 className="font-medium text-purple-900 mb-2">UMA Oracle</h4>
                        <p className="text-sm text-purple-700">
                          Decentralized dispute resolution via Optimistic Oracle. Anyone can propose resolutions
                          by posting a bond; disputes resolved through economic incentives within 2-hour liveness period.
                        </p>
                      </div>
                    </>
                  )}

                  {activeTab === 'opinionLabs' && (
                    <>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <h4 className="font-medium text-green-900 mb-2">AI-Powered Oracle</h4>
                        <p className="text-sm text-green-700">
                          First decentralized multi-agent AI oracle. Uses Claude, ChatGPT, and Grok as a "jury"
                          to analyze and resolve complex, unstructured economic data.
                        </p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <h4 className="font-medium text-green-900 mb-2">Security Architecture</h4>
                        <p className="text-sm text-green-700">
                          TEE (Trusted Execution Environment) for secure AI processing combined with
                          human reviewer oversight layer for additional verification.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <TechStackSummary platform={activeTab} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
