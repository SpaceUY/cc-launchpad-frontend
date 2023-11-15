import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import { Box } from '@mui/material';

import WhiteButton from 'design/ContrastButton';

import { createSelector } from 'redux/create/create.selector';
import { handlePreviousStep } from 'redux/create/create.slice';

const StepButtons = () => {
  const dispatch = useAppDispatch();
  const createForm = useAppSelector(createSelector);
  return (
    <Box display="flex" mt="2rem" justifyContent="space-between" mb="2rem">
      <WhiteButton
        disabled={createForm && createForm?.step === 1}
        onClick={() => dispatch(handlePreviousStep())}
        type="button">
        Previous
      </WhiteButton>
      <WhiteButton type="submit">
        {createForm.step === 3 ? 'Submit' : 'Next'}
      </WhiteButton>
    </Box>
  );
};
export default StepButtons;
