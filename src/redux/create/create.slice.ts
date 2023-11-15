import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CreateFormState, ICreateState } from './types/createState.interface';

const initialState: ICreateState = {
  step: 1,
  createForm: {
    projectName: '',
    description: '',
    chainId: ''
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
    updateCreateForm: (state, action: PayloadAction<CreateFormState>) => {
      state.createForm = { ...state.createForm, ...action.payload };
    }
  }
  // extraReducers: (builder) => {}
});

export const { handleNextStep, handlePreviousStep, updateCreateForm } =
  createStateSlice.actions;

export default createStateSlice.reducer;
