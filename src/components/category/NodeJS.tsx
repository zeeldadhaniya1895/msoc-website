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
    title: "Week 1: Node.js, npm & JavaScript Essentials",
    quote: "Any application that can be written in JavaScript, will eventually be written in JavaScript.",
    author: "Jeff Atwood",
    description: "Foundation week to understand web basics and setup Node.js environment",
    checklist: [
      "Learn basic knowledge of HTTP, SSL certificates, CORS, Hosting, DNS",
      "Understand how the internet works",
      "Set up Node.js and npm",
      "Install and use third-party packages (e.g., figlet)",
      "Understand package.json and scripts",
      "Learn JavaScript essentials (async/await, arrow functions, destructuring)",
      "Explore Node.js core modules: fs, path, os, events, http"
    ],
    resources: [
      {
        title: "Node.js Installation",
        description: "Official Node.js download page",
        link: "https://nodejs.org/en/"
      },
      {
        title: "Node.js Documentation",
        description: "Complete and official Node.js documentation",
        link: "https://nodejs.org/docs/latest/api/"
      },
      {
        title: "Node.js Basics",
        description: "Comprehensive video tutorial",
        link: "https://www.youtube.com/watch?v=BLl32FvcdVM"
      }
    ],
    progressTip: "Create a small project that uses different core modules of Node.js (like fs to read files, http to create a simple server). Experiment with package.json scripts."
  },
  {
    title: "Week 2: Express.js & Databases",
    quote: "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
    author: "David Leinweber",
    description: "Learn to build web servers with Express and understand database concepts",
    checklist: [
      "Learn Express.js basics and routing",
      "Understand .env files, middleware, controllers, routers, services",
      "Design RESTful APIs",
      "Learn about request/response structure",
      "Use Postman/Insomnia for API testing",
      "Understand SQL and NoSQL databases",
      "Learn about database normalization and schema design",
      "Practice designing efficient schemas for different scenarios"
    ],
    resources: [
      {
        title: "Express.js Basics",
        description: "Video tutorial on Express fundamentals",
        link: "https://www.youtube.com/watch?v=7H_QH9nipNs"
      },
      {
        title: "REST API Documentation",
        description: "GitHub's guide to REST API design",
        link: "https://docs.github.com/en/rest"
      },
      {
        title: "MongoDB Tutorial",
        description: "Complete MongoDB course for beginners in Hindi",
        link: "https://www.youtube.com/watch?v=W1Kttu53qTg"
      }
    ],
    progressTip: "Build a simple CRUD API with Express.js. Design database schemas for at least two different applications like a blog platform and an e-commerce store."
  },
  {
    title: "Week 3: Express.js & Authentication",
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    description: "Dive deeper into Express.js and implement authentication systems",
    checklist: [
      "Set up MongoDB locally or using Atlas",
      "Integrate MongoDB with Node.js using Mongoose",
      "Implement CRUD operations with MongoDB",
      "Learn about authentication concepts and JWT",
      "Understand different types of authentication (stateful vs stateless)",
      "Implement cookie-based authentication",
      "Implement token-based authentication",
      "Explore Google OAuth for authentication"
    ],
    resources: [
      {
        title: "Node.js, Express and MongoDB Complete Course",
        description: "All-in-one tutorial for backend development",
        link: "https://www.youtube.com/watch?v=W1Kttu53qTg"
      },
      {
        title: "JWT Authentication Tutorial",
        description: "Step-by-step guide to implementing JWT auth",
        link: "https://www.youtube.com/watch?v=mbsmsi7l3r4"
      }
    ],
    progressTip: "Create an authentication system that supports both JWT and session-based auth. Secure your CRUD API from Week 2 with this authentication system."
  },
  {
    title: "Week 4: Explore Various NPM Packages",
    quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
    author: "Doug Linder",
    description: "Discover and implement common npm packages for various functionalities",
    checklist: [
      "Learn file upload packages: Multer, Cloudinary, Sharp, Express-FileUpload",
      "Explore email & communication: Nodemailer, Mailgun-js/SendGrid, Twilio",
      "Master authentication & security packages: bcryptjs, jsonwebtoken, cors, helmet, express-rate-limit, dotenv",
      "Implement backend utilities: axios, uuid, mongoose, express-validator, joi, dayjs/moment"
    ],
    resources: [
      {
        title: "NPM Website",
        description: "Browse and search for packages",
        link: "https://www.npmjs.com/"
      },
      {
        title: "File Upload with Multer Tutorial",
        description: "Learn how to handle file uploads in Node.js",
        link: "https://www.youtube.com/watch?v=wIOpe8S2Mk8"
      }
    ],
    progressTip: "Create a mini-project that combines multiple packages. For example, build an API that handles file uploads, sends email notifications, and implements rate limiting."
  },
  {
    title: "Week 5: Deployment and Scaling",
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.",
    author: "Rick Cook",
    description: "Learn to deploy Node.js applications and optimize for scale",
    checklist: [
      "Deploy Node.js apps on Render/Vercel/AWS",
      "Learn about Streams to serve large amounts of data",
      "Understand Node.js Clusters for parallel processing",
      "Explore Nginx as a reverse proxy",
      "Set up CI/CD pipelines for automated deployment",
      "Implement environment-specific configurations"
    ],
    resources: [
      {
        title: "Deploying Node.js to Production",
        description: "Best practices for Node.js deployment",
        link: "https://www.youtube.com/watch?v=oNlMrpnUSFE"
      },
      {
        title: "Node.js Scaling Techniques",
        description: "Learn how to scale Node.js applications",
        link: "https://nodejs.org/en/docs/guides/dont-block-the-event-loop"
      }
    ],
    progressTip: "Deploy your project from previous weeks to a cloud platform. Configure environment variables and test that everything works in production."
  },
  {
    title: "Week 6: Advanced Topics & Final Learning",
    quote: "It's not a bug – it's an undocumented feature.",
    author: "Anonymous",
    description: "Pursue specialized interests and advanced Node.js concepts",
    checklist: [
      "Learn real-time communication with Socket.io or WebSockets",
      "Explore WebRTC for peer-to-peer communication",
      "Study caching techniques with Redis or Memcached",
      "Discover GraphQL as an alternative to REST",
      "Learn about microservices architecture",
      "Explore serverless functions",
      "Study performance optimization techniques"
    ],
    resources: [
      {
        title: "Socket.io Tutorial",
        description: "Building real-time applications",
        link: "https://socket.io/get-started/"
      },
      {
        title: "Node.js Complete Course: Basics to Scaling",
        description: "Comprehensive Node.js learning path",
        link: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&feature=shared"
      }
    ],
    progressTip: "Choose one advanced topic that interests you the most and build a small proof-of-concept application to demonstrate your understanding."
  },
  {
    title: "Weeks 7-9: Development Phase",
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    description: "Apply all your knowledge to build a complete project",
    checklist: [
      "Choose a project idea that applies concepts from the learning phase",
      "Create a backend-focused application (frontend is optional)",
      "Build a RESTful API with proper authentication and authorization",
      "Implement data validation and error handling",
      "Use appropriate npm packages to enhance functionality",
      "Deploy your application to a cloud platform",
      "Document your API with tools like Swagger or Postman",
      "Implement testing for critical components"
    ],
    resources: [
      {
        title: "Project Ideas for Node.js Developers",
        description: "Inspiration for backend projects",
        link: "https://github.com/florinpop17/app-ideas"
      },
      {
        title: "Node.js Best Practices",
        description: "Guidelines for writing production-ready code",
        link: "https://github.com/goldbergyoni/nodebestpractices"
      }
    ],
    progressTip: "Focus on completing one feature at a time. Start with the core functionality, then add authentication, validation, etc. Deploy early and often to catch issues."
  }
];

