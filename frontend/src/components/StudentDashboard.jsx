import React from 'react';
import { FaCalendarAlt, FaStar, FaSmile, FaFrown, FaMeh } from 'react-icons/fa';

const attendedEvents = [
  { name: 'Tech Fest', type: 'Academic', date: '2024-06-01' },
  { name: 'Music Night', type: 'Cultural', date: '2024-06-02' },
  { name: 'Sports Day', type: 'Sports', date: '2024-06-03' },
];

const feedbacks = [
  {
    event: 'Tech Fest',
    rating: 5,
    quick: 'positive',
    comment: 'Amazing event! Learned a lot.',
    date: '2024-06-01',
  },
  {
    event: 'Music Night',
    rating: 3,
    quick: 'neutral',
    comment: 'It was okay, could be better.',
    date: '2024-06-02',
  },
  {
    event: 'Sports Day',
    rating: 2,
    quick: 'negative',
    comment: 'Not well organized.',
    date: '2024-06-03',
  },
];

const quickIcon = {
  positive: <FaSmile className="text-green-500" title="Positive" />,
  neutral: <FaMeh className="text-yellow-500" title="Neutral" />,
  negative: <FaFrown className="text-red-500" title="Negative" />,
};

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">My Dashboard</h2>
        {/* Attended Events */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center">
            <FaCalendarAlt className="mr-2" /> Events Attended
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {attendedEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center border-t-4 border-indigo-400">
                <span className="font-bold text-gray-800">{event.name}</span>
                <span className="text-xs text-gray-500 mb-1">{event.type}</span>
                <span className="text-xs text-gray-400">{event.date}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Feedbacks Submitted */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">Feedbacks Submitted</h3>
          <div className="space-y-4">
            {feedbacks.map((fb, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-indigo-400">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-bold text-gray-800 mr-2">{fb.event}</span>
                    <span className="text-gray-400 text-xs">({fb.date})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="flex items-center text-yellow-500 font-bold">
                      <FaStar className="mr-1" /> {fb.rating}/5
                    </span>
                    <span className="ml-2">{quickIcon[fb.quick]}</span>
                  </div>
                  <div className="text-gray-700">{fb.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 