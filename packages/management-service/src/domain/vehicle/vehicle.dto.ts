import { Model } from '../../framework/database/database.dto';

export type Vehicle = Model & CreateVehicleDto;

export type CreateVehicleDto = {
  name: string;
};
export type UpdateVehicleDto = CreateVehicleDto;
