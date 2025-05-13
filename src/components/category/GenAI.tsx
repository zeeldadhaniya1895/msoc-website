import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// SVG icons as components
const CheckCircleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4 h-4 text-green-400 mt-1"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ChevronDownIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUpIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const LinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="inline-block ml-1"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

// Roadmap weeks data
const roadmap = [
  {
    title: "Week 1: AI & Machine Learning Fundamentals",
    quote: "Artificial intelligence is the new electricity.",
    author: "Andrew Ng",
    description: "Build a solid foundation in AI and ML concepts",
    checklist: [
      "Learn Python basics for AI development",
      "Understand key AI/ML terminology and concepts",
      "Set up your development environment (Python, libraries, notebooks)",
      "Learn data preprocessing techniques",
      "Build and train a simple ML model (regression, classification)"
    ],
    resources: [
      {
        title: "Fast.ai Practical Deep Learning Course",
        description: "Hands-on approach to deep learning",
        link: "https://course.fast.ai/"
      },
      {
        title: "Google's Machine Learning Crash Course",
        description: "Free course with practical exercises",
        link: "https://developers.google.com/machine-learning/crash-course"
      },
      {
        title: "Scikit-learn Documentation",
        description: "Python machine learning library with tutorials",
        link: "https://scikit-learn.org/stable/tutorial/index.html"
      }
    ],
    progressTip: "Focus on understanding core concepts before diving into complex frameworks. Try to recreate simple examples from tutorials to solidify your understanding."
  },
  {
    title: "Week 2: Generative AI & LLMs",
    quote: "Every aspect of learning or any other feature of intelligence can be so precisely described that a machine can be made to simulate it.",
    author: "John McCarthy",
    description: "Explore the world of generative models and language models",
    checklist: [
      "Understand transformer architectures",
      "Learn about different LLM models (GPT, BERT, etc.)",
      "Explore prompt engineering techniques",
      "Build applications using LLM APIs",
      "Understand the ethical aspects of generative AI"
    ],
    resources: [
      {
        title: "Hugging Face Transformers",
        description: "State-of-the-art natural language processing",
        link: "https://huggingface.co/docs/transformers/index"
      },
      {
        title: "OpenAI API Documentation",
        description: "Learn how to use GPT models via API",
        link: "https://platform.openai.com/docs/introduction"
      },
      {
        title: "Prompt Engineering Guide",
        description: "Comprehensive guide for prompt engineering",
        link: "https://www.promptingguide.ai/"
      }
    ],
    progressTip: "Start with pre-trained models and APIs before attempting to train your own. Focus on creating meaningful applications using existing LLM capabilities."
  }
];

