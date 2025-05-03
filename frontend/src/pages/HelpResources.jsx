import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const resources = [
  { title: "National Mental Health Helpline", contact: "1-800-123-4567" },
  { title: "Find a Therapist", link: "https://www.psychologytoday.com" },
  { title: "Self-Help Guides", link: "https://mentalhealth.org/selfhelp" },
];

export default function HelpResources() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">🏥 Professional Help & Resources</Typography>
      <Typography variant="body1" mt={1}>Find support from professionals & self-help resources.</Typography>

      {resources.map((resource, index) => (
        <Card key={index} sx={{ mt: 2, p: 2 }}>
          <CardContent>
            <Typography variant="h6">{resource.title}</Typography>
            {resource.contact ? (
              <Typography variant="body2">📞 {resource.contact}</Typography>
            ) : (
              <Button variant="outlined" href={resource.link} target="_blank">Visit</Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
