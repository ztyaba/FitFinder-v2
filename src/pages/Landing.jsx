import { Fragment, useState, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  TrophyIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { ArrowRightIcon, CalendarDaysIcon, SparklesIcon } from '@heroicons/react/20/solid'
import { motion, useInView } from 'framer-motion'
import { createPageUrl } from '@/utils'

const navigation = [
  { name: 'Browse Coaches', href: createPageUrl('Browse'), type: 'route' },
  { name: 'Find Matchups', href: createPageUrl('Versus'), type: 'route' },
  { name: 'How it works', target: 'how-it-works', type: 'scroll' },
  { name: 'Success stories', target: 'testimonials', type: 'scroll' },
]

const features = [
  {
    title: 'Personalized coach matches',
    description:
      'Answer a few questions and FitFinder pairs you with specialists in skill work, conditioning, and sport IQ who match your goals and schedule.',
    icon: UserGroupIcon,
  },
  {
    title: 'Adaptive training plans',
    description:
      'Session plans evolve with your progress—coaches adjust intensity, drills, and recovery based on wearable data and feedback.',
    icon: BoltIcon,
  },
  {
    title: 'Live performance insights',
    description:
      'Metrics from workouts, scrimmages, and games flow into one dashboard so you and your coach can make smarter tweaks.',
    icon: ChartBarIcon,
  },
  {
    title: 'Local matchups & pickup games',
    description:
      'Discover nearby Versus events, weekly pickup runs, and friendly rivalries that keep your competitive edge sharp.',
    icon: Squares2X2Icon,
  },
  {
    title: 'Versus challenges & stat tracking',
    description:
      'Join leaderboards, log highlights, and earn badges as you climb your division with transparent stat cards.',
    icon: TrophyIcon,
  },
  {
    title: 'Integrated scheduling & reminders',
    description:
      'Book sessions, add matchups to your calendar, and receive automated reminders so no rep or rivalry slips through.',
    icon: CalendarDaysIcon,
  },
]

const coachingHighlights = [
  'Verified coaches by sport, level, and specialty.',
  'Structured skill, strength, and conditioning programs.',
  'Progress reviews and accountability check-ins.',
  'Sync training blocks to your FitFinder Calendar.',
]

const matchupHighlights = [
  'Versus matchmaking for rivals, scrimmages, and pickup runs.',
  'Skill-based leaderboards that reward consistency.',
  'Host or join challenges with live scoring overlays.',
  'Community updates on new athletes in your area.',
]

const steps = [
  {
    number: '01',
    title: 'Tell us how you train and play',
    description:
      'Share your sport, position, preferred schedule, and competitive goals so FitFinder can understand your routine.',
  },
  {
    number: '02',
    title: 'Get matched with coaches and rivals',
    description:
      'Receive curated lists of coaches for training sessions plus nearby competitors ready for Versus matchups.',
  },
  {
    number: '03',
    title: 'Book sessions, join matchups, track progress',
    description:
      'Reserve training times, RSVP to games, and track every rep, score, and stat in one unified calendar.',
  },
]

const testimonials = [
  {
    quote:
      '“My FitFinder coach dialed in a hybrid lifting and footwork plan while Versus pushed me into weekly battles that kept my edge.”',
    name: 'Jordan Reeves',
    handle: '@jr_pointguard',
  },
  {
    quote:
      '“We host pickup runs every Thursday now. The app tracks stats, schedules the gym, and surfaces new players automatically.”',
    name: 'Amelia Shah',
    handle: '@coachamelia',
  },
  {
    quote:
      '“Scheduling private sessions and locking in weekend matchups from one place finally made training and competing feel connected.”',
    name: 'Riley Watkins',
    handle: '@rw_competes',
  },
]

const phonePreviewItems = [
  {
    title: 'Pickup Run · Downtown Rec',
    time: 'Tonight · 7:30 PM',
    status: '5 spots left',
    accent: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    title: 'Skill Work with Coach Lena',
    time: 'Thursday · 6:15 AM',
    status: 'Confirmed',
    accent: 'bg-blue-500/20 text-blue-300',
  },
  {
    title: 'New competitors nearby',
    time: 'Versus alert',
    status: 'Kai, Morgan, Elise joined FitFinder',
    accent: 'bg-slate-500/20 text-slate-200',
  },
]

const transitionEase = [0.16, 1, 0.3, 1]

const useReveal = (options = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px', ...options })
  return [ref, isInView]
}

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const [featuresRef, featuresInView] = useReveal()
  const [splitRef, splitInView] = useReveal()
  const [stepsRef, stepsInView] = useReveal()
  const [testimonialsRef, testimonialsInView] = useReveal()
  const [ctaRef, ctaInView] = useReveal()

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: transitionEase } },
    }),
    []
  )

  const featureVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.08, duration: 0.6, ease: transitionEase },
      }),
    }),
    []
  )

  const testimonialVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      visible: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.12, duration: 0.6, ease: transitionEase },
      }),
    }),
    []
  )

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 88
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleNavigate = (path) => {
    setMobileMenuOpen(false)
    navigate(path)
  }

  return (
    <div className="bg-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-500 flex items-center justify-center font-semibold text-slate-950">
              FF
            </div>
            <span className="text-lg font-semibold tracking-tight">FitFinder</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm">
            {navigation.map((item) => {
              if (item.type === 'route') {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item.href)}
                    className="font-medium text-slate-200 transition hover:text-white"
                  >
                    {item.name}
                  </button>
                )
              }
              return (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.target)}
                  className="font-medium text-slate-200 transition hover:text-white"
                >
                  {item.name}
                </button>
              )
            })}
          </div>
          <div className="hidden lg:flex">
            <button
              onClick={() => handleNavigate(createPageUrl('Browse'))}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-blue-500/30"
            >
              Launch app
            </button>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as={Fragment} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-slate-900 px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-500 flex items-center justify-center font-semibold text-slate-950">
                  FF
                </div>
                <span className="font-semibold">FitFinder</span>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-slate-200 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-white/5">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => {
                    if (item.type === 'route') {
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleNavigate(item.href)}
                          className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-white/10"
                        >
                          {item.name}
                          <ArrowRightIcon className="h-4 w-4" />
                        </button>
                      )
                    }
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleScrollTo(item.target)}
                        className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-white/10"
                      >
                        {item.name}
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    )
                  })}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => handleNavigate(createPageUrl('Browse'))}
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30"
                  >
                    Launch app
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-xl text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: transitionEase }}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  <SparklesIcon className="h-4 w-4" /> Elevate every rep
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: transitionEase }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Train smarter. Compete harder.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: transitionEase }}
                className="mt-6 text-lg text-slate-300"
              >
                FitFinder is the all-in-one platform to find elite coaches, line up local matchups, and stay accountable with connected scheduling and stats.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: transitionEase }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
              >
                <button
                  onClick={() => handleNavigate(createPageUrl('Browse'))}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-blue-500/30"
                >
                  Find Coaches
                </button>
                <button
                  onClick={() => handleNavigate(createPageUrl('Versus'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Find Matchups
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: transitionEase }}
              className="relative w-full max-w-sm"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-blue-500/20 backdrop-blur"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Today&apos;s momentum</span>
                  <span className="text-xs text-slate-400">FitFinder App</span>
                </div>
                <ul className="space-y-4">
                  {phonePreviewItems.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${item.accent}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300">{item.time}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-white/5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 p-4 text-xs text-slate-200">
                  Accountability unlocked: auto-sync every session and matchup to your calendar.
                </div>
              </motion.div>
              <div className="pointer-events-none absolute -left-16 -top-12 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            </motion.div>
          </div>
        </section>

        <motion.section
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything training and competition in one place</h2>
            <p className="mt-4 text-base text-slate-300">
              Pair personalized coaching with Versus matchups, stats, and scheduling so your preparation translates directly into performance.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                animate={featuresInView ? 'visible' : 'hidden'}
                variants={featureVariants}
                whileHover={{ y: -6, boxShadow: '0 24px 48px -12px rgba(13,148,136,0.25)' }}
                className="group rounded-3xl border border-white/5 bg-slate-900/70 p-6 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20 text-emerald-300">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={splitRef}
          initial="hidden"
          animate={splitInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="mx-auto max-w-7xl px-6 pb-24 lg:px-8"
        >
          <div className="grid gap-12 rounded-3xl border border-white/5 bg-slate-900/60 p-10 shadow-xl shadow-blue-500/10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-white">Train with the right coaches</h3>
              <p className="mt-4 text-sm text-slate-300">
                FitFinder curates credentialed trainers who specialize in your sport, then keeps you aligned with structured plans and milestones.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {coachingHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleNavigate(createPageUrl('Browse'))}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Browse Coaches
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Compete with the right rivals</h3>
              <p className="mt-4 text-sm text-slate-300">
                Lock in Versus matchups, scrimmages, and pickup runs that align with your skill level, then track the results that matter most.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {matchupHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-blue-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleNavigate(createPageUrl('Versus'))}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
              >
                Find Matchups
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          ref={stepsRef}
          initial="hidden"
          animate={stepsInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
            <p className="mt-4 text-base text-slate-300">
              One guided flow connects your training goals with coaches, matchups, and the FitFinder Calendar so every week has purpose.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                initial="hidden"
                animate={stepsInView ? 'visible' : 'hidden'}
                variants={featureVariants}
                className="rounded-3xl border border-white/5 bg-slate-900/70 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Step {step.number}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Success stories from the FitFinder community</h2>
            <p className="mt-4 text-base text-slate-300">
              Athletes and coaches use FitFinder to stay consistent, sharpen their skills, and keep competition meaningful every week.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                custom={index}
                initial="hidden"
                animate={testimonialsInView ? 'visible' : 'hidden'}
                variants={testimonialVariants}
                className="flex h-full flex-col rounded-3xl border border-white/5 bg-slate-900/70 p-6"
              >
                <p className="text-sm text-slate-200">{testimonial.quote}</p>
                <div className="mt-6 pt-6 text-xs text-slate-400">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div>{testimonial.handle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="mx-auto max-w-6xl px-6 pb-24 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-10 py-14 shadow-2xl shadow-blue-500/10">
            <div className="absolute inset-0 opacity-40" aria-hidden="true">
              <div className="absolute -top-24 right-20 h-48 w-48 rounded-full bg-emerald-500/30 blur-3xl" />
              <div className="absolute -bottom-16 left-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start training and competing with FitFinder</h2>
                <p className="mt-4 max-w-2xl text-sm text-slate-300">
                  Secure your next coaching session, lock in a Versus matchup, and manage every workout and pickup game from the FitFinder Calendar.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => handleNavigate(createPageUrl('Browse'))}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:shadow-blue-500/30"
                >
                  Find Coaches
                </button>
                <button
                  onClick={() => handleNavigate(createPageUrl('Versus'))}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Find Matchups
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3 text-slate-200">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-500 flex items-center justify-center font-semibold text-slate-950">
              FF
            </div>
            <span className="font-semibold">FitFinder</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button onClick={() => handleNavigate(createPageUrl('Browse'))} className="transition hover:text-white">
              Browse coaches
            </button>
            <button onClick={() => handleNavigate(createPageUrl('Versus'))} className="transition hover:text-white">
              Find matchups
            </button>
            <button onClick={() => handleNavigate(createPageUrl('Calendar'))} className="transition hover:text-white">
              View calendar
            </button>
            <button onClick={() => handleScrollTo('how-it-works')} className="transition hover:text-white">
              How it works
            </button>
            <button onClick={() => handleScrollTo('testimonials')} className="transition hover:text-white">
              Success stories
            </button>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} FitFinder. Train together. Compete together.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
