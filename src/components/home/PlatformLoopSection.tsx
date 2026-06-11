import { motion } from 'framer-motion';
import { useLang } from '../../lib/useLang';

export default function PlatformLoopSection() {
  const { t, dir } = useLang();
  const isRtl = dir === 'rtl';

  const steps = t.narrative.flow;

  return (
    <section className="relative overflow-hidden bg-[#fbfcff] py-16 sm:py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div
          className={`relative mx-auto flex max-w-[1180px] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0 ${
            isRtl ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[2px] w-[76%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-ink/10 lg:block">
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-bluex to-transparent"
              animate={{
                x: isRtl ? ['250%', '-350%'] : ['-150%', '350%'],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{
                duration: 0.65,
                delay: index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 flex flex-1 flex-col items-center"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(83, 88, 162, 0.22)',
                    '0 0 0 28px rgba(83, 88, 162, 0)',
                    '0 0 0 0 rgba(83, 88, 162, 0)',
                  ],
                }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="flex h-28 w-28 items-center justify-center rounded-full border border-white/80 bg-white shadow-soft sm:h-40 sm:w-40 lg:h-48 lg:w-48"
              >
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    delay: index * 0.25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-[21px] font-normal tracking-[-0.035em] text-ink sm:text-[30px] lg:text-[34px]"
                >
                  {step}
                </motion.span>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 54 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.12,
                  }}
                  className="mt-6 w-[2px] rounded-full bg-ink/10 lg:hidden"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}