import axios from 'axios';
import { baseURL } from 'services/instance';

import { CreateFormState } from 'redux/create/types/createState.interface';
import { IDO } from 'redux/ido/types/ido.entity';

import { IApiResponse } from 'types/apiResponse.type';

export const IdoService = {
  create: async (data: CreateFormState): Promise<IApiResponse<IDO>> => {
    const response = await axios.post<IApiResponse<IDO>>(`${baseURL}/ido`, {
      name: data.name,
      description: data.description,
      contractAddress: undefined,
      chainId: data.chainId.toString(),
      tokenAddress: data.tokenAddress,
      tokenPrice: Number(data.tokenPrice),
      softCap: Number(data.softCap),
      hardCap: Number(data.hardCap),
      startDate: data.startDate.toDate(),
      minContribution: Number(data.minContribution),
      maxContribution: Number(data.maxContribution),
      investingPhaseInDays: Number(data.investingPhase),
      vestingCliffInDays: Number(data.vestingCliff),
      vestingTotalPeriods: Number(data.totalPeriods),
      vestingPeriodInDays: Number()
    });
    return response.data;
  }
};
