import { TrendingUp, FileText, Shield, Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                <TrendingUp className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <span className="font-bold text-slate-900">Prediction Markets</span>
                <span className="text-xs text-slate-600 block">Intelligence Report</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4 max-w-md">
              Comprehensive VC-style due diligence on the prediction markets industry, featuring
              in-depth analysis of market leaders Kalshi, Polymarket, and Opinion Labs.
            </p>
            <div className="flex items-center gap-4">
              <span className="badge badge-blue">Q1 2026</span>
              <span className="badge badge-purple">Version 1.0</span>
            </div>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Database className="w-4 h-4 text-accent-green" />
              Data Sources
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Company SEC Filings</li>
              <li>CFTC Public Records</li>
              <li>Crunchbase & PitchBook</li>
              <li>Platform API Data</li>
              <li>Industry Publications</li>
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent-purple" />
              Methodology
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Multi-source verification</li>
              <li>Quantitative analysis</li>
              <li>Expert interviews</li>
              <li>Competitive benchmarking</li>
              <li>Risk-adjusted projections</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Important Disclaimer</h4>
              <p className="text-sm text-slate-600">
                This report is provided for informational and educational purposes only. It does not
                constitute investment advice, financial advice, trading advice, or any other sort of
                advice. You should not treat any of the report's content as such. The authors do not
                recommend that any securities or prediction market positions be bought, sold, or held
                by you. Do your own due diligence and consult your financial advisor before making
                any investment decisions. All investments involve risk, including the possible loss
                of principal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4 md:mb-0">
            © 2026 Prediction Markets Intelligence Report. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span>Last Updated: January 2026</span>
            <span>•</span>
            <span>Data as of Q1 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
