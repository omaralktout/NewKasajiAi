import { motion } from "framer-motion";
import {
  Activity,
  AudioWaveform,
  Brain,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Mic,
  Network,
  PhoneCall,
  Radar,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLang } from "../lib/useLang";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

export default function VoicePulsePage() {
  const { t } = useLang();
  const page = t.pages.voice;

  return (
    <main className="min-h-screen bg-white text-[#10131a] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-44 md:pt-48 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-28 right-[-120px] w-[420px] h-[420px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
          <div className="absolute bottom-10 left-[-120px] w-[360px] h-[360px] rounded-full bg-[#14b8a6]/10 blur-3xl" />
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
              className="mt-7 text-lg md:text-xl leading-8 text-black/62 max-w-2xl"
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
                href="#voicepulse-flow"
                className="rounded-full border border-black/12 px-7 py-3.5 text-sm hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
              >
                {page.secondaryCta}
              </a>
            </motion.div>
          </motion.div>

          {/* HERO ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[36px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)] p-6 md:p-8 overflow-hidden">
              <div className="absolute top-[-80px] right-[-70px] w-52 h-52 rounded-full bg-[#7c3aed]/10 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-black/45">{page.visual.patientJourney}</p>
                  <h3 className="text-xl font-medium mt-1">
                    {page.visual.experienceSignalMap}
                  </h3>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-11 h-11 rounded-full bg-[#7c3aed]/10 flex items-center justify-center"
                >
                  <Activity className="text-[#7c3aed]" size={22} />
                </motion.div>
              </div>

              <div className="relative z-10">
                {page.visual.journeySignals.map((label, index) => (
                  <JourneySignal key={label} label={label} delay={index * 0.35} active={index % 2 === 0} />
                ))}
              </div>

              <div className="relative z-10 mt-10 grid grid-cols-3 gap-3">
                {page.visual.metrics.map((metric) => (
                  <MiniMetric key={metric.title} title={metric.title} value={metric.value} />
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-24 hidden md:flex rounded-2xl bg-[#10131a] text-white px-5 py-4 shadow-xl items-center gap-3"
            >
              <MessageCircle size={20} />
              <span className="text-sm">{page.visual.feedbackReceived}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOW */}
      <section id="voicepulse-flow" className="py-24 bg-[#fbfcff]">
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
              visual={<SurveyLogicAnimation />}
            />

            <FeatureBlock
              reverse
              eyebrow={page.capabilities[1].tag}
              title={page.capabilities[1].title}
              body={page.capabilities[1].text}
              visual={<CallRecordingAnimation />}
            />

            <QuoteSection />

            <FeatureBlock
              eyebrow={page.capabilities[2].tag}
              title={page.capabilities[2].title}
              body={page.capabilities[2].text}
              visual={<WorkshopAnimation />}
            />

            <FeatureBlock
              reverse
              eyebrow={page.capabilities[3].tag}
              title={page.capabilities[3].title}
              body={page.capabilities[3].text}
              visual={<SentimentRadarAnimation />}
            />
          </div>
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
              {page.lead.label}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-medium"
            >
              {page.lead.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-white/65 max-w-2xl"
            >
              {page.lead.body}
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

          <FinalSystemAnimation />
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

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
      className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
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

function JourneySignal({
  label,
  delay,
  active = false,
}: {
  label: string;
  delay: number;
  active?: boolean;
}) {
  return (
    <div className="relative flex items-center gap-4 py-3">
      <motion.div
        animate={active ? { scale: [1, 1.25, 1] } : {}}
        transition={{ duration: 2.6, repeat: Infinity, delay, ease: "easeInOut" }}
        className={`w-4 h-4 rounded-full ${active ? "bg-[#7c3aed]" : "bg-black/12"}`}
      />
      <span className="text-sm text-black/55">{label}</span>
    </div>
  );
}

function MiniMetric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#fbfcff] border border-black/8 p-4">
      <p className="text-xs text-black/40">{title}</p>
      <p className="mt-1 text-xl font-medium">{value}</p>
    </div>
  );
}

function SurveyLogicAnimation() {
  const { t } = useLang();
  const visual = t.pages.voice.visual;
  const icons = [Users, CalendarDays, Brain, Network] as const;

  return (
    <div className="relative rounded-[34px] bg-white border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[430px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.12),transparent_45%)] rounded-[34px]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h4 className="text-xl font-medium">{visual.surveyEngineTitle}</h4>
          <CheckCircle2 className="text-[#14b8a6]" />
        </div>

        <div className="space-y-5">
          {visual.surveyNodes.map((text, index) => {
            const Icon = icons[index] ?? Network;

            return (
              <motion.div
                key={text}
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 4.2,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#7c3aed]" />
                </div>

                <div>
                  <p className="font-medium">{text}</p>
                  <p className="text-sm text-black/45">
                    {visual.logicBranch} {index + 1}
                  </p>
                </div>

                {index < visual.surveyNodes.length - 1 && (
                  <motion.div
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute left-[34px] top-[72px] w-[2px] h-5 bg-[#7c3aed]/25"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CallRecordingAnimation() {
  const { t } = useLang();
  const visual = t.pages.voice.visual;

  return (
    <div className="rounded-[34px] bg-[#10131a] text-white p-7 md:p-9 shadow-[0_25px_90px_rgba(16,19,26,0.20)] min-h-[430px] relative overflow-hidden">
      <div className="absolute top-[-120px] right-[-90px] w-[300px] h-[300px] rounded-full bg-[#7c3aed]/35 blur-3xl" />

      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white/45 text-sm">{visual.recordingLabel}</p>
            <h4 className="text-2xl font-medium mt-1">{visual.recordingTime}</h4>
          </div>

          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 rounded-full bg-red-500/15 flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-red-500" />
          </motion.div>
        </div>

        <div className="mt-14 flex items-end gap-2 h-32">
          {Array.from({ length: 34 }).map((_, index) => (
            <motion.div
              key={index}
              animate={{
                height: [
                  18 + ((index * 11) % 70),
                  48 + ((index * 7) % 80),
                  22 + ((index * 5) % 65),
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: index * 0.06,
                ease: "easeInOut",
              }}
              className="flex-1 rounded-full bg-white/70"
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <PhoneCall size={20} className="text-[#14b8a6]" />
            <p className="mt-3 text-sm text-white/65">{visual.guidedInterview}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <AudioWaveform size={20} className="text-[#7c3aed]" />
            <p className="mt-3 text-sm text-white/65">{visual.qualitativeCapture}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  const { t } = useLang();
  const page = t.pages.voice;

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
        <Mic className="text-[#7c3aed] mb-8" size={34} />

        <h3 className="text-3xl md:text-6xl leading-tight tracking-[-0.04em] font-medium">
          “{page.quoteLines[0]}
          <span className="block text-black/45">
            {page.quoteLines[1]}”
          </span>
        </h3>
      </motion.div>
    </motion.div>
  );
}

function WorkshopAnimation() {
  const { t } = useLang();
  const visual = t.pages.voice.visual;
  const positions = [
    { x: "14%", y: "18%" },
    { x: "68%", y: "17%" },
    { x: "18%", y: "68%" },
    { x: "70%", y: "66%" },
  ];

  return (
    <div className="relative rounded-[34px] bg-white border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[430px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.10),transparent_45%)]" />

      <div className="absolute inset-0">
        {visual.workshopPeople.map((label, index) => (
          <motion.div
            key={label}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 4.2,
              delay: index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: positions[index]?.x, top: positions[index]?.y }}
          >
            <div className="w-24 h-24 rounded-full bg-[#10131a] text-white flex flex-col items-center justify-center shadow-xl">
              <Users size={22} />
              <span className="mt-2 text-xs">{label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7c3aed]/35"
      />

      <div className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] text-white flex flex-col items-center justify-center shadow-2xl">
        <Network size={26} />
        <span className="mt-2 text-sm">{visual.coDesign}</span>
      </div>
    </div>
  );
}

function SentimentRadarAnimation() {
  const { t } = useLang();
  const visual = t.pages.voice.visual;
  const positions = [
    { left: "15%", top: "32%" },
    { left: "34%", top: "24%" },
    { left: "64%", top: "31%" },
    { left: "73%", top: "58%" },
    { left: "25%", top: "66%" },
  ];

  return (
    <div className="relative rounded-[34px] bg-[#fbfcff] border border-black/10 p-7 md:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.06)] min-h-[460px] overflow-hidden">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-black/45">{visual.monitoringLabel}</p>
          <h4 className="text-xl font-medium mt-1">{visual.sentimentRadar}</h4>
        </div>

        <Radar className="text-[#7c3aed]" />
      </div>

      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-black/10" />
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-black/10" />
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-black/10" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[58%] origin-left w-36 h-[2px] bg-gradient-to-r from-[#7c3aed]/55 to-transparent"
      />

      {visual.channels.map((label, index) => (
        <motion.div
          key={label}
          animate={{
            opacity: [0.55, 1, 0.55],
            scale: [0.98, 1.04, 0.98],
          }}
          transition={{
            duration: 4.4,
            delay: index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-10 rounded-full bg-white border border-black/10 px-5 py-2.5 text-sm text-black/65 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
          style={positions[index]}
        >
          {label}
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-[58%] z-20 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10131a] text-white flex items-center justify-center shadow-2xl">
        <Brain size={30} />
      </div>
    </div>
  );
}

function FinalSystemAnimation() {
  const { t } = useLang();
  const visual = t.pages.voice.visual;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative rounded-[36px] bg-white/7 border border-white/10 p-7 md:p-9 min-h-[420px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.28),transparent_45%)]" />

      <div className="relative z-10 h-full flex flex-col justify-between min-h-[360px]">
        <div>
          <h4 className="text-2xl font-medium">{visual.finalEngineTitle}</h4>
          <p className="mt-3 text-white/55 max-w-md">
            {visual.finalEngineBody}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visual.finalEngineItems.map((item, index) => (
            <motion.div
              key={item}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.2,
                delay: index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl bg-white/8 border border-white/10 p-4"
            >
              <p className="text-sm text-white/55">0{index + 1}</p>
              <p className="mt-2 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
