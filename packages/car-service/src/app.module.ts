import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackerModule } from './tracker/tracker.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleModule as TaskModule } from './schedule/schedule.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    TrackerModule,
    ScheduleModule.forRoot(),
    TaskModule,
    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['0.0.0.0:29092'],
      groupId: 'test-app-group',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
