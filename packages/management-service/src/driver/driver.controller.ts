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
  create(@Body() createDriverDto: CreateDriverDto): Driver {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  findAll(@Query() { pageNumber, pageSize }: PaginationQuery) {
    return this.driverService.getDrivers({ pageNumber, pageSize });
  }

  @Get(':id')
  findOne(@Param('id') id: number): Driver {
    return this.driverService.getDriver(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Driver {
    return this.driverService.updateDriver(id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.driverService.removeDriver(id);
  }
}
