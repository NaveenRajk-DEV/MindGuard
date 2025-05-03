import React, { useState } from "react";
import { Box, Typography, Card, CardContent, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const initialPosts = [
  { username: "User1", content: "How do you manage stress effectively?" },
  { username: "User2", content: "Any recommendations for mindfulness apps?" },
];

export default function CommunityDetail() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { username: "Anonymous", content: newPost }]);
      setNewPost("");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🤝 Community & Peer Support</Typography>
      <Typography variant="body1" mt={1}>Join discussions, share experiences, and support others.</Typography>

      <TextField
        fullWidth
        label="Share something..."
        variant="outlined"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" sx={{ mt: 1 }} onClick={handlePost}>Post</Button>

      <List sx={{ mt: 3 }}>
        {posts.map((post, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #ccc" }}>
            <ListItemText primary={post.username} secondary={post.content} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
