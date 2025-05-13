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
    title: "Phase 1: Foundations (1-2 Months)",
    quote: "Django makes it easier to build better web apps more quickly and with less code.",
    author: "Django Project",
    description: "Understand Python, Django basics, and set up a development environment.",
    checklist: [
      "Learn Python basics: variables, data structures, functions, loops, conditionals",
      "Understand object-oriented programming: classes, objects, inheritance, polymorphism",
      "Explore Python modules and packages",
      "Install Django and create a project",
      "Understand MVC architecture (Model-View-Template)",
      "Learn models, views, templates, and URLs",
      "Build a simple app (e.g., to-do list)",
      "Explore Django Admin",
      "Learn SQLite and basic SQL queries",
      "Understand Django ORM for database interactions"
    ],
    resources: [
      {
        title: "Python Official Tutorial",
        description: "Comprehensive guide to learning Python",
        link: "https://docs.python.org/3/tutorial/"
      },
      {
        title: "Automate the Boring Stuff with Python",
        description: "Practical Python programming for beginners",
        link: "https://automatetheboringstuff.com/"
      },
      {
        title: "Django Official Tutorial",
        description: "Step-by-step guide to building your first Django app",
        link: "https://docs.djangoproject.com/en/stable/intro/tutorial01/"
      },
      {
        title: "W3Schools SQL Tutorial",
        description: "Learn SQL basics for database management",
        link: "https://www.w3schools.com/sql/"
      }
    ],
    progressTip: "Project: Build a simple blog with Django featuring CRUD operations for posts and basic UI with Bootstrap."
  },
  {
    title: "Phase 2: Intermediate Skills",
    quote: "The best programming language is the one that gets used.",
    author: "Michael Feathers",
    description: "Dive deeper into Django features and build complex applications.",
    checklist: [
      "Implement registration, login, logout, password reset",
      "Use Django's authentication system",
      "Learn permissions and groups",
      "Master Django ORM: filtering, aggregations, complex queries",
      "Understand relationships: ForeignKey, ManyToManyField",
      "Use PostgreSQL for production",
      "Create and validate forms with ModelForm and Form",
      "Handle CSRF protection",
      "Manage CSS, JS, and user-uploaded media",
      "Configure storage (e.g., AWS S3)"
    ],
    resources: [
      {
        title: "Django Authentication Docs",
        description: "Official guide to Django's authentication system",
        link: "https://docs.djangoproject.com/en/stable/topics/auth/"
      },
      {
        title: "Real Python's Django ORM Guide",
        description: "In-depth tutorial on Django's Object-Relational Mapping",
        link: "https://realpython.com/django-orm/"
      },
      {
        title: "Django Forms Docs",
        description: "Official documentation for handling forms in Django",
        link: "https://docs.djangoproject.com/en/stable/topics/forms/"
      },
      {
        title: "Django Static Files Docs",
        description: "Guide to managing static files in Django",
        link: "https://docs.djangoproject.com/en/stable/howto/static-files/"
      }
    ],
    progressTip: "Project: Build an E-Commerce or Task Manager application with authentication, CRUD operations, search functionality, PostgreSQL, and deploy to Heroku/Render."
  },
  {
    title: "Phase 3: Advanced Skills",
    quote: "The art of programming is the art of organizing complexity.",
    author: "Edsger W. Dijkstra",
    description: "Master advanced Django features, APIs, and production practices.",
    checklist: [
      "Build RESTful APIs with serializers, viewsets, routers",
      "Implement JWT/OAuth authentication",
      "Test APIs with Postman",
      "Write unit tests with Django's TestCase",
      "Use pytest and Django debug toolbar",
      "Optimize queries with select_related, prefetch_related",
      "Implement caching (Redis/Memcached)",
      "Deploy to AWS/DigitalOcean with Gunicorn/Nginx",
      "Set up CI/CD with GitHub Actions"
    ],
    resources: [
      {
        title: "DRF Official Tutorial",
        description: "Quick start guide to Django REST Framework",
        link: "https://www.django-rest-framework.org/tutorial/quickstart/"
      },
      {
        title: "Django Testing Docs",
        description: "Guide to writing and running tests in Django",
        link: "https://docs.djangoproject.com/en/stable/topics/testing/"
      },
      {
        title: "Real Python's Django Performance Guide",
        description: "Techniques for optimizing Django applications",
        link: "https://realpython.com/django-performance-optimization/"
      },
      {
        title: "Django Deployment Docs",
        description: "Guide to deploying Django applications",
        link: "https://docs.djangoproject.com/en/stable/howto/deployment/"
      }
    ],
    progressTip: "Project: Build a full-stack application like a social media platform or job board with APIs, real-time features (Django Channels), and deploy it to production."
  },
  {
    title: "Phase 4: Specialization and Portfolio",
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    description: "Deepen expertise and build a portfolio of Django projects.",
    checklist: [
      "Learn Django Channels for real-time features",
      "Use Celery for background tasks",
      "Implement search with Elasticsearch",
      "Integrate Django with React/Vue",
      "Serve APIs to decoupled frontend",
      "Contribute to Django-related projects on GitHub",
      "Create 3-5 projects (e.g., e-commerce, real-time app)",
      "Host projects on GitHub and deploy online"
    ],
    resources: [
      {
        title: "Django Channels Docs",
        description: "Guide to real-time features in Django",
        link: "https://channels.readthedocs.io/"
      },
      {
        title: "Celery Docs",
        description: "Distributed task queue documentation",
        link: "https://docs.celeryproject.org/"
      },
      {
        title: "Django + React Tutorial",
        description: "Build a To-Do application using Django and React",
        link: "https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react"
      },
      {
        title: "GitHub's Open Source Guide",
        description: "Resources for open source contributors",
        link: "https://opensource.guide/"
      }
    ],
    progressTip: "Build a comprehensive portfolio of Django projects showcasing different aspects of your skills. Consider contributing to open-source Django packages to gain experience and visibility."
  }
];

