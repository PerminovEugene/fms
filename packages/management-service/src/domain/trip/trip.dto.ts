import { Model } from '../../framework/database/database.dto';

export type Trip = Model & CreateTripDto;

export type CreateTripDto = {
  driverId: number;
  vehicleId: number;
  start: Date;
  end: Date;
};
export type UpdateTripDto = CreateTripDto;
