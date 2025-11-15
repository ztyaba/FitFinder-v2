import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
  TrophyIcon,
  CalendarDaysIcon,
  SignalIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { motion, useInView } from 'framer-motion';
import { createPageUrl } from '@/utils';

const ease = [0.16, 1, 0.3, 1];

const features = [
  {
    name: 'Personalized coach matching',
    description: 'Get paired with specialists who understand your sport, goals, and schedule for high-impact guidance.',
    icon: UserGroupIcon
  },
  {
    name: 'Adaptive training plans',
    description: 'Dynamic programming that evolves with your performance, recovery metrics, and upcoming competitions.',
    icon: BoltIcon
  },
  {
    name: 'Live performance insights',
    description: 'Track velocity, stamina, and skill drills in real time to stay accountable between every session.',
    icon: SignalIcon
  },
  {
    name: 'Integrated scheduling',
    description: 'Book workouts, sync calendars, and receive automated reminders that keep your training cadence locked in.',
    icon: CalendarDaysIcon
  },
  {
    name: 'Local matchups',
    description: 'Discover nearby athletes ready to run scrimmages, sparring rounds, or competitive drills on demand.',
    icon: RocketLaunchIcon
  },
  {
    name: 'Pickup games',
    description: 'Drop into weekly pickup runs and small-sided games curated around your position, skill level, and availability.',
    icon: ArrowRightIcon
  },
  {
    name: 'Versus challenges',
    description: 'Join leaderboard-driven challenges that fuel rivalries, track streaks, and keep you sharp all season.',
    icon: TrophyIcon
  },
  {
    name: 'Leaderboards & stat cards',
    description: 'Showcase your rankings, matchup history, and verified stats to measure progress against peers.',
    icon: ChartBarSquareIcon
  }
];

const howItWorksSteps = [
  {
    title: 'Tell us how you train and play',
    description: 'Share the sports you love, your training style, competitive goals, and availability so FitFinder can calibrate the experience.'
  },
  {
    title: 'Get matched with coaches and competitors',
    description: 'Our engine pairs you with elite coaches plus local athletes who match your intensity for drills, scrimmages, and versus events.'
  },
  {
    title: 'Book sessions, join matchups, track progress',
    description: 'Schedule lessons, RSVP to pickup games, and monitor improvements as your training and competition calendar stays in sync.'
  }
];

