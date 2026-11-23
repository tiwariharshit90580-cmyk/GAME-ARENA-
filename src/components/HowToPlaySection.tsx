import { Download, FolderOpen, Gamepad2, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { APP_CONFIG } from '../constants/appConfig';

type AndroidRange = '12-15' | '10-11' | '8-9';

const ANDROID_PATHS: Record<AndroidRange, { label: string; path: string }> = {
  '12-15': {
    label: 'Android 12–15',
    path: 'Settings → Apps → Special app access → Install unknown apps → Allow your browser.',
  },
  '10-11': {
    label: 'Android 10–11',
    path: 'Settings → Apps & notifications → Advanced → Special app access → Install unknown apps.',
  },
  '8-9': {
    label: 'Android 8–9',
    path: 'Settings → Security & privacy → More settings → Install apps from external sources.',
  },
};

export function HowToPlaySection() {
  const [androidRange, setAndroidRange] = useState<AndroidRange>('12-15');

  const steps = [
    {
      number: '01',
      title: 'Download GAME ARENA',
      icon: Download,
      description: `Tap DOWNLOAD APP or DOWNLOAD APK to open the download page and save ${APP_CONFIG.filename} (${APP_CONFIG.apkSize}) to your Android device.`,
    },
    {
      number: '02',
      title: 'Allow Unknown Apps',
      icon: Settings2,
      description: ANDROID_PATHS[androidRange].path,
    },
    {
      number: '03',
      title: 'Install & Sign In',
      icon: FolderOpen,
      description:
        'Open the downloaded APK from your Downloads folder, complete installation, and link your Free Fire UID profile.',
    },
    {
      number: '04',
      title: 'Enter Free Fire Rooms',
      icon: Gamepad2,
      description:
        'Choose an upcoming Solo, Duo, or Squad match, check in 15 minutes prior, and enter the room ID inside Free Fire.',
    },
  ];

  return (
    <section
      id="how-to-play"
      className="border-b border-white/10 bg-[#050505] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#FFD000]/40 bg-[#111111] px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.2em] text-[#FFD000] uppercase">
            HOW TO PLAY
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
            INSTALL & START COMPETING
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            Select your Android version to view the exact permission path for
            Step 02.
          </p>
          <div
            className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#FFD000]"
            aria-hidden="true"
          />

          <div
            role="group"
            aria-label="Select your Android version"
            className="mt-8 inline-flex rounded-xl border border-white/10 bg-[#111111] p-1"
          >
            {(Object.keys(ANDROID_PATHS) as AndroidRange[]).map((range) => {
              const isSelected = androidRange === range;
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => setAndroidRange(range)}
                  className={`h-9 rounded-lg px-3.5 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] ${
                    isSelected
                      ? 'bg-[#FFD000] text-[#050505]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {ANDROID_PATHS[range].label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-150 hover:border-[#FFD000]/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[#FFD000] tabular-nums">
                    {step.number}.
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFD000]/35 bg-[#FFD000]/10 text-[#FFD000] transition-colors group-hover:bg-[#FFD000] group-hover:text-[#050505]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold tracking-wide text-white uppercase">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
