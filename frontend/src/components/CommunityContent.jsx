import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ForumIcon from "@mui/icons-material/Forum";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const CommunityContent = () => {
  const navigate = useNavigate();

  // Load posts from localStorage
  const [forumPosts, setForumPosts] = useState(
    JSON.parse(localStorage.getItem("forumPosts")) || [
      { user: "Anonymous", content: "Feeling overwhelmed with work. Any advice?" },
      { user: "Anonymous", content: "Meditation really helped me cope with anxiety!" },
    ]
  );
  const [newPost, setNewPost] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
  }, [forumPosts]);

  // Fetch real articles from an API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setForumPosts([{ user: "You", content: newPost }, ...forumPosts]);
      setNewPost("");
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = forumPosts.filter((_, i) => i !== index);
    setForumPosts(updatedPosts);
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #D8E2DC, #ECE4DB)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 4,
          color: "#333",
          textAlign: "center",
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        🌿 Community & Support
      </Typography>

      {/* Forum Section */}
      <Paper sx={{ p: 4, mb: 4, width: "100%", maxWidth: 600, borderRadius: 3, background: "#fff" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#444", display: "flex", alignItems: "center" }}>
          <ForumIcon sx={{ mr: 1, color: "#6A89CC" }} /> Anonymous Forums
        </Typography>
        <TextField
          fullWidth
          label="Share your thoughts..."
          variant="outlined"
          multiline
          rows={2}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          sx={{ mt: 2, background: "#f9f9f9", borderRadius: 1 }}
        />
        <Button
          variant="contained"
          onClick={() => navigate("/forum")}
          sx={{ mt: 2, background: "#6A89CC", "&:hover": { background: "#4A69BD" } }}
        >
          Go to Forum
        </Button>
        <List sx={{ mt: 2 }}>
          {forumPosts.map((post, index) => (
            <React.Fragment key={index}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" onClick={() => handleDeletePost(index)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                }
              >
                <ListItemText primary={<strong>{post.user}</strong>} secondary={post.content} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Therapist Recommendations */}
      <Paper sx={{ p: 4, mb: 4, width: "100%", maxWidth: 600, borderRadius: 3, background: "#fff" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#444", display: "flex", alignItems: "center" }}>
          <SupportAgentIcon sx={{ mr: 1, color: "#F4A261" }} /> Therapist Recommendations
        </Typography>
        <Typography sx={{ mt: 2 }}>✔ Dr. Sarah Williams - Anxiety & Stress Specialist</Typography>
        <Typography>✔ Dr. John Doe - Cognitive Behavioral Therapy</Typography>
        <Typography>✔ Dr. Emily Brown - Depression & Trauma Therapy</Typography>
        <Button
          variant="outlined"
          onClick={() => window.open("https://calendly.com/", "_blank")}
          sx={{ mt: 2, borderColor: "#F4A261", color: "#F4A261", "&:hover": { background: "#F4A261", color: "#fff" } }}
        >
          Book a Session
        </Button>
      </Paper>

      {/* Educational Content */}
      <Paper sx={{ p: 4, mb: 4, width: "100%", maxWidth: 600, borderRadius: 3, background: "#fff" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#444", display: "flex", alignItems: "center" }}>
          <MenuBookIcon sx={{ mr: 1, color: "#2A9D8F" }} /> Educational Resources
        </Typography>
        {articles.map((article) => (
          <Typography key={article.id} sx={{ mt: 2 }}>
            📚 {article.title.replace(/[^a-zA-Z0-9 ]/g, '')} {/* Removing Latin text if present */}
          </Typography>
        ))}
        <Button
          variant="outlined"
          onClick={() => navigate("/resources")}
          sx={{ mt: 2, borderColor: "#2A9D8F", color: "#2A9D8F", "&:hover": { background: "#2A9D8F", color: "#fff" } }}
        >
          View More
        </Button>
      </Paper>
    </Box>
  );
};

export default CommunityContent;
