import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Smartphone, CheckCircle2, History as HistoryIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Verify() {
  const steps = [
    { title: 'Email Authenticated', status: 'completed' },
    { title: 'BVN Identification', status: 'pending' },
    { title: 'Biometric Handshake', status: 'not_started' },
    { title: 'Artifact Validation', status: 'not_started' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex">
      {/* Side Rail */}
      <aside className="hidden xl:flex flex-col justify-between py-12 px-8 border-r border-border-subtle fixed left-0 top-0 bottom-0 z-0">
        <div className="editorial-rail-text">TRUST PROTOCOL — 04</div>
        <div className="editorial-rail-text">KYC / AML COMPLIANCE</div>
      </aside>

      <div className="max-w-7xl mx-auto w-full xl:pl-32 space-y-16">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-primary" />
            Verification
          </div>
          <h1 className="text-6xl font-serif font-light leading-tight italic mb-6">Identity Handshake</h1>
          <p className="text-text-dim text-base leading-relaxed">Secure your account and unlock higher exchange volumes by validating your digital identity artifacts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-0 border-t border-border-subtle">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-8 border-b border-border-subtle flex items-center justify-between group cursor-pointer transition-all",
                  step.status === 'pending' ? "bg-white/[0.02]" : ""
                )}
              >
                <div className="flex items-center gap-8">
                  <div className="text-[10px] uppercase tracking-widest text-text-dim italic tabular-nums">
                    STEP 0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif italic mb-1">{step.title}</h3>
                    <div className={cn(
                      "text-[9px] uppercase tracking-[0.2em] font-bold font-sans",
                      step.status === 'completed' ? "text-primary" : 
                      step.status === 'pending' ? "text-amber-500" : "text-text-dim"
                    )}>
                      {step.status === 'completed' ? 'Verified' : 
                       step.status === 'pending' ? 'In Progress' : 'Pending Action'}
                    </div>
                  </div>
                </div>
                
                {step.status === 'not_started' && (
                  <div className="text-[9px] uppercase tracking-[0.15em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Execute Handshake
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="p-12 border border-border-subtle flex flex-col justify-center">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold mb-8 flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Upgrade Logic
            </h4>
            <ul className="space-y-6">
              {[
                'Unlock daily limits up to ₦5,000,000',
                'Access structural priority support',
                'Enhanced account restoration protocols',
                'West African regulatory compliance'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1 h-1 bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-text-dim leading-relaxed italic font-serif">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
