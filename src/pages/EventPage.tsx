import { motion } from 'framer-motion';
import { phaseDetails } from '../data/eventData';
import SunsetBackground from '../components/3d/SunsetBackground';

const EventPage = () => {
  return (
    <div className="relative pt-20 pb-20">
      <SunsetBackground />
      
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center gradient-text"
          >
            MSOC Main Event Tracks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center"
          >
            Participate in our main event tracks and build your skills through guided learning and projects with <span className="mstc-highlight">MSTC</span>
          </motion.p>
        </div>
      </section>
      
      {/* Main Event Tracks */}
      <section>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* MERN Track */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card fade-in-up stagger-1"
              whileHover={{ y: -5, boxShadow: "0 25px 25px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl summer-icon">🔥</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-summer-yellow">
                    MERN Stack Track
                  </h2>
                  <p className="text-white/70">Comprehensive learning track for MongoDB, Express, React and Node.js stack.</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="card bg-black/40">
                  <h3 className="text-xl font-bold mb-4 text-summer-orange">
                    <span className="summer-icon">📚</span> What You'll Learn
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Building full-stack web applications</li>
                    <li>Frontend development with React</li>
                    <li>Backend APIs with Node.js and Express</li>
                    <li>Database management with MongoDB</li>
                    <li>Authentication and deployment</li>
                  </ul>
                </div>
                
                <div className="card bg-black/40">
                  <h3 className="text-xl font-bold mb-4 text-summer-orange">
                    <span className="summer-icon">🗓️</span> Step-by-Step Progress
                  </h3>
                  <p className="text-white/80 mb-4">
                    Content and checkpoints will be released step by step as the event progresses. Join our Discord server for detailed information.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Weekly Content</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Checkpoints</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Challenges</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Mentorship</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://discord.gg/mstc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
                  </svg>
                  Join Discord
                </a>
                <a 
                  href="https://quiz-platform.msoc.com/mern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary justify-center inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                  MERN Quizzes
                </a>
              </div>
            </motion.div>
            
            {/* GenAI Track */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card fade-in-up stagger-2"
              whileHover={{ y: -5, boxShadow: "0 25px 25px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl summer-icon">🧠</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-summer-yellow">
                    GenAI Track
                  </h2>
                  <p className="text-white/70">Explore Generative AI technologies and applications.</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="card bg-black/40">
                  <h3 className="text-xl font-bold mb-4 text-summer-orange">
                    <span className="summer-icon">📚</span> What You'll Learn
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Fundamentals of AI and Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Working with Large Language Models</li>
                    <li>Building GenAI applications</li>
                    <li>Prompt engineering and fine-tuning</li>
                  </ul>
                </div>
                
                <div className="card bg-black/40">
                  <h3 className="text-xl font-bold mb-4 text-summer-orange">
                    <span className="summer-icon">🗓️</span> Step-by-Step Progress
                  </h3>
                  <p className="text-white/80 mb-4">
                    Content and checkpoints will be released step by step as the event progresses. Join our Discord server for detailed information.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Weekly Content</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Checkpoints</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Challenges</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-all">Mentorship</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://discord.gg/mstc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
                  </svg>
                  Join Discord
                </a>
                <a 
                  href="https://quiz-platform.msoc.com/genai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary justify-center inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                  GenAI Quizzes
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Event Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card max-w-4xl mx-auto fade-in-up stagger-3"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-summer-yellow mb-6">
              <span className="summer-icon">🗓️</span> Event Timeline
            </h2>
            
            <div className="relative pl-8 border-l border-white/20 space-y-10">
              {/* Learning Phase */}
              <div>
                <div className="absolute w-6 h-6 bg-summer-yellow rounded-full -left-3 flex items-center justify-center timeline-circle">
                  <div className="w-2 h-2 bg-mstc-dark rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-summer-orange">
                  <span className="summer-icon">📚</span> {phaseDetails.learning.title} (6 weeks)
                </h3>
                <p className="text-white/80 mt-2">
                  {phaseDetails.learning.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {phaseDetails.learning.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summer-yellow mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-white/70">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Development Phase */}
              <div>
                <div className="absolute w-6 h-6 bg-summer-yellow rounded-full -left-3 flex items-center justify-center timeline-circle">
                  <div className="w-2 h-2 bg-mstc-dark rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-summer-orange">
                  <span className="summer-icon">🚀</span> {phaseDetails.development.title} (3 weeks)
                </h3>
                <p className="text-white/80 mt-2">
                  {phaseDetails.development.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {phaseDetails.development.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summer-yellow mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-white/70">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/register"
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              <span className="summer-icon">🌞</span> Register for MSOC
            </a>
            <p className="text-white/60 mt-3">
              Join our main event tracks and start your coding journey today with <span className="mstc-highlight">MSTC</span>!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventPage; 