"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, Target, Clock, CheckCircle, AlertCircle } from "lucide-react";
import recoveryData from "@/data/recovery-data.json";

export default function RecoveryPage() {
  const { successStories, ongoingRecovery, keyFactors, recoveryTimeline } = recoveryData;

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
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-green-400 mr-3" size={48} />
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Species Recovery Tracker
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Hope for our oceans. These success stories prove that with action and patience, 
            even critically depleted fish populations can recover.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300 font-semibold">Data: NOAA, IUCN, IWC, peer-reviewed studies</span>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="text-green-400 mr-3" size={32} />
            Remarkable Success Stories
          </h2>
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-strong rounded-3xl p-8 border border-green-500/30 bg-green-500/5"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                    <p className="text-lg text-slate-300 italic mb-1">{story.scientificName}</p>
                    <p className="text-teal-400">{story.region}</p>
                  </div>
                  <div className="flex space-x-3">
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Before</div>
                      <div className="text-lg font-bold text-red-400">{story.status.before}</div>
                    </div>
                    <TrendingUp className="text-green-400 mt-4" size={32} />
                    <div className="text-left">
                      <div className="text-sm text-slate-400">After</div>
                      <div className="text-lg font-bold text-green-400">{story.status.after}</div>
                    </div>
                  </div>
                </div>

                {/* Population Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="glass rounded-xl p-5 border border-white/10 text-center">
                    <div className="text-sm text-slate-400 mb-1">Lowest Population</div>
                    <div className="text-2xl font-bold text-red-400">
                      {story.populationChange.lowest.toLocaleString()}
                    </div>
                  </div>
                  <div className="glass rounded-xl p-5 border border-green-500/30 bg-green-500/10 text-center">
                    <div className="text-sm text-slate-400 mb-1">Current Population</div>
                    <div className="text-2xl font-bold text-green-400">
                      {story.populationChange.current.toLocaleString()}
                    </div>
                  </div>
                  <div className="glass rounded-xl p-5 border border-white/10 text-center">
                    <div className="text-sm text-slate-400 mb-1">Population Increase</div>
                    <div className="text-2xl font-bold text-teal-400">
                      +{story.populationChange.increase}%
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">Recovery Timeline</span>
                    <span className="text-sm text-green-400 font-semibold">
                      {story.timeToRecovery}
                    </span>
                  </div>
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>{story.timeline.crisis} - Crisis</span>
                    <span>{story.timeline.action} - Action Taken</span>
                    <span>{story.timeline.recovery} - Recovery</span>
                    <span>{story.timeline.stable} - Stable</span>
                  </div>
                </div>

                {/* Actions Taken */}
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-3">Actions That Led to Success:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {story.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start space-x-2 glass rounded-xl p-3 border border-white/10">
                        <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-slate-300">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson */}
                <div className="p-5 bg-teal-500/10 border border-teal-400/30 rounded-xl">
                  <p className="text-teal-300">
                    <strong>Key Lesson:</strong> {story.lessons}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Recovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <AlertCircle className="text-yellow-400 mr-3" size={32} />
            Species Currently in Recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingRecovery.map((species, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-yellow-500/30"
              >
                <h3 className="text-xl font-bold text-white mb-2">{species.name}</h3>
                <p className="text-teal-400 text-sm mb-4">{species.region}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Recovery Progress</span>
                    <span className="text-yellow-400 font-semibold">{species.currentProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-1000"
                      style={{ width: `${species.currentProgress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-2">Expected Full Recovery:</p>
                  <p className="text-lg font-bold text-white">{species.expectedRecovery}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-2">Key Actions:</p>
                  <div className="space-y-1">
                    {species.keyActions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="text-xs text-slate-300">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Success Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="text-teal-400 mr-3" size={32} />
            Key Factors for Successful Recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className={`glass-strong rounded-2xl p-6 border ${
                  factor.importance === "Critical" 
                    ? "border-red-500/30 bg-red-500/5" 
                    : "border-teal-500/30"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{factor.factor}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    factor.importance === "Critical"
                      ? "bg-red-500/20 text-red-400 border border-red-500/50"
                      : factor.importance === "High"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/50"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                  }`}>
                    {factor.importance}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recovery Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-strong rounded-3xl p-8 border border-white/20 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Clock className="text-teal-400 mr-3" size={28} />
            How Long Does Recovery Take?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5-10 years</div>
              <div className="text-slate-300 mb-2">Short-lived Species</div>
              <p className="text-sm text-slate-400">Sardines, Anchovies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10-20 years</div>
              <div className="text-slate-300 mb-2">Medium-lived Species</div>
              <p className="text-sm text-slate-400">Herring, Mackerel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">20-50 years</div>
              <div className="text-slate-300 mb-2">Long-lived Species</div>
              <p className="text-sm text-slate-400">Tuna, Grouper, Halibut</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="glass-strong rounded-3xl p-10 border border-green-500/50 bg-gradient-to-br from-green-500/10 to-teal-500/10 text-center"
        >
          <Heart className="text-green-400 mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">
            Recovery is Possible
          </h2>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            These success stories prove that our actions matter. With commitment, cooperation, and patience, 
            we can restore our oceans to health. The question is: will we act in time?
          </p>
          <a 
            href="/action-steps" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
          >
            Take Action Now
          </a>
        </motion.div>
      </div>
    </div>
  );
}

