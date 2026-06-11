import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  CircleDot,
  Eye,
  HeartPulse,
  LineChart,
  Radar,
  Route,
  ScanSearch,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useLang } from "../lib/useLang";

gsap.registerPlugin(useGSAP);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const textSwap = {
  initial: { opacity: 0, y: 12, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(8px)" },
};

function useSceneCycle(length: number, delay = 2400) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (length <= 1) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % length);
    }, delay);

    return () => window.clearInterval(id);
  }, [length, delay]);

  return active;
}

export default function InsightAIPage() {
  const { t } = useLang();
  const page = t.pages.insight;

  return (
    <main className="min-h-screen bg-white text-[#10131a] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-44 md:pt-48 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-[-140px] w-[460px] h-[460px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
          <div className="absolute bottom-20 left-[-140px] w-[390px] h-[390px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
        </div>

        <div className="container-page relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-black/60 mb-7"
            >
              <Sparkles size={16} className="text-[#7c3aed]" />
              {page.name}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[44px] md:text-[66px] leading-[1.04] tracking-[-0.045em] font-medium"
            >
              {page.heroTitleBase}{" "}
              <span className="text-[#7c3aed]">{page.heroTitleAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg md:text-xl leading-8 text-black/60 max-w-2xl"
            >
              {page.body}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/request-demo"
                className="rounded-full bg-[#10131a] text-white px-7 py-3.5 text-sm hover:bg-[#7c3aed] transition-colors"
              >
                {page.primaryCta}
              </Link>

              <a
                href="#insightai-flow"
                className="rounded-full border border-black/12 px-7 py-3.5 text-sm hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
              >
                {page.secondaryCta}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <HeroInsightAnimation />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.55 }}
              className="absolute -right-4 top-24 hidden md:flex rounded-2xl  text-white px-5 py-4 shadow-xl items-center gap-3"
            >
            
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOW */}
      <section id="insightai-flow" className="py-24 bg-[#fbfcff]">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
            className="max-w-3xl mb-20"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]"
            >
              {page.flowHeadingLabel}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-medium"
            >
              {page.flowHeadingTitle}
            </motion.h2>
          </motion.div>

          <div className="space-y-28">
            <FeatureBlock
              eyebrow={page.capabilities[0].tag}
              title={page.capabilities[0].title}
              body={page.capabilities[0].text}
              visual={<AnalysisAnimation />}
            />

            <FeatureBlock
              reverse
              eyebrow={page.capabilities[1].tag}
              title={page.capabilities[1].title}
              body={page.capabilities[1].text}
              visual={<EmotionAnimation />}
            />

            <QuoteSection />

            <FeatureBlock
              eyebrow={page.capabilities[2].tag}
              title={page.capabilities[2].title}
              body={page.capabilities[2].text}
              visual={<ForecastAnimation />}
            />

            <FeatureBlock
              reverse
              eyebrow={page.capabilities[3].tag}
              title={page.capabilities[3].title}
              body={page.capabilities[3].text}
              visual={<BehaviorAnimation />}
            />

            <FeatureBlock
              eyebrow={page.capabilities[4].tag}
              title={page.capabilities[4].title}
              body={page.capabilities[4].text}
              visual={<StrategyGapAnimation />}
            />
          </div>
        </div>
      </section>

      {/* FINAL HUMAN MESSAGE */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
            className="relative rounded-[42px] border border-black/10 bg-[#fbfcff] px-7 py-16 md:px-16 md:py-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_38%)]" />

            <motion.div variants={fadeUp} className="relative z-10 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]">
                {page.human.label}
              </p>

              <h2 className="mt-5 text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-medium">
                {page.human.title}
                <span className="block text-black/45">{page.human.accent}</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-transparent via-[#7c3aed]/70 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#10131a] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-140px] right-[10%] w-[420px] h-[420px] rounded-full bg-[#7c3aed]/30 blur-3xl" />
          <div className="absolute bottom-[-180px] left-[10%] w-[420px] h-[420px] rounded-full bg-[#14b8a6]/20 blur-3xl" />
        </div>

        <div className="container-page relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.22em] text-white/50"
            >
              {page.cta.label}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-medium"
            >
              {page.cta.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-white/65 max-w-2xl"
            >
              {page.cta.body}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <Link
                to="/request-demo"
                className="inline-flex rounded-full bg-white text-[#10131a] px-8 py-4 text-sm hover:bg-[#7c3aed] hover:text-white transition-colors"
              >
                {page.primaryCta}
              </Link>
            </motion.div>
          </motion.div>

          <FinalInsightEngine />
        </div>
      </section>
    </main>
  );
}

/* ---------------- MAIN BLOCK ---------------- */

function FeatureBlock({
  eyebrow,
  title,
  body,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={stagger}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div variants={fadeUp}>
        <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed] mb-4">
          {eyebrow}
        </p>

        <h3 className="text-3xl md:text-5xl leading-tight tracking-[-0.035em] font-medium">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-black/60 max-w-xl">{body}</p>
      </motion.div>

      <motion.div variants={fadeUp}>{visual}</motion.div>
    </motion.div>
  );
}

