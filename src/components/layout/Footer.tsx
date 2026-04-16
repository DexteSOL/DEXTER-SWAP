import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 bg-bg-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black font-mono">
                DX
              </div>
              <span className="text-xl font-bold tracking-tight">DEXTER</span>
            </Link>
            <p className="text-text-dim text-sm leading-relaxed">
              Nigeria's most reliable bridge between digital assets and local currency. Fast, secure, and always at your service.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link to="/" className="hover:text-primary transition-colors">Swap Engine</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Multi-coin Wallet</Link></li>
              <li><Link to="/verify" className="hover:text-primary transition-colors">BVN Verification</Link></li>
              <li><Link to="/api" className="hover:text-primary transition-colors">DEXTER API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><a href="https://t.me/DexteSOL" className="hover:text-primary transition-colors">Telegram Chat</a></li>
              <li><a href="mailto:dextesol16@gmail.com" className="hover:text-primary transition-colors">Email Support</a></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/status" className="hover:text-primary transition-colors">Network Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/aml" className="hover:text-primary transition-colors">AML Policy</Link></li>
              <li><Link to="/kyc" className="hover:text-primary transition-colors">KYC Requirements</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-dim">
          <p>© 2026 Dextesol. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Server Time: 2026-04-16T08:50Z</span>
            <span>v1.0.4-stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
