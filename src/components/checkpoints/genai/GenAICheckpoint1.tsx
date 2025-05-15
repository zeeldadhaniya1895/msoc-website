import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InteractiveBackground from '../../../components/common/InteractiveBackground';

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

interface Topic {
  id: string;
  title: string;
  completed: boolean;
  topics?: {
    id: string;
    text: string;
    completed: boolean;
  }[];
  resources?: {
    id: string;
    title: string;
    link: string;
    description?: string;
    completed: boolean;
  }[];
  videos?: {
    id: string;
    title: string;
    link: string;
    duration?: string;
    description?: string;
    completed: boolean;
  }[];
}

interface Section {
  title: string;
  icon: string;
  color: string;
  topics: Topic[];
}

interface Category {
  id: string;
  title: string;
  color: string;
  sections: Section[];
}

const categories: Category[] = [
  {
    id: "leveraging-ai",
    title: "Leveraging AI",
    color: "#f97316",
    sections: [
      {
        title: "Python Basics",
        icon: "🐍",
        color: "#f97316",
        topics: [
          {
            id: "python-basics",
            title: "Week 1: Python Basics & Core Concepts",
            completed: false,
            topics: [
              { id: "python-inner-working", text: "Python Inner Working - Bytecode, Interpreter, Compilation Process", completed: false },
              { id: "memory-management", text: "Memory management in Python (Garbage collection)", completed: false },
              { id: "python-vm", text: "Python Virtual Machine (PVM)", completed: false },
              { id: "mutable-immutable", text: "Mutable and Immutable in Python", completed: false },
              { id: "data-types", text: "Data Types", completed: false },
            ],
            resources: [
              {
                id: "chai-python",
                title: "Chai Aur Python Playlist",
                link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
                completed: false
              },
              {
                id: "colab-tutorial",
                title: "Google Colab Tutorial",
                link: "https://www.youtube.com/watch?v=bP4JRwapoFc",
                completed: false
              },
              {
                id: "w3-python",
                title: "W3 School Python Tutorial",
                link: "https://www.w3schools.com/python/",
                completed: false
              },
              {
                id: "gfg-python",
                title: "GFG Python",
                link: "https://www.geeksforgeeks.org/python-programming-language/",
                completed: false
              }
            ]
          },
          {
            id: "data-structures",
            title: "Week 1: Data Structures & Operations",
            completed: false,
            topics: [
              { id: "data-structures", text: "Numbers, List, Strings, Dictionary, Tuple", completed: false },
              { id: "list-methods", text: "List: methods, indexing, nested lists", completed: false },
              { id: "strings", text: "Strings: immutability, operations, slicing", completed: false },
              { id: "tuples", text: "Tuple: immutability, packing/unpacking", completed: false },
              { id: "dictionary", text: "Dictionary: key-value pairs, methods, iteration", completed: false },
              { id: "numbers", text: "Numbers: integer, float, complex", completed: false },
              { id: "copy-reference", text: "Copy, Reference Count, Slice, etc.", completed: false },
              { id: "id-operators", text: "id(), is vs ==", completed: false },
              { id: "shallow-deep", text: "Shallow copy vs Deep copy (copy module)", completed: false },
              { id: "slicing", text: "Slicing operations (list[start:end:step])", completed: false },
            ]
          },
          {
            id: "control-flow",
            title: "Week 1: Control Flow",
            completed: false,
            topics: [
              { id: "loops", text: "Loops in Python", completed: false },
              { id: "for-while", text: "for, while loops", completed: false },
              { id: "break-continue", text: "break, continue, else with loops", completed: false },
              { id: "range-enumerate", text: "range(), enumerate(), list comprehensions", completed: false },
            ]
          },
          {
            id: "functions-closures",
            title: "Week 1: Functions & Closures",
            completed: false,
            topics: [
              { id: "scope-closure", text: "Scope and Closure in Python", completed: false },
              { id: "legb-rule", text: "Local, Enclosing, Global, Built-in scopes (LEGB rule)", completed: false },
              { id: "global-nonlocal", text: "global and nonlocal keywords", completed: false },
              { id: "closures", text: "Closures and when they are used", completed: false },
              { id: "decorators", text: "Decorators in Python", completed: false },
              { id: "first-class", text: "Functions as first-class citizens", completed: false },
              { id: "higher-order", text: "Higher-order functions", completed: false },
              { id: "function-decorators", text: "Function decorators (@decorator)", completed: false },
              { id: "use-cases", text: "Use cases (logging, authentication, timing, etc.)", completed: false },
            ]
          },
          {
            id: "oops",
            title: "Week 1: Object-Oriented Programming (OOPS) in Python",
            completed: false,
            topics: [
              { id: "oops-python", text: "OOPS in Python", completed: false },
              { id: "class-object", text: "Class and Object", completed: false },
              { id: "init-constructor", text: "__init__() constructor", completed: false },
              { id: "inheritance", text: "Inheritance (Single, Multiple, Multi-level)", completed: false },
              { id: "polymorphism", text: "Polymorphism, Encapsulation, Abstraction", completed: false },
              { id: "dunder-methods", text: "Dunder methods (__str__, __repr__, etc.)", completed: false },
              { id: "class-methods", text: "Class methods and static methods", completed: false },
            ]
          }
        ]
      }
    ]
  },
  {
    id: "fine-tuning-ai",
    title: "Fine-tuning AI",
    color: "#10b981",
    sections: [
      {
        title: "Introduction to NLP & Python Basics",
        icon: "🔤",
        color: "#10b981",
        topics: [
          {
            id: "nlp-intro",
            title: "Week 1: Introduction to NLP & Python Basics",
            completed: false,
            topics: [
              { id: "nlp-overview", text: "Read NLP Overview", completed: false },
              { id: "install-python", text: "Install Python and Jupyter Notebook", completed: false },
              { id: "practice-python", text: "Practice Python basics: strings, lists, loops, and functions", completed: false },
              { id: "nltk-tokenize", text: "Use nltk library to tokenize a sentence", completed: false },
            ],
            resources: [
              {
                id: "nlp-guide",
                title: "Ultimate Guide to NLP",
                link: "https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/",
                completed: false
              },
              {
                id: "python-beginners",
                title: "Python for Beginners (W3Schools)",
                link: "https://www.w3schools.com/python/",
                completed: false
              },
              {
                id: "nltk-docs",
                title: "NLTK Documentation",
                link: "https://www.nltk.org/",
                completed: false
              }
            ],
            videos: [
              {
                id: "python-nlp-v1",
                title: "Google Colab for quick Python experiments",
                link: "https://colab.research.google.com/",
                description: "Use Google Colab for quick Python experiments without local setup.",
                completed: false
              }
            ]
          }
        ]
      }
    ]
  }
];

