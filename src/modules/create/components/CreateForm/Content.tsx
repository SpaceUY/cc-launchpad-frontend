import { useAppSelector } from 'hooks/useAppSelector';

import { createSelector } from 'redux/create/create.selector';

import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const Content = () => {
  const createForm = useAppSelector(createSelector);

  return (
    <>
      {createForm.step === 1 && <StepOne />}
      {createForm.step === 2 && <StepTwo />}
      {createForm.step === 3 && <StepThree />}
    </>
  );
};
export default Content;
