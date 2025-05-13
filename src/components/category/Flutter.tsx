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
    title: "Phase 1: Basics of Programming & Dart",
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
    description: "Learn the Dart programming language fundamentals",
    checklist: [
      "Learn Dart variables and data types",
      "Master conditionals and loops",
      "Understand functions and their implementation",
      "Create classes and objects (OOP concepts)",
      "Work with Lists, Maps, and Sets",
      "Implement null safety features",
      "Learn Futures & async/await for asynchronous programming"
    ],
    resources: [
      {
        title: "Dart Official Documentation",
        description: "Comprehensive guide to Dart language",
        link: "https://dart.dev/language"
      },
      {
        title: "Net Ninja - Dart Crash Course",
        description: "Video tutorial series for Dart",
        link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVGY3ppchN9kIauln8IiEh"
      }
    ],
    progressTip: "Practice by building CLI programs in Dart such as a Calculator, Todo App, or Quiz App to reinforce your understanding of core concepts."
  },
  {
    title: "Phase 2: Flutter Fundamentals",
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    description: "Master the core concepts of Flutter framework",
    checklist: [
      "Understand different widget types (Stateless vs Stateful)",
      "Implement basic widgets: MaterialApp, Scaffold, AppBar",
      "Use navigation methods (push, pop)",
      "Create layouts with Row, Column, Stack, ListView",
      "Implement input widgets: TextField, Button, Switch, Checkbox",
      "Add Image and Icon widgets, manage assets",
      "Learn state management using setState"
    ],
    resources: [
      {
        title: "Net Ninja - Flutter for Beginners",
        description: "Comprehensive tutorial series on Flutter basics",
        link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9giLVXCHSQmWqlHc9BLXdVx"
      },
      {
        title: "Flutter Official Documentation",
        description: "Complete reference for Flutter development",
        link: "https://flutter.dev/docs"
      }
    ],
    progressTip: "Build mini projects like a Quiz App or Task Tracker to practice implementing Flutter widgets and state management."
  },
  {
    title: "Phase 3: Intermediate Concepts",
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    description: "Dive deeper into more advanced Flutter features",
    checklist: [
      "Implement navigation with named routes",
      "Create custom themes and add custom fonts",
      "Build responsive designs for different screen sizes",
      "Work with forms and implement validation",
      "Use local storage with shared_preferences and hive",
      "Make API calls using http package or dio",
      "Parse JSON data efficiently",
      "Create basic animations"
    ],
    resources: [
      {
        title: "30 Days 30 Flutter Concepts",
        description: "Detailed tutorials covering intermediate Flutter topics",
        link: "https://www.youtube.com/playlist?list=PL9n0l8rSshSmiu8ddKebcKCltDfppDkEd"
      },
      {
        title: "Flutter Cookbook",
        description: "Solutions to common Flutter problems",
        link: "https://flutter.dev/docs/cookbook"
      }
    ],
    progressTip: "Create practical applications like a Weather App using OpenWeatherMap API, a Notes App with local storage, or an Expense Tracker to apply these concepts."
  },
  {
    title: "Phase 4: Advanced Flutter Development",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    description: "Master advanced features and backend integration",
    checklist: [
      "Integrate Firebase services (Auth, Firestore, Storage)",
      "Implement SQLite for local database storage",
      "Create and consume REST APIs",
      "Add push notifications using Firebase",
      "Implement background tasks for better performance",
      "Learn advanced state management solutions"
    ],
    resources: [
      {
        title: "Flutter Firebase Tutorial Series",
        description: "Comprehensive guide to Firebase integration",
        link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGeA6_i1WOallrMbTzZtBcp8"
      },
      {
        title: "Flutter Push Notification Guide",
        description: "Step-by-step setup for Firebase notifications",
        link: "https://medium.com/@arunb9525/setting-up-firebase-notifications-in-flutter-a-step-by-step-guide-be50207d54cd"
      }
    ],
    progressTip: "Build more complex applications like a Chat App with Firebase, an Authentication App, or a Task Management App with drag & drop functionality."
  },
  {
    title: "Optional Phase: Cross-Platform Mastery & Freelancing",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    description: "Expand your Flutter skills to multiple platforms and professional development",
    checklist: [
      "Learn Flutter Web development basics",
      "Explore Flutter Desktop application development",
      "Create a portfolio of Flutter applications",
      "Set up profiles on freelancing platforms (Upwork/Fiverr)",
      "Contribute to Flutter open-source projects",
      "Stay updated with Flutter's latest features"
    ],
    resources: [
      {
        title: "Flutter Web Documentation",
        description: "Official guide to Flutter web development",
        link: "https://flutter.dev/docs/development/ui/navigation/web"
      },
      {
        title: "Flutter Desktop Documentation",
        description: "Guidance for building desktop applications",
        link: "https://flutter.dev/desktop"
      }
    ],
    progressTip: "Focus on building cross-platform applications that demonstrate your ability to create consistent experiences across different devices and platforms."
  }
];

