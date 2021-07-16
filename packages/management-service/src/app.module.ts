import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './domain/driver/driver.module';
import { PrismaModule } from './framework/database/prisma.module';
import { VehicleService } from './domain/vehicle/vehicle.service';
import { VehicleModule } from './domain/vehicle/vehicle.module';

@Module({
  imports: [DriverModule, PrismaModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService, VehicleService],
})
export class AppModule {}
