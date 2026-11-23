import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { DownloadAndFooter } from './components/DownloadAndFooter';
import { FeaturesSection } from './components/FeaturesSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowToPlaySection } from './components/HowToPlaySection';
import { StatisticsSection } from './components/StatisticsSection';

export default function App() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownloadTrigger = () => {
    setDownloadStarted(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050505] text-white">
        <Header onDownloadTrigger={handleDownloadTrigger} />
        <main>
          <HeroSection
            downloadStarted={downloadStarted}
            onDownloadTrigger={handleDownloadTrigger}
          />
          <StatisticsSection />
          <FeaturesSection />
          <HowToPlaySection />
          <DownloadAndFooter onDownloadTrigger={handleDownloadTrigger} />
        </main>
      </div>
    </MotionConfig>
  );
}