/* ---------------- HERO VISUAL ---------------- */

function HeroInsightAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const stages = visual.stages ?? [];
  const active = useSceneCycle(stages.length, 2300);
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.fromTo(
        ".hero-particle",
        { x: -18, opacity: 0 },
        {
          x: 220,
          opacity: 1,
          duration: 2.3,
          repeat: -1,
          stagger: 0.42,
          ease: "power2.inOut",
        }
      );

      gsap.to(".hero-breath", {
        scale: 1.045,
        opacity: 0.82,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    },
    { scope }
  );

  const activeStage = stages[active] ?? stages[0];

  return (
    <div
      ref={scope}
      className="relative rounded-[36px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)] p-6 md:p-8 overflow-hidden min-h-[520px]"
    >
      <div className="absolute top-[-80px] right-[-70px] w-52 h-52 rounded-full bg-[#7c3aed]/10 blur-3xl" />
      <div className="absolute bottom-[-90px] left-[-80px] w-56 h-56 rounded-full bg-[#14b8a6]/10 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between mb-7">
        <div>
          <p className="text-sm text-black/45">{visual.pipelineLabel}</p>
          <h3 className="text-xl font-medium mt-1">{visual.mapTitle}</h3>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
          <Brain className="text-[#7c3aed]" size={22} />
        </div>
      </div>

      <div className="relative z-10 rounded-[30px] border border-black/8 bg-[#fbfcff] p-5 md:p-6 min-h-[365px] overflow-hidden">
        <div className="absolute left-8 right-8 top-[52%] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute left-[50%] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <span className="hero-particle absolute top-[35%] left-10 w-2 h-2 rounded-full bg-[#7c3aed]" />
          <span className="hero-particle absolute top-[52%] left-10 w-2 h-2 rounded-full bg-[#14b8a6]" />
          <span className="hero-particle absolute top-[69%] left-10 w-2 h-2 rounded-full bg-[#7c3aed]" />
        </div>

        <div className="relative grid grid-cols-2 gap-5 h-full">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-black/35">
              {visual.rawSignal}
            </p>

            {stages.map((stage, index) => (
              <motion.div
                key={stage}
                animate={{
                  opacity: index === active ? 1 : 0.48,
                  scale: index === active ? 1 : 0.985,
                }}
                transition={{ duration: 0.35 }}
                className={`rounded-2xl border px-4 py-3 flex items-center gap-3 ${
                  index === active
                    ? "bg-white border-[#7c3aed]/25 shadow-[0_14px_34px_rgba(124,58,237,0.12)]"
                    : "bg-white/70 border-black/8"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-medium ${
                    index === active
                      ? "bg-[#7c3aed] text-white"
                      : "bg-black/5 text-black/45"
                  }`}
                >
                  {index + 1}
                </span>

                <span className="text-sm text-black/65">{stage}</span>
              </motion.div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="hero-orbit absolute w-64 h-64 rounded-full border border-black/10">
              <span className="absolute -top-2 left-1/2 w-4 h-4 -ml-2 rounded-full bg-[#7c3aed] shadow-[0_0_0_8px_rgba(124,58,237,0.11)]" />
              <span className="absolute top-1/2 -right-2 w-4 h-4 -mt-2 rounded-full bg-[#14b8a6] shadow-[0_0_0_8px_rgba(20,184,166,0.11)]" />
              <span className="absolute -bottom-2 left-1/2 w-4 h-4 -ml-2 rounded-full bg-[#7c3aed]/70 shadow-[0_0_0_8px_rgba(124,58,237,0.08)]" />
            </div>

            <div className="absolute w-44 h-44 rounded-full border border-black/10" />
            <div className="hero-breath absolute w-28 h-28 rounded-full bg-[#7c3aed]/10 blur-sm" />

            <div className="relative z-10 w-28 h-28 rounded-full bg-[#10131a] text-white flex items-center justify-center shadow-2xl">
              <Brain size={34} />
            </div>

            <div className="absolute left-0 right-0 bottom-0 rounded-2xl bg-white border border-black/10 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
              <p className="text-xs text-black/40 mb-1">{visual.processed}</p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStage}
                  variants={textSwap}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="text-sm font-medium text-[#10131a]"
                >
                  {activeStage}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-5 grid grid-cols-3 gap-3">
        {visual.metrics.map((metric, index) => (
          <div key={metric.title} className="rounded-2xl bg-white border border-black/8 p-4">
            <p className="text-xs text-black/40">{metric.title}</p>
            <p className="mt-1 text-xl font-medium">{metric.value}</p>
            <div className="mt-3 h-1.5 rounded-full bg-black/5 overflow-hidden">
              <motion.div
                animate={{ width: index === active % 3 ? "88%" : "58%" }}
                transition={{ duration: 0.45 }}
                className="h-full rounded-full bg-[#7c3aed]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ANALYSIS ---------------- */

function AnalysisAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const streams = visual.streams ?? [];
  const metrics = visual.metrics ?? [];
  const active = useSceneCycle(streams.length, 2200);
  const scope = useRef<HTMLDivElement | null>(null);

  const icons = [BarChart3, ScanSearch, Activity, CheckCircle2] as const;
  const activeStream = streams[active] ?? streams[0];
  const activeMetric = metrics[active % Math.max(metrics.length, 1)];

  useGSAP(
    () => {
      gsap.fromTo(
        ".analysis-dot",
        { x: -10, opacity: 0 },
        {
          x: 190,
          opacity: 1,
          duration: 1.9,
          repeat: -1,
          stagger: 0.32,
          ease: "power2.inOut",
        }
      );

      gsap.to(".analysis-core", {
        scale: 1.08,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="relative rounded-[34px] bg-white border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[510px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.12),transparent_45%)] rounded-[34px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-black/45">{visual.dataLabel}</p>
            <h4 className="text-xl font-medium mt-1">{visual.feedbackIndicators}</h4>
          </div>

          <BarChart3 className="text-[#7c3aed]" />
        </div>

        <div className="grid md:grid-cols-[1fr_0.5fr_1fr] gap-5 items-stretch">
          <div className="space-y-3">
            {streams.map((stream, index) => {
              const Icon = icons[index] ?? CircleDot;
              const isActive = index === active;

              return (
                <motion.div
                  key={stream}
                  animate={{
                    opacity: isActive ? 1 : 0.48,
                    scale: isActive ? 1 : 0.985,
                  }}
                  className={`rounded-2xl border p-4 flex items-center gap-3 ${
                    isActive
                      ? "bg-white border-[#7c3aed]/25 shadow-[0_14px_34px_rgba(124,58,237,0.11)]"
                      : "bg-white/70 border-black/8"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-[#7c3aed] text-white" : "bg-[#7c3aed]/10 text-[#7c3aed]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span className="font-medium text-sm">{stream}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="relative hidden md:flex items-center justify-center overflow-hidden">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/25 to-transparent" />
            <span className="analysis-dot absolute top-[31%] left-0 w-2 h-2 rounded-full bg-[#7c3aed]" />
            <span className="analysis-dot absolute top-[50%] left-0 w-2 h-2 rounded-full bg-[#14b8a6]" />
            <span className="analysis-dot absolute top-[69%] left-0 w-2 h-2 rounded-full bg-[#7c3aed]" />

            <div className="analysis-core relative z-10 w-20 h-20 rounded-3xl bg-[#10131a] text-white flex items-center justify-center shadow-2xl">
              <Brain size={30} />
            </div>
          </div>

          <div className="rounded-[28px] bg-[#10131a] text-white p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle2 className="text-[#14b8a6]" />
                <div>
                  <p className="text-sm text-white/45">{visual.measurableIndicators}</p>
                  <p className="mt-1 text-sm text-white/75">{visual.signalsConverted}</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStream}
                  variants={textSwap}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    {visual.processed}
                  </p>
                  <h5 className="mt-3 text-2xl font-medium">{activeStream}</h5>
                </motion.div>
              </AnimatePresence>
            </div>

            {activeMetric && (
              <div className="mt-6">
                <div className="flex justify-between text-xs text-white/45 mb-2">
                  <span>{activeMetric.title}</span>
                  <span>{activeMetric.value}</span>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    key={activeMetric.title}
                    initial={{ width: "0%" }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 0.65 }}
                    className="h-full rounded-full bg-[#14b8a6]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- EMOTION ---------------- */

function EmotionAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const emotions = visual.emotions ?? [];
  const active = useSceneCycle(emotions.length, 2300);
  const scope = useRef<HTMLDivElement | null>(null);

  const activeEmotion = emotions[active] ?? emotions[0];
  const words = useMemo(() => visual.patientSample.split(" ").slice(0, 12), [visual.patientSample]);

  useGSAP(
    () => {
      gsap.to(".emotion-wave", {
        strokeDashoffset: -220,
        duration: 3.2,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".emotion-heart", {
        scale: 1.12,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="rounded-[34px] bg-[#10131a] text-white p-7 md:p-9 shadow-[0_25px_90px_rgba(16,19,26,0.20)] min-h-[510px] relative overflow-hidden"
    >
      <div className="absolute top-[-120px] right-[-90px] w-[300px] h-[300px] rounded-full bg-[#7c3aed]/35 blur-3xl" />
      <div className="absolute bottom-[-140px] left-[-90px] w-[300px] h-[300px] rounded-full bg-[#14b8a6]/20 blur-3xl" />

      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white/45 text-sm">{visual.languageTone}</p>
            <h4 className="text-2xl font-medium mt-1">{visual.emotionInterpreter}</h4>
          </div>

          <div className="emotion-heart w-14 h-14 rounded-full bg-[#7c3aed]/20 flex items-center justify-center">
            <HeartPulse className="text-[#f472b6]" />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 overflow-hidden">
          <p className="text-sm text-white/45">{visual.patientSampleLabel}</p>

          <p className="mt-3 text-lg leading-8 text-white/78">“{visual.patientSample}”</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {words.map((word, index) => {
              const isHot = index % Math.max(emotions.length, 1) === active;

              return (
                <motion.span
                  key={`${word}-${index}`}
                  animate={{
                    opacity: isHot ? 1 : 0.55,
                    scale: isHot ? 1.05 : 1,
                  }}
                  className={`rounded-full px-3 py-1.5 text-xs border ${
                    isHot
                      ? "bg-[#f472b6]/15 border-[#f472b6]/30 text-[#fbcfe8]"
                      : "bg-white/5 border-white/10 text-white/55"
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>

          <svg className="mt-6 w-full h-16" viewBox="0 0 500 70" preserveAspectRatio="none">
            <path
              d="M0 36 C45 10, 70 60, 115 35 C160 10, 190 58, 240 36 C290 14, 320 58, 365 35 C410 12, 445 55, 500 34"
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              className="emotion-wave"
              d="M0 36 C45 10, 70 60, 115 35 C160 10, 190 58, 240 36 C290 14, 320 58, 365 35 C410 12, 445 55, 500 34"
              fill="none"
              stroke="#f472b6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="80 140"
            />
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {emotions.map((emotion, index) => {
            const isActive = index === active;
            const widths = ["82%", "64%", "72%", "58%"];

            return (
              <motion.div
                key={emotion.label}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  scale: isActive ? 1.02 : 1,
                }}
                className={`rounded-2xl border p-4 ${
                  isActive
                    ? "border-[#f472b6]/30 bg-[#f472b6]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-sm text-white/50">{emotion.label}</p>

                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-2xl font-medium">{emotion.value}</p>
                  <span className="text-[11px] rounded-full bg-white/8 px-2 py-1 text-white/45">
                    NLP
                  </span>
                </div>

                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: isActive ? widths[index % widths.length] : "28%" }}
                    transition={{ duration: 0.45 }}
                    className="h-full rounded-full bg-[#f472b6]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {activeEmotion && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEmotion.label}
              variants={textSwap}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="mt-5 rounded-2xl bg-white text-[#10131a] p-4"
            >
              <p className="text-xs text-black/40">{visual.processed}</p>
              <p className="mt-1 text-sm font-medium">
                {activeEmotion.label} — {activeEmotion.value}
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

/* ---------------- QUOTE ---------------- */

function QuoteSection() {
  const { t } = useLang();
  const page = t.pages.insight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={stagger}
      className="relative rounded-[42px] bg-white border border-black/10 px-7 py-14 md:px-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_35%)]" />

      <motion.div variants={fadeUp} className="relative z-10 max-w-5xl">
        <Eye className="text-[#7c3aed] mb-8" size={34} />

        <h3 className="text-3xl md:text-6xl leading-tight tracking-[-0.04em] font-medium">
          “{page.quoteLines[0]}
          <span className="block text-black/45">{page.quoteLines[1]}”</span>
        </h3>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- FORECAST ---------------- */

function ForecastAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const metrics = visual.metrics ?? [];
  const active = useSceneCycle(5, 2100);
  const scope = useRef<HTMLDivElement | null>(null);

  const points = [
    { x: "8%", y: "67%" },
    { x: "28%", y: "57%" },
    { x: "45%", y: "62%" },
    { x: "64%", y: "39%" },
    { x: "84%", y: "24%" },
  ];

  const activeMetric = metrics[active % Math.max(metrics.length, 1)];

  useGSAP(
    () => {
      gsap.to(".forecast-scan", {
        xPercent: 165,
        duration: 3.6,
        repeat: -1,
        ease: "power2.inOut",
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="relative rounded-[34px] bg-white border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[510px] overflow-hidden"
    >
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-black/45">{visual.forecastLabel}</p>
          <h4 className="text-xl font-medium mt-1">{visual.predictiveCurve}</h4>
        </div>

        <LineChart className="text-[#7c3aed]" />
      </div>

      <div className="relative mt-8 rounded-[28px] border border-black/8 bg-[#fbfcff] h-[330px] overflow-hidden">
        <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-black/10" />
        <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-black/10" />

        <div className="forecast-scan absolute top-0 bottom-0 left-[-35%] w-1/3 bg-gradient-to-r from-transparent via-[#7c3aed]/10 to-transparent" />

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 8 68 C 20 58, 29 57, 40 62 C 52 68, 55 42, 72 34 C 80 30, 84 27, 88 24"
            fill="none"
            stroke="url(#forecastGradient)"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />

          <defs>
            <linearGradient id="forecastGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        {points.map((point, index) => {
          const isActive = index === active;

          return (
            <motion.div
              key={index}
              animate={{
                scale: isActive ? 1.55 : 1,
                opacity: isActive ? 1 : 0.45,
              }}
              transition={{ duration: 0.35 }}
              className="absolute w-3.5 h-3.5 rounded-full bg-[#7c3aed] shadow-[0_0_0_7px_rgba(124,58,237,0.10)]"
              style={{ left: point.x, top: point.y }}
            />
          );
        })}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={textSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="absolute top-8 right-8 rounded-2xl bg-[#10131a] text-white px-4 py-3 shadow-xl max-w-[210px]"
          >
            <p className="text-[11px] text-white/45">{visual.positiveTrend}</p>
            <p className="mt-1 text-sm font-medium">
              {activeMetric ? `${activeMetric.title}: ${activeMetric.value}` : visual.processed}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------------- BEHAVIOR / RADAR ---------------- */

function BehaviorAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const signals = visual.behaviorSignals ?? [];
  const active = useSceneCycle(signals.length, 2200);
  const scope = useRef<HTMLDivElement | null>(null);

  const icons = [Activity, Eye, Users, Route] as const;

  const positions = [
    { left: "17%", top: "25%" },
    { left: "67%", top: "28%" },
    { left: "20%", top: "72%" },
    { left: "72%", top: "69%" },
  ];

  useGSAP(
    () => {
      gsap.to(".radar-sweep", {
        rotate: 360,
        duration: 4.8,
        repeat: -1,
        ease: "none",
        transformOrigin: "0% 50%",
      });

      gsap.to(".radar-ring", {
        scale: 1.05,
        opacity: 0.35,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope }
  );

  const activeSignal = signals[active] ?? signals[0];

  return (
    <div
      ref={scope}
      className="relative rounded-[34px] bg-[#fbfcff] border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[520px] overflow-hidden"
    >
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-black/45">{visual.patientIntelligence}</p>
          <h4 className="text-xl font-medium mt-1">{visual.behaviorMap}</h4>
        </div>

        <Radar className="text-[#7c3aed]" />
      </div>

      <div className="relative mt-8 h-[370px] rounded-[30px] bg-white border border-black/8 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 radar-ring w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c3aed]/20" />
        <div className="absolute left-1/2 top-1/2 radar-ring w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c3aed]/20" />
        <div className="absolute left-1/2 top-1/2 radar-ring w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c3aed]/20" />

        <div className="absolute left-1/2 top-1/2 w-px h-full -translate-y-1/2 bg-black/5" />
        <div className="absolute left-0 top-1/2 w-full h-px bg-black/5" />

        <div className="radar-sweep absolute left-1/2 top-1/2 w-[150px] h-[3px] bg-gradient-to-r from-[#7c3aed]/70 to-transparent rounded-full" />

        <div className="absolute left-1/2 top-1/2 z-20 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10131a] text-white flex items-center justify-center shadow-2xl">
          <Brain size={30} />
        </div>

        {signals.map((label, index) => {
          const Icon = icons[index] ?? CircleDot;
          const isActive = index === active;

          return (
            <motion.div
              key={label}
              animate={{
                opacity: isActive ? 1 : 0.56,
                scale: isActive ? 1.08 : 1,
              }}
              transition={{ duration: 0.35 }}
              className={`absolute z-10 rounded-2xl border px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 ${
                isActive
                  ? "bg-[#7c3aed] border-[#7c3aed] text-white"
                  : "bg-white border-black/10 text-black/65"
              }`}
              style={positions[index] ?? positions[0]}
            >
              <Icon size={17} className={isActive ? "text-white" : "text-[#7c3aed]"} />
              <span className="text-sm">{label}</span>
            </motion.div>
          );
        })}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSignal}
            variants={textSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="absolute left-6 bottom-6 right-6 rounded-2xl bg-[#10131a] text-white p-4"
          >
            <p className="text-xs text-white/40">{visual.processed}</p>
            <p className="mt-1 text-sm font-medium">{activeSignal}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------------- STRATEGY ---------------- */

function StrategyGapAnimation() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const rows = visual.strategyRows ?? [];
  const active = useSceneCycle(rows.length, 2300);
  const activeRow = rows[active] ?? rows[0];

  return (
    <div className="relative rounded-[34px] bg-white border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.10),transparent_45%)]" />

      <div className="relative z-10 flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-black/45">{visual.targetReality}</p>
          <h4 className="text-xl font-medium mt-1">{visual.gapDetector}</h4>
        </div>

        <Target className="text-[#7c3aed]" />
      </div>

      <div className="relative z-10 rounded-[28px] border border-black/8 bg-[#fbfcff] overflow-x-auto">
        <div className="min-w-[590px]">
          <div className="grid grid-cols-[1fr_0.7fr_0.7fr_0.9fr] gap-3 px-5 py-4 text-xs text-black/40 border-b border-black/8">
            {visual.tableHeaders.map((header) => (
              <span key={header}>{header}</span>
            ))}
          </div>

          {rows.map((row, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={row.label}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  backgroundColor: isActive ? "rgba(124,58,237,0.055)" : "rgba(255,255,255,0)",
                }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-[1fr_0.7fr_0.7fr_0.9fr] gap-3 px-5 py-5 border-b border-black/8 last:border-b-0 items-center"
              >
                <span className="text-sm text-black/70">{row.label}</span>
                <span className="text-sm font-medium">{row.target}</span>
                <span className="text-sm font-medium">{row.reality}</span>

                <span
                  className={`text-xs rounded-full px-3 py-1.5 w-fit ${
                    row.gap
                      ? "bg-[#7c3aed]/10 text-[#7c3aed]"
                      : "bg-[#14b8a6]/10 text-[#0f766e]"
                  }`}
                >
                  {row.gap ? visual.gapDetected : visual.aligned}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {activeRow && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRow.label}
            variants={textSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="relative z-10 mt-6 rounded-2xl bg-[#10131a] text-white p-5"
          >
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-[#14b8a6]" />
              <p className="text-sm text-white/65">{visual.expectationCompared}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <p className="text-xs text-white/40">{visual.tableHeaders[1]}</p>
                <p className="mt-1 text-lg font-medium">{activeRow.target}</p>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <p className="text-xs text-white/40">{visual.tableHeaders[2]}</p>
                <p className="mt-1 text-lg font-medium">{activeRow.reality}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

/* ---------------- FINAL ENGINE ---------------- */

function FinalInsightEngine() {
  const { t } = useLang();
  const visual = t.pages.insight.visual;
  const items = visual.finalEngineItems ?? [];
  const active = useSceneCycle(items.length, 2200);
  const scope = useRef<HTMLDivElement | null>(null);
  const activeItem = items[active] ?? items[0];

  useGSAP(
    () => {
      gsap.fromTo(
        ".engine-particle",
        { x: -20, opacity: 0 },
        {
          x: 210,
          opacity: 1,
          duration: 2,
          repeat: -1,
          stagger: 0.35,
          ease: "power2.inOut",
        }
      );

      gsap.to(".engine-core", {
        boxShadow: "0 0 42px rgba(124,58,237,0.55)",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope }
  );

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative rounded-[38px] border border-white/10 bg-white/[0.04] p-7 md:p-9 min-h-[470px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.25),transparent_45%)]" />

      <div className="relative z-10">
        <h4 className="text-2xl font-medium">{visual.finalEngineTitle}</h4>
        <p className="mt-3 text-white/55">{visual.finalEngineBody}</p>
      </div>

      <div className="relative z-10 mt-10 grid md:grid-cols-[0.95fr_0.35fr_0.95fr] gap-5 items-center">
        <div className="space-y-3">
          {items.slice(0, 5).map((item, index) => {
            const isActive = index === active % 5;

            return (
              <motion.div
                key={item}
                animate={{
                  opacity: isActive ? 1 : 0.48,
                  scale: isActive ? 1.02 : 1,
                }}
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  isActive
                    ? "bg-white text-[#10131a] border-white"
                    : "bg-white/8 border-white/10 text-white/65"
                }`}
              >
                {item}
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:flex relative h-[260px] items-center justify-center overflow-hidden">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <span className="engine-particle absolute top-[36%] left-0 w-2 h-2 rounded-full bg-white" />
          <span className="engine-particle absolute top-[50%] left-0 w-2 h-2 rounded-full bg-[#14b8a6]" />
          <span className="engine-particle absolute top-[64%] left-0 w-2 h-2 rounded-full bg-white" />

          <div className="engine-core relative z-10 w-16 h-16 rounded-2xl bg-[#7c3aed] flex items-center justify-center shadow-2xl">
            <Brain size={28} />
          </div>
        </div>

        <div className="rounded-[28px] bg-white text-[#10131a] p-6 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-[#14b8a6]/10 text-[#0f766e] flex items-center justify-center mb-5">
            <ArrowRight size={24} />
          </div>

          <p className="text-sm text-black/45 mb-2">{visual.processed}</p>

          <AnimatePresence mode="wait">
            <motion.h5
              key={activeItem}
              variants={textSwap}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="text-2xl font-medium leading-tight"
            >
              {activeItem}
            </motion.h5>
          </AnimatePresence>

          <div className="mt-6 rounded-2xl bg-[#fbfcff] border border-black/8 p-4 flex items-center gap-3">
            <CheckCircle2 size={20} className="text-[#14b8a6]" />
            <span className="text-sm text-black/60">{visual.measurableIndicators}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}