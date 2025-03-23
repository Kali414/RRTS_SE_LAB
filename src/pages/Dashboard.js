import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

function Dashboard() {
  const [counts, setCounts] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    inProgress: 0
  });

  const targetCounts = {
    total: 69,
    pending: 27,
    completed: 22,
    inProgress: 19
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const incrementCounts = () => {
      setCounts(prevCounts => ({
        total: Math.min(prevCounts.total + targetCounts.total / steps, targetCounts.total),
        pending: Math.min(prevCounts.pending + targetCounts.pending / steps, targetCounts.pending),
        completed: Math.min(prevCounts.completed + targetCounts.completed / steps, targetCounts.completed),
        inProgress: Math.min(prevCounts.inProgress + targetCounts.inProgress / steps, targetCounts.inProgress)
      }));
    };

    const timer = setInterval(incrementCounts, interval);

    return () => clearInterval(timer);
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Total Requests
            </Typography>
            <Typography variant="h4">{Math.round(counts.total)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Pending Requests
            </Typography>
            <Typography variant="h4">{Math.round(counts.pending)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Completed Requests
            </Typography>
            <Typography variant="h4">{Math.round(counts.completed)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography variant="h6" gutterBottom>
              In Progress
            </Typography>
            <Typography variant="h4">{Math.round(counts.inProgress)}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

// ✅ Make sure to export it as default
export default Dashboard;

