import { Module } from '@nestjs/common';
import { TrackerController } from './tracker.controller';
import { TrackerService } from './tracker.service';
// import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService, TrackerController],
  exports: [TrackerController],
  // exports: [TrackerController],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'HERO_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         brokers: ['localhost:29092'],
    //       },
    //       consumer: {
    //         groupId: 'hero-consumer',
    //       },
    //     },
    //   },
    // ]),
  ],
})
export class TrackerModule {}
