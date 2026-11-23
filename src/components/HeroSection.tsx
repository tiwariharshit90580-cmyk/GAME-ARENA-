import {
  Check,
  Copy,
  ExternalLink,
  Play,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { APP_CONFIG } from '../constants/appConfig';

interface HeroSectionProps {
  downloadStarted: boolean;
  onDownloadTrigger: () => void;
}

export function HeroSection({
  downloadStarted,
  onDownloadTrigger,
}: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(APP_CONFIG.driveShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="top"
      className="arena-grid-bg relative overflow-hidden border-b border-white/10 bg-[#050505] pt-10 pb-0 sm:pt-16"
    >
      {/* Subtle radial golden highlight behind heading */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,208,0,0.14),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Top Badge: LIVE TOURNAMENTS RUNNING NOW */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FFD000]/45 bg-[#111111] px-4 py-1.5 shadow-[0_0_20px_rgba(255,208,0,0.12)]">
            <span
              className="h-2 w-2 rounded-full bg-[#FFD000]"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-[#FFD000] uppercase sm:text-xs">
              {APP_CONFIG.heroBadge}
            </span>
          </div>

          {/* 2. Large Centered Two-Tone Stacked Heading */}
          <h1 className="mt-6 font-display text-[clamp(3.25rem,11vw,5.75rem)] font-extrabold leading-[0.9] tracking-tight uppercase">
            <span className="block text-white">GAME ARENA</span>
            <span className="block text-[#FFD000] drop-shadow-[0_0_24px_rgba(255,208,0,0.28)]">
              ESPORTS
            </span>
          </h1>

          {/* 3. Subtitle & Free Fire Description */}
          <p className="mt-4 text-base font-semibold text-[#FFEA70] sm:text-xl">
            {APP_CONFIG.tagline}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
            Join organized Free Fire Solo, Duo, and Squad tournaments, climb
            player rankings, and compete in fair-play custom rooms directly from
            your Android device.
          </p>

          {/* 4. Large Yellow Gradient DOWNLOAD APP Button */}
          <div className="mt-8 flex flex-col items-center gap-3.5">
            <a
              href={APP_CONFIG.directDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadTrigger}
              className="btn-gold-gradient inline-flex h-14 w-full max-w-sm items-center justify-center gap-3 rounded-xl px-8 text-sm font-extrabold tracking-wider uppercase transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Smartphone className="h-5 w-5 stroke-[2.3]" />
              <span>DOWNLOAD APP</span>
            </a>

            {/* 5. Secondary HOW TO PLAY Button */}
            <a
              href="#how-to-play"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-[#111111] px-7 text-xs font-extrabold tracking-wider text-white uppercase transition-all duration-150 hover:border-[#FFD000]/60 hover:text-[#FFD000] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>HOW TO PLAY</span>
            </a>
          </div>

          {/* Download Feedback Banner when clicked */}
          {downloadStarted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-6 max-w-lg rounded-2xl border border-[#FFD000]/45 bg-[#111111] p-4 text-left"
              role="status"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD000]" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">
                    Opening {APP_CONFIG.filename} ({APP_CONFIG.apkSize})
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    The official APK download page has been opened. You can also open or copy the link below.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={APP_CONFIG.driveShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#FFD000]/50 bg-[#FFD000]/10 px-3 text-xs font-semibold text-[#FFD000] hover:bg-[#FFD000] hover:text-[#050505]"
                    >
                      <span>Open Download Page</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 text-xs font-medium text-zinc-200 hover:border-[#FFD000]/50"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-[#FFD000]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 6. Inline 3-Column Summary Strip (matching reference screenshot below buttons) */}
          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-4">
            <div className="px-2">
              <p className="font-display text-2xl font-extrabold text-white tabular-nums sm:text-3xl">
                v<span className="text-[#FFD000]">{APP_CONFIG.version}</span>
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-zinc-400 uppercase">
                App Version
              </p>
            </div>
            <div className="px-2">
              <p className="font-display text-2xl font-extrabold text-white tabular-nums sm:text-3xl">
                5.81<span className="text-[#FFD000]">MB</span>
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-zinc-400 uppercase">
                APK Size
              </p>
            </div>
            <div className="px-2">
              <p className="font-display text-2xl font-extrabold text-white tabular-nums sm:text-3xl">
                <span className="text-[#FFD000]">LIVE</span>
              </p>
              <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] text-zinc-400 uppercase">
                Free Fire
              </p>
            </div>
          </div>

          {/* 7. Bottom Smartphone Frame Preview featuring the Official Uploaded Logo */}
          <div className="mx-auto mt-10 max-w-[300px] sm:max-w-[340px]">
            <div className="rounded-t-[2.4rem] border-x-[6px] border-t-[6px] border-zinc-700/80 bg-[#0E0F12] p-3 pb-0 shadow-[0_-10px_50px_rgba(255,208,0,0.12)]">
              {/* Phone Status Notch Bar */}
              <div className="mb-3 flex items-center justify-between px-3 pt-1 font-mono text-[10px] text-zinc-400">
                <span>GAME ARENA</span>
                <span className="h-3.5 w-16 rounded-full bg-black" />
                <span>v{APP_CONFIG.version}</span>
              </div>

              {/* Inner App Screen Preview */}
              <div className="rounded-t-2xl border border-white/10 bg-[#050505] p-4 pb-6">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={APP_CONFIG.assets.officialLogo}
                      alt="GAME ARENA Mobile App Logo"
                      referrerPolicy="no-referrer"
                      className="h-9 w-9 aspect-square rounded-lg border border-[#FFD000]/45 object-contain"
                    />
                    <div className="text-left">
                      <p className="font-display text-sm font-bold text-white uppercase leading-none">
                        GAME ARENA
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-[#FFD000]">
                        Free Fire Lobby
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-[#FFD000]/15 px-2 py-1 font-mono text-[10px] font-bold text-[#FFD000]">
                    OPEN
                  </span>
                </div>

                {/* Official Logo Featured Cleanly Inside Phone Screen */}
                <div className="mt-4 flex flex-col items-center rounded-xl border border-[#FFD000]/30 bg-[#111111] p-4">
                  <img
                    src={APP_CONFIG.assets.officialLogo}
                    alt="Official GAME ARENA Emblem"
                    referrerPolicy="no-referrer"
                    className="h-28 w-28 aspect-square rounded-2xl object-contain shadow-[0_0_24px_rgba(255,208,0,0.2)]"
                  />
                  <p className="mt-3 font-display text-lg font-extrabold tracking-wide text-white uppercase">
                    FREE FIRE TOURNAMENTS
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Solo · Duo · Squad Custom Rooms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
