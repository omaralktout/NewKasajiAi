import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/useLang';
import PageHero from '../components/ui/PageHero';

export type PageKey = 'voice' | 'insight' | 'action';

type Props = {
  page: PageKey;
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

export default function SolutionPage({ page, eyebrow, heading, intro }: Props) {
  const { t } = useLang();
  const data = t.pages[page];
  const solution = t.solutionPage;
  const steps = solution.flows[page];

  return (
    <main>
      <PageHero label={data.kicker} title={data.title} body={data.body} image={data.image} imageAlt={data.name} />

      <section className="page-section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow">{eyebrow || solution.howItHelps}</p>
            <h2 className="section-title mt-4 sm:mt-5">
              {heading || solution.designedTitle}
            </h2>
            <p className="body-large mt-5 sm:mt-6">
              {intro || solution.designedBody}
            </p>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid gap-3 border-t border-ink/10 py-5 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7 lg:grid-cols-[78px_1fr]"
              >
                <span className="text-[26px] leading-none tracking-[-.05em] text-bluex/70 sm:text-[34px]" style={{ fontWeight: 400 }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[22px] leading-tight tracking-[-.02em] text-ink sm:text-[30px]" style={{ fontWeight: 500 }}>
                    {feature}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-8">
                    {steps[index] || solution.fallbackStep}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-24 lg:py-28">
        <div className="container-page">
          <p className="eyebrow text-cyanx">{solution.operatingFlow}</p>
          <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[.05] p-5 sm:rounded-[2rem] sm:p-7"
              >
                <CheckCircle2 className="mb-5 text-cyanx sm:mb-6" />
                <div className="text-[14px] text-white/45 sm:text-[15px]">0{i + 1}</div>
                <p className="mt-2 text-[20px] leading-snug sm:text-[22px]" style={{ fontWeight: 500 }}>
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
