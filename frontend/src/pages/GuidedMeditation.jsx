import React, { useCallback, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box, Container, Chip, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Play, Heart, Share2, Bookmark, Volume2, ChevronLeft, ChevronRight, Menu, X, Moon, Sun, Clock, User, Award, Filter } from 'lucide-react';
import MeditationPlayer from '../components/MeditationPlayer';
import TestimonialCard from '../components/TestimonialCard';

const GuidedMeditation = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [audioElement, setAudioElement] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const audioRef = useRef(null);
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Create audio element on component mount
  useEffect(() => {
    const audio = new Audio('https://soundbible.com/mp3/Zen_Bell-SoundBible.com-2070036981.mp3');
    audio.loop = true;
    setAudioElement(audio);
    
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  // Simulate audio playback since we don't have actual audio files
  const handlePlayAudio = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        // Create a simple oscillator for demo purposes
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(432, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        setTimeout(() => {
          oscillator.stop();
        }, 2000);
        
        // Attempt to play the audio element as well
        audioElement.play().catch(e => console.log("Audio playback prevented by browser", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const meditationData = [
    {
      id: 1,
      title: "Morning Serenity",
      duration: "15 min",
      level: "Beginner",
      description: "Start your day with clarity and purpose. This gentle meditation helps you set positive intentions for the day ahead.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Morning",
      popularity: 4.8,
      totalListeners: "12.5k"
    },
    {
      id: 2,
      title: "Deep Relaxation",
      duration: "20 min",
      level: "Intermediate",
      description: "Release tension and find deep relaxation with this guided practice designed to calm your nervous system.",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Relaxation",
      popularity: 4.9,
      totalListeners: "18.3k"
    },
    {
      id: 3,
      title: "Mindful Awareness",
      duration: "10 min",
      level: "All Levels",
      description: "Cultivate present moment awareness with this mindfulness practice that helps you stay grounded throughout your day.",
      image: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Mindfulness",
      popularity: 4.7,
      totalListeners: "9.2k"
    },
    {
      id: 4,
      title: "Healing Sleep",
      duration: "30 min",
      level: "All Levels",
      description: "Drift into restorative sleep with this calming meditation designed to release the day and prepare for deep rest.",
      image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Sleep",
      popularity: 4.9,
      totalListeners: "22.1k"
    },
    {
      id: 5,
      title: "Chakra Balancing",
      duration: "25 min",
      level: "Advanced",
      description: "Harmonize your energy centers with this powerful chakra meditation that promotes overall wellbeing and vitality.",
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Energy",
      popularity: 4.6,
      totalListeners: "7.8k"
    },
    {
      id: 6,
      title: "Loving-Kindness",
      duration: "18 min",
      level: "Intermediate",
      description: "Cultivate compassion for yourself and others with this heart-centered meditation practice.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Compassion",
      popularity: 4.8,
      totalListeners: "11.3k"
    },
    {
      id: 7,
      title: "Stress Relief",
      duration: "12 min",
      level: "Beginner",
      description: "A quick but effective practice to release stress and tension whenever you need a moment of calm.",
      image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Stress Relief",
      popularity: 4.7,
      totalListeners: "15.6k"
    },
    {
      id: 8,
      title: "Nature Connection",
      duration: "22 min",
      level: "All Levels",
      description: "Reconnect with the natural world through this immersive meditation that restores your sense of belonging.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Nature",
      popularity: 4.8,
      totalListeners: "10.2k"
    },
    {
      id: 9,
      title: "Body Scan Relaxation",
      duration: "17 min",
      level: "Beginner",
      description: "Release physical tension and connect with your body through this progressive relaxation technique.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Relaxation",
      popularity: 4.6,
      totalListeners: "8.9k"
    },
    {
      id: 10,
      title: "Gratitude Practice",
      duration: "10 min",
      level: "All Levels",
      description: "Cultivate an attitude of gratitude and appreciation for the abundance in your life.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Mindfulness",
      popularity: 4.9,
      totalListeners: "14.7k"
    },
    {
      id: 11,
      title: "Anxiety Relief",
      duration: "15 min",
      level: "All Levels",
      description: "Calm anxious thoughts and find your center with this grounding meditation practice.",
      image: "https://images.unsplash.com/photo-1470092306007-055b6797ca72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Stress Relief",
      popularity: 4.8,
      totalListeners: "19.2k"
    },
    {
      id: 12,
      title: "Focus & Concentration",
      duration: "12 min",
      level: "Intermediate",
      description: "Sharpen your mind and improve concentration with this focused attention meditation.",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Focus",
      popularity: 4.7,
      totalListeners: "11.8k"
    }
  ];

  const categories = [...new Set(meditationData.map(item => item.category))];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "These guided meditations have transformed my daily routine. I feel more centered and calm throughout my day.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "As someone who struggled with meditation for years, these guided sessions finally helped me establish a consistent practice.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      text: "The sleep meditations have completely changed my relationship with rest. I fall asleep faster and wake up refreshed.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      text: "I've tried many meditation apps, but this one stands out for its quality and variety. The nature sounds are incredibly immersive.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "Sophia Kim",
      text: "The chakra balancing meditation helped me through a difficult time. I felt a noticeable shift in my energy after just one session.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4
    }
  ];

  const handleMeditationSelect = (meditation) => {
    setSelectedMeditation(meditation);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  // Filter meditations by category if one is selected
  const filteredMeditations = selectedCategory 
    ? meditationData.filter(item => item.category === selectedCategory)
    : meditationData;

  // Pagination
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredMeditations.length / itemsPerPage);
  const paginatedMeditations = filteredMeditations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <X size={20} />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Meditations" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Library" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
            Categories
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map(category => (
              <Chip 
                key={category}
                label={category} 
                onClick={() => {
                  handleCategorySelect(category);
                  setDrawerOpen(false);
                }}
                sx={{ 
                  bgcolor: selectedCategory === category ? '#a78bfa' : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': { bgcolor: selectedCategory === category ? '#9061f9' : 'rgba(255, 255, 255, 0.2)' }
                }}
                size="small"
              />
            ))}
          </Box>
        </Box>
      </Drawer>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              textAlign: 'center', 
              mb: 2,
              background: 'linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(167, 139, 250, 0.3)',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Guided Meditation Journey
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              maxWidth: '800px', 
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}
          >
            Discover peace, clarity, and balance through our expertly crafted meditation experiences
          </Typography>
        </motion.div>

        {selectedMeditation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              sx={{ 
                mb: 8, 
                p: { xs: 2, md: 4 }, 
                borderRadius: 4, 
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                  <Box 
                    component="img" 
                    src={selectedMeditation.image} 
                    alt={selectedMeditation.title}
                    sx={{ 
                      width: '100%', 
                      height: { xs: 200, md: 300 }, 
                      objectFit: 'cover', 
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Clock size={16} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {selectedMeditation.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <User size={16} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {selectedMeditation.totalListeners} listeners
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Award size={16} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {selectedMeditation.popularity}/5
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="overline" sx={{ color: '#a78bfa' }}>
                    {selectedMeditation.category} • {selectedMeditation.level}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {selectedMeditation.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
                    {selectedMeditation.description}
                  </Typography>
                  
                  {/* MeditationPlayer component with actual audio functionality */}
                  <MeditationPlayer duration={selectedMeditation.duration} />
                  
                  <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                    <Button 
                      variant="contained" 
                      startIcon={<Heart size={18} />}
                      sx={{ 
                        bgcolor: 'rgba(167, 139, 250, 0.2)', 
                        color: '#a78bfa',
                        '&:hover': { bgcolor: 'rgba(167, 139, 250, 0.3)' }
                      }}
                    >
                      Favorite
                    </Button>
                    <Button 
                      variant="contained" 
                      startIcon={<Share2 size={18} />}
                      sx={{ 
                        bgcolor: 'rgba(96, 165, 250, 0.2)', 
                        color: '#60a5fa',
                        '&:hover': { bgcolor: 'rgba(96, 165, 250, 0.3)' }
                      }}
                    >
                      Share
                    </Button>
                    <Button 
                      variant="contained" 
                      startIcon={<Bookmark size={18} />}
                      sx={{ 
                        bgcolor: 'rgba(248, 113, 113, 0.2)', 
                        color: '#f87171',
                        '&:hover': { bgcolor: 'rgba(248, 113, 113, 0.3)' }
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        )}

        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40%',
                    height: 3,
                    background: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
                    borderRadius: 4
                  }
                }}
              >
                Featured Meditations
              </Typography>
              
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button 
                    startIcon={<Filter size={16} />}
                    sx={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' }}
                    variant="outlined"
                  >
                    Filter
                  </Button>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                    <IconButton 
                      onClick={handlePrevPage} 
                      disabled={currentPage === 1}
                      sx={{ 
                        color: 'white', 
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&.Mui-disabled': {
                          color: 'rgba(255, 255, 255, 0.3)',
                        }
                      }}
                    >
                      <ChevronLeft size={20} />
                    </IconButton>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {currentPage} / {totalPages}
                    </Typography>
                    <IconButton 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      sx={{ 
                        color: 'white', 
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&.Mui-disabled': {
                          color: 'rgba(255, 255, 255, 0.3)',
                        }
                      }}
                    >
                      <ChevronRight size={20} />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            <AnimatePresence>
              {paginatedMeditations.map((meditation, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={meditation.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        background: 'rgba(30, 41, 59, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={meditation.image}
                          alt={meditation.title}
                        />
                        <Box 
                          sx={{ 
                            position: 'absolute', 
                            top: 10, 
                            right: 10, 
                            bgcolor: 'rgba(0, 0, 0, 0.6)', 
                            color: 'white',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}
                        >
                          {meditation.duration}
                        </Box>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box 
                          sx={{ 
                            display: 'inline-block', 
                            bgcolor: 'rgba(167, 139, 250, 0.2)', 
                            color: '#a78bfa',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            mb: 1.5
                          }}
                        >
                          {meditation.category}
                        </Box>
                        <Typography 
                          gutterBottom 
                          variant="h6" 
                          component="div" 
                          sx={{ 
                            fontWeight: 600,
                            color: 'white'
                          }}
                        >
                          {meditation.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mb: 2,
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}
                        >
                          {meditation.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.6)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5
                            }}
                          >
                            <Volume2 size={14} /> {meditation.level}
                          </Typography>
                          <Button
                            variant="contained"
                            startIcon={<Play size={16} />}
                            onClick={() => handleMeditationSelect(meditation)}
                            sx={{ 
                              bgcolor: '#a78bfa',
                              '&:hover': { bgcolor: '#9061f9' }
                            }}
                            size="small"
                          >
                            Play
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
          
          {/* Mobile pagination controls */}
          {isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 1}
                  sx={{ 
                    color: 'white', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&.Mui-disabled': {
                      color: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                >
                  <ChevronLeft size={20} />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {currentPage} / {totalPages}
                </Typography>
                <IconButton 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  sx={{ 
                    color: 'white', 
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&.Mui-disabled': {
                      color: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                >
                  <ChevronRight size={20} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4, 
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40%',
                  height: 3,
                  background: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
                  borderRadius: 4
                }
              }}
            >
              Browse by Category
            </Typography>
          </motion.div>

          <Grid container spacing={2}>
            {categories.map((category, index) => (
              <Grid item xs={6} sm={4} md={3} key={category}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Box 
                    sx={{ 
                      p: 3, 
                      borderRadius: 3, 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(96, 165, 250, 0.3) 100%)',
                      }
                    }}
                    onClick={() => handleCategorySelect(category)}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'white'
                      }}
                    >
                      {category}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        mt: 1
                      }}
                    >
                      {meditationData.filter(item => item.category === category).length} sessions
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4, 
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '40%',
                  height: 3,
                  background: 'linear-gradient(90deg, #a78bfa 0%, transparent 100%)',
                  borderRadius: 4
                }
              }}
            >
              What Our Members Say
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default GuidedMeditation;