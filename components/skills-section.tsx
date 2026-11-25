import { SectionHeading } from '@/components/section-heading'

const skills = [
  {
    name: 'AutoCAD',
    level: 'Foundational',
    points: ['2D drafting of plans, sections & elevations', 'Layers, dimensioning & annotation', 'Reading structural drawings'],
  },
  {
    name: 'STAAD.Pro',
    level: 'Foundational',
    points: ['Modelling beams, frames & trusses', 'Load cases & combinations', 'Interpreting SFD/BMD results'],
  },
  {
    name: 'AI Evaluation',
    level: 'Professional',
    points: ['Fact-checking technical responses', 'Rubric-based quality scoring', 'Clear written feedback'],
  },
]

const core = [
  'Structural Analysis',
  'Strength of Materials',
  'Geotechnical Engineering',
  'RCC & Steel Design',
  'Surveying',
  'Fluid Mechanics',
  'Building Materials',
  'Estimation & Costing',
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="02 — Skills" title="Technical Skills">
          Software tools and core subjects I work with and revise regularly.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {skill.level}
                </span>
              </div>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {skill.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="mt-12 text-sm font-medium text-muted-foreground">Core subjects</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {core.map((subject) => (
            <li key={subject} className="rounded-md border border-border px-3 py-1.5 text-sm">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
