import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../../lib/useLang';
import { asset } from '../../lib/assets';

const solutionRows = [
  { key: 'voice', href: '/voicepulse', img: 'images/voicepulse-human.png' },
  { key: 'insight', href: '/insightai', img: 'images/insightai-human.png' },
  { key: 'action', href: '/actionsync', img: 'images/actionsync-human.png' },
] as const;

type SolutionRow = (typeof solutionRows)[number];

const SLIDE_WIDTH = '100%';
const SLIDE_GAP = '1rem';
const TRANSITION_MS = 720;

export default function SolutionsSection() {
  const { t, dir } = useLang();
  const isRtl = dir === 'rtl';

  const carouselRows = useMemo<SolutionRow[]>(
    () => [
      solutionRows[solutionRows.length - 1],
      ...solutionRows,
      solutionRows[0],
    ],
    []
  );

  const [trackIndex, setTrackIndex] = useState(1);
  const [isLocked, setIsLocked] = useState(false);
  const [instantReset, setInstantReset] = useState(false);

  const activeIndex =
    (trackIndex - 1 + solutionRows.length) % solutionRows.length;

  const lockThenMove = (nextTrackIndex: number) => {
    if (isLocked) return;

    setIsLocked(true);
    setInstantReset(false);
    setTrackIndex(nextTrackIndex);
  };

  const goNext = () => {
    lockThenMove(trackIndex + 1);
  };

  const goPrevious = () => {
    lockThenMove(trackIndex - 1);
  };

  const goToSlide = (targetIndex: number) => {
    if (isLocked || targetIndex === activeIndex) return;

    setIsLocked(true);
    setInstantReset(false);
    setTrackIndex(targetIndex + 1);
  };

  useEffect(() => {
    if (!isLocked) return;

    const timer = window.setTimeout(() => {
      if (trackIndex === carouselRows.length - 1) {
        setInstantReset(true);
        setTrackIndex(1);

        window.setTimeout(() => {
          setInstantReset(false);
          setIsLocked(false);
        }, 40);

        return;
      }

      if (trackIndex === 0) {
        setInstantReset(true);
        setTrackIndex(solutionRows.length);

        window.setTimeout(() => {
          setInstantReset(false);
          setIsLocked(false);
        }, 40);

        return;
      }

      setIsLocked(false);
    }, TRANSITION_MS);

    return () => window.clearTimeout(timer);
  }, [trackIndex, isLocked, carouselRows.length]);

  const translateValue = isRtl
    ? `calc(${trackIndex} * (${SLIDE_WIDTH} + ${SLIDE_GAP}))`
    : `calc(-${trackIndex} * (${SLIDE_WIDTH} + ${SLIDE_GAP}))`;

  return (
    <section className="relative overflow-hidden bg-[#07163d] py-16 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(124,92,255,0.22),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(15,187,211,0.12),transparent_30%)]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[720px] opacity-[0.10] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-12 2xl:px-16">
        <div className="mb-9 flex flex-col gap-6 sm:mb-12 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[780px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.34em] text-bluex/80">
              {t.solutions.label}
            </p>

            <h2 className="mt-5 max-w-[760px] text-[clamp(2.1rem,11vw,3.2rem)] sm:text-[clamp(2.5rem,3.8vw,4.9rem)] font-normal leading-[1.02] tracking-[-0.055em] text-white">
              {t.solutions.title}
            </h2>

            <p className="mt-5 max-w-[660px] text-[16px] leading-7 text-white/68 sm:text-[18px] sm:leading-8">
              {t.solutions.body}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              disabled={isLocked}
              aria-label={t.common.previousSolutionAria}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#07163d] disabled:pointer-events-none disabled:opacity-45"
            >
              <ArrowLeft size={22} className={isRtl ? 'rotate-180' : ''} />
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={isLocked}
              aria-label={t.common.nextSolutionAria}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#07163d] disabled:pointer-events-none disabled:opacity-45"
            >
              <ArrowRight size={22} className={isRtl ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: translateValue }}
            transition={
              instantReset
                ? { duration: 0 }
                : { duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }
            }
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {carouselRows.map((row, index) => {
              const item = t.solutions[row.key];

              const realIndex =
                index === 0
                  ? solutionRows.length - 1
                  : index === carouselRows.length - 1
                    ? 0
                    : index - 1;

              const isActive = realIndex === activeIndex;

              return (
                <Link
                  key={`${row.key}-${index}`}
                  to={row.href}
                  className="group relative block min-w-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] bg-white/8 shadow-[0_28px_95px_rgba(0,0,0,0.30)] sm:rounded-[2.6rem]"
                >
                  <div className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[640px]">
                    <img
                      src={asset(row.img)}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.82,
                        scale: isActive ? 1 : 0.985,
                      }}
                      transition={{ duration: 0.4 }}
                      className={`absolute bottom-5 left-5 right-5 max-w-none rounded-[1.25rem] bg-white p-5 text-ink shadow-soft sm:bottom-auto sm:left-auto sm:right-auto sm:top-9 sm:max-w-[450px] sm:rounded-[1.5rem] sm:p-8 lg:top-12 lg:p-9 ${
                        isRtl
                          ? 'sm:right-9 lg:right-12'
                          : 'sm:left-9 lg:left-12'
                      }`}
                    >
                      <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-bluex">
                        {item.tag}
                      </p>

                      <h3 className="mt-5 text-[32px] font-normal leading-[0.98] tracking-[-0.055em] text-ink sm:text-[58px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[350px] text-[15px] leading-7 text-muted sm:mt-5 sm:text-[17px]">
                        {item.text}
                      </p>

                      <div className="mt-5 inline-flex sm:mt-8 items-center gap-2 rounded-full border border-bluex/20 px-5 py-3 text-[15px] font-medium text-bluex transition duration-300 group-hover:bg-bluex group-hover:text-white">
                        {t.solutions.learnMore}

                        <ArrowUpRight
                          size={18}
                          className={`transition duration-300 ${
                            isRtl
                              ? 'rotate-[-90deg] group-hover:-translate-x-1 group-hover:-translate-y-1'
                              : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-3">
          {solutionRows.map((row, index) => {
            const item = t.solutions[row.key];
            const isActive = index === activeIndex;

            return (
              <button
                key={row.key}
                type="button"
                onClick={() => goToSlide(index)}
                disabled={isLocked}
                className="group text-start disabled:pointer-events-none"
              >
                <div className="relative h-[2px] overflow-hidden rounded-full bg-white/18">
                  <motion.div
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute inset-y-0 w-full rounded-full bg-bluex ${
                      isRtl ? 'right-0 origin-right' : 'left-0 origin-left'
                    }`}
                  />
                </div>

                <div
                  className={`mt-4 flex items-center justify-between gap-4 transition duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/46 group-hover:text-white/82'
                  }`}
                >
                  <p className="text-[20px] font-medium tracking-[-0.035em] sm:text-[23px]">
                    {item.title}
                  </p>

                  <span
                    className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
                      isActive
                        ? 'bg-bluex shadow-[0_0_0_7px_rgba(124,92,255,0.16)]'
                        : 'bg-white/25 group-hover:bg-white/55'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}