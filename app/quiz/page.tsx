"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fish, CheckCircle, XCircle, Award, RotateCcw, Trophy } from "lucide-react";

const quiz = {
  questions: [
    {
      id: 1,
      question: "What percentage of global fish stocks are currently overfished?",
      options: ["15%", "25%", "35%", "45%"],
      correct: 2,
      explanation: "Approximately 35% of global fish stocks are overfished, meaning they are being harvested faster than they can reproduce. This is a critical concern for ocean health."
    },
    {
      id: 2,
      question: "Which fishing method is most destructive to the seabed?",
      options: ["Hook and line", "Trammel nets", "Bottom trawling", "Fish traps"],
      correct: 2,
      explanation: "Bottom trawling drags heavy nets across the ocean floor, destroying coral reefs, seagrass beds, and other critical habitats that take decades to recover."
    },
    {
      id: 3,
      question: "What does MSC certification mean?",
      options: ["Most Sustainable Catch", "Marine Stewardship Council", "Maximum Species Count", "Mediterranean Seafood Certificate"],
      correct: 1,
      explanation: "MSC stands for Marine Stewardship Council, an international organization that certifies sustainable fishing practices. Look for the blue MSC label when buying seafood!"
    },
    {
      id: 4,
      question: "What is the overfishing rate in Mediterranean waters?",
      options: ["35%", "45%", "55%", "Over 60%"],
      correct: 3,
      explanation: "Over 60% of Mediterranean fish stocks are overfished, making it one of the most overfished seas in the world. This severely impacts countries like Lebanon, Greece, Italy, and Spain."
    },
    {
      id: 5,
      question: "Which species has successfully recovered from near extinction?",
      options: ["European Eel", "Striped Bass", "Bluefin Tuna", "Mediterranean Grouper"],
      correct: 1,
      explanation: "Striped Bass populations recovered dramatically after strict management measures in the 1980s-90s. This proves that recovery is possible with proper action!"
    },
    {
      id: 6,
      question: "How much economic loss is caused by overfishing annually?",
      options: ["$8 billion", "$23 billion", "$51 billion", "$83 billion"],
      correct: 3,
      explanation: "$83 billion is lost annually due to overfishing and poor fisheries management. This affects livelihoods, food security, and economies worldwide."
    },
    {
      id: 7,
      question: "What is 'bycatch'?",
      options: ["Fish caught in the correct season", "Unwanted fish and marine life caught accidentally", "Fish caught using sustainable methods", "Fish that escape fishing nets"],
      correct: 1,
      explanation: "Bycatch refers to unwanted fish, dolphins, turtles, and other marine life caught accidentally. Approximately 40% of global catch is bycatch and often discarded dead."
    },
    {
      id: 8,
      question: "In Lebanon, which fish is called 'Sultan Ibrahim'?",
      options: ["Sea Bream", "Red Mullet", "Grouper", "Seabass"],
      correct: 1,
      explanation: "Red Mullet (Sultan Ibrahim in Arabic) is highly prized in Lebanese cuisine, traditionally served during celebrations. However, it's now overfished in Lebanese waters."
    },
    {
      id: 9,
      question: "How long can it take for a slow-growing fish species to recover?",
      options: ["2-5 years", "5-10 years", "10-20 years", "20-50 years"],
      correct: 3,
      explanation: "Long-lived species like tuna, grouper, and halibut can take 20-50 years to recover because they mature slowly and reproduce less frequently."
    },
    {
      id: 10,
      question: "What should you do before buying seafood?",
      options: ["Buy the cheapest option", "Check if the species is sustainable", "Always choose imported fish", "Buy the largest fish available"],
      correct: 1,
      explanation: "Always check if the species is sustainable using tools like 'Before You Eat'. Avoid endangered species, look for certifications, and choose local, seasonal options."
    }
  ]
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === quiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage === 100) return { title: "Ocean Expert! 🏆", message: "Perfect score! You're a true ocean conservation champion!", color: "text-teal-400" };
    if (percentage >= 80) return { title: "Ocean Guardian! 🌊", message: "Excellent! You know your stuff about sustainable seafood.", color: "text-green-400" };
    if (percentage >= 60) return { title: "Ocean Friend! 🐟", message: "Good job! You're on your way to becoming an ocean advocate.", color: "text-blue-400" };
    if (percentage >= 40) return { title: "Learning! 📚", message: "Not bad! Keep learning about ocean conservation.", color: "text-yellow-400" };
    return { title: "Just Starting! 🌱", message: "Everyone starts somewhere! Review the material and try again.", color: "text-orange-400" };
  };

  if (quizComplete) {
    const scoreMsg = getScoreMessage();
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-12 border border-teal-400/50 text-center"
          >
            <Trophy className="text-teal-400 mx-auto mb-6" size={80} />
            <h1 className={`text-4xl font-bold ${scoreMsg.color} mb-4`}>{scoreMsg.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{scoreMsg.message}</p>
            
            <div className="mb-8">
              <div className="text-6xl font-bold text-white mb-2">
                {score} / {quiz.questions.length}
              </div>
              <div className="text-lg text-slate-400">Correct Answers</div>
              <div className="mt-4 text-3xl font-bold text-teal-400">
                {((score / quiz.questions.length) * 100).toFixed(0)}%
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={restartQuiz}
                className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
              >
                <RotateCcw size={20} />
                <span>Try Again</span>
              </button>
              <a
                href="/action-steps"
                className="px-8 py-3 glass border border-teal-400/50 text-teal-400 font-semibold rounded-xl hover:bg-teal-500/10 transition-all"
              >
                Take Action
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Fish className="text-teal-400 mr-3" size={48} />
            <h1 className="text-5xl font-bold text-white tracking-tight">
              Ocean Knowledge Quiz
            </h1>
          </div>
          <p className="text-xl text-slate-300 mb-4">
            Test your knowledge about overfishing and sustainable seafood
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300 font-semibold">Questions based on verified FAO & IUCN data</span>
          </div>
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
            <span>Score: {score} / {currentQuestion + (answered ? 1 : 0)}</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-3xl p-8 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8">{question.question}</h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                    !answered
                      ? "glass border-white/20 hover:border-teal-400/50 hover:bg-teal-500/10"
                      : selectedAnswer === index
                      ? isCorrect
                        ? "border-green-500 bg-green-500/20"
                        : "border-red-500 bg-red-500/20"
                      : index === question.correct
                      ? "border-green-500 bg-green-500/20"
                      : "glass border-white/10 opacity-50"
                  } ${answered ? "cursor-not-allowed" : "cursor-pointer"}`}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg">{option}</span>
                    {answered && (
                      selectedAnswer === index ? (
                        isCorrect ? (
                          <CheckCircle className="text-green-400" size={24} />
                        ) : (
                          <XCircle className="text-red-400" size={24} />
                        )
                      ) : index === question.correct ? (
                        <CheckCircle className="text-green-400" size={24} />
                      ) : null
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Explanation */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`glass-strong rounded-2xl p-6 border ${
                isCorrect ? "border-green-500/50 bg-green-500/10" : "border-orange-500/50 bg-orange-500/10"
              } mb-8`}
            >
              <div className="flex items-start space-x-3">
                {isCorrect ? (
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                ) : (
                  <Award className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                )}
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isCorrect ? "text-green-400" : "text-orange-400"}`}>
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </h3>
                  <p className="text-slate-300">{question.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Button */}
        {answered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={nextQuestion}
              className="px-12 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all text-lg"
            >
              {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

