'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CalendarDaysIcon, ChevronRightIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { createPageUrl } from '@/utils'

const navigation = [
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
  UserGroupIcon,
  TrophyIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { createPageUrl } from '@/utils'

const navigation = [
  { name: 'Platform', href: '#features' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Browse coaches', href: createPageUrl('Browse'), isRoute: true },
  { name: 'How it works', href: '#features' },
  { name: 'Success stories', href: '#testimonials' },
  { name: 'Matchups', href: createPageUrl('Versus'), isRoute: true },
]

const primaryFeatures = [
  {
    name: 'Personalized coach matches.',
    description:
      'FitFinder analyzes your goals, training history, and schedule to recommend coaches who can actually get you across the finish line.',
    icon: UserGroupIcon,
  },
  {
    name: 'Live performance insights.',
    description:
      'Track workouts and competition data in one dashboard so you and your coach can adjust plans before plateaus appear.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Scheduling that sticks.',
    description:
      'Sync every session, recovery block, and event with your calendar to keep training consistent no matter how busy life gets.',
    name: 'Elite coach marketplace',
    description: 'Verify credentials, review specialties, and book private training with coaches who know how to sculpt your next breakthrough.',
    icon: SparklesIcon,
  },
  {
    name: 'Versus matchup engine',
    description: 'Join curated pickup games, rival ladders, and weekend tournaments tailored to your sport, skill tier, and competitive drive.',
    icon: TrophyIcon,
  },
  {
    name: 'Progress intelligence',
    description: 'Layer coach feedback with Versus stats to see how every drill translates to real-game results and rankings.',
    icon: ChartBarIcon,
  },
  {
    name: 'Local crew finder',
    description: 'Build training pods or competition squads, sync calendars, and keep everyone locked in with shared prep checklists.',
    icon: UserGroupIcon,
  },
  {
    name: 'Unified training & battle calendar',
    description: 'Stack lessons beside match nights with reminders, facility details, and arrival windows so nothing slips between the gaps.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Geo-targeted arenas',
    description: 'Discover premium gyms, community courts, and pop-up fields near you for last-minute sessions or high-stakes Versus showdowns.',
    description:
      'Verify credentials, review specialties, and book private training with coaches who know how to sculpt your next breakthrough.',
    icon: SparklesIcon,
  },
  {
    name: 'Versus matchup engine',
    description:
      'Join curated pickup games, rival ladders, and weekend tournaments tailored to your sport, skill tier, and competitive drive.',
    icon: TrophyIcon,
  },
  {
    name: 'Progress intelligence',
    description:
      'Layer coach feedback with Versus stats to see how every drill translates to real-game results and rankings.',
    icon: ChartBarIcon,
  },
  {
    name: 'Local crew finder',
    description:
      'Build training pods or competition squads, sync calendars, and keep everyone locked in with shared prep checklists.',
    icon: UserGroupIcon,
  },
  {
    name: 'Unified training & battle calendar',
    description:
      'Stack lessons beside match nights with reminders, facility details, and arrival windows so nothing slips between the gaps.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Geo-targeted arenas',
    description:
      'Discover premium gyms, community courts, and pop-up fields near you for last-minute sessions or high-stakes Versus showdowns.',
    name: 'Precision coach discovery',
    description:
      'Filter by sport, intensity, communication style, and credentials to meet coaches who elevate every rep.',
    icon: SparklesIcon,
  },
  {
    name: 'Versus matchup engine',
    description:
      'AI pairing places you in local challenges, pickup games, and rival matchups that match your competitive tier.',
    icon: TrophyIcon,
  },
  {
    name: 'Local crew finder',
    description:
      'Build pods with training partners, sparring crews, or pickup squads who match your schedule and style.',
    icon: UserGroupIcon,
  },
  {
    name: 'Unified training & battle calendar',
    description:
      'Stack private sessions beside Versus events with automatic reminders so preparation and game day stay aligned.',
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
  {
    name: 'Performance + ranking insights',
    description:
      'Progress dashboards blend coaching feedback with Versus leaderboards to show how training fuels your win rate.',
    icon: ChartBarIcon,
  },
  {
    name: 'Geo-targeted arenas',
    description:
      'Discover premium facilities, street courts, and pop-up arenas near you for on-demand training and battles.',
    icon: MapPinIcon,
  },
]

const secondaryFeatures = [
  {
    name: 'Coach marketplace',
    description:
      'Browse verified strength and conditioning pros, filter by specialty, and book with transparent pricing and athlete reviews.',
    href: createPageUrl('Browse'),
    icon: UserGroupIcon,
    isRoute: true,
  },
  {
    name: 'Competition hub',
    description:
      'Challenge friends, rivals, or teammates in Versus mode with live scoring overlays and commentary-ready stat packs.',
    href: createPageUrl('Versus'),
    icon: ArrowPathIcon,
    isRoute: true,
  },
  {
    name: 'Integrated scheduling',
    description:
      'Plan microcycles and taper weeks with our drag-and-drop calendar that syncs to Google, Apple, and wearable reminders.',
    href: createPageUrl('Calendar'),
    icon: CalendarDaysIcon,
    isRoute: true,
  },
]

const featuredTestimonial = {
  body: '“FitFinder paired me with a performance coach who understood both my sport and my schedule. We cut my 400m time by almost two seconds in one season.”',
  author: {
    name: 'Brenna Goyette',
    handle: 'sprinter_brenna',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
    title: 'Craft your training and competition DNA',
    description: 'Pick your sport, goals, coaching style, and Versus intensity to unlock a tailored feed of experts and opponents.',
  },
  {
    title: 'Match with coaches and challengers',
    description: 'FitFinder pairs you with certified coaches, sparring partners, and ready-to-run Versus events that fit your calendar.',
  },
  {
    title: 'Run the playbook end-to-end',
    description: 'Book sessions, RSVP to matchups, analyze results, and keep momentum rolling inside one integrated control center.',
    description:
      'Pick your sport, goals, coaching style, and Versus intensity to unlock a tailored feed of experts and opponents.',
  },
  {
    title: 'Match with coaches and challengers',
    description:
      'FitFinder pairs you with certified coaches, sparring partners, and ready-to-run Versus events that fit your calendar.',
  },
}

const testimonials = [
  [
    [
      {
        body: '“I book my entire small-group training roster through FitFinder and keep classes full without the back-and-forth messaging.”',
        author: {
          name: 'Leslie Alexander',
          handle: 'coachleslie',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: '“The Versus events have become our team’s weekly accountability ritual. The live leaderboards keep every athlete locked in.”',
        author: {
          name: 'Michael Foster',
          handle: 'coachfoster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: '“FitFinder simplifies roster management. I can focus on programming while the platform handles payments and check-ins.”',
        author: {
          name: 'Dries Vincent',
          handle: 'vincentstrength',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: '“Every athlete I work with arrives prepared because their training plan, nutrition notes, and reminders are already in the app.”',
        author: {
          name: 'Lindsay Walton',
          handle: 'coachwalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: '“My recovery metrics finally make sense. FitFinder translates wearable data into actions I can actually take.”',
        author: {
          name: 'Courtney Henry',
          handle: 'courtneyhenry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: '“Between scouting new coaches and managing payments, FitFinder removed hours of admin work for our athletic department.”',
        author: {
          name: 'Tom Cook',
          handle: 'athleticsdirector',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: '“I landed my dream triathlon coach through FitFinder and hit a personal best at my very next event.”',
        author: {
          name: 'Whitney Francis',
          handle: 'whitney_francis',
          imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: '“The platform keeps our community motivated with weekly spotlights, leaderboards, and coach feedback loops.”',
        author: {
          name: 'Leonard Krasner',
          handle: 'coachkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: '“Planning for a full season used to feel impossible. Now every block is visualized, tracked, and shared with my squad.”',
        author: {
          name: 'Emily Selman',
          handle: 'emilyselman',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
]

const footerNavigation = {
  solutions: [
    { name: 'Athlete onboarding', href: createPageUrl('Browse'), isRoute: true },
    { name: 'Coach CRM', href: '#features' },
    { name: 'Versus events', href: createPageUrl('Versus'), isRoute: true },
    { name: 'Team scheduling', href: createPageUrl('Calendar'), isRoute: true },
    { name: 'Performance analytics', href: '#features' },
  ],
  support: [
    { name: 'Help center', href: '#support' },
    { name: 'Implementation guide', href: '#features' },
    { name: 'Coach success team', href: '#contact' },
  ],
  company: [
    { name: 'About FitFinder', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
  ],
  legal: [
    { name: 'Terms of service', href: '#terms' },
    { name: 'Privacy policy', href: '#privacy' },
    { name: 'License', href: '#license' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
const testimonials = [
  {
    quote: 'We signed three private hitting coaches and filled our Versus cage nights in one week. FitFinder keeps our players sharpening skills by day and battling new rivals by night.',
    name: 'Lena Ortiz',
    role: 'Program Director, Metro Sluggers Academy',
  },
  {
    quote: 'The roster goes from film review to Versus scrimmages without switching apps. Coaches trust the calendar, athletes crave the competition, and buy-in has never been stronger.',
    name: 'Malik Chen',
    role: 'Head Performance Coach, Elevate Hoops Lab',
  },
  {
    quote: 'Versus ladders feed directly into our coaching plans, so every rep is tied to a scoreboard. FitFinder finally treats competition as a core feature, not an optional tab.',
    name: 'Jordan Blake',
    role: 'Owner, Apex Fight Collective',
  },
]

    title: 'Run the playbook end-to-end',
    description:
      'Book sessions, RSVP to matchups, analyze results, and keep momentum rolling inside one integrated control center.',
    title: 'Set your training and competition DNA',
    description:
      'Outline sport, goals, location, preferred coaching style, and matchup intensity so FitFinder can tailor the experience.',
  },
]

const testimonials = [
  {
    quote:
      'We signed three private hitting coaches and filled our Versus cage nights in one week. FitFinder keeps our players sharpening skills by day and battling new rivals by night.',
    name: 'Lena Ortiz',
    role: 'Program Director, Metro Sluggers Academy',
  },
  {
    quote:
      'The roster goes from film review to Versus scrimmages without switching apps. Coaches trust the calendar, athletes crave the competition, and buy-in has never been stronger.',
    name: 'Malik Chen',
    role: 'Head Performance Coach, Elevate Hoops Lab',
  },
  {
    quote:
      'Versus ladders feed directly into our coaching plans, so every rep is tied to a scoreboard. FitFinder finally treats competition as a core feature, not an optional tab.',
    name: 'Jordan Blake',
    role: 'Owner, Apex Fight Collective',
  },
]

    title: 'Pair with elite coaches and worthy rivals',
    description:
      'Get matched with vetted coaches, sparring partners, and local challengers ready to push your limits.',
  },
  {
    title: 'Sync sessions, scrimmages, and scoreboards',
    description:
      'Manage programs, pickup games, and Versus battles from one hub that adapts with every milestone and result.',
  },
]

const testimonials = [
  {
    quote:
      'Our sprinters book coaching intensives and same-week Versus relays without leaving the app. That dual focus keeps everyone sharp and accountable.',
    name: 'Naomi Sanders',
    role: 'Head Coach, Velocity Track Club',
  },
  {
    quote:
      'We fill morning skill labs with new coaches and then lock evening pickup tournaments through Versus. Accountability and competition finally live in the same pipeline.',
    name: 'Rafael Ortega',
    role: 'Director of Performance, Elevate FC',
  },
  {
    quote:
      'Versus ladders plugged into our training plans show exactly how private sessions translate on the court. FitFinder made competition our best data source.',
    name: 'Mira Chen',
    role: 'Performance Lead, Summit Endurance',
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
  const navigate = useNavigate()
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

  const handleNavigation = (event, item) => {
    if (item?.isRoute && item.href) {
      event.preventDefault()
      setMobileMenuOpen(false)
      navigate(item.href)
      return
    }

    if (!item?.isRoute) {
      setMobileMenuOpen(false)
    }
  }

  const handleFeatureLink = (event, feature) => {
    if (feature.isRoute && feature.href) {
      event.preventDefault()
      navigate(feature.href)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FitFinder</span>
              <img
                alt="FitFinder logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt="FitFinder logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto not-dark:hidden"
              />
            </a>
  const PrimaryButton = ({ href, children, isRoute, variant = 'primary' }) => {
    const baseClasses =
      variant === 'secondary'
        ? 'inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10'
        : 'inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_-24px_rgba(16,185,129,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-300'

    if (isRoute) {
      return (
        <Link to={href} className={baseClasses}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={baseClasses}>
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
  }

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
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavigation(event, item)}
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={createPageUrl('Browse')}
              onClick={(event) => handleNavigation(event, { href: createPageUrl('Browse'), isRoute: true })}
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FitFinder</span>
                <img
                  alt="FitFinder logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  alt="FitFinder logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto not-dark:hidden"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(event) => handleNavigation(event, item)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={createPageUrl('Browse')}
                    onClick={(event) => handleNavigation(event, { href: createPageUrl('Browse'), isRoute: true })}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
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
                    Log in
                  </a>
                </div>
              </div>
                ),
              )}
              <PrimaryButton href={createPageUrl('Calendar')} isRoute>
                Launch dashboard
              </PrimaryButton>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10 dark:hover:ring-white/20">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Coach spotlight</span>
                  <span aria-hidden="true" className="h-4 w-px bg-gray-900/10 dark:bg-white/10" />
                  <a href={createPageUrl('Browse')} onClick={(event) => handleNavigation(event, { href: createPageUrl('Browse'), isRoute: true })} className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Meet this week&apos;s featured pros
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                Match with elite coaches and unlock your next PR
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                FitFinder connects driven athletes with vetted trainers, live competitions, and data-backed plans. Build a team around your goals, stay accountable, and turn training momentum into results.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  type="button"
                  onClick={() => navigate(createPageUrl('Browse'))}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
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
                <span>Coaches + challengers in one network</span>
                <span>Train + compete together</span>
                <span>Fitness intelligence</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Train smarter. Compete harder.
                The coaching command center built for unstoppable athletes
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
                className="mt-6 text-lg text-white/70 sm:max-w-xl"
              >
                FitFinder helps you find elite coaches and local competitors, layer training with Versus matchups, and keep the entire grind synced from warm-up to final whistle.
                FitFinder is the all-in-one hub to discover elite coaches, secure local competitors, and move from private training to headline Versus battles without changing tabs.
                FitFinder syncs elite coaching, adaptive programs, and live accountability into one premium platform so every rep builds momentum.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.75, ease: 'easeOut' }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <PrimaryButton href={createPageUrl('Browse')} isRoute>
                  Find coaches
                </PrimaryButton>
                <PrimaryButton href={createPageUrl('Versus')} isRoute variant="secondary">
                  Find matchups
                </PrimaryButton>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Start matching
                </button>
                <a href="#features" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <svg role="img" viewBox="0 0 366 729" className="mx-auto w-91.5 max-w-full drop-shadow-xl">
                <title>FitFinder mobile app screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                >
                  <img
                    alt="FitFinder athlete dashboard"
                    src="https://tailwindcss.com/plus-assets/img/component-images/mobile-app-screenshot.png"
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 opacity-40 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="StrengthLab"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
            />
            <img
              alt="StrengthLab"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
            />

            <img
              alt="Momentum Club"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
            />
            <img
              alt="Momentum Club"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
            />

            <img
              alt="North Ridge Athletics"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
            />
            <img
              alt="North Ridge Athletics"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
            />

            <img
              alt="Velocity Sports Lab"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
            />
            <img
              alt="Velocity Sports Lab"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
            />

            <img
              alt="Peak Performance Institute"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
            />
            <img
              alt="Peak Performance Institute"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8" id="events">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  Boost your training week. Start using FitFinder today.
                </h2>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Centralize goal tracking, coach messaging, and event prep. FitFinder keeps athletes aligned with their teams so every rep, spar, and recovery session moves you forward.
                </p>
              </div>
              <img
                alt="FitFinder desktop dashboard"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-5xl lg:max-w-none"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-500 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:-bottom-48 lg:translate-y-0"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 dark:opacity-20"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8" id="features">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Train smarter</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              Everything you need to plan, book, and compete
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Bring together your coaching roster, competition schedule, and progress data. FitFinder removes the guesswork so you can focus on the work that matters.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        onClick={(event) => handleFeatureLink(event, feature)}
                        className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/15 dark:after:sm:rounded-3xl">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Get notified when new coaches join the roster
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
              Weekly updates with new specialists, live event announcements, and training resources tailored to your sport.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
              >
                Notify me
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32 sm:mt-56 sm:pt-32" id="testimonials">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 hidden size-full mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:block dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Testimonials</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
                  Athletes and coaches leveling up with FitFinder
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 dark:text-gray-100">
                <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10">
                  <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8 dark:text-white">
                    <p>{featuredTestimonial.body}</p>
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap dark:border-white/10">
                    <img
                      alt="Brenna Goyette"
                      src={featuredTestimonial.author.imageUrl}
                      className="size-10 flex-none rounded-full bg-gray-50 dark:bg-gray-700"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold text-gray-900 dark:text-white">{featuredTestimonial.author.name}</div>
                      <div className="text-gray-600 dark:text-gray-400">@{featuredTestimonial.author.handle}</div>
                    </div>
                    <img
                      alt="Brenna&apos;s club logo"
                      src={featuredTestimonial.author.logoUrl}
                      className="h-10 w-auto flex-none dark:hidden"
                    />
                    <img
                      alt="Brenna&apos;s club logo"
                      src={featuredTestimonial.author.logoUrl.replace('-gray-900', '-gray-100')}
                      className="h-10 w-auto flex-none not-dark:hidden"
                    />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8',
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10"
                          >
                            <blockquote className="text-gray-900 dark:text-white">
                              <p>{testimonial.body}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                alt={testimonial.author.name}
                                src={testimonial.author.imageUrl}
                                className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
                              />
                              <div>
                                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                                <div className="text-gray-600 dark:text-gray-400">@{testimonial.author.handle}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 sm:mt-56">
        <div className="mx-auto max-w-7xl border-t border-gray-200 px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32 dark:border-white/10">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="FitFinder wordmark"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-9 dark:hidden"
            />
            <img
              alt="FitFinder wordmark"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9 not-dark:hidden"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(event) => handleNavigation(event, item)}
                          className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(event) => handleNavigation(event, item)}
                          className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(event) => handleNavigation(event, item)}
                          className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(event) => handleNavigation(event, item)}
                          className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between dark:border-white/10">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
                Training insights, coach spotlights, and product updates delivered weekly.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address-footer" className="sr-only">
                Email address
              </label>
              <input
                id="email-address-footer"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-indigo-600 sm:w-56 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus-visible:outline-indigo-500"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between dark:border-white/10">
            <div className="flex gap-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
              &copy; 2025 FitFinder, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.7, ease: 'easeOut' }}
                className="mt-12 grid gap-6 text-left text-xs uppercase tracking-[0.25em] text-white/50 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-emerald-400" />
                  <span>Thousands of coaches & challengers verified weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-blue-400" />
                  <span>Versus leagues live in 120+ cities worldwide</span>
                </div>
                className="mt-12 flex flex-wrap items-center gap-6 text-left text-xs uppercase tracking-[0.25em] text-white/50"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-emerald-400" />
                  <span>Trusted by coaches, athletes, and competitive crews worldwide</span>
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
                    <span>Training × Versus synced</span>
                    <span>Training & Versus synced</span>
                    <span>Sync status · Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Explosive ladder work</p>
                          <p className="text-xs text-white/50">Coach Ellis • Speed Lab</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">Cleared</span>
                      </div>
                      <p className="mt-3 text-xs text-white/60">6 x :20 drive sprints | 1:40 recovery with sled pulls.</p>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-950">Film + matchup prep</p>
                          <p className="text-xs text-slate-900/70">Coach Rivera • Remote</p>
                        </div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">02:15 PM</span>
                      </div>
                      <p className="mt-3 text-xs text-slate-900/80">Scouting notes for tonight’s Versus quarterfinal uploaded.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Recovery cadence</p>
                          <p className="text-xs text-white/50">Whoop · Integrated</p>
                        </div>
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">+14%</span>
                      </div>
                      <p className="mt-3 text-xs text-white/60">HRV rising after yesterday’s Versus semifinal cooldown.</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Versus lineup</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Citywide gauntlet</p>
                        <p className="text-xs text-white/50">You vs. Kingsmen Crew · Skyline Arena</p>
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 px-3 py-1 text-xs font-semibold text-slate-900">
                        3 hrs · RSVP
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-white/60">Win and jump two spots on the Versus leaderboard.</p>
                      </div>
                      <p className="mt-3 text-xs text-white/60">6 x :20 drive sprints | 1:40 recovery with sled pulls.</p>
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
                          <p className="text-sm font-semibold text-slate-950">Film + matchup prep</p>
                          <p className="text-xs text-slate-900/70">Coach Rivera • Remote</p>
                        </div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">02:15 PM</span>
                      </div>
                      <p className="mt-3 text-xs text-slate-900/80">Scouting notes for tonight’s Versus quarterfinal uploaded.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Recovery cadence</p>
                          <p className="text-xs text-white/50">Whoop · Integrated</p>
                        </div>
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">+14%</span>
                      </div>
                      <p className="mt-3 text-xs text-white/60">HRV rising after yesterday’s Versus semifinal cooldown.</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Versus lineup</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Citywide gauntlet</p>
                        <p className="text-xs text-white/50">You vs. Kingsmen Crew · Skyline Arena</p>
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 px-3 py-1 text-xs font-semibold text-slate-900">
                        3 hrs · RSVP
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-white/60">Win and jump two spots on the Versus leaderboard.</p>
                          <p className="text-sm font-semibold text-slate-950">Film + feedback</p>
                          <p className="text-sm font-semibold text-slate-950">Strength strategy</p>
                          <p className="text-xs text-slate-900/70">Coach Malik • Remote</p>
                        </div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">01:45 PM</span>
                      </div>
                      <p className="mt-3 text-xs text-slate-900/80">Video sync locked. Competitive scouting clips uploaded.</p>
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
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Versus lineup</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Sprint showdown</p>
                        <p className="text-xs text-white/50">You vs. Rivera Crew · Downtown Arena</p>
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 px-3 py-1 text-xs font-semibold text-slate-900">
                        4 hrs · RSVP
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-white/60">Winner moves up the Versus ladder · 8 challengers locked in.</p>
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Fuel every phase of your training and rivalry</h2>
              <p className="mt-4 text-base text-slate-600">
                Browse pro coaches, rally challengers, and manage the entire dual-threat lifestyle inside one premium, motion-driven experience.
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">One arena for training and competition</h2>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Every workflow, refined for performance</h2>
              <p className="mt-4 text-base text-slate-600">
                From private instruction to Versus throwdowns, FitFinder orchestrates every step so you can sharpen skills, rally your crew, and defend your ranking in one seamless flow.
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From personal bests to Versus wins</h2>
              <p className="mt-4 text-base text-white/60">
                FitFinder blends coaching precision with match-ready energy so you can prepare smarter, compete harder, and celebrate every level-up without juggling multiple platforms.
              <p className="mt-4 text-base text-white/60">
                FitFinder blends coaching precision with match-ready energy so you can prepare smarter, compete harder, and celebrate every level-up without juggling multiple platforms.
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From first session to fiercest rivalry</h2>
              <p className="mt-4 text-base text-white/60">
                FitFinder blends training intelligence with matchup matchmaking so you meet the right coach, lock in local challengers, and show up prepared for every whistle.
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
                      Sport focus · Coaching style · Versus intensity · Preferred venues
                      Sport focus · Matchup intensity · Preferred venues
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-white/50">
                      Spotlit coaches · Challenger invites · Average response time 2h
                      Spotlight coaches • Rival crews nearby • Avg response 2h
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-white/50">
                      Calendar sync · Versus ladder updates · Post-game analytics drop
                    </div>
                  )}
                </motion.div>
                      Readiness score 92 · Pickup semifinal @ 7PM · Versus ladder update pushed
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Built for coaches, competitors, and every hybrid athlete</h2>
              <p className="mt-4 text-base text-slate-600">
                Teams and solo grinders alike trust FitFinder to balance elite instruction with Versus energy so progress and bragging rights grow together.
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Loved by coaches, competitors, and hybrid athletes</h2>
              <p className="mt-4 text-base text-slate-600">
                From private programs to primetime Versus events, FitFinder keeps every squad aligned on preparation, accountability, and the thrill of the matchup.
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Join the dual-threat era</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Recruit coaches, claim matchups, own every arena</h2>
            <p className="mt-4 text-base text-white/60 sm:mx-auto sm:max-w-2xl">
              FitFinder powers premium coaching, local matchups, pickup games, and full-season planning—so you can engineer progress, chase trophies, and celebrate every rivalry in one place.
            <p className="mt-4 text-base text-white/60 sm:mx-auto sm:max-w-2xl">
              FitFinder powers premium coaching, local matchups, pickup games, and full-season planning—so you can engineer progress, chase trophies, and celebrate every rivalry in one place.
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Recruit coaches, rally rivals, own every arena</h2>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Ready to move</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Bring your performance operations into one intelligent hub</h2>
            <p className="mt-4 text-base text-white/60 sm:mx-auto sm:max-w-2xl">
              FitFinder powers your entire grind—from booking private instruction to locking pickup games, Versus challenges, and season calendars—so training and competition fuel each other every day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton href={createPageUrl('Browse')} isRoute>
                Find coaches now
              </PrimaryButton>
              <PrimaryButton href={createPageUrl('Versus')} isRoute variant="secondary">
                Find matchups now
              </PrimaryButton>
              <a
                href={createPageUrl('Calendar')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Preview schedule builder
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

