import { Form, Formik } from 'formik';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Box, Grid, TextField, Typography } from '@mui/material';

import WhiteCard from 'design/WhiteCard';

import { createSelector } from 'redux/create/create.selector';
import { handleNextStep, updateCreateForm } from 'redux/create/create.slice';

import StepButtons from './StepButtons';
import StepContainer from './StepContainer';

const validationSchema = Yup.object().shape({
  tokenAddress: Yup.string().required('This is a required field'),
  tokenPrice: Yup.string().required('This is a required field'),
  softCap: Yup.string().required('This is a required field'),
  hardCap: Yup.string().required('This is a required field'),
  maxContribution: Yup.string().required('This is a required field'),
  minContribution: Yup.string().required('This is a required field')
});

const StepTwo = () => {
  const dispatch = useAppDispatch();
  const { createForm } = useSelector(createSelector);

  return (
    <Formik
      initialValues={{
        tokenAddress: createForm.tokenAddress,
        tokenPrice: createForm.tokenPrice,
        softCap: createForm.softCap,
        hardCap: createForm.hardCap,
        maxContribution: createForm.maxContribution,
        minContribution: createForm.minContribution
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      validateOnMount={false}
      onSubmit={(values) => {
        dispatch(updateCreateForm(values));
        dispatch(handleNextStep());
      }}>
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
                      helperText={formik.errors.tokenAddress}
                      error={!!formik.errors.tokenAddress}
                      value={formik.values.tokenAddress}
                      onChange={(e) =>
                        formik.setFieldValue('tokenAddress', e.target.value)
                      }
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
                      helperText={formik.errors.tokenPrice}
                      error={!!formik.errors.tokenPrice}
                      value={formik.values.tokenPrice}
                      onChange={(e) =>
                        formik.setFieldValue('tokenPrice', e.target.value)
                      }
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
                      helperText={formik.errors.softCap}
                      error={!!formik.errors.softCap}
                      value={formik.values.softCap}
                      onChange={(e) =>
                        formik.setFieldValue('softCap', e.target.value)
                      }
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
                      helperText={formik.errors.hardCap}
                      error={!!formik.errors.hardCap}
                      value={formik.values.hardCap}
                      onChange={(e) =>
                        formik.setFieldValue('hardCap', e.target.value)
                      }
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
                      Min Contribution
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      helperText={formik.errors.minContribution}
                      error={!!formik.errors.minContribution}
                      value={formik.values.minContribution}
                      onChange={(e) =>
                        formik.setFieldValue('minContribution', e.target.value)
                      }
                      name="min-contribution"
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
                      Max Contribution
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      helperText={formik.errors.maxContribution}
                      error={!!formik.errors.maxContribution}
                      value={formik.values.maxContribution}
                      onChange={(e) =>
                        formik.setFieldValue('maxContribution', e.target.value)
                      }
                      name="max-contribution"
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
