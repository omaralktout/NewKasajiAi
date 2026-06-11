import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  Bot,
  Brain,
  CalendarCheck,
  CheckCircle2,
  GitBranch,
  HeartHandshake,
  Languages,
  MessageCircle,
  Network,
  PhoneForwarded,
  Route,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useLang } from "../lib/useLang";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const swapText = {
  initial: { opacity: 0, y: 10, filter: "blur(8px)" },
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

function ProgressBar({ active }: { active: boolean }) {
  return (
    <div className="mt-3 h-1.5 rounded-full bg-black/6 overflow-hidden">
      <motion.div
        animate={{ width: active ? "88%" : "34%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full rounded-full bg-[#7c3aed]"
      />
    </div>
  );
}

export default function ActionSyncPage() {
  return (
    <main className="min-h-screen bg-white text-[#10131a] overflow-hidden">
      <HeroSection />
      <ExecutionStory />
      <MotionQuote />
      <CareNavigatorSection />
      <HumanMessage />
      <FinalCTA />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function HeroSection() {
  const { t } = useLang();
  const page = t.pages.action;

  return (
    <section className="relative pt-44 md:pt-48 pb-24 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-[-160px] w-[520px] h-[520px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
        <div className="absolute bottom-10 left-[-160px] w-[460px] h-[460px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
      </div>

      <div className="container-page relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
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
            className="text-[44px] md:text-[76px] leading-[1.02] tracking-[-0.055em] font-medium"
          >
            {page.heroTitleBase}{" "}
            <span className="text-[#7c3aed]">{page.heroTitleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-lg md:text-xl leading-8 text-black/62 max-w-3xl"
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
              href="#execution-story"
              className="rounded-full border border-black/12 px-7 py-3.5 text-sm hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
            >
              {page.secondaryCta}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <HeroExecutionVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroExecutionVisual() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const steps = visual.heroSteps ?? [];
  const active = useSceneCycle(steps.length, 2300);
  const activeStep = steps[active] ?? visual.executionLive;

  const icons = [Brain, BellRing, PhoneForwarded, Stethoscope, ShieldCheck] as const;

  return (
    <div className="relative rounded-[42px] border border-black/10 bg-[#10131a] text-white overflow-hidden shadow-[0_38px_120px_rgba(16,19,26,0.22)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.40),transparent_35%),radial-gradient(circle_at_88%_78%,rgba(20,184,166,0.20),transparent_38%)]" />

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-7">
          <div>
            <p className="text-sm text-white/45">{visual.liveSystem}</p>
            <h3 className="mt-1 text-2xl md:text-3xl font-medium tracking-[-0.035em]">
              {visual.actionMotion}
            </h3>
          </div>

          <div className="rounded-full bg-white text-[#10131a] px-4 py-2.5 flex items-center gap-2 shrink-0">
            <Zap size={17} className="text-[#7c3aed]" />
            <span className="text-xs md:text-sm">{visual.executionLive}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[0.95fr_1.15fr] gap-5">
          <div className="rounded-[28px] bg-white/[0.06] border border-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4">
              Case queue
            </p>

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = icons[index] ?? Workflow;
                const isActive = index === active;

                return (
                  <motion.div
                    key={step}
                    animate={{
                      opacity: isActive ? 1 : 0.48,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.35 }}
                    className={`rounded-2xl border p-4 flex items-center gap-3 ${
                      isActive
                        ? "bg-white text-[#10131a] border-white"
                        : "bg-white/5 text-white border-white/10"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-[#7c3aed]/10 text-[#7c3aed]"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{step}</p>
                      <p className={`mt-1 text-xs ${isActive ? "text-black/45" : "text-white/35"}`}>
                        {isActive ? visual.executionLive : "Waiting"}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] bg-white text-[#10131a] p-5 md:p-6 overflow-hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                  Active case
                </p>

                <AnimatePresence mode="wait">
                  <motion.h4
                    key={activeStep}
                    variants={swapText}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-2 text-2xl md:text-3xl font-medium tracking-[-0.035em]"
                  >
                    {activeStep}
                  </motion.h4>
                </AnimatePresence>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#10131a] text-white flex items-center justify-center shrink-0">
                <Workflow size={24} />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#fbfcff] border border-black/8 p-4">
                <p className="text-xs text-black/40">Priority</p>
                <p className="mt-1 text-xl font-medium">High</p>
              </div>

              <div className="rounded-2xl bg-[#fbfcff] border border-black/8 p-4">
                <p className="text-xs text-black/40">SLA</p>
                <p className="mt-1 text-xl font-medium">18m</p>
              </div>

              <div className="rounded-2xl bg-[#fbfcff] border border-black/8 p-4">
                <p className="text-xs text-black/40">Owner</p>
                <p className="mt-1 text-xl font-medium">Care</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#10131a] text-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/45">{visual.executionLive}</p>
                  <p className="mt-1 text-sm text-white/75">{visual.outreachTriggered}</p>
                </div>

                <motion.div
                  animate={{ rotate: [0, 0, 360] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.2 }}
                  className="w-11 h-11 rounded-full bg-[#14b8a6]/15 text-[#14b8a6] flex items-center justify-center"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>

              <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#14b8a6]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STORY ---------------- */

function ExecutionStory() {
  const { t } = useLang();
  const page = t.pages.action;
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(scrollYProgress, [0.12, 0.56], ["0%", "100%"]);

  const visuals = [
    <TriageBoard key="triage" />,
    <DecisionMatrix key="decision" />,
    <AssistantWorkspace key="assistant" />,
    <TeamHandoffBoard key="handoff" />,
  ];

  return (
    <section id="execution-story" className="relative bg-[#fbfcff] py-24">
      <div className="container-page">
        <div className="max-w-5xl mb-16">
          <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]">
            {page.execution.label}
          </p>

          <h2 className="mt-4 text-4xl md:text-7xl leading-tight tracking-[-0.055em] font-medium">
            {page.execution.title}
          </h2>
        </div>

        <div className="sticky top-24 z-20 mb-12 rounded-full bg-white/85 backdrop-blur border border-black/10 p-2">
          <div className="relative h-2 rounded-full bg-black/8 overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#14b8a6]"
            />
          </div>
        </div>

        <div className="space-y-24">
          {page.execution.story.map((item, index) => (
            <StoryBlock
              key={item.title}
              index={index}
              eyebrow={item.eyebrow}
              title={item.title}
              body={item.body}
              visual={visuals[index]}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBlock({
  index,
  eyebrow,
  title,
  body,
  visual,
  reverse = false,
}: {
  index: number;
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
      className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2 lg:grid-cols-[1.15fr_0.85fr]" : ""
      }`}
    >
      <motion.div variants={fadeUp}>
        <div className="text-sm text-black/35 mb-5">0{index + 1}</div>

        <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]">
          {eyebrow}
        </p>

        <h3 className="mt-4 text-3xl md:text-5xl leading-tight tracking-[-0.04em] font-medium">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-black/58 max-w-xl">
          {body}
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>{visual}</motion.div>
    </motion.div>
  );
}

/* ---------------- UNIQUE SCENE 1: TRIAGE BOARD ---------------- */

function TriageBoard() {
  const { t } = useLang();
  const visual = t.pages.action.visual;

  const statuses = [
    visual.priorityScored,
    visual.outreachTriggered,
    visual.executionLive,
  ].filter(Boolean);

  const active = useSceneCycle(statuses.length, 2200);
  const activeStatus = statuses[active] ?? visual.priorityScored;

  return (
    <div className="relative rounded-[38px] bg-white border border-black/10 p-5 md:p-7 shadow-[0_25px_90px_rgba(0,0,0,0.07)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(239,68,68,0.10),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(20,184,166,0.12),transparent_38%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-black/45">Intake triage</p>
            <h4 className="mt-1 text-2xl font-medium tracking-[-0.03em]">
              Alert becomes a managed case
            </h4>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-5">
          <div className="rounded-[28px] bg-[#10131a] text-white p-5">
            <p className="text-sm text-white/45">Severity score</p>

            <div className="mt-6 relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full border-[18px] border-white/10" />
              <motion.div
                key={active}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: active === 0 ? 55 : active === 1 ? 125 : 190, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 w-[86px] h-1.5 origin-left rounded-full bg-red-300"
              />

              <div className="absolute inset-10 rounded-full bg-white text-[#10131a] flex flex-col items-center justify-center">
                <span className="text-4xl font-medium">
                  {active === 0 ? "82" : active === 1 ? "64" : "41"}
                </span>
                <span className="text-xs text-black/40">risk</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStatus}
                variants={swapText}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="mt-5 rounded-2xl bg-white/8 border border-white/10 p-4"
              >
                <p className="text-xs text-white/40">Next step</p>
                <p className="mt-1 text-sm font-medium">{activeStatus}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            {statuses.map((status, index) => {
              const isActive = index === active;

              return (
                <motion.div
                  key={status}
                  animate={{
                    opacity: isActive ? 1 : 0.54,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-2xl border p-4 ${
                    isActive
                      ? "bg-[#7c3aed] border-[#7c3aed] text-white shadow-[0_18px_40px_rgba(124,58,237,0.22)]"
                      : "bg-[#fbfcff] border-black/8 text-black/65"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === 0 && <BellRing size={20} />}
                    {index === 1 && <PhoneForwarded size={20} />}
                    {index === 2 && <ShieldCheck size={20} />}
                    <p className="text-sm font-medium">{status}</p>
                  </div>

                  <ProgressBar active={isActive} />
                </motion.div>
              );
            })}

            <div className="rounded-2xl bg-[#10131a] text-white p-5">
              <p className="text-sm text-white/45">SLA window</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-medium">18</span>
                <span className="pb-1 text-white/45">minutes remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UNIQUE SCENE 2: DECISION MATRIX ---------------- */

function DecisionMatrix() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const recommendations = visual.recommendations ?? [];
  const active = useSceneCycle(recommendations.length, 2200);

  return (
    <div className="relative rounded-[38px] bg-white border border-black/10 p-5 md:p-7 shadow-[0_25px_90px_rgba(0,0,0,0.07)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.12),transparent_40%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div>
            <p className="text-sm text-black/45">Decision support</p>
            <h4 className="mt-1 text-2xl font-medium tracking-[-0.03em]">
              Recommended next action
            </h4>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center">
            <Brain size={24} />
          </div>
        </div>

        <div className="rounded-[28px] border border-black/8 bg-[#fbfcff] overflow-hidden">
          <div className="grid grid-cols-[1.3fr_0.8fr_0.8fr] gap-4 px-5 py-4 border-b border-black/8 text-xs uppercase tracking-[0.15em] text-black/35">
            <span>Recommendation</span>
            <span>Confidence</span>
            <span>Owner</span>
          </div>

          {recommendations.map((item, index) => {
            const isActive = index === active;
            const confidence = [91, 84, 76, 69][index % 4];

            return (
              <motion.div
                key={item}
                animate={{
                  backgroundColor: isActive ? "rgba(124,58,237,0.07)" : "rgba(255,255,255,0)",
                }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-[1.3fr_0.8fr_0.8fr] gap-4 px-5 py-5 border-b border-black/8 last:border-b-0 items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-[#7c3aed] text-white" : "bg-black/5 text-black/45"
                    }`}
                  >
                    <CheckCircle2 size={17} />
                  </div>
                  <span className="text-sm text-black/72">{item}</span>
                </div>

                <div>
                  <p className="text-sm font-medium">{confidence}%</p>
                  <div className="mt-2 h-1.5 rounded-full bg-black/8 overflow-hidden">
                    <motion.div
                      animate={{ width: isActive ? `${confidence}%` : "34%" }}
                      transition={{ duration: 0.45 }}
                      className="h-full rounded-full bg-[#14b8a6]"
                    />
                  </div>
                </div>

                <span className="text-sm text-black/55">
                  {index % 2 === 0 ? "Clinical" : "Experience"}
                </span>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={recommendations[active]}
            variants={swapText}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="mt-5 rounded-2xl bg-[#10131a] text-white p-5 flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-sm text-white/45">{visual.executionLive}</p>
              <p className="mt-1 text-sm font-medium">{recommendations[active]}</p>
            </div>

            <ArrowRight className="text-[#14b8a6]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------------- UNIQUE SCENE 3: ASSISTANT WORKSPACE ---------------- */

function AssistantWorkspace() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const messages = visual.assistantMessages ?? [];
  const active = useSceneCycle(messages.length, 2400);

  return (
    <div className="relative rounded-[38px] bg-[#10131a] text-white border border-black/10 p-5 md:p-7 shadow-[0_25px_90px_rgba(16,19,26,0.18)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.36),transparent_36%),radial-gradient(circle_at_15%_85%,rgba(20,184,166,0.20),transparent_42%)]" />

      <div className="relative z-10 grid md:grid-cols-[0.85fr_1.15fr] gap-5 items-stretch">
        <div className="rounded-[28px] bg-white text-[#10131a] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                Assistant
              </p>
              <h4 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                Guided response
              </h4>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-[#10131a] text-white flex items-center justify-center">
              <Bot size={24} />
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-black/10 bg-[#fbfcff] p-4">
            <div className="rounded-2xl bg-white border border-black/8 p-4">
              <p className="text-sm text-black/45">Detected need</p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={messages[active]}
                  variants={swapText}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="mt-3 text-lg font-medium leading-7"
                >
                  {messages[active]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#10131a] text-white p-4">
              <Languages size={18} className="text-[#14b8a6]" />
              <span className="text-sm text-white/70">
                {messages[3] ?? visual.executionLive}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
          <p className="text-sm text-white/45 mb-5">Conversation plan</p>

          <div className="space-y-4">
            {messages.map((message, index) => {
              const isActive = index === active;

              return (
                <motion.div
                  key={message}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    x: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-2xl p-4 border ${
                    isActive
                      ? "bg-white text-[#10131a] border-white"
                      : "bg-white/5 text-white/65 border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? "bg-[#7c3aed]/10 text-[#7c3aed]" : "bg-white/10 text-white"
                      }`}
                    >
                      <MessageCircle size={16} />
                    </div>

                    <p className="text-sm leading-6">{message}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl bg-[#14b8a6]/12 border border-[#14b8a6]/20 p-4 flex items-center gap-3">
            <PhoneForwarded size={18} className="text-[#14b8a6]" />
            <span className="text-sm text-white/75">{visual.outreachTriggered}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UNIQUE SCENE 4: TEAM HANDOFF ---------------- */

function TeamHandoffBoard() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const teams = visual.teams ?? [];
  const active = useSceneCycle(teams.length, 2300);

  return (
    <div className="relative rounded-[38px] bg-white border border-black/10 p-5 md:p-7 shadow-[0_25px_90px_rgba(0,0,0,0.07)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(20,184,166,0.14),transparent_40%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div>
            <p className="text-sm text-black/45">Team handoff</p>
            <h4 className="mt-1 text-2xl font-medium tracking-[-0.03em]">
              One case, many owners
            </h4>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-[#10131a] text-white flex items-center justify-center">
            <Network size={24} />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {teams.map((team, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={team}
                animate={{
                  y: isActive ? -4 : 0,
                  opacity: isActive ? 1 : 0.58,
                }}
                transition={{ duration: 0.35 }}
                className={`rounded-[24px] border p-4 min-h-[220px] ${
                  isActive
                    ? "bg-[#10131a] text-white border-[#10131a] shadow-[0_18px_45px_rgba(16,19,26,0.20)]"
                    : "bg-[#fbfcff] text-[#10131a] border-black/8"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    isActive ? "bg-white text-[#10131a]" : "bg-[#7c3aed]/10 text-[#7c3aed]"
                  }`}
                >
                  <Users size={19} />
                </div>

                <h5 className="mt-5 text-lg font-medium">{team}</h5>

                <div className="mt-5 space-y-2">
                  <div className={`h-2 rounded-full ${isActive ? "bg-white/15" : "bg-black/6"}`}>
                    <motion.div
                      animate={{ width: isActive ? "82%" : "38%" }}
                      transition={{ duration: 0.45 }}
                      className={`h-full rounded-full ${isActive ? "bg-[#14b8a6]" : "bg-[#7c3aed]"}`}
                    />
                  </div>

                  <p className={`text-xs ${isActive ? "text-white/45" : "text-black/40"}`}>
                    {isActive ? visual.synced : "Queued"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl bg-[#fbfcff] border border-black/8 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GitBranch size={20} className="text-[#7c3aed]" />
            <span className="text-sm text-black/62">{visual.bottlenecks}</span>
          </div>

          <span className="rounded-full bg-[#14b8a6]/10 text-[#0f766e] px-4 py-2 text-sm">
            {visual.synced}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- QUOTE ---------------- */

function MotionQuote() {
  const { t } = useLang();
  const page = t.pages.action;

  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="relative rounded-[54px] bg-[#10131a] text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(124,58,237,0.35),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.18),transparent_42%)]" />

          <div className="relative z-10 px-7 py-20 md:px-16 md:py-24 max-w-6xl">
            <ArrowRight className="text-[#14b8a6] mb-8" size={38} />

            <motion.h3
              variants={fadeUp}
              className="text-4xl md:text-7xl leading-tight tracking-[-0.055em] font-medium"
            >
              {page.quoteLines[0]}
              <span className="block text-white/45">{page.quoteLines[1]}</span>
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- NAVIGATOR ---------------- */

function CareNavigatorSection() {
  const { t } = useLang();
  const page = t.pages.action;

  return (
    <section className="py-24 bg-[#fbfcff]">
      <div className="container-page">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]">
            {page.navigator.label}
          </p>

          <h2 className="mt-4 text-4xl md:text-7xl leading-tight tracking-[-0.055em] font-medium">
            {page.navigator.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/60 max-w-3xl mx-auto">
            {page.navigator.body}
          </p>
        </div>

        <CareNavigatorVisual />
      </div>
    </section>
  );
}

function CareNavigatorVisual() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const steps = visual.navigatorSteps ?? [];
  const active = useSceneCycle(steps.length, 2300);
  const activeStep = steps[active] ?? visual.navigatorContinuity;

  const icons = [CalendarCheck, Stethoscope, MessageCircle, HeartHandshake] as const;

  return (
    <div className="relative rounded-[54px] bg-white border border-black/10 overflow-hidden shadow-[0_35px_110px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.10),transparent_42%)]" />

      <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 p-6 md:p-10">
        <div className="rounded-[34px] bg-[#10131a] text-white p-6 md:p-8">
          <p className="text-sm text-white/45">{visual.navigatorResult}</p>

          <AnimatePresence mode="wait">
            <motion.h4
              key={activeStep}
              variants={swapText}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="mt-3 text-3xl md:text-5xl leading-tight tracking-[-0.045em] font-medium"
            >
              {activeStep}
            </motion.h4>
          </AnimatePresence>

          <p className="mt-6 text-white/58 leading-7">{visual.navigatorContinuity}</p>

          <div className="mt-8 rounded-2xl bg-white text-[#10131a] p-5 flex items-center justify-between gap-4">
            <span className="text-sm">{visual.activeGuidance}</span>
            <ArrowRight size={20} className="text-[#7c3aed]" />
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? Route;
            const isActive = index === active;

            return (
              <motion.div
                key={step}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  x: isActive ? 0 : 10,
                }}
                transition={{ duration: 0.35 }}
                className={`rounded-[26px] border p-5 flex items-center gap-4 ${
                  isActive
                    ? "bg-white border-[#7c3aed]/30 shadow-[0_18px_45px_rgba(124,58,237,0.12)]"
                    : "bg-[#fbfcff] border-black/8"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-[#7c3aed] text-white" : "bg-[#10131a] text-white"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <div className="min-w-0">
                  <h5 className="text-lg font-medium">{step}</h5>
                  <p className="mt-1 text-sm text-black/45">{visual.realTimeGuidance}</p>
                  <ProgressBar active={isActive} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- HUMAN MESSAGE ---------------- */

function HumanMessage() {
  const { t } = useLang();
  const page = t.pages.action;

  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="relative rounded-[54px] border border-black/10 bg-white overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.06)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.12),transparent_38%)]" />

          <motion.div
            variants={fadeUp}
            className="relative z-10 px-7 py-20 md:px-16 md:py-24 max-w-6xl"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-[#7c3aed]">
              {page.human.label}
            </p>

            <h2 className="mt-5 text-4xl md:text-7xl leading-tight tracking-[-0.055em] font-medium">
              {page.human.title}
              <span className="block text-black/45">{page.human.accent}</span>
            </h2>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7c3aed]/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function FinalCTA() {
  const { t } = useLang();
  const page = t.pages.action;

  return (
    <section className="py-28 bg-[#10131a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-140px] right-[10%] w-[420px] h-[420px] rounded-full bg-[#7c3aed]/30 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[10%] w-[420px] h-[420px] rounded-full bg-[#14b8a6]/20 blur-3xl" />
      </div>

      <div className="container-page relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.22em] text-white/50">
            {page.cta.label}
          </p>

          <h2 className="mt-4 text-4xl md:text-7xl leading-tight tracking-[-0.055em] font-medium">
            {page.cta.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65 max-w-2xl">
            {page.cta.body}
          </p>

          <div className="mt-9">
            <Link
              to="/request-demo"
              className="inline-flex rounded-full bg-white text-[#10131a] px-8 py-4 text-sm hover:bg-[#7c3aed] hover:text-white transition-colors"
            >
              {page.primaryCta}
            </Link>
          </div>
        </div>

        <ExecutionFinalVisual />
      </div>
    </section>
  );
}

function ExecutionFinalVisual() {
  const { t } = useLang();
  const visual = t.pages.action.visual;
  const rows = visual.finalRows ?? [];
  const active = useSceneCycle(rows.length, 2200);

  const icons = [BellRing, PhoneForwarded, Stethoscope, Workflow, Route] as const;
  const activeRow = rows[active] ?? rows[0];

  return (
    <div className="relative rounded-[42px] border border-white/10 bg-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.25),transparent_45%)]" />

      <div className="relative z-10 p-5 md:p-7">
        <div className="rounded-[30px] bg-white text-[#10131a] p-5 mb-5">
          <p className="text-sm text-black/45">{visual.executionLive}</p>

          <AnimatePresence mode="wait">
            <motion.h4
              key={activeRow?.label}
              variants={swapText}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
              className="mt-2 text-3xl font-medium tracking-[-0.04em]"
            >
              {activeRow?.label}
            </motion.h4>
          </AnimatePresence>

          <p className="mt-2 text-black/55">{activeRow?.status}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {rows.map((row, index) => {
            const Icon = icons[index] ?? Route;
            const isActive = index === active;

            return (
              <motion.div
                key={row.label}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.35 }}
                className={`rounded-2xl border p-4 ${
                  isActive
                    ? "bg-[#7c3aed] border-[#7c3aed] text-white"
                    : "bg-white/8 border-white/10 text-white/65"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white text-[#10131a]" : "bg-white/10 text-[#14b8a6]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">{row.label}</p>
                    <p className={`mt-1 text-xs ${isActive ? "text-white/65" : "text-white/35"}`}>
                      {row.status}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}