import axios from 'axios';
import { baseURL } from 'services/instance';

import { CreateFormState } from 'redux/create/types/createState.interface';
import { IDO } from 'redux/ido/types/ido.entity';

import { IApiResponse } from 'types/apiResponse.type';

export const IdoService = {
  create: async (data: CreateFormState): Promise<IApiResponse<IDO>> => {
    const response = await axios.post<IApiResponse<IDO>>(
      `${baseURL}/ido`,
      data
    );
    return response.data;
  }
};
