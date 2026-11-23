import { Gamepad2, ShieldCheck, Smartphone, Zap } from 'lucide-react';

export function StatisticsSection() {
  const cells = [
    {
      icon: Gamepad2,
      value: '3 Modes',
      label: 'SOLO · DUO · SQUAD',
      sublabel: 'Free Fire tournament formats',
    },
    {
      icon: Zap,
      value: '5.81 MB',
      label: 'ULTRA-LIGHT APK',
      sublabel: 'Fast download on any network',
    },
    {
      icon: ShieldCheck,
      value: '24/7',
      label: 'FAIR PLAY MONITORING',
      sublabel: 'Verified UID custom rooms',
    },
    {
      icon: Smartphone,
      value: 'v1.0',
      label: 'ANDROID 8.0+ READY',
      sublabel: 'Official APK release',
    },
  ];

  return (
    <section
      id="statistics"
      className="border-b border-white/10 bg-[#0A0B0E]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border-x border-white/10">
          {cells.map((cell) => {
            const Icon = cell.icon;
            return (
              <div
                key={cell.label}
                className="flex flex-col items-center justify-center px-4 py-10 text-center sm:px-8 sm:py-12"
              >
                <Icon className="h-8 w-8 text-[#FFD000]" />
                <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white tabular-nums sm:text-5xl">
                  {cell.value}
                </p>
                <p className="mt-2 font-mono text-[11px] font-semibold tracking-[0.16em] text-zinc-400 uppercase sm:text-xs">
                  {cell.label}
                </p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  {cell.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
