import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  ChartBarIcon,
  BoltIcon,
  UsersIcon,
  TrophyIcon,
  CalendarDaysIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion, useInView } from "framer-motion";
import { createPageUrl } from "@/utils";

const ease = [0.16, 1, 0.3, 1];

const features = [
  {
    title: "Personalized coach matching",
    description:
      "Share your goals and FitFinder pairs you with specialists for strength, skill, and recovery programs tailored to your schedule.",
    icon: UserGroupIcon,
  },
  {
    title: "Adaptive training plans",
    description:
      "Flexible programming evolves with every session so you always know the next drill, lift, or recovery block.",
    icon: BoltIcon,
  },
  {
    title: "Live performance insights",
    description:
      "Track progress across workouts, scrimmages, and conditioning to keep your growth visible and accountable.",
    icon: ChartBarIcon,
  },
  {
    title: "Local matchups",
    description:
      "Discover nearby athletes looking for the same intensity level and schedule games that fit your week.",
    icon: UsersIcon,
  },
  {
    title: "Pickup games",
    description:
      "Drop into community-run sessions or create your own, complete with roster invites and chat.",
    icon: SparklesIcon,
  },
  {
    title: "Versus challenges",
    description:
      "Compete in skill ladders, time trials, and head-to-head Versus events with rankings that refresh in real time.",
    icon: TrophyIcon,
  },
  {
    title: "Leaderboards and stat tracking",
    description:
      "Compare your metrics with friends and rivals, and spotlight standout performances across divisions.",
    icon: ChartBarIcon,
  },
  {
    title: "Integrated scheduling",
    description:
      "Sync coaching sessions, matchups, and recovery windows with reminders so nothing slips through the cracks.",
    icon: CalendarDaysIcon,
  },
];

const coachingHighlights = [
  "Elite coaches vetted for specialties in strength, agility, and game IQ.",
  "Structured programs that adapt from preseason to playoffs.",
  "Consistent check-ins that keep you accountable and progressing fast.",
];

const competitionHighlights = [
  "Matchups filtered by sport, skill level, and proximity.",
  "Pickup games and Versus events that keep your competitive edge sharp.",
  "Leaderboards, stats, and recaps that fuel the next challenge.",
];

const steps = [
  {
    title: "Tell us how you train and play",
    description:
      "Set your sport, goals, schedule, and competitive intensity so FitFinder understands your journey.",
  },
  {
    title: "Get matched with coaches and competitors",
    description:
      "Receive curated recommendations for trainers, programs, local rivals, and pickup games in one feed.",
  },
  {
    title: "Book sessions, join matchups, track progress",
    description:
      "Secure time with your coach, lock in Versus events, and capture stats that showcase improvement.",
  },
];

