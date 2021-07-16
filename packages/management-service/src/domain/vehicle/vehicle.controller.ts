import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle, CreateVehicleDto, UpdateVehicleDto } from './vehicle.dto';
import { PaginationQuery } from 'src/framework/pagination/pagination.utils';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.createVehicle(createVehicleDto);
  }

  @Get()
  findAll(@Query() { pageNumber, pageSize, order }: PaginationQuery) {
    return this.vehicleService.getVehicles({ pageNumber, pageSize, order });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.getVehicle(parseInt(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.updateVehicle(parseInt(id), updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.vehicleService.removeVehicle(parseInt(id));
  }
}
