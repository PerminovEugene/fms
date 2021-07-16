import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../framework/database/prisma.service';
import {
  Pagination,
  PaginationQuery,
  getPaginationCondition,
} from '../../framework/pagination/pagination.utils';
import { Driver, CreateDriverDto, UpdateDriverDto } from './driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  getDriver(id: number): Promise<Driver> {
    return this.prisma.driver.findUnique({ where: { id } });
  }

  public async getDrivers(
    paginationQuery: PaginationQuery,
  ): Promise<Pagination<Driver>> {
    const records = await this.prisma.driver.findMany({
      ...getPaginationCondition(paginationQuery),
    });
    return {
      items: records,
      ...paginationQuery,
      lastPageNumber: 1, // TODO make real number
    };
  }

  public createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    return this.prisma.driver.create({
      data: createDriverDto,
    });
  }

  public updateDriver(
    id: number,
    updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.prisma.driver.update({
      where: { id },
      data: updateDriverDto,
    });
  }

  async removeDriver(id: number) {
    await this.prisma.driver.delete({
      where: { id },
    });
  }
}
