import { Injectable } from '@nestjs/common';
import { PrismaService } from '../general/database/prisma.service';
import {
  Pagination,
  PaginationQuery,
} from '../general/pagination/pagination.dto';
import { Vehicle, CreateVehicleDto, UpdateVehicleDto } from './vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(private readonly prisma: PrismaService) {}

  getVehicle(id: number): Promise<Vehicle> {
    return this.prisma.vehicle.findUnique({ where: { id } });
  }

  getVehicles(paginationQuery: PaginationQuery): Pagination<Vehicle> {
    return {
      items: [],
      pageNumber: 0,
      pageSize: 10,
      lastPageNumber: 0,
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
