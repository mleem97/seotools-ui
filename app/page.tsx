"use client";

import React, { useState } from "react";
import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Home() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const installCommand = "mkdir -p components && curl -sS https://raw.githubusercontent.com/mleem97/seotools-ui/main/components/RobotsTxtGenerator.tsx -o components/RobotsTxtGenerator.tsx";

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      
      {/* Background Ambient Pink Accent (Soft and Monochrome, no gradient-heavy slop) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden opacity-20 select-none">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-[120px] animate-float" />
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px]" style={{ animationDelay: "2s" }} />
      </div>

      {/* Industrial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f460a_1px,transparent_1px),linear-gradient(to_bottom,#3f3f460a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-50" />

      {/* Navigation Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Technical branding */}
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="8" x2="12" y2="4" />
              <circle cx="12" cy="3" r="1" fill="currentColor" />
              <line x1="2" y1="13" x2="5" y2="13" />
              <line x1="19" y1="13" x2="22" y2="13" />
              <rect x="5" y="8" width="14" height="11" rx="2" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <line x1="9" y1="16" x2="15" y2="16" />
            </svg>
            <span className="font-bold tracking-tight text-white text-sm font-mono uppercase tracking-wider">Robots.txt generator</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mleem97/seotools-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded hover:bg-zinc-900 border border-zinc-800"
            >
              GitHub Project
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        
        {/* Left-Aligned Technical Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center animate-fade-in">
          
          {/* Left Column: Wording & Installer */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              <span>Pinkbot Utility // Standalone React Component</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
              Robots.txt ohne Rätselraten
            </h1>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              Dieses Tool ist für Webmaster, Entwickler und alle, die Websites betreuen und schnell eine saubere robots.txt brauchen. Baue Crawl-Regeln visuell, prüfe Pfade direkt im Browser und exportiere am Ende eine fertige Textdatei. Pinkbot passt auf, dass aus guten Absichten keine kaputten Crawl-Regeln entstehen.
            </p>

            {/* Quick shadcn-style CLI install command */}
            <div className="pt-2 max-w-md">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-lg p-2 pl-3.5 pr-2.5 flex items-center justify-between text-left group hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2 overflow-hidden w-full pr-4">
                  <span className="text-zinc-600 font-mono text-xs select-none">$</span>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-300 truncate select-all">
                    pnpm dlx gh-install mleem97/seotools-ui
                  </span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className={`p-1.5 rounded transition-all shrink-0 border ${
                    copiedCmd
                      ? "bg-pink-500/10 border-pink-500/30 text-pink-400"
                      : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400"
                  }`}
                  title="Copy install command"
                >
                  {copiedCmd ? (
                    <svg className="w-3.5 h-3.5 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Crawler Console Work Object (Breaks SaaS Mockup) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 rounded-lg p-5 font-mono text-xs text-zinc-400 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5 text-[10px] uppercase text-zinc-600 font-semibold tracking-wider">
              <span>CRAWLER STATUS INTERFACE</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500">Live</span>
              </div>
            </div>
            
            <div className="space-y-2 text-[11px] text-zinc-500">
              <div className="flex justify-between">
                <span>[CLIENT_IP]:</span>
                <span className="text-zinc-300">127.0.0.1</span>
              </div>
              <div className="flex justify-between">
                <span>[DEFAULT_BOT]:</span>
                <span className="text-pink-400">Googlebot</span>
              </div>
              <div className="flex justify-between">
                <span>[ACTIVE_RULESET]:</span>
                <span className="text-zinc-300">Custom local rules</span>
              </div>
              <div className="flex justify-between">
                <span>[DIRECTIVES_LOADED]:</span>
                <span className="text-zinc-300">Active</span>
              </div>
              <div className="flex justify-between">
                <span>[SITEMAP_LINK]:</span>
                <span className="text-green-400">OK // Verified</span>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-3 text-[10px] text-zinc-600">
              CRAWLER LAB STATION COMPILING OUTPUT
            </div>
          </div>

        </section>

        {/* The Generator Component */}
        <section className="relative z-10 animate-scale-in">
          <RobotsTxtGenerator />
        </section>

        {/* Asymmetrical Developer Info Panels */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-zinc-900/60">
          
          {/* Panel 1: Crawler Field Manual (5 Cols) */}
          <div className="md:col-span-5 bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-pink-500 rounded-full" />
              <span>Crawler Field Manual</span>
            </h3>
            <ul className="space-y-3 font-mono text-[10px] text-zinc-400">
              <li className="flex gap-2">
                <span className="text-zinc-600">01</span>
                <span><strong>Wildcards (*):</strong> Match any sequence of characters in path filters.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-600">02</span>
                <span><strong>End Anchors ($):</strong> Enforce strict matching at the end of path strings.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-600">03</span>
                <span><strong>Longest Specific wins:</strong> The longest matched pattern takes precedence over short ones.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-600">04</span>
                <span><strong>Allow Priority:</strong> If an Allow and Disallow pattern have equal length, Allow is preferred.</span>
              </li>
            </ul>
          </div>

          {/* Panel 2: Spec Check (3 Cols) */}
          <div className="md:col-span-3 bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-pink-500 rounded-full" />
              <span>Spec Check</span>
            </h3>
            <div className="space-y-2.5 font-mono text-[10px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>User-agent groups</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Crawl-delay tag</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Path wildcards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sitemap exports</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Google-style sorting</span>
              </div>
            </div>
          </div>

          {/* Panel 3: Integration & Manual Setup (4 Cols) */}
          <div className="md:col-span-4 bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-pink-500 rounded-full" />
              <span>For custom UI integrations</span>
            </h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Pinkbot ist als eigenständige React-Komponente gebaut. Du kannst ihn in eigene Tools, Kundenbereiche oder interne Dashboards einbauen. Die gesamte Validierungslogik läuft direkt clientseitig.
            </p>
            <div className="text-[10px] font-mono text-zinc-500">
              Check out <a href="https://github.com/mleem97/seotools-ui" className="text-pink-500 hover:underline">CONTRIBUTING.md</a> for setup.
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60 bg-zinc-950 py-8 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <p>© Copyright 2026 Meyer Media - Marvin Lee Meyer - Built as a Standalone Element for React.</p>
        </div>
      </footer>
    </div>
  );
}
