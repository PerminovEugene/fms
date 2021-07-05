import { Controller } from '@nestjs/common';
import { KafkaService } from '@fms/microservice-core';
import { TrackerService } from './tracker.service';

// interface CarTrackingMessage {
//   id: number;
//   latitude: number;
//   longitude: number;
// }

@Controller('tracker')
export class TrackerController {
  constructor(
    private readonly trackerService: TrackerService,
    private readonly kafkaService: KafkaService,
  ) {}

  public async track(): Promise<void> {
    const carState = await this.trackerService.getCarState();

    this.kafkaService.sendMessage('car.state', {
      messageId: '' + new Date().valueOf(),
      body: { value: carState },
      messageType: 'Car.State',
      topicName: 'car.state.topic',
    });
  }
}
