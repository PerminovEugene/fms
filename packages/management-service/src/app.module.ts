import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { PrismaModule } from './general/database/prisma.module';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [DriverModule, PrismaModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService, VehicleService],
})
export class AppModule {}
