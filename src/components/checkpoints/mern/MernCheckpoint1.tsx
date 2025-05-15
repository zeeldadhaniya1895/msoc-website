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
    completed: boolean;
  }[];
}

interface Section {
  title: string;
  icon: string;
  color: string;
  topics: Topic[];
}

const sections: Section[] = [
  {
    title: "HTML Fundamentals",
    icon: "📝",
    color: "#f97316",
    topics: [
      {
        id: "html-1",
        title: "Days 1-2: HTML Basics",
        completed: false,
        topics: [
          { id: "html-1-1", text: "Semantic tags", completed: false },
          { id: "html-1-2", text: "Document structure", completed: false },
          { id: "html-1-3", text: "Forms", completed: false },
          { id: "html-1-4", text: "Tables", completed: false }
        ],
        resources: [
          {
            id: "html-1-r1",
            title: "MDN: HTML basics",
            link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
            completed: false
          },
          {
            id: "html-1-r2",
            title: "freeCodeCamp: Responsive Web Design Certification",
            link: "https://www.freecodecamp.org/learn/responsive-web-design/",
            completed: false
          }
        ],
        videos: [
          {
            id: "html-1-v1",
            title: "HTML Full Course - Build a Website Tutorial",
            link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            duration: "2 hr",
            completed: false
          },
          {
            id: "html-1-v2",
            title: "Learn HTML in 1 Hour",
            link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
            duration: "1 hr",
            completed: false
          }
        ]
      }
    ]
  },
  {
    title: "CSS Layout & Styling",
    icon: "🎨",
    color: "#ea580c",
    topics: [
      {
        id: "css-1",
        title: "Days 3-4: CSS Fundamentals",
        completed: false,
        topics: [
          { id: "css-1-1", text: "Box model", completed: false },
          { id: "css-1-2", text: "Selectors", completed: false },
          { id: "css-1-3", text: "Flexbox", completed: false },
          { id: "css-1-4", text: "CSS Grid", completed: false },
          { id: "css-1-5", text: "Responsive design (media queries)", completed: false }
        ],
        resources: [
          {
            id: "css-1-r1",
            title: "MDN: CSS fundamentals",
            link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
            completed: false
          },
          {
            id: "css-1-r2",
            title: "CSS Tricks: A Complete Guide to Flexbox",
            link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            completed: false
          },
          {
            id: "css-1-r3",
            title: "CSS Tricks: A Complete Guide to Grid",
            link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
            completed: false
          }
        ],
        videos: [
          {
            id: "css-1-v1",
            title: "CSS Crash Course For Beginners",
            link: "https://www.youtube.com/watch?v=yfoY53QXEnI",
            duration: "1.5 hr",
            completed: false
          },
          {
            id: "css-1-v2",
            title: "Flexbox in 15 Minutes",
            link: "https://www.youtube.com/watch?v=fYq5PXgSsbE",
            duration: "15 min",
            completed: false
          },
          {
            id: "css-1-v3",
            title: "CSS Grid Crash Course",
            link: "https://www.youtube.com/watch?v=0xMQfnTU6oo",
            duration: "1 hr",
            completed: false
          }
        ]
      }
    ]
  },
  {
    title: "JavaScript Core",
    icon: "⚡",
    color: "#f59e0b",
    topics: [
      {
        id: "js-1",
        title: "Days 5-6: JavaScript Basics",
        completed: false,
        topics: [
          { id: "js-1-1", text: "Variables", completed: false },
          { id: "js-1-2", text: "Data types", completed: false },
          { id: "js-1-3", text: "Functions", completed: false },
          { id: "js-1-4", text: "Scope", completed: false },
          { id: "js-1-5", text: "ES6+ syntax (arrow functions, destructuring)", completed: false }
        ],
        resources: [
          {
            id: "js-1-r1",
            title: "JavaScript.info: The Modern JavaScript Tutorial",
            link: "https://javascript.info/",
            completed: false
          },
          {
            id: "js-1-r2",
            title: "MDN: JavaScript guide",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            completed: false
          }
        ],
        videos: [
          {
            id: "js-1-v1",
            title: "JavaScript Full Course for Beginners",
            link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            duration: "4 hr",
            completed: false
          },
          {
            id: "js-1-v2",
            title: "JavaScript in 1 Hour",
            link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            duration: "1 hr",
            completed: false
          }
        ]
      },
      {
        id: "js-2",
        title: "Days 7-8: Advanced JavaScript",
        completed: false,
        topics: [
          { id: "js-2-1", text: "Arrays & objects", completed: false },
          { id: "js-2-2", text: "Loops", completed: false },
          { id: "js-2-3", text: "Higher-order array methods (map, filter, reduce)", completed: false }
        ],
        resources: [
          {
            id: "js-2-r1",
            title: "freeCodeCamp: JavaScript Algorithms and Data Structures",
            link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript",
            completed: false
          }
        ],
        videos: [
          {
            id: "js-2-v1",
            title: "JavaScript Array Methods Tutorial",
            link: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
            duration: "10 min",
            completed: false
          },
          {
            id: "js-2-v2",
            title: "An encounter with objects",
            link: "https://youtu.be/napDjGFjHR0",
            duration: "10 min",
            completed: false
          }
        ]
      }
    ]
  },
  {
    title: "DOM & Events",
    icon: "🎯",
    color: "#d97706",
    topics: [
      {
        id: "dom-1",
        title: "Days 9-10: DOM Manipulation",
        completed: false,
        topics: [
          { id: "dom-1-1", text: "DOM traversal/manipulation", completed: false },
          { id: "dom-1-2", text: "Event listeners", completed: false },
          { id: "dom-1-3", text: "Form handling", completed: false }
        ],
        resources: [
          {
            id: "dom-1-r1",
            title: "MDN: DOM Introduction",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
            completed: false
          },
          {
            id: "dom-1-r2",
            title: "JavaScript.info: Document and events",
            link: "https://javascript.info/document",
            completed: false
          }
        ],
        videos: [
          {
            id: "dom-1-v1",
            title: "JavaScript DOM Tutorial",
            link: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
            duration: "1 hr",
            completed: false
          },
          {
            id: "dom-1-v2",
            title: "DOM Crash Course",
            link: "https://www.youtube.com/watch?v=wiozYyXQEVk",
            duration: "16 min",
            completed: false
          }
        ]
      }
    ]
  },
  {
    title: "Fun Zone",
    icon: "🎮",
    color: "#c2410c",
    topics: [
      {
        id: "fun-1",
        title: "HTML & CSS Games",
        completed: false,
        topics: [
          { id: "fun-1-1", text: "Flexbox Froggy", completed: false },
          { id: "fun-1-2", text: "CSS Grid Garden", completed: false }
        ],
        resources: [
          {
            id: "fun-1-r1",
            title: "Flexbox Froggy",
            link: "https://flexboxfroggy.com/",
            description: "Master Flexbox by placing frogs on lilypads",
            completed: false
          },
          {
            id: "fun-1-r2",
            title: "CSS Grid Garden",
            link: "https://cssgridgarden.com/",
            description: "Learn Grid Layout through watering carrots",
            completed: false
          }
        ]
      },
      {
        id: "fun-2",
        title: "JavaScript & DOM Games",
        completed: false,
        topics: [
          { id: "fun-2-1", text: "JavaScript 30", completed: false },
          { id: "fun-2-2", text: "CodeWars", completed: false },
          { id: "fun-2-3", text: "CodePen Challenges", completed: false }
        ],
        resources: [
          {
            id: "fun-2-r1",
            title: "JavaScript 30",
            link: "https://javascript30.com/",
            description: "Build 30 real projects (free)",
            completed: false
          },
          {
            id: "fun-2-r2",
            title: "CodeWars",
            link: "https://www.codewars.com/",
            description: "Practice real-world problems",
            completed: false
          },
          {
            id: "fun-2-r3",
            title: "CodePen",
            link: "https://codepen.io/",
            description: "Funny games for DOM",
            completed: false
          }
        ]
      }
    ]
  }
];

