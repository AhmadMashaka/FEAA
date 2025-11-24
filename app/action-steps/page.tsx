"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, Users, Share2, Shield, BookOpen, 
  Vote, Heart, Target, CheckCircle, Flag
} from "lucide-react";

export default function ActionStepsPage() {
  const actions = [
    {
      icon: ShoppingCart,
      title: "Make Sustainable Choices",
      difficulty: "Easy",
      impact: "High",
      color: "green",
      steps: [
        "Use the 'Before You Eat' checker before buying seafood",
        "Look for MSC (Marine Stewardship Council) or ASC (Aquaculture Stewardship Council) certification labels",
        "Ask your fishmonger where the fish comes from and how it was caught",
        "Avoid buying undersized fish - they haven't had a chance to reproduce",
        "Diversify your seafood choices - don't always eat the same species",
        "Choose seasonal, local fish from traditional fishermen when possible"
      ]
    },
    {
      icon: Users,
      title: "Support Fishing Communities",
      difficulty: "Easy",
      impact: "High",
      color: "teal",
      steps: [
        "Buy directly from local fishermen or fish markets",
        "Support cooperatives practicing sustainable fishing",
        "Tip fishermen who use traditional, sustainable methods",
        "Learn about and respect traditional fishing practices",
        "Encourage restaurants to source from sustainable local fisheries",
        "Support fair trade seafood initiatives"
      ]
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      difficulty: "Easy",
      impact: "Medium",
      color: "blue",
      steps: [
        "Share this website with friends and family",
        "Post about sustainable seafood on social media",
        "Educate others about overfishing and its impacts",
        "Share the 'Before You Eat' tool when discussing seafood",
        "Talk to restaurant owners about sustainable sourcing",
        "Organize community awareness events"
      ]
    },
    {
      icon: Shield,
      title: "Support Conservation",
      difficulty: "Medium",
      impact: "High",
      color: "green",
      steps: [
        "Donate to marine conservation organizations",
        "Support expansion of marine protected areas",
        "Volunteer for beach cleanups and coastal restoration",
        "Adopt sustainable fishing policies in your community",
        "Support organizations fighting illegal fishing",
        "Fund research on sustainable fisheries"
      ]
    },
    {
      icon: BookOpen,
      title: "Educate Yourself",
      difficulty: "Easy",
      impact: "Medium",
      color: "yellow",
      steps: [
        "Read about different fishing methods and their impacts",
        "Learn to identify sustainable seafood options",
        "Understand seafood labels and certifications",
        "Study the connection between diet and ocean health",
        "Follow marine conservation news and research",
        "Understand local fishing regulations and seasons"
      ]
    },
    {
      icon: Vote,
      title: "Advocate for Change",
      difficulty: "Medium",
      impact: "Very High",
      color: "purple",
      steps: [
        "Contact local representatives about fishing regulations",
        "Support stronger enforcement of fishing laws",
        "Advocate for elimination of harmful fishing subsidies",
        "Push for transparent seafood labeling laws",
        "Support policies protecting marine ecosystems",
        "Vote for politicians with strong ocean protection policies"
      ]
    },
    {
      icon: Heart,
      title: "Reduce Ocean Pollution",
      difficulty: "Easy",
      impact: "Medium",
      color: "pink",
      steps: [
        "Reduce plastic use - especially single-use plastics",
        "Never litter, especially near water bodies",
        "Properly dispose of fishing line and gear",
        "Use reef-safe sunscreen when swimming",
        "Reduce your carbon footprint to combat ocean acidification",
        "Support clean ocean initiatives"
      ]
    },
    {
      icon: Target,
      title: "Take Direct Action in Lebanon",
      difficulty: "Medium",
      impact: "Very High",
      color: "red",
      steps: [
        "Report illegal fishing activities to authorities",
        "Join or support Lebanese marine conservation groups",
        "Participate in Mediterranean cleanup initiatives",
        "Pressure for stronger enforcement of Lebanon's fishing laws",
        "Support the creation of new marine protected areas",
        "Document and report dynamite fishing incidents",
        "Support traditional Lebanese fishing cooperatives",
        "Advocate for bans on bottom trawling in Lebanese waters"
      ]
    }
  ];

  const organizations = [
    {
      name: "Marine Stewardship Council (MSC)",
      description: "Global organization promoting sustainable fishing through certification",
      website: "https://www.msc.org",
      focus: "Certification & Standards"
    },
    {
      name: "Oceana",
      description: "International organization focused on ocean conservation and policy",
      website: "https://oceana.org",
      focus: "Advocacy & Protection"
    },
    {
      name: "Mediterranean SOS Network",
      description: "Protecting Mediterranean marine ecosystems",
      website: "https://medsos.gr",
      focus: "Mediterranean Focus"
    },
    {
      name: "Lebanese Environment Forum",
      description: "NGO working on environmental issues in Lebanon",
      website: "https://www.lef.org.lb",
      focus: "Lebanon Specific"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400 bg-green-500/20 border-green-500/50";
      case "Medium": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/50";
      case "Hard": return "text-red-400 bg-red-500/20 border-red-500/50";
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/50";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High": return "text-purple-400 bg-purple-500/20 border-purple-500/50";
      case "High": return "text-teal-400 bg-teal-500/20 border-teal-500/50";
      case "Medium": return "text-blue-400 bg-blue-500/20 border-blue-500/50";
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/50";
    }
  };

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
            Take Action Against Overfishing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every action counts. Here are concrete steps you can take today to help protect our oceans and combat overfishing.
          </p>
        </motion.div>

        {/* Quick Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass-strong rounded-2xl p-6 border border-green-500/30 text-center">
            <CheckCircle className="text-green-400 mx-auto mb-3" size={40} />
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-slate-300">Action Categories</div>
          </div>
          <div className="glass-strong rounded-2xl p-6 border border-teal-500/30 text-center">
            <Target className="text-teal-400 mx-auto mb-3" size={40} />
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-300">Specific Steps</div>
          </div>
          <div className="glass-strong rounded-2xl p-6 border border-purple-500/30 text-center">
            <Heart className="text-purple-400 mx-auto mb-3" size={40} />
            <div className="text-3xl font-bold text-white mb-2">You</div>
            <div className="text-slate-300">Can Make a Difference</div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="space-y-8 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-strong rounded-3xl p-8 border border-white/20 hover:border-teal-400/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-${action.color}-500/20 border border-${action.color}-500/50 flex items-center justify-center`}>
                      <Icon className={`text-${action.color}-400`} size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{action.title}</h2>
                      <div className="flex space-x-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${getDifficultyColor(action.difficulty)}`}>
                          {action.difficulty}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${getImpactColor(action.impact)}`}>
                          {action.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {action.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 + stepIndex * 0.05 }}
                      className="flex items-start space-x-3 glass rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400 text-xs font-bold mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <span className="text-slate-300 text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Organizations to Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Shield className="text-green-400 mr-3" size={32} />
            Organizations Making a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{org.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 font-semibold border border-teal-500/50">
                    {org.focus}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{org.description}</p>
                <a 
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>Visit Website</span>
                  <Share2 size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lebanon-Specific Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="glass-strong rounded-3xl p-10 border border-red-500/50 bg-gradient-to-br from-red-500/10 to-orange-500/10"
        >
          <div className="flex items-center justify-center mb-6">
            <Flag className="text-red-500 mr-3" size={48} />
            <h2 className="text-3xl font-bold text-white">
              Special Focus: Lebanon
            </h2>
          </div>
          <p className="text-lg text-slate-300 text-center mb-6 max-w-3xl mx-auto">
            Lebanese waters are in crisis. With a 68% overfishing rate and 12 species at risk, 
            immediate action is needed. Every Lebanese citizen can make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/lebanon" 
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Learn About Lebanon's Crisis
            </a>
            <a 
              href="/before-you-eat" 
              className="px-8 py-3 glass border border-teal-400/50 text-teal-400 font-semibold rounded-xl hover:bg-teal-500/10 transition-all"
            >
              Check Your Seafood
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

