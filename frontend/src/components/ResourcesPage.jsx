import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const YOUTUBE_API_KEY = "AIzaSyDzY3usd4TBfcJMlV9jQT3wjAQB7wNYRL0";
const NEWSAPI_KEY = "1bdf8787bffa4420bb8c1b477d2490ca";

const ResourcesPage = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchResources = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=mental+health&language=en&sortBy=publishedAt&apiKey=${NEWSAPI_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error fetching news articles:", err));

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=mental+health&type=video&maxResults=8&key=${YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items || []))
      .catch((err) => console.error("Error fetching YouTube videos:", err));
  };

  useEffect(() => {
    fetchResources();
    const interval = setInterval(fetchResources, 600000); // Refresh every 10 minutes
    return () => clearInterval(interval);
  }, []);

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
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: "#333" }}>
        📚 Explore Mental Health Resources
      </Typography>

      {/* News Articles Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <ArticleIcon color="primary" /> Latest Mental Health News
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {articles.slice(0, 6).map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" },
              }}
            >
              <CardActionArea component="a" href={article.url} target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={article.urlToImage || "https://via.placeholder.com/300"}
                  alt="News Thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" fontWeight="bold">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.source.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* YouTube Videos Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <PlayCircleOutlineIcon color="primary" /> Mental Health Videos
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {videos.slice(0, 6).map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" },
              }}
            >
              <CardActionArea component="a" href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
                <CardMedia
                  component="img"
                  height="180"
                  image={video.snippet.thumbnails.high.url}
                  alt="Video Thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" fontWeight="bold">
                    {video.snippet.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.snippet.channelTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourcesPage;