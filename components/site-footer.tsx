import { Mail } from 'lucide-react'

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">04 — Contact</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">{"Let's connect"}</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Open to junior engineer roles, study collaborations, and AI evaluation projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:anamika.more@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            anamika.more@example.com
          </a>
          <a
            href="https://github.com/anamikamore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anamika More. Built for learning and sharing.
        </p>
      </div>
    </footer>
  )
}
