import mongoose from 'mongoose';

const JournalEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true }
});

const JournalEntry = mongoose.model('JournalEntry', JournalEntrySchema);
export default JournalEntry;