const MernCheckpoint1 = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("HTML Fundamentals");
  const [score, setScore] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<{[key: string]: boolean}>({});
  
  // Load progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('mern-checkpoint1-progress');
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCompletedItems(parsed);
        console.log('Loaded MERN progress:', parsed);
      }
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    // Only save if completedItems is not empty
    if (Object.keys(completedItems).length > 0) {
      try {
        // Save progress to localStorage
        const dataToSave = JSON.stringify(completedItems);
        localStorage.setItem('mern-checkpoint1-progress', dataToSave);
        console.log('Saved MERN progress:', completedItems);
        
        // Calculate score
        const totalItems = sections.reduce((acc, section) => {
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
          setAchievements(prev => [...prev, "Completed All Topics!"]);
        }
      } catch (error) {
        console.error('Error saving progress to localStorage:', error);
      }
    }
  }, [completedItems, showConfetti]);

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

    return Math.round((completedCount / totalItems) * 100);
  };

  const renderContent = () => {
    const section = sections.find(s => s.title === activeSection);
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
                      <stop offset="0%" stopColor="#f97316" />
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
              MERN Stack Track Checkpoint 1
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-2"
            >
              Frontend Fundamentals (Weeks 1-2)
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Additional Decorative Circles - These will appear between grid elements */}
          <div className="absolute left-1/4 top-40 w-32 h-32 rounded-full border border-orange-500/10 blur-[1px] -z-10" />
          <div className="absolute right-1/3 bottom-1/4 w-20 h-20 rounded-full border-2 border-orange-400/15 blur-[1px] -z-10" />
          <div className="absolute left-2/3 top-1/4 w-24 h-24 rounded-full border-2 border-dashed border-orange-600/10 -z-10" />

          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-orange-900/20 shadow-xl sticky top-24"
            >
              {sections.map((section) => (
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

export default MernCheckpoint1; 