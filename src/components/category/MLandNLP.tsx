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
    title: "Week 1: Introduction to NLP & Python Basics",
    quote: "Natural language processing is the art of teaching machines to understand human chaos.",
    author: "Anonymous",
    description: "Establish a foundation in Natural Language Processing and Python programming",
    checklist: [
      "Read NLP Overview",
      "Install Python and Jupyter Notebook",
      "Practice Python basics: strings, lists, loops, and functions",
      "Use nltk library to tokenize a sentence (e.g., nltk.word_tokenize('Hello, world!'))",
      "Write a Python script that takes a sentence and prints each word separately"
    ],
    resources: [
      {
        title: "Python for Beginners (W3Schools)",
        description: "Comprehensive guide to Python basics",
        link: "https://www.w3schools.com/python/"
      },
      {
        title: "NLTK Documentation",
        description: "Official documentation for Natural Language Toolkit",
        link: "https://www.nltk.org/"
      },
      {
        title: "Ultimate Guide to NLP",
        description: "Introduction to NLP concepts and implementation",
        link: "https://www.analyticsvidhya.com/blog/2017/01/ultimate-guide-to-understand-implement-natural-language-processing-codes-in-python/"
      }
    ],
    progressTip: "Use Google Colab for quick Python experiments without local setup."
  },
  {
    title: "Week 2: Text Preprocessing & Regular Expressions",
    quote: "Data preprocessing is 80% of the work in NLP—embrace the grind!",
    author: "Anonymous",
    description: "Learn essential text preprocessing techniques and regular expressions",
    checklist: [
      "Learn about stopwords, stemming, and lemmatization (nltk.stem, nltk.corpus.stopwords)",
      "Clean text data (remove punctuation, lowercase all words)",
      "Practice regex (e.g., extract emails/phone numbers from text)",
      "Preprocess a paragraph (remove stopwords, punctuation, and lemmatize words)"
    ],
    resources: [
      {
        title: "Regex Guide (MDN)",
        description: "Comprehensive guide to regular expressions",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
      },
      {
        title: "Text Cleaning in NLP (Video)",
        description: "Practical tutorial on text preprocessing",
        link: "https://www.youtube.com/watch?v=pvUiCMCLgBA"
      }
    ],
    progressTip: "Create a reusable text preprocessing function that you can use in future projects to save time."
  },
  {
    title: "Week 3: Bag-of-Words & TF-IDF",
    quote: "The quality of your features determines the quality of your model.",
    author: "Anonymous",
    description: "Master text vectorization techniques for machine learning",
    checklist: [
      "Understand BoW and TF-IDF using sklearn.feature_extraction.text",
      "Convert a set of sentences into BoW/TF-IDF vectors",
      "Train a simple sentiment classifier (positive/negative) using Naive Bayes",
      "Build a movie review classifier using the IMDb dataset"
    ],
    resources: [
      {
        title: "Scikit-learn TF-IDF Documentation",
        description: "Official guide to TF-IDF vectorization",
        link: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html"
      },
      {
        title: "TF-IDF Explained (Hindi Video)",
        description: "Detailed explanation of TF-IDF concept",
        link: "https://www.youtube.com/watch?v=4VMR2Rs-Gpc"
      },
      {
        title: "IMDb Dataset (50K Movie Reviews)",
        description: "Dataset for sentiment analysis practice",
        link: "https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews"
      }
    ],
    progressTip: "Experiment with different parameters in TF-IDF vectorization to understand how they affect model performance."
  },
  {
    title: "Week 4: Word Embeddings (Word2Vec, GloVe)",
    quote: "Words are numbers in NLP—embed them wisely!",
    author: "Anonymous",
    description: "Explore semantic word representations through embeddings",
    checklist: [
      "Learn about Word2Vec and its applications",
      "Train/fine-tune Word2Vec on a small dataset",
      "Find word analogies (e.g., 'king - man + woman = queen')",
      "Create a word embedding model for a custom dataset (e.g., tweets)"
    ],
    resources: [
      {
        title: "Word Embeddings in NLP",
        description: "Comprehensive guide to word embeddings",
        link: "https://www.geeksforgeeks.org/word-embeddings-in-nlp/"
      },
      {
        title: "Word Embeddings Explained (Video)",
        description: "Visual explanation of embedding concepts",
        link: "https://youtu.be/viZrOnJclY0"
      }
    ],
    progressTip: "Visualize your word embeddings using dimensionality reduction techniques like t-SNE to understand the relationships between words."
  },
  {
    title: "Week 5: Introduction to Transformers & Hugging Face",
    quote: "Transformers have transformed NLP—learn them to transform your skills.",
    author: "Anonymous",
    description: "Discover state-of-the-art transformer models and the Hugging Face ecosystem",
    checklist: [
      "Explore the Hugging Face Hub and available models",
      "Use pipeline() for sentiment analysis/translation",
      "Fine-tune a BERT model on a custom dataset",
      "Deploy a sentiment analysis model using Hugging Face's distilbert-base-uncased"
    ],
    resources: [
      {
        title: "Hugging Face Course",
        description: "Official course on using transformers",
        link: "https://huggingface.co/course/"
      },
      {
        title: "Transformers Tutorial (Hindi Video)",
        description: "Detailed explanation of transformer architecture",
        link: "https://www.youtube.com/watch?v=csWluHwfsB8"
      },
      {
        title: "Hugging Face Models Hub",
        description: "Repository of pre-trained models",
        link: "https://huggingface.co/models"
      }
    ],
    progressTip: "Start with small models (e.g., DistilBERT) to avoid GPU bottlenecks."
  },
  {
    title: "Week 6: Build an NLP Project",
    quote: "Your first NLP project will be messy—but it's your masterpiece!",
    author: "Anonymous",
    description: "Apply everything you've learned in a comprehensive project",
    checklist: [
      "Choose a project: Chatbot, Spam Detector, or Text Summarizer",
      "Deploy it using Flask/Gradio",
      "Write a blog/post on LinkedIn showcasing your work",
      "Tag Microsoft Student Technical Club DA-IICT in your post"
    ],
    resources: [
      {
        title: "Gradio for Deployment",
        description: "Tool for creating web interfaces for ML models",
        link: "https://gradio.app/"
      },
      {
        title: "NLP Playlist by Krish Naik",
        description: "Comprehensive video series on NLP",
        link: "https://youtube.com/playlist?list=PLZoTAELRMXVNNrHSKv36Lr3_156yCo6Nn&feature=shared"
      }
    ],
    progressTip: "Consider creating a Twitter Sentiment Analyzer, Resume Parser using SpaCy, or Language Translator as your final project."
  }
];

