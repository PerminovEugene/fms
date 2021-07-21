import { Model } from '../../framework/database/database.dto';

export type Vehicle = Model & CreateVehicleDto;

export type CreateVehicleDto = {
  name: string;
  model: string;
};
export type UpdateVehicleDto = CreateVehicleDto;
