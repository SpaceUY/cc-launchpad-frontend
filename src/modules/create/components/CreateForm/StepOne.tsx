import { Form, Formik } from 'formik';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

import WhiteCard from 'design/WhiteCard';

import { createSelector } from 'redux/create/create.selector';
import { handleNextStep, updateCreateForm } from 'redux/create/create.slice';

import StepButtons from './StepButtons';
import StepContainer from './StepContainer';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  description: Yup.string().required('This is a required field'),
  chainId: Yup.string().required('This is a required field')
});

const StepOne = () => {
  const dispatch = useAppDispatch();
  const { createForm } = useSelector(createSelector);

  return (
    <Formik
      initialValues={{
        name: createForm.name,
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
                  <Box
                    display="flex"
                    flexDirection="column"
                    width="40vw"
                    maxWidth="100%"
                    m="auto">
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
                      label="Name"
                      error={!!formik.errors.name}
                      helperText={formik.errors.name}
                      name="project-name"
                      value={formik.values.name}
                      onChange={(e) =>
                        formik.setFieldValue('name', e.target.value)
                      }
                      sx={{ my: '2rem' }}
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
                      sx={{ mb: '2rem' }}
                    />
                    <FormControl variant="filled">
                      <InputLabel id="chain-label">Chain</InputLabel>
                      <Select
                        labelId="chain-label"
                        color="primary"
                        name="chain-id"
                        error={!!formik.errors.chainId}
                        value={formik.values.chainId}
                        onChange={(e) =>
                          formik.setFieldValue(
                            'chainId',
                            e.target.value as string
                          )
                        }>
                        <MenuItem value={80001}>Polygon Mumbai</MenuItem>
                      </Select>
                    </FormControl>
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
