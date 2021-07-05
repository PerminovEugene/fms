import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TrackerModule } from './tracker/tracker.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleModule as TaskModule } from './schedule/schedule.module';
import { KafkaModule } from '@fms/microservice-core';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TaskModule,
    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['0.0.0.0:29092'],
      groupId: 'test-app-group',
    }),
    TrackerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
