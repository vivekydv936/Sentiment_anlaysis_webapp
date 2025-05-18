import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';

const StudentRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    alert('Registration submitted! (Demo)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white py-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <FaUser className="text-5xl text-indigo-500 mb-2" />
          <h2 className="text-2xl font-bold text-gray-900">Student Register</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative mt-1">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                placeholder="Name"
              />
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <div className="relative mt-1">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                placeholder="Email"
              />
              <FaUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10 pr-10"
                placeholder="Password"
              />
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline font-semibold">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister; 