import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../../lib/useLang';
import { asset } from '../../lib/assets';

function useTypingWords(words: readonly string[]) {
  const safeWords = useMemo(
    () => words.filter((word) => Boolean(word?.trim())),
    [words]
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(safeWords[0] ?? '');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = safeWords[wordIndex] ?? '';

  useEffect(() => {
    if (!safeWords.length) return;

    const typeSpeed = 38;
    const deleteSpeed = 22;
    const pauseAfterWord = 950;
    const pauseBeforeNextWord = 120;

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % safeWords.length);
        return;
      }

      const nextLength = text.length + (isDeleting ? -1 : 1);
      setText(currentWord.slice(0, nextLength));
    }, !isDeleting && text === currentWord
      ? pauseAfterWord
      : isDeleting && text === ''
        ? pauseBeforeNextWord
        : isDeleting
          ? deleteSpeed
          : typeSpeed
    );

    return () => window.clearTimeout(timer);
  }, [currentWord, isDeleting, safeWords.length, text]);

  useEffect(() => {
    setWordIndex(0);
    setText(safeWords[0] ?? '');
    setIsDeleting(false);
  }, [safeWords]);

  return text;
}

export default function HeroSection() {
  const { t, dir } = useLang();
  const typedWord = useTypingWords(t.hero.words);

  const isRtl = dir === 'rtl';

  return (
    <section className="relative overflow-hidden hero-radial">
      <div className="absolute inset-0 soft-grid opacity-50" />

      <div className="relative mx-auto grid min-h-[auto] w-full max-w-[1720px] items-center gap-8 px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-screen lg:grid-cols-[minmax(0,0.98fr)_minmax(520px,0.9fr)] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-36 xl:gap-20 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[980px]"
        >
          <h1 className="text-[clamp(2.35rem,12vw,3.35rem)] font-normal leading-[1.08] tracking-[-0.052em] text-ink sm:text-[clamp(3.15rem,3.7vw,4.75rem)]">
            <span className="block sm:whitespace-nowrap">
              {t.hero.titleLine1}
            </span>

            <span className="block sm:whitespace-nowrap">
              {t.hero.titleLine2Before}
              <span className="inline-flex min-w-[6.6ch] whitespace-normal align-baseline text-bluex sm:min-w-[7.8ch] sm:whitespace-nowrap">
                {typedWord || '\u00A0'}
              </span>
            </span>
          </h1>

          <p className="body-large mt-7 max-w-[680px]">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary gap-2" to="/request-demo">
              {t.hero.primary}
              <ArrowRight
                className={isRtl ? 'rotate-180' : ''}
                size={18}
              />
            </Link>

            <Link className="btn-secondary" to="/voicepulse">
              {t.hero.secondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-[360px] w-full sm:min-h-[520px] lg:min-h-[620px]"
        >
          <div className="absolute inset-y-8 end-0 w-[94%] rounded-[2.2rem] bg-white shadow-soft sm:rounded-[3rem]" />

          <img
            src={asset("images/hero-human.png")}
            alt={t.hero.imageAlt}
            className="absolute end-0 top-8 h-[82%] w-[96%] rounded-[2.2rem] object-cover object-right shadow-soft sm:rounded-[3rem]"
          />

          <div className="absolute bottom-4 start-3 w-[calc(100%-1.5rem)] rounded-[1.4rem] sm:bottom-6 sm:start-0 sm:w-[430px] sm:rounded-[2rem] border border-white/70 bg-white/86 p-4 shadow-soft backdrop-blur-xl sm:p-5">
            <p className="eyebrow normal-case tracking-[0.14em]">
              {t.hero.signalLabel}
            </p>

            <p
              className="mt-2 text-[18px] leading-snug text-ink sm:text-[25px]"
              style={{ fontWeight: 500 }}
            >
              “{t.hero.quote}”
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyanx" />
              <span className="text-[14px] text-muted">
                {t.hero.signalStatus}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
