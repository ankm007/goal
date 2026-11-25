import { ChevronDown, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Formula = { label: string; expr: string }

const topics: { id: string; tag: string; title: string; summary: string; formulas: Formula[] }[] = [
  {
    id: 'structural-analysis',
    tag: 'SA',
    title: 'Structural Analysis',
    summary: 'Determinacy, standard beam results, and energy methods that appear in almost every JE paper.',
    formulas: [
      { label: 'Static indeterminacy (plane frame)', expr: 'Ds = 3m + r − 3j' },
      { label: 'Kinematic indeterminacy (plane frame)', expr: 'Dk = 3j − r' },
      { label: 'SS beam, UDL — max BM', expr: 'M = wL² / 8' },
      { label: 'SS beam, UDL — max deflection', expr: 'δ = 5wL⁴ / 384EI' },
      { label: 'Cantilever, point load — deflection', expr: 'δ = WL³ / 3EI' },
      { label: 'Castigliano’s theorem', expr: 'δ = ∂U / ∂P' },
    ],
  },
  {
    id: 'strength-of-materials',
    tag: 'SOM',
    title: 'Strength of Materials',
    summary: 'Elastic constants, bending and torsion equations, and columns — high-weightage, formula-heavy.',
    formulas: [
      { label: 'Elastic constants', expr: 'E = 2G(1 + μ) = 3K(1 − 2μ)' },
      { label: 'Bending equation', expr: 'M / I = σ / y = E / R' },
      { label: 'Torsion equation', expr: 'T / J = τ / r = Gθ / L' },
      { label: 'Euler’s buckling load', expr: 'P = π²EI / Le²' },
      { label: 'Principal stresses', expr: 'σ₁,₂ = (σx+σy)/2 ± √[((σx−σy)/2)² + τ²]' },
      { label: 'Thin cylinder — hoop stress', expr: 'σh = pd / 2t' },
    ],
  },
  {
    id: 'geotechnical-engineering',
    tag: 'GT',
    title: 'Geotechnical Engineering',
    summary: 'Phase relations, permeability, consolidation, and shear strength — the core of soil mechanics.',
    formulas: [
      { label: 'Phase relation', expr: 'Se = wG' },
      { label: 'Void ratio & porosity', expr: 'n = e / (1 + e)' },
      { label: 'Bulk unit weight', expr: 'γ = (G + Se)γw / (1 + e)' },
      { label: 'Darcy’s law', expr: 'v = k · i' },
      { label: 'Mohr–Coulomb criterion', expr: 'τ = c + σ tan φ' },
      { label: 'Terzaghi consolidation time', expr: 't = Tv · d² / Cv' },
    ],
  },
]

const officialLinks = [
  { label: 'SSC — Official notifications', href: 'https://ssc.gov.in' },
  { label: 'RRB — Official recruitment portal', href: 'https://www.rrbcdg.gov.in' },
  { label: 'NPTEL — Civil Engineering courses', href: 'https://nptel.ac.in/courses' },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="03 — Study Resources" title="Quick Revision Notes & Tools">
          Compact formula sheets for last-minute revision. Expand a card to see the key formulas.
        </SectionHeading>

        <div className="mt-10 grid items-start gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.id}
              id={topic.id}
              className="flex scroll-mt-24 flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="w-fit rounded-md bg-accent/15 px-2 py-1 font-mono text-xs font-semibold text-accent">
                {topic.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.summary}</p>
              <details className="group mt-5 border-t border-border pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-sm text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
                  View {topic.formulas.length} key formulas
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <dl className="mt-4 flex flex-col gap-3">
                  {topic.formulas.map((f) => (
                    <div key={f.label}>
                      <dt className="text-xs text-muted-foreground">{f.label}</dt>
                      <dd className="mt-1 rounded-md bg-background px-3 py-2 font-mono text-sm">{f.expr}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border p-6">
          <h3 className="font-semibold">Useful links</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {officialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
