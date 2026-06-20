import React from "react";

export default function Datenschutz() {
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
          {/* Prominent Local Processing Notice */}
          <div className="p-4 bg-pink-950/20 border border-pink-900/40 rounded-lg space-y-2">
            <h3 className="text-white text-xs uppercase tracking-wider text-pink-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Sicherheits- & Datenschutz-Garantie: 100% Lokal
            </h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Dieses Tool speichert <strong>keine</strong> Daten auf unseren Servern und soll dies auch in Zukunft nicht tun. Sämtliche Konfigurationen, Importe und Einstellungen verbleiben ausschließlich im Arbeitsspeicher (RAM) bzw. dem lokalen Speicher (Local Storage) Ihres eigenen Browsers. Die Verarbeitung findet vollständig clientseitig auf Ihrem Endgerät statt.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="text-zinc-300">
              Marvin Lee Meyer<br />
              handelnd unter Meyer Media<br />
              Am Friedrich-Ebert-Park 1a<br />
              31157 Sarstedt<br />
              Deutschland
            </p>
            <p className="text-zinc-350">
              E-Mail: info@meyermedia.eu<br />
              Telefon: 05066 6955783
            </p>
            <p className="text-zinc-400 text-xs">
              seotools-ui ist ein Projekt von Meyer Media.
            </p>
            <p className="text-zinc-400 text-xs">
              Lunexor ist eine Marke von Meyer Media und übernimmt als technischer Geschäftsbereich die Betreuung, Bereitstellung und technische Weiterentwicklung dieses Webauftritts.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzvorschriften, insbesondere der DSGVO, des Bundesdatenschutzgesetzes (BDSG) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG).
            </p>
            <p>
              Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dazu können insbesondere Name, Anschrift, E-Mail-Adresse, Telefonnummer, IP-Adresse, Vertragsdaten, Kommunikationsdaten, Zahlungsdaten, steuerliche Angaben, Künstlernamen, Release-Daten, technische Nutzungsdaten und sonstige Angaben gehören, die Sie uns übermitteln oder die bei Nutzung unserer Dienste entstehen.
            </p>
            <p>
              Diese Datenschutzerklärung richtet sich insbesondere an Besucherinnen und Besucher unserer Website, Privatpersonen, Interessenten, Kunden, Selbstständige, Einzelunternehmer, B2B-Kontakte, Künstlerinnen und Künstler, Musiker, Produzenten, Rechteinhaber, Vertragspartner, Lieferanten, Dienstleister und sonstige Geschäftspartner.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">3. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten insbesondere zur Bereitstellung und zum technischen Betrieb der Website, zum Schutz vor Missbrauch, Spam und Angriffen, zur Bearbeitung von Kontaktanfragen, zur Kommunikation mit Interessenten, Kunden, Künstlern und Geschäftspartnern, zur Prüfung von Demo-Einsendungen, zur Durchführung vorvertraglicher Maßnahmen, zur Vertragsabwicklung, zur Musikdistribution, zur Rechteverwaltung, zur Abrechnung, zur Buchhaltung, zur Rechnungsstellung, zur Zahlungsabwicklung, zur Erfüllung gesetzlicher Pflichten sowie zur Nachweisführung und Rechtsverteidigung.
            </p>
            <p>
              Die Verarbeitung erfolgt je nach Zweck auf Grundlage von:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-350">
              <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> bei Einwilligung,</li>
              <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> bei Vertragserfüllung oder vorvertraglichen Maßnahmen,</li>
              <li><strong>Art. 6 Abs. 1 lit. c DSGVO</strong> bei gesetzlichen Verpflichtungen,</li>
              <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> bei berechtigten Interessen.</li>
            </ul>
            <p>
              Unsere berechtigten Interessen liegen insbesondere im sicheren und stabilen Betrieb unserer Website, in der effizienten Kommunikation, in der Bearbeitung von Anfragen, in der Organisation unserer Geschäftsprozesse, im Schutz vor Missbrauch und Angriffen, in der Durchsetzung und Verteidigung rechtlicher Ansprüche sowie in der wirtschaftlichen Weiterentwicklung unserer Dienstleistungen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">4. Rechte betroffener Personen</h2>
            <p>
              Sie haben nach Maßgabe der DSGVO folgende Rechte:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-350">
              <li>Auskunftsrecht (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Widerrufsrecht (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">5. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Die Dauer richtet sich insbesondere nach der Dauer der Anfragebearbeitung, der Dauer der Vertragsbeziehung, gesetzlichen Aufbewahrungspflichten, Nachweis- und Dokumentationsinteressen, Verjährungsfristen sowie Sicherheits- und Missbrauchsprävention.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">6. Datensicherheit</h2>
            <p>
              Wir treffen technische und organisatorische Maßnahmen, um personenbezogene Daten gegen Verlust, Zerstörung, Manipulation, unbefugten Zugriff und unberechtigte Offenlegung zu schützen. Dazu gehören verschlüsselte Übertragung, Zugriffsbeschränkungen, Passwortschutz und regelmäßige Prüfung technischer Systeme.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-900 text-zinc-550 text-[10px]">
            Stand: Juni 2026
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
