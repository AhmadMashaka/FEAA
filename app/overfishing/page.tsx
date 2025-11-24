"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, AlertTriangle, DollarSign, Users, Fish, Shield, Target } from "lucide-react";
import overfishingData from "@/data/overfishing-stats.json";

export default function OverfishingPage() {
  const { globalStats, trends, impactAreas, solutions } = overfishingData;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Overfishing Impact Dashboard
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Understanding the global crisis of overfishing and its impact on marine ecosystems, 
            economies, and communities worldwide
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300 font-semibold">Data: FAO SOFIA 2022, World Bank 2017</span>
          </div>
        </motion.div>

        {/* Critical Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="glass-strong rounded-2xl p-6 border border-red-500/30">
            <div className="flex items-center justify-between mb-3">
              <AlertTriangle className="text-red-400" size={32} />
              <TrendingUp className="text-red-400" size={24} />
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">
              {globalStats.overfishedStocks}%
            </div>
            <div className="text-sm text-slate-300">
              Overfished Stocks Globally
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-orange-500/30">
            <div className="flex items-center justify-between mb-3">
              <Fish className="text-orange-400" size={32} />
              <TrendingDown className="text-red-400" size={24} />
            </div>
            <div className="text-4xl font-bold text-orange-400 mb-2">
              {globalStats.speciesAtRisk}+
            </div>
            <div className="text-sm text-slate-300">
              Commercial Species Endangered
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-yellow-500/30">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="text-yellow-400" size={32} />
              <TrendingDown className="text-red-400" size={24} />
            </div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              ${(globalStats.economicLoss / 1000000000).toFixed(0)}B
            </div>
            <div className="text-sm text-slate-300">
              Annual Economic Loss
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-red-500/30 bg-red-500/10">
            <div className="flex items-center justify-between mb-3">
              <Target className="text-red-400" size={32} />
              <AlertTriangle className="text-red-400" size={24} />
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">
              {globalStats.mediterraneanOverfishing}%
            </div>
            <div className="text-sm text-slate-300">
              Mediterranean Overfishing Rate
            </div>
          </div>
        </motion.div>

        {/* Trend Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 border border-white/20 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <TrendingDown className="text-red-400 mr-3" size={32} />
            Global Overfishing Trends (2000-2023)
          </h2>
          <div className="space-y-4">
            {trends.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{item.year}</span>
                  <span className="text-red-400 font-bold">{item.overfished}% Overfished</span>
                </div>
                <div className="w-full h-8 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.overfished}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-300 text-sm">
              <strong>⚠️ Critical Trend:</strong> Overfished stocks have increased by {(trends[trends.length - 1].overfished - trends[0].overfished).toFixed(1)}% 
              in just {trends[trends.length - 1].year - trends[0].year} years, threatening global food security.
            </p>
          </div>
        </motion.div>

        {/* Impact Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Global Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-white/20 hover:border-teal-400/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  {area.trend === "increasing" ? (
                    <TrendingUp className="text-red-400" size={20} />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  )}
                </div>
                <div className="text-3xl font-bold text-teal-400 mb-3">
                  {area.value}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Implemented Solutions */}
          <div className="glass-strong rounded-3xl p-8 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="text-green-400 mr-3" size={28} />
              Solutions in Place
            </h2>
            <div className="space-y-4">
              {solutions.implemented.map((solution, index) => (
                <div key={index} className="glass rounded-xl p-5 border border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{solution.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      solution.effectiveness === "High" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                    }`}>
                      {solution.effectiveness} Impact
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-3">{solution.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                        style={{ width: `${solution.coverage}%` }}
                      />
                    </div>
                    <span className="text-sm text-green-400 font-semibold">{solution.coverage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Needed Solutions */}
          <div className="glass-strong rounded-3xl p-8 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="text-orange-400 mr-3" size={28} />
              Solutions Needed
            </h2>
            <ul className="space-y-3">
              {solutions.needed.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3 glass rounded-xl p-4 border border-white/10"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-slate-300 text-sm">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-strong rounded-3xl p-10 border border-teal-400/50 bg-gradient-to-br from-teal-500/10 to-blue-500/10 text-center"
        >
          <Users className="text-teal-400 mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            We Can Make a Difference
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Every choice matters. By choosing sustainable seafood, supporting marine protection, 
            and spreading awareness, we can help restore our oceans for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/action-steps" 
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Take Action Now
            </a>
            <a 
              href="/lebanon" 
              className="px-8 py-3 glass border border-teal-400/50 text-teal-400 font-semibold rounded-xl hover:bg-teal-500/10 transition-all"
            >
              Lebanon Impact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

