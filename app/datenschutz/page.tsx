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
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-mono font-bold">
            Datenschutzerklärung
          </h1>
        </div>

        <section className="space-y-6 text-xs sm:text-sm leading-relaxed text-zinc-450 font-mono">
          {/* Prominent Local Processing Notice */}
          <div className="p-4 bg-pink-950/20 border border-pink-900/40 rounded-lg space-y-2">
            <h3 className="text-white text-xs uppercase tracking-wider text-pink-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Datenschutz-Garantie: 100% Client-Side
            </h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Die von Ihnen in diesem Tool erstellten oder importierten Robots.txt-Regeln, Sitemaps und Validierungsdaten werden <strong>nicht</strong> an unsere Server gesendet und dort nicht gespeichert. Alle Berechnungen und Speicherungen finden ausschließlich lokal in Ihrem Webbrowser (Arbeitsspeicher oder optionaler Local Storage Ihres Endgeräts) statt.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">1. Verantwortlicher im Sinne der DSGVO</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-zinc-300">
              Marvin Lee Meyer<br />
              handelnd unter Meyer Media<br />
              Am Friedrich-Ebert-Park 1a<br />
              31157 Sarstedt<br />
              Deutschland
            </p>
            <p className="text-zinc-300">
              E-Mail: info@meyermedia.eu<br />
              Telefon: 05066 6955783
            </p>
            <p className="text-[11px] text-zinc-500">
              seotools-ui ist ein Projekt von Meyer Media. Lunexor ist eine Marke von Meyer Media und übernimmt als technischer Geschäftsbereich die Betreuung, Bereitstellung und technische Weiterentwicklung dieses Webauftritts.
            </p>
          </div>

          {/* 2. Allgemeine Hinweise */}
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir verarbeiten personenbezogene Daten stets vertraulich und im Einklang mit den gesetzlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) sowie dem Gesetz über den Datenschutz und den Schutz der Privatsphäre in der Telekommunikation und bei digitalen Diensten (TDDDG).
            </p>
            <p>
              Diese Erklärung richtet sich an Besucherinnen und Besucher unserer Website, Kunden, Interessenten sowie B2B- und Vertragspartner.
            </p>
          </div>

          {/* 3. Hosting und Technische Bereitstellung */}
          <div className="space-y-3">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">3. Technische Bereitstellung und Server-Logfiles</h2>
            <p>
              Beim Aufruf unserer Website erfasst unser System bzw. der Webhosting-Provider automatisch Daten vom Endgerät des Nutzers. Diese Server-Logfiles umfassen:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-zinc-350 text-xs">
              <li>Browsertyp und -version sowie das Betriebssystem des Nutzers</li>
              <li>Den Internet-Service-Provider und die IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen das System des Nutzers auf unsere Website gelangt (Referrer)</li>
              <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
            </ul>
            <p>
              <strong>Rechtsgrundlage:</strong> Die vorübergehende Speicherung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (Berechtigtes Interesse). Unser berechtigtes Interesse liegt in der Gewährleistung der Systemsicherheit, der Stabilität des Webauftritts sowie der Abwehr von Cyberangriffen. Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt.
            </p>
            <p>
              <strong>Cloudflare:</strong> Wir nutzen zur Absicherung unseres Datenverkehrs, zur Abwehr von DDoS-Angriffen und zur Performance-Optimierung die Dienste der Cloudflare Inc. (101 Townsend St., San Francisco, CA 94107, USA). Cloudflare fungiert als DNS- und Sicherheitsdienstleister im Wege der Auftragsverarbeitung. Soweit hierbei Daten in die USA übertragen werden, stützt sich Cloudflare auf das EU-US Data Privacy Framework (DPF) bzw. Standardvertragsklauseln der EU-Kommission.
            </p>
          </div>

          {/* 4. TDDDG / Local Storage */}
          <div className="space-y-3">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">4. Clientseitige Speicherung (Local Storage)</h2>
            <p>
              Unsere Anwendung nutzt den Speicher Ihres Webbrowsers (Local Storage), um von Ihnen konfigurierte Robots.txt-Einstellungen oder Präferenzen lokal zu sichern, damit diese beim nächsten Aufruf der Seite erhalten bleiben. 
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Der Zugriff auf und die Speicherung in Ihrem Endgerät erfolgt auf Grundlage von <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong>. Diese Speicherung ist unbedingt erforderlich, um die vom Nutzer ausdrücklich gewünschte Funktionalität (das Speichern und Fortsetzen des Bearbeitungsstands des Tools) bereitzustellen. Es werden keinerlei Tracking-Daten oder personenbezogene Identifier über diesen lokalen Speicher erfasst oder an Server übermittelt. Sie können den lokalen Speicher über die Einstellungen Ihres Webbrowsers jederzeit löschen.
            </p>
          </div>

          {/* 5. Keine Cookies, kein Tracking, lokale Ressourcen */}
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">5. Cookies, Tracking-Tools und externe Schriften</h2>
            <p>
              <strong>Kein Tracking:</strong> Auf dieser Website werden keine Webanalysedienste (wie Google Analytics, Matomo etc.) eingesetzt.
            </p>
            <p>
              <strong>Keine Werbe-Cookies:</strong> Es werden keine Werbe- oder Marketing-Cookies gesetzt.
            </p>
            <p>
              <strong>Schriftarten (Self-Hosted):</strong> Die auf dieser Website genutzten Schriftarten (Geist / Geist Mono) werden über Next.js beim Build-Prozess lokal eingebunden und direkt von unseren Servern geladen. Es findet kein Verbindungsaufbau zu Servern von Google oder anderen Drittanbietern zum Laden von Webfonts statt.
            </p>
          </div>

          {/* 6. Rechte der betroffenen Personen */}
          <div className="space-y-3">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">6. Ihre Rechte als betroffene Person</h2>
            <p>
              Als betroffene Person haben Sie im Rahmen der DSGVO folgende Rechte gegenüber dem Verantwortlichen:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-350 text-xs">
              <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
              <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungsfristen dem entgegenstehen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, sofern die Verarbeitung auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) erfolgt.</li>
              <li><strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Einmal erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft uns gegenüber widerrufen.</li>
              <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</li>
            </ul>
          </div>

          {/* 7. SSL- bzw. TLS-Verschlüsselung */}
          <div className="space-y-2">
            <h2 className="text-white text-sm uppercase tracking-wider text-pink-400 font-bold">7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
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
