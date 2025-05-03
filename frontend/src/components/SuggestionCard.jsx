import React, { useState } from 'react';
import axios from 'axios';

const SuggestionCard = ({ suggestion, refreshSuggestions, userId }) => {
  const [status, setStatus] = useState(suggestion.isCompleted ? 'completed' : 'pending'); // Set initial status based on the suggestion

  const handleStatusChange = async () => {
    try {
      // Toggle status between 'pending' and 'completed'
      const newStatus = status === 'pending' ? 'completed' : 'pending';
      setStatus(newStatus); // Update the status locally

      // Send the status change to the backend
      await axios.post('/api/suggestions/update-status', {
        userId,
        suggestionId: suggestion.suggestionId,
        newStatus,
      });

      // Refresh suggestions to reflect the updated status
      refreshSuggestions();
    } catch (err) {
      console.error('Error updating suggestion status:', err);
    }
  };

  return (
    <div className="p-4 border rounded shadow mb-4">
      <p><strong>Condition:</strong> {suggestion.condition}</p>
      <p><strong>Risk Level:</strong> {suggestion.riskLevel}</p>
      <p><strong>Type:</strong> {suggestion.type}</p>
      <p><strong>Suggestion:</strong> {suggestion.suggestion}</p>

      <button
        onClick={handleStatusChange}
        className={`px-4 py-2 rounded ${status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
      >
        {status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}
      </button>
    </div>
  );
};

export default SuggestionCard;