// ML and NLP libraries and resources
const mlResources = [
  { name: "scikit-learn", description: "Machine learning in Python", link: "https://scikit-learn.org/" },
  { name: "TensorFlow", description: "End-to-end open source platform for ML", link: "https://www.tensorflow.org/" },
  { name: "PyTorch", description: "Open source machine learning framework", link: "https://pytorch.org/" },
  { name: "NLTK", description: "Leading platform for building Python programs to work with human language data", link: "https://www.nltk.org/" },
  { name: "spaCy", description: "Industrial-strength NLP library", link: "https://spacy.io/" },
  { name: "Hugging Face", description: "Build, train and deploy state of the art models", link: "https://huggingface.co/" },
  { name: "Keras", description: "Deep learning API running on top of TensorFlow", link: "https://keras.io/" },
  { name: "Gensim", description: "Topic modeling for humans", link: "https://radimrehurek.com/gensim/" },
  { name: "Fast.ai", description: "Making deep learning accessible to all", link: "https://www.fast.ai/" },
  { name: "Stanford NLP Group", description: "Research and resources on NLP", link: "https://nlp.stanford.edu/" }
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [completedItems, setCompletedItems] = useState<{[key: number]: boolean[]}>({});
  const [progress, setProgress] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('mlnlp-progress');
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
        localStorage.setItem('mlnlp-progress', JSON.stringify(completedItems));
        
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 via-gray-950 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-blue-500/10"
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
              className="absolute bg-blue-500"
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
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            NLP Roadmap (2025)
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-center mb-8 text-summer-yellow"
          >
            Natural Language Processing
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
              <span className="text-blue-400 font-bold">{progress}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
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
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl mb-12 border border-gray-800 shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
          >
            <p className="text-white/80 mb-4">
              This roadmap guides you through learning Natural Language Processing (NLP) from basic concepts to advanced applications. You'll start with Python essentials, progress through text preprocessing and vectorization techniques, explore word embeddings, and finally work with state-of-the-art transformer models from Hugging Face.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://roadmap.sh/ai/machine-learning-and-nlp-for-beginners-a-roadmap" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors bg-blue-500/20 hover:bg-blue-500/30 rounded-lg p-4 border border-blue-500/30 w-full sm:w-auto text-center group"
              >
                <span className="relative">
                  Complete NLP visual roadmap
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </span>
                <LinkIcon />
              </a>
              <a 
                href="https://docs.google.com/document/d/1oIQ9oNF1pS8Ny-6ShbtYR_K3idm_b-jD/edit?usp=drive_link&ouid=102138017384349792997&rtpof=true&sd=true" 
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

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-[1.75rem] before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-blue-500 before:rounded-full before:-z-10">
            {roadmap.map((week, weekIndex) => (
              <motion.div
                key={weekIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: weekIndex * 0.1 }}
                className={`relative pl-10 md:pl-16 pb-6 ${weekIndex === roadmap.length - 1 ? '' : 'mb-8'}`}
              >
                <div className="absolute left-0 top-1 md:left-0 md:top-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{weekIndex + 1}</span>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
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

                      <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border-l-4 border-blue-500 transform hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-blue-300 italic mb-1">"{week.quote}"</p>
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
                                  className="h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
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
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:text-blue-300 transition-colors group-hover:rotate-12 transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div>
                                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{resource.title}</span>
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

          <div className="mt-16 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ML & NLP Libraries</h3>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {mlResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-800/50 hover:border-blue-800/50 group"
                >
                  <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{resource.name}</span>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-green-900/20 p-6 rounded-xl border border-green-700/30 backdrop-blur-md hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🏁 Your NLP Journey</h2>
            <p className="text-white/80 mb-2">
              NLP is a significant part of modern AI that helps machines understand and process human language.
            </p>
            <p className="text-white/80 mb-2">
              Following this roadmap, you'll become capable of building projects like chatbots, sentiment analyzers, and text summarization systems.
            </p>
            <p className="text-white/80">
              Remember, success in NLP requires consistent practice and staying updated with new models. MSOC is always with you on this journey!
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
        
        body {
          cursor: default;
        }
      `}</style>
    </div>
  );
} 