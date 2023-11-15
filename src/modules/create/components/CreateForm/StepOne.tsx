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
  projectName: Yup.string().required('This is a required field'),
  description: Yup.string().required('This is a required field'),
  chainId: Yup.string().required('This is a required field')
});

const StepOne = () => {
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
              <Grid item>
                <WhiteCard>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      color="#2E308D"
                      fontSize="0.875rem"
                      fontWeight={500}
                      letterSpacing="0.7031rem"
                      textTransform="uppercase">
                      The project
                    </Typography>
                    <TextField
                      color="primary"
                      variant="filled"
                      label="Proyect title"
                      error={!!formik.errors.projectName}
                      helperText={formik.errors.projectName}
                      name="project-name"
                      value={formik.values.projectName}
                      onChange={(e) =>
                        formik.setFieldValue('projectName', e.target.value)
                      }
                      sx={{ my: '2rem', width: 'fit-content' }}
                    />
                    <TextField
                      color="primary"
                      variant="filled"
                      label="Description"
                      error={!!formik.errors.description}
                      helperText={formik.errors.description}
                      name="description"
                      value={formik.values.description}
                      onChange={(e) =>
                        formik.setFieldValue('description', e.target.value)
                      }
                      multiline
                      rows={6}
                    />
                    <TextField
                      color="primary"
                      variant="filled"
                      label="Chain id"
                      name="chain-id"
                      error={!!formik.errors.chainId}
                      helperText={formik.errors.chainId}
                      value={formik.values.chainId}
                      onChange={(e) =>
                        formik.setFieldValue('chainId', e.target.value)
                      }
                      sx={{ mt: '2rem', width: 'fit-content' }}
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
export default StepOne;
