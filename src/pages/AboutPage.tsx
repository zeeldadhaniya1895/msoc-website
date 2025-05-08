import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SunsetBackground from '../components/3d/SunsetBackground';
import { phaseDetails, participationTypes, faqs } from '../data/eventData';

const AboutPage = () => {
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
            About MSOC 2023
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center"
          >
            Everything you need to know about <span className="mstc-highlight">MSTC</span> Summer of Code
          </motion.p>
        </div>
      </section>
      
      {/* About the Event */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in-up"
            >
              <h2 className="text-2xl font-display font-bold text-summer-yellow mb-6">
                <span className="summer-icon">🌟</span> What is MSOC?
              </h2>
              <p className="text-white/80 mb-4">
                MSOC (<span className="mstc-highlight">MSTC</span> Summer of Code) is a summer coding event organized by the Microsoft Student Technical Club. It's designed to help students learn new technologies and build practical projects during their summer break.
              </p>
              <p className="text-white/80 mb-4">
                Unlike traditional coding events, MSOC divides the learning process into two distinct phases: a Learning Phase <span className="summer-icon">📚</span> and a Development Phase <span className="summer-icon">💻</span>. This approach ensures that participants first build a strong foundation before diving into project development.
              </p>
              <p className="text-white/80">
                Whether you're a beginner looking to start your coding journey or an experienced developer wanting to explore new technologies, MSOC offers a structured learning experience for everyone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card fade-in-up"
            >
              <h3 className="text-xl font-display font-bold text-summer-orange mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-summer-yellow text-xl summer-icon">🌟</span>
                  <div>
                    <span className="font-semibold text-white">Two-Phase Approach:</span>
                    <p className="text-white/70">A unique learning phase followed by a development phase</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-summer-yellow text-xl summer-icon">🌟</span>
                  <div>
                    <span className="font-semibold text-white">Flexible Participation:</span>
                    <p className="text-white/70">Work individually during learning and optionally in groups during development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-summer-yellow text-xl summer-icon">🌟</span>
                  <div>
                    <span className="font-semibold text-white">Modern Tech Stack:</span>
                    <p className="text-white/70">Focused tracks on MERN Stack and GenAI, with exposure to 8 other categories</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-summer-yellow text-xl summer-icon">🌟</span>
                  <div>
                    <span className="font-semibold text-white">Hands-on Learning:</span>
                    <p className="text-white/70">Code snippets, debugging tasks, and project building</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-summer-yellow text-xl summer-icon">🌟</span>
                  <div>
                    <span className="font-semibold text-white">Community Support:</span>
                    <p className="text-white/70">Learn alongside peers with mentorship from experienced developers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 gradient-text"
          >
            How MSOC Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Learning Phase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card fade-in-up stagger-1"
            >
              <div className="text-summer-yellow text-5xl mb-4 summer-icon">📚</div>
              <h3 className="text-xl font-bold text-summer-orange mb-3">
                {phaseDetails.learning.title}
              </h3>
              <p className="text-white/80 mb-4">
                {phaseDetails.learning.description}
              </p>
              
              <h4 className="font-semibold text-white mb-2">Activities include:</h4>
              <ul className="space-y-1">
                {phaseDetails.learning.activities.map((activity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-summer-yellow">✓</span>
                    <span className="text-white/70">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Development Phase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card fade-in-up stagger-2"
            >
              <div className="text-summer-yellow text-5xl mb-4 summer-icon">🚀</div>
              <h3 className="text-xl font-bold text-summer-orange mb-3">
                {phaseDetails.development.title}
              </h3>
              <p className="text-white/80 mb-4">
                {phaseDetails.development.description}
              </p>
              
              <h4 className="font-semibold text-white mb-2">Activities include:</h4>
              <ul className="space-y-1">
                {phaseDetails.development.activities.map((activity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-summer-yellow">✓</span>
                    <span className="text-white/70">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Participation Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="card max-w-5xl mx-auto mt-8 fade-in-up stagger-3"
          >
            <h3 className="text-xl font-bold text-summer-orange mb-4">
              <span className="summer-icon">👥</span> Participation Options
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {participationTypes.map((type, index) => (
                <div key={index} className="bg-black/20 p-4 rounded-lg hover:bg-black/30 transition-all">
                  <h4 className="font-bold text-white mb-1">{type.type}</h4>
                  <p className="text-summer-yellow text-sm mb-2">During {type.phases}</p>
                  <p className="text-white/70 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About MSTC */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-center gradient-text"
          >
            About <span className="mstc-highlight">Microsoft Student Technical Club</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card max-w-3xl mx-auto text-center fade-in-up"
          >
            <div className="flex justify-center mb-6">
              <img src="/vite.svg" alt="MSTC Logo" className="h-16 summer-icon" />
            </div>
            
            <p className="text-white/80 mb-4">
              <span className="mstc-highlight">Microsoft Student Technical Club (MSTC)</span> is a student-run technical community that aims to create a platform for students to learn, collaborate, and grow in various domains of technology.
            </p>
            <p className="text-white/80 mb-6">
              Our mission is to empower students with practical knowledge and skills that complement their academic learning, preparing them for real-world challenges in the tech industry.
            </p>
            
            <h3 className="text-lg font-bold text-summer-yellow mb-3">
              <span className="summer-icon">🌐</span> Other Events by MSTC
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-all cursor-pointer">WOC - Winter of Code</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-all cursor-pointer">FaceOff</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-all cursor-pointer">Hacktoberfest</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-all cursor-pointer">Tech Workshops</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 gradient-text"
          >
            <span className="summer-icon">❓</span> Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-summer-yellow mb-2">
                  {faq.question}
                </h3>
                <p className="text-white/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white/70 mb-4">
              Have more questions? Feel free to reach out to us!
            </p>
            <Link to="/register" className="btn-primary">
              <span className="summer-icon">🌞</span> Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 