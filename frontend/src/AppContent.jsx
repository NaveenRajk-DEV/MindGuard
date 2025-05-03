<<<<<<< HEAD
// src/AppContent.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { useAuth } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

// 🛠 Correct imports based on your folder
import BreathingExercise from "./UserDashboardPages/BreathingExercise";
import GuidedMeditation from "./UserDashboardPages/GuidedMeditation";
import CopingStrategies from "./UserDashboardPages/CopingStrategies";

// ✅ Import the new ChatbotSuggestionsPage
import ChatbotSuggestionsPage from "./UserDashboardPages/ChatbotSuggestionsPage";

const AppContent = () => {
  const { token, setToken } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Private Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ✅ Meditation & Mental Health routes */}
      <Route path="/breathing-exercise" element={<BreathingExercise />} />
      <Route path="/guided-meditation" element={<GuidedMeditation />} />
      <Route path="/coping-strategies" element={<CopingStrategies />} />
      <Route path="/chatbot-suggestions" element={<ChatbotSuggestionsPage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
=======
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ChartPage from "./pages/ChartPage.jsx";
import Journal from "./pages/Journal.jsx";
import Explore from "./pages/Explore.jsx";
import Articles from "./pages/Articles.jsx";
import Resources from "./pages/Resources.jsx";
import DataInsights from "./pages/DataInsights.jsx";
import Challenges from "./pages/Challenges.jsx";
import Community from "./pages/Community.jsx";
import MoodTracker from "./pages/MoodTracker.jsx";
import HelpResources from "./pages/HelpResources.jsx";
import EventDetails from "./pages/EventDetails.jsx"; 
import MeditationContent from "./components/MeditationContent.jsx";
import BreathingExercise from "./pages/BreathingExercise.jsx";
import GuidedMeditation from "./pages/GuidedMeditation.jsx";
import CopingStrategies from "./pages/CopingStrategies.jsx";
import Navbar from "./components/Navbar.jsx";
import ForumPage from "./components/ForumPage.jsx"; 
import ResourcesPage from "./components/ResourcesPage.jsx";

// ✅ Import new journal features
import TimeCapsule from "./components/TimeCapsule.jsx";
import VoiceJournal from "./components/VoiceJournal.jsx";
import JournalPrompts from "./components/JournalPrompts.jsx";
import JournalStreaks from "./components/JournalStreaks.jsx";
import StoryMode from "./components/StoryMode.jsx";
import AIReflections from "./components/AIReflections.jsx";
import LettersToSelf from "./components/LettersToSelf.jsx";
import EmotionAnalysis from "./components/EmotionAnalysis.jsx";

const AppContent = ({ token, setTokenAndStore }) => {
  const location = useLocation();
  const showNavbar = location.pathname === "/" || location.pathname === "/about";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login setToken={setTokenAndStore} />} />
        <Route path="/signup" element={token ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path="/dashboard" element={token ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/chat" element={<ChartPage />} />
        <Route path="/journal" element={token ? <Journal /> : <Navigate to="/login" />} />
        <Route path="/explore" element={token ? <Explore /> : <Navigate to="/login" />} />

        {/* ✅ Sub-routes for Explore */}
        <Route path="/explore/articles" element={token ? <Articles /> : <Navigate to="/login" />} />
        <Route path="/explore/resources" element={token ? <Resources /> : <Navigate to="/login" />} />
        <Route path="/explore/data-insights" element={token ? <DataInsights /> : <Navigate to="/login" />} />

        {/* ✅ New feature routes */}
        <Route path="/challenges" element={token ? <Challenges /> : <Navigate to="/login" />} />
        <Route path="/community" element={token ? <Community /> : <Navigate to="/login" />} />
        <Route path="/mood-tracker" element={token ? <MoodTracker /> : <Navigate to="/login" />} />
        <Route path="/help-resources" element={token ? <HelpResources /> : <Navigate to="/login" />} />

        {/* ✅ Meditation & Coping Routes */}
        <Route path="/meditation" element={token ? <MeditationContent /> : <Navigate to="/login" />} />
        <Route path="/breathing-exercise" element={token ? <BreathingExercise /> : <Navigate to="/login" />} />
        <Route path="/guided-meditation" element={token ? <GuidedMeditation /> : <Navigate to="/login" />} />
        <Route path="/coping-strategies" element={token ? <CopingStrategies /> : <Navigate to="/login" />} />

        {/* ✅ Event Details Route */}
        <Route path="/events/:eventTitle" element={<EventDetails />} />

        {/* ✅ New Routes: Forum & Resources */}
        <Route path="/forum" element={token ? <ForumPage /> : <Navigate to="/login" />} />
        <Route path="/resources" element={token ? <ResourcesPage /> : <Navigate to="/login" />} />

        {/* ✅ New Journal Feature Routes */}
        <Route path="/journal/time-capsule" element={token ? <TimeCapsule /> : <Navigate to="/login" />} />
        <Route path="/journal/voice-journal" element={token ? <VoiceJournal /> : <Navigate to="/login" />} />
        <Route path="/journal/journal-prompts" element={token ? <JournalPrompts /> : <Navigate to="/login" />} />
        <Route path="/journal/journal-streaks" element={token ? <JournalStreaks /> : <Navigate to="/login" />} />
        <Route path="/journal/story-mode" element={token ? <StoryMode /> : <Navigate to="/login" />} />
        <Route path="/journal/ai-reflections" element={token ? <AIReflections /> : <Navigate to="/login" />} />
        <Route path="/journal/letters-to-self" element={token ? <LettersToSelf /> : <Navigate to="/login" />} />
        <Route path="/journal/emotion-analysis" element={token ? <EmotionAnalysis /> : <Navigate to="/login" />} />
      </Routes>
    </>
>>>>>>> 233874662a4fd5fdf88e451938f8647a5dacdfd0
  );
};

export default AppContent;
