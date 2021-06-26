import { Controller } from '@nestjs/common';
import { Payload, MessagePattern } from '@nestjs/microservices';

interface CarTrackingMessage {
  id: number;
  latitude: number;
  longitude: number;
}

@Controller('tracker')
export class TrackerController {
  @MessagePattern('car.track')
  // track(@Payload() message: CarTrackingMessage): any {
  public track(): any {
    const realm = 'Nest';
    const key = 'y key';
    const { latitude, longitude } = { latitude: 10, longitude: 13 };

    const items = [
      { longitude, latitude },
      { longitude, latitude },
    ];

    return {
      headers: {
        realm,
      },
      key,
      value: items,
    };
  }
}
