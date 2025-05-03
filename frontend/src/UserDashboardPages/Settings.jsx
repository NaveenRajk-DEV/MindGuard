import React, { useState, useEffect } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

const Settings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [supportEmail, setSupportEmail] = useState("");
  const navigate = useNavigate();

  const supportEmails = [
    "help@mentalhealthsupport.com",
    "contact@wellnessguide.org",
    "support@mindcare.net",
    "care@therapyhub.com",
    "connect@calmminds.co"
  ];

  // Fetch user information when component mounts
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await authService.getUserInfo();
        setUser(userInfo);
      } catch (err) {
        setError("Failed to load user information.");
      }
    };
    fetchUserInfo();

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    // Pick a random support email once on mount
    const randomEmail = supportEmails[Math.floor(Math.random() * supportEmails.length)];
    setSupportEmail(randomEmail);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    console.log("User logged out");
    navigate("/login");
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedData = {
        name: user.name,
        email: user.email,
        password: user.password,
        bio: user.bio,
      };
      await authService.updateUser(updatedData);
      setLoading(false);
      alert("Profile updated successfully!");
    } catch (err) {
      setError("Failed to update profile.");
      setLoading(false);
    }
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="settings-header">
        <h1>Settings</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <form onSubmit={handleSaveChanges} className="settings-form">
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label>Name</label>
          <input name="name" value={user.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" value={user.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Leave blank if you don't want to change the password"
          />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea name="bio" value={user.bio} onChange={handleChange} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>FAQ - Mental Health</h2>
        {[{
          question: "What are some signs of mental health struggles?",
          answer: "Some common signs include changes in mood, sleep issues, and difficulty concentrating."
        }, {
          question: "How can I manage stress effectively?",
          answer: "Try breathing exercises, exercise, healthy eating, and connecting with others."
        }, {
          question: "When should I seek professional help?",
          answer: "When your mental state impacts daily life or relationships, seek a therapist."
        }, {
          question: "Contact Support",
          answer: (
            <>If you need help, please contact us at: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></>
          )
        }].map((item, index) => (
          <div key={index} className="faq-item">
            <h3
              onClick={() => toggleFaq(index)}
              style={{ cursor: "pointer" }}
              className="faq-question"
            >
              {item.question}
            </h3>
            {faqOpen[index] && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;
