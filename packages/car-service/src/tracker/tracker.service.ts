import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackerService {
  public async getCarState() {
    // TODO add dynamic data changing
    return {
      longitude: 1,
      latitude: 0,
      id: 1,
    };
  }
}
