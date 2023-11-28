import React, { useState } from 'react';

import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

import { ProjectCard } from 'design/ProjectCard';

const ParticipatePage = () => {
  const [activeButton, setActiveButton] = useState('LIVE');
  const projectCards = Array.from({ length: 11 });
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName: string) => ({
    color: 'white',
    margin: '1rem',
    fontSize: '1.125rem',
    fontWeight: activeButton === buttonName ? 800 : 'normal',
    backgroundColor: 'transparent',
    borderRadius: 12
  });

  return (
    <Container
      sx={{
        minHeight: '50vh',
        maxHeight: '85vh',
        overflow: 'hidden',
        padding: 0
      }}>
      <Grid container gap={2} sx={{ marginTop: '1rem' }}>
        <Grid item xs={4} sm={8} md={4} sx={{ marginRight: '1rem' }}>
          <Typography variant="h3" color="white">
            PARTICIPATE
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ height: '100%' }}>
            <Button
              sx={buttonStyle('LIVE')}
              onClick={() => handleButtonClick('LIVE')}>
              LIVE
            </Button>
            <Button
              sx={buttonStyle('POPULAR')}
              onClick={() => handleButtonClick('POPULAR')}>
              POPULAR
            </Button>
            <Button
              sx={buttonStyle('COMING SOON')}
              onClick={() => handleButtonClick('COMING SOON')}>
              COMING SOON
            </Button>
            <Button
              sx={buttonStyle('ALL')}
              onClick={() => handleButtonClick('ALL')}>
              ALL
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: '1rem',
          overflow: 'auto',
          maxHeight: '40rem',
          justifyContent: 'center',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none'
        }}>
        {projectCards.map((_, index) => (
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ParticipatePage;
