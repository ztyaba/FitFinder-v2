'use client'

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  BoltIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import { createPageUrl } from '@/utils'

const navigation = [
  { name: 'Product', href: '#features' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Browse coaches', href: createPageUrl('Browse'), isRoute: true },
  { name: 'Matchups', href: createPageUrl('Versus'), isRoute: true },
]

const features = [
  {
    name: 'Precision matching',
    description:
      'AI-backed profiles surface the coach who fits your goals, sport, and training cadence in seconds.',
    icon: SparklesIcon,
  },
  {
    name: 'Intelligent insights',
    description:
      'Unified progress tracking highlights readiness, fatigue, and trends so every decision is evidence-based.',
    icon: ChartBarIcon,
  },
  {
    name: 'Connected scheduling',
    description:
      'Sync sessions to Google, Apple, and wearable calendars with adaptive reminders that keep you on pace.',
    icon: CalendarDaysIcon,
  },
]

const steps = [
  {
    title: 'Define your performance profile',
    description: 'Share training history, recovery data, and availability to create an adaptive baseline.',
  },
  {
    title: 'Pair with an elite coach',
    description: 'Match with specialists vetted for your sport, budget, and communication preferences.',
  },
  {
    title: 'Train with clarity every day',
    description: 'Manage programs, check-ins, and events in one hub that evolves with every milestone.',
  },
]

const testimonials = [
  {
    quote:
      'FitFinder centralizes our performance data and daily workflows so every athlete knows exactly what to execute. The clarity has transformed our season prep.',
    name: 'Naomi Sanders',
    role: 'Head Coach, Velocity Track Club',
  },
  {
    quote:
      'From weekly programming to Versus matchups, we finally have one place to manage accountability and see progress trends without switching tools.',
    name: 'Rafael Ortega',
    role: 'Director of Performance, Elevate FC',
  },
  {
    quote:
      'Our remote athletes stay on pace because FitFinder syncs calendars, readiness scores, and coach feedback in real time. It feels like a command center.',
    name: 'Mira Chen',
    role: 'Performance Lead, Summit Endurance',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const testimonialVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + index * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const howRef = useRef(null)
  const testimonialsRef = useRef(null)
  const footerRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-20% 0px -20% 0px' })
  const featuresInView = useInView(featuresRef, { once: true, margin: '-10% 0px -10% 0px' })
  const howInView = useInView(howRef, { once: true, margin: '-10% 0px -10% 0px' })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-10% 0px -10% 0px' })
  const footerInView = useInView(footerRef, { once: true, margin: '-20% 0px -20% 0px' })

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')?.replace('#', '')
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      event.preventDefault()
      setMobileMenuOpen(false)
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  const NavLink = ({ item }) =>
    item.isRoute ? (
      <Link to={item.href} className="text-sm font-medium text-slate-200 transition hover:text-white">
        {item.name}
      </Link>
    ) : (
      <a href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-white">
        {item.name}
      </a>
    )

  const PrimaryButton = ({ href, children, isRoute }) =>
    isRoute ? (
      <Link
        to={href}
        className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_-24px_rgba(16,185,129,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_-24px_rgba(16,185,129,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
      >
        {children}
      </a>
    )

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500 text-slate-950">
              <BoltIcon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold tracking-tight">FitFinder</span>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
          <div className="hidden lg:flex">
            <PrimaryButton href={createPageUrl('Calendar')} isRoute>
              Launch dashboard
            </PrimaryButton>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white transition hover:border-white/30 lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950 lg:hidden">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white transition hover:border-white/30"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 px-4 pb-6 sm:px-6">
              {navigation.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-2xl border border-white/10 px-4 py-3 text-base font-medium text-white/80 transition hover:border-white/30 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl border border-white/10 px-4 py-3 text-base font-medium text-white/80 transition hover:border-white/30 hover:text-white"
                  >
                    {item.name}
                  </a>
                ),
              )}
              <PrimaryButton href={createPageUrl('Calendar')} isRoute>
                Launch dashboard
              </PrimaryButton>
            </div>
          </div>
        )}
      </header>

      <main>
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 120 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-400/10 via-transparent to-transparent" />
          <div className="relative mx-auto grid max-w-6xl gap-20 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-24 lg:px-8 xl:py-32">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
              >
                <span>Fitness intelligence</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                The coaching command center built for unstoppable athletes
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
                className="mt-6 text-lg text-white/70 sm:max-w-xl"
              >
                FitFinder syncs elite coaching, adaptive programs, and live accountability into one premium platform so every rep builds momentum.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.75, ease: 'easeOut' }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <PrimaryButton href={createPageUrl('Browse')} isRoute>
                  Explore coaches
                </PrimaryButton>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  See how FitFinder works
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.7, ease: 'easeOut' }}
                className="mt-12 flex flex-wrap items-center gap-6 text-left text-xs uppercase tracking-[0.25em] text-white/50"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-emerald-400" />
                  <span>Trusted by high performance teams worldwide</span>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-12 translate-x-10 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-blue-500/20 blur-3xl" />
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: -6 }}
                animate={heroInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                className="relative mx-auto w-full max-w-sm"
              >
                <motion.div
                  animate={heroInView ? { y: [-10, 10, -10] } : {}}
                  transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.6)] backdrop-blur"
                >
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Today</span>
                    <span>Sync status · Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Tempo intervals</p>
                          <p className="text-xs text-white/50">Coach Naomi • Track</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">Ready</span>
                      </div>
                      <p className="mt-3 text-xs text-white/60">3 x 800m @ 3:05 | 400m float recovery</p>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">Strength strategy</p>
                          <p className="text-xs text-slate-900/70">Coach Malik • Remote</p>
                        </div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">01:45 PM</span>
                      </div>
                      <p className="mt-3 text-xs text-slate-900/80">Video sync locked. Notes and testing plan updated.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Recovery cadence</p>
                          <p className="text-xs text-white/50">Whoop · Integrated</p>
                        </div>
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">+12%</span>
                      </div>
                      <p className="mt-3 text-xs text-white/60">HRV trending upward after yesterday&apos;s deload.</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Versus live</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Sprint showdown</p>
                        <p className="text-xs text-white/50">You · Coach Rivera squad</p>
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 px-3 py-1 text-xs font-semibold text-slate-900">
                        Leading
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="features"
          ref={featuresRef}
          initial="hidden"
          animate={featuresInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="bg-white py-24 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Platform pillars</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Every workflow, refined for performance</h2>
              <p className="mt-4 text-base text-slate-600">
                FitFinder unites athlete management, daily programming, and accountability so every stakeholder operates in sync.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: 'easeOut' }}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_60px_-50px_rgba(15,23,42,0.7)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-40px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500 text-slate-950">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.name}</h3>
                  <p className="mt-3 text-base text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          ref={howRef}
          initial="hidden"
          animate={howInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
        >
          <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-emerald-400/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">How it works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From onboarding to podium-ready in three steps</h2>
              <p className="mt-4 text-base text-white/60">
                Unlock a guided pathway that meets every coach-athlete pair where they are and elevates them with data-backed clarity.
              </p>
            </div>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={howInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.18, duration: 0.7, ease: 'easeOut' }}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-60px_rgba(16,185,129,0.6)] backdrop-blur"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-lg font-semibold text-emerald-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                  {index === 0 && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-white/50">
                      Preferred sport · Nutrition focus · Travel cadence
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-white/50">
                      Spotlight coaches • Sprint, Endurance, Power • Avg response 2h
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-white/50">
                      Daily readiness score 92 · Mobility session queued · Event taper locked
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsInView ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
          className="bg-white py-24 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Testimonials</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Elite programs rely on FitFinder to stay ahead</h2>
              <p className="mt-4 text-base text-slate-600">
                Performance leaders across sports trust FitFinder to harmonize coaching, data, and accountability for every season.
              </p>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  custom={index}
                  initial="hidden"
                  animate={testimonialsInView ? 'visible' : 'hidden'}
                  variants={testimonialVariants}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 p-8 shadow-[0_35px_60px_-50px_rgba(15,23,42,0.35)]"
                >
                  <p className="text-base text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={footerRef}
          initial="hidden"
          animate={footerInView ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
          className="bg-slate-950 pb-20 pt-16"
        >
          <div className="mx-auto max-w-5xl rounded-4xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-20 text-center text-white shadow-[0_50px_120px_-60px_rgba(16,185,129,0.35)] sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Ready to move</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Bring your performance operations into one intelligent hub</h2>
            <p className="mt-4 text-base text-white/60 sm:mx-auto sm:max-w-2xl">
              Coaches, athletes, and staff rely on FitFinder to deliver clarity, accountability, and elite-level results across every season.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton href={createPageUrl('Calendar')} isRoute>
                Start free pilot
              </PrimaryButton>
              <a
                href={createPageUrl('Versus')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                View competitive suite
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-6 px-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/70">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500 text-slate-950">
                <BoltIcon className="h-5 w-5" />
              </div>
              <span className="text-base font-semibold text-white">FitFinder</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                How it works
              </a>
              <Link to={createPageUrl('Browse')} className="transition hover:text-white">
                Browse coaches
              </Link>
              <Link to={createPageUrl('Versus')} className="transition hover:text-white">
                Versus
              </Link>
              <Link to={createPageUrl('Calendar')} className="transition hover:text-white">
                Calendar
              </Link>
            </div>
            <p>© {new Date().getFullYear()} FitFinder. All rights reserved.</p>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

