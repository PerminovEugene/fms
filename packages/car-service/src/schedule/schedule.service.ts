import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TrackerController } from '../tracker/tracker.controller';

@Injectable()
export class ScheduleService {
  constructor(private tracker: TrackerController) {}
  private readonly logger = new Logger(ScheduleService.name);

  @Cron('*/5 * * * * *')
  handleCron() {
    this.tracker.track();
    this.logger.debug('called every 5 seconds');
  }
}
