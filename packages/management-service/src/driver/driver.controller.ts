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
import { DriverService } from './driver.service';
import { Driver, CreateDriverDto, UpdateDriverDto } from './driver.dto';
import { PaginationQuery } from 'src/general/pagination/pagination.dto';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  findAll(@Query() { pageNumber, pageSize }: PaginationQuery) {
    return this.driverService.getDrivers({ pageNumber, pageSize });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Driver> {
    return this.driverService.getDriver(parseInt(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(parseInt(id), updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.driverService.removeDriver(parseInt(id));
  }
}
