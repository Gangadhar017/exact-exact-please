import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CheckCircle2, Sparkles, BarChart3, FileText, Cloud, LineChart, Shield, Download, Upload, Github, BookOpen, Settings2, Wand2 } from "lucide-react";

// --- Demo data (replace with live data) ---
const sentimentBars = [
  { label: "Positive", value: 1200 },
  { label: "Neutral", value: 800 },
  { label: "Negative", value: 450 },
];

const sentimentPie = [
  { name: "Positive", value: 43.8 },
  { name: "Negative", value: 32.7 },
  { name: "Neutral", value: 18.4 },
];

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"]; // Tailwind green-500, red-500, amber-500

const comments = [
  { id: 101, text: "The penalty should be reduced for MSMEs.", sentiment: "Negative", summary: "Seeks lower penalties", stakeholder: "Company" },
  { id: 102, text: "The new compliance system is easy to use.", sentiment: "Positive", summary: "Appreciates new system", stakeholder: "Individual" },
  { id: 103, text: "Need clarity on tax reporting timelines.", sentiment: "Neutral", summary: "Requests clarity on timelines", stakeholder: "CA/CS" },
];

const wordCloud = [
  { w: "Compliance", n: 38 },
  { w: "Penalty", n: 27 },
  { w: "Taxation", n: 23 },
  { w: "Simplify", n: 18 },
  { w: "Reporting", n: 16 },
  { w: "Deadline", n: 14 },
  { w: "Clarity", n: 12 },
  { w: "Ease", n: 10 },
  { w: "Rules", n: 9 },
  { w: "MSME", n: 7 },
];

