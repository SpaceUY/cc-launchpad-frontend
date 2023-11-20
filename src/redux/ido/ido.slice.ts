import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { createIDO } from './ido.actions';
import { IDO } from './types/ido.entity';
import { IIdoState } from './types/idoState.interface';

const initialState: IIdoState = {
  idos: []
};

const idStateSlice = createSlice({
  name: 'ido',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createIDO.fulfilled,
      (state, action: PayloadAction<IDO>) => {
        state.idos = [action.payload, ...state.idos];
      }
    );
  }
});

// export const {} = createStateSlice.actions;

export default idStateSlice.reducer;
