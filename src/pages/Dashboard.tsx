import { motion } from 'motion/react';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, Plus, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const assets = [
  { name: 'USDT', symbol: 'USDT', balance: '1,240.50', value: '1,811,130', color: '#26a17b' },
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.0124', value: '1,178,000', color: '#f7931a' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.45', value: '2,025,000', color: '#627eea' },
  { name: 'Solana', symbol: 'SOL', balance: '12.5', value: '2,750,000', color: '#14f195' },
];

const transactions = [
  { id: '1', type: 'swap', amount: '100 USDT', receive: '₦146,000', status: 'completed', date: '2 mins ago' },
  { id: '2', type: 'deposit', amount: '250 USDT', receive: '', status: 'completed', date: '1 hour ago' },
  { id: '3', type: 'swap', amount: '0.005 BTC', receive: '₦475,000', status: 'processing', date: '5 hours ago' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex">
      {/* Side Rail */}
      <aside className="hidden xl:flex flex-col justify-between py-12 px-8 border-r border-border-subtle fixed left-0 top-0 bottom-0 z-0">
        <div className="editorial-rail-text">PORTFOLIO OVERVIEW — 02</div>
        <div className="editorial-rail-text">STABLE / CORRECTION</div>
      </aside>

      <div className="max-w-7xl mx-auto w-full xl:pl-32 space-y-16">
        {/* Overview Container */}
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 border border-border-subtle p-12 relative overflow-hidden flex flex-col justify-between h-[320px]"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-primary" />
                Aggregated Value (NGN)
              </div>
              <div className="text-7xl font-serif font-light tracking-tight italic">₦7,764,130</div>
            </div>
            
            <div className="flex gap-8">
              <button className="border border-primary text-primary hover:bg-primary hover:text-bg-deep px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all">
                Add Asset
              </button>
              <button className="border border-text-dim text-text-dim hover:border-accent hover:text-accent px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all">
                Withdraw
              </button>
            </div>

            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          </motion.div>

          <div className="lg:col-span-2 border border-border-subtle p-12 flex flex-col justify-between items-start">
            <div className="w-full">
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim mb-6 italic">Market Archive</div>
              <div className="text-3xl font-serif mb-8 italic">USDT / NGN</div>
              
              <div className="space-y-6 w-full">
                <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-text-dim">Spread 01 (Sell)</span>
                  <span className="font-serif italic text-primary">₦1,460.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-text-dim">Spread 02 (Buy)</span>
                  <span className="font-serif italic">₦1,495.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Your Assets */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Artifact Inventory
            </h2>
            <div className="space-y-0 border-t border-border-subtle">
              {assets.map((asset, index) => (
                <motion.div
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border-subtle p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-8">
                    <div className="text-[10px] uppercase tracking-widest text-text-dim italic tabular-nums">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="text-xl font-serif italic mb-1">{asset.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-text-dim font-sans">{asset.balance} {asset.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-serif italic font-light mb-1">₦{asset.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-primary font-bold">+2.4% Δ</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold flex items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full opacity-20" />
              Recent Logs
            </h2>
            <div className="border border-border-subtle overflow-hidden">
              <div className="divide-y divide-border-subtle">
                {transactions.map((tx) => (
                  <div key={tx.id} className="p-6 hover:bg-white/[0.02] transition-colors cursor-pointer flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        tx.type === 'swap' ? "bg-amber-500" : "bg-primary"
                      )} />
                      <div>
                        <div className="text-[11px] font-sans uppercase font-bold tracking-widest leading-none mb-2">{tx.type} {tx.amount}</div>
                        <div className="text-[9px] text-text-dim uppercase tracking-widest italic">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-serif italic mb-1">{tx.receive}</div>
                      <div className={cn(
                        "text-[8px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 border inline-block leading-none",
                        tx.status === 'completed' ? "border-primary text-primary" : "border-amber-500/50 text-amber-500"
                      )}>
                        {tx.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
