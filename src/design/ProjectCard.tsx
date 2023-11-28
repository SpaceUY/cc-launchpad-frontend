import React from 'react';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';

interface ProjectCard_prop {
  logo?: string;
  projectName?: string;
  projectDescription?: string;
  projectGoal?: string;
}
export const ProjectCard: React.FC<ProjectCard_prop> = ({}) => {
  return (
    <Box
      sx={{
        minWidth: '20rem',
        width: '23rem',
        height: '16rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #000',
        boxShadow: 'rgba(255, 255, 255, 0.5) 4px 4px 4px',
        borderRadius: '0.5rem'
      }}>
      <Grid container spacing={1.25} margin={1.5}>
        <Grid item xs={9}>
          <Typography
            sx={{
              paddingTop: '0.75rem',
              fontFamily: 'Roboto',
              fontSize: '0.875rem',
              fontWeight: '700'
            }}>
            Project Name
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            alt=""
            src="https://cdn.beyond.partners/wp-content/uploads/2022/10/25165940/spacedev-uxyV2-logo.png"
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1.25rem',
              fontWeight: '400'
            }}>
            Keys to writing copy that actually converts and sells users
          </Typography>
        </Grid>
        <Grid item xs={5.5}>
          <Typography
            sx={{
              paddingTop: '0.75rem',
              fontFamily: 'Roboto',
              fontSize: '1.125rem',
              fontWeight: '400'
            }}>
            Goal: 00000000
          </Typography>
        </Grid>
        <Grid item xs={5.25}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
            {' '}
            <IconButton size="medium" color="primary">
              <AddBoxOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
