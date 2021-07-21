import { Model } from '../../framework/database/database.dto';

export type Driver = Model & CreateDriverDto;

export type CreateDriverDto = {
  mechanicalSkill: boolean;
  expirienceYears: number;
};
export type UpdateDriverDto = CreateDriverDto;
