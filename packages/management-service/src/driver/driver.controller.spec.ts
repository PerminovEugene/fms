import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../general/database/prisma.module';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';

describe('DriverController', () => {
  let controller: DriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule], //TODO: CHANGE TO MOCK
      controllers: [DriverController],
      providers: [DriverService],
    }).compile();

    controller = module.get<DriverController>(DriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
