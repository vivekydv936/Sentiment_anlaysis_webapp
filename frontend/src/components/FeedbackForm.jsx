import React, { useState } from 'react';
import { FaSmile, FaMeh, FaFrown, FaMicrophone, FaCamera } from 'react-icons/fa';

const eventTypeQuestions = {
  club: 'What did you enjoy most about this club activity?',
  academic: 'How useful was this academic event for your studies?',
  cultural: 'What was your favorite part of the cultural event?',
  sports: 'How would you rate the organization of the sports event?',
};

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    eventName: '',
    eventType: '',
    rating: 5,
    comment: '',
    quick: '',
    anonymous: false,
    extra: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
    alert('Feedback submitted! (Demo)');
    setFeedback({
      eventName: '',
      eventType: '',
      rating: 5,
      comment: '',
      quick: '',
      anonymous: false,
      extra: '',
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Adaptive extra question
  const extraQuestion = eventTypeQuestions[feedback.eventType] || '';

  return (
    <div className="min-h-screen bg-gray-100 py-8 flex flex-col items-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Submit Event Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={feedback.eventName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter event name"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              name="eventType"
              value={feedback.eventType}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Event Type</option>
              <option value="club">Club Activity</option>
              <option value="academic">Academic Event</option>
              <option value="cultural">Cultural Event</option>
              <option value="sports">Sports Event</option>
            </select>
          </div>

          {/* Adaptive Extra Question */}
          {extraQuestion && (
            <div>
              <label className="block text-sm font-medium text-gray-700">{extraQuestion}</label>
              <input
                type="text"
                name="extra"
                value={feedback.extra}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your answer"
              />
            </div>
          )}

          {/* Quick Feedback (One-click) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quick Feedback</label>
            <div className="flex space-x-4 justify-center">
              <button type="button" onClick={() => setFeedback(f => ({ ...f, quick: 'positive' }))} className={`p-2 rounded-full border-2 ${feedback.quick === 'positive' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`} title="Loved it!">
                <FaSmile className="text-2xl text-green-500" />
              </button>
              <button type="button" onClick={() => setFeedback(f => ({ ...f, quick: 'neutral' }))} className={`p-2 rounded-full border-2 ${feedback.quick === 'neutral' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'}`} title="It was okay">
                <FaMeh className="text-2xl text-yellow-500" />
              </button>
              <button type="button" onClick={() => setFeedback(f => ({ ...f, quick: 'negative' }))} className={`p-2 rounded-full border-2 ${feedback.quick === 'negative' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} title="Didn't like it">
                <FaFrown className="text-2xl text-red-500" />
              </button>
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="range"
              name="rating"
              min="1"
              max="5"
              value={feedback.rating}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
            <div className="text-center font-semibold text-indigo-600">{feedback.rating} stars</div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>

          {/* Voice/Photo Upload Placeholders */}
          <div className="flex space-x-4 items-center justify-center">
            <button type="button" className="flex flex-col items-center text-gray-500 hover:text-indigo-600" disabled>
              <FaMicrophone className="text-2xl mb-1" />
              <span className="text-xs">Voice</span>
            </button>
            <button type="button" className="flex flex-col items-center text-gray-500 hover:text-indigo-600" disabled>
              <FaCamera className="text-2xl mb-1" />
              <span className="text-xs">Photo</span>
            </button>
            <span className="text-xs text-gray-400">(Coming soon)</span>
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center">
            <input
              id="anonymous"
              name="anonymous"
              type="checkbox"
              checked={feedback.anonymous}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
              Submit anonymously
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm; 