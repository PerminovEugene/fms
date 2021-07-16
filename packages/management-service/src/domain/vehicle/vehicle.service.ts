import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../framework/database/prisma.service';
import {
  getPaginationCondition,
  Order,
  Pagination,
  PaginationQuery,
} from '../../framework/pagination/pagination.utils';
import { Vehicle, CreateVehicleDto, UpdateVehicleDto } from './vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(private readonly prisma: PrismaService) {}

  getVehicle(id: number): Promise<Vehicle> {
    return this.prisma.vehicle.findUnique({ where: { id } });
  }

  public async getVehicles(
    paginationQuery: PaginationQuery,
  ): Promise<Pagination<Vehicle>> {
    const records = await this.prisma.vehicle.findMany({
      ...getPaginationCondition(paginationQuery),
    });
    return {
      items: records,
      ...paginationQuery,
      lastPageNumber: 1, // TODO make real number
    };
  }

  createVehicle(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.prisma.vehicle.create({
      data: createVehicleDto,
    });
  }

  updateVehicle(
    id: number,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.prisma.vehicle.update({
      where: { id },
      data: updateVehicleDto,
    });
  }

  async removeVehicle(id: number) {
    await this.prisma.vehicle.delete({
      where: { id },
    });
  }
}
