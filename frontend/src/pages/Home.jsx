import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt, FaUserShield, FaChartBar, FaRocket, FaCogs, FaStar, FaCalendarAlt, FaComments, FaArrowRight, FaUser } from 'react-icons/fa';

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
    text: '“Emoji slider and voice notes made feedback fun. My suggestion was used the next week!”',
    avatar: <FaUser className="text-indigo-400 text-3xl" />,
  },
  {
    name: 'Priya (Club Leader)',
    text: '“Trend analysis showed us what to fix. Attendance jumped 40% after we changed our workshop!”',
    avatar: <FaUser className="text-pink-400 text-3xl" />,
  },
  {
    name: 'Admin',
    text: "Now I see campus sentiment at a glance. We cut planning meetings in half—students' needs are clear.",
    avatar: <FaUserShield className="text-green-400 text-3xl" />,
  },
];

const Home = () => {
  return (
    <div className="bg-light min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center bg-hero-gradient text-white">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Campus Event Feedback Hub</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Share your thoughts, help improve campus life, and see your impact in real time!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/feedback" className="bg-highlight text-dark font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition flex items-center gap-2">
            <FaArrowRight /> Submit Feedback
          </Link>
          <Link to="/student" className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow hover:bg-accent transition flex items-center gap-2">
            <FaUserCircle /> My Dashboard
          </Link>
          {isAdmin && (
            <Link to="/admin" className="bg-secondary text-white font-bold px-6 py-3 rounded-full shadow hover:bg-coral transition flex items-center gap-2">
              <FaUserShield /> Admin Dashboard
            </Link>
          )}
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent opacity-20 rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary opacity-20 rounded-full blur-2xl -z-10" />
      </section>

      {/* User Authentication Area */}
      <section className="max-w-4xl mx-auto w-full py-6 px-4 flex justify-end">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-2xl text-indigo-600" />
            <span className="font-semibold text-gray-700">Welcome, {userName}</span>
            <button className="ml-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 font-medium">Logout</button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-medium flex items-center gap-2">
              <FaSignInAlt /> Login
            </Link>
            <Link to="/register" className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 font-medium">Register</Link>
          </div>
        )}
      </section>

      {/* Dashboard Overview */}
      <section className="max-w-4xl mx-auto w-full py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-indigo-400">
              {stat.icon}
              <div className="text-2xl font-bold text-indigo-700 mt-2">{stat.value}</div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-4xl mx-auto w-full py-6 px-4 flex flex-wrap gap-4 justify-center">
        <Link to="/feedback" className="flex-1 min-w-[180px] bg-indigo-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center hover:bg-indigo-600 transition">
          <FaComments className="text-3xl mb-2" />
          <span className="font-semibold">Submit Feedback</span>
        </Link>
        <Link to="/student" className="flex-1 min-w-[180px] bg-green-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center hover:bg-green-600 transition">
          <FaUserCircle className="text-3xl mb-2" />
          <span className="font-semibold">My Dashboard</span>
        </Link>
        {isAdmin && (
          <Link to="/admin" className="flex-1 min-w-[180px] bg-pink-500 text-white rounded-lg shadow px-6 py-4 flex flex-col items-center hover:bg-pink-600 transition">
            <FaUserShield className="text-3xl mb-2" />
            <span className="font-semibold">Admin Dashboard</span>
          </Link>
        )}
      </section>

      {/* Content Sections (Features, Testimonials, etc.) */}
      <section className="max-w-5xl mx-auto w-full py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">Why Use Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-b-4 border-accent hover:scale-105 transition-transform min-h-[210px]">
              {f.icon}
              <div className="font-bold text-lg mt-3 mb-1 text-dark">{f.title}</div>
              <div className="text-dark/70 text-center text-base leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center text-primary mb-8">What Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-section-gradient rounded-2xl shadow p-6 flex-1 flex flex-col items-center border-l-4 border-accent hover:scale-105 transition-transform min-h-[180px] text-dark">
              {t.avatar}
              <div className="italic mt-3 mb-2 text-center text-base">{t.text}</div>
              <div className="font-semibold text-primary">- {t.name}</div>
            </div>
          ))}
        </div>
      </section>

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