import { Injectable } from '@nestjs/common';
import {
  Pagination,
  PaginationQuery,
} from 'src/general/pagination/pagination.dto';
import { Driver, CreateDriverDto, UpdateDriverDto } from './driver.dto';

@Injectable()
export class DriverService {
  getDriver(id: number): Driver {
    return { id: 1, status: 'available' };
  }

  getDrivers(paginationQuery: PaginationQuery): Pagination<Driver> {
    return {
      items: [],
      pageNumber: 0,
      pageSize: 10,
      lastPageNumber: 0,
    };
  }

  createDriver(createDriverDto: CreateDriverDto): Driver {
    return { id: 1, status: 'available' };
  }

  updateDriver(id: number, updateDriverDto: UpdateDriverDto): Driver {
    return { id: 1, status: 'available' };
  }

  removeDriver(id: number) {
    return;
  }
}
