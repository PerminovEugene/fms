import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from '@fms/microservice-core';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [
    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['0.0.0.0:29092'],
      groupId: 'test-app-group',
    }),
    ConsumerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
