import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../../lib/useLang';
import { asset } from '../../lib/assets';

const cardLayout = [
  'min-h-[420px] sm:min-h-[520px] lg:col-span-2 lg:row-span-2 lg:min-h-[620px]',
  'min-h-[340px] sm:min-h-[420px]',
  'min-h-[340px] sm:min-h-[420px]',
  'min-h-[340px] sm:min-h-[420px] lg:col-span-2',
];

export default function WhoWeServeSection() {
  const { t, dir } = useLang();
  const isRtl = dir === 'rtl';

  return (
    <section className="relative overflow-hidden bg-[#fbfcff] py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-18%] h-[420px] w-[420px] rounded-full bg-bluex/10 blur-3xl" />
        <div className="absolute bottom-[-16%] right-[-10%] h-[460px] w-[460px] rounded-full bg-cyanx/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-[920px] sm:mb-14"
        >
          <p className="eyebrow">
            {t.serve.label}
          </p>

          <h2 className="mt-5 max-w-[900px] text-[clamp(2.1rem,11vw,3.2rem)] sm:text-[clamp(2.6rem,4vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.055em] text-ink">
            {t.serve.title}
          </h2>

          <p className="body-large mt-6 max-w-[820px] text-ink/70">
            {t.serve.body}
          </p>
        </motion.div>

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-4 lg:gap-6">
          {t.serve.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2rem] bg-ink shadow-soft sm:rounded-[2.6rem] ${cardLayout[index]}`}
            >
              <img
                src={asset(item.image)}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061337]/88 via-[#061337]/28 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061337]/52 via-transparent to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-4 sm:p-8 lg:p-9">
                <div className="max-w-[560px] rounded-[1.25rem] border border-white/16 bg-white/90 p-4 sm:rounded-[1.45rem] sm:p-5 text-ink shadow-soft backdrop-blur-xl transition duration-300 group-hover:bg-white sm:p-6">
                  <h3 className="text-[24px] font-normal leading-tight tracking-[-0.04em] text-ink sm:text-[34px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px]">
                    {item.text}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-bluex">
                    {item.cta}

                    <ArrowUpRight
                      size={18}
                      className={`transition duration-300 ${
                        isRtl
                          ? 'rotate-[-90deg] group-hover:-translate-x-1 group-hover:-translate-y-1'
                          : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}