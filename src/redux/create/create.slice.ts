import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { CreateFormState, ICreateState } from './types/createState.interface';

const initialState: ICreateState = {
  step: 1,
  createForm: {
    name: '',
    description: '',
    chainId: 80001,
    tokenAddress: '',
    tokenPrice: '',
    softCap: '',
    hardCap: '',
    maxContribution: '',
    minContribution: '',
    startDate: dayjs(),
    vestingCliff: '',
    investingPhase: '',
    totalPeriods: '',
    vestingPeriodInDays: ''
  }
};

const createStateSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    handleNextStep: (state) => {
      if (state.step < 3) state.step = state.step + 1;
    },
    handlePreviousStep: (state) => {
      if (state.step > 1) state.step = state.step - 1;
    },
    updateCreateForm: (
      state,
      action: PayloadAction<Partial<CreateFormState>>
    ) => {
      state.createForm = { ...state.createForm, ...action.payload };
    }
  }
  // extraReducers: (builder) => {}
});

export const { handleNextStep, handlePreviousStep, updateCreateForm } =
  createStateSlice.actions;

export default createStateSlice.reducer;
