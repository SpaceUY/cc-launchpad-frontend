export interface ICreateState {
  step: number;
  createForm: CreateFormState;
}

export type CreateFormState = {
  tokenAddress: string;
  tokenPrice: string;
  softCap: string;
  hardCap: string;
  maxContribution: string;
  minContribution: string;
  projectName: string;
  description: string;
  chainId: string;
};
