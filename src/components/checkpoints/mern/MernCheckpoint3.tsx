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
    title: "Node.js & Database",
    icon: "⚡",
    color: "#f97316",
    topics: [
      {
        id: "node-1",
        title: "Node.js Basics",
        completed: false,
        topics: [
          { id: "node-1-1", text: "What is Node.js?", completed: false },
          { id: "node-1-2", text: "Modules, require, exports", completed: false },
          { id: "node-1-3", text: "Built-in modules (fs, http, path)", completed: false }
        ],
        resources: [
          {
            id: "node-1-r1",
            title: "Node.js Official Docs",
            link: "https://nodejs.org/en/docs",
            completed: false
          },
          {
            id: "node-1-r2",
            title: "freeCodeCamp Node.js Course",
            link: "https://www.youtube.com/watch?v=RLtyhwFtXQA",
            completed: false
          }
        ],
        videos: [
          {
            id: "node-1-v1",
            title: "Node.js Full Course for Beginners",
            link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
            duration: "8 hr",
            completed: false
          }
        ]
      },
      {
        id: "express-1",
        title: "Express.js Fundamentals",
        completed: false,
        topics: [
          { id: "express-1-1", text: "Setting up Express", completed: false },
          { id: "express-1-2", text: "Middleware", completed: false },
          { id: "express-1-3", text: "Routing", completed: false }
        ],
        resources: [
          {
            id: "express-1-r1",
            title: "Express Docs: Getting Started",
            link: "https://expressjs.com/en/starter/installing.html",
            completed: false
          },
          {
            id: "express-1-r2",
            title: "Traversy Media Express.js Crash Course",
            link: "https://www.youtube.com/watch?v=L72fhGm1tfE",
            completed: false
          }
        ],
        videos: [
          {
            id: "express-1-v1",
            title: "Express Tutorial for Beginners",
            link: "https://www.youtube.com/watch?v=G8uL0lFFoN0",
            duration: "1 hr",
            completed: false
          }
        ]
      },
      {
        id: "mongo-1",
        title: "MongoDB & Mongoose",
        completed: false,
        topics: [
          { id: "mongo-1-1", text: "NoSQL fundamentals", completed: false },
          { id: "mongo-1-2", text: "Schema design", completed: false },
          { id: "mongo-1-3", text: "Models", completed: false },
          { id: "mongo-1-4", text: "Querying", completed: false },
          { id: "mongo-1-5", text: "Validation", completed: false }
        ],
        resources: [
          {
            id: "mongo-1-r1",
            title: "CodeAcademy MongoDB Course",
            link: "https://www.codecademy.com/learn/learn-mongodb",
            completed: false
          },
          {
            id: "mongo-1-r2",
            title: "MongoDB University: M001: MongoDB Basics",
            link: "https://university.mongodb.com/courses/M001/about",
            completed: false
          },
          {
            id: "mongo-1-r3",
            title: "Mongoose Docs: Getting Started",
            link: "https://university.mongodb.com/courses/M001/about",
            completed: false
          }
        ],
        videos: [
          {
            id: "mongo-1-v1",
            title: "Mongoose Playlist",
            link: "https://youtube.com/playlist?list=PLC3y8-rFHvwh11bWtwm3_qKvo46uDmaal&feature=shared",
            duration: "35 mins",
            completed: false
          }
        ]
      }
    ]
  },
  {
    title: "CRUD & Authentication",
    icon: "🔐",
    color: "#ea580c",
    topics: [
      {
        id: "crud-1",
        title: "CRUD with Validation",
        completed: false,
        topics: [
          { id: "crud-1-1", text: "RESTful routes (GET, POST, PUT, DELETE)", completed: false },
          { id: "crud-1-2", text: "Data validation (Joi or express-validator)", completed: false },
          { id: "crud-1-3", text: "API routing and response handling", completed: false }
        ],
        resources: [
          {
            id: "crud-1-r1",
            title: "MDN – Express Routing",
            link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes",
            completed: false
          },
          {
            id: "crud-1-r2",
            title: "Joi Docs: API reference",
            link: "https://joi.dev/api/",
            completed: false
          },
          {
            id: "crud-1-r3",
            title: "express-validator: Getting Started",
            link: "https://express-validator.github.io/docs/",
            completed: false
          }
        ]
      },
      {
        id: "auth-1",
        title: "Authentication (JWT)",
        completed: false,
        topics: [
          { id: "auth-1-1", text: "User signup/login", completed: false },
          { id: "auth-1-2", text: "Password hashing (bcrypt)", completed: false },
          { id: "auth-1-3", text: "Token issuance & verification", completed: false },
          { id: "auth-1-4", text: "Secure cookies/headers", completed: false }
        ],
        resources: [
          {
            id: "auth-1-r1",
            title: "freeCodeCamp: Securing Node.js RESTful APIs with JWT",
            link: "https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/",
            completed: false
          },
          {
            id: "auth-1-r2",
            title: "Auth Tutorial: DigitalOcean – Node.js JWT auth",
            link: "https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs",
            completed: false
          }
        ]
      },
      {
        id: "auth-2",
        title: "Authorization & Roles",
        completed: false,
        topics: [
          { id: "auth-2-1", text: "Role-based access control (RBAC)", completed: false },
          { id: "auth-2-2", text: "Protected routes", completed: false },
          { id: "auth-2-3", text: "Middleware", completed: false }
        ],
        resources: [
          {
            id: "auth-2-r1",
            title: "Auth0 Blog: Node.js Role-Based Authorization",
            link: "https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/",
            completed: false
          }
        ]
      }
    ]
  }
];

const MernCheckpoint3 = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("Node.js & Database");
  const [score, setScore] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<{[key: string]: boolean}>({});
  
  // Load progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('mern-checkpoint3-progress');
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
        localStorage.setItem('mern-checkpoint3-progress', dataToSave);
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
              MERN Stack Track Checkpoint 3
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-2"
            >
              Backend & Authentication (Weeks 5-6)
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

export default MernCheckpoint3; 