import HeroSection from '../components/home/HeroSection';
import ExperienceGapSection from '../components/home/ExperienceGapSection';
import PlatformLoopSection from '../components/home/PlatformLoopSection';
import SolutionsSection from '../components/home/SolutionsSection';
import WhoWeServeSection from '../components/home/WhoWeServeSection';
import AdvantageSection from '../components/home/AdvantageSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceGapSection />
      <PlatformLoopSection />
      <SolutionsSection />
      <WhoWeServeSection />
      <AdvantageSection />
      <CtaSection />
    </>
  );
}
