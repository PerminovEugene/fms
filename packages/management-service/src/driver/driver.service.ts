import { Injectable } from '@nestjs/common';
import { PrismaService } from '../general/database/prisma.service';
import {
  Pagination,
  PaginationQuery,
} from '../general/pagination/pagination.dto';
import { Driver, CreateDriverDto, UpdateDriverDto } from './driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  getDriver(id: number): Promise<Driver> {
    return this.prisma.driver.findUnique({ where: { id } });
  }

  getDrivers(paginationQuery: PaginationQuery): Pagination<Driver> {
    return {
      items: [],
      pageNumber: 0,
      pageSize: 10,
      lastPageNumber: 0,
    };
  }

  createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    return this.prisma.driver.create({
      data: createDriverDto,
    });
  }

  updateDriver(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver> {
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
