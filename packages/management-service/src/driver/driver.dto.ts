import { Model } from '../general/database/database.dto';

export type Driver = Model & CreateDriverDto;

export type CreateDriverDto = {
  status: string;
};
export type UpdateDriverDto = CreateDriverDto;
