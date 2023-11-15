import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
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

const StepThree = () => {
  const dispatch = useAppDispatch();
  const { createForm } = useSelector(createSelector);

  return (
    <Formik
      initialValues={{
        projectName: createForm.projectName,
        description: createForm.description,
        chainId: createForm.chainId
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
        </Form>
      )}
    </Formik>
  );
};
export default StepThree;