// Django libraries and tools
const recommendedLibraries = [
  { name: "Django REST Framework", description: "Powerful toolkit for building Web APIs", link: "https://www.django-rest-framework.org/" },
  { name: "Django Channels", description: "Real-time functionality for Django", link: "https://channels.readthedocs.io/" },
  { name: "Celery", description: "Distributed task queue for background processing", link: "https://docs.celeryproject.org/" },
  { name: "Django Debug Toolbar", description: "Debugging panel for development", link: "https://django-debug-toolbar.readthedocs.io/" },
  { name: "Django Crispy Forms", description: "Controls form rendering behavior", link: "https://django-crispy-forms.readthedocs.io/" },
  { name: "Django Allauth", description: "Authentication, registration, account management", link: "https://www.intenct.nl/projects/django-allauth/" },
  { name: "Django Filter", description: "Reusable filtering functionality", link: "https://django-filter.readthedocs.io/" },
  { name: "Django CORS Headers", description: "Handles Cross-Origin Resource Sharing", link: "https://github.com/adamchainz/django-cors-headers" },
  { name: "Wagtail CMS", description: "Content management system built on Django", link: "https://wagtail.org/" },
  { name: "Django Storages", description: "Custom storage backends for Django", link: "https://django-storages.readthedocs.io/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('django-progress');
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
        localStorage.setItem('django-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-900/20 via-gray-950 to-blue-900/20"></div>
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
                background: `hsl(${Math.random() * 120 + 90}, 100%, 50%)`,
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            Django Web Development Path
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Django Web Framework
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
                className="h-full bg-gradient-to-r from-green-500 to-blue-500"
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
              This roadmap provides a comprehensive path to learn Django, a high-level Python web framework, from beginner to advanced levels. It assumes basic knowledge of Python and web development (HTML, CSS, JavaScript). The roadmap is divided into four phases, with estimated timelines and practical projects to build skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold hover:text-green-300 transition-colors bg-green-500/20 hover:bg-green-500/30 rounded-lg p-4 border border-green-500/30 w-full sm:w-auto text-center group">
                <span className="relative">
                  Django Official Documentation
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://drive.google.com/file/d/1JTX4WbiQ0UXXE4V-KkKi-hjcYz1pxexz/view?usp=drive_link" 
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
                      
                      {/* Phase progress bar */}
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-blue-400"
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
              <h3 className="text-xl md:text-2xl font-semibold text-summer-yellow">Django Ecosystem</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedLibraries.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">{resource.name}</span>
                  <p className="text-sm text-gray-400">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your Django Journey</h2>
            <p className="text-white/80 mb-2">
              Django is a powerful and versatile framework that helps you build high-quality web applications in less time and with less code.
            </p>
            <p className="text-white/80 mb-2">
              In your learning journey, create small projects and gradually add more features to them. The Django community is active and available to help.
            </p>
            <p className="text-white/80">
              Keep reading the documentation, practice consistently, and remember that Django is like a toolbox - use the right tools to shape your ideas.
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