const testimonials = [
  {
    quote: 'My FitFinder coach dialed in my conditioning, and the weekly check-ins kept my progress on track for tournament season.',
    name: 'Jordan Ellis',
    handle: '@jordantheguard',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=96&h=96&q=80',
    focus: 'Coaching'
  },
  {
    quote: 'Versus matchups turned my training into friendly rivalries—now I have a squad pushing me every week and a leaderboard to prove it.',
    name: 'Kayla Ruiz',
    handle: '@kaylaruns',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=96&h=96&q=80',
    focus: 'Versus'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const floatingTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut'
};

function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return [ref, isInView];
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [featuresRef, featuresInView] = useReveal();
  const [splitRef, splitInView] = useReveal();
  const [workflowRef, workflowInView] = useReveal();
  const [testimonialsRef, testimonialsInView] = useReveal();
  const [ctaRef, ctaInView] = useReveal();

  const handleNavigate = (url) => {
    navigate(url);
  };

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(hash);
    if (target) {
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
  };

  const heroButtonVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.15 } }
  };

  const heroPhoneVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease, delay: 0.2 }
    }
  };

  return (
    <div className="bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500">
              <span className="text-lg font-semibold text-white">FF</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">FitFinder</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            <a href="/browse" onClick={(e) => { e.preventDefault(); handleNavigate(createPageUrl('Browse')); }} className="text-sm font-medium text-white/80 transition hover:text-white">
              Browse Coaches
            </a>
            <a href="/versus" onClick={(e) => { e.preventDefault(); handleNavigate(createPageUrl('Versus')); }} className="text-sm font-medium text-white/80 transition hover:text-white">
              Find Matchups
            </a>
            <a href="#how-it-works" onClick={handleSmoothScroll} className="text-sm font-medium text-white/80 transition hover:text-white">
              How it works
            </a>
            <a href="#testimonials" onClick={handleSmoothScroll} className="text-sm font-medium text-white/80 transition hover:text-white">
              Success stories
            </a>
          </div>
          <div className="hidden lg:flex">
            <button
              onClick={() => handleNavigate(createPageUrl('Browse'))}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-100"
            >
              Launch app
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-slate-950 px-6 py-6 shadow-xl ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500">
                  <span className="text-lg font-semibold text-white">FF</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">FitFinder</span>
              </div>
              <button
                type="button"
                className="rounded-md p-2 text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-4 py-6">
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleNavigate(createPageUrl('Browse')); }}
                    className="block w-full text-left text-base font-medium text-white/80 transition hover:text-white"
                  >
                    Browse Coaches
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleNavigate(createPageUrl('Versus')); }}
                    className="block w-full text-left text-base font-medium text-white/80 transition hover:text-white"
                  >
                    Find Matchups
                  </button>
                  <a href="#how-it-works" onClick={handleSmoothScroll} className="block text-base font-medium text-white/80 transition hover:text-white">
                    How it works
                  </a>
                  <a href="#testimonials" onClick={handleSmoothScroll} className="block text-base font-medium text-white/80 transition hover:text-white">
                    Success stories
                  </a>
                </div>
                <div className="py-6">
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleNavigate(createPageUrl('Browse')); }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-100"
                  >
                    Launch app
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
          <div className="absolute inset-x-0 -top-32 -z-10 opacity-40 blur-3xl">
            <div className="mx-auto h-72 w-72 rotate-45 rounded-full bg-gradient-to-br from-emerald-500/60 via-blue-500/40 to-transparent" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-32 lg:pt-32">
            <div className="max-w-xl">
              <motion.h1
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Train smarter. Compete harder.
              </motion.h1>
              <motion.p
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="mt-6 text-lg text-white/70"
              >
                FitFinder connects you with elite coaches for tailored training while lining up local competitors and matchups that keep you improving faster every week.
              </motion.p>
              <motion.div
                variants={heroButtonVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  onClick={() => handleNavigate(createPageUrl('Browse'))}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                >
                  Find Coaches
                </button>
                <button
                  onClick={() => handleNavigate(createPageUrl('Versus'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-200"
                >
                  Find Matchups
                </button>
              </motion.div>
              <motion.div
                variants={heroButtonVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.25, duration: 0.8, ease }}
                className="mt-10 flex items-center gap-3 text-sm text-white/50"
              >
                <CheckCircleIcon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                Calendar sync, stat tracking, and accountability built in.
              </motion.div>
            </div>
            <motion.div
              variants={heroPhoneVariants}
              initial="hidden"
              animate="visible"
              className="relative mx-auto w-full max-w-sm"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={floatingTransition}
                className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl"
              >
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-inner">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-emerald-300">Coached Session</p>
                      <p className="mt-2 text-base font-semibold text-white">Strength reset with Coach Mira</p>
                      <p className="mt-1 text-sm text-white/60">Tomorrow • 7:30 AM • Syncs to Calendar</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <p className="text-xs uppercase tracking-wide text-emerald-300">Versus Matchup</p>
                      <p className="mt-2 text-base font-semibold text-white">Pickup run at Lakeview Courts</p>
                      <p className="mt-1 text-sm text-white/60">Saturday • 10 spots • Ranked</p>
                    </div>
                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
                      <p className="text-xs uppercase tracking-wide text-blue-300">New in your area</p>
                      <p className="mt-2 text-base font-semibold text-white">3 new rivals matched to your profile</p>
                      <p className="mt-1 text-sm text-white/60">Tap to challenge or invite to drills</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          ref={featuresRef}
          variants={staggerContainer}
          initial="hidden"
          animate={featuresInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
        >
          <motion.div variants={fadeIn} className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Power up every session and showdown</h2>
            <p className="mt-4 text-base text-white/60">
              FitFinder blends premium coaching infrastructure with competitive energy, giving you the tools to train with purpose and show up ready to win.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={fadeIn}
                whileHover={{ y: -6, boxShadow: '0 24px 40px -24px rgba(16, 185, 129, 0.4)' }}
                transition={{ duration: 0.5, ease }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/80 to-blue-500/80 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.name}</h3>
                <p className="mt-3 text-sm text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          ref={splitRef}
          variants={fadeIn}
          initial="hidden"
          animate={splitInView ? 'visible' : 'hidden'}
          className="border-t border-white/5 bg-slate-950/60"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Training</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Train with the right coaches</h3>
              <p className="mt-3 text-sm text-white/60">
                Work with specialists who deliver structured plans, data-driven insights, and accountability that keeps you progressing every week.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-400" aria-hidden="true" />
                  Position-specific skill development and strength cycles.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-400" aria-hidden="true" />
                  Structured programming with video feedback and analytics.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-emerald-400" aria-hidden="true" />
                  Weekly accountability check-ins synced to your calendar.
                </li>
              </ul>
              <button
                onClick={() => handleNavigate(createPageUrl('Browse'))}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Browse Coaches
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Competition</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Compete with the right rivals</h3>
              <p className="mt-3 text-sm text-white/60">
                Fuel your edge with curated matchups, pickup games, and Versus events that pair you with athletes hungry for the same results.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-400" aria-hidden="true" />
                  Local matchups filtered by sport, role, and intensity level.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-400" aria-hidden="true" />
                  Ranked Versus events and pickup runs with live leaderboards.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-400" aria-hidden="true" />
                  Stat cards that capture highlights, wins, and streaks.
                </li>
              </ul>
              <button
                onClick={() => handleNavigate(createPageUrl('Versus'))}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
              >
                Find Matchups
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          ref={workflowRef}
          variants={staggerContainer}
          initial="hidden"
          animate={workflowInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
        >
          <motion.div variants={fadeIn} className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How FitFinder keeps you ready</h2>
            <p className="mt-4 text-base text-white/60">
              Combine guided coaching with competitive reps in three seamless steps.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeIn}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Step {index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/65">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="testimonials"
          ref={testimonialsRef}
          variants={fadeIn}
          initial="hidden"
          animate={testimonialsInView ? 'visible' : 'hidden'}
          className="border-y border-white/5 bg-slate-900/80"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Athletes leveling up with FitFinder</h2>
              <p className="mt-4 text-base text-white/60">
                Real stories from competitors and coached athletes who combine training discipline with matchup energy.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <motion.figure
                  key={testimonial.name}
                  variants={fadeIn}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <blockquote>
                    <p className="text-base text-white/70">“{testimonial.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-white/10 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.handle} • {testimonial.focus}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={ctaRef}
          variants={fadeIn}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-slate-900 p-10 text-center">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start training and competing with FitFinder.</h2>
              <p className="mt-4 text-base text-white/70">
                Secure your coaching roster, lock in pickup games, and keep your performance data synchronized in one place.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => handleNavigate(createPageUrl('Browse'))}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-100"
                >
                  Find Coaches
                </button>
                <button
                  onClick={() => handleNavigate(createPageUrl('Versus'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Find Matchups
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/50 lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} FitFinder. Train smarter, compete harder.</p>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" onClick={handleSmoothScroll} className="transition hover:text-white">
              How it works
            </a>
            <a href="#testimonials" onClick={handleSmoothScroll} className="transition hover:text-white">
              Success stories
            </a>
            <button onClick={() => handleNavigate(createPageUrl('Calendar'))} className="transition hover:text-white">
              View calendar
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
