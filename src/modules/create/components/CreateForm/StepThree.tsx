import { Box, Grid, TextField, Typography } from '@mui/material';

import WhiteCard from 'design/WhiteCard';

import StepButtons from './StepButtons';
import StepContainer from './StepContainer';

const StepThree = () => {
  return (
    <StepContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item display="flex" flexDirection="column" gap={2}>
          <WhiteCard>
            <Box display="flex" flexDirection="column">
              <Typography
                color="#2E308D"
                fontSize="0.875rem"
                fontWeight={500}
                letterSpacing="0.7031rem"
                textTransform="uppercase">
                Start date
              </Typography>
              <TextField
                color="primary"
                variant="filled"
                name="start-date"
                sx={{ mt: '2rem' }}
              />
            </Box>
          </WhiteCard>
        </Grid>
        <Grid item display="flex" flexDirection="column" gap={2}>
          <WhiteCard>
            <Box display="flex" flexDirection="column">
              <Typography
                color="#2E308D"
                fontSize="0.875rem"
                fontWeight={500}
                letterSpacing="0.7031rem"
                textTransform="uppercase">
                Vesting Cliff
              </Typography>
              <TextField
                color="primary"
                variant="filled"
                label="Days"
                name="vesting-cliff"
                sx={{ mt: '2rem' }}
              />
            </Box>
          </WhiteCard>
          <WhiteCard>
            <Box display="flex" flexDirection="column">
              <Typography
                color="#2E308D"
                fontSize="0.875rem"
                fontWeight={500}
                letterSpacing="0.7031rem"
                textTransform="uppercase">
                Vesting Total Periods
              </Typography>
              <TextField
                color="primary"
                variant="filled"
                name="vesting-total-periods"
                sx={{ mt: '2rem' }}
              />
            </Box>
          </WhiteCard>
        </Grid>
        <Grid item display="flex" flexDirection="column" gap={2}>
          <WhiteCard>
            <Box display="flex" flexDirection="column">
              <Typography
                color="#2E308D"
                fontSize="0.875rem"
                fontWeight={500}
                letterSpacing="0.7031rem"
                textTransform="uppercase">
                Investing Phase
              </Typography>
              <TextField
                color="primary"
                variant="filled"
                name="investing-phase"
                label="Days"
                sx={{ mt: '2rem' }}
              />
            </Box>
          </WhiteCard>
        </Grid>
      </Grid>
      <StepButtons />
    </StepContainer>
  );
};
export default StepThree;
