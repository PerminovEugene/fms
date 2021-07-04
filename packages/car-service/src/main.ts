import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    // {
    //   name: 'HERO_SERVICE',
    //   transport: Transport.KAFKA,
    //   options: {
    //     client: {
    //       brokers: ['localhost:29092'],
    //     },
    //     consumer: {
    //       groupId: 'hero-consumer',
    //     },
    //   },
    // },
  );
  // await app.startAllMicroservicesAsync();
  await app.listenAsync();
}
bootstrap();
