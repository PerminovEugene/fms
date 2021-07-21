import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip, CreateTripDto, UpdateTripDto } from './trip.dto';
import { Order } from '../../framework/pagination/pagination.utils';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto): Promise<Trip> {
    return this.tripService.createTrip(createTripDto);
  }

  @Get()
  findAll(
    @Query('pageNumber', ParseIntPipe) pageNumber: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
    @Query('order') order: Order, // Add custom pipe
  ) {
    return this.tripService.getTrips({ pageNumber, pageSize, order });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Trip> {
    return this.tripService.getTrip(parseInt(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTripDto: UpdateTripDto,
  ): Promise<Trip> {
    return this.tripService.updateTrip(parseInt(id), updateTripDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tripService.removeTrip(parseInt(id));
  }
}