// Flutter packages and resources
const recommendedPackages = [
  { name: "Provider", description: "Simple state management solution", link: "https://pub.dev/packages/provider" },
  { name: "Bloc / Flutter Bloc", description: "Advanced state management using the BLoC pattern", link: "https://pub.dev/packages/flutter_bloc" },
  { name: "GetX", description: "Lightweight state management, routing, and dependency injection", link: "https://pub.dev/packages/get" },
  { name: "Dio", description: "HTTP client for Dart/Flutter", link: "https://pub.dev/packages/dio" },
  { name: "Flutter Secure Storage", description: "Store data in secure storage", link: "https://pub.dev/packages/flutter_secure_storage" },
  { name: "Shared Preferences", description: "Persistent storage for simple data", link: "https://pub.dev/packages/shared_preferences" },
  { name: "Lottie", description: "Parse and render After Effects animations", link: "https://pub.dev/packages/lottie" },
  { name: "Flutter SVG", description: "SVG rendering library", link: "https://pub.dev/packages/flutter_svg" },
  { name: "Firebase", description: "Flutter plugins for Firebase services", link: "https://firebase.flutter.dev/docs/overview/" },
  { name: "Hive", description: "Lightweight and fast key-value database", link: "https://pub.dev/packages/hive" }
];

// Bonus tips for college students
const bonusTips = [
  { name: "Comprehensive Flutter Tutorial", description: "Vandad Flutter Playlist - in-depth Flutter learning", link: "https://www.youtube.com/playlist?list=PL6yRaaP0WPkVtoeNIGqILtRAgd3h2CNpT" },
  { name: "Join Flutter Communities", description: "Network with other developers through Discord and Telegram groups", link: "https://flutter.dev/community" },
  { name: "Open Source Contribution", description: "Contribute to Flutter open-source projects", link: "https://github.com/topics/flutter" },
  { name: "Flutter Events", description: "Attend Flutter Festivals & Google Developer Student Clubs", link: "https://events.flutter.dev/" },
  { name: "Build Portfolio", description: "Create a Flutter-based portfolio website to showcase your work", link: "https://flutter.dev/showcase" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('flutter-progress');
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
        localStorage.setItem('flutter-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-900/20 via-gray-950 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-cyan-500/10"
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
                background: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Flutter Development Roadmap
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Master Cross-Platform App Development
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
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
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
            className="bg-gray-900/70 p-6 rounded-xl mb-12 border border-gray-800"
          >
            <p className="text-white/80 mb-4">
              This roadmap will guide you through learning Flutter, Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. You'll start with Dart programming basics and progress through fundamental, intermediate, and advanced Flutter concepts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://roadmap.sh/flutter" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors bg-blue-500/20 rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto text-center">
                Flutter Developer Roadmap | roadmap.sh <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1fDTBiN3U_sEgZk2cdATlWWYY4sK3NH-b/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold hover:text-green-300 transition-colors rounded-lg p-4 border border-green-500/30 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
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
                    <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">{week.title}</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">Recommended Packages</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedPackages.map((pkg, index) => (
                <a 
                  key={index}
                  href={pkg.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{pkg.name}</span>
                  <p className="text-sm text-gray-400">{pkg.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">🧠 Bonus Tips for College Students</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bonusTips.map((tip, index) => (
                <a 
                  key={index}
                  href={tip.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{tip.name}</span>
                  <p className="text-sm text-gray-400">{tip.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your Flutter Journey</h2>
            <p className="text-white/80 mb-2">
              Learning Flutter is just the beginning. Once you understand the fundamentals, you'll be able to create attractive applications for any platform.
            </p>
            <p className="text-white/80 mb-2">
              Prioritize your creativity and keep building applications that bring you joy. Mastery comes through practice!
            </p>
            <p className="text-white/80">
              Remember, the Flutter community is vast and always available to help. Keep sharing your experiences and continue learning!
            </p>
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
      </div>
    </div>
  );
} 