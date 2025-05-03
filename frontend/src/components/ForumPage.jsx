import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ForumPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "John Doe", content: "Mental health is important!", likes: 10 },
    { id: 2, user: "Jane Smith", content: "Take care of your mind and body.", likes: 7 },
  ]);
  const [newPost, setNewPost] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [editContent, setEditContent] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), user: "You", content: newPost, likes: 0 }]);
      setNewPost("");
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const startEditing = (post) => {
    setEditingPost(post.id);
    setEditContent(post.content);
  };

  const saveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingPost ? { ...post, content: editContent } : post
      )
    );
    setEditingPost(null);
    setEditContent("");
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "#333" }}>
        🗨️ Community Forum
      </Typography>

      {/* New Post Input */}
      <Box sx={{ width: "100%", maxWidth: 600, mb: 3 }}>
        <TextField
          fullWidth
          label="Share your thoughts..."
          multiline
          rows={3}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 2 }}
        />
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={addPost}
          sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#125a9c" } }}
        >
          Post
        </Button>
      </Box>

      {/* Posts Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ width: "100%", maxWidth: 800 }}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: "0 6px 20px rgba(0,0,0,0.2)" },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>{post.user[0]}</Avatar>
                  <Typography fontWeight="bold">{post.user}</Typography>
                </Box>
                {editingPost === post.id ? (
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                ) : (
                  <Typography sx={{ mt: 2 }}>{post.content}</Typography>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconButton color="primary" onClick={() => likePost(post.id)}>
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography>{post.likes}</Typography>
                </Box>
                <Box>
                  {editingPost === post.id ? (
                    <Button onClick={saveEdit} sx={{ textTransform: "none" }}>Save</Button>
                  ) : (
                    <>
                      <IconButton color="secondary" onClick={() => startEditing(post)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => deletePost(post.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ForumPage;