import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../framework/database/prisma.service';
import {
  Pagination,
  PaginationQuery,
  getPaginationCondition,
  countLastPageNumber,
} from '../../framework/pagination/pagination.utils';
import { Trip, CreateTripDto, UpdateTripDto } from './trip.dto';

@Injectable()
export class TripService {
  constructor(private readonly prisma: PrismaService) {}

  getTrip(id: number): Promise<Trip> {
    return this.prisma.trip.findUnique({ where: { id } });
  }

  public async getTrips(
    paginationQuery: PaginationQuery,
  ): Promise<Pagination<Trip>> {
    const count = await this.prisma.trip.count();
    const lastPageNumber = countLastPageNumber(count, paginationQuery.pageSize);
    const records =
      lastPageNumber < paginationQuery.pageNumber
        ? []
        : await this.prisma.trip.findMany(
            getPaginationCondition(paginationQuery),
          );
    return {
      items: records,
      ...paginationQuery,
      lastPageNumber,
    };
  }

  public createTrip(createTripDto: CreateTripDto): Promise<Trip> {
    return this.prisma.trip.create({
      data: createTripDto,
    });
  }

  public updateTrip(
    id: number,
    updateTripDto: UpdateTripDto,
  ): Promise<Trip> {
    return this.prisma.trip.update({
      where: { id },
      data: updateTripDto,
    });
  }

  async removeTrip(id: number) {
    await this.prisma.trip.delete({
      where: { id },
    });
  }
}
