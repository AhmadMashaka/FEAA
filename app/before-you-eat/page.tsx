"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, XCircle, AlertTriangle, Fish, UtensilsCrossed, Info } from "lucide-react";
import { getAllSpecies } from "@/lib/data";

export default function BeforeYouEatPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState<any>(null);
  const allSpecies = getAllSpecies();

  const filteredSpecies = searchTerm
    ? allSpecies.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const getSustainabilityRating = (status: string) => {
    switch (status) {
      case "Least Concern":
      case "Stable":
        return {
          rating: "Best Choice",
          color: "green",
          icon: CheckCircle,
          message: "This species is abundant and well-managed. Safe to eat!",
          recommendation: "Enjoy this fish! It's a sustainable choice that supports healthy ocean ecosystems."
        };
      case "Near Threatened":
        return {
          rating: "Good Alternative",
          color: "yellow",
          icon: AlertTriangle,
          message: "This species is relatively stable but showing some signs of decline.",
          recommendation: "This fish is okay to eat occasionally, but consider choosing 'Best Choice' options when available."
        };
      case "Vulnerable":
        return {
          rating: "Think Twice",
          color: "orange",
          icon: AlertTriangle,
          message: "This species is declining and needs our help to recover.",
          recommendation: "Consider alternative species. If you choose to eat this fish, ensure it's from a certified sustainable source."
        };
      case "Endangered":
      case "Critically Endangered":
        return {
          rating: "Avoid",
          color: "red",
          icon: XCircle,
          message: "This species is severely threatened and should not be consumed.",
          recommendation: "DO NOT EAT. Choose sustainable alternatives to help this species recover."
        };
      default:
        return {
          rating: "Unknown",
          color: "gray",
          icon: Info,
          message: "Conservation status unclear.",
          recommendation: "Research before consuming."
        };
    }
  };

  const getSustainableAlternatives = (species: any) => {
    const sustainability = getSustainabilityRating(species.status);
    
    if (sustainability.rating === "Best Choice") {
      return [];
    }

    // Find similar species that are sustainable
    const sustainableOptions = allSpecies.filter(s => {
      const sRating = getSustainabilityRating(s.status);
      return sRating.rating === "Best Choice" && s.id !== species.id;
    }).slice(0, 3);

    return sustainableOptions;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <UtensilsCrossed className="text-teal-400 mr-3" size={48} />
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Before You Eat
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Check if your seafood choice is sustainable. Make informed decisions that help protect our oceans.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300 font-semibold">Based on IUCN Red List conservation status</span>
          </div>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 border border-white/20 mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={24} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a fish species... (e.g., Salmon, Tuna, Grouper)"
              className="w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white text-lg focus:outline-none focus:border-teal-400 transition-all"
            />
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {searchTerm && filteredSpecies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 max-h-64 overflow-y-auto space-y-2"
              >
                {filteredSpecies.map((species) => (
                  <motion.button
                    key={species.id}
                    onClick={() => {
                      setSelectedSpecies(species);
                      setSearchTerm("");
                    }}
                    className="w-full text-left glass rounded-xl p-4 border border-white/10 hover:border-teal-400/50 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                          {species.name}
                        </div>
                        <div className="text-sm text-slate-400 italic">{species.scientificName}</div>
                      </div>
                      <Fish className="text-teal-400" size={20} />
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
            {searchTerm && filteredSpecies.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-slate-400"
              >
                No species found. Try a different search term.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {selectedSpecies && (
            <motion.div
              key={selectedSpecies.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const sustainability = getSustainabilityRating(selectedSpecies.status);
                const Icon = sustainability.icon;
                const alternatives = getSustainableAlternatives(selectedSpecies);

                return (
                  <div className="space-y-6">
                    {/* Main Result Card */}
                    <div className={`glass-strong rounded-3xl p-8 border-2 ${
                      sustainability.color === "green" ? "border-green-500/50 bg-green-500/10" :
                      sustainability.color === "yellow" ? "border-yellow-500/50 bg-yellow-500/10" :
                      sustainability.color === "orange" ? "border-orange-500/50 bg-orange-500/10" :
                      "border-red-500/50 bg-red-500/10"
                    }`}>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{selectedSpecies.name}</h2>
                          <p className="text-lg text-slate-300 italic">{selectedSpecies.scientificName}</p>
                        </div>
                        <Icon 
                          size={64} 
                          className={`${
                            sustainability.color === "green" ? "text-green-400" :
                            sustainability.color === "yellow" ? "text-yellow-400" :
                            sustainability.color === "orange" ? "text-orange-400" :
                            "text-red-400"
                          }`}
                        />
                      </div>

                      {/* Sustainability Rating */}
                      <div className="mb-6">
                        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-bold mb-4" 
                          style={{
                            background: `linear-gradient(135deg, ${
                              sustainability.color === "green" ? "#10B981, #059669" :
                              sustainability.color === "yellow" ? "#F59E0B, #D97706" :
                              sustainability.color === "orange" ? "#F97316, #EA580C" :
                              "#EF4444, #DC2626"
                            })`,
                            color: "white"
                          }}>
                          <Icon size={24} />
                          <span>{sustainability.rating}</span>
                        </div>
                        <p className="text-xl text-white mb-4">{sustainability.message}</p>
                        <p className="text-lg text-slate-300">{sustainability.recommendation}</p>
                      </div>

                      {/* Species Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <div className="text-sm text-slate-400 mb-1">Conservation Status</div>
                          <div className="text-lg font-bold text-white">{selectedSpecies.status}</div>
                        </div>
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <div className="text-sm text-slate-400 mb-1">Population</div>
                          <div className="text-lg font-bold text-white">{selectedSpecies.population.toLocaleString()}</div>
                        </div>
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <div className="text-sm text-slate-400 mb-1">Trend</div>
                          <div className="text-lg font-bold text-white">{selectedSpecies.populationTrend}</div>
                        </div>
                      </div>

                      <p className="text-slate-300">{selectedSpecies.description}</p>
                    </div>

                    {/* Sustainable Alternatives */}
                    {alternatives.length > 0 && (
                      <div className="glass-strong rounded-3xl p-8 border border-green-500/30 bg-green-500/5">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                          <Fish className="text-green-400 mr-3" size={28} />
                          Try These Sustainable Alternatives Instead
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {alternatives.map((alt) => (
                            <motion.button
                              key={alt.id}
                              onClick={() => setSelectedSpecies(alt)}
                              className="glass rounded-2xl p-5 border border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 transition-all text-left group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <CheckCircle className="text-green-400" size={24} />
                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
                                  Best Choice
                                </span>
                              </div>
                              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                                {alt.name}
                              </h4>
                              <p className="text-sm text-slate-400 italic">{alt.scientificName}</p>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Info Box */}
                    <div className="glass-strong rounded-2xl p-6 border border-teal-400/30 bg-teal-500/5">
                      <div className="flex items-start space-x-3">
                        <Info className="text-teal-400 flex-shrink-0 mt-1" size={24} />
                        <div className="text-sm text-slate-300">
                          <strong className="text-teal-400">Remember:</strong> Even "Best Choice" species should be consumed 
                          responsibly. Look for certified sustainable seafood (MSC, ASC), support local fishermen using 
                          traditional methods, and diversify your seafood choices to reduce pressure on any single species.
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guide Section */}
        {!selectedSpecies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="glass-strong rounded-2xl p-6 border border-green-500/30">
              <CheckCircle className="text-green-400 mb-3" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Best Choice</h3>
              <p className="text-sm text-slate-300">Abundant, well-managed. Safe to eat regularly.</p>
            </div>
            <div className="glass-strong rounded-2xl p-6 border border-yellow-500/30">
              <AlertTriangle className="text-yellow-400 mb-3" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Good Alternative</h3>
              <p className="text-sm text-slate-300">Relatively stable. Eat occasionally.</p>
            </div>
            <div className="glass-strong rounded-2xl p-6 border border-orange-500/30">
              <AlertTriangle className="text-orange-400 mb-3" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Think Twice</h3>
              <p className="text-sm text-slate-300">Declining populations. Choose alternatives when possible.</p>
            </div>
            <div className="glass-strong rounded-2xl p-6 border border-red-500/30">
              <XCircle className="text-red-400 mb-3" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Avoid</h3>
              <p className="text-sm text-slate-300">Critically threatened. Do not consume.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

