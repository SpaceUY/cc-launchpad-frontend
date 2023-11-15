import { Form, Formik } from 'formik';

import { Box, Grid, TextField, Typography } from '@mui/material';

import WhiteCard from 'design/WhiteCard';

import StepButtons from './StepButtons';
import StepContainer from './StepContainer';

const StepTwo = () => {
  return (
    <Formik initialValues={{}} onSubmit={(values) => {}}>
      {(formik) => (
        <Form>
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
                      Token Address
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="token-address"
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
                      Token Price
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="token-price"
                      label="USD"
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
                      Soft Cap
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="Soft-cap"
                      label="USD"
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
                      Hard Cap
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="hard-cap"
                      label="USD"
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
                      Max Contribution
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="max-contribution"
                      label="USD"
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
                      Min Contribution
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="min-contribution"
                      label="USD"
                      sx={{ mt: '2rem' }}
                    />
                  </Box>
                </WhiteCard>
              </Grid>
            </Grid>
            <StepButtons />
          </StepContainer>
        </Form>
      )}
    </Formik>
  );
};
export default StepTwo;
