import { Dayjs } from 'dayjs';

export interface ICreateState {
  step: number;
  createForm: CreateFormState;
}

export type CreateFormState = {
  startDate: Dayjs;
  vestingCliff: string;
  investingPhase: string;
  tokenAddress: string;
  tokenPrice: string;
  softCap: string;
  hardCap: string;
  maxContribution: string;
  minContribution: string;
  name: string;
  description: string;
  chainId: number;
  totalPeriods: string;
  vestingPeriodInDays: string;
};
