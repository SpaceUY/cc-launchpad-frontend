import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Box, Grid, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import WhiteCard from 'design/WhiteCard';

import { createSelector } from 'redux/create/create.selector';
import { updateCreateForm } from 'redux/create/create.slice';
import { createIDO } from 'redux/ido/ido.actions';

import StepButtons from './StepButtons';
import StepContainer from './StepContainer';

const validationSchema = Yup.object().shape({
  // startDate: Yup.string().required('This is a required field'),
  vestingCliff: Yup.string().required('This is a required field'),
  investingPhase: Yup.string().required('This is a required field'),
  totalPeriods: Yup.string().required('This is a required field'),
  vestingPeriodInDays: Yup.string().required('This is a required field')
});

const StepThree = () => {
  const dispatch = useAppDispatch();
  const { createForm } = useSelector(createSelector);

  return (
    <Formik
      initialValues={{
        startDate: createForm.startDate,
        vestingCliff: createForm.vestingCliff,
        investingPhase: createForm.investingPhase,
        totalPeriods: createForm.totalPeriods,
        vestingPeriodInDays: createForm.vestingPeriodInDays
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      validateOnMount={false}
      onSubmit={(values) => {
        dispatch(updateCreateForm(values));
        console.log('createForm', createForm);
        dispatch(createIDO(createForm));
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        label="Start date"
                        defaultValue={dayjs()}
                        color="primary"
                        variant="filled"
                        name="start-date"
                        value={formik.values.startDate}
                        helperText={
                          !!formik.errors.startDate ? (
                            <Typography variant="body2" color="error">
                              This field is required
                            </Typography>
                          ) : (
                            <></>
                          )
                        }
                        onChange={(e) => formik.setFieldValue('startDate', e)}
                        sx={{ mt: '2rem' }}
                      />
                    </LocalizationProvider>
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
                      error={!!formik.errors.vestingCliff}
                      helperText={formik.errors.vestingCliff}
                      value={formik.values.vestingCliff}
                      onChange={(e) =>
                        formik.setFieldValue('vestingCliff', e.target.value)
                      }
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
                      error={!!formik.errors.totalPeriods}
                      helperText={formik.errors.totalPeriods}
                      value={formik.values.totalPeriods}
                      onChange={(e) =>
                        formik.setFieldValue('totalPeriods', e.target.value)
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
                      Investing Phase
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="investing-phase"
                      error={!!formik.errors.investingPhase}
                      helperText={formik.errors.investingPhase}
                      value={formik.values.investingPhase}
                      onChange={(e) =>
                        formik.setFieldValue('investingPhase', e.target.value)
                      }
                      label="Days"
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
                      Investing Phase
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      name="vestingPeriodInDays"
                      error={!!formik.errors.vestingPeriodInDays}
                      helperText={formik.errors.vestingPeriodInDays}
                      value={formik.values.vestingPeriodInDays}
                      onChange={(e) =>
                        formik.setFieldValue(
                          'vestingPeriodInDays',
                          e.target.value
                        )
                      }
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
