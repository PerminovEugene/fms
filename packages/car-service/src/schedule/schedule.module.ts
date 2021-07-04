import { Module } from '@nestjs/common';
import { TrackerModule } from '../tracker/tracker.module';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [TrackerModule],
  providers: [ScheduleService],
})
export class ScheduleModule {}
