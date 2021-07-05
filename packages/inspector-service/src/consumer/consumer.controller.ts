import { Controller } from '@nestjs/common';
import {
  SubscribeTo,
  KafkaPayload,
  SubscribeToFixedGroup,
} from '@fms/microservice-core';

@Controller('consumer')
export class ConsumerController {
  @SubscribeTo('car.state')
  helloSubscriber(payload: KafkaPayload) {
    console.log('[KAKFA-CONSUMER] Print message after receiving', payload);
  }

  @SubscribeToFixedGroup('car.state.topic')
  public helloSubscriberToFixedGroup(payload: KafkaPayload) {
    console.log(
      '[KAKFA-CONSUMER] Print message after receiving for fixed group',
      payload,
    );
  }

  @SubscribeTo('car.state')
  helloSubscriber2(payload: KafkaPayload) {
    console.log('[KAKFA-CONSUMER] Print message after receiving', payload);
  }
}
