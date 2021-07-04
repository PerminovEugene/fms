import { Module } from '@nestjs/common';
import { TrackerController } from '../tracker/tracker.controller';
import { TrackerModule } from '../tracker/tracker.module';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [TrackerModule, TrackerController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
