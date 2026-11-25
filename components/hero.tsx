import { ArrowRight, BookOpen } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Preparing for SSC JE &amp; RRB JE (Civil)
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-[#f4f1eb] md:text-6xl">
          Building strong foundations : In structures and{' '}
          <span className="text-primary">Exam Prep.</span>
        </h1>
        <p className="mt-4 text-sm font-medium text-accent">Now live on GitHub</p>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {"I'm Anamika More, a B.Tech Civil Engineering graduate. I design with AutoCAD and STAAD.Pro, evaluate AI systems, and share concise revision notes for fellow JE aspirants."}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#resources"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Browse revision notes
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/10 active:translate-y-0"
          >
            About me
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
