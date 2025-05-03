import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SuggestionCard from '../components/SuggestionCard'; // Import SuggestionCard

const suggestionData = {
  Depression: {
    "High Risk": [
      { type: "Relaxation", suggestion: "Try 10 minutes of deep breathing 🧘" },
      { type: "Activity", suggestion: "Go for a 15-minute walk in nature 🏃" },
      { type: "Habit", suggestion: "Practice guided meditation 🔄" },
    ],
    "Moderate Risk": [
      { type: "Relaxation", suggestion: "Write down 3 things you’re grateful for 🧘" },
      { type: "Activity", suggestion: "Do light stretching or yoga for 10 minutes 🏃" },
      { type: "Habit", suggestion: "Listen to calming music 🔄" },
    ],
    "Low Risk": [
      { type: "Relaxation", suggestion: "Engage in a hobby you enjoy 🧘" },
      { type: "Activity", suggestion: "Call a friend and have a short chat 🏃" },
      { type: "Habit", suggestion: "Do a short 5-minute mindfulness exercise 🔄" },
    ],
  },
  // ... Repeat similar structure for Anxiety, Bipolar, OCD, PTSD, etc.
};

const ChatbotSuggestionPage = ({ userId }) => {
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    // Fetch the suggestions when the page loads
    const fetchSuggestions = async () => {
      try {
        // If there's any server-side fetching (replace this if needed)
        const response = await axios.get(`/api/suggestions/get-suggestions/${userId}`);
        setSuggestions(response.data);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
      }
    };

    fetchSuggestions();
  }, [userId]); // Re-fetch suggestions if userId changes

  const refreshSuggestions = async () => {
    try {
      const response = await axios.get(`/api/suggestions/get-suggestions/${userId}`);
      setSuggestions(response.data);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  // Example of how you could add the suggestions dynamically based on condition
  const generateSuggestions = () => {
    const allSuggestions = [];
    for (const [condition, risks] of Object.entries(suggestionData)) {
      for (const [riskLevel, suggestionsList] of Object.entries(risks)) {
        suggestionsList.forEach(suggestion => {
          allSuggestions.push({
            condition,
            riskLevel,
            type: suggestion.type,
            suggestion: suggestion.suggestion,
            isCompleted: false, // Default to pending
          });
        });
      }
    }
    return allSuggestions;
  };

  // Dynamically generate suggestions
  const suggestionList = generateSuggestions();

  return (
    <div className="suggestion-container">
      <h2>Your Suggestions</h2>
      {suggestions.length === 0 ? (
        <p>No suggestions available</p>
      ) : (
        suggestionList.map((suggestion) => (
          <SuggestionCard
            key={`${suggestion.condition}-${suggestion.riskLevel}-${suggestion.type}`}
            suggestion={suggestion}
            userId={userId}
            refreshSuggestions={refreshSuggestions}
          />
        ))
      )}
    </div>
  );
};

export default ChatbotSuggestionPage;
