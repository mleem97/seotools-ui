"use client";

import React, { useState } from "react";
import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Home() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const installCommand = "mkdir -p components && curl -sS https://raw.githubusercontent.com/mleem97/lnxr-robotsgen-ui/main/components/RobotsTxtGenerator.tsx -o components/RobotsTxtGenerator.tsx";

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-30 select-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] animate-float" />
        <div className="absolute top-[-5%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]" style={{ animationDelay: "1s" }} />
      </div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f460d_1px,transparent_1px),linear-gradient(to_bottom,#3f3f460d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Navigation Header */}
      <header className="border-b border-zinc-900/60 bg-zinc-950/75 backdrop-blur-md sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-lg bg-pink-500/10">
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
            </div>
            <span className="font-bold tracking-tight text-white text-sm">Robots.txt generator</span>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mleem97/lnxr-robotsgen-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub Project
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            Tailwind 4 + React 19 Ready
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Robots.txt Studio
          </h1>
          
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            A standalone, developer-focused React element to generate, parse, and validate robots.txt configurations directly in the client. Install instantly with zero backend footprint.
          </p>

          {/* CLI Installer Box (shadcn-style) */}
          <div className="max-w-md mx-auto pt-3">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-2.5 pl-4 pr-3 flex items-center justify-between text-left relative group hover:border-zinc-700 transition-colors shadow-lg">
              <div className="flex items-center gap-2.5 overflow-hidden w-full pr-4">
                <span className="text-zinc-600 font-mono text-xs select-none">$</span>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-300 truncate select-all select-none">
                  pnpm dlx gh-install mleem97/lnxr-robotsgen-ui
                </span>
              </div>
              <button
                onClick={handleCopyCmd}
                className={`p-2 rounded-xl transition-all duration-200 shrink-0 border ${
                  copiedCmd
                    ? "bg-pink-500/10 border-pink-500/30 text-pink-400"
                    : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
                title="Copy install command"
              >
                {copiedCmd ? (
                  <svg className="w-4 h-4 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* The Core Generator Component */}
        <section className="relative z-10 animate-scale-in">
          <RobotsTxtGenerator />
        </section>

        {/* Core Component Highlights */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6">
          <div className="bg-zinc-900/25 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors space-y-2.5">
            <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 w-fit">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-white">AI Scraper Shield</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Block AI web models (GPTBot, ClaudeBot, Google-Extended) with one button to secure intellectual content.
            </p>
          </div>

          <div className="bg-zinc-900/25 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors space-y-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-white">Validation Engine</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Standard-compliant path tester evaluates rules in the client. Longest patterns and allowances match first.
            </p>
          </div>

          <div className="bg-zinc-900/25 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors space-y-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-white">Instant Raw Imports</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Paste an existing robots.txt file and let the compiler parse and translate the configuration straight back to the UI.
            </p>
          </div>

          <div className="bg-zinc-900/25 border border-zinc-900/80 rounded-2xl p-5 hover:border-zinc-800 transition-colors space-y-2.5">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 w-fit">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-white">Pure Single-File</h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Completely self-contained. Copy one file to your React project, import, and run without peer package bloat.
            </p>
          </div>
        </section>

        {/* Integration and Docs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-zinc-900/70">
          
          {/* Card 1 */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Simple Client Integration
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This component uses React hooks and inline SVG markup. Put it into your project folder and render it inside any page or panel layout:
            </p>
            <pre className="bg-zinc-950 p-4 rounded-2xl text-[10px] font-mono text-zinc-400 overflow-x-auto border border-zinc-800/80 leading-relaxed">
{`// Importing and rendering the element
import RobotsTxtGenerator from "./components/RobotsTxtGenerator";

export default function AdminSettings() {
  const handleExport = (content: string) => {
    console.log("Updated Robots.txt content:", content);
  };

  return (
    <div className="p-8">
      <RobotsTxtGenerator onExport={handleExport} />
    </div>
  );
}`}
            </pre>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Path Validation Engine Specifications
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard-compliant robots.txt matching parameters are computed immediately during validation tests:
            </p>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Wildcard conversions:</strong> Wildcards (`*`) and anchors (`$`) translate instantly to exact Javascript regex boundary constraints.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Longest-match priority:</strong> If multiple directives cover a route, the longest pattern string wins. Z.B. `/admin/` beats `/`.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                <span>
                  <strong>Allow overrules:</strong> On equal pattern string lengths, the <strong>Allow</strong> directive overrules the Disallow block.
                </span>
              </li>
            </ul>
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
