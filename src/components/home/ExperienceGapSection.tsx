import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLang } from '../../lib/useLang';
import { asset } from '../../lib/assets';

export default function ExperienceGapSection() {
  const { t, dir } = useLang();
  const isRtl = dir === 'rtl';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto grid w-full max-w-[1720px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-16 lg:px-12 xl:gap-20 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[760px] lg:-translate-y-10"
        >
          <p className="eyebrow">
            {t.story.label}
          </p>

          <h2 className="mt-5 max-w-[760px] text-[clamp(2rem,10vw,3rem)] sm:mt-7 sm:text-[clamp(2.35rem,3.25vw,4.35rem)] font-normal leading-[1.13] tracking-[-0.05em] text-ink">
            {t.story.title}
          </h2>

          <p className="body-large mt-5 sm:mt-9 max-w-[700px] leading-[1.85] text-ink/70">
            {t.story.body}
          </p>

          <div className="mt-9">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              className="group inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-5 py-3 text-[15px] font-medium text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-bluex/25 hover:bg-bluex/[0.04] hover:shadow-md"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bluex/10 text-bluex transition-colors duration-300 group-hover:bg-bluex group-hover:text-white">
                <ArrowRight
                  size={17}
                  strokeWidth={2.4}
                  className={`transition-transform duration-300 ${
                    isOpen
                      ? isRtl
                        ? '-rotate-90'
                        : 'rotate-90'
                      : isRtl
                        ? 'rotate-180'
                        : ''
                  }`}
                />
              </span>

              <span>
                {isOpen ? t.story.hideDetails : t.story.showDetails}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -8 }}
                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -8 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-7 space-y-4">
                    {t.story.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{
                          duration: 0.28,
                          delay: index * 0.045,
                          ease: 'easeOut',
                        }}
                        className="flex items-start gap-4 rounded-2xl border border-ink/6 bg-mist/45 px-5 py-4"
                      >
                        <span className="mt-[2px] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-bluex shadow-sm">
                          <ArrowRight
                            size={14}
                            strokeWidth={2.4}
                            className={isRtl ? 'rotate-180' : ''}
                          />
                        </span>

                        <p className="text-[16px] leading-[1.7] text-ink/78 sm:text-[17px]">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full overflow-hidden rounded-[2.2rem] bg-mist shadow-soft sm:rounded-[3rem]"
        >
          <img
            src={asset("images/experience-gap-market.png")}
            alt={t.story.imageAlt}
            className="h-[320px] w-full object-cover object-center sm:h-[560px] lg:h-[640px]"
          />
        </motion.div>
      </div>
    </section>
  );
}