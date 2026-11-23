import {
  LayoutGrid,
  Lock,
  Radio,
  ShieldCheck,
  Trophy,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const FEATURES: FeatureCardItem[] = [
  {
    id: 'fair-play',
    title: 'FAIR PLAY',
    description:
      'Strict anti-cheat monitoring and verified Free Fire UIDs ensure a level playing field. Your skill is the only deciding factor — always.',
    icon: ShieldCheck,
  },
  {
    id: 'secure-platform',
    title: 'SECURE PLATFORM',
    description:
      'Protected account profiles, verified Android APK packaging, and controlled custom room credentials shared only with confirmed participants.',
    icon: Lock,
  },
  {
    id: 'live-updates',
    title: 'LIVE TOURNAMENT UPDATES',
    description:
      'Receive instant room IDs, match start alerts, and bracket progress notifications so you never miss your scheduled slot.',
    icon: Radio,
  },
  {
    id: 'easy-registration',
    title: 'EASY REGISTRATION',
    description:
      'Enter your Free Fire IGN and UID in seconds to lock in Solo, Duo, or Squad tournament entries directly from your mobile device.',
    icon: UserPlus,
  },
  {
    id: 'player-rankings',
    title: 'PLAYER RANKINGS',
    description:
      'Track your match placements, seasonal consistency, and leaderboard standing across every tournament you compete in.',
    icon: Trophy,
  },
  {
    id: 'tournament-management',
    title: 'TOURNAMENT MANAGEMENT',
    description:
      'Structured bracket seeding, clear match timings, and smooth custom room coordination engineered for reliable esports events.',
    icon: LayoutGrid,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-b border-white/10 bg-[#050505] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Centered Reference Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#FFD000]/40 bg-[#111111] px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.2em] text-[#FFD000] uppercase">
            FEATURES
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
            EVERYTHING IN ONE APP
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            Everything you need for a fair, fast, and competitive Free Fire
            esports experience.
          </p>
          <div
            className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#FFD000]"
            aria-hidden="true"
          />
        </div>

        {/* Large Individual Rounded Cards matching Reference Screenshots */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.28,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-[#111111] px-7 py-9 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FFD000]/60 hover:shadow-[0_0_28px_rgba(255,208,0,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFD000]/30 bg-[#FFD000]/10 text-[#FFD000] transition-colors duration-150 group-hover:bg-[#FFD000] group-hover:text-[#050505]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-wide text-white uppercase">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