// Node.js libraries and resources
const recommendedLibraries = [
  { name: "Express.js", description: "Fast, unopinionated, minimalist web framework", link: "https://expressjs.com/" },
  { name: "Mongoose", description: "MongoDB object modeling for Node.js", link: "https://mongoosejs.com/" },
  { name: "JWT", description: "JSON Web Tokens for secure authentication", link: "https://jwt.io/" },
  { name: "Nodemailer", description: "Send emails from your application", link: "https://nodemailer.com/" },
  { name: "Multer", description: "Middleware for handling multipart/form-data", link: "https://github.com/expressjs/multer" },
  { name: "Socket.io", description: "Real-time bidirectional event-based communication", link: "https://socket.io/" },
  { name: "Passport.js", description: "Authentication middleware for Node.js", link: "https://www.passportjs.org/" },
  { name: "Axios", description: "Promise-based HTTP client for browser and Node.js", link: "https://axios-http.com/" },
  { name: "Joi", description: "Schema validation for JavaScript objects", link: "https://joi.dev/" },
  { name: "PM2", description: "Production process manager for Node.js", link: "https://pm2.keymetrics.io/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('nodejs-progress');
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
        localStorage.setItem('nodejs-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900/20 via-gray-950 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-green-500/10"
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
              className="absolute"
              style={{
                top: '-10px',
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                background: `hsl(${Math.random() * 80 + 100}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
          >
            MSTC SUMMER OF CODE 2025
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Node.js Backend Development
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
              <span className="text-green-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
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
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-12 border border-gray-800 shadow-xl hover:shadow-green-900/20 transition-all duration-300"
          >
            <p className="text-white/80 mb-4">
              This roadmap is designed to take you from a beginner to a proficient Node.js developer. Learn Node.js in 6 weeks (Learning Phase) and build a project in 3 weeks (Development Phase). You'll master essential backend development concepts, including Express.js, RESTful APIs, authentication, databases, and deployment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold hover:text-green-300 transition-colors bg-green-500/20 hover:bg-green-500/30 rounded-lg p-4 border border-green-500/30 w-full sm:w-auto text-center group">
                <span className="relative">
                  Node.js Official Documentation
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1Q2eUqtj3dY0yyRZCwWCcaBF5EZqo9es8/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-semibold hover:text-blue-300 transition-colors rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto group"
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

          <div className="space-y-6 relative before:absolute before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center shadow-glow z-10">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
                  <div 
                    className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">{week.title}</h3>
                      
                      {/* Week progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-cyan-400"
                            style={{ width: `${getWeekProgress(weekIndex)}%` }}
                          />
                        </div>
                        <span className="text-gray-400">{getWeekProgress(weekIndex)}%</span>
                      </div>
                    </div>
                    <button className="text-white/70 hover:text-white p-1 rounded-full transition-colors">
                      {openIndex === weekIndex ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                  </div>

                  {openIndex === weekIndex && (
                    <div className="p-5">
                      {week.description && (
                        <p className="text-gray-400 mb-4 italic">{week.description}</p>
                      )}

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                        <p className="text-blue-300 italic mb-1">"{week.quote}"</p>
                        <p className="text-right text-gray-400 text-sm">- {week.author}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2 text-white">Checklist:</h4>
                        <div className="space-y-2">
                          {week.checklist.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2">
                              <div className="flex-shrink-0 mt-1">
                                <input 
                                  type="checkbox" 
                                  checked={completedItems[weekIndex]?.[itemIndex] || false}
                                  onChange={() => toggleCheckItem(weekIndex, itemIndex)}
                                  className="h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                              </div>
                              <span className={`${completedItems[weekIndex]?.[itemIndex] ? 'line-through text-gray-500' : 'text-white/80'}`}>
                                {item}
                              </span>
                            </div>
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
                              className="block bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                            >
                              <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{resource.title}</span>
                                  {resource.description && (
                                    <p className="text-sm text-gray-400">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-800/30">
                        <h4 className="font-semibold mb-2 text-purple-300">Progress Tip:</h4>
                        <p className="text-white/70">{week.progressTip}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">Libraries to Explore</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedLibraries.map((lib, index) => (
                <a 
                  key={index}
                  href={lib.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{lib.name}</span>
                  <p className="text-sm text-gray-400">{lib.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your Node.js Journey</h2>
            <p className="text-white/80 mb-2">
              This roadmap is just the beginning! There are many possibilities with Node.js - API servers, websocket applications, CLI tools, and more.
            </p>
            <p className="text-white/80 mb-2">
              Remember, the key to success in any large backend project lies in good architecture, testing, and documentation.
            </p>
            <p className="text-white/80">
              Keep learning, keep building, and keep improving your skills!
            </p>
          </div>
        </div>
      </div>

      {/* Custom cursor effect */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: var(--opacity); }
          100% { transform: scale(1.2); opacity: var(--opacity) * 0.8; }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
} 