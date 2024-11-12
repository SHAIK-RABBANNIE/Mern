import React, { useState } from 'react';
import './SelfLearning.css';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Event data with video URLs and descriptions
const events = [
  {
    title: 'Communication Skills',
    description: 'An online session to learn Communication Skills for new employees.',
    liveStreamUrl: 'https://www.youtube.com/embed/HAnw168huqA',
  },
  {
    title: 'Leadership Training',
    description: 'Developing skills for managing teams, making strategic decisions, and inspiring others.',
    liveStreamUrl: 'https://www.youtube.com/embed/qzoIAJYPQwo',
  },
  {
    title: 'Webinar on AI Tools',
    description: 'Explore the top AI tools for engineers.',
    liveStreamUrl: 'https://www.youtube.com/embed/mEsleV16qdo',
  },
  {
    title: 'MERN Stack Front-End Projects',
    description: 'Learn how to build a website using Node.js and React.js.',
    liveStreamUrl: 'https://www.youtube.com/embed/CvCiNeLnZ00',
  },
  {
    title: 'Python Front-End Development',
    description: 'Build front-end projects using Python and OOP concepts.',
    liveStreamUrl: 'https://www.youtube.com/embed/jBzwzrDvZ18',
  },
  {
    title: 'Java Full Course',
    description: 'Master the concepts of Java from scratch.',
    liveStreamUrl: 'https://www.youtube.com/embed/4XTsAAHW_Tc',
  },
  {
    title: 'Learn C++',
    description: 'Explore the power of C++ programming.',
    liveStreamUrl: 'https://www.youtube.com/embed/SYd5F4gIH90',
  },
];

const LiveStreaming = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Open the video dialog
  const handleOpenVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  // Close the video dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Self Learning and Training</h1>

      <div style={styles.eventsContainer}>
        {events.map((event, index) => (
          <div key={index} style={styles.eventWrapper}>
            <div style={styles.eventContent}>
              <h2 style={styles.eventTitle}>{event.title}</h2>
              <p style={styles.eventDescription}>{event.description}</p>
            </div>
            <button
              style={styles.playButton}
              onClick={() => handleOpenVideo(event.liveStreamUrl)}
            >
              Watch Live
            </button>
          </div>
        ))}
      </div>

      {/* Video Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography variant="h6">Live Stream</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: '#000' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Event Video"
                style={styles.videoIframe}
              ></iframe>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '40px',
  },
  eventsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
  eventWrapper: {
    flex: '1 1 calc(33% - 20px)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  eventContent: {
    marginBottom: '10px',
  },
  eventTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  eventDescription: {
    fontSize: '16px',
    color: '#7f8c8d',
  },
  playButton: {
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default LiveStreaming;
