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
    id: "excuse-generator-project",
    title: "Mini Task",
    color: "#f97316",
    sections: [
      {
        title: "Project Task",
        icon: "🎭",
        color: "#f97316",
        topics: [
          {
            id: "excuse-generator",
            title: "Excuse Generator App",
            completed: false,
            topics: [
              {
                id: "project-description",
                text: '',
                completed: false
              }
            ],
            resources: [
              {
                id: "project-submission",
                title: "Submit Your Project",
                link: "https://forms.gle/z1xCjFaxeLViVCSn7",
                description: "Click here to submit your project link",
                completed: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "frontend-framework",
    title: "Frontend Framework (React + Redux)",
    color: "#f97316",
    sections: [
      {
        title: "Days 11-13: React Fundamentals",
        icon: "⚛️",
        color: "#f97316",
        topics: [
          {
            id: "react-fundamentals",
            title: "React Fundamentals",
            completed: false,
            topics: [
              { id: "jsx", text: "JSX", completed: false },
              { id: "components", text: "Components (functional/class)", completed: false },
              { id: "props", text: "Props", completed: false },
              { id: "state", text: "State", completed: false },
              { id: "event-handling", text: "Event handling", completed: false }
            ],
            resources: [
              {
                id: "react-official",
                title: "React Official: Main Concepts",
                link: "https://reactjs.org/docs/hello-world.html",
                completed: false
              },
              {
                id: "freecodecamp-react",
                title: "freeCodeCamp: Front End Libraries – React",
                link: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react",
                completed: false
              }
            ],
            videos: [
              {
                id: "react-full-course",
                title: "React JS Full Course for Beginners (freeCodeCamp – 12 hr)",
                link: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                description: "Comprehensive course covering everything from JSX to props, state, and components.",
                completed: false
              },
              {
                id: "react-crash-course",
                title: "React JS Crash Course (Traversy Media – 2 hr)",
                link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
                description: "Fast-paced but beginner-friendly crash course on components, props, and event handling.",
                completed: false
              }
            ]
          }
        ]
      },
      {
        title: "Days 14-16: React Advanced",
        icon: "🚀",
        color: "#f97316",
        topics: [
          {
            id: "react-advanced",
            title: "React Advanced",
            completed: false,
            topics: [
              { id: "use-effect", text: "useEffect", completed: false },
              { id: "context", text: "Context", completed: false },
              { id: "refs", text: "Refs", completed: false },
              { id: "hooks-patterns", text: "Hooks patterns", completed: false },
              { id: "conditional-rendering", text: "Conditional rendering", completed: false },
              { id: "lists-keys", text: "Lists & keys", completed: false },
              { id: "forms", text: "Forms", completed: false }
            ],
            resources: [
              {
                id: "react-hooks",
                title: "React Official: Hooks at a Glance",
                link: "https://reactjs.org/docs/hooks-overview.html",
                completed: false
              },
              {
                id: "scrimba-react",
                title: "Let's have some interaction",
                link: "https://scrimba.com/learn/learnreact",
                completed: false
              }
            ],
            videos: [
              {
                id: "hooks-explained",
                title: "React Hooks Explained Simply (Web Dev Simplified – 15 mins)",
                link: "https://youtu.be/O6P86uwfdR0",
                description: "Excellent intro to useEffect, useState, useRef, useContext with practical examples.",
                completed: false
              },
              {
                id: "codevolution-react",
                title: "Complete React Playlist (Codevolution)",
                link: "https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                completed: false
              }
            ]
          }
        ]
      },
      {
        title: "Days 17-18: React Router",
        icon: "🛣️",
        color: "#f97316",
        topics: [
          {
            id: "react-router",
            title: "React Router",
            completed: false,
            topics: [
              { id: "client-routing", text: "Client-side routing", completed: false },
              { id: "nested-routes", text: "Nested routes", completed: false },
              { id: "dynamic-params", text: "Dynamic params", completed: false }
            ],
            resources: [
              {
                id: "router-official",
                title: "React Router: Getting Started",
                link: "https://reactrouter.com/en/main/start/tutorial",
                completed: false
              }
            ],
            videos: [
              {
                id: "router-tutorial",
                title: "React Router Tutorial (freecodecamp – 2 hrs)",
                link: "https://youtu.be/SMq1IQRweDc",
                description: "Quick and clean explanation of routing, links, and useParams.",
                completed: false
              }
            ]
          }
        ]
      },
      {
        title: "Days 19-21: Redux (State Management)",
        icon: "🔄",
        color: "#f97316",
        topics: [
          {
            id: "redux-basics",
            title: "Redux Basics",
            completed: false,
            topics: [
              { id: "store", text: "Store", completed: false },
              { id: "actions", text: "Actions", completed: false },
              { id: "reducers", text: "Reducers", completed: false },
              { id: "middleware", text: "Middleware (Thunk/Saga)", completed: false },
              { id: "react-redux", text: "React-Redux integration", completed: false }
            ],
            resources: [
              {
                id: "redux-essentials",
                title: "Redux Official: Redux Essentials Tutorial",
                link: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts",
                completed: false
              },
              {
                id: "redux-toolkit",
                title: "Redux Toolkit: Getting Started Guide",
                link: "https://redux-toolkit.js.org/tutorials/quick-start",
                completed: false
              },
              {
                id: "freecodecamp-redux",
                title: "Free-code-camp: Learn Redux by Making a Counter Application",
                link: "https://www.freecodecamp.org/news/learn-redux-by-making-a-counter-application/",
                completed: false
              }
            ],
            videos: [
              {
                id: "redux-tutorial",
                title: "React Redux Tutorial for Beginners (freeCodeCamp – 8 hr)",
                link: "https://youtu.be/SlC8941Wwrk",
                completed: false
              },
              {
                id: "redux-toolkit-tutorial",
                title: "Redux toolkit full Tutorial (Codevolution – 1.5 hr)",
                link: "https://youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3",
                completed: false
              }
            ]
          }
        ]
      },
      {
        title: "Fun Zone",
        icon: "🎮",
        color: "#f97316",
        topics: [
          {
            id: "fun-resources",
            title: "Fun Resources",
            completed: false,
            resources: [
              {
                id: "wordle-clone",
                title: "Joy of React: Wordle Clone",
                link: "https://github.com/joy-of-react/project-wordle.git",
                completed: false
              },
              {
                id: "josh-articles",
                title: "Josh W. Comeau's React Articles",
                link: "https://www.joshwcomeau.com/react/",
                completed: false
              }
            ]
          }
        ]
      }
    ]
  }
];

const MernCheckpoint2 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend-framework");
  const [activeSection, setActiveSection] = useState<string>("Days 11-13: React Fundamentals");
  const [completedItems, setCompletedItems] = useState<{[key: string]: boolean}>({});
  const [score, setScore] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  
  // Auto-expand Project Task when Excuse Generator Project is selected
  useEffect(() => {
    const currentCat = categories.find(cat => cat.id === selectedCategory);
    if (!currentCat) return;
    if (selectedCategory === "excuse-generator-project") {
      setActiveSection("Project Task");
    } else if (currentCat.sections.length > 0) {
      setActiveSection(currentCat.sections[0].title);
    }
  }, [selectedCategory]);

  // Calculate total progress
  const calculateTotalProgress = () => {
    if (!currentCategory) return 0;
    
    let totalItems = 0;
    let completedCount = 0;

    currentCategory.sections.forEach(section => {
      section.topics.forEach(topic => {
        if (topic.topics) {
          totalItems += topic.topics.length;
          completedCount += topic.topics.filter(t => completedItems[t.id]).length;
        }
        if (topic.resources) {
          totalItems += topic.resources.length;
          completedCount += topic.resources.filter(r => completedItems[r.id]).length;
        }
        if (topic.videos) {
          totalItems += topic.videos.length;
          completedCount += topic.videos.filter(v => completedItems[v.id]).length;
        }
      });
    });

    return totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
  };

  // Load progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('mern-checkpoint2-progress');
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCompletedItems(parsed);
        console.log('Loaded MERN progress:', parsed);
      }
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
    }
  }, []);

  // Save progress and calculate score
  useEffect(() => {
    if (Object.keys(completedItems).length > 0) {
      try {
        // Save progress to localStorage
        localStorage.setItem('mern-checkpoint2-progress', JSON.stringify(completedItems));
        console.log('Saved MERN progress:', completedItems);
        
        // Calculate and update score
        const newScore = calculateTotalProgress();
        setScore(newScore);

        // Show confetti when score reaches 100
        if (newScore === 100 && !showConfetti) {
          setShowConfetti(true);
          setAchievements(prev => [...prev, 'Completed All Topics!']);
        }
      } catch (error) {
        console.error('Error saving progress to localStorage:', error);
      }
    }
  }, [completedItems, showConfetti]);

  const handleItemComplete = (itemId: string) => {
    setCompletedItems(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      return newState;
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
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
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
                            {item.id === 'project-description' ? (
                              <div className="space-y-3 text-base text-gray-200">
                                <div className="font-bold text-lg mb-2">🎯 Project Challenge: Excuse Generator</div>
                                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
                                  <div className="flex items-center gap-2 text-red-400 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    Submission Deadline
                                  </div>
                                  <div className="text-white mt-1">8th June 2025, 11:59 PM</div>
                                </div>
                                <div className="mb-2">🚀 <b>Your Mission:</b> Build a quirky React app that generates hilarious excuses with just one click. Make it your own creative playground!</div>
                                <div className="mb-1">✨ <b>Key Features:</b></div>
                                <ul className="list-disc list-inside ml-4 mb-2">
                                  <li>One-click excuse generation</li>
                                  <li>Dynamic filtering by situation (college, dev-life, deadlines)</li>
                                  <li>Emoji-powered drama</li>
                                  <li>Easy copy-to-clipboard functionality</li>
                                </ul>
                                <div className="mb-1">💡 <b>Implementation Ideas:</b></div>
                                <ul className="list-disc list-inside ml-4 mb-2">
                                  <li>Store excuses in a JavaScript array</li>
                                  <li>Or fetch from a fun excuse API</li>
                                  <li>Add your own creative twist!</li>
                                </ul>
                                <div className="mb-1">🎨 <b>Design Freedom:</b></div>
                                <ul className="list-disc list-inside ml-4 mb-2">
                                  <li>Go wild with the UI</li>
                                  <li>Add animations</li>
                                  <li>Make it as dramatic as you want</li>
                                  <li>Bonus points for extra chaos! 😉</li>
                                </ul>
                                <div className="mt-2">😊 <b>Remember:</b> This is your chance to have fun while learning React!</div>
                              </div>
                            ) : (
                              <span className={`${completedItems[item.id] ? 'text-green-400 line-through' : 'text-gray-300'} transition-all group-hover:text-white`}>{item.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {topic.resources && (
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Resources:</h4>
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
                      <h4 className="text-lg font-semibold text-orange-400 mb-3">Video Tutorials:</h4>
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
                                className={`flex items-center ${completedItems[video.id] ? 'text-green-400 line-through' : 'text-orange-400'} hover:text-orange-300 transition-colors`}
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
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
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
                    stroke="rgba(249,115,22,0.1)" 
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
                      <stop offset="100%" stopColor="#ea580c" />
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
              MERN Stack Track Checkpoint 2
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-2"
            >
              React & Redux (Weeks 3-4)
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
              className="relative h-14 w-14 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-900/30"
            >
              {/* Circular rings around progress indicator */}
              <div className="absolute inset-0 rounded-full border border-orange-400/20 scale-[1.2]"></div>
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-300/10 scale-[1.4] animate-spin" style={{ animationDuration: '10s' }}></div>
              <span className="text-white font-bold">{score}</span>
            </motion.div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Total Progress</span>
            <span>{score}%</span>
          </div>
          <div className="h-2.5 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
            />
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
                            : 'bg-gradient-to-r from-orange-500 to-orange-600'
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

export default MernCheckpoint2; 