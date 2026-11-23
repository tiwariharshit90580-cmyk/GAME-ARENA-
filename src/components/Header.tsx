import { Download, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { APP_CONFIG } from '../constants/appConfig';

interface HeaderProps {
  onDownloadTrigger: () => void;
}

export function BrandLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dimensions =
    size === 'sm' ? 'h-9 w-9 rounded-lg' : 'h-10 w-10 rounded-xl';
  return (
    <img
      src={APP_CONFIG.assets.officialLogo}
      alt="GAME ARENA Official Logo"
      referrerPolicy="no-referrer"
      className={`${dimensions} aspect-square shrink-0 border border-[#FFD000]/45 bg-[#050505] object-contain`}
    />
  );
}

const NAV_LINKS = [
  { label: 'Statistics', href: '#statistics' },
  { label: 'Features', href: '#features' },
  { label: 'How to Play', href: '#how-to-play' },
  { label: 'Get the App', href: '#get-the-app' },
];

export function Header({ onDownloadTrigger }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
        {/* Left: Uploaded GAME ARENA Logo + Brand Name */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
        >
          <BrandLogo size="md" />
          <span className="font-display text-2xl font-extrabold tracking-wider text-white">
            GAME <span className="text-[#FFD000]">ARENA</span>
          </span>
        </a>

        {/* Center: Clean Single-Line Desktop Nav Links */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative shrink-0 whitespace-nowrap rounded py-1 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#FFD000] transition-transform duration-150 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right: Hamburger Menu Button (always visible on mobile/tablet; crisp square rounded button matching reference) */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={APP_CONFIG.directDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadTrigger}
            className="btn-gold-gradient hidden h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 text-xs font-extrabold tracking-wide uppercase transition-all duration-150 active:scale-[0.98] lg:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Download className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>Download App</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#111111] text-white transition-colors duration-150 hover:border-[#FFD000]/60 hover:text-[#FFD000] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-[#0E0F12] px-4 py-4 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 items-center justify-between rounded-xl px-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-[#FFD000]/10 hover:text-[#FFD000]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#FFD000]">→</span>
                </a>
              ))}
              <a
                href={APP_CONFIG.directDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  onDownloadTrigger();
                  setMenuOpen(false);
                }}
                className="btn-gold-gradient mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-extrabold tracking-wide uppercase"
              >
                <Download className="h-4 w-4 stroke-[2.5]" />
                <span>Download App (v{APP_CONFIG.version})</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
