"use client";

import { motion } from "framer-motion";
import { ExternalLink, Fish, Shield, Globe, Database, Filter, TrendingDown, Flag, CheckCircle, UtensilsCrossed, Heart, Target, Brain } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl shadow-2xl p-10 md:p-16 border border-white/20 mb-10"
        >
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">About</h1>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed font-light"
            >
              Welcome to the <span className="text-teal-400 font-semibold">Fish Species Explorer</span>, developed by 
              <span className="text-teal-400 font-semibold"> Ahmad Mashaka and Group 5</span> at the American University of Beirut (AUB). 
              This comprehensive platform is designed to help users explore global fish species, their
              conservation status, population trends, and geographic distribution, while tackling the critical issue of overfishing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mt-10 mb-6 tracking-tight flex items-center space-x-3">
                <Fish className="text-teal-400" size={32} />
                <span>Our Mission</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-4">
                This application was developed by <span className="text-teal-400 font-semibold">Ahmad Mashaka and Group 5</span> for 
                a course at the <span className="text-teal-400 font-semibold">American University of Beirut (AUB)</span>, 
                Faculty of Engineering and Architecture (FEAA). Our mission is to raise awareness about marine biodiversity and the
                conservation status of fish species worldwide, with special focus on <span className="text-teal-400 font-semibold">tackling overfishing in Lebanon and the Mediterranean</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Our team is passionate about marine conservation and using technology to create 
                positive environmental impact. This project represents our commitment to tackling 
                overfishing and promoting sustainable seafood choices through education and awareness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mt-10 mb-6 tracking-tight flex items-center space-x-3">
                <Database className="text-teal-400" size={32} />
                <span>Features</span>
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Database, text: "Comprehensive Species Database: Browse 65 fish species with detailed IUCN-verified information including scientific names, habitats, and population data from FAO and FishBase." },
                  { icon: Shield, text: "Conservation Status: View real-time IUCN conservation status classifications (Critically Endangered, Endangered, Vulnerable, etc.) for each species." },
                  { icon: TrendingDown, text: "Overfishing Impact Dashboard: Explore global and regional overfishing statistics with verified FAO data, including economic impacts and trends." },
                  { icon: Flag, text: "Lebanon/Mediterranean Focus: Dive into specific overfishing challenges and solutions for Lebanon and the Mediterranean Sea, featuring local species and initiatives." },
                  { icon: CheckCircle, text: "Before You Eat Checker: An interactive tool to check the sustainability of fish species and find sustainable alternatives for overfished options." },
                  { icon: UtensilsCrossed, text: "Sustainable Recipes: Discover 32 delicious, authentic recipes using only non-endangered fish species, complete with cultural backgrounds and step-by-step instructions." },
                  { icon: Heart, text: "Species Recovery Tracker: Learn about successful marine conservation efforts and species recovery programs worldwide, showcasing positive impact." },
                  { icon: Target, text: "Action Steps: Find practical ways to contribute to marine conservation, from individual choices to supporting global organizations, with a special focus on Lebanon." },
                  { icon: Brain, text: "Educational Quiz: Test your knowledge about overfishing and marine conservation with an interactive quiz, including Lebanese-specific questions." },
                  { icon: Globe, text: "Geographic Distribution: Explore which countries each species is found in, including no-fishing zones and protected marine areas." },
                  { icon: Filter, text: "Advanced Filtering: Easily filter species by country, conservation status, population trend, and more to find specific information." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4 glass rounded-2xl p-5 border border-white/10"
                    >
                      <Icon className="text-teal-400 mt-1 flex-shrink-0" size={24} />
                      <span className="text-slate-300 font-light">{item.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mt-10 mb-6 tracking-tight flex items-center space-x-3">
                <Globe className="text-teal-400" size={32} />
                <span>Data Sources</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                Our data is compiled from various authoritative sources including:
              </p>
              <ul className="space-y-3">
                {[
                  { name: "International Union for Conservation of Nature (IUCN)", url: "https://www.iucn.org/" },
                  { name: "Food and Agriculture Organization (FAO)", url: "https://www.fao.org/" },
                  { name: "FishBase", url: "https://www.fishbase.se/" },
                ].map((source, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors group glass rounded-xl p-4 border border-white/10"
                    >
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                      <span className="font-medium">{source.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mt-10 mb-6 tracking-tight">
                Conservation Status Categories
              </h2>
              <div className="space-y-4">
                {[
                  { status: "Critically Endangered", color: "from-red-600 to-red-700", desc: "Extremely high risk of extinction in the wild" },
                  { status: "Endangered", color: "from-red-500 to-red-600", desc: "Very high risk of extinction in the wild" },
                  { status: "Vulnerable", color: "from-orange-500 to-orange-600", desc: "High risk of extinction in the wild" },
                  { status: "Near Threatened", color: "from-yellow-500 to-yellow-600", desc: "Close to qualifying for a threatened category" },
                  { status: "Least Concern", color: "from-green-500 to-green-600", desc: "Widespread and abundant" },
                  { status: "Stable", color: "from-teal-500 to-teal-600", desc: "Population is stable and not declining" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center space-x-4 glass rounded-2xl p-5 border border-white/10"
                  >
                    <span className={`bg-gradient-to-r ${item.color} text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {item.status}
                    </span>
                    <span className="text-slate-300 font-light">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-3xl font-bold text-white mt-10 mb-6 tracking-tight">
                Contact & Support
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                This application was developed as part of a FEAA (Faculty of Economics
                and Business Administration) course project. For questions or
                suggestions, please refer to the project documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-10 p-6 glass rounded-2xl border border-green-500/30 bg-green-500/10"
            >
              <p className="text-sm text-green-200">
                <strong className="text-green-300">Data Credibility:</strong> All data in this application is sourced from 
                authoritative organizations including FAO (Food and Agriculture Organization), IUCN Red List, 
                FishBase, and peer-reviewed scientific publications. Population estimates and conservation 
                status are based on the latest available assessments as of 2024.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
