import React from 'react';
import { Box, Typography, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        sx={{ 
          p: 4, 
          borderRadius: 3, 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            background: 'linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)',
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar 
            src={testimonial.avatar} 
            alt={testimonial.name}
            sx={{ 
              width: 56, 
              height: 56,
              border: '2px solid rgba(167, 139, 250, 0.5)',
              mr: 2
            }}
          />
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600,
                color: 'white'
              }}
            >
              {testimonial.name}
            </Typography>
            <Rating 
              value={testimonial.rating} 
              readOnly 
              size="small"
              sx={{
                color: '#a78bfa',
                '& .MuiRating-iconEmpty': {
                  color: 'rgba(167, 139, 250, 0.3)'
                }
              }}
            />
          </Box>
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            flex: 1,
            position: 'relative',
            '&:before': {
              content: '"""',
              position: 'absolute',
              top: -10,
              left: -5,
              fontSize: '2rem',
              color: 'rgba(167, 139, 250, 0.3)',
              fontFamily: 'serif'
            },
            '&:after': {
              content: '"""',
              position: 'absolute',
              bottom: -30,
              right: -5,
              fontSize: '2rem',
              color: 'rgba(167, 139, 250, 0.3)',
              fontFamily: 'serif'
            },
            pl: 3
          }}
        >
          {testimonial.text}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default TestimonialCard;