import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const books = [
  { title: "Atomic Habits", author: "James Clear", summary: "A guide to building good habits and breaking bad ones." },
  { title: "The Power of Now", author: "Eckhart Tolle", summary: "Learn the importance of living in the present moment." },
];

export default function Books() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">📚 Recommended Books</Typography>
      {books.map((book, index) => (
        <Card key={index} sx={{ borderRadius: "15px", boxShadow: 3, p: 2, mt: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">{book.title}</Typography>
            <Typography variant="body2" color="text.secondary">By {book.author}</Typography>
            <Typography variant="body1" mt={1}>{book.summary}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
