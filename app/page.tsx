"use client";

import React, { useState } from "react";
import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Home() {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [showTools, setShowTools] = useState(true);

  const installCommand = "mkdir -p components && curl -sS https://raw.githubusercontent.com/mleem97/seotools-ui/main/components/RobotsTxtGenerator.tsx -o components/RobotsTxtGenerator.tsx";

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      
      {/* Navigation Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo, Branding & Dropdown Toggle */}
          <div className="flex items-center gap-5">
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
              <span className="font-semibold text-white text-xs font-mono tracking-wider uppercase">seotools-ui</span>
            </div>

            {/* Sub-navbar Dropdown Toggle */}
            <button
              onClick={() => setShowTools(!showTools)}
              className={`flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border transition-all ${
                showTools
                  ? "bg-pink-500/10 border-pink-500/30 text-pink-400"
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
              }`}
              aria-expanded={showTools}
            >
              <span>Tools Menu</span>
              <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${showTools ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div>
            <a
              href="https://github.com/mleem97/seotools-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded border border-zinc-800"
            >
              GitHub Project
            </a>
          </div>
        </div>

        {/* Secondary Sub-Navbar for Tools Links */}
        <div 
          className={`border-t border-zinc-900 bg-zinc-950/90 overflow-hidden transition-all duration-300 ease-in-out ${
            showTools ? "max-h-12 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-5 overflow-x-auto scrollbar-none font-mono text-[9px] uppercase tracking-wider">
            <span className="text-zinc-650 pr-4 border-r border-zinc-900 shrink-0 select-none">SEO Suite</span>
            
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="text-pink-400 border-b border-pink-500/50 pb-0.5 flex items-center gap-1 shrink-0"
            >
              <span className="w-1 h-1 rounded-full bg-pink-500" />
              Robots.txt Builder
            </a>
            
            <span className="text-zinc-600 flex items-center gap-1 select-none shrink-0 cursor-not-allowed" title="Coming Soon">
              <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Sitemap Auditor
            </span>

            <span className="text-zinc-600 flex items-center gap-1 select-none shrink-0 cursor-not-allowed" title="Coming Soon">
              <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Schema.org Builder
            </span>

            <span className="text-zinc-600 flex items-center gap-1 select-none shrink-0 cursor-not-allowed" title="Coming Soon">
              <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Meta Tag Auditor
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 md:py-16 space-y-12">
        
        {/* Simple & Clean Left-Aligned Hero Section */}
        <section className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[9px] font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
            <span>Developer SEO Utilities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
            SEO tools without the bloat.
          </h1>
          
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
            A modular collection of developer-focused SEO utilities. Embeddable, self-contained React components designed for search visibility, crawler control, and audits.
          </p>

          {/* Clean Installation Block */}
          <div className="pt-2 max-w-lg">
            <div className="bg-zinc-950 border border-zinc-850 rounded-lg p-2 pl-3.5 pr-2 flex items-center justify-between text-left group hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2.5 overflow-hidden w-full pr-4">
                <span className="text-zinc-600 font-mono text-xs select-none">$</span>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-300 truncate select-all">
                  pnpm dlx gh-install mleem97/seotools-ui
                </span>
              </div>
              <button
                onClick={handleCopyCmd}
                className={`p-1.5 rounded transition-all shrink-0 border ${
                  copiedCmd
                    ? "bg-pink-500/10 border-pink-500/30 text-pink-400 font-bold"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* The Generator Component */}
        <section className="relative z-10 animate-scale-in space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Tool Showcase: Robots.txt Generator
            </h2>
          </div>
          <RobotsTxtGenerator />
        </section>

        {/* Minimal Spec and Integration panels */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-900">
          
          {/* Panel 1: Crawler Spec Rules */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
              Crawl Matching Rules
            </h3>
            <ul className="space-y-3 font-mono text-[10px] text-zinc-400">
              <li className="flex gap-2">
                <span className="text-zinc-600">•</span>
                <span><strong>Wildcard (*):</strong> Matches any sequence of characters in path filters.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-600">•</span>
                <span><strong>End Anchors ($):</strong> Enforces strict matching at the end of path URL strings.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-600">•</span>
                <span><strong>Priority matching:</strong> Longest rule pattern wins. In equal length rules, <strong>Allow</strong> overrules Disallow.</span>
              </li>
            </ul>
          </div>

          {/* Panel 2: Integration snippet */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
              Quick Integration
            </h3>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Copy the standalone component file to your React / Next.js codebase. Use it directly:
            </p>
            <pre className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-850 text-[9px] font-mono text-zinc-400 overflow-x-auto leading-normal">
{`import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Page() {
  return <RobotsTxtGenerator onExport={(txt) => console.log(txt)} />;
}`}
            </pre>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60 bg-zinc-950 py-8 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <p>© Copyright 2026 Meyer Media - Marvin Lee Meyer - Built as a Standalone Element for React.</p>
          <div className="flex justify-center gap-4 text-[10px] font-mono uppercase tracking-wider text-zinc-650">
            <a href="/impressum" className="hover:text-zinc-450 hover:underline transition-colors">Impressum</a>
            <span>•</span>
            <a href="/datenschutz" className="hover:text-zinc-450 hover:underline transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
