import React from "react";

export default function Impressum() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-300 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
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
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Angaben gemäß § 5 DDG</h2>
            <p className="text-zinc-300">
              Marvin Lee Meyer<br />
              handelnd unter Meyer Media<br />
              Am Friedrich-Ebert-Park 1a<br />
              31157 Sarstedt<br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Kontakt</h2>
            <p className="text-zinc-300">
              Telefon: 05066 6955783<br />
              E-Mail: info@animusfound.com
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="text-zinc-300">
              Marvin Lee Meyer<br />
              Am Friedrich-Ebert-Park 1a<br />
              31157 Sarstedt<br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Unternehmensangaben</h2>
            <p className="text-zinc-300">
              Unternehmensform: Einzelunternehmen<br />
              Unternehmensbezeichnung: Meyer Media
            </p>
            <p className="text-zinc-400 text-xs">
              <strong>Tätigkeit:</strong> IT-, Hosting-, Beratungs-, Design-, Vertriebs- und Marketingdienstleistungen, Content-Creation sowie Online-Vertrieb von Tonträgern und Merchandising-Artikeln.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Marken und Projekte</h2>
            <p className="text-zinc-300">
              seotools-ui ist ein Projekt von Meyer Media.
            </p>
            <p className="text-zinc-350">
              Lunexor ist eine Marke von Meyer Media und betreut diesen Webauftritt technisch im Auftrag von Meyer Media.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Zuständige Kammer</h2>
            <p className="text-zinc-300">
              Industrie- und Handelskammer Hannover<br />
              Bischofsholer Damm 91<br />
              30173 Hannover<br />
              Internet: <a href="https://www.ihk.de/hannover" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">www.ihk.de/hannover</a>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Umsatzsteuer</h2>
            <p className="text-zinc-400">
              Meyer Media nimmt die Kleinunternehmerregelung gemäß § 19 UStG in Anspruch. Es wird keine Umsatzsteuer ausgewiesen.
            </p>
            <p className="text-zinc-400">
              Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG wurde noch nicht erteilt. Eine Wirtschafts-Identifikationsnummer wurde noch nicht erteilt.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Musiklabel / Tonträgerhersteller</h2>
            <p className="text-zinc-300">
              Label / Imprint: Meyer Media<br />
              GVL-Labelcode: LC 103334 – seotools-ui
            </p>
            <p className="text-zinc-400 text-xs">
              <strong>Tätigkeitsbereich:</strong> Tonträgerherstellung, Musikdistribution, Musikveröffentlichung und damit verbundene digitale Dienstleistungen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Zuständige Verwertungsgesellschaft</h2>
            <p className="text-zinc-300">
              GVL Gesellschaft zur Verwertung von Leistungsschutzrechten mbH<br />
              Podbielskiallee 64<br />
              14195 Berlin<br />
              Internet: <a href="https://www.gvl.de" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">www.gvl.de</a>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">Verbraucherstreitbeilegung</h2>
            <p className="text-zinc-400">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <h2 className="text-white text-xs uppercase tracking-wider text-zinc-500 font-bold">Rechtliche Hinweise</h2>
            
            <div className="space-y-3 text-[11px] text-zinc-500">
              <p>
                <strong>Haftung für eigene Inhalte:</strong> Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremden Informationen besteht nur im Rahmen der gesetzlichen Vorschriften.
              </p>
              <p>
                <strong>Haftung für externe Links:</strong> Diese Website enthält Links zu externen Websites Dritter. Auf die Inhalte dieser externen Websites haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden rechtswidriger Inhalte werden entsprechende Links unverzüglich entfernt.
              </p>
              <p>
                <strong>Urheberrecht:</strong> Die auf dieser Website veröffentlichten Inhalte, insbesondere Texte, Grafiken, Logos, Bilder, Audio- und Videoinhalte sowie sonstige Werke, unterliegen dem deutschen Urheberrecht. Inhalte von Meyer Media, seotools-ui, Lunexor oder deren Lizenzgebern dürfen ohne vorherige schriftliche Zustimmung nicht vervielfältilt, bearbeitet, verbreitet oder anderweitig verwertet werden, soweit dies nicht gesetzlich erlaubt ist.
              </p>
              <p>
                <strong>Technische Bereitstellung:</strong> Die technische Bereitstellung dieses Webauftritts erfolgt grundsätzlich über eigene bzw. selbst verwaltete Infrastruktur. Für DNS, Sicherheits- und Netzwerkfunktionen wird Cloudflare genutzt. Soweit im Einzelfall externe Dienstleister für Hosting, Deployment, DNS, Sicherheit, E-Mail oder sonstige technische Leistungen eingesetzt werden, werden diese in der Datenschutzerklärung benannt.
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