// AI and GenAI resources and tools
const aiResources = [
  { name: "TensorFlow", description: "End-to-end open source ML platform", link: "https://www.tensorflow.org/" },
  { name: "PyTorch", description: "Open source machine learning framework", link: "https://pytorch.org/" },
  { name: "LangChain", description: "Framework for developing LLM-powered applications", link: "https://www.langchain.com/" },
  { name: "Llama Index", description: "Data framework for building LLM applications", link: "https://www.llamaindex.ai/" },
  { name: "Hugging Face", description: "AI community and platform with models, datasets and apps", link: "https://huggingface.co/" },
  { name: "OpenAI Platform", description: "Build generative AI applications with OpenAI's models", link: "https://platform.openai.com/" },
  { name: "Google Colab", description: "Free notebook environment for ML development", link: "https://colab.research.google.com/" },
  { name: "Kaggle", description: "Data science platform with competitions and datasets", link: "https://www.kaggle.com/" },
  { name: "Stability AI", description: "Open source generative AI models and tools", link: "https://stability.ai/" },
  { name: "Midjourney", description: "AI image generation platform", link: "https://www.midjourney.com/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('genai-progress');
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress);
        setCompletedItems(parsedProgress);
        
        // Calculate overall progress immediately after loading from localStorage
        let completed = 0;
        let total = 0;
        
        roadmap.forEach((week, weekIndex) => {
          total += week.checklist.length;
          completed += (parsedProgress[weekIndex] || []).filter(Boolean).length;
        });
        
        const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;
        setProgress(newProgress);
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(completedItems).length > 0) {
      try {
        localStorage.setItem('genai-progress', JSON.stringify(completedItems));
        
        // Calculate overall progress
        let completed = 0;
        let total = 0;
        
        roadmap.forEach((week, weekIndex) => {
          total += week.checklist.length;
          completed += (completedItems[weekIndex] || []).filter(Boolean).length;
        });
        
        const newProgress = total > 0 ? Math.round((completed / total) * 100) : 0;
        setProgress(newProgress);
        
        // Show confetti animation when progress increases significantly
        if (newProgress > 0 && newProgress % 25 === 0) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
    }
  }, [completedItems]);

  const toggleWeek = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleCheckItem = (weekIndex: number, itemIndex: number) => {
    setCompletedItems(prev => {
      const weekItems = prev[weekIndex] || Array(roadmap[weekIndex].checklist.length).fill(false);
      const newWeekItems = [...weekItems];
      newWeekItems[itemIndex] = !newWeekItems[itemIndex];
      
      return {
        ...prev,
        [weekIndex]: newWeekItems
      };
    });
  };

  // Calculate completed items for each week
  const getWeekProgress = (weekIndex: number) => {
    const weekItems = completedItems[weekIndex] || [];
    const completedCount = weekItems.filter(Boolean).length;
    const totalItems = roadmap[weekIndex].checklist.length;
    return totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-purple-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-500"
              style={{
                top: '-10px',
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                animation: `confetti ${Math.random() * 3 + 2}s forwards`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          >
            Generative AI Roadmap (2025)
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-2 rounded-lg inline-block mb-8 mx-auto text-center w-full"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
              🔥 Main Track
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            LLMs, AI Tools & Applications Development
          </motion.h2>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 p-4 bg-gray-900/80 rounded-xl border border-gray-800 shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-white">Your Progress</h3>
              <span className="text-purple-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-12 border border-gray-800 shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
          >
            <p className="text-white/80 mb-4">
              This roadmap guides you through the world of Generative AI, focusing on large language models (LLMs) and how to build applications with them. You'll learn how these AI models work, how to interact with them through APIs, and how to create valuable applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://roadmap.sh/prompt-engineering" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors bg-purple-500/20 hover:bg-purple-500/30 rounded-lg p-4 border border-purple-500/30 w-full sm:w-auto text-center group"
              >
                <span className="relative">
                  Prompt Engineering Roadmap | roadmap.sh
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://drive.google.com/drive/folders/your-folder-id?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold hover:text-green-300 transition-colors rounded-lg p-4 border border-green-500/30 w-full sm:w-auto group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block group-hover:translate-y-1 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Roadmap
              </a>
            </div>
          </motion.div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-purple-500 before:rounded-full before:-z-10">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 cursor-pointer flex justify-between items-center relative group"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:from-yellow-300 group-hover:to-orange-400 transition-colors duration-300">{week.title}</h3>
                      
                      {/* Week progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                            style={{ width: `${getWeekProgress(weekIndex)}%` }}
                          />
                        </div>
                        <span className="text-gray-400">{getWeekProgress(weekIndex)}%</span>
                      </div>
                    </div>
                    <button className="text-white/70 hover:text-white p-1 rounded-full transition-colors bg-gray-800/50 hover:bg-gray-700/50 ml-2 transform hover:scale-110 duration-300">
                      {openIndex === weekIndex ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                  </div>

                  {openIndex === weekIndex && (
                    <div className="p-5 border-t border-gray-800">
                      {week.description && (
                        <p className="text-gray-400 mb-4 italic">{week.description}</p>
                      )}

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-purple-500 transform hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-purple-300 italic mb-1">"{week.quote}"</p>
                        <p className="text-right text-gray-400 text-sm">- {week.author}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Checklist:</h4>
                        <div className="space-y-2">
                          {week.checklist.map((item, itemIndex) => (
                            <motion.div 
                              key={itemIndex}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
                              whileHover={{ x: 5 }}
                            >
                              <div className="flex-shrink-0 mt-1">
                                <input 
                                  type="checkbox" 
                                  checked={completedItems[weekIndex]?.[itemIndex] || false}
                                  onChange={() => toggleCheckItem(weekIndex, itemIndex)}
                                  className="h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-gray-900 cursor-pointer"
                                />
                              </div>
                              <span 
                                className={`${completedItems[weekIndex]?.[itemIndex] ? 'line-through text-gray-500' : 'text-white/80'} transition-colors duration-300`}
                                onClick={() => toggleCheckItem(weekIndex, itemIndex)}
                              >
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Resources:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {week.resources.map((resource, idx) => (
                            <a 
                              key={idx} 
                              href={resource.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                            >
                              <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:text-purple-300 transition-colors group-hover:rotate-12 transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{resource.title}</span>
                                  {resource.description && (
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30 transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-purple-900/20 hover:shadow-lg">
                        <h4 className="font-semibold mb-2 text-purple-300">Progress Tip:</h4>
                        <p className="text-white/70">{week.progressTip}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">AI Tools & Resources</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-800/50 hover:border-purple-800/50 group"
                >
                  <span className="font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{resource.name}</span>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30 backdrop-blur-md hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your AI Journey</h2>
            <p className="text-white/80 mb-2">
              Generative AI is an exciting field of technology that is evolving every day. Keep learning and stay updated with new techniques and tools.
            </p>
            <p className="text-white/80 mb-2">
              Start with small projects and develop your skills as you go. Remember to keep ethics and responsibility in mind when building AI applications.
            </p>
            <p className="text-white/80">
              The most important thing to remember is that in the field of generative AI, learning comes through practice and experimentation. Prompting is both an art and a science!
            </p>
          </div>
        </div>
      </div>
      {/* Custom cursor effect */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: var(--opacity); }
          100% { transform: scale(1.2); opacity: calc(var(--opacity) * 0.8); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
} 