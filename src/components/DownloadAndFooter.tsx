import {
  ArrowUp,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  Smartphone,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { APP_CONFIG } from '../constants/appConfig';
import { BrandLogo } from './Header';

interface DownloadAndFooterProps {
  onDownloadTrigger: () => void;
}

type PolicyId = 'about' | 'contact' | 'privacy' | 'terms' | 'fairplay';

const POLICY_DOCS: Record<
  PolicyId,
  { title: string; subtitle: string; paragraphs: string[] }
> = {
  about: {
    title: 'About Us',
    subtitle: 'GAME ARENA Competitive Mobile Platform',
    paragraphs: [
      'GAME ARENA is an Android esports tournament platform focused on structured Free Fire Solo, Duo, and Squad competitions.',
      'Built for lightweight speed (5.81 MB APK) and reliable match organization, GAME ARENA gives players a clean arena to register, check in, and compete.',
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Support & Tournament Inquiries',
    paragraphs: [
      'For assistance with Free Fire brackets, APK installation, or account UID verification, reach our tournament desk directly through the Support menu inside the GAME ARENA Android app.',
      'Always verify you are downloading the official release via our verified APK download link.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Player Data & Security',
    paragraphs: [
      'GAME ARENA collects only the information necessary to manage tournament registrations, verify Free Fire player UIDs, and update competitive rankings.',
      'Any slot registration entered on this website is stored locally in your browser session unless submitted inside the Android app.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Platform Usage Guidelines',
    paragraphs: [
      'Players participating in GAME ARENA tournaments must use an authentic Free Fire account, join rooms within the check-in window, and follow host instructions.',
      'GAME ARENA reserves the right to remove duplicate entries or accounts violating fair conduct rules.',
    ],
  },
  fairplay: {
    title: 'Fair Play Policy',
    subtitle: 'Zero-Tolerance Integrity Standard',
    paragraphs: [
      'Third-party scripts, unauthorized modifications, teaming in Solo matches, and emulator spoofing in mobile-only brackets are strictly prohibited.',
      'All match results are reviewed to maintain an honest, skill-driven arena for every player.',
    ],
  },
};

export function DownloadAndFooter({
  onDownloadTrigger,
}: DownloadAndFooterProps) {
  const [copied, setCopied] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyId | null>(null);
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  const handleCopyDrive = async () => {
    try {
      await navigator.clipboard.writeText(APP_CONFIG.driveShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 10–12. Large GET THE APP + DOWNLOAD APK + Nested WHATSAPP CHANNEL Card (matching reference screenshot) */}
      <section
        id="get-the-app"
        className="border-b border-white/10 bg-[#050505] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#FFD000]/25 bg-[#111111] p-6 text-center shadow-[0_0_50px_rgba(255,208,0,0.08)] sm:p-10">
            {/* GET THE APP Pill Badge */}
            <span className="inline-block rounded-full border border-[#FFD000]/40 bg-[#050505] px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.2em] text-[#FFD000] uppercase">
              GET THE APP
            </span>

            {/* Official GAME ARENA Logo */}
            <div className="mt-6 flex justify-center">
              <img
                src={APP_CONFIG.assets.officialLogo}
                alt="GAME ARENA Official Logo"
                referrerPolicy="no-referrer"
                className="h-24 w-24 aspect-square rounded-2xl border border-[#FFD000]/45 object-contain shadow-[0_0_28px_rgba(255,208,0,0.2)]"
              />
            </div>

            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
              START COMPETING TODAY
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              Download the GAME ARENA app and jump into your first Free Fire
              tournament in under 60 seconds.
            </p>

            {/* 11. Large Golden Yellow Gradient DOWNLOAD APK Button */}
            <div className="mt-7">
              <a
                href={APP_CONFIG.directDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadTrigger}
                className="btn-gold-gradient inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl px-6 text-sm font-extrabold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Smartphone className="h-5 w-5 stroke-[2.3]" />
                <span>DOWNLOAD APK</span>
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-mono text-xs text-zinc-400 tabular-nums sm:text-sm">
                <span>
                  Version{' '}
                  <strong className="text-[#FFD000]">{APP_CONFIG.version}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  Size{' '}
                  <strong className="text-[#FFD000]">{APP_CONFIG.apkSize}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>{APP_CONFIG.minAndroid}</span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                <a
                  href={APP_CONFIG.driveShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#FFD000] hover:underline"
                >
                  <span>Open Download Page</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyDrive}
                  className="inline-flex items-center gap-1 font-medium text-zinc-400 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-[#FFD000]" />
                      <span>Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy APK URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 12. WhatsApp Community Section (exact match to reference nested green card) */}
            <div className="mt-8 rounded-2xl border border-emerald-500/35 bg-gradient-to-br from-[#0B2E22] to-[#081D16] p-6 text-left sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/15 text-emerald-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-wide text-white uppercase">
                    JOIN OUR WHATSAPP COMMUNITY
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                    Get instant updates on Free Fire tournaments, room schedules,
                    results, and community announcements.
                  </p>
                  <button
                    type="button"
                    onClick={() => setWhatsappModalOpen(true)}
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-6 text-xs font-extrabold tracking-wider text-white uppercase transition-colors hover:bg-[#16A34A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>JOIN CHANNEL</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Footer with NAVIGATE, LEGAL, DOWNLOAD APP & Copyright */}
      <footer className="bg-[#050505] pt-14 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <a
                href="#top"
                className="inline-flex items-center gap-3 whitespace-nowrap rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
              >
                <BrandLogo size="md" />
                <span className="font-display text-2xl font-extrabold tracking-wider text-white">
                  GAME <span className="text-[#FFD000]">ARENA</span>
                </span>
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
                {APP_CONFIG.tagline} Organized Free Fire tournaments on Android.
              </p>
            </div>

            {/* NAVIGATE Column */}
            <div className="md:col-span-2">
              <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-white uppercase">
                NAVIGATE
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#top" className="transition-colors hover:text-[#FFD000]">
                    Home
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('about')}
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a
                    href="#features"
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-play"
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    How to Play
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('contact')}
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* LEGAL Column */}
            <div className="md:col-span-3">
              <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-white uppercase">
                LEGAL
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('terms')}
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('privacy')}
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('fairplay')}
                    className="transition-colors hover:text-[#FFD000]"
                  >
                    Fair Play Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* DOWNLOAD APP Column */}
            <div className="md:col-span-3">
              <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-white uppercase">
                DOWNLOAD APP
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Get GAME ARENA on your Android device and join your next Free
                Fire tournament today.
              </p>
              <a
                href={APP_CONFIG.directDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadTrigger}
                className="btn-gold-gradient mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-xs font-extrabold tracking-wider uppercase transition-all duration-150 active:scale-[0.98]"
              >
                <Smartphone className="h-4 w-4 stroke-[2.3]" />
                <span>DOWNLOAD APK</span>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500">
            <p>
              © {new Date().getFullYear()}{' '}
              <strong className="text-white">GAME ARENA</strong>. All Rights
              Reserved.
            </p>
            <p className="mt-1.5 text-zinc-500">
              Version {APP_CONFIG.version} · {APP_CONFIG.apkSize} · Official Android APK
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Action (Golden Yellow matching reference floating button) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="btn-gold-gradient fixed right-4 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ArrowUp className="h-5 w-5 stroke-[2.5]" />
      </button>

      {/* Policy / Info Modal */}
      <AnimatePresence>
        {activePolicy && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="policy-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg rounded-2xl border border-[#FFD000]/40 bg-[#111111] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#FFD000] uppercase">
                    {POLICY_DOCS[activePolicy].subtitle}
                  </p>
                  <h3
                    id="policy-modal-title"
                    className="mt-1 font-display text-2xl font-bold text-white uppercase"
                  >
                    {POLICY_DOCS[activePolicy].title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePolicy(null)}
                  aria-label="Close dialog"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:border-[#FFD000]/50 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
                {POLICY_DOCS[activePolicy].paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActivePolicy(null)}
                  className="btn-gold-gradient h-10 rounded-xl px-5 text-xs font-extrabold tracking-wide uppercase"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WhatsApp Community Info Modal (so JOIN CHANNEL has a real working handler without fake links) */}
      <AnimatePresence>
        {whatsappModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md rounded-2xl border border-emerald-500/45 bg-[#111111] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold text-emerald-400 uppercase">
                      Community Access
                    </p>
                    <h3
                      id="whatsapp-modal-title"
                      className="font-display text-2xl font-bold text-white uppercase"
                    >
                      WhatsApp Channel
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setWhatsappModalOpen(false)}
                  aria-label="Close WhatsApp info"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                The verified WhatsApp community invite link for room alerts and
                tournament updates is accessible directly inside the{' '}
                <strong className="text-white">GAME ARENA v{APP_CONFIG.version}</strong>{' '}
                Android app under the Community tab.
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setWhatsappModalOpen(false)}
                  className="h-11 flex-1 rounded-xl border border-white/15 text-xs font-semibold text-zinc-300 hover:border-white/35 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={APP_CONFIG.directDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    onDownloadTrigger();
                    setWhatsappModalOpen(false);
                  }}
                  className="btn-gold-gradient inline-flex h-11 flex-1 items-center justify-center rounded-xl px-4 text-xs font-extrabold tracking-wide uppercase"
                >
                  Download App
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
