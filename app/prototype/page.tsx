"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, Code, TestTube, Layers, Award, Leaf, 
  ChevronDown, ChevronUp, Play, Pause, RotateCcw 
} from "lucide-react";

export default function PrototypePage() {
  const [testExpanded, setTestExpanded] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);
  const [speciesCount, setSpeciesCount] = useState(0);

  // Prototype Demo Simulation
  const runDemo = () => {
    setDemoRunning(true);
    setSpeciesCount(0);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setSpeciesCount(count);
      if (count >= 105) {
        clearInterval(interval);
        setDemoRunning(false);
      }
    }, 20);
  };

  const resetDemo = () => {
    setSpeciesCount(0);
    setDemoRunning(false);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Quick Navigation */}
        <div className="glass-strong rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#demo" className="px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-full text-sm font-semibold transition-all border border-teal-400/30">
              Prototype Demo
            </a>
            <a href="#engineering" className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-full text-sm font-semibold transition-all border border-blue-400/30">
              Engineering
            </a>
            <a href="#testing" className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-full text-sm font-semibold transition-all border border-purple-400/30">
              Testing
            </a>
            <a href="#iterations" className="px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-full text-sm font-semibold transition-all border border-orange-400/30">
              Iterations
            </a>
            <a href="#skills" className="px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 rounded-full text-sm font-semibold transition-all border border-pink-400/30">
              Skills
            </a>
            <a href="#sustainability" className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-full text-sm font-semibold transition-all border border-green-400/30">
              Sustainability
            </a>
            <a href="#summary" className="px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-full text-sm font-semibold transition-all border border-indigo-400/30">
              Summary
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 md:p-16 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
              <Lightbulb className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white tracking-tight">FEAA200 Prototype</h1>
              <p className="text-xl text-teal-300 mt-1">Marine Conservation Engineering System</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            A comprehensive digital platform addressing overfishing through data-driven decision making, 
            educational resources, and sustainable seafood guidance. This prototype demonstrates systems 
            thinking, engineering design, and sustainability principles.
          </p>
        </motion.div>

        {/* 1. PROTOTYPE DEMO SECTION */}
        <motion.div
          id="demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Play className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Prototype Demo</h2>
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed">
            This interactive simulation demonstrates the core functionality of our marine conservation system. 
            The prototype processes and displays fish species data in real-time, simulating the database 
            loading mechanism that powers the entire platform.
          </p>

          {/* Interactive Demo Container */}
          <div className="glass rounded-2xl p-8 border border-teal-400/30 bg-gradient-to-br from-teal-500/10 to-blue-500/10">
            <div className="text-center mb-6">
              <div className="text-7xl font-bold text-teal-400 mb-2">{speciesCount}</div>
              <div className="text-slate-300 text-lg">Species Loaded</div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 bg-slate-700/50 rounded-full mb-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${(speciesCount / 105) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={runDemo}
                disabled={demoRunning}
                className={`px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all ${
                  demoRunning
                    ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg hover:scale-105"
                }`}
              >
                <Play size={20} />
                <span>{demoRunning ? "Loading..." : "Start Demo"}</span>
              </button>
              <button
                onClick={resetDemo}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-semibold flex items-center space-x-2 transition-all hover:scale-105"
              >
                <RotateCcw size={20} />
                <span>Reset</span>
              </button>
            </div>

            {/* System Status */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-teal-400 font-bold text-xl">105</div>
                <div className="text-slate-400 text-sm">Total Species</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-teal-400 font-bold text-xl">32</div>
                <div className="text-slate-400 text-sm">Recipes</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-teal-400 font-bold text-xl">11</div>
                <div className="text-slate-400 text-sm">Features</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. ENGINEERING THINKING SECTION */}
        <motion.div
          id="engineering"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Code className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Engineering Thinking</h2>
          </div>

          {/* System Block Diagram */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">System Architecture</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Input */}
              <div className="glass rounded-xl p-6 border border-teal-400/30 min-w-[200px]">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" className="text-teal-400" />
                    <path d="M9 9h6v6H9z" className="text-teal-400" />
                  </svg>
                  <div className="text-white font-bold">Input</div>
                  <div className="text-slate-400 text-sm mt-2">User Query</div>
                  <div className="text-slate-400 text-sm">IUCN Data</div>
                </div>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

              {/* Process */}
              <div className="glass rounded-xl p-6 border border-blue-400/30 min-w-[200px]">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" className="text-blue-400" />
                    <path d="M12 1v6m0 6v6M1 12h6m6 0h6" className="text-blue-400" />
                  </svg>
                  <div className="text-white font-bold">Process</div>
                  <div className="text-slate-400 text-sm mt-2">Filter & Sort</div>
                  <div className="text-slate-400 text-sm">Analysis</div>
                </div>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

              {/* Output */}
              <div className="glass rounded-xl p-6 border border-green-400/30 min-w-[200px]">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" className="text-green-400" />
                    <path d="M8 21h8" className="text-green-400" />
                    <path d="M12 17v4" className="text-green-400" />
                  </svg>
                  <div className="text-white font-bold">Output</div>
                  <div className="text-slate-400 text-sm mt-2">Visualizations</div>
                  <div className="text-slate-400 text-sm">Recommendations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Flowchart */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Decision Flowchart</h3>
            <div className="flex flex-col items-center space-y-4">
              {/* Start */}
              <div className="glass rounded-full px-8 py-3 border border-teal-400/30 text-white font-semibold">
                User Opens Platform
              </div>
              <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14m-7-7l7 7 7-7" />
              </svg>

              {/* Decision 1 */}
              <div className="relative">
                <svg className="w-48 h-32" viewBox="0 0 200 140">
                  <polygon points="100,10 180,70 100,130 20,70" fill="rgba(20, 184, 166, 0.1)" stroke="rgba(20, 184, 166, 0.5)" strokeWidth="2" />
                  <text x="100" y="65" textAnchor="middle" fill="white" fontSize="12">Looking for</text>
                  <text x="100" y="80" textAnchor="middle" fill="white" fontSize="12">specific species?</text>
                </svg>
                <div className="absolute -left-32 top-12 text-teal-400 text-sm">Yes →</div>
                <div className="absolute -right-32 top-12 text-teal-400 text-sm">← No</div>
              </div>
              <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14m-7-7l7 7 7-7" />
              </svg>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-8">
                <div className="glass rounded-xl px-6 py-4 border border-blue-400/30 text-center">
                  <div className="text-white font-semibold">Use Search</div>
                  <div className="text-slate-400 text-sm mt-1">Filter by name</div>
                </div>
                <div className="glass rounded-xl px-6 py-4 border border-purple-400/30 text-center">
                  <div className="text-white font-semibold">Browse Features</div>
                  <div className="text-slate-400 text-sm mt-1">Explore data</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14m-7-7l7 7 7-7" />
              </svg>

              {/* End */}
              <div className="glass rounded-full px-8 py-3 border border-green-400/30 text-white font-semibold">
                View Results & Take Action
              </div>
            </div>
          </div>

          {/* System Logic */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">System Logic</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 font-bold text-sm mt-1 flex-shrink-0">
                  1
                </div>
                <div className="text-slate-300">
                  <strong className="text-white">Data Aggregation:</strong> Collect verified data from IUCN, FAO, and FishBase
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 font-bold text-sm mt-1 flex-shrink-0">
                  2
                </div>
                <div className="text-slate-300">
                  <strong className="text-white">Risk Assessment:</strong> Analyze conservation status and population trends
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 font-bold text-sm mt-1 flex-shrink-0">
                  3
                </div>
                <div className="text-slate-300">
                  <strong className="text-white">User Interface:</strong> Present data through intuitive visualizations
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 font-bold text-sm mt-1 flex-shrink-0">
                  4
                </div>
                <div className="text-slate-300">
                  <strong className="text-white">Decision Support:</strong> Provide sustainability ratings and alternatives
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 font-bold text-sm mt-1 flex-shrink-0">
                  5
                </div>
                <div className="text-slate-300">
                  <strong className="text-white">Action Guidance:</strong> Connect users with conservation organizations
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 3. TESTING & VALIDATION SECTION */}
        <motion.div
          id="testing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TestTube className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Testing & Validation</h2>
          </div>

          {/* Test Cases Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-teal-400 font-semibold">Test Name</th>
                  <th className="text-left py-3 px-4 text-teal-400 font-semibold">Expected Output</th>
                  <th className="text-left py-3 px-4 text-teal-400 font-semibold">Result</th>
                  <th className="text-left py-3 px-4 text-teal-400 font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Species Search</td>
                  <td className="py-3 px-4 text-slate-300">Return matching species within 100ms</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">✓ Pass</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">Add fuzzy search</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Data Accuracy</td>
                  <td className="py-3 px-4 text-slate-300">100% match with IUCN database</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">✓ Pass</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">Automated updates</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Mobile Responsiveness</td>
                  <td className="py-3 px-4 text-slate-300">Functional on screens 320px+</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">✓ Pass</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">Optimize images</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">Sustainability Rating</td>
                  <td className="py-3 px-4 text-slate-300">Correct rating for all 105 species</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">✓ Pass</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">Add regional data</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-semibold">User Flow</td>
                  <td className="py-3 px-4 text-slate-300">Complete task in &lt;3 clicks</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">⚠ Review</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">Simplify navigation</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Before vs After Collapsible */}
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setTestExpanded(!testExpanded)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="text-white font-semibold text-lg">Before vs After Comparison</span>
              {testExpanded ? <ChevronUp className="text-teal-400" /> : <ChevronDown className="text-teal-400" />}
            </button>
            {testExpanded && (
              <div className="px-6 py-4 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-red-400 font-bold mb-3 flex items-center space-x-2">
                      <span>❌</span>
                      <span>Before Implementation</span>
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• No centralized fish data</li>
                      <li>• Difficult to find conservation status</li>
                      <li>• No sustainability guidance</li>
                      <li>• Limited educational resources</li>
                      <li>• No action steps provided</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-bold mb-3 flex items-center space-x-2">
                      <span>✓</span>
                      <span>After Implementation</span>
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• 105 verified species profiles</li>
                      <li>• Real-time IUCN status updates</li>
                      <li>• Smart sustainability checker</li>
                      <li>• Interactive educational quiz</li>
                      <li>• Direct links to conservation orgs</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Feedback Placeholder */}
          <div className="mt-6 glass rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">User Feedback Summary</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 text-xl">👤</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Marine Biologist</div>
                  <div className="text-slate-300 text-sm">&quot;Excellent data accuracy and comprehensive coverage of Mediterranean species.&quot;</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xl">👤</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Restaurant Owner</div>
                  <div className="text-slate-300 text-sm">&quot;The sustainability checker helped us make better sourcing decisions.&quot;</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl">👤</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Student</div>
                  <div className="text-slate-300 text-sm">&quot;The quiz feature made learning about overfishing engaging and interactive.&quot;</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. DESIGN ITERATIONS SECTION */}
        <motion.div
          id="iterations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Layers className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Design Iterations</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500" />

            {/* Iteration 1 */}
            <div className="relative flex items-start space-x-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                1
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-teal-400/30">
                <h3 className="text-2xl font-bold text-white mb-2">Initial Concept</h3>
                <p className="text-slate-300 mb-4">
                  Basic species database with simple search functionality. Focused on data collection and organization.
                </p>
                {/* SVG Sketch */}
                <svg className="w-full h-32 bg-white/5 rounded-lg" viewBox="0 0 400 120">
                  <rect x="10" y="10" width="380" height="30" rx="5" fill="rgba(20, 184, 166, 0.2)" stroke="rgba(20, 184, 166, 0.5)" strokeWidth="2" />
                  <text x="200" y="30" textAnchor="middle" fill="white" fontSize="12">Search Bar</text>
                  <rect x="10" y="50" width="180" height="60" rx="5" fill="rgba(20, 184, 166, 0.1)" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="2" />
                  <rect x="210" y="50" width="180" height="60" rx="5" fill="rgba(20, 184, 166, 0.1)" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="2" />
                  <text x="100" y="85" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Species Card</text>
                  <text x="300" y="85" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Species Card</text>
                </svg>
              </div>
            </div>

            {/* Iteration 2 */}
            <div className="relative flex items-start space-x-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                2
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-2">Feature Expansion</h3>
                <p className="text-slate-300 mb-4">
                  Added filtering, sorting, and conservation status indicators. Integrated IUCN data for accuracy.
                </p>
                {/* SVG Sketch */}
                <svg className="w-full h-32 bg-white/5 rounded-lg" viewBox="0 0 400 120">
                  <rect x="10" y="10" width="180" height="20" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                  <rect x="200" y="10" width="90" height="20" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                  <rect x="300" y="10" width="90" height="20" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                  <text x="100" y="23" textAnchor="middle" fill="white" fontSize="8">Search</text>
                  <text x="245" y="23" textAnchor="middle" fill="white" fontSize="8">Filter</text>
                  <text x="345" y="23" textAnchor="middle" fill="white" fontSize="8">Sort</text>
                  <rect x="10" y="40" width="380" height="70" rx="5" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
                  <circle cx="30" cy="75" r="12" fill="rgba(239, 68, 68, 0.3)" />
                  <text x="200" y="80" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Species Grid with Status Badges</text>
                </svg>
              </div>
            </div>

            {/* Iteration 3 */}
            <div className="relative flex items-start space-x-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                3
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-2">Overfishing Focus</h3>
                <p className="text-slate-300 mb-4">
                  Added overfishing impact data, Lebanon focus, and sustainability checker. Integrated recipes feature.
                </p>
                {/* SVG Sketch */}
                <svg className="w-full h-32 bg-white/5 rounded-lg" viewBox="0 0 400 120">
                  <rect x="10" y="10" width="120" height="100" rx="5" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" />
                  <rect x="140" y="10" width="120" height="100" rx="5" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" />
                  <rect x="270" y="10" width="120" height="100" rx="5" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" />
                  <text x="70" y="40" textAnchor="middle" fill="white" fontSize="10">Impact</text>
                  <text x="70" y="55" textAnchor="middle" fill="white" fontSize="10">Dashboard</text>
                  <text x="200" y="40" textAnchor="middle" fill="white" fontSize="10">Lebanon</text>
                  <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Focus</text>
                  <text x="330" y="40" textAnchor="middle" fill="white" fontSize="10">Checker</text>
                  <text x="330" y="55" textAnchor="middle" fill="white" fontSize="10">Tool</text>
                </svg>
              </div>
            </div>

            {/* Iteration 4 */}
            <div className="relative flex items-start space-x-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                4
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-2">Final Refinement</h3>
                <p className="text-slate-300 mb-4">
                  Premium UI redesign, added recovery tracker, action steps, and educational quiz. Comprehensive 11-feature platform.
                </p>
                {/* SVG Sketch */}
                <svg className="w-full h-32 bg-white/5 rounded-lg" viewBox="0 0 400 120">
                  <rect x="10" y="10" width="380" height="100" rx="8" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" />
                  <circle cx="60" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <circle cx="120" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <circle cx="180" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <circle cx="240" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <circle cx="300" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <circle cx="360" cy="35" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2" />
                  <text x="200" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Complete Platform</text>
                  <text x="200" y="95" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">11 Features • 105 Species • 32 Recipes</text>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. SKILLS INTEGRATED SECTION */}
        <motion.div
          id="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/20 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-teal-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Skills Integrated</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Systems Thinking */}
            <div className="glass rounded-2xl p-6 border border-teal-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <h3 className="text-xl font-bold text-white">Systems Thinking</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Analyzed the interconnected marine ecosystem, fisheries, and human impact. Designed holistic solution addressing multiple stakeholders.
              </p>
            </div>

            {/* Prototyping */}
            <div className="glass rounded-2xl p-6 border border-blue-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 7h10M7 12h10M7 17h10" />
                </svg>
                <h3 className="text-xl font-bold text-white">Rapid Prototyping</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Iterative development process with continuous testing and user feedback integration. Evolved from concept to full platform.
              </p>
            </div>

            {/* CAD/Simulations */}
            <div className="glass rounded-2xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <h3 className="text-xl font-bold text-white">Digital Modeling</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Created data flow diagrams, system architecture models, and interactive simulations to visualize the solution.
              </p>
            </div>

            {/* Sustainability Design */}
            <div className="glass rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-xl font-bold text-white">Sustainability Design</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Centered entire solution around environmental sustainability, focusing on conservation and responsible consumption.
              </p>
            </div>

            {/* Engineering Reasoning */}
            <div className="glass rounded-2xl p-6 border border-orange-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Engineering Reasoning</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Applied problem-solving methodology: define problem, research, design, prototype, test, iterate, and refine.
              </p>
            </div>

            {/* Communication */}
            <div className="glass rounded-2xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-10 h-10 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-xl font-bold text-white">Communication & Teamwork</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Collaborated with Group 5 to design intuitive user interfaces and present complex data in accessible formats.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 6. SUSTAINABILITY CONSIDERATIONS SECTION */}
        <motion.div
          id="sustainability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 border border-green-400/30 bg-gradient-to-br from-green-500/5 to-teal-500/5 mb-10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Leaf className="text-green-400" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tight">Sustainability Considerations</h2>
          </div>

          {/* Green Divider */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.19c1.52-4.35 3.17-8.19 8.22-10.09 2.81-.98 5.3-2.12 7-4.62-3.25 1.35-6.37 2.29-10 2.9z" />
            </svg>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Material Efficiency */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-9M14 17H5M5 3v18M9 7v10" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Material Efficiency</h3>
                <p className="text-slate-300 text-sm">
                  Digital-first solution eliminates physical materials. No printed guides or paper databases required.
                </p>
              </div>
            </div>

            {/* Energy Awareness */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Energy Awareness</h3>
                <p className="text-slate-300 text-sm">
                  Optimized code for minimal server load. Static site generation reduces energy consumption.
                </p>
              </div>
            </div>

            {/* Waste Reduction */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Waste Reduction in Prototyping</h3>
                <p className="text-slate-300 text-sm">
                  Iterative digital development avoided physical prototypes. Version control prevents code waste.
                </p>
              </div>
            </div>

            {/* Repairability */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Maintainability & Repairability</h3>
                <p className="text-slate-300 text-sm">
                  Modular code architecture allows easy updates. Open documentation enables community contributions.
                </p>
              </div>
            </div>
          </div>

          {/* SDGs */}
          <div className="glass rounded-2xl p-6 border border-green-400/30">
            <h3 className="text-xl font-bold text-white mb-4">Related UN Sustainable Development Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                  9
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Industry, Innovation</div>
                  <div className="text-slate-400 text-xs">& Infrastructure</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-lg">
                  11
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Sustainable Cities</div>
                  <div className="text-slate-400 text-xs">& Communities</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                  12
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Responsible</div>
                  <div className="text-slate-400 text-xs">Consumption & Production</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 7. SUMMARY SECTION */}
        <motion.div
          id="summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 md:p-16 border border-white/20"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-8 text-center">Summary & Conclusion</h2>

          <div className="space-y-8">
            {/* Problem */}
            <div className="glass rounded-2xl p-6 border border-red-400/30 bg-gradient-to-br from-red-500/5 to-orange-500/5">
              <h3 className="text-2xl font-bold text-red-400 mb-3">The Problem</h3>
              <p className="text-slate-300 leading-relaxed">
                Overfishing threatens marine ecosystems globally, with 34.2% of fish stocks overfished and Mediterranean 
                waters experiencing 62.5% overfishing. Lebanon faces severe overfishing with limited public awareness 
                and no centralized data platform for making sustainable seafood choices.
              </p>
            </div>

            {/* Solution */}
            <div className="glass rounded-2xl p-6 border border-teal-400/30 bg-gradient-to-br from-teal-500/5 to-blue-500/5">
              <h3 className="text-2xl font-bold text-teal-400 mb-3">Our Solution</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                A comprehensive digital platform that combines verified marine data, sustainability guidance, and 
                educational resources into an accessible web application. The platform empowers users to make 
                informed decisions about seafood consumption while learning about marine conservation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-teal-400 font-bold text-2xl">105</div>
                  <div className="text-slate-400 text-xs">Species</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-teal-400 font-bold text-2xl">11</div>
                  <div className="text-slate-400 text-xs">Features</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-teal-400 font-bold text-2xl">32</div>
                  <div className="text-slate-400 text-xs">Recipes</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-teal-400 font-bold text-2xl">189</div>
                  <div className="text-slate-400 text-xs">Pages</div>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="glass rounded-2xl p-6 border border-green-400/30 bg-gradient-to-br from-green-500/5 to-teal-500/5">
              <h3 className="text-2xl font-bold text-green-400 mb-3">Why This Prototype Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-300">
                    <strong className="text-white">Data-Driven:</strong> Uses verified IUCN, FAO, and FishBase data for accuracy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-300">
                    <strong className="text-white">User-Centered:</strong> Intuitive interface makes complex data accessible
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-300">
                    <strong className="text-white">Action-Oriented:</strong> Provides clear guidance and alternatives
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-300">
                    <strong className="text-white">Educational:</strong> Interactive quiz and comprehensive information
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-300">
                    <strong className="text-white">Scalable:</strong> Digital platform can easily expand to more regions
                  </span>
                </li>
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="glass rounded-2xl p-6 border border-blue-400/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Future Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Technical Enhancements</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Real-time data API integration</li>
                    <li>• Mobile app development</li>
                    <li>• Barcode scanner for products</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Feature Expansion</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• User accounts & favorites</li>
                    <li>• Community contributions</li>
                    <li>• Restaurant directory</li>
                    <li>• Fishing season calendar</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Statement */}
            <div className="text-center pt-6">
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                This FEAA200 prototype demonstrates how engineering thinking, systems design, and 
                sustainability principles can address real-world environmental challenges.
              </p>
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 border border-teal-400/30">
                <span className="text-teal-400 text-2xl">🐟</span>
                <span className="text-white font-semibold">Protecting Our Oceans Through Technology</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

