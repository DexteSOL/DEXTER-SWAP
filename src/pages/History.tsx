import { motion } from 'motion/react';
import { Search, Filter, ArrowDownLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const historyItems = [
  { id: 'TX-98421', type: 'swap', asset: 'USDT', amount: '100.00', fiat: '₦146,000', status: 'completed', date: '2026-04-16 12:45' },
  { id: 'TX-98420', type: 'deposit', asset: 'USDT', amount: '250.00', fiat: '', status: 'completed', date: '2026-04-16 11:20' },
  { id: 'TX-98419', type: 'swap', asset: 'BTC', amount: '0.005', fiat: '₦475,000', status: 'processing', date: '2026-04-16 09:15' },
  { id: 'TX-98418', type: 'withdraw', asset: 'NGN', amount: '₦50,000', fiat: '', status: 'failed', date: '2026-04-15 18:30' },
  { id: 'TX-98417', type: 'swap', asset: 'ETH', amount: '0.1', fiat: '₦450,000', status: 'completed', date: '2026-04-15 14:10' },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex">
      {/* Side Rail */}
      <aside className="hidden xl:flex flex-col justify-between py-12 px-8 border-r border-border-subtle fixed left-0 top-0 bottom-0 z-0">
        <div className="editorial-rail-text">CHRONOLOGICAL LOG — 03</div>
        <div className="editorial-rail-text">PUBLIC / AUDIT</div>
      </aside>

      <div className="max-w-7xl mx-auto w-full xl:pl-32 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-border-subtle pb-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-primary" />
              Journal Entry
            </div>
            <h1 className="text-6xl font-serif font-light leading-none italic">Transaction History</h1>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative flex-grow md:w-64 border-b border-border-subtle focus-within:border-primary transition-colors">
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-text-dim" size={14} />
              <input 
                type="text" 
                placeholder="PROBE TX ID..."
                className="w-full bg-transparent py-2 text-[11px] uppercase tracking-[0.2em] outline-none placeholder:text-text-dim/50"
              />
            </div>
          </div>
        </div>

        <div className="border border-border-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-subtle text-[10px] text-text-dim uppercase tracking-[0.2em]">
                  <th className="px-8 py-6 font-bold">Artifact Type</th>
                  <th className="px-8 py-6 font-bold">Status</th>
                  <th className="px-8 py-6 font-bold">Quantum</th>
                  <th className="px-8 py-6 font-bold">Value (NGN)</th>
                  <th className="px-8 py-6 font-bold">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {historyItems.map((item, index) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group hover:bg-white/[0.01] transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-6">
                        <div className="text-[10px] uppercase tracking-widest text-text-dim italic tabular-nums">
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div>
                          <div className="text-lg font-serif italic mb-1 uppercase tracking-tight">{item.type} {item.asset}</div>
                          <div className="text-[9px] uppercase tracking-[0.2em] text-text-dim font-mono">{item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className={cn(
                        "text-[9px] uppercase font-bold tracking-[0.1em] border px-3 py-1 inline-block",
                        item.status === 'completed' ? "border-primary text-primary" : 
                        item.status === 'processing' ? "border-amber-500 text-amber-500" : "border-red-500 text-red-500"
                      )}>
                        {item.status}
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="text-lg font-serif italic">{item.amount} <span className="text-[10px] uppercase tracking-widest font-sans not-italic">{item.asset}</span></div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="text-lg font-serif italic">{item.fiat || '—'}</div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="text-[10px] uppercase tracking-[0.1em] text-text-dim font-sans">{item.date}</div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
