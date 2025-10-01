import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Trophy, UsersRound, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageUrl } from "@/utils"

const VIDEO_CHANGE_INTERVAL = 9000
const TRANSITION_DURATION = 800

export default function Landing() {
  const navigate = useNavigate()
  const videoSources = useMemo(
    () => [
      "https://raw.githubusercontent.com/coverr-official/coverr-files/master/20210519102511-strong-woman-boxing.mp4",
      "https://raw.githubusercontent.com/coverr-official/coverr-files/master/20190529130254-sprinting-athlete.mp4",
      "https://raw.githubusercontent.com/coverr-official/coverr-files/master/20190531151712-fitness-training.mp4",
    ],
    [],
  )
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    let transitionTimeout
    const interval = setInterval(() => {
      setIsTransitioning(true)

      transitionTimeout = setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length)
        setIsTransitioning(false)
      }, TRANSITION_DURATION)
    }, VIDEO_CHANGE_INTERVAL)

    return () => {
      clearInterval(interval)
      if (transitionTimeout) {
        clearTimeout(transitionTimeout)
      }
    }
  }, [videoSources.length])

  const currentVideo = videoSources[currentVideoIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          playsInline
          loop
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-10">
        <header className="w-full max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-500 shadow-2xl">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-emerald-200/90">FitFinder</p>
                <h1 className="text-3xl font-semibold tracking-tight">Where relentless athletes find their edge</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="flex w-full max-w-5xl flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Button
              size="lg"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-10 py-6 text-lg font-semibold text-slate-950 shadow-[0_20px_45px_-15px_rgba(16,185,129,0.75)] transition-transform duration-300 hover:scale-105"
              onClick={() => navigate(createPageUrl("Browse"))}
            >
              Lock in
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-4 text-left">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-white/30">
                <img
                  src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=200&q=80"
                  alt="Athlete"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="max-w-xs text-sm text-white/75">
                Over 25k athletes already transforming their performance with FitFinder.
              </div>
            </div>
          </div>
        </main>

        <footer className="grid w-full max-w-6xl grid-cols-1 gap-6 text-left text-sm md:grid-cols-3">
          <LandingStat icon={UsersRound} label="Athlete Network" value="25k+" description="Driven competitors ready to connect" />
          <LandingStat icon={Trophy} label="Elite Matchups" value="4.9/5" description="Average rating across hosted events" />
          <LandingStat icon={Dumbbell} label="Training Sessions" value="120k" description="Booked with top-tier coaches" />
        </footer>
      </div>
    </div>
  )
}

function LandingStat({ icon: Icon, label, value, description }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
        <Icon className="h-5 w-5 text-emerald-200" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-white/70">{description}</p>
      </div>
    </div>
  )
}
