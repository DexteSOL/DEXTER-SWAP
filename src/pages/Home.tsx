import { useState, useEffect } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const COINS = [
  { id: 'usdt', name: 'USDT', symbol: 'USDT', color: '#26a17b', rate: 1460 },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', color: '#f7931a', rate: 95000000 },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', color: '#627eea', rate: 4500000 },
  { id: 'sol', name: 'Solana', symbol: 'SOL', color: '#14f195', rate: 220000 },
];

export default function Home() {
  const [fromCoin, setFromCoin] = useState(COINS[0]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0');

  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      const result = parseFloat(fromAmount) * fromCoin.rate;
      setToAmount(result.toLocaleString('en-NG', { maximumFractionDigits: 2 }));
    } else {
      setToAmount('0');
    }
  }, [fromAmount, fromCoin]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center">
      {/* Side Rail - Decorative */}
      <aside className="hidden xl:flex flex-col justify-between py-12 px-8 border-r border-border-subtle fixed left-0 top-0 bottom-0 z-0">
        <div className="editorial-rail-text">EXTHANGE ARCHIVE — 01</div>
        <div className="editorial-rail-text">NIGERIA / WEST AFRICA</div>
      </aside>

      <div className="max-w-7xl mx-auto w-full xl:pl-32 grid lg:grid-cols-5 gap-16 items-center mb-24">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            Instant Digital Liquidity
          </div>
          <h1 className="text-7xl md:text-9xl font-serif font-light leading-[0.85] tracking-tight mb-12">
            The Art of <span>Reduction</span>
          </h1>
          <div className="editorial-line mb-12 opacity-50" />
          <p className="font-sans text-accent/80 text-base md:text-lg max-w-sm mb-12 leading-relaxed">
            Exploring the intersection of brutalist architecture and digital minimalism. Dexter is the next generation of visual artifacts for currency exchange.
          </p>

          <div className="flex gap-20">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim">Established</div>
              <div className="text-sm font-medium">MMXXIV</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim">Curated By</div>
              <div className="text-sm font-medium">DEXTESOL STUDIO</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Swap Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm bg-bg-card border border-border-subtle p-8 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-12 border-b border-border-subtle pb-4">
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">Exchange Terminal</h2>
              <div className="text-[10px] uppercase tracking-[0.1em] text-primary font-bold">
                Live Node
              </div>
            </div>

            {/* Input From */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.1em] text-text-dim">
                <span>You Send</span>
                <span>FIG 01. SOURCE</span>
              </div>
              <div className="border border-border-subtle p-6 flex items-center justify-between hover:border-text-dim transition-colors transition-all focus-within:border-primary">
                <input
                  type="number"
                  placeholder="0.00"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent border-none outline-none text-4xl font-serif font-light w-full placeholder:text-text-dim italic"
                />
                <select
                  value={fromCoin.id}
                  onChange={(e) => setFromCoin(COINS.find(c => c.id === e.target.value)!)}
                  className="bg-transparent border-none text-xs font-bold uppercase tracking-widest cursor-pointer outline-none ml-4"
                  style={{ color: fromCoin.color }}
                >
                  {COINS.map(coin => (
                    <option key={coin.id} value={coin.id} className="bg-bg-card text-accent">
                      {coin.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="h-[1px] bg-border-subtle w-12 mx-auto mb-8" />

            {/* Input To */}
            <div className="space-y-4 mb-12">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.1em] text-text-dim">
                <span>You Receive</span>
                <span>FIG 02. TARGET</span>
              </div>
              <div className="border border-border-subtle p-6 flex items-center justify-between">
                <div className="text-4xl font-serif font-light italic">{toAmount}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#008751]">
                  NGN
                </div>
              </div>
            </div>

            <button className="w-full border border-primary hover:bg-primary hover:text-bg-deep text-primary font-sans font-bold py-5 text-[11px] uppercase tracking-[0.3em] transition-all">
              Execute Handshake
            </button>
            
            <div className="mt-8 pt-8 border-t border-border-subtle flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-text-dim">
              <span>Time to Settle</span>
              <span>&lt; 300 Seconds</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Grid - Editorial Style */}
      <div className="max-w-7xl mx-auto w-full xl:pl-32 grid md:grid-cols-3 gap-0 border-t border-border-subtle">
        <div className="p-12 border-r border-border-subtle group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim mb-12 flex items-center gap-3">
            <Zap size={14} className="text-primary" />
            System Logic 01
          </div>
          <h3 className="text-3xl font-serif mb-6 italic">Instant Payouts</h3>
          <p className="text-text-dim text-sm leading-relaxed max-w-[240px]">Automated settlement systems ensure recursive Naira payouts within minutes of execution.</p>
        </div>
        
        <div className="p-12 border-r border-border-subtle group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim mb-12 flex items-center gap-3">
            <ShieldCheck size={14} className="text-primary" />
            System Logic 02
          </div>
          <h3 className="text-3xl font-serif mb-6 italic">Bank Grade Shield</h3>
          <p className="text-text-dim text-sm leading-relaxed max-w-[240px]">Multi-sig vaults and encrypted handshake protocols protect visual and financial artifacts.</p>
        </div>

        <div className="p-12 group hover:bg-white/[0.02] transition-colors">
          <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim mb-12 flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            System Logic 03
          </div>
          <h3 className="text-3xl font-serif mb-6 italic">Optimized Liquidity</h3>
          <p className="text-text-dim text-sm leading-relaxed max-w-[240px]">Aggregated data streams across global exchanges to ensure the highest artifact value.</p>
        </div>
      </div>
    </div>
  );
}
