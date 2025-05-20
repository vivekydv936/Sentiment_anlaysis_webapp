import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt, FaUserShield, FaChartBar, FaRocket, FaCogs, FaStar, FaCalendarAlt, FaComments, FaArrowRight, FaUser } from 'react-icons/fa';
import mainBg from '../assets/main.jpg';
import { motion, useAnimation } from 'framer-motion';

// Placeholder for authentication and admin status
const isLoggedIn = false; // Set to true to simulate logged-in user
const isAdmin = false; // Set to true to simulate admin
const userName = 'John Doe';

const quickStats = [
  { icon: <FaStar className="text-yellow-400 text-2xl" />, label: 'Feedbacks', value: 42 },
  { icon: <FaCalendarAlt className="text-indigo-500 text-2xl" />, label: 'Events', value: 8 },
  { icon: <FaComments className="text-green-500 text-2xl" />, label: 'Comments', value: 120 },
];
   
const features = [
  {
    icon: <FaRocket className="text-indigo-600 text-3xl" />,
    title: 'Smart Feedback',
    desc: 'Effortless feedback with emoji, voice, and adaptive forms—relevant questions, zero survey fatigue.'
  },
  {
    icon: <FaChartBar className="text-green-600 text-3xl" />,
    title: 'Insightful Analytics',
    desc: 'See trends in real time, spot issues early, and celebrate wins with data-driven insights.'
  },
  {
    icon: <FaCogs className="text-pink-600 text-3xl" />,
    title: 'Customizable',
    desc: 'Personalized event tips for students, custom dashboards for organizers—get the reports you need, fast.'
  },
];

const testimonials = [
  {
    name: 'Aarav (Student)',
    text: '"Emoji slider and voice notes made feedback fun. My suggestion was used the next week!"',
    avatar: <FaUser className="text-indigo-400 text-3xl" />,
  },
  {
    name: 'Priya (Club Leader)',
    text: '"Trend analysis showed us what to fix. Attendance jumped 40% after we changed our workshop!"',
    avatar: <FaUser className="text-pink-400 text-3xl" />,
  },
  {
    name: 'Admin',
    text: "Now I see campus sentiment at a glance. We cut planning meetings in half—students' needs are clear.",
    avatar: <FaUserShield className="text-green-400 text-3xl" />,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.18,
      ease: 'easeInOut',
    },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const Home = () => {
  // For count-up animation
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  
  React.useEffect(() => {
    if (!counted) {
      const intervals = quickStats.map((stat, idx) => {
        let current = 0;
        const step = Math.ceil(stat.value / 30);
        return setInterval(() => {
          current += step;
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = current > stat.value ? stat.value : current;
            return next;
          });
          if (current >= stat.value) clearInterval(intervals[idx]);
        }, 20);
      });
      setCounted(true);
      return () => intervals.forEach(clearInterval);
    }
  }, [counted]);

  // Split title into words for animation
  const titleWords = "Welcome to Feedback Hub".split(' ');

  return (
    <div className="bg-light min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.7), rgba(167,139,250,0.7)), url(${mainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4 drop-shadow-lg flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p className="text-xl mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, type: 'spring' }}>
          Share your thoughts, help improve campus life, and see your impact in real time!
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7, type: 'spring' }}
        >
          <Link to="/feedback" className="bg-highlight text-dark font-bold px-6 py-3 rounded-full shadow hover:scale-110 hover:bg-yellow-300 transition-all flex items-center gap-2">
            <FaArrowRight /> Submit Feedback
          </Link>
          <Link to="/student" className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow hover:scale-110 hover:bg-accent transition-all flex items-center gap-2">
            <FaUserCircle /> My Dashboard
          </Link>
          {isAdmin && (
            <Link to="/admin" className="bg-secondary text-white font-bold px-6 py-3 rounded-full shadow hover:scale-110 hover:bg-coral transition-all flex items-center gap-2">
              <FaUserShield /> Admin Dashboard
            </Link>
          )}
        </motion.div>
        {/* Animated floating shapes */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-accent opacity-20 rounded-full blur-2xl -z-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-secondary opacity-20 rounded-full blur-2xl -z-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.section>

      {/* Dashboard Overview */}
      <motion.section
        className="max-w-4xl mx-auto w-full py-6 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {quickStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-indigo-400"
              variants={cardFade}
            >
              {stat.icon}
              <div className="text-2xl font-bold text-indigo-700 mt-2">
                {counts[idx]}
              </div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        className="max-w-4xl mx-auto w-full py-6 px-4 flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} variants={cardFade}>
          <Link to="/feedback" className="flex-1 min-w-[180px] bg-indigo-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center transition">
            <FaComments className="text-3xl mb-2" />
            <span className="font-semibold">Submit Feedback</span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} variants={cardFade}>
          <Link to="/student" className="flex-1 min-w-[180px] bg-green-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center transition">
            <FaUserCircle className="text-3xl mb-2" />
            <span className="font-semibold">My Dashboard</span>
          </Link>
        </motion.div>
        {isAdmin && (
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} variants={cardFade}>
            <Link to="/admin" className="flex-1 min-w-[180px] bg-pink-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center transition">
              <FaUserShield className="text-3xl mb-2" />
              <span className="font-semibold">Admin Dashboard</span>
            </Link>
          </motion.div>
        )}
      </motion.section>

      {/* Content Sections (Features, Testimonials, etc.) */}
      <motion.section
        className="relative max-w-5xl mx-auto w-full py-10 px-4 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Animated background blobs */}
        <div className="pointer-events-none select-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-blob1" />
          <div className="absolute top-1/2 right-0 w-60 h-60 bg-accent opacity-20 rounded-full blur-3xl animate-blob2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl animate-blob3" />
        </div>
        <h2 className="text-2xl font-bold text-center text-primary mb-8 relative z-10">Why Use Our Platform?</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-b-4 border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl hover:border-primary hover:z-20"
              style={{ willChange: 'transform' }}
              variants={cardFade}
            >
              {f.icon}
              <div className="font-bold text-lg mt-3 mb-1 text-dark">{f.title}</div>
              <div className="text-dark/70 text-center text-base leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </motion.div>
        <h2 className="text-2xl font-bold text-center text-primary mb-8 relative z-10">What Users Say</h2>
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-section-gradient rounded-2xl shadow p-6 flex-1 flex flex-col items-center border-l-4 border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl hover:border-primary hover:z-20 text-dark"
              style={{ willChange: 'transform' }}
              variants={cardFade}
            >
              {t.avatar}
              <div className="italic mt-3 mb-2 text-center text-base">{t.text}</div>
              <div className="font-semibold text-primary">- {t.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Admin-specific Elements (if admin) */}
      {isAdmin && (
        <section className="max-w-4xl mx-auto w-full py-8 px-4">
          <h2 className="text-xl font-bold text-pink-600 mb-4">Admin Tools</h2>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
            <Link to="/admin" className="text-indigo-600 hover:underline font-semibold flex items-center gap-2">
              <FaUserShield /> Go to Admin Dashboard
            </Link>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-max">Manage Events</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-max">View All Feedback</button>
          </div>
        </section>
      )}

      {/* Footer Elements */}
      <footer className="bg-primary text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-bold">Campus Event Feedback Hub</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 