"use client";

import React, { useState, useMemo, useEffect } from "react";

// Types
export interface Rule {
  id: string;
  type: "Allow" | "Disallow";
  pattern: string;
}

export interface RuleGroup {
  id: string;
  userAgent: string;
  crawlDelay?: number;
  rules: Rule[];
}

interface RobotsTxtGeneratorProps {
  initialSitemaps?: string[];
  initialGroups?: RuleGroup[];
  onExport?: (robotsTxt: string) => void;
}

// Common bots for dropdown options
const COMMON_BOTS = [
  { value: "*", label: "All Crawlers (*)" },
  { value: "Googlebot", label: "Googlebot" },
  { value: "Bingbot", label: "Bingbot" },
  { value: "Applebot", label: "Applebot" },
  { value: "DuckDuckBot", label: "DuckDuckBot" },
  { value: "YandexBot", label: "YandexBot" },
  { value: "Baiduspider", label: "Baiduspider" },
  { value: "ia_archiver", label: "Alexa (ia_archiver)" },
  { value: "GPTBot", label: "ChatGPT (GPTBot)" },
  { value: "ChatGPT-User", label: "ChatGPT User" },
  { value: "ClaudeBot", label: "Anthropic (ClaudeBot)" },
  { value: "Google-Extended", label: "Google AI Training" },
  { value: "PerplexityBot", label: "Perplexity AI" },
];

// Presets
const PRESETS = {
  allowAll: {
    name: "Allow All",
    description: "Allows all crawlers to access the entire site.",
    sitemaps: ["https://example.com/sitemap.xml"],
    groups: [
      {
        id: "group-allow-all",
        userAgent: "*",
        rules: [{ id: "rule-allow-all", type: "Allow", pattern: "/" }],
      },
    ] as RuleGroup[],
  },
  disallowAll: {
    name: "Disallow All",
    description: "Blocks all crawlers from accessing the entire site.",
    sitemaps: [],
    groups: [
      {
        id: "group-disallow-all",
        userAgent: "*",
        rules: [{ id: "rule-disallow-all", type: "Disallow", pattern: "/" }],
      },
    ] as RuleGroup[],
  },
  devStaging: {
    name: "Block Staging / Dev",
    description: "Ideal config to prevent search engines from index staging environments.",
    sitemaps: [],
    groups: [
      {
        id: "group-dev",
        userAgent: "*",
        rules: [
          { id: "rule-dev-1", type: "Disallow", pattern: "/" },
        ],
      },
    ] as RuleGroup[],
  },
  seoBalanced: {
    name: "SEO Standard Setup",
    description: "Blocks administrative, search, and checkout routes while allowing the rest.",
    sitemaps: ["https://example.com/sitemap.xml"],
    groups: [
      {
        id: "group-seo-general",
        userAgent: "*",
        rules: [
          { id: "rule-seo-1", type: "Disallow", pattern: "/admin/" },
          { id: "rule-seo-2", type: "Disallow", pattern: "/api/" },
          { id: "rule-seo-3", type: "Disallow", pattern: "/checkout/" },
          { id: "rule-seo-4", type: "Disallow", pattern: "/search?" },
          { id: "rule-seo-5", type: "Disallow", pattern: "/tmp/" },
          { id: "rule-seo-6", type: "Allow", pattern: "/" },
        ],
      },
    ] as RuleGroup[],
  },
};

const AI_CRAWLERS = [
  { agent: "GPTBot", desc: "ChatGPT crawler" },
  { agent: "ChatGPT-User", desc: "ChatGPT plugins & users" },
  { agent: "ClaudeBot", desc: "Anthropic Claude crawler" },
  { agent: "Google-Extended", desc: "Google AI training crawlers" },
  { agent: "PerplexityBot", desc: "Perplexity AI crawler" },
  { agent: "cohere-ai", desc: "Cohere AI training crawler" },
  { agent: "Omgilibot", desc: "AI training scraper" },
  { agent: "Anthropic-ai", desc: "Anthropic AI model training" },
];

