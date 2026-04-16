import { Link, useLocation } from 'react-router-dom';
import { Wallet, ArrowLeftRight, History, Settings, ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Swap', path: '/', icon: ArrowLeftRight },
  { name: 'Dashboard', path: '/dashboard', icon: Wallet },
  { name: 'History', path: '/history', icon: History },
  { name: 'Verify', path: '/verify', icon: ShieldCheck },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-serif italic font-light tracking-tight">Dexter.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.2em] transition-all relative py-1",
                    location.pathname === item.path
                      ? "text-primary border-b border-primary"
                      : "text-text-dim hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <button className="border border-text-dim hover:border-primary text-text-dim hover:text-primary transition-all px-6 py-2 text-[10px] uppercase tracking-[0.2em] ml-4">
                Connect
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-dim hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3",
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-text-dim hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <button className="w-full bg-primary hover:bg-primary-dark text-black px-4 py-3 rounded-xl font-bold text-center">
                  Connect Wallet
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
