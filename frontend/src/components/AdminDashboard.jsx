import React, { useState } from 'react';
import { FaUsers, FaStar, FaChartPie, FaSearch } from 'react-icons/fa';

// Placeholder feedback data
const feedbackList = [
  {
    eventName: 'Tech Fest',
    eventType: 'Academic',
    rating: 5,
    comment: 'Amazing event! Learned a lot.',
    sentiment: 'positive',
    user: 'Alice',
    date: '2024-06-01',
  },
  {
    eventName: 'Music Night',
    eventType: 'Cultural',
    rating: 3,
    comment: 'It was okay, could be better.',
    sentiment: 'neutral',
    user: 'Bob',
    date: '2024-06-02',
  },
  {
    eventName: 'Sports Day',
    eventType: 'Sports',
    rating: 2,
    comment: 'Not well organized.',
    sentiment: 'negative',
    user: 'Charlie',
    date: '2024-06-03',
  },
];

const sentimentSummary = {
  positive: 60,
  neutral: 25,
  negative: 15,
};

const AdminDashboard = () => {
  const [search, setSearch] = useState('');

  // Filter feedbacks by search
  const filteredFeedbacks = feedbackList.filter(fb =>
    fb.eventName.toLowerCase().includes(search.toLowerCase()) ||
    fb.comment.toLowerCase().includes(search.toLowerCase()) ||
    fb.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admin Dashboard</h1>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-indigo-500">
            <FaUsers className="text-3xl text-indigo-500 mb-2" />
            <h3 className="text-lg font-medium text-gray-900">Total Feedback</h3>
            <p className="text-4xl font-bold text-indigo-600 mt-2">{feedbackList.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-yellow-400">
            <FaStar className="text-3xl text-yellow-400 mb-2" />
            <h3 className="text-lg font-medium text-gray-900">Average Rating</h3>
            <p className="text-4xl font-bold text-yellow-500 mt-2">
              {(
                feedbackList.reduce((acc, fb) => acc + fb.rating, 0) /
                (feedbackList.length || 1)
              ).toFixed(1)}{' '}
              <span className="text-lg">/ 5</span>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-green-500 w-full">
            <FaChartPie className="text-3xl text-green-500 mb-2" />
            <h3 className="text-lg font-medium text-gray-900">Sentiment Analysis</h3>
            {/* Chart Placeholder */}
            <div className="w-full h-32 flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                Chart
              </div>
            </div>
            <div className="w-full mt-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-600">Positive</span>
                <span>{sentimentSummary.positive}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-yellow-600">Neutral</span>
                <span>{sentimentSummary.neutral}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-600">Negative</span>
                <span>{sentimentSummary.negative}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter/Search Bar */}
        <div className="mb-6 flex justify-end">
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search feedbacks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Recent Feedback */}
        <div className="bg-white rounded-xl shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 text-center">Recent Feedback</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredFeedbacks.length === 0 ? (
              <div className="p-6 text-center text-gray-400">No feedback found.</div>
            ) : (
              filteredFeedbacks.map((feedback, index) => (
                <div key={index} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                        {feedback.eventType}
                      </span>
                      <span className="font-bold text-gray-800 mr-2">{feedback.eventName}</span>
                      <span className="text-gray-400 text-xs">({feedback.date})</span>
                    </div>
                    <div className="text-gray-700 mb-1">{feedback.comment}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${feedback.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                          feedback.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'}`}>
                        {feedback.sentiment}
                      </span>
                      <span className="flex items-center text-yellow-500 font-bold">
                        <FaStar className="mr-1" /> {feedback.rating}/5
                      </span>
                      <span className="text-gray-400 text-xs ml-2">by {feedback.user}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 