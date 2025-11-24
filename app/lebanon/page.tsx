"use client";

import { motion } from "framer-motion";
import { 
  Fish, AlertTriangle, Shield, TrendingDown, Anchor, 
  Users, Target, Heart, Flag, Waves 
} from "lucide-react";
import lebanonData from "@/data/lebanon-data.json";

export default function LebanonPage() {
  const { overview, crisis, solutions, traditionalVsModern, affectedSpecies, protectedAreas, successStories, takeAction } = lebanonData;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Header with Lebanese Flag Colors */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Flag className="text-red-500 mr-3" size={48} />
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Lebanon&apos;s Marine Crisis
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            {crisis.description}
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300 font-semibold">Data: FAO-GFCM 2023, Lebanese Ministry of Agriculture</span>
          </div>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="glass-strong rounded-2xl p-6 border border-white/20 text-center">
            <Waves className="text-teal-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white mb-1">{overview.coastlineLength}</div>
            <div className="text-sm text-slate-300">Coastline</div>
          </div>
          <div className="glass-strong rounded-2xl p-6 border border-white/20 text-center">
            <Users className="text-teal-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white mb-1">{overview.fishermen.toLocaleString()}</div>
            <div className="text-sm text-slate-300">Fishermen</div>
          </div>
          <div className="glass-strong rounded-2xl p-6 border border-red-500/30 bg-red-500/10 text-center">
            <AlertTriangle className="text-red-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-red-400 mb-1">{overview.overfishingRate}%</div>
            <div className="text-sm text-slate-300">Overfishing Rate</div>
          </div>
          <div className="glass-strong rounded-2xl p-6 border border-red-500/30 bg-red-500/10 text-center">
            <TrendingDown className="text-red-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-red-400 mb-1">{overview.endangeredSpecies}</div>
            <div className="text-sm text-slate-300">Species at Risk</div>
          </div>
        </motion.div>

        {/* Key Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="text-red-400 mr-3" size={32} />
            Key Issues Facing Lebanese Waters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisis.keyIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`glass-strong rounded-2xl p-6 border ${
                  issue.severity === "Critical" 
                    ? "border-red-500/50 bg-red-500/10" 
                    : "border-orange-500/50 bg-orange-500/10"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{issue.issue}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    issue.severity === "Critical"
                      ? "bg-red-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}>
                    {issue.severity}
                  </span>
                </div>
                <p className="text-slate-300 mb-2">{issue.description}</p>
                <p className="text-sm text-slate-400">
                  <strong className="text-red-400">Impact:</strong> {issue.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Affected Species */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Fish className="text-teal-400 mr-3" size={32} />
            Lebanese Species Under Threat
          </h2>
          <div className="space-y-4">
            {affectedSpecies.map((species, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-white/20"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{species.name}</h3>
                    <p className="text-lg text-teal-400 mb-1" dir="rtl">{species.arabicName}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      species.status === "Endangered" 
                        ? "bg-red-500/20 text-red-400 border border-red-500/50"
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/50"
                    }`}>
                      {species.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-400">↓{species.decline}</div>
                    <div className="text-sm text-slate-400">Population Decline</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-500/10 border border-red-400/30 rounded-xl">
                  <p className="text-sm text-slate-400 mb-1"><strong>Primary Threats:</strong></p>
                  <p className="text-red-300">{species.threat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Traditional vs Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Traditional */}
          <div className="glass-strong rounded-3xl p-8 border border-green-500/30 bg-green-500/5">
            <div className="flex items-center mb-4">
              <Anchor className="text-green-400 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-white">Traditional Fishing</h2>
            </div>
            <p className="text-slate-300 mb-4">{traditionalVsModern.traditional.description}</p>
            <div className="space-y-2 mb-4">
              {traditionalVsModern.traditional.methods.map((method, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300 text-sm">{method}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-300 text-sm">
                <strong>Sustainability:</strong> {traditionalVsModern.traditional.sustainability}
              </p>
            </div>
          </div>

          {/* Modern */}
          <div className="glass-strong rounded-3xl p-8 border border-red-500/30 bg-red-500/5">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-400 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-white">Industrial Fishing</h2>
            </div>
            <p className="text-slate-300 mb-4">{traditionalVsModern.modern.description}</p>
            <div className="space-y-2 mb-4">
              {traditionalVsModern.modern.methods.map((method, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300 text-sm">{method}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-300 text-sm">
                <strong>Impact:</strong> {traditionalVsModern.modern.impact}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Protected Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Shield className="text-green-400 mr-3" size={32} />
            Marine Protected Areas in Lebanon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protectedAreas.map((area, index) => (
              <div key={index} className="glass-strong rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-teal-400 text-sm mb-3">{area.location}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-slate-300"><strong>Area:</strong> {area.size}</p>
                  <p className="text-sm text-slate-300"><strong>Est:</strong> {area.established}</p>
                  <p className="text-sm text-slate-300"><strong>Protection:</strong> {area.protection}</p>
                </div>
                <p className="text-sm text-slate-400 mb-2"><strong>Key Species:</strong></p>
                <p className="text-sm text-slate-300 mb-3">{area.species}</p>
                <div className="p-3 bg-green-500/10 border border-green-400/30 rounded-xl">
                  <p className="text-green-300 text-sm"><strong>Success:</strong> {area.success}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="text-teal-400 mr-3" size={32} />
            Path to Recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-strong rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Immediate Actions</h3>
              <ul className="space-y-2">
                {solutions.immediate.map((action, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                    <span className="text-red-400">•</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Short-Term (1-3 years)</h3>
              <ul className="space-y-2">
                {solutions.shortTerm.map((action, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                    <span className="text-orange-400">•</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Long-Term (3-10 years)</h3>
              <ul className="space-y-2">
                {solutions.longTerm.map((action, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                    <span className="text-green-400">•</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        {successStories && successStories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="text-green-400 mr-3" size={32} />
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="glass-strong rounded-2xl p-6 border border-green-500/30 bg-green-500/5">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-slate-300 mb-3">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold">{story.impact}</span>
                    <span className="text-sm text-slate-400">{story.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="glass-strong rounded-3xl p-10 border border-teal-400/50 bg-gradient-to-br from-teal-500/10 to-blue-500/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            What You Can Do to Help Lebanon&apos;s Waters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {takeAction.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-3 glass rounded-xl p-4 border border-white/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400 font-bold">
                  {index + 1}
                </div>
                <span className="text-slate-300">{action}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a 
              href="/action-steps" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Learn More Ways to Help
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

