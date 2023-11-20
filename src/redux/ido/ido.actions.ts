import { createAsyncThunk } from '@reduxjs/toolkit';
import { IdoService } from 'services/ido/ido.service';

import { CreateFormState } from 'redux/create/types/createState.interface';

export const createIDO = createAsyncThunk(
  'ido/create',
  async (data: CreateFormState) => {
    return IdoService.create(data);
  }
);
