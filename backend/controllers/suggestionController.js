// backend/controllers/suggestionController.js

import UserSuggestion from '../models/UserSuggestion.js';

// Controller to handle marking suggestion as complete
export const markSuggestionComplete = async (req, res) => {
  const { userId, suggestionId } = req.body;

  try {
    let suggestionRecord = await UserSuggestion.findOne({ userId, suggestionId });

    if (!suggestionRecord) {
      suggestionRecord = new UserSuggestion({
        userId,
        suggestionId,
        completed: false,
        count: 0,
      });
    }

    // Mark as complete and increment the count
    suggestionRecord.completed = true;
    suggestionRecord.count += 1;

    await suggestionRecord.save();

    res.json({ success: true, message: 'Suggestion marked as completed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update suggestion' });
  }
};

// Controller to fetch the suggestion status
export const getSuggestionStatus = async (req, res) => {
  const { userId, category, risk } = req.query;

  try {
    const suggestionStatus = await UserSuggestion.find({
      userId,
      category,
      risk,
    });

    const status = suggestionStatus.reduce((acc, suggestion) => {
      acc[suggestion.suggestionId] = {
        completed: suggestion.completed,
        count: suggestion.count,
      };
      return acc;
    }, {});

    res.json({ status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch suggestion status' });
  }
};
