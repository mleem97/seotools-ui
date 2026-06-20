import React from "react";

export default function Datenschutz() {
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
            <span className="font-semibold text-white text-xs font-mono tracking-wider uppercase">seotools-ui / privacy</span>
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
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-mono">
            Datenschutzerklärung
          </h1>
        </div>

        <section className="space-y-6 text-xs sm:text-sm leading-relaxed text-zinc-400 font-mono">
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">1. Datenschutz auf einen Blick</h2>
            <p>
              <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p>
              <strong>Datenerfassung auf dieser Website:</strong> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>
              <strong>Hinweis zur verantwortlichen Stelle:</strong> Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-zinc-300">
              Meyer Media<br />
              Inhaber: Marvin Lee Meyer<br />
              [Musterstraße 123]<br />
              [12345 Hamburg]<br />
              E-Mail: [info@meyermedia.de]
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">3. Datenerfassung auf unserer Website</h2>
            <p>
              <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-350">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (ggf. in anonymisierter Form)</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
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
