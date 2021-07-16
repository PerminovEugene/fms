import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { PrismaModule } from '../../framework/database/prisma.module';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  imports: [PrismaModule],
})
export class VehicleModule {}
