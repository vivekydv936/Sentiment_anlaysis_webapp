const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const checkBackendStatus = async () => {
    const response = await fetch(`${API_URL}/api/`);
    return response.json();
};

export const submitFeedback = async (feedbackData) => {
    const response = await fetch(`${API_URL}/feedback/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData),
    });
    return response.json();
};

export const getAllFeedbacks = async () => {
    const response = await fetch(`${API_URL}/feedback/`);
    return response.json();
};

export const getUserFeedbacks = async (userId) => {
    const response = await fetch(`${API_URL}/feedback/user/${userId}`);
    return response.json();
}; 