const testimonials = [
  {
    quote:
      "Coach Ren built a strength cycle that finally translated to game speed. The weekly adjustments kept me peaking through playoffs.",
    name: "Jordan Alvarez",
    handle: "@jordantrains",
    role: "Wing, semi-pro basketball",
  },
  {
    quote:
      "Versus alerts help my crew lock in competitive runs every weekend. Leaderboards keep us chasing the next win.",
    name: "Maya Chen",
    handle: "@mayagoesversus",
    role: "Forward, community league",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function Landing() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuresRef = useRef(null);
  const splitRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const finalCtaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const splitInView = useInView(splitRef, { once: true, amount: 0.2 });
  const howItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const finalCtaInView = useInView(finalCtaRef, { once: true, amount: 0.2 });

  const navItems = [
    {
      label: "Browse Coaches",
      action: () => navigate(createPageUrl("Browse")),
    },
    {
      label: "Find Matchups",
      action: () => navigate(createPageUrl("Versus")),
    },
    {
      label: "How it works",
      action: () => handleSmoothScroll("#how-it-works"),
    },
    {
      label: "Success stories",
      action: () => handleSmoothScroll("#testimonials"),
    },
  ];

  function handleSmoothScroll(selector) {
    const target = document.querySelector(selector);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/5 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={() => navigate(createPageUrl("Browse"))}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 text-lg font-semibold text-slate-950">
              FF
            </span>
            <span className="text-lg font-semibold tracking-tight">FitFinder</span>
          </button>
          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className="text-white/80 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex">
            <button
              type="button"
              onClick={() => navigate(createPageUrl("Browse"))}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-blue-400"
            >
              Launch app
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center rounded-md border border-white/10 p-2 text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-slate-900 px-6 py-6">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate(createPageUrl("Browse"))}
                className="flex items-center gap-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-blue-500 text-sm font-semibold text-slate-950">
                  FF
                </span>
                <span className="text-base font-semibold">FitFinder</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-white/10 p-2 text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full rounded-lg border border-white/10 px-4 py-3 text-left text-sm font-medium text-white/90 transition hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  navigate(createPageUrl("Browse"));
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Launch app
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,255,196,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(130deg,#020617,rgba(15,23,42,0.75))]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              >
                Train smarter. Compete harder.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="mt-6 max-w-xl text-lg text-white/70"
              >
                FitFinder connects you with elite coaches to elevate every drill and finds local competitors for matchups that keep you improving faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => navigate(createPageUrl("Browse"))}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-blue-400"
                >
                  Find Coaches
                </button>
                <button
                  type="button"
                  onClick={() => navigate(createPageUrl("Versus"))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Find Matchups
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.45 }}
                className="mt-12 grid gap-4 text-sm text-white/60 sm:grid-cols-2"
              >
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-emerald-400" />
                  <span>Strength, skill, and conditioning programs that stay in sync with your goals.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 text-blue-400" />
                  <span>Pickup games, Versus events, and stat tracking in one connected platform.</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="relative w-full max-w-md lg:w-1/2"
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-6 shadow-[0_40px_80px_-40px_rgba(6,182,212,0.4)]"
              >
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Today</span>
                  <span>All Activities</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-emerald-300/90">
                      <span>Coached Session</span>
                      <span>7:00 AM</span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">Power + Mobility with Coach Ren</p>
                    <p className="mt-2 text-sm text-white/70">Strength lab • 60 min | Focus: explosive first step</p>
                  </div>
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-blue-300/90">
                      <span>Versus Matchup</span>
                      <span>5:30 PM</span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">FitFinder League Pickup</p>
                    <p className="mt-2 text-sm text-white/70">Downtown Arena • RSVP 8/10 | Stats tracked live</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                      <span>New in your area</span>
                      <span>Just now</span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">3 new rivals joined Versus near you</p>
                    <p className="mt-2 text-sm text-white/70">Challenge them to a skills ladder or invite to your next game.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-white">Everything training and competing demands.</h2>
              <p className="mt-4 text-base text-white/70">
                FitFinder unifies coaching, sessions, matchups, and performance tools so athletes stay locked in from practice to game day.
              </p>
            </div>
            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <feature.icon className="h-8 w-8 text-emerald-300" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={splitRef}
          id="training-vs-competing"
          initial="hidden"
          animate={splitInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-slate-900"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              animate={splitInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >
              <h3 className="text-2xl font-semibold text-white">Train with the right coaches</h3>
              <p className="mt-4 text-base text-white/70">
                Partner with experts who specialize in your sport, understand your schedule, and deliver programming that adapts week to week.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {coachingHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => navigate(createPageUrl("Browse"))}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Browse Coaches
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={splitInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >
              <h3 className="text-2xl font-semibold text-white">Compete with the right rivals</h3>
              <p className="mt-4 text-base text-white/70">
                FitFinder Versus keeps your calendar full with matchups that match your drive, whether you prefer friendly runs or ranked challenges.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {competitionHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => navigate(createPageUrl("Versus"))}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
              >
                Find Matchups
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={howItWorksRef}
          id="how-it-works"
          initial="hidden"
          animate={howItWorksInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-white">How FitFinder works</h2>
              <p className="mt-4 text-base text-white/70">
                One profile powers your training and competition, keeping your coach, matchups, and schedule on the same page.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={cardVariants}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                  initial="hidden"
                  animate={howItWorksInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.12, duration: 0.6, ease }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-base font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={testimonialsRef}
          id="testimonials"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-slate-900"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-white">Success stories from both sides</h2>
              <p className="mt-4 text-base text-white/70">
                Athletes lean on FitFinder for transformational coaching and competitive energy that keeps progress real.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  variants={cardVariants}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <p className="text-base text-white/80">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400/60 to-blue-500/60" />
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/60">{testimonial.handle}</p>
                      <p className="mt-1 text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={finalCtaRef}
          initial="hidden"
          animate={finalCtaInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-slate-950"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-slate-900 px-8 py-16 text-center">
            <h2 className="text-3xl font-semibold text-white">Start training and competing with FitFinder.</h2>
            <p className="mt-4 text-base text-white/70">
              Lock in your next coaching session, join a Versus matchup, and keep your entire performance calendar organized in one place.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate(createPageUrl("Browse"))}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-blue-400"
              >
                Find Coaches
              </button>
              <button
                type="button"
                onClick={() => navigate(createPageUrl("Versus"))}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Find Matchups
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-blue-500 text-sm font-semibold text-slate-950">
              FF
            </span>
            <div>
              <p className="font-semibold text-white">FitFinder</p>
              <p className="text-xs text-white/50">Training and Versus matchups in one app.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate(createPageUrl("Browse"))}
              className="text-white/70 transition hover:text-white"
            >
              Browse Coaches
            </button>
            <button
              type="button"
              onClick={() => navigate(createPageUrl("Versus"))}
              className="text-white/70 transition hover:text-white"
            >
              Find Matchups
            </button>
            <button
              type="button"
              onClick={() => navigate(createPageUrl("Calendar"))}
              className="text-white/70 transition hover:text-white"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={() => handleSmoothScroll("#how-it-works")}
              className="text-white/70 transition hover:text-white"
            >
              How it works
            </button>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} FitFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
