import { ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLang } from '../../lib/useLang';

export default function AdvantageSection() {
  const { t, dir } = useLang();
  const isRtl = dir === 'rtl';
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 15% 15%, rgba(125,76,255,.45), transparent 28%), radial-gradient(circle at 85% 0%, rgba(19,191,209,.25), transparent 24%)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute bottom-0 right-0 h-[360px] w-[720px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-[880px]"
        >
          <p className="eyebrow text-cyanx">
            {t.faq.label}
          </p>

          <h2 className="mt-5 text-[clamp(2.1rem,11vw,3.2rem)] sm:text-[clamp(2.6rem,4.1vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.055em] text-white">
            {t.faq.title}
          </h2>

          <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-white/70 sm:text-[20px]">
            {t.faq.body}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-7 backdrop-blur-xl sm:rounded-[2.6rem] sm:p-9 lg:sticky lg:top-28"
          >
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-bluex/25 blur-3xl" />
            <div className="absolute bottom-[-90px] left-[-90px] h-[240px] w-[240px] rounded-full bg-cyanx/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyanx">
                <Sparkles size={24} />
              </div>

              <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.28em] text-cyanx">
                {t.faq.whyLabel}
              </p>

              <h3 className="mt-4 text-[clamp(1.9rem,10vw,2.7rem)] sm:text-[clamp(2.2rem,3vw,4rem)] font-normal leading-[1.04] tracking-[-0.055em] text-white">
                {t.faq.whyTitle}
              </h3>

              <p className="mt-6 text-[17px] leading-8 text-white/72 sm:text-[18px]">
                {t.faq.whyBody}
              </p>

              <div className="mt-9 grid gap-3">
                {t.faq.whyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 text-white/82"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyanx" />
                    <span className="text-[15px] leading-7 sm:text-[16px]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {t.faq.questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`overflow-hidden rounded-[1.5rem] border transition duration-300 sm:rounded-[1.8rem] ${
                    isOpen
                      ? 'border-cyanx/35 bg-white/[0.10] shadow-[0_18px_60px_rgba(0,0,0,0.22)]'
                      : 'border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.075]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-5 p-5 text-start sm:p-6"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 text-[15px] font-medium text-cyanx/85">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-[20px] font-medium leading-snug tracking-[-0.025em] text-white sm:text-[23px]">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition duration-300 ${
                        isOpen ? 'rotate-180 bg-cyanx text-ink' : ''
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`px-5 pb-6 sm:px-6 ${
                            isRtl ? 'sm:pr-[74px]' : 'sm:pl-[74px]'
                          }`}
                        >
                          <p className="max-w-[820px] text-[16px] leading-8 text-white/70 sm:text-[17px]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}