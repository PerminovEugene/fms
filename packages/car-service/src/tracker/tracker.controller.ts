import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaService } from 'src/kafka/kafka.service';

interface CarTrackingMessage {
  id: number;
  latitude: number;
  longitude: number;
}

@Controller('tracker')
export class TrackerController {
  constructor(private readonly kafkaService: KafkaService) {}

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

    this.kafkaService.sendMessage('paterno', {
      messageId: '' + new Date().valueOf(),
      body: { value: 'hey swagiti swag' },
      messageType: 'Say.Hello',
      topicName: 'hello.topic',
    });
  }
}
