import { GraduationCap, Target, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const qualifications = [
  {
    icon: GraduationCap,
    title: 'B.Tech in Civil Engineering',
    body: 'Graduate with grounding in structural analysis, geotechnics, surveying, and construction materials.',
  },
  {
    icon: Sparkles,
    title: 'AI Evaluation Work',
    body: 'Review and rate AI model outputs for technical accuracy, reasoning quality, and clarity — applying engineering rigor to AI.',
  },
  {
    icon: Target,
    title: 'Competitive Exam Aspirant',
    body: 'Focused preparation for SSC JE and RRB JE (Civil), with structured revision and regular mock practice.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="01 — About" title="About & Qualifications">
          A civil engineer who enjoys turning complex concepts into clear, reusable notes.
        </SectionHeading>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {qualifications.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
