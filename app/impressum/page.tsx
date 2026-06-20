import React from "react";

export default function Impressum() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-350 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="8" x2="12" y2="4" />
              <circle cx="12" cy="3" r="1" fill="currentColor" />
              <line x1="2" y1="13" x2="5" y2="13" />
              <line x1="19" y1="13" x2="22" y2="13" />
              <rect x="5" y="8" width="14" height="11" rx="2" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <line x1="9" y1="16" x2="15" y2="16" />
            </svg>
            <span className="font-semibold text-white text-xs font-mono tracking-wider uppercase">seotools-ui / legal</span>
          </div>
          <a
            href="/"
            className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors py-1 px-2.5 rounded border border-zinc-800"
          >
            ← Back to App
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12 md:py-20 space-y-8">
        <div className="space-y-2 border-b border-zinc-900 pb-6">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[9px] font-mono uppercase tracking-wider">
            <span>Legal Disclosure</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-mono">
            Impressum
          </h1>
        </div>

        <section className="space-y-6 text-xs sm:text-sm leading-relaxed text-zinc-400 font-mono">
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">Angaben gemäß § 5 TMG</h2>
            <p className="text-zinc-300">
              Meyer Media<br />
              Inhaber: Marvin Lee Meyer<br />
              [Musterstraße 123]<br />
              [12345 Hamburg]
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">Kontakt</h2>
            <p className="text-zinc-300">
              Telefon: [Telefonnummer]<br />
              E-Mail: [info@meyermedia.de]
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-zinc-300">
              Marvin Lee Meyer<br />
              [Musterstraße 123]<br />
              [12345 Hamburg]
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-900">
            <h2 className="text-white text-xs uppercase tracking-wider text-zinc-500">Haftungsausschluss (Disclaimer)</h2>
            <div className="space-y-4 text-[11px] text-zinc-550 leading-normal">
              <p>
                <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60 bg-zinc-950 py-8 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-4xl mx-auto px-4">
          <p>© Copyright 2026 Meyer Media - Marvin Lee Meyer.</p>
        </div>
      </footer>
    </div>
  );
}