const GenAICheckpoint1 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("leveraging-ai");
  const [activeSection, setActiveSection] = useState<string>("");
  const [completedItems, setCompletedItems] = useState<{[key: string]: boolean}>({});
  const [score, setScore] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  
  // Set default active section based on current category
  useEffect(() => {
    if (currentCategory && currentCategory.sections.length > 0) {
      setActiveSection(currentCategory.sections[0].title);
    }
  }, [currentCategory]);
  
  // Load progress from localStorage
  useEffect(() => {
    try {
      const savedProgressKey = `genai-${selectedCategory}-progress`;
      const savedProgress = localStorage.getItem(savedProgressKey);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCompletedItems(parsed);
        console.log(`Loaded GenAI ${selectedCategory} progress:`, parsed);
      }
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
    }
  }, [selectedCategory]);

  // Save progress and calculate score
  useEffect(() => {
    if (currentCategory && Object.keys(completedItems).length > 0) {
      try {
        // Save progress to localStorage
        const savedProgressKey = `genai-${selectedCategory}-progress`;
        const dataToSave = JSON.stringify(completedItems);
        localStorage.setItem(savedProgressKey, dataToSave);
        console.log(`Saved GenAI ${selectedCategory} progress:`, completedItems);
        
        // Calculate score
        const totalItems = currentCategory.sections.reduce((acc, section) => {
          return acc + section.topics.reduce((topicAcc, topic) => {
            return topicAcc + 
              (topic.topics?.length || 0) + 
              (topic.resources?.length || 0) + 
              (topic.videos?.length || 0);
          }, 0);
        }, 0);

        const completedCount = Object.values(completedItems).filter(Boolean).length;
        const newScore = Math.round((completedCount / totalItems) * 100);
        setScore(newScore);

        // Show confetti when score reaches 100
        if (newScore === 100 && !showConfetti) {
          setShowConfetti(true);
          setAchievements(prev => [...prev, `Completed All ${currentCategory.title} Topics!`]);
        }
      } catch (error) {
        console.error('Error saving progress to localStorage:', error);
      }
    }
  }, [completedItems, showConfetti, currentCategory, selectedCategory]);

  const handleItemComplete = (itemId: string) => {
    setCompletedItems(prev => {
      const updated = {
        ...prev,
        [itemId]: !prev[itemId]
      };
      
      return updated;
    });
  };

  const getSectionProgress = (section: Section) => {
    const totalItems = section.topics.reduce((acc, topic) => {
      return acc + 
        (topic.topics?.length || 0) + 
        (topic.resources?.length || 0) + 
        (topic.videos?.length || 0);
    }, 0);

    const completedCount = section.topics.reduce((acc, topic) => {
      return acc + 
        (topic.topics?.filter(t => completedItems[t.id]).length || 0) +
        (topic.resources?.filter(r => completedItems[r.id]).length || 0) +
        (topic.videos?.filter(v => completedItems[v.id]).length || 0);
    }, 0);

    return totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
  };

  const renderContent = () => {
    if (!currentCategory) return null;
    
    const section = currentCategory.sections.find(s => s.title === activeSection);
    if (!section) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-900/30 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            {section.icon} {section.title}
          </h2>
          
          {/* Decorative ring behind content */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full border border-orange-500/5 -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-dashed border-orange-600/5 animate-spin -z-10" style={{ animationDuration: '60s' }}></div>
          
          <div className="space-y-6 relative">
            {section.topics.map((topic) => (
              <motion.div
                key={topic.id}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-black/30 rounded-xl border border-orange-900/20 overflow-hidden shadow-lg relative"
              >
                {/* Small decorative rings for each topic */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-orange-500/10 -z-10"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border border-orange-600/10 -z-10"></div>
                
                <div className="p-4 border-b border-orange-900/20 bg-gradient-to-r from-gray-900 to-black">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-orange-100">{topic.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  {topic.topics && (
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Topics:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {topic.topics.map((item) => (
                          <li key={item.id} className="flex items-start space-x-3 group">
                            <div className="mt-0.5">
                              <input
                                type="checkbox"
                                checked={completedItems[item.id] || false}
                                onChange={() => handleItemComplete(item.id)}
                                className="w-4 h-4 rounded border-orange-400 text-orange-600 focus:ring-orange-500 transition-all focus:ring-2"
                              />
                            </div>
                            <span className={`${completedItems[item.id] ? 'text-green-400 line-through' : 'text-gray-300'} transition-all group-hover:text-white`}>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.resources && (
                    <div>
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Resources:</h4>
                      <div className="space-y-3">
                        {topic.resources.map((resource) => (
                          <div key={resource.id} className="flex items-start space-x-3 group">
                            <div className="mt-0.5">
                              <input
                                type="checkbox"
                                checked={completedItems[resource.id] || false}
                                onChange={() => handleItemComplete(resource.id)}
                                className="w-4 h-4 rounded border-orange-400 text-orange-600 focus:ring-orange-500 transition-all focus:ring-2"
                              />
                            </div>
                            <div>
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center ${completedItems[resource.id] ? 'text-green-400 line-through' : 'text-orange-400'} hover:text-orange-300 transition-colors`}
                              >
                                <span>{resource.title}</span>
                                <LinkIcon />
                              </a>
                              {resource.description && (
                                <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {topic.videos && (
                    <div>
                      <h4 className="text-lg font-semibold text-amber-400 mb-3">Video Tutorials:</h4>
                      <div className="space-y-3">
                        {topic.videos.map((video) => (
                          <div key={video.id} className="flex items-start space-x-3 group">
                            <div className="mt-0.5">
                              <input
                                type="checkbox"
                                checked={completedItems[video.id] || false}
                                onChange={() => handleItemComplete(video.id)}
                                className="w-4 h-4 rounded border-orange-400 text-orange-600 focus:ring-orange-500 transition-all focus:ring-2"
                              />
                            </div>
                            <div>
                              <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center ${completedItems[video.id] ? 'text-green-400 line-through' : 'text-amber-400'} hover:text-amber-300 transition-colors`}
                              >
                                <span>{video.title}</span>
                                <LinkIcon />
                              </a>
                              {video.duration && (
                                <p className="text-sm text-gray-400 mt-1">Duration: {video.duration}</p>
                              )}
                              {video.description && (
                                <p className="text-sm text-gray-400 mt-1">{video.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Section Progress</span>
              <span>{getSectionProgress(section)}%</span>
            </div>
            <div className="h-2.5 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${getSectionProgress(section)}%` }}
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
              />
            </div>
            
            {/* Circular progress indicator */}
            <motion.div 
              className="mt-6 flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative w-14 h-14">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="rgba(251,146,60,0.1)" 
                    strokeWidth="8" 
                  />
                  
                  {/* Progress circle */}
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="url(#progressGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ 
                      strokeDashoffset: 251.2 - (251.2 * getSectionProgress(section) / 100) 
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    transform="rotate(-90 50 50)"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={currentCategory?.color || "#f97316"} />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{getSectionProgress(section)}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <InteractiveBackground>
      <div className="container mx-auto px-4 py-8 mb-16">
        {/* Decorative Circular Rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute h-64 w-64 rounded-full border-4 border-orange-500/10 top-20 -left-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-96 w-96 rounded-full border-2 border-orange-600/5 bottom-20 -right-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-40 w-40 rounded-full border-8 border-orange-700/5 top-1/2 right-1/4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute h-80 w-80 rounded-full border border-dashed border-orange-400/10 top-1/3 left-1/3"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/events')}
            className="px-6 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 text-white rounded-lg backdrop-blur-xl border border-orange-500/20 transition-all duration-300 shadow-lg"
          >
            ← Back to Events
          </motion.button>
          
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent"
            >
              GenAI Track Checkpoint 1
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-2"
            >
              {currentCategory?.title}
            </motion.p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-400">Overall Progress</div>
              <div className="text-2xl font-bold text-white">{score}%</div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative h-14 w-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-900/30"
            >
              {/* Circular rings around progress indicator */}
              <div className="absolute inset-0 rounded-full border border-orange-400/20 scale-[1.2]"></div>
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-300/10 scale-[1.4] animate-spin" style={{ animationDuration: '10s' }}></div>
              <span className="text-white font-bold">{score}</span>
            </motion.div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full shadow-md ${
                selectedCategory === category.id ? 'text-white font-bold' : 'bg-gray-800/70 text-gray-300'
              }`}
              style={{ 
                backgroundColor: selectedCategory === category.id 
                  ? category.color 
                  : 'rgba(31, 41, 55, 0.7)' 
              }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Additional Decorative Circles */}
          <div className="absolute left-1/4 top-40 w-32 h-32 rounded-full border border-orange-500/10 blur-[1px] -z-10" />
          <div className="absolute right-1/3 bottom-1/4 w-20 h-20 rounded-full border-2 border-orange-400/15 blur-[1px] -z-10" />
          <div className="absolute left-2/3 top-1/4 w-24 h-24 rounded-full border-2 border-dashed border-orange-600/10 -z-10" />

          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-orange-900/20 shadow-xl sticky top-24"
            >
              {currentCategory && currentCategory.sections.map((section) => (
                <motion.button
                  key={section.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(section.title)}
                  className={`w-full text-left p-4 rounded-xl mb-3 transition-all duration-300 ${
                    activeSection === section.title
                      ? 'bg-gradient-to-r from-orange-900/30 to-black border border-orange-800/30 shadow-lg'
                      : 'hover:bg-black/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.icon}</span>
                      <span className="text-white font-medium">{section.title}</span>
                    </div>
                    <div className="text-gray-400">
                      {activeSection === section.title ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden relative">
                      {/* Small decorative circles at section progress bars */}
                      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-400/30"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-400/30"></div>
                      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-400/30"></div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${getSectionProgress(section)}%` }}
                        className={`h-full ${
                          getSectionProgress(section) === 100
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                            : 'bg-gradient-to-r from-orange-500 to-amber-500'
                        }`}
                      />
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500">
                      {getSectionProgress(section)}%
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
};

export default GenAICheckpoint1; 