export interface ICreateState {
  step: number;
  createForm: CreateFormState;
}

export type CreateFormState = {
  projectName: string;
  description: string;
  chainId: string;
};
