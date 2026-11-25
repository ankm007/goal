'use client'

import { useEffect, useState } from 'react'
import { CalendarClock, Check, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

const EXAM_NAME = 'SSC JE (Civil) Paper I'
const EXAM_DATE = new Date('2027-03-15T09:00:00+05:30')

const dailyTargets = [
  { id: 'sa', label: 'Revise 6 Structural Analysis formulas', href: '#structural-analysis' },
  { id: 'som', label: 'Solve 20 Strength of Materials MCQs', href: '#strength-of-materials' },
  { id: 'gt', label: 'Review Geotechnical phase relations', href: '#geotechnical-engineering' },
]

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, EXAM_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function ExamCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [done, setDone] = useState<Set<string>>(new Set())

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const completed = done.size
  const progress = Math.round((completed / dailyTargets.length) * 100)

  const units: { label: string; value?: number }[] = [
    { label: 'Days', value: timeLeft?.days },
    { label: 'Hours', value: timeLeft?.hours },
    { label: 'Mins', value: timeLeft?.minutes },
    { label: 'Secs', value: timeLeft?.seconds },
  ]

  return (
    <div className="mt-10 grid gap-6 overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 md:grid-cols-[1fr_1.2fr] md:gap-10">
      <div>
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <CalendarClock className="size-4" aria-hidden="true" />
          Exam countdown
        </p>
        <h3 className="mt-3 text-lg font-semibold">{EXAM_NAME}</h3>
        <p className="text-sm text-muted-foreground">
          {'Target date: '}
          <time dateTime={EXAM_DATE.toISOString()}>
            {EXAM_DATE.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })}
          </time>
        </p>

        <dl className="mt-5 grid grid-cols-4 gap-2" aria-live="off">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col-reverse rounded-lg border border-border bg-background/70 px-2 py-3 text-center">
              <dt className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">{u.label}</dt>
              <dd className="font-mono text-2xl font-semibold tabular-nums text-foreground">
                {u.value === undefined ? '--' : String(u.value).padStart(2, '0')}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold">{"Today's target"}</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground" aria-live="polite">
              {completed}/{dailyTargets.length} done
            </span>
            {completed > 0 && (
              <button
                type="button"
                onClick={() => setDone(new Set())}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
              >
                <RotateCcw className="size-3" aria-hidden="true" />
                Reset
              </button>
            )}
          </div>
        </div>

        <div
          className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-label="Daily target progress"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full rounded-full bg-accent transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {dailyTargets.map((t) => {
            const checked = done.has(t.id)
            return (
              <li key={t.id} className="flex items-center gap-2">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={checked}
                  onClick={() => toggle(t.id)}
                  className={cn(
                    'group flex flex-1 items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0',
                    checked
                      ? 'border-accent/50 bg-accent/10 text-muted-foreground'
                      : 'border-border bg-background/70 hover:border-accent/60',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors',
                      checked ? 'border-accent bg-accent text-accent-foreground' : 'border-muted-foreground/50 group-hover:border-accent',
                    )}
                    aria-hidden="true"
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className={cn('transition-colors', checked && 'line-through')}>{t.label}</span>
                </button>
                <a
                  href={t.href}
                  className="shrink-0 rounded-md px-2 py-1 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/10"
                >
                  Notes<span className="sr-only"> for {t.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
        {completed === dailyTargets.length && (
          <p className="mt-3 text-sm font-medium text-accent">{"Daily target complete — great work!"}</p>
        )}
      </div>
    </div>
  )
}
