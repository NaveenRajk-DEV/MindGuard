import React, { useState, useEffect, useRef } from 'react';
import { Box, Slider, IconButton, Typography, LinearProgress } from '@mui/material';
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react';

const MeditationPlayer = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [audioContext, setAudioContext] = useState(null);
  const [oscillator, setOscillator] = useState(null);
  const [gainNode, setGainNode] = useState(null);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const totalMinutes = parseInt(duration.split(' ')[0]);
  const totalSeconds = totalMinutes * 60;

  const formatTime = (minutes, seconds) => {
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    audioRef.current = new Audio('https://soundbible.com/mp3/Zen_Bell-SoundBible.com-2070036981.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (oscillator) {
        oscillator.stop();
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!isPlaying) {
      try {
        if (audioRef.current) {
          audioRef.current.volume = volume / 100;
          audioRef.current.play().catch(() => {
            if (!audioContext) {
              const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
              const newGainNode = newAudioContext.createGain();
              newGainNode.gain.setValueAtTime(volume / 100, newAudioContext.currentTime);
              newGainNode.connect(newAudioContext.destination);
              
              const newOscillator = newAudioContext.createOscillator();
              newOscillator.type = 'sine';
              newOscillator.frequency.setValueAtTime(432, newAudioContext.currentTime);
              newOscillator.connect(newGainNode);
              newOscillator.start();
              
              setAudioContext(newAudioContext);
              setGainNode(newGainNode);
              setOscillator(newOscillator);
            } else if (audioContext.state === 'suspended') {
              audioContext.resume();
            }
          });
        }
        intervalRef.current = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(intervalRef.current);
              setIsPlaying(false);
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              if (oscillator) {
                oscillator.stop();
              }
              return 0;
            }
            return prev + (100 / (totalSeconds * 10));
          });
        }, 100);
      } catch (e) {
        console.error("Error starting audio playback:", e);
      }
    } else {
      clearInterval(intervalRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioContext && audioContext.state === 'running') {
        audioContext.suspend();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
    if (gainNode) {
      gainNode.gain.setValueAtTime(newValue / 100, audioContext.currentTime);
    }
  };

  return (
    <Box sx={{ width: 300, textAlign: 'center' }}>
      <Typography variant="h6">Meditation Timer</Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ marginY: 2 }} />
      <Typography>{formatTime(Math.floor((progress / 100) * totalMinutes), Math.floor(((progress / 100) * totalSeconds) % 60))}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
        <IconButton onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
        <IconButton>
          {volume === 0 ? <VolumeX /> : volume < 50 ? <Volume1 /> : <Volume2 />}
        </IconButton>
        <Slider value={volume} onChange={handleVolumeChange} min={0} max={100} sx={{ width: 150 }} />
      </Box>
    </Box>
  );
};

export default MeditationPlayer;