export default function JanMatLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-md" />
            <div>
              <p className="text-xs tracking-widest text-slate-500">VISION VERSE</p>
              <p className="font-semibold text-slate-900">JanMat · AI Sentiment Intelligence for MCA</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#demo" className="hover:text-indigo-600">Demo</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#report" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white shadow hover:shadow-md"> <Download className="h-4 w-4"/> Sample Report</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              JanMat — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">E‑Consultation Feedback, Summarized</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              AI‑assisted analysis of stakeholder comments on draft legislations. Predict sentiments, generate crisp summaries, and surface the most talked‑about themes — in minutes, not months.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-indigo-600 text-white shadow-md hover:shadow-lg"> <Sparkles className="h-4 w-4"/> Try the Demo</a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-white border border-slate-200 shadow-sm hover:shadow"> <Settings2 className="h-4 w-4"/> How it works</a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-white border border-slate-200 shadow-sm hover:shadow"> <BookOpen className="h-4 w-4"/> Problem Brief</a>
            </div>
            <div className="mt-8 grid grid-cols-3 max-w-lg gap-4">
              {[
                { k: "Total Comments", v: "2,445" },
                { k: "Avg. Review Time", v: "↓ 83%" },
                { k: "Accuracy (pilot)", v: "91%" },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-xs text-slate-500">{m.k}</p>
                  <p className="text-xl font-semibold">{m.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Preview Card */}
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}} className="rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-xl">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 mb-4 text-sm text-slate-600 flex items-center gap-2"><Wand2 className="h-4 w-4"/> Smart summary preview</div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pie */}
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sentimentPie} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                      {sentimentPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-sm mt-2 text-slate-500">Sentiment Split (%)</p>
              </div>
              {/* Bars */}
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentBars}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-sm mt-2 text-slate-500">Comments by Sentiment</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-sm leading-6">
              <p className="font-medium text-slate-800">Collective Summary</p>
              <p className="text-slate-600">
                Most stakeholders support <span className="font-semibold">simplifying compliance</span>. Concerns center on <span className="font-semibold">penalties</span> and clarity in <span className="font-semibold">taxation rules</span> and <span className="font-semibold">reporting timelines</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Problem */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Problem Statement</h2>
            <p className="mt-3 text-slate-600 leading-7">
              The eConsultation module publishes draft legislations and invites comments from stakeholders. When volumes surge, manual review is slow and risks overlooking critical observations. JanMat automates the heavy‑lifting: predicting sentiment for each comment, generating faithful summaries, and surfacing a word cloud of frequently used terms so policy teams can act confidently.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Built by</p>
            <p className="text-lg font-semibold">Vision Verse</p>
            <p className="text-sm mt-1">For the Ministry of Corporate Affairs</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-600"><CheckCircle2 className="h-4 w-4"/> SIH 2025 ready</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white/70 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl font-bold text-slate-900">Why JanMat</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BarChart3, title: "Sentiment at scale", desc: "Classify thousands of comments into Positive / Neutral / Negative with confidence scores." },
              { icon: FileText, title: "Crisp summaries", desc: "One‑line per comment summaries + collective report for quick decision‑making." },
              { icon: Cloud, title: "Word cloud themes", desc: "Auto‑generated word cloud with keyword density and section filters." },
              { icon: Shield, title: "Governance ready", desc: "Audit trails, PII redaction, section‑wise exports and role‑based access." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <f.icon className="h-6 w-6" />
                <p className="mt-3 font-semibold">{f.title}</p>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Dashboard preview with upload */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold">Interactive Dashboard Preview</p>
              <button className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-slate-200 hover:shadow"><Upload className="h-4 w-4"/> Upload CSV</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentBars}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sentimentPie} dataKey="value" nameKey="name" innerRadius={48} outerRadius={78}>
                      {sentimentPie.map((entry, index) => (
                        <Cell key={`pc-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Comments table */}
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 pr-4">ID</th>
                    <th className="py-2 pr-4">Original Comment</th>
                    <th className="py-2 pr-4">Sentiment</th>
                    <th className="py-2 pr-4">Summary</th>
                    <th className="py-2">Stakeholder</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((c) => (
                    <tr key={c.id} className="border-t border-slate-100">
                      <td className="py-2 pr-4 font-mono text-xs">{c.id}</td>
                      <td className="py-2 pr-4 max-w-xs">{c.text}</td>
                      <td className="py-2 pr-4">
                        <span className={`rounded-full px-2 py-0.5 text-xs border ${c.sentiment === "Positive" ? "bg-green-50 text-green-700 border-green-200" : c.sentiment === "Negative" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-amber-50 text-amber-700 border-amber-200"}`}>{c.sentiment}</span>
                      </td>
                      <td className="py-2 pr-4">{c.summary}</td>
                      <td className="py-2">{c.stakeholder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Word cloud card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
            <p className="font-semibold">Word Cloud</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {wordCloud.map((t, i) => (
                <span key={i} style={{ fontSize: `${12 + t.n * 0.6}px` }} className="leading-none whitespace-nowrap rounded-2xl border border-slate-200 px-3 py-1">
                  {t.w}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">Font size indicates frequency.</p>
            {/* Screenshot slot */}
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500">
              Drop your dashboard screenshot here or replace <code>src</code> of the image below.
              <img alt="Dashboard preview" className="mt-3 rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"/>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white/70 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
          <ol className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 list-decimal list-inside">
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              Ingest structured comments from MCA21 portal (CSV/API). PII is detected and masked.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              Fine‑tuned multilingual transformer predicts sentiment with confidence scores.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              Summarizer creates one‑line and section‑wise collective summaries.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              Word cloud + filters reveal high‑density themes; export reports in one click.
            </li>
          </ol>
        </div>
      </section>

      {/* Call to action / Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-1 shadow-xl">
          <div className="rounded-3xl bg-white p-8 md:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Ready to analyse your next consultation round?</h3>
              <p className="mt-2 text-slate-600">Plug in your CSV and get instant insights. Built for speed, accuracy, and clarity.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-slate-900 text-white shadow-md hover:shadow-lg"> <LineChart className="h-4 w-4"/> Launch Demo</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-white border border-slate-200 shadow-sm hover:shadow"> <Github className="h-4 w-4"/> View Code</a>
              </div>
            </div>
            <ul className="grid sm:grid-cols-3 gap-4 text-sm">
              {[
                { k: "Latency", v: "< 500 ms" },
                { k: "Report", v: "PDF/CSV" },
                { k: "Security", v: "RBAC + Logs" },
                { k: "Scale", v: "100k+ comments" },
                { k: "Languages", v: "EN + Indic" },
                { k: "Deploy", v: "Cloud/on‑prem" },
              ].map((m, i) => (
                <li key={i} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                  <p className="text-xs text-slate-500">{m.k}</p>
                  <p className="font-semibold">{m.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500">
        Developed by <span className="font-semibold text-slate-700">Vision Verse</span> · Project <span className="font-semibold text-slate-700">JanMat</span> · SIH 2025
      </footer>
    </div>
  );
}