export default function RobotsTxtGenerator({
  initialSitemaps = ["https://example.com/sitemap.xml"],
  initialGroups = [
    {
      id: "group-1",
      userAgent: "*",
      rules: [
        { id: "rule-1", type: "Disallow", pattern: "/admin/" },
        { id: "rule-2", type: "Disallow", pattern: "/api/" },
        { id: "rule-3", type: "Allow", pattern: "/" },
      ],
    },
  ],
  onExport,
}: RobotsTxtGeneratorProps) {
  // Main state
  const [sitemaps, setSitemaps] = useState<string[]>(initialSitemaps);
  const [groups, setGroups] = useState<RuleGroup[]>(initialGroups);

  // Sitemap input state
  const [newSitemap, setNewSitemap] = useState("");

  // Tabs state: "edit", "tester", "import"
  const [activeTab, setActiveTab] = useState<"edit" | "tester" | "import">("edit");

  // Import state
  const [importText, setImportText] = useState("");
  const [importError, setImportError] = useState<string | null>(null);

  // Tester state
  const [testUserAgent, setTestUserAgent] = useState("*");
  const [testPath, setTestPath] = useState("/");

  // Copied indicators
  const [copied, setCopied] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);

  const copyInstallPrompt = () => {
    const installPrompt = `Create a file at \`components/RobotsTxtGenerator.tsx\` in my React/Next.js project and write the self-contained Robots.txt Studio component. You can fetch its complete source code directly using this command:

\`\`\`bash
mkdir -p components && curl -sS https://raw.githubusercontent.com/mleem97/seotools-ui/main/components/RobotsTxtGenerator.tsx -o components/RobotsTxtGenerator.tsx
\`\`\`

Once created, explain how I can import and render <RobotsTxtGenerator /> in my layout or page files.`;
    navigator.clipboard.writeText(installPrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  // Auto-generate robots.txt content
  const generatedRobotsTxt = useMemo(() => {
    let output = "# Generated by Robots.txt Studio\n";
    output += "# Crawl policy: polite but firm\n\n";

    // Add sitemaps
    if (sitemaps.length > 0) {
      sitemaps.forEach((sitemap) => {
        if (sitemap.trim()) {
          output += `Sitemap: ${sitemap.trim()}\n`;
        }
      });
      output += "\n";
    }

    // Add rule groups
    groups.forEach((group) => {
      if (!group.userAgent.trim()) return;

      output += `User-agent: ${group.userAgent.trim()}\n`;

      if (group.crawlDelay !== undefined && group.crawlDelay > 0) {
        output += `Crawl-delay: ${group.crawlDelay}\n`;
      }

      group.rules.forEach((rule) => {
        if (rule.pattern.trim()) {
          output += `${rule.type}: ${rule.pattern.trim()}\n`;
        }
      });

      output += "\n";
    });

    return output.trim();
  }, [sitemaps, groups]);

  // Export whenever contents change
  useEffect(() => {
    if (onExport) {
      onExport(generatedRobotsTxt);
    }
  }, [generatedRobotsTxt, onExport]);

  // Handle Preset Load
  const loadPreset = (presetKey: keyof typeof PRESETS) => {
    const preset = PRESETS[presetKey];
    setSitemaps(preset.sitemaps);
    // Clone groups to avoid referencing issues
    setGroups(JSON.parse(JSON.stringify(preset.groups)));
  };

  // Add sitemap helper
  const addSitemap = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSitemap.trim()) return;

    if (!newSitemap.startsWith("http://") && !newSitemap.startsWith("https://")) {
      alert("Sitemap must start with http:// or https://");
      return;
    }

    if (!sitemaps.includes(newSitemap.trim())) {
      setSitemaps([...sitemaps, newSitemap.trim()]);
    }
    setNewSitemap("");
  };

  const removeSitemap = (index: number) => {
    setSitemaps(sitemaps.filter((_, idx) => idx !== index));
  };

  // Group helpers
  const addGroup = (ua = "*") => {
    const newGroup: RuleGroup = {
      id: `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      userAgent: ua,
      rules: [{ id: `rule-${Date.now()}`, type: "Disallow", pattern: "" }],
    };
    setGroups([...groups, newGroup]);
  };

  const removeGroup = (groupId: string) => {
    setGroups(groups.filter((g) => g.id !== groupId));
  };

  const updateGroupUserAgent = (groupId: string, userAgent: string) => {
    setGroups(
      groups.map((g) => (g.id === groupId ? { ...g, userAgent } : g))
    );
  };

  const updateGroupCrawlDelay = (groupId: string, delay: string) => {
    setGroups(
      groups.map((g) => {
        if (g.id === groupId) {
          const val = delay === "" ? undefined : parseInt(delay, 10);
          return { ...g, crawlDelay: isNaN(val as number) ? undefined : val };
        }
        return g;
      })
    );
  };

  // Rule helpers
  const addRule = (groupId: string) => {
    setGroups(
      groups.map((g) => {
        if (g.id === groupId) {
          return {
            ...g,
            rules: [
              ...g.rules,
              {
                id: `rule-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                type: "Disallow",
                pattern: "",
              },
            ],
          };
        }
        return g;
      })
    );
  };

  const removeRule = (groupId: string, ruleId: string) => {
    setGroups(
      groups.map((g) => {
        if (g.id === groupId) {
          return {
            ...g,
            rules: g.rules.filter((r) => r.id !== ruleId),
          };
        }
        return g;
      })
    );
  };

  const updateRule = (groupId: string, ruleId: string, updates: Partial<Rule>) => {
    setGroups(
      groups.map((g) => {
        if (g.id === groupId) {
          return {
            ...g,
            rules: g.rules.map((r) => (r.id === ruleId ? { ...r, ...updates } : r)),
          };
        }
        return g;
      })
    );
  };

  // Add AI Scrapers Block Helper
  const addAiBlocks = () => {
    const currentUas = groups.map((g) => g.userAgent.toLowerCase());
    const newGroupsToAdd: RuleGroup[] = [];

    AI_CRAWLERS.forEach((ai) => {
      if (!currentUas.includes(ai.agent.toLowerCase())) {
        newGroupsToAdd.push({
          id: `group-ai-${ai.agent}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          userAgent: ai.agent,
          rules: [{ id: `rule-ai-disallow-${ai.agent}-${Date.now()}`, type: "Disallow", pattern: "/" }],
        });
      }
    });

    if (newGroupsToAdd.length === 0) {
      alert("All core AI bots are already represented in your user-agent list.");
      return;
    }

    setGroups([...groups, ...newGroupsToAdd]);
  };

  // Copy to clipboard helper
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedRobotsTxt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download robots.txt helper
  const downloadRobotsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedRobotsTxt], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "robots.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Parsing engine for importing robots.txt
  const handleImport = () => {
    setImportError(null);
    if (!importText.trim()) {
      setImportError("Please enter some robots.txt content first.");
      return;
    }

    try {
      const lines = importText.split("\n");
      const parsedSitemaps: string[] = [];
      const parsedGroups: {
        userAgents: string[];
        crawlDelay?: number;
        rules: { type: "Allow" | "Disallow"; pattern: string }[];
      }[] = [];

      let currentBlock: typeof parsedGroups[0] | null = null;

      lines.forEach((line) => {
        const hashIdx = line.indexOf("#");
        let cleanLine = hashIdx !== -1 ? line.substring(0, hashIdx) : line;
        cleanLine = cleanLine.trim();

        if (!cleanLine) return;

        const colonIdx = cleanLine.indexOf(":");
        if (colonIdx === -1) return;

        const key = cleanLine.substring(0, colonIdx).trim().toLowerCase();
        const value = cleanLine.substring(colonIdx + 1).trim();

        if (key === "sitemap") {
          parsedSitemaps.push(value);
        } else if (key === "user-agent") {
          if (currentBlock && currentBlock.rules.length > 0) {
            parsedGroups.push(currentBlock);
            currentBlock = null;
          }

          if (!currentBlock) {
            currentBlock = { userAgents: [], rules: [] };
          }
          currentBlock.userAgents.push(value);
        } else if (key === "allow" || key === "disallow") {
          if (!currentBlock) {
            currentBlock = { userAgents: ["*"], rules: [] };
          }
          currentBlock.rules.push({
            type: key === "allow" ? "Allow" : "Disallow",
            pattern: value,
          });
        } else if (key === "crawl-delay") {
          if (currentBlock) {
            const delayVal = parseInt(value, 10);
            if (!isNaN(delayVal)) {
              currentBlock.crawlDelay = delayVal;
            }
          }
        }
      });

      if (currentBlock) {
        parsedGroups.push(currentBlock);
      }

      const uiGroups: RuleGroup[] = [];
      let idCounter = 1;

      parsedGroups.forEach((g) => {
        g.userAgents.forEach((ua) => {
          uiGroups.push({
            id: `imported-group-${idCounter++}-${Date.now()}`,
            userAgent: ua,
            crawlDelay: g.crawlDelay,
            rules: g.rules.map((r, idx) => ({
              id: `imported-rule-${idx}-${Date.now()}-${Math.random()}`,
              type: r.type,
              pattern: r.pattern,
            })),
          });
        });
      });

      if (uiGroups.length === 0 && parsedSitemaps.length === 0) {
        setImportError("Could not find any valid directives (User-agent, Allow, Disallow, Sitemap).");
        return;
      }

      setSitemaps(parsedSitemaps);
      setGroups(uiGroups.length > 0 ? uiGroups : [
        {
          id: `group-default-${Date.now()}`,
          userAgent: "*",
          rules: [{ id: `rule-default-${Date.now()}`, type: "Allow", pattern: "/" }],
        },
      ]);
      setImportText("");
      setActiveTab("edit");
    } catch (e: any) {
      setImportError(`Failed to parse content: ${e.message || "Unknown error"}`);
    }
  };

  // --- Path Matching Engine ---
  const patternToRegex = (pattern: string): RegExp => {
    let regexStr = "";
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (char === "*") {
        regexStr += ".*";
      } else if (char === "$" && i === pattern.length - 1) {
        regexStr += "$";
      } else if (["\\", "^", ".", "+", "?", "(", ")", "|", "[", "]", "{", "}", "$"].includes(char)) {
        regexStr += "\\" + char;
      } else {
        regexStr += char;
      }
    }
    return new RegExp("^" + regexStr);
  };

  const testPathRules = useMemo(() => {
    const path = testPath.trim().startsWith("/") ? testPath.trim() : "/" + testPath.trim();
    const ua = testUserAgent.trim().toLowerCase();

    let matchingGroup = groups.find((g) => g.userAgent.trim().toLowerCase() === ua);

    let isFallback = false;
    if (!matchingGroup) {
      matchingGroup = groups.find((g) => g.userAgent.trim() === "*");
      isFallback = true;
    }

    if (!matchingGroup || matchingGroup.rules.length === 0) {
      return {
        allowed: true,
        reason: "No rules matching this User-agent (or wildcard '*') were defined.",
        ruleMatched: null,
        groupMatched: null,
      };
    }

    const matchedRules: { rule: Rule; regex: RegExp; length: number }[] = [];

    matchingGroup.rules.forEach((rule) => {
      if (!rule.pattern.trim()) return;
      const regex = patternToRegex(rule.pattern.trim());
      if (regex.test(path)) {
        matchedRules.push({
          rule,
          regex,
          length: rule.pattern.trim().length,
        });
      }
    });

    if (matchedRules.length === 0) {
      return {
        allowed: true,
        reason: `No matching rules found in group "${matchingGroup.userAgent}" for path "${path}". Access defaults to Allowed.`,
        ruleMatched: null,
        groupMatched: matchingGroup.userAgent,
        isFallback,
      };
    }

    matchedRules.sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      }
      if (a.rule.type !== b.rule.type) {
        return a.rule.type === "Allow" ? -1 : 1;
      }
      return 0;
    });

    const winningMatch = matchedRules[0];
    const isAllowed = winningMatch.rule.type === "Allow";

    return {
      allowed: isAllowed,
      reason: `Rule match "${winningMatch.rule.type}: ${winningMatch.rule.pattern}" takes precedence because it is the most specific pattern matched (pattern length: ${winningMatch.length}).`,
      ruleMatched: winningMatch.rule,
      groupMatched: matchingGroup.userAgent,
      isFallback,
    };
  }, [groups, testUserAgent, testPath]);

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 shadow-2xl overflow-hidden font-sans">
      
      {/* Dense Terminal Sub-header */}
      <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-2 flex items-center justify-between font-mono text-[10px] tracking-wide text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-pink-500/20 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-pink-500" />
          </span>
          <span>ROBOT CONTROL PANEL // v1.1.0</span>
        </div>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded bg-zinc-800" />
          <span className="w-2 h-2 rounded bg-zinc-800" />
          <span className="w-2 h-2 rounded bg-zinc-800" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {/* Left Side: Builder and Controller (7 Cols) */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col space-y-6">
          
          {/* Header */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2.5">
              <svg className="w-7 h-7 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="8" x2="12" y2="4" />
                <circle cx="12" cy="3" r="1" fill="currentColor" />
                <line x1="2" y1="13" x2="5" y2="13" />
                <line x1="19" y1="13" x2="22" y2="13" />
                <rect x="5" y="8" width="14" height="11" rx="2" />
                <circle cx="9" cy="12" r="1" fill="currentColor" />
                <circle cx="15" cy="12" r="1" fill="currentColor" />
                <line x1="9" y1="16" x2="15" y2="16" />
              </svg>
              <h1 className="text-2xl font-bold tracking-tight text-white">Robots.txt generator</h1>
            </div>
            <p className="text-xs text-zinc-400">
              Baue deine robots.txt Schritt für Schritt. Verwende Presets oder bearbeite die Directives manuell.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 p-1 rounded-lg bg-zinc-950 border border-zinc-800">
            <button
              onClick={() => setActiveTab("edit")}
              className={`flex-1 py-1.5 px-3 rounded-md text-[11px] font-mono tracking-wide uppercase transition-all ${
                activeTab === "edit"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Rules Builder
            </button>
            <button
              onClick={() => setActiveTab("tester")}
              className={`flex-1 py-1.5 px-3 rounded-md text-[11px] font-mono tracking-wide uppercase transition-all ${
                activeTab === "tester"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Path Validator
            </button>
            <button
              onClick={() => setActiveTab("import")}
              className={`flex-1 py-1.5 px-3 rounded-md text-[11px] font-mono tracking-wide uppercase transition-all ${
                activeTab === "import"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Import Raw
            </button>
          </div>

          {/* Tab Content: Rules Builder */}
          {activeTab === "edit" && (
            <div className="space-y-6 flex-1">
              {/* Presets and Quick Actions */}
              <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 space-y-3">
                <div className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider">
                  Presets & Schnellstart
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <button
                    onClick={() => loadPreset("allowAll")}
                    className="py-1.5 px-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-[10px] font-mono uppercase text-zinc-300 transition-colors"
                  >
                    Allow All
                  </button>
                  <button
                    onClick={() => loadPreset("disallowAll")}
                    className="py-1.5 px-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-[10px] font-mono uppercase text-zinc-300 transition-colors"
                  >
                    Disallow All
                  </button>
                  <button
                    onClick={() => loadPreset("devStaging")}
                    className="py-1.5 px-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-[10px] font-mono uppercase text-zinc-300 transition-colors"
                  >
                    Staging Block
                  </button>
                  <button
                    onClick={() => loadPreset("seoBalanced")}
                    className="py-1.5 px-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-[10px] font-mono uppercase text-zinc-300 transition-colors"
                  >
                    SEO Standard
                  </button>
                </div>
                <div className="pt-2 border-t border-zinc-800/80 flex justify-between items-center text-[10px] text-zinc-500">
                  <span>Bekannte AI-Crawler blockieren?</span>
                  <button
                    onClick={addAiBlocks}
                    className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/20 text-[9px] font-mono uppercase tracking-wider font-bold transition-all focus:ring-1 focus:ring-pink-500"
                  >
                    AI-Crawler aussperren
                  </button>
                </div>
              </div>

              {/* Sitemaps Panel */}
              <div className="space-y-2.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <span>Sitemaps</span>
                  <span className="text-zinc-600">({sitemaps.length})</span>
                </label>
                
                {sitemaps.length > 0 && (
                  <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
                    {sitemaps.map((sitemap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded bg-zinc-950 border border-zinc-800/60"
                      >
                        <span className="text-[11px] text-zinc-300 truncate pr-4 font-mono">{sitemap}</span>
                        <button
                          onClick={() => removeSitemap(idx)}
                          className="text-zinc-600 hover:text-red-400 p-0.5 rounded transition-colors"
                          title="Remove sitemap"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={addSitemap} className="flex gap-2">
                  <input
                    type="text"
                    value={newSitemap}
                    onChange={(e) => setNewSitemap(e.target.value)}
                    placeholder="https://example.com/sitemap.xml"
                    className="flex-1 min-w-0 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-3 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-pink-500/50 font-mono transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[10px] uppercase tracking-wide px-3.5 rounded-lg border border-zinc-700/50 transition-colors"
                  >
                    Add
                  </button>
                </form>
              </div>

              {/* User Agent Rule Groups */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <span>User-agent Rules</span>
                    <span className="text-zinc-600">({groups.length})</span>
                  </label>
                  <button
                    onClick={() => addGroup("*")}
                    className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[10px] font-mono uppercase tracking-wide border border-zinc-700/50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Group
                  </button>
                </div>

                <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                  {groups.map((group) => (
                    <div
                      key={group.id}
                      className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-800 space-y-3.5 shadow-inner"
                    >
                      {/* Group Header Controls */}
                      <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center justify-between">
                        <div className="flex flex-1 gap-2 w-full max-w-sm">
                          <input
                            type="text"
                            value={group.userAgent}
                            onChange={(e) => updateGroupUserAgent(group.id, e.target.value)}
                            placeholder="User-Agent (e.g. * or Googlebot)"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-3 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-pink-500/50 font-mono transition-colors"
                          />
                          <select
                            onChange={(e) => {
                              if (e.target.value) {
                                updateGroupUserAgent(group.id, e.target.value);
                                e.target.value = "";
                              }
                            }}
                            className="bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-2 text-xs text-zinc-500 focus:outline-none cursor-pointer font-mono"
                          >
                            <option value="">Bot...</option>
                            {COMMON_BOTS.map((bot) => (
                              <option key={bot.value} value={bot.value}>
                                {bot.value}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Crawl Delay */}
                        <div className="flex items-center gap-2 w-full sm:w-auto font-mono text-[10px]">
                          <label className="text-zinc-500 uppercase">Crawl Delay:</label>
                          <input
                            type="number"
                            min="0"
                            placeholder="sec"
                            value={group.crawlDelay !== undefined ? group.crawlDelay : ""}
                            onChange={(e) => updateGroupCrawlDelay(group.id, e.target.value)}
                            className="w-14 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-2 text-xs text-zinc-100 placeholder-zinc-800 text-center focus:outline-none focus:border-pink-500/50"
                          />
                          
                          <button
                            onClick={() => removeGroup(group.id)}
                            className="text-zinc-600 hover:text-red-400 hover:bg-red-500/5 p-1.5 rounded-lg border border-transparent hover:border-red-500/10 ml-auto sm:ml-0"
                            title="Delete this group"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Directives list */}
                      <div className="space-y-2 border-t border-zinc-800/60 pt-3">
                        {group.rules.length === 0 ? (
                          <div className="text-center py-3 font-mono text-[10px] text-zinc-600">
                            No rules added.
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            {group.rules.map((rule) => (
                              <div key={rule.id} className="flex gap-2 items-center">
                                <select
                                  value={rule.type}
                                  onChange={(e) => {
                                    updateRule(group.id, rule.id, { type: e.target.value as any });
                                  }}
                                  className="bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-2.5 text-xs text-zinc-400 focus:outline-none focus:border-pink-500/50 font-mono cursor-pointer"
                                >
                                  <option value="Disallow">Disallow</option>
                                  <option value="Allow">Allow</option>
                                </select>

                                <input
                                  type="text"
                                  value={rule.pattern}
                                  onChange={(e) => updateRule(group.id, rule.id, { pattern: e.target.value })}
                                  placeholder="Path (e.g. /admin/)"
                                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-3 text-xs text-zinc-100 placeholder-zinc-800 focus:outline-none focus:border-pink-500/50 font-mono transition-colors"
                                />

                                <button
                                  onClick={() => removeRule(group.id, rule.id)}
                                  className="text-zinc-600 hover:text-red-400 p-1"
                                  title="Remove rule"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => addRule(group.id)}
                          className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 hover:text-white py-1 px-2 rounded hover:bg-zinc-900 transition-colors mt-2"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          Add Rule Row
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Path Validator */}
          {activeTab === "tester" && (
            <div className="space-y-6 flex-1">
              <div className="flex flex-col space-y-1">
                <h3 className="text-sm font-semibold text-zinc-300">Crawl Rules testing unit</h3>
                <p className="text-[11px] text-zinc-500">
                  Verify how your robots.txt file processes request directives against search engine crawlers.
                </p>
              </div>

              {/* Form Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-950/40 p-4 rounded-xl border border-zinc-800">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Test User-Agent</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={testUserAgent}
                      onChange={(e) => setTestUserAgent(e.target.value)}
                      placeholder="Googlebot"
                      className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-3 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-pink-500/50 font-mono transition-colors"
                    />
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setTestUserAgent(e.target.value);
                          e.target.value = "";
                        }
                      }}
                      className="bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-2 text-xs text-zinc-500 focus:outline-none font-mono cursor-pointer"
                    >
                      <option value="">Bot...</option>
                      {COMMON_BOTS.map((bot) => (
                        <option key={bot.value} value={bot.value}>
                          {bot.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Test Path URL</label>
                  <input
                    type="text"
                    value={testPath}
                    onChange={(e) => setTestPath(e.target.value)}
                    placeholder="/admin/dashboard"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 px-3 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-pink-500/50 font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Verdict status box */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-zinc-900 pb-2">
                  <span>Verdict Status</span>
                  {testPathRules.isFallback && (
                    <span className="text-zinc-700 font-semibold">Fallback * matched</span>
                  )}
                </div>
                <div className="font-mono text-xs text-zinc-300 leading-relaxed pt-1">
                  {testPathRules.allowed ? (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span>Access <strong className="text-green-400">ALLOWED</strong>. {testPathRules.reason}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>Access <strong className="text-red-400">BLOCKED</strong>. {testPathRules.reason}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Import */}
          {activeTab === "import" && (
            <div className="space-y-6 flex-1">
              <div className="flex flex-col space-y-1">
                <h3 className="text-sm font-semibold text-zinc-300">Parse & Import file</h3>
                <p className="text-[11px] text-zinc-500">
                  Paste the contents of your existing robots.txt file to parse its sitemaps and user-agent rules automatically.
                </p>
              </div>

              <div className="space-y-3">
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder={`# Paste existing robots.txt file...
User-agent: *
Disallow: /admin/
Allow: /

Sitemap: https://example.com/sitemap.xml`}
                  rows={8}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs font-mono text-zinc-200 placeholder-zinc-800 focus:outline-none focus:border-pink-500/50"
                />
                
                {importError && (
                  <div className="p-3 bg-red-950/20 border border-red-500/20 text-red-400 rounded-lg text-xs font-mono">
                    {importError}
                  </div>
                )}

                <button
                  onClick={handleImport}
                  className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/50 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                >
                  Compile & Load Import
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Generated Output & File Preview (5 Cols) */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-zinc-950/10 flex flex-col space-y-6">
          <div className="flex flex-col space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">Live Preview</h2>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Deine robots.txt entsteht live mit. Was rechts steht, kannst du direkt kopieren oder als Datei herunterladen.
            </p>
          </div>

          {/* Installer Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={copyInstallPrompt}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border text-[10px] font-mono uppercase tracking-wide transition-all shadow-sm ${
                promptCopied
                  ? "bg-pink-500/10 border-pink-500/20 text-pink-400"
                  : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {promptCopied ? "Copied!" : "Copy Prompt"}
            </button>
            <button
              onClick={() => setShowManualModal(true)}
              className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono uppercase tracking-wide text-zinc-300 transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Manual Install
            </button>
          </div>

          {/* Generated Code Area */}
          <div className="relative flex-1 flex flex-col min-h-[300px]">
            {/* Topbar of Code view */}
            <div className="bg-zinc-950 border border-zinc-800 border-b-0 rounded-t-xl py-2 px-4 flex items-center justify-between text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase">
              <span>robots.txt</span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              </div>
            </div>
            
            <textarea
              readOnly
              value={generatedRobotsTxt}
              className="w-full flex-1 bg-zinc-950/80 border border-zinc-800 rounded-b-xl p-4 font-mono text-[11px] text-zinc-300 outline-none resize-none leading-relaxed focus:ring-0 focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm ${
                copied
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Rules
                </>
              )}
            </button>
            <button
              onClick={downloadRobotsTxt}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-pink-600 hover:bg-pink-500 text-white border-t border-pink-400/20 text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-md"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              robots.txt herunterladen
            </button>
          </div>

        </div>

      </div>

      {/* Manual Install Modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 md:p-8 space-y-6 shadow-2xl relative text-zinc-100">
            <button
              onClick={() => setShowManualModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              <h3 className="text-base font-bold text-white">Manual Installation</h3>
            </div>
            
            <div className="space-y-4 text-[11px] text-zinc-300 leading-relaxed">
              <div className="space-y-1">
                <span className="font-semibold text-zinc-100 block">Step 1: Create Component File</span>
                <p className="text-zinc-400">Create a file at <code className="font-mono text-pink-400">components/RobotsTxtGenerator.tsx</code> in your project root.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-zinc-100 block">Step 2: Copy implementation code</span>
                <p className="text-zinc-400">Click the copy button in the Live Preview area of this tool to get the component code, then paste it inside the file.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-zinc-100 block">Step 3: Tailwind Setup</span>
                <p className="text-zinc-400">Make sure your app has Tailwind CSS configured. The component styling is inline and responsive.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-zinc-100 block">Step 4: Use the Component</span>
                <p className="text-zinc-400">Import and render it in any layout, page, or admin dashboard:</p>
                <pre className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 text-[10px] font-mono text-zinc-400 overflow-x-auto">
{`import RobotsTxtGenerator from "@/components/RobotsTxtGenerator";

export default function Page() {
  return <RobotsTxtGenerator />;
}`}
                </pre>
              </div>
            </div>
            
            <button
              onClick={() => setShowManualModal(false)}
              className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs border border-zinc-700/50 transